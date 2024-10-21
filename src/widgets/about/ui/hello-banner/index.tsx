import { Divider, Img, Text } from "@chakra-ui/react";
import { Container, HeadingGradient } from "@/shared/ui";
import { JobTitles } from "./job-titles";
import { SocialLinks } from "./social-links";
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
            I&#39;m Senior Software Engineer with 6 years of experience building scalable applications
            with modern frameworks and tools.
          </Text>
          <SocialLinks />
        </div>
        <Img
          src="/images/me.jpg"
          alt="Oleksandr Drobot"
          boxSize={{ md: "sm", xl: "md" }}
          objectFit="cover"
          borderRadius="2xl"
        />
      </div>
      <Divider className="hello-banner-divider" />
    </Container>
  );
}
