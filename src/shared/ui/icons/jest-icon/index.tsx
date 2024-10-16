import { clsx } from "clsx";
import { IconBaseProps } from "react-icons";
import { SiJest } from "react-icons/si";

export function JestIcon(props: IconBaseProps) {
  return (
    <SiJest {...props} className={clsx("text-orange-700", props.className)} />
  );
}
