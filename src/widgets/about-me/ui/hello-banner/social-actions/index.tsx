"use client";

import { Button, ButtonGroup, IconButton, Link } from "@chakra-ui/react";
import { useDownloadResumeAction } from "@/features/resume";
import { useSocialLinks } from "@/features/socials";

export function SocialActions() {
  const downloadResumeAction = useDownloadResumeAction();

  const { socialLinks } = useSocialLinks();

  const actions = [downloadResumeAction];

  return (
    <ButtonGroup spacing="3">
      {actions.map(({ title, onClick }) => (
        <Button key={title} colorScheme="yellow" onClick={onClick}>
          {title}
        </Button>
      ))}
      {socialLinks.map(({ title, href, icon }) => (
        <Link key={title} href={href} target="_blank">
          <IconButton aria-label={title} icon={icon} />
        </Link>
      ))}
    </ButtonGroup>
  );
}
