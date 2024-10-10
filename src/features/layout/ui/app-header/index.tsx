"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { MdDownload } from "react-icons/md";
import { Action, NavItem, Routes } from "@/shared/config";
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

  const actions: Action[] = useMemo<Action[]>(() => (
    [
      { title: "Resume", icon: <MdDownload />, onClick: () => null },
    ]
  ), []);

  return (
    <Header navItems={navItems} actions={actions} />
  );
}