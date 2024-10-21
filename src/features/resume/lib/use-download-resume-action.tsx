import { MdDownload } from "react-icons/md";
import { ActionLink } from "@/shared/config/actions";

interface UseDownloadResumeActionParams {
  isFullTitle?: boolean;
}

export const useDownloadResumeAction = (params?: UseDownloadResumeActionParams): ActionLink => {
  const { isFullTitle = true } = params || {};

  return {
    title: isFullTitle ? "Download Resume" : "Resume",
    type: "link",
    href: "/docs/Resume_Oleksandr_Drobot_FE_SE.pdf",
    isDownload: true,
    leftIcon: <MdDownload />,
  };
};
