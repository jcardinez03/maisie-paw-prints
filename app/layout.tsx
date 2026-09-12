import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Maisie Paw Prints",
  description:
    "MaisiePaw Prints turns your favorite pet moments into beautiful prints and keepsakes.",
};



export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        
        {children}
      </body>
    </html>
  );
}
