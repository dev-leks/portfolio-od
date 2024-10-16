import { clsx } from "clsx";
import { IconBaseProps } from "react-icons";
import { SiNestjs } from "react-icons/si";

export function NestJsIcon(props: IconBaseProps) {
  return (
    <SiNestjs {...props} className={clsx("text-rose-600", props.className)} />
  );
}
