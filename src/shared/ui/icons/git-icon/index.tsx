import { clsx } from "clsx";
import { IconBaseProps } from "react-icons";
import { BiLogoGit } from "react-icons/bi";

export function GitIcon(props: IconBaseProps) {
  return (
    <BiLogoGit {...props} className={clsx("text-orange-600", props.className)} />
  );
}
