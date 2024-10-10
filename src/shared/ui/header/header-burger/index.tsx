import { IconButton } from "@chakra-ui/react";
import { MdMenu } from "react-icons/md";

interface HeaderBurgerProps {
  onClick(): void;
}

export function HeaderBurger(props: HeaderBurgerProps) {
  const { onClick } = props;

  return (
    <IconButton
      aria-label="Open main menu"
      variant="ghost"
      icon={<MdMenu size={28} />}
      onClick={onClick}
    />
  );
}
