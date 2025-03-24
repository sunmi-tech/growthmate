import type { Metadata } from "next";
import "@/app/global.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "GROWTH MATE",
  icons : {
    icon : "/favicon.ico"
  },
  description: "개발자 성장과 공부를 시각화하는 생산성 트래커, GrowthMate"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <div className="grid grid-cols-[240px_1fr] grid-rows-[64px_1fr] h-screen">
          <Sidebar className="row-span-2" />
          <Header />
          <main className="p-10">{children}</main>
        </div>
      </body>
    </html>
  );
}
