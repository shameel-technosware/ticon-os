import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Helper function to find referrer by username or email
export async function findReferrer(referralCode: string) {
    const { data, error } = await supabase
        .from('profiles')
        .select('id')
        .or(`username.eq.${referralCode},email.eq.${referralCode}`)
        .single();

    if (error) {
        return null;
    }

    return data;
}

// Helper function to update referrer_id
export async function updateReferrer(userId: string, referrerId: string) {
    const { error } = await supabase
        .from('profiles')
        .update({ referrer_id: referrerId })
        .eq('id', userId);

    return { error };
}

// Helper function to sign up
export async function signUp(email: string, password: string, fullName: string) {
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                full_name: fullName,
            },
        },
    });

    return { data, error };
}

// Helper function to sign in
export async function signIn(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    return { data, error };
}

// Helper function to sign out
export async function signOut() {
    const { error } = await supabase.auth.signOut();
    return { error };
}

// Helper function to get current user
export async function getCurrentUser() {
    const { data: { user }, error } = await supabase.auth.getUser();
    return { user, error };
}
