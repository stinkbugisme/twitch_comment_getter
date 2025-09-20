'use client';

import { useState } from 'react';
import Link from 'next/link';
// Stripe Payment Links (これらは実際にStripeで作成後に更新)
const PAYMENT_LINKS = {
  monthly: 'https://buy.stripe.com/aFadR8fHy6IzbKo3so1VK01', // 月額500円
  yearly: 'https://buy.stripe.com/00wbJ09ja3wn9Cg0gc1VK00',  // 年額プラン
};

export default function PremiumPage() {
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'yearly'>('yearly');

  const handlePurchase = (planType: 'monthly' | 'yearly') => {
    // Redirect to Stripe Payment Link
    window.location.href = PAYMENT_LINKS[planType];
  };

  return (
    <>
      <title>プレミアムプラン - Twitchコメント履歴保管庫</title>
      <meta name="description" content="Twitchコメント履歴保管庫のプレミアムプランで、より多くの機能をご利用いただけます。" />

      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
        {/* ナビゲーションバー */}
        <nav className="w-full p-6 border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-purple-600">
              📊 Twitchコメント履歴保管庫
            </Link>
            <div className="flex gap-4">
              <Link
                href="/"
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                ホームに戻る
              </Link>
              <Link
                href="/help"
                className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                ヘルプ
              </Link>
            </div>
          </div>
        </nav>

        <div className="container mx-auto px-4 py-12">
          {/* ヒーローセクション */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-4">
              <span className="mr-2">🎉</span> 無制限の履歴表示で快適な視聴体験
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              プレミアムプラン
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              広告なし・検索機能・お気に入り保存など、すべての機能が使い放題
            </p>
          </div>

          {/* 重要な注意事項 */}
          <div className="max-w-3xl mx-auto mb-8 p-6 bg-yellow-50 border-2 border-yellow-400 rounded-xl">
            <div className="flex items-start">
              <span className="text-2xl mr-3">⚠️</span>
              <div>
                <h3 className="font-bold text-yellow-800 mb-2">重要：メールアドレスについて</h3>
                <p className="text-yellow-700">
                  購入時には必ず<span className="font-bold">正しいメールアドレス</span>を入力してください。
                  ライセンスキーはメールで送信されます。メールアドレスが間違っていると、ライセンスキーを受け取ることができません。
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {/* 月額プラン */}
            <div className={`bg-white rounded-2xl shadow-xl p-8 transform transition-all hover:scale-105 ${selectedPlan === 'monthly' ? 'ring-4 ring-purple-500' : ''} relative`}>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">月額プラン</h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  ¥500
                  <span className="text-lg text-gray-500">/月</span>
                </div>
                <p className="text-gray-600">いつでもキャンセル可能</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  無制限の履歴表示
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  広告完全非表示
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  ユーザー名検索機能
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  コメント内容検索
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  お気に入り保存（20人）
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  チャンネル統計表示
                </li>
              </ul>

              <button
                onClick={() => handlePurchase('monthly')}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                月額プランを購入
              </button>
            </div>

            {/* 年額プラン */}
            <div className={`bg-white rounded-2xl shadow-xl p-8 transform transition-all hover:scale-105 ${selectedPlan === 'yearly' ? 'ring-4 ring-purple-500' : ''} relative`}>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  おすすめ
                </span>
              </div>

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">年額プラン</h3>
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  ¥5,000
                  <span className="text-lg text-gray-500">/年</span>
                </div>
                <p className="text-gray-600">2ヶ月分お得！</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  無制限の履歴表示
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  広告完全非表示
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  ユーザー名検索機能
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  コメント内容検索
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  お気に入り保存（20人）
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  チャンネル統計表示
                </li>
                <li className="flex items-center">
                  <span className="text-purple-500 mr-3">⭐</span>
                  <span className="font-semibold text-purple-600">2ヶ月分お得！</span>
                </li>
              </ul>

              <button
                onClick={() => handlePurchase('yearly')}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-colors"
              >
                年額プランを購入
              </button>
            </div>
          </div>

          {/* 購入後の手順 */}
          <div className="max-w-3xl mx-auto mt-16 bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              📋 かんたん！購入後の3ステップ
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <span className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</span>
                <div>
                  <h4 className="text-gray-900 font-semibold mb-1">Stripeで決済</h4>
                  <p className="text-gray-600">クレジットカードで安全に決済。<span className="font-bold text-red-600">メールアドレスは正確に入力してください。</span></p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</span>
                <div>
                  <h4 className="text-gray-900 font-semibold mb-1">ライセンスキーをメールで受信</h4>
                  <p className="text-gray-600">決済完了後、すぐにライセンスキーをメールでお送りします。迷惑メールフォルダもご確認ください。</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</span>
                <div>
                  <h4 className="text-gray-900 font-semibold mb-1">拡張機能でアクティベート</h4>
                  <p className="text-gray-600">Chrome拡張機能のポップアップからライセンスキーを入力して完了！</p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <span className="font-semibold">💡 ヒント：</span>
                ライセンスキーが届かない場合は、入力したメールアドレスが正しいか確認し、
                迷惑メールフォルダをチェックしてください。それでも届かない場合は
                <Link href="/contact?type=inquiry" className="text-blue-600 hover:underline ml-1">
                  お問い合わせ
                </Link>
                ください。
              </p>
            </div>
          </div>

          {/* よくある質問 */}
          <div className="max-w-3xl mx-auto mt-12 bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              ❓ よくある質問
            </h3>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Q. 支払い方法は？</h4>
                <p className="text-gray-600">クレジットカード（VISA、Mastercard、American Express、JCB）がご利用いただけます。</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Q. キャンセルはできますか？</h4>
                <p className="text-gray-600">いつでもキャンセル可能です。キャンセル後も支払済期間終了まで利用できます。</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Q. 返金はできますか？</h4>
                <p className="text-gray-600">
                  原則として返金は承っておりませんが、サービスの重大な不具合がある場合は個別対応いたします。
                  詳しくは<Link href="/help" className="text-purple-600 hover:underline">ヘルプページ</Link>をご確認ください。
                </p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Q. 複数デバイスで使えますか？</h4>
                <p className="text-gray-600">1つのライセンスキーは1デバイスでのみ使用可能です。複数デバイスで使用する場合は、デバイスごとにライセンスが必要です。</p>
              </div>
            </div>
          </div>

          {/* 信頼性バッジ */}
          <div className="text-center mt-12 space-y-4">
            <div className="flex justify-center gap-8 flex-wrap text-sm text-gray-600">
              <span className="flex items-center">
                <span className="mr-2">🔒</span> SSL暗号化通信
              </span>
              <span className="flex items-center">
                <span className="mr-2">💳</span> Stripe安全決済
              </span>
              <span className="flex items-center">
                <span className="mr-2">📧</span> サポート体制
              </span>
            </div>
            <p className="text-xs text-gray-500">
              決済はStripeを通じて安全に処理されます。カード情報は当サービスには保存されません。
            </p>
          </div>
        </div>

        {/* フッター */}
        <footer className="mt-16 p-8 border-t border-gray-200 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-center gap-6 text-sm text-gray-600">
              <Link href="/terms" className="hover:text-purple-600">利用規約</Link>
              <Link href="/privacy" className="hover:text-purple-600">プライバシーポリシー</Link>
              <Link href="/legal" className="hover:text-purple-600">特定商取引法に基づく表記</Link>
              <Link href="/help" className="hover:text-purple-600">ヘルプ</Link>
              <Link href="/contact?type=inquiry" className="hover:text-purple-600">お問い合わせ</Link>
            </div>
            <p className="text-center mt-4 text-gray-500">&copy; 2025 Twitchコメント履歴保管庫. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}