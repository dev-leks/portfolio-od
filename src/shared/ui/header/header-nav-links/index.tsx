import Link from "next/link";
import { NavItem } from "@/shared/config";

interface HeaderNavLinksProps {
  items: NavItem[];
  classNameSuffix?: string;
  onLinkClick?(): void;
}

export function HeaderNavLinks(props: HeaderNavLinksProps) {
  const { items, classNameSuffix = "", onLinkClick } = props;

  return (
    <div className={`header${classNameSuffix}-nav-links`}>
      {items.map(({ title, href, isActive }) => (
        <Link
          key={title}
          href={href}
          className={`header${classNameSuffix}-nav-link ${isActive ? "active" : ""}`}
          onClick={onLinkClick}
        >
          {title}
        </Link>
      ))}
    </div>
  );
}
