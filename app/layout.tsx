import type { Metadata } from "next";
import React, { PropsWithChildren } from "react";
import Providers from "@/app/providers";
import "@/app/styles/globals.css";

export const metadata: Metadata = {
  title: "Oleksandr Drobot - Portfolio",
  description: "Portfolio of Oleksandr Drobot",
};

export default function RootLayout(props: PropsWithChildren) {
  const { children } = props;

  return (
    <html lang="en">
      <body>
        <Providers>
          <main>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
