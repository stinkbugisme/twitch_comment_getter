# Twitchコメント履歴保管庫

Twitchユーザーの過去のコメントを確認できるChrome拡張機能のWebサイトです。

## 概要

このプロジェクトは、Twitchのチャットメッセージをリアルタイムで収集・保存し、Chrome拡張機能を通じてユーザーの過去のコメント履歴を表示するシステムのWebサイト部分です。

### 主な機能

- 36万人以上のTwitchユーザーのコメント履歴を保管
- Chrome拡張機能の紹介とダウンロード
- プレミアムプランの案内
- チャンネル追加リクエスト機能
- ヘルプドキュメント

## 技術スタック

- **Framework**: Next.js 15.5
- **Styling**: Tailwind CSS v4
- **Database**: Supabase
- **Language**: TypeScript

## 開発環境のセットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# ビルド
npm run build

# プロダクションサーバーの起動
npm start
```

## プロジェクト構成

```
twitch_comment_getter/
├── app/
│   ├── page.tsx           # ホームページ
│   ├── premium/           # プレミアムプラン
│   ├── channels/          # 収集チャンネル一覧
│   ├── legal/             # 特定商取引法に基づく表記
│   ├── privacy/           # プライバシーポリシー
│   ├── terms/             # 利用規約
│   ├── help/              # ヘルプ
│   └── contact/           # お問い合わせ
└── public/                # 静的ファイル
```

## 関連プロジェクト

- **バックエンド**: `/backend_get_comment` - Pythonによるチャット収集システム
- **Chrome拡張機能**: `/google_get_extension` - ユーザー履歴表示拡張機能

## ライセンス

Copyright © 2025 兵頭勇哉. All rights reserved.