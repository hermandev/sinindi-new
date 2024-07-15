import "@mantine/core/styles.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ReduxProvider from "@/components/providers/redux-provider";
import ModalProvider from "@/components/providers/modal-provider";
import { Notifications } from "@mantine/notifications";
import "@mantine/notifications/styles.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SININDI",
  description: "SININDI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <ReduxProvider>
          <MantineProvider>
            <Notifications />
            <ModalProvider>{children}</ModalProvider>
          </MantineProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
