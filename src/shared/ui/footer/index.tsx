import { Text } from "@chakra-ui/react";
import dayjs from "dayjs";
import React from "react";
import { FaHeart } from "react-icons/fa6";
import { DateFormats } from "@/shared/config/date";
import { Container } from "@/shared/ui";
import "./styles.scss";

export function Footer() {
  const currentYear = dayjs().format(DateFormats.year);

  return (
    <footer className="footer">
      <Container className="footer-container">
        <div className="footer-inner">
          <Text className="footer-text">
            © {currentYear} Oleksandr Drobot
          </Text>
          <span className="footer-icons">
            <FaHeart className="text-yellow-400" />
            <FaHeart className="text-sky-500" />
          </span>
        </div>
      </Container>
    </footer>
  );
}
