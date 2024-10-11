"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { NavItem, Routes } from "@/shared/config";

interface UseNavItemsReturnValues {
  navItems: NavItem[];
}

export const useNavItems = (): UseNavItemsReturnValues => {
  const pathname = usePathname();

  const navItems = useMemo<NavItem[]>(() => (
    [
      { title: "Home", href: Routes.home },
      { title: "About", href: Routes.about },
      { title: "Projects", href: Routes.projects },
    ].map((navItem) => ({
      ...navItem,
      isActive: pathname === navItem.href,
    }))
  ), [pathname]);

  return { navItems };
};
