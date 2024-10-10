import { Button, ButtonProps, Flex } from "@chakra-ui/react";
import { Action } from "@/shared/config";

interface HeaderActionsProps {
  actions: Action[];
  size?: ButtonProps["size"];
}

export function HeaderActions(props: HeaderActionsProps) {
  const { actions, size = "sm" } = props;

  return (
    <Flex>
      {actions.map(({ title, icon, onClick }) => (
        <Button
          key={title}
          size={size}
          variant="outline"
          leftIcon={icon}
          onClick={onClick}
        >
          {title}
        </Button>
      ))}
    </Flex>
  );
}
