import { clsx } from "clsx";
import { IconBaseProps } from "react-icons";
import { SiMysql } from "react-icons/si";

export function MySQLIcon(props: IconBaseProps) {
  return (
    <SiMysql {...props} className={clsx("text-sky-600", props.className)} />
  );
}
