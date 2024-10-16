import { clsx } from "clsx";
import { IconBaseProps } from "react-icons";
import { BiLogoTailwindCss } from "react-icons/bi";

export function TailwindCSSIcon(props: IconBaseProps) {
  return (
    <BiLogoTailwindCss {...props} className={clsx("text-sky-400", props.className)} />
  );
}
