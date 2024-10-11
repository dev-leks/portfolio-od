import { MdDownload } from "react-icons/md";
import { Action } from "@/shared/config";

interface UseDownloadResumeActionParams {
  isFullTitle?: boolean;
}

export const useDownloadResumeAction = (params?: UseDownloadResumeActionParams): Action => {
  const { isFullTitle = true } = params || {};

  return {
    title: isFullTitle ? "Download Resume" : "Resume",
    icon: <MdDownload />,
    onClick: () => null,
  };
};
