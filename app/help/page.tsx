'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function HelpPage() {
  const [openSection, setOpenSection] = useState<string | null>('getting-started');

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const faqItems = [
    {
      id: 'getting-started',
      category: '🚀 はじめに',
      questions: [
        {
          q: 'Twitchコメント履歴保管庫とは何ですか？',
          a: 'Twitchのチャット参加者の過去のコメントを表示できるChrome拡張機能です。配信者やモデレーターがコミュニティ管理をより効率的に行えるよう支援します。'
        },
        {
          q: '拡張機能のインストール方法は？',
          a: `1. Chrome ウェブストアにアクセス
2. 「Twitchコメント履歴保管庫」を検索
3. 「Chromeに追加」ボタンをクリック
4. ポップアップで「拡張機能を追加」をクリック
5. Twitchを開いて利用開始`
        },
        {
          q: '基本的な使い方を教えてください',
          a: `1. Twitchのチャット画面を開く
2. ユーザー名の横に表示される📊アイコンをクリック
3. モーダルウィンドウで過去のコメントを確認
4. 「さらに読み込む」で追加のコメントを表示`
        }
      ]
    },
    {
      id: 'free-features',
      category: '🆓 無料機能',
      questions: [
        {
          q: '無料プランでできることは？',
          a: `• 月間50人までのユーザー履歴表示
• 過去3ヶ月分のコメント閲覧
• ユーザーごとのメッセージ数確認
• 最新100件のコメント表示`
        },
        {
          q: '月間50人の制限とは？',
          a: '毎月1日にリセットされる表示制限です。同じユーザーを何度表示しても1人としてカウントされます。50人を超えると、その月は新しいユーザーの履歴を表示できません。'
        },
        {
          q: '広告を非表示にできますか？',
          a: '広告非表示はプレミアム機能です。プレミアムプランにアップグレードすることで、すべての広告を非表示にできます。'
        }
      ]
    },
    {
      id: 'premium-features',
      category: '⭐ プレミアム機能',
      questions: [
        {
          q: 'プレミアムプランの特典は？',
          a: `• 無制限のユーザー履歴表示
• ユーザー名検索機能
• コメント内容検索機能
• お気に入りユーザー保存（最大20人）
• チャンネル統計表示
• 広告非表示
• 優先サポート`
        },
        {
          q: 'プレミアムプランの料金は？',
          a: `• 月額プラン：500円（税込）
• 年額プラン：5,000円（税込）- 2ヶ月分お得！

支払いはクレジットカード（Stripe決済）で安全に処理されます。`
        },
        {
          q: 'ライセンスキーの使い方は？',
          a: `1. プレミアムプラン購入後、メールでライセンスキーを受信
2. Chrome拡張機能のポップアップを開く
3. 「⭐ プレミアム設定」をクリック
4. ライセンスキー入力欄にキーを貼り付け
5. 「アクティベート」ボタンをクリック`
        },
        {
          q: '複数デバイスで使えますか？',
          a: '1つのライセンスキーは1デバイスでのみ使用可能です。複数デバイスで使用する場合は、デバイスごとにライセンスが必要です。'
        }
      ]
    },
    {
      id: 'payment-refund',
      category: '💳 支払い・返金',
      questions: [
        {
          q: '返金ポリシーについて教えてください',
          a: `【原則】
デジタルコンテンツの性質上、返品・返金はお受けできません。

【例外的に返金対応する場合】
• サービスの重大な不具合により全く利用できない場合
• 誤って重複購入した場合（24時間以内にご連絡ください）
• 技術的な問題で機能が使用できない場合

返金をご希望の場合は、お問い合わせフォームから詳細をお知らせください。`
        },
        {
          q: 'サブスクリプションのキャンセル方法は？',
          a: `1. Chrome拡張機能のポップアップを開く
2. 「⭐ プレミアム設定」をクリック
3. 「サブスクリプションのキャンセル」をクリック
4. 確認画面で「キャンセル」を確定

キャンセル後も、支払済期間終了まではプレミアム機能を利用できます。`
        },
        {
          q: '支払い方法は何に対応していますか？',
          a: `クレジットカード決済（Stripe）に対応しています：
• VISA
• Mastercard
• American Express
• JCB

デビットカードも利用可能です。`
        },
        {
          q: '領収書は発行されますか？',
          a: '決済完了後、Stripeから自動的に領収書がメールで送信されます。追加の領収書が必要な場合は、お問い合わせフォームからご連絡ください。'
        }
      ]
    },
    {
      id: 'troubleshooting',
      category: '🔧 トラブルシューティング',
      questions: [
        {
          q: '履歴ボタン（📊）が表示されません',
          a: `1. 拡張機能が有効になっているか確認
2. Twitchページをリロード（F5）
3. Chrome拡張機能を再インストール
4. Chromeを最新版にアップデート`
        },
        {
          q: 'ライセンスキーが認証されません',
          a: `• キーを正確にコピー＆ペースト（空白や改行を含まない）
• 別のデバイスで既に使用していないか確認
• ライセンスの有効期限を確認
• 問題が続く場合はサポートにお問い合わせください`
        },
        {
          q: 'コメント履歴が表示されません',
          a: `考えられる原因：
• そのユーザーがコメントをしていない
• チャンネルがまだ監視対象に入っていない
• 3ヶ月以上前のデータ（自動削除済み）

チャンネル追加リクエストは、お問い合わせフォームから送信できます。`
        },
        {
          q: '拡張機能が動作しません',
          a: `1. Chromeが最新版か確認（バージョン88以降必須）
2. 他の拡張機能との競合を確認（一時的に他を無効化）
3. Chromeの設定をリセット
4. 拡張機能を削除して再インストール`
        }
      ]
    },
    {
      id: 'privacy-security',
      category: '🔒 プライバシー・セキュリティ',
      questions: [
        {
          q: 'どんなデータが収集されますか？',
          a: `【拡張機能が収集するデータ】
• 閲覧したユーザー名（履歴表示した人のみ）
• お気に入りユーザーリスト
• ライセンスキー情報

【収集しないデータ】
• 個人情報（氏名、住所、電話番号）
• Twitchのログイン情報
• プライベートメッセージ
• 他サイトの閲覧履歴`
        },
        {
          q: 'データはどこに保存されますか？',
          a: `• チャットメッセージ：Supabaseクラウドデータベース（3ヶ月間）
• お気に入りリスト：ブラウザのローカルストレージ
• ライセンス情報：暗号化してローカル保存

すべての通信はHTTPSで暗号化されています。`
        },
        {
          q: 'データを削除したい場合は？',
          a: `• ローカルデータ：拡張機能をアンインストールで完全削除
• サーバーデータ：お問い合わせフォームから削除依頼

3ヶ月経過したメッセージは自動的に削除されます。`
        }
      ]
    },
    {
      id: 'contact-support',
      category: '📮 お問い合わせ',
      questions: [
        {
          q: 'サポートへの連絡方法は？',
          a: `【お問い合わせフォーム】
https://comment-history.com/contact

【メール】
info@comment-history.com

【対応時間】
平日 10:00-18:00（土日祝を除く）
通常1-2営業日以内に返信いたします。`
        },
        {
          q: 'チャンネル追加リクエストの方法は？',
          a: `1. お問い合わせフォームにアクセス
2. 「収集ユーザー追加要望」を選択
3. 追加希望のチャンネル名を記入
4. 送信

人気チャンネルから優先的に追加していきます。`
        },
        {
          q: '機能要望はどこに送れますか？',
          a: 'お問い合わせフォームの「機能要望」から送信できます。いただいたご意見は今後の開発の参考にさせていただきます。'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
      <nav className="w-full p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-purple-600 dark:text-purple-400">
            📊 Twitchコメント履歴保管庫
          </Link>
          <Link
            href="/"
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            ホームに戻る
          </Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            ヘルプセンター
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            よくある質問と回答をまとめました。お探しの情報が見つからない場合は、お気軽にお問い合わせください。
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((category) => (
            <div
              key={category.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() => toggleSection(category.id)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category.category}
                </h2>
                <span className="text-2xl text-gray-500">
                  {openSection === category.id ? '−' : '+'}
                </span>
              </button>

              {openSection === category.id && (
                <div className="px-6 pb-6">
                  {category.questions.map((item, index) => (
                    <div
                      key={index}
                      className="py-4 border-t border-gray-200 dark:border-gray-700"
                    >
                      <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                        Q. {item.q}
                      </h3>
                      <div className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
                        {item.a}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-purple-50 dark:bg-purple-900/20 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            まだ解決しませんか？
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            ヘルプセンターで解決しない場合は、直接お問い合わせください。
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact?type=inquiry"
              className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              📧 お問い合わせフォーム
            </Link>
            <a
              href="mailto:info@comment-history.com"
              className="inline-flex items-center px-6 py-3 border border-purple-600 text-purple-600 dark:text-purple-400 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
            >
              ✉️ メールで問い合わせ
            </a>
          </div>
        </div>

        <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
          <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">
            💡 ヒント
          </h3>
          <p className="text-blue-800 dark:text-blue-300 text-sm">
            プレミアムプランをご利用中の方は、優先サポートを受けられます。
            お問い合わせ時にライセンスキーをお知らせください。
          </p>
        </div>
      </main>

      <footer className="mt-16 p-8 border-t border-gray-200 dark:border-gray-700 text-center text-gray-600 dark:text-gray-400">
        <div className="flex justify-center gap-6 text-sm">
          <Link href="/terms" className="hover:text-purple-600 dark:hover:text-purple-400">利用規約</Link>
          <Link href="/privacy" className="hover:text-purple-600 dark:hover:text-purple-400">プライバシーポリシー</Link>
          <Link href="/legal" className="hover:text-purple-600 dark:hover:text-purple-400">特定商取引法に基づく表記</Link>
          <Link href="/help" className="hover:text-purple-600 dark:hover:text-purple-400">ヘルプ</Link>
        </div>
        <p className="mt-4">&copy; 2025 Twitchコメント履歴保管庫. All rights reserved.</p>
      </footer>
    </div>
  );
}