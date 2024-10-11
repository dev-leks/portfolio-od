"use client";

import { useNavItems } from "@/features/navigation";
import { useDownloadResumeAction } from "@/features/resume";
import { Header } from "@/shared/ui";

export function AppHeader() {
  const { navItems } = useNavItems();

  const downloadResumeAction = useDownloadResumeAction({ isFullTitle: false });

  const actions = [downloadResumeAction];

  return (
    <Header navItems={navItems} actions={actions} />
  );
}