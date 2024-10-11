import { useMemo } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { LinkItem } from "@/shared/config";

interface UseSocialLinksReturnValues {
  socialLinks: LinkItem[];
}

export const useSocialLinks = (): UseSocialLinksReturnValues => {
  const socialLinks = useMemo<LinkItem[]>(() => [
    { title: "LinkedIn", href: "https://www.linkedin.com/in/oleksandr-drobott/", icon: <FaLinkedinIn /> },
    { title: "GitHub", href: "https://github.com/dev-leks", icon: <FaGithub /> },
  ], []);

  return { socialLinks };
};
