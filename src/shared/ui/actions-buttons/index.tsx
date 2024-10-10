import { Button, Flex } from "@chakra-ui/react";
import { Action } from "@/shared/config";

interface ActionsButtonsProps {
  actions: Action[];
}

export function ActionsButtons(props: ActionsButtonsProps) {
  const { actions } = props;

  return (
    <Flex className="actions-buttons">
      {actions.map(({ title, icon, onClick }) => (
        <Button
          key={title}
          size="sm"
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
