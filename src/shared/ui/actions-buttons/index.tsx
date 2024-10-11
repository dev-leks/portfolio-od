import { Button } from "@chakra-ui/react";
import { Action } from "@/shared/config";

interface ActionsButtonsProps {
  actions: Action[];
}

export function ActionsButtons(props: ActionsButtonsProps) {
  const { actions } = props;

  return (
    <div className="actions-buttons">
      {actions.map(({ title, icon, onClick }) => (
        <Button
          key={title}
          size="sm"
          colorScheme="yellow"
          leftIcon={icon}
          onClick={onClick}
        >
          {title}
        </Button>
      ))}
    </div>
  );
}
