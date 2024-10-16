import { clsx } from "clsx";
import { IconBaseProps } from "react-icons";
import { FaSass } from "react-icons/fa6";

export function SassIcon(props: IconBaseProps) {
  return (
    <FaSass {...props} className={clsx("text-rose-400", props.className)} />
  );
}
