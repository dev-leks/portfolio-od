import { clsx } from "clsx";
import { IconBaseProps } from "react-icons";
import { SiNextdotjs } from "react-icons/si";

export function NextJsIcon(props: IconBaseProps) {
  return (
    <SiNextdotjs {...props} className={clsx("text-gray-950", props.className)} />
  );
}
