import { Flex, useDisclosure } from "@chakra-ui/react";
import { useEffect } from "react";
import { Action, NavItem } from "@/shared/config";
import { useIsMobile } from "@/shared/lib/screen";
import { LogoLink, NavLinks } from "@/shared/ui";
import { HeaderActions } from "./header-actions";
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
            {!!navItems.length && (
              <Flex columnGap="12" className="header-nav-links">
                <NavLinks items={navItems} />
              </Flex>
            )}
            {!!actions.length && <HeaderActions actions={actions} />}
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
