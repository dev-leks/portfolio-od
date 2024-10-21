import { Link } from "@chakra-ui/next-js";
import { Routes } from "@/shared/config/navigation";
import "./styles.scss";

interface LogoLinkProps {
  onClick?(): void;
}

export function LogoLink(props: LogoLinkProps) {
  const { onClick } = props;

  return (
    <Link href={Routes.home} className="header-logo" onClick={onClick}>
      OD.
    </Link>
  );
}
