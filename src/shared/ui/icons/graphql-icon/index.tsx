import { clsx } from "clsx";
import { IconBaseProps } from "react-icons";
import { BiLogoGraphql } from "react-icons/bi";

export function GraphQLIcon(props: IconBaseProps) {
  return (
    <BiLogoGraphql {...props} className={clsx("text-pink-500", props.className)} />
  );
}
