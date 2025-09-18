import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <nav className="w-full p-6 border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-purple-600">
            📊 Twitchコメント履歴保管庫
          </h1>
          <div className="flex gap-4">
            <Link
              href="/contact?type=user"
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all shadow-md font-medium"
            >
              📺 チャンネル追加要望
            </Link>
            <Link
              href="/premium"
              className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all shadow-md"
            >
              ⭐ プレミアム
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

      {/* ヒーローセクション */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 via-pink-400/10 to-blue-400/10"></div>
        <div className="relative max-w-6xl mx-auto px-8 py-16">
          <div className="text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-4">
              <span className="animate-pulse mr-2">🔴</span> 36万人以上のユーザーデータを収集中
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Twitchコメント履歴保管庫
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              気になるユーザーの過去のコメントを簡単チェック！<br />
              より快適な配信視聴体験を実現
            </p>

            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="https://chromewebstore.google.com/detail/twitch%E3%82%B3%E3%83%A1%E3%83%B3%E3%83%88%E5%B1%A5%E6%AD%B4%E4%BF%9D%E7%AE%A1%E5%BA%AB/eibganekbpedhgoccjppaabhlnjkimhi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all font-medium shadow-xl text-lg"
              >
                <span className="mr-2">🚀</span> Chrome拡張機能をインストール
              </a>
              <Link
                href="/premium"
                className="inline-flex items-center px-8 py-4 border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-all font-medium text-lg"
              >
                <span className="mr-2">⭐</span> プレミアムプランを見る
              </Link>
            </div>
          </div>

          {/* 実績カード */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
            <div className="bg-white p-4 rounded-lg text-center shadow-lg">
              <div className="text-3xl font-bold text-purple-600">35M+</div>
              <div className="text-sm text-gray-600">収集メッセージ数</div>
            </div>
            <div className="bg-white p-4 rounded-lg text-center shadow-lg">
              <div className="text-3xl font-bold text-purple-600">363K+</div>
              <div className="text-sm text-gray-600">登録ユーザー数</div>
            </div>
            <div className="bg-white p-4 rounded-lg text-center shadow-lg">
              <div className="text-3xl font-bold text-purple-600">973K+</div>
              <div className="text-sm text-gray-600">総アクティビティ</div>
            </div>
            <div className="bg-white p-4 rounded-lg text-center shadow-lg">
              <div className="text-3xl font-bold text-purple-600">24/7</div>
              <div className="text-sm text-gray-600">リアルタイム収集</div>
            </div>
          </div>
        </div>
      </section>

      {/* チャンネル追加要望セクション */}
      <section className="py-12 px-8 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            📺 お気に入りのチャンネルが無い？
          </h3>
          <p className="text-xl text-white/90 mb-6">
            監視対象チャンネルを追加リクエストできます！人気のチャンネルから順次対応していきます。
          </p>
          <Link
            href="/contact?type=user"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all font-semibold shadow-xl text-lg"
          >
            <span className="mr-2">➕</span> チャンネル追加をリクエスト
          </Link>
          <p className="text-sm text-white/70 mt-4">
            現在、多くのチャンネルを順次追加中です
          </p>
        </div>
      </section>

      {/* プラン比較セクション */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            あなたに最適なプランを選択
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* 無料プラン */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">無料プラン</h4>
                <div className="text-4xl font-bold text-gray-900">¥0</div>
                <p className="text-gray-600">永久無料</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span className="text-gray-700">月間50人まで履歴表示</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span className="text-gray-700">過去3ヶ月のデータ</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span className="text-gray-700">基本的な統計情報</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2 mt-1">✗</span>
                  <span className="text-gray-500 line-through">ユーザー名検索</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2 mt-1">✗</span>
                  <span className="text-gray-500 line-through">広告非表示</span>
                </li>
              </ul>
              <a
                href="https://chromewebstore.google.com/detail/twitch%E3%82%B3%E3%83%A1%E3%83%B3%E3%83%88%E5%B1%A5%E6%AD%B4%E4%BF%9D%E7%AE%A1%E5%BA%AB/eibganekbpedhgoccjppaabhlnjkimhi"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3 border-2 border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                無料で始める
              </a>
            </div>

            {/* プレミアムプラン */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-xl p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  人気No.1
                </span>
              </div>
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">プレミアムプラン</h4>
                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400">¥500〜</div>
                <p className="text-gray-600">月額 / 年額プランあり</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span className="text-gray-700 dark:text-gray-300 font-semibold">無制限の履歴表示</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span className="text-gray-700">ユーザー名検索</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span className="text-gray-700">コメント内容検索</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span className="text-gray-700">お気に入り保存（20人）</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span className="text-gray-700">広告完全非表示</span>
                </li>
              </ul>
              <Link
                href="/premium"
                className="block w-full text-center py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg font-semibold"
              >
                プレミアムにアップグレード
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 機能詳細セクション */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            快適な配信視聴のための便利機能
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🕐</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                気になるユーザーを即座にチェック
              </h4>
              <p className="text-gray-600">
                荒らしユーザーや気になるユーザーの過去のコメントを瞬時に確認。そのユーザーの傾向を把握できます。
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                高度な検索機能
              </h4>
              <p className="text-gray-600">
                ユーザー名やコメント内容で検索。特定の話題や問題発言を素早く発見。
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                コミュニティ理解
              </h4>
              <p className="text-gray-600">
                ユーザーがどのチャンネルでどんな発言をしているか把握。配信をより楽しく視聴。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 使い方セクション */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            かんたん3ステップ
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-3xl">1️⃣</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">拡張機能をインストール</h4>
              <p className="text-gray-600">
                Chrome ウェブストアから拡張機能をインストール
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-3xl">2️⃣</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Twitchを開く</h4>
              <p className="text-gray-600">
                いつも通りTwitchでチャットを表示
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-3xl">3️⃣</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">履歴を確認</h4>
              <p className="text-gray-600">
                ユーザー名横の📊アイコンをクリックして履歴表示
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="py-16 px-8 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            今すぐ快適な配信視聴体験を始めよう
          </h3>
          <p className="text-xl text-white/90 mb-8">
            36万人以上のユーザーデータで、配信をもっと楽しく！
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://chromewebstore.google.com/detail/twitch%E3%82%B3%E3%83%A1%E3%83%B3%E3%83%88%E5%B1%A5%E6%AD%B4%E4%BF%9D%E7%AE%A1%E5%BA%AB/eibganekbpedhgoccjppaabhlnjkimhi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold shadow-xl"
            >
              🚀 無料で始める
            </a>
            <Link
              href="/channels"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors font-semibold"
            >
              📺 収集チャンネル一覧
            </Link>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h5 className="text-white font-semibold mb-4">プロダクト</h5>
              <ul className="space-y-2">
                <li><Link href="/premium" className="hover:text-white transition-colors">プレミアムプラン</Link></li>
                <li><Link href="/channels" className="hover:text-white transition-colors">収集チャンネル</Link></li>
                <li><a href="https://chromewebstore.google.com/detail/twitch%E3%82%B3%E3%83%A1%E3%83%B3%E3%83%88%E5%B1%A5%E6%AD%B4%E4%BF%9D%E7%AE%A1%E5%BA%AB/eibganekbpedhgoccjppaabhlnjkimhi" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Chrome拡張機能</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-white font-semibold mb-4">サポート</h5>
              <ul className="space-y-2">
                <li><Link href="/help" className="hover:text-white transition-colors">ヘルプセンター</Link></li>
                <li><Link href="/contact?type=inquiry" className="hover:text-white transition-colors">お問い合わせ</Link></li>
                <li><Link href="/contact?type=user" className="hover:text-white transition-colors">チャンネル追加要望</Link></li>
                <li><Link href="/contact?type=feature" className="hover:text-white transition-colors">機能要望</Link></li>
              </ul>
            </div>

            <div>
              <h5 className="text-white font-semibold mb-4">法的情報</h5>
              <ul className="space-y-2">
                <li><Link href="/terms" className="hover:text-white transition-colors">利用規約</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">プライバシーポリシー</Link></li>
                <li><Link href="/legal" className="hover:text-white transition-colors">特定商取引法に基づく表記</Link></li>
              </ul>
            </div>

            <div>
              <h5 className="text-white font-semibold mb-4">運営情報</h5>
              <p className="text-sm">
                Twitchコメント履歴保管庫は、Twitch Interactive, Inc.とは無関係の独立したサービスです。
              </p>
              <p className="text-sm mt-4">
                お問い合わせ：<br />
                info@comment-history.com
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p>&copy; 2025 Twitchコメント履歴保管庫. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
