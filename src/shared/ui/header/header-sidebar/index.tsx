import { useOutsideClick } from "@chakra-ui/react";
import { PropsWithChildren, useRef } from "react";
import { NavItem } from "@/shared/config";
import { HeaderNavLinks } from "../header-nav-links";
import { HeaderSidebarTop } from "./header-sidebar-top";

interface HeaderSidebarProps extends PropsWithChildren {
  isOpen: boolean;
  navItems: NavItem[];
  onClose(): void;
}

export function HeaderSidebar(props: HeaderSidebarProps) {
  const { isOpen, navItems, children, onClose } = props;

  const sidebarRef = useRef<HTMLDivElement>(null);

  useOutsideClick({
    ref: sidebarRef,
    handler: onClose,
  });

  return (
    <div role="dialog" aria-modal="true">
      <div className={`header-sidebar-placeholder ${isOpen ? "open" : ""}`} />
      <div className={`header-sidebar ${isOpen ? "open" : ""} `} ref={sidebarRef}>
        <HeaderSidebarTop onClose={onClose} />
        <div className="header-sidebar-content">
          <div className="py-6">
            <HeaderNavLinks items={navItems} classNameSuffix="-sidebar" onLinkClick={onClose} />
          </div>
          <div className="py-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
