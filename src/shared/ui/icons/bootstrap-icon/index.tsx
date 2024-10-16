import { clsx } from "clsx";
import { IconBaseProps } from "react-icons";
import { FaBootstrap } from "react-icons/fa6";

export function BootstrapIcon(props: IconBaseProps) {
  return (
    <FaBootstrap {...props} className={clsx("text-violet-600", props.className)} />
  );
}
