import { Link } from "@chakra-ui/next-js";
import { clsx } from "clsx";
import { NavItem } from "@/shared/config/navigation";
import "./styles.scss";

type NavLinksMode = "link" | "button";

interface NavLinksProps {
  items: NavItem[];
  mode?: NavLinksMode;
  onLinkClick?(): void;
}

export function NavLinks(props: NavLinksProps) {
  const { items, mode = "link", onLinkClick } = props;

  return (
    <div className="nav-links">
      {items.map(({ title, href, isActive }) => (
        <Link
          key={title}
          href={href}
          className={clsx({
            "nav-link": mode === "link",
            "nav-button-link": mode === "button",
            "active": isActive,
          })}
          onClick={onLinkClick}
        >
          {title}
        </Link>
      ))}
    </div>
  );
}
