import { IconProps } from "@tabler/icons-react";
import {
  IconPlus,
  IconPencil,
  IconTrash,
  IconUserCircle,
  IconLoader2,
} from "@tabler/icons-react";

export const Icons = {
  add: (props: IconProps) => <IconPlus {...props} />,
  edit: (props: IconProps) => <IconPencil {...props} />,
  delete: (props: IconProps) => <IconTrash {...props} />,
  contact: (props: IconProps) => <IconUserCircle {...props} />,
  spinner: (props: IconProps) => <IconLoader2 {...props} />,
};
