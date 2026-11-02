import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { Providers } from "@/components/Providers";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin", "vietnamese"] });
const space = Space_Grotesk({ variable: "--font-space", subsets: ["latin", "vietnamese"] });
const jetbrains = JetBrains_Mono({ variable: "--font-jetbrains", subsets: ["latin", "vietnamese"] });

export const metadata: Metadata = {
  title: "Vu Huynh Anh Tuan | Full-stack Developer",
  description:
    "Portfolio of Vu Huynh Anh Tuan, a full-stack and mobile developer in Ho Chi Minh City building with Next.js, React Native, Expo and Supabase.",
};

// Runs before first paint so the saved (or system) theme doesn't flash.
const themeScript = `try{var t=localStorage.getItem("theme");if(!t){t=matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}document.documentElement.setAttribute("data-theme",t)}catch(e){}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${inter.variable} ${space.variable} ${jetbrains.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
