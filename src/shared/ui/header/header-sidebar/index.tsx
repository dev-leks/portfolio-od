import {
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import { Action, NavItem } from "@/shared/config";
import { ActionsButtons, LogoLink, NavLinks } from "@/shared/ui";
import "./styles.scss";

interface HeaderSidebarProps {
  isOpen: boolean;
  navItems: NavItem[];
  actions: Action[];
  onClose(): void;
}

export function HeaderSidebar(props: HeaderSidebarProps) {
  const { isOpen, navItems, actions, onClose } = props;

  return (
    <Drawer
      isOpen={isOpen}
      autoFocus={false}
      returnFocusOnClose={false}
      onClose={onClose}
    >
      <DrawerOverlay />
      <DrawerContent className="header-sidebar">
        <DrawerCloseButton size="lg" />
        <DrawerHeader>
          <LogoLink onClick={onClose} />
        </DrawerHeader>
        <DrawerBody py="6">
          <NavLinks items={navItems} mode="button" onLinkClick={onClose} />
        </DrawerBody>
        <Divider />
        <DrawerFooter justifyContent="center">
          <ActionsButtons actions={actions} />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
