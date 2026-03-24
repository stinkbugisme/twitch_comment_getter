import Link from 'next/link';

export default function PremiumPage() {
  return (
    <>
      <title>プレミアムプラン - Twitchコメント履歴保管庫</title>
      <meta name="description" content="Twitchコメント履歴保管庫のプレミアムプランで、無制限にユーザー履歴を閲覧できます。" />

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
              <span className="mr-2">⭐</span> 1日1ユーザーの制限を解除
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              プレミアムプラン
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              無制限にユーザーの履歴を閲覧できます
            </p>
          </div>

          {/* プランカード */}
          <div className="max-w-lg mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  月額プラン
                </span>
              </div>

              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  &yen;500
                  <span className="text-lg text-gray-500">/月</span>
                </div>
                <p className="text-gray-600">いつでもキャンセル可能</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span className="font-semibold">1日1ユーザーの制限を解除</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  無制限にユーザーの履歴を閲覧
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  キャンセル後も期間終了まで利用可能
                </li>
              </ul>

              {/* 拡張機能から購入への案内 */}
              <div className="bg-purple-50 rounded-lg p-6 text-center">
                <p className="text-purple-800 font-semibold mb-3">
                  プレミアムプランは拡張機能から購入できます
                </p>
                <div className="space-y-3 text-left text-sm text-gray-700">
                  <div className="flex items-start">
                    <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold mr-3 flex-shrink-0 text-xs">1</span>
                    <span>Chrome拡張機能のポップアップを開く</span>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold mr-3 flex-shrink-0 text-xs">2</span>
                    <span>Twitchアカウントでログイン</span>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold mr-3 flex-shrink-0 text-xs">3</span>
                    <span>「プレミアム設定」から月額&yen;500で登録</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* よくある質問 */}
          <div className="max-w-3xl mx-auto mt-12 bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              よくある質問
            </h3>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Q. 支払い方法は？</h4>
                <p className="text-gray-600">クレジットカード（VISA、Mastercard、American Express、JCB）がご利用いただけます。決済はStripeで安全に処理されます。</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Q. キャンセルはできますか？</h4>
                <p className="text-gray-600">いつでもキャンセル可能です。キャンセル後も支払済期間終了まで利用できます。拡張機能のポップアップからキャンセルできます。</p>
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
                <p className="text-gray-600">Twitchアカウントに紐づくため、同じアカウントでログインすればどのデバイスでもプレミアム機能をご利用いただけます。</p>
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
