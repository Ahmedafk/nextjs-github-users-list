import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Github users list"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>Github users</h1>
        </header>
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
