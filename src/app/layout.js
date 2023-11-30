import { Inter } from "next/font/google";
import "@/styles/globals.css";
import UiProvider from "@/components/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Event makkers",
  description: "Event Makkers by Shellx",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UiProvider>{children}</UiProvider>
      </body>
    </html>
  );
}
