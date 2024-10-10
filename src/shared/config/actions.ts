import { ReactElement } from "react";

export interface Action {
  title: string;
  icon?: ReactElement;
  onClick(): void;
}
