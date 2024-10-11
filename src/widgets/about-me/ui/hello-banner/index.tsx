import { Text } from "@chakra-ui/react";
import { BannerImage, HeadingGradient } from "@/shared/ui";
import { JobTitles } from "./job-titles";
import { SocialActions } from "./social-actions";
import "./styles.scss";

export function HelloBanner() {
  return (
    <div className="hello-banner">
      <div className="hello-banner-row">
        <JobTitles />
        <HeadingGradient>
          Hello, I&#39;m<br />Oleksandr Drobot
        </HeadingGradient>
        <Text>
          I&#39;m Frontend Software Engineer with 6 years of experience building scalable applications
          with React.js, Vue.js, and Node.js.
        </Text>
        <SocialActions />
      </div>
      <BannerImage source="/images/me.jpg" alt="Oleksandr Drobot" />
    </div>
  );
}
