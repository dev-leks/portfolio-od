import { useMediaQuery } from "@chakra-ui/react";
import { ReactNode, useEffect } from "react";
import { NavItem } from "@/shared/config";
import { ScreenSizes } from "@/shared/config/screen";
import { useIsOpen } from "@/shared/lib/state";
import { HeaderBurger } from "./header-burger";
import { HeaderNav } from "./header-nav";
import { HeaderNavLinks } from "./header-nav-links";
import { HeaderSidebar } from "./header-sidebar";
import "./styles.scss";

interface HeaderProps {
  navItems?: NavItem[];
  extraContent?: ReactNode;
}

export function Header(props: HeaderProps) {
  const { navItems = [], extraContent } = props;

  const { isOpen: isSidebarOpen, open: openSidebar, close: closeSidebar } = useIsOpen(false);

  const [isMobile] = useMediaQuery(`(max-width: ${ScreenSizes.lg - 1}px)`);

  useEffect(() => {
    if (!isMobile && isSidebarOpen) {
      closeSidebar();
    }
  }, [closeSidebar, isMobile, isSidebarOpen]);

  return (
    <header className="header">
      <HeaderNav>
        {!isMobile ? (
          <>
            <HeaderNavLinks items={navItems}/>
            {extraContent && (
              <div className="header-nav-end">
                {extraContent}
              </div>
            )}
          </>
        ) : (
          <HeaderBurger onClick={openSidebar} />
        )}
      </HeaderNav>
      {isMobile && (
        <HeaderSidebar isOpen={isSidebarOpen} navItems={navItems} onClose={closeSidebar}>
          {extraContent}
        </HeaderSidebar>
      )}
    </header>
  );
}
