import { Action } from "@/shared/config/actions";
import { ActionButton } from "@/shared/ui";

interface ActionsButtonsProps {
  actions: Action[];
}

export function ActionsButtons(props: ActionsButtonsProps) {
  const { actions } = props;

  return (
    <div className="actions-buttons">
      {actions.map((action) => (
        <ActionButton
          key={action.title}
          size="sm"
          colorScheme="yellow"
          {...action}
        />
      ))}
    </div>
  );
}
