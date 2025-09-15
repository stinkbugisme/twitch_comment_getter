import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
      <nav className="w-full p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-purple-600 dark:text-purple-400">
            📊 Twitchコメント履歴保管庫
          </h1>
          <div className="flex gap-4">
            <Link 
              href="/channels" 
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              収集チャンネル一覧
            </Link>
            <Link 
              href="/contact?type=user" 
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              収集ユーザー追加要望
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto p-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Twitchコメント履歴保管庫
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Twitchのチャットでユーザーの過去のコメントを簡単に確認できるブラウザ拡張機能
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="https://chromewebstore.google.com/detail/twitch%E3%82%B3%E3%83%A1%E3%83%B3%E3%83%88%E5%B1%A5%E6%AD%B4%E4%BF%9D%E7%AE%A1%E5%BA%AB/eibganekbpedhgoccjppaabhlnjkimhi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              🔗 Chrome拡張機能をインストール
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              🔍 主な機能
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• ユーザー名の横に履歴ボタンを追加</li>
              <li>• 過去3ヶ月のコメント履歴を表示</li>
              <li>• ドラッグ可能なモーダルウィンドウ</li>
              <li>• リアルタイムでコメントを収集</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              📈 システム情報
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• 3ヶ月間のデータ自動保存</li>
              <li>• PostgreSQLパーティション機能使用</li>
              <li>• 自動メンテナンス機能</li>
              <li>• リアルタイムデータ収集</li>
            </ul>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
            使い方
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔧</span>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">1. 拡張機能をインストール</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Chrome拡張機能をインストールしてTwitchで使用開始</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👤</span>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">2. ユーザー名をクリック</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">チャットのユーザー名横の📊アイコンをクリック</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📋</span>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">3. 履歴を確認</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">モーダルウィンドウで過去のコメントを確認</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-16 p-8 border-t border-gray-200 dark:border-gray-700 text-center text-gray-600 dark:text-gray-400">
        <p>&copy; 2024 Twitchコメント履歴保管庫. All rights reserved.</p>
      </footer>
    </div>
  );
}
