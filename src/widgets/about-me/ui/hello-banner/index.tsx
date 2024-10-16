import { Divider, Text } from "@chakra-ui/react";
import { BannerImage, Container, HeadingGradient } from "@/shared/ui";
import { JobTitles } from "./job-titles";
import { SocialActions } from "./social-actions";
import "./styles.scss";

export function HelloBanner() {
  return (
    <Container as="section" className="hello-banner-container">
      <div className="hello-banner">
        <div className="hello-banner-row">
          <JobTitles />
          <HeadingGradient>
            Hello, I&#39;m<br />Oleksandr Drobot
          </HeadingGradient>
          <Text>
            I&#39;m Frontend Software Engineer with 6 years of experience building scalable applications
            with modern frameworks and tools.
          </Text>
          <SocialActions />
        </div>
        <BannerImage source="/images/me.jpg" alt="Oleksandr Drobot" />
      </div>
      <Divider className="hello-banner-divider" />
    </Container>
  );
}
