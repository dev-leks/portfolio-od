import { Button, ButtonProps } from "@chakra-ui/react";
import { Action } from "@/shared/config/actions";
import { LinkButton } from "@/shared/ui";

type ActionButtonProps = Omit<ButtonProps, "type"> & Action;

export function ActionButton(props: ActionButtonProps) {
  const { type, title, ...otherProps } = props;

  if (type === "link") {
    const { href, isDownload } = props;

    return (
      <LinkButton href={href} isDownload={isDownload} {...otherProps}>
        {title}
      </LinkButton>
    );
  }

  const { onClick } = props;

  return (
    <Button onClick={onClick} {...otherProps}>
      {title}
    </Button>
  );
}