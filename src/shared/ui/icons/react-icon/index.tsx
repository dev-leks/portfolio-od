import { clsx } from "clsx";
import { IconBaseProps } from "react-icons";
import { FaReact } from "react-icons/fa6";

export function ReactIcon(props: IconBaseProps) {
  return (
    <FaReact {...props} className={clsx("text-sky-600", props.className)} />
  );
}
