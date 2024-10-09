export const Routes = {
  home: "/",
  about: "/about",
  projects: "/projects",
};

export interface NavItem {
  title: string;
  href: typeof Routes[keyof typeof Routes];
  isActive?: boolean;
}
