import { clsx } from "clsx";
import { IconBaseProps } from "react-icons";
import { BiLogoJavascript } from "react-icons/bi";

export function JsIcon(props: IconBaseProps) {
  return (
    <BiLogoJavascript {...props} className={clsx("text-yellow-400", props.className)} />
  );
}
