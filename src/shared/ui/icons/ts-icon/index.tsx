import { clsx } from "clsx";
import { IconBaseProps } from "react-icons";
import { BiLogoTypescript } from "react-icons/bi";

export function TsIcon(props: IconBaseProps) {
  return (
    <BiLogoTypescript {...props} className={clsx("text-blue-500", props.className)} />
  );
}
