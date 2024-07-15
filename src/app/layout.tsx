import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Github users list"
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>GitHub users</h1>
        </header>
        <div>
          {children}
          {modal}
        </div>
      </body>
    </html>
  );
}
