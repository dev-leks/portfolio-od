"use client";

import { useDisclosure } from "@chakra-ui/react";
import { useEffect } from "react";
import { Action, NavItem } from "@/shared/config";
import { useIsMobile } from "@/shared/lib/screen";
import { ActionsButtons, LogoLink, NavLinks } from "@/shared/ui";
import { HeaderBurger } from "./header-burger";
import { HeaderSidebar } from "./header-sidebar";
import "./styles.scss";

interface HeaderProps {
  navItems?: NavItem[];
  actions?: Action[];
}

export function Header(props: HeaderProps) {
  const { navItems = [], actions = [] } = props;

  const { isOpen: isSidebarOpen, onOpen: openSidebar, onClose: closeSidebar } = useDisclosure();

  const { isMobile } = useIsMobile();

  useEffect(() => {
    if (!isMobile && isSidebarOpen) {
      closeSidebar();
    }
  }, [isMobile, isSidebarOpen, closeSidebar]);

  return (
    <header className="header">
      <nav className="header-nav">
        <LogoLink />
        {!isMobile ? (
          <>
            {!!navItems.length && <NavLinks items={navItems} />}
            {!!actions.length && <ActionsButtons actions={actions} />}
          </>
        ) : (
          <HeaderBurger onClick={openSidebar} />
        )}
      </nav>
      {isMobile && (
        <HeaderSidebar
          isOpen={isSidebarOpen}
          navItems={navItems}
          actions={actions}
          onClose={closeSidebar}
        />
      )}
    </header>
  );
}
