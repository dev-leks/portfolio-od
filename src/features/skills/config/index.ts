import { ReactElement } from "react";
import { IconBaseProps } from "react-icons";

export interface Skill {
  title: string;
  icon: (props: IconBaseProps) => ReactElement;
}
