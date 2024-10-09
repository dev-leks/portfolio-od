import { IconButton } from "@chakra-ui/react";
import { MdClose } from "react-icons/md";
import { HeaderLogo } from "../../header-logo";

interface HeaderSidebarTopProps {
  onClose(): void;
}

export function HeaderSidebarTop(props: HeaderSidebarTopProps) {
  const { onClose } = props;

  return (
    <div className="header-sidebar-top">
      <HeaderLogo />
      <IconButton
        aria-label="Close menu"
        variant="ghost"
        icon={<MdClose size={24} />}
        onClick={onClose}
      />
    </div>
  );
}
