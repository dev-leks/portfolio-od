"use client";

import { useDisclosure } from "@chakra-ui/react";
import { useEffect } from "react";
import { Action } from "@/shared/config/actions";
import { NavItem } from "@/shared/config/navigation";
import { useIsTablet } from "@/shared/lib/screen";
import { LogoLink, NavLinks } from "@/shared/ui";
import { ActionsButtons } from "./actions-buttons";
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

  const { isTablet } = useIsTablet();

  useEffect(() => {
    if (!isTablet && isSidebarOpen) {
      closeSidebar();
    }
  }, [isTablet, isSidebarOpen, closeSidebar]);

  return (
    <header className="header">
      <nav className="header-nav">
        <LogoLink />
        {!isTablet ? (
          <>
            {!!navItems.length && <NavLinks items={navItems} />}
            {!!actions.length && <ActionsButtons actions={actions} />}
          </>
        ) : (
          <HeaderBurger onClick={openSidebar} />
        )}
      </nav>
      {isTablet && (
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
