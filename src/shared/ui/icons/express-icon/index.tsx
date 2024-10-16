import { clsx } from "clsx";
import { IconBaseProps } from "react-icons";
import { SiExpress } from "react-icons/si";

export function ExpressIcon(props: IconBaseProps) {
  return (
    <SiExpress {...props} className={clsx("text-gray-950", props.className)} />
  );
}
