import Link from "next/link";
import { Routes } from "@/shared/config";

export function HeaderLogo() {
  return (
    <Link href={Routes.home} className="header-logo">
      OD.
    </Link>
  );
}
