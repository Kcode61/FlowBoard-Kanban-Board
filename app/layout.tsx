import type { Metadata } from "next";

import "./globals.css";
import { Header } from "@/components/header";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Kaban App",
  description:
    "Aplicação de gerenciamento de tarefas com Next.js 13 e Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="overflow-x-hidden" suppressHydrationWarning>
      <body
        className="antialiased  overflow-x-hidden flex bg-white dark:bg-[#080C16] "
        cz-shortcut-listen="true"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1 ">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
