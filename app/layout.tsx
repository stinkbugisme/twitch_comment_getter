import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Twitchコメント履歴保管庫 - ユーザーの過去のチャットを確認",
  description: "Twitchで気になるユーザーの過去のコメントを簡単チェック。荒らし対策や配信の雰囲気把握に最適なChrome拡張機能。36万人以上のユーザーデータを収集中。",
  keywords: "Twitch, コメント履歴, チャット履歴, Chrome拡張機能, 荒らし対策, 配信者支援, ユーザー分析",
  authors: [{ name: "Twitchコメント履歴保管庫" }],
  openGraph: {
    title: "Twitchコメント履歴保管庫",
    description: "気になるユーザーの過去のコメントを簡単チェック！より快適な配信視聴体験を実現",
    url: "https://comment-history.com",
    siteName: "Twitchコメント履歴保管庫",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Twitchコメント履歴保管庫",
    description: "Twitchユーザーの過去のコメントを確認できるChrome拡張機能",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
