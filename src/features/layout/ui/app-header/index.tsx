"use client";

import { Button } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { MdDownload } from "react-icons/md";
import { NavItem, Routes } from "@/shared/config";
import { Header } from "@/shared/ui";

export function AppHeader() {
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

  return (
    <Header
      navItems={navItems}
      extraContent={(
        <Button size="sm" variant="outline" leftIcon={<MdDownload/>}>Resume</Button>
      )}
    />
  );
}