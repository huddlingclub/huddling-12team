import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "제철밥상",
  description: "이번 달 제철 식재료로 만드는 저칼로리 레시피",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
