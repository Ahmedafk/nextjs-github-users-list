import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Github users list"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ height: "100%" }}>
      <body style={{ backgroundColor: "ghostwhite", margin: 0, display: "flex", flexDirection: "column" }}>
        <header>
          <h1>Github users list</h1>
        </header>
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
