import { clsx } from "clsx";
import { IconBaseProps } from "react-icons";
import { BiLogoVuejs } from "react-icons/bi";

export function VueIcon(props: IconBaseProps) {
  return (
    <BiLogoVuejs {...props} className={clsx("text-emerald-500", props.className)} />
  );
}
