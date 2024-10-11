import { ReactElement } from "react";

export const Routes = {
  home: "/",
  about: "/about",
  projects: "/projects",
};

export interface LinkItem {
  title: string;
  href: string;
  icon?: ReactElement;
}

export interface NavItem extends LinkItem {
  isActive?: boolean;
}
