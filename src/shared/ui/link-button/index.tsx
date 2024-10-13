import { Link as NextLink } from "@chakra-ui/next-js";
import { Button, ButtonProps, LinkBox, LinkOverlay, LinkProps } from "@chakra-ui/react";

interface LinkButtonProps extends ButtonProps {
  href: string;
  isDownload?: boolean;
  target?: LinkProps["target"];
}

export function LinkButton(props: LinkButtonProps) {
  const { href, isDownload, target, ...otherProps } = props;

  return (
    <LinkBox className="link-button-box">
      <LinkOverlay
        as={NextLink}
        download={isDownload}
        href={href}
        target={isDownload ? "_blank" : target}
      >
        <Button {...otherProps} />
      </LinkOverlay>
    </LinkBox>
  );
}
