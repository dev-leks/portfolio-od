import {
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay, Flex
} from "@chakra-ui/react";
import { Action, NavItem } from "@/shared/config";
import { LogoLink, NavLinks } from "@/shared/ui";
import { HeaderActions } from "../header-actions";

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
      <DrawerContent>
        <DrawerCloseButton size="lg" className="bg-gray-800" />
        <DrawerHeader>
          <LogoLink onClick={onClose} />
        </DrawerHeader>
        <Divider />
        <DrawerBody className="py-6">
          <Flex flexDirection="column" gap="2">
            <NavLinks items={navItems} onLinkClick={onClose} />
          </Flex>
        </DrawerBody>
        <Divider />
        <DrawerFooter justifyContent="center">
          <HeaderActions actions={actions} size="md" />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
