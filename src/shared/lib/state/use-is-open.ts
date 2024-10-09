import { useState } from "react";

interface UseIsOpenReturn {
  isOpen: boolean;
  open(): void;
  close(): void;
  toggle(): void;
}

export const useIsOpen = (initialValue = false): UseIsOpenReturn => {
  const [isOpen, setIsOpen] = useState(initialValue);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  const toggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  return {
    isOpen,
    open,
    close,
    toggle,
  };
};
