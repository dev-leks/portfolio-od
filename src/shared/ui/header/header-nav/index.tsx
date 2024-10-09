import { PropsWithChildren } from "react";
import { HeaderLogo } from "../header-logo";

export function HeaderNav(props: PropsWithChildren) {
  const { children } = props;

  return (
    <nav className="header-nav">
      <div className="header-nav-logo">
        <HeaderLogo />
      </div>
      {children}
    </nav>
  );
}
