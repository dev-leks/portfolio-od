"use client";

import { ButtonGroup, IconButton, Link } from "@chakra-ui/react";
import { useDownloadResumeAction } from "@/features/resume";
import { useSocialLinks } from "@/features/socials";
import { ActionButton } from "@/shared/ui";

export function SocialActions() {
  const downloadResumeAction = useDownloadResumeAction();

  const { socialLinks } = useSocialLinks();

  const actions = [downloadResumeAction];

  return (
    <ButtonGroup spacing="3">
      {actions.map((action) => (
        <ActionButton
          key={action.title}
          {...action}
          leftIcon={undefined}
          colorScheme="yellow"
        />
      ))}
      {socialLinks.map(({ title, href, icon }) => (
        <Link key={title} href={href} target="_blank">
          <IconButton aria-label={title} icon={icon} />
        </Link>
      ))}
    </ButtonGroup>
  );
}
