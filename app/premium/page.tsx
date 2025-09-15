'use client';

import { useState } from 'react';

const STRIPE_PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY_TEST;

// Stripe Payment Links (これらは実際にStripeで作成後に更新)
const PAYMENT_LINKS = {
  monthly: 'https://buy.stripe.com/test_xxxxx', // 月額500円
  yearly: 'https://buy.stripe.com/test_yyyyy',  // 年額プラン
};

export default function PremiumPage() {
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'yearly'>('monthly');

  const handlePurchase = (planType: 'monthly' | 'yearly') => {
    // Redirect to Stripe Payment Link
    window.location.href = PAYMENT_LINKS[planType];
  };

  return (
    <>
      <title>プレミアムプラン - Twitchコメント履歴保管庫</title>
      <meta name="description" content="Twitchコメント履歴保管庫のプレミアムプランで、より多くの機能をご利用いただけます。" />

      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-blue-700">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">
              ⭐ プレミアムプラン
            </h1>
            <p className="text-xl text-blue-100">
              より多くの機能で、Twitchチャット履歴を最大限活用しましょう
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {/* 月額プラン */}
            <div className={`bg-white rounded-2xl shadow-xl p-8 transform transition-all hover:scale-105 ${selectedPlan === 'monthly' ? 'ring-4 ring-blue-500' : ''}`}>
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
                  広告非表示
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  ユーザー名検索
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  お気に入りユーザー保存
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  コメント内容検索
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  チャンネル分析機能
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
                  広告非表示
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  ユーザー名検索
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  お気に入りユーザー保存
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  コメント内容検索
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  チャンネル分析機能
                </li>
                <li className="flex items-center">
                  <span className="text-purple-500 mr-3">✓</span>
                  <span className="font-semibold">年額割引（17%オフ）</span>
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
          <div className="max-w-2xl mx-auto mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              📋 購入後の手順
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">1</span>
                <div>
                  <h4 className="text-white font-semibold">決済完了</h4>
                  <p className="text-blue-100">Stripeで安全に決済が完了します</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</span>
                <div>
                  <h4 className="text-white font-semibold">ライセンスキー受信</h4>
                  <p className="text-blue-100">メールでライセンスキーをお送りします</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</span>
                <div>
                  <h4 className="text-white font-semibold">アクティベート</h4>
                  <p className="text-blue-100">Chrome拡張機能でライセンスキーを入力</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-blue-100 text-sm">
              💳 Stripe決済で安全・確実 | 🔒 SSL暗号化通信 | 📧 24時間サポート
            </p>
          </div>
        </div>
      </div>
    </>
  );
}