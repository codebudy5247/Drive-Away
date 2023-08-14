export type NavbarItem = {
  name: string;
  icon?: string;
  href?: string;
  route?: string;
  collapse?: NavbarItem[];
};

export type Action = {
  type: "external" | "internal";
  route: string;
  color?:
    | "primary"
    | "secondary"
    | "info"
    | "success"
    | "warning"
    | "error"
    | "dark"
    | "light"
    | "default"
    | "white";
  label: string;
};

export interface DefaultNavbarProps {
  brand?: string;
  routes: NavbarItem[];
  transparent?: boolean;
  light?: boolean;
  action?: boolean | Action;
  sticky?: boolean;
  relative?: boolean;
  center?: boolean;
}
