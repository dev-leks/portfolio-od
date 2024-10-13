import { Img } from "@chakra-ui/react";

interface BannerImageProps {
  source: string;
  alt: string;
}

export function BannerImage(props: BannerImageProps) {
  const { source, alt } = props;

  return (
    <Img
      src={source}
      alt={alt}
      boxSize={{ md: "sm", xl: "md" }}
      objectFit="cover"
      borderRadius="2xl"
    />
  );
}
