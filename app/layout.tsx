import type { Metadata } from "next";
import "./globals.css";
import LoadingProvider from "./context/LoadingProvider";
import ServiceWorker from "@/components/ServiceWorker";
export const metadata: Metadata = {
  title: "Maisie Paw Prints",
  description:
    "MaisiePaw Prints turns your favorite pet moments into beautiful prints and keepsakes.",
};



export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <LoadingProvider>
          <ServiceWorker />
          {children}

        </LoadingProvider>
      </body>
    </html>
  );
}
