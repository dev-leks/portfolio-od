import { clsx } from "clsx";
import { IconBaseProps } from "react-icons";
import { BiLogoNodejs } from "react-icons/bi";

export function NodeJsIcon(props: IconBaseProps) {
  return (
    <BiLogoNodejs {...props} className={clsx("text-lime-600", props.className)} />
  );
}
