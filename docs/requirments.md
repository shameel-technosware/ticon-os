Here is the implementation roadmap in a `.md` format. You can save this file as `IMPLEMENTATION_PLAN.md` in your project root to keep track of the logic.
 
---

````markdown
# Application Implementation Plan

**Stack:** Next.js (App Router), Supabase (Auth + DB), TailwindCSS.

## 1. Authentication & Profile Setup

**Goal:** Users sign up, and a linked Profile is automatically created to track their lineage (who referred them).

### Backend Logic

- **Trigger:** We already added the `handle_new_user` trigger in SQL. This ensures that as soon as `supabase.auth.signUp()` succeeds, a row exists in `public.profiles`.

### Frontend Approach

1.  **Sign Up Page:**
    - Input: Email, Password, Full Name, **Referral Code** (Optional).
    - _Logic:_ The "Referral Code" could be the `username` or `email` of the person inviting them.
    - _Step 1:_ Search DB for the referrer's ID based on the input code.
    - _Step 2:_ Call `supabase.auth.signUp()`.
    - _Step 3 (Post-Signup):_ If a referrer existed, update the new user's profile:
      ```javascript
      await supabase
        .from("profiles")
        .update({ referrer_id: referrerProfileId })
        .eq("id", newUserId);
      ```

---

## 2. Dynamic RBAC (Roles & Features)

**Goal:** Admin creates roles and toggles features (permissions) on/off.

### Database Concept

- **Roles:** Groups of users (e.g., 'Admin', 'Manager').
- **Features:** Specific capabilities (e.g., 'view_tree', 'delete_contact').
- **Role_Features:** The link between them.

### Admin Dashboard UI (`/admin/roles`)

1.  **Create Role:** A simple form to `INSERT INTO roles (name)`.
2.  **Matrix View:**
    - Fetch all roles and all features.
    - Render a table where Rows = Roles, Columns = Features.
    - Cells contain **Toggle Switches**.

### Logic: Toggling a Feature

When the Admin clicks a toggle for "Manager" -> "Delete Contact":

- **If ON:** `INSERT INTO role_features (role_id, feature_id) ...`
- **If OFF:** `DELETE FROM role_features WHERE role_id=... AND feature_id=...`

### Frontend Usage (The Protection Layer)

Create a helper function or Hook `usePermission(featureCode)`:

```javascript
// Example Hook Logic
const usePermission = (featureCode) => {
  const { user } = useUser();
  // Fetch user's role -> check role_features -> return true/false
  return hasAccess;
};

// Usage in Component
if (!usePermission("view_tree")) return <AccessDenied />;
```
````

---

## 3. The Referral Tree Visualization

**Goal:** Admin sees a visual hierarchy of who invited whom.

### Backend Data

- Use the SQL View we created: `SELECT * FROM user_tree_view`.
- This returns a flat list with `path_text` (e.g., "Admin > John > Sarah").

### Frontend UI (`/admin/tree`)

1.  **Library:** Use `react-d3-tree` or `react-org-chart`.
2.  **Data Transformation:**
    - The SQL returns a flat array. You need a recursive JavaScript function to convert this flat array into a nested JSON object required by tree libraries.
    - _Structure:_ `{ name: 'Admin', children: [ { name: 'John', children: [...] } ] }`

---

## 4. Contact Management (Address Book)

**Goal:** Users add external contacts (Leads) and tag them.

### UI Approach

1.  **Add Contact Modal:**
    - Inputs: Name, Phone, Email, Notes.
    - **Tags Dropdown:** Fetch `SELECT * FROM tags`. Allow multi-select.

### Logic: "Add Contact"

This requires two steps (Transaction recommended):

1.  **Insert Contact:**
    ```javascript
    const { data: contact } = await supabase
      .from("contacts")
      .insert({ ...form, created_by: user.id })
      .select()
      .single();
    ```
2.  **Link Tags:**
    - Loop through selected tags and insert into `contact_tags`:
    ```javascript
    const tagInserts = selectedTagIds.map((tagId) => ({
      contact_id: contact.id,
      tag_id: tagId,
    }));
    await supabase.from("contact_tags").insert(tagInserts);
    ```

---

## 5. Projects & Timeline History

**Goal:** A project created by Admin can be accepted by a user, then closed. We need a log of this.

### The "Project Card" Component

Display the project. Show buttons based on status:

- **Pending:** Show "Accept" button.
- **In Progress (assigned to me):** Show "Close" button.

### Logic: Handling State Changes

We need to update the _Project_ and write to _History_ simultaneously.

#### Scenario: User Accepts a Project

Create a Supabase function (RPC) or handle on client:

**Option A: Client-side (Easier to start)**

1.  **Update Project:**
    ```javascript
    await supabase
      .from("projects")
      .update({ status: "in_progress", assigned_to: userId })
      .eq("id", projectId);
    ```
2.  **Write History:**
    ```javascript
    await supabase.from("project_history").insert({
      project_id: projectId,
      user_id: userId,
      action: "accepted",
      note: "User accepted via dashboard",
    });
    ```

### UI: The Timeline View

To show "Who accepted and who closed":

1.  Fetch history:
    ```javascript
    supabase
      .from("project_history")
      .select("*, profiles(full_name)")
      .eq("project_id", projectId)
      .order("created_at", { ascending: true });
    ```
2.  **Render:** Map through this array to show a vertical timeline list.
    - _10:00 AM_ - Project Created (Admin)
    - _10:05 AM_ - Accepted by **John Doe**
    - _02:00 PM_ - Closed by **John Doe**

---

## 6. Summary of Supabase Tables

1.  `profiles`: Users (Employees). Linked to Auth. Contains `referrer_id`.
2.  `roles`: "Admin", "User".
3.  `features`: "view_tree", "edit_contacts".
4.  `role_features`: Permissions matrix.
5.  `contacts`: External people (Leads).
6.  `tags` & `contact_tags`: Tagging system.
7.  `projects`: Main task table.
8.  `project_history`: The audit log/timeline.

```

```
