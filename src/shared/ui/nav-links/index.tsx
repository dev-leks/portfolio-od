import { Link } from "@chakra-ui/next-js";
import { NavItem } from "@/shared/config";
import { useIsMobile } from "@/shared/lib/screen";
import "./styles.scss";

interface NavLinksProps {
  items: NavItem[];
  onLinkClick?(): void;
}

export function NavLinks(props: NavLinksProps) {
  const { items, onLinkClick } = props;

  const { isMobile } = useIsMobile();

  return (
    <>
      {items.map(({ title, href, isActive }) => (
        <Link
          key={title}
          href={href}
          className={`${isMobile ? "mobile-nav-link" : "nav-link"} ${isActive ? "active" : ""}`}
          onClick={onLinkClick}
        >
          {title}
        </Link>
      ))}
    </>
  );
}
