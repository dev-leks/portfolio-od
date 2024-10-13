import { ReactElement } from "react";

export type ActionType = "link" | "button";

interface ActionBase {
  title: string;
  type: ActionType;
  leftIcon?: ReactElement;
}

export interface ActionLink extends ActionBase {
  type: "link";
  href: string;
  isDownload?: boolean;
}

export interface ActionButton extends ActionBase {
  type: "button";
  onClick(): void;
}

export type Action = ActionLink | ActionButton;
