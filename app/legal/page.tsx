import Link from 'next/link';

export default function LegalPage() {
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
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            特定商取引法に基づく表記
          </h1>

          <div className="space-y-6">
            <div className="border-b border-gray-200 dark:border-gray-700 pb-6">
              <table className="w-full">
                <tbody className="text-gray-600 dark:text-gray-300">
                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-4 pr-8 font-medium text-gray-900 dark:text-white w-1/3 align-top">
                      販売業者
                    </td>
                    <td className="py-4">
                      兵頭勇哉
                      <span className="text-sm text-gray-500 dark:text-gray-400 block mt-1">
                        （個人事業主）
                      </span>
                    </td>
                  </tr>

                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-4 pr-8 font-medium text-gray-900 dark:text-white align-top">
                      運営責任者
                    </td>
                    <td className="py-4">
                      兵頭勇哉
                    </td>
                  </tr>

                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-4 pr-8 font-medium text-gray-900 dark:text-white align-top">
                      所在地
                    </td>
                    <td className="py-4">
                      請求があった場合、遅滞なく開示いたします
                      <span className="text-sm text-gray-500 dark:text-gray-400 block mt-1">
                        ※正当な理由がある場合に限り開示いたします
                      </span>
                    </td>
                  </tr>

                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-4 pr-8 font-medium text-gray-900 dark:text-white align-top">
                      電話番号
                    </td>
                    <td className="py-4">
                      請求があった場合、遅滞なく開示いたします
                      <span className="text-sm text-gray-500 dark:text-gray-400 block mt-1">
                        ※個人事業主のため、正当な理由がある場合に限り開示いたします
                      </span>
                    </td>
                  </tr>

                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-4 pr-8 font-medium text-gray-900 dark:text-white align-top">
                      お問い合わせ
                    </td>
                    <td className="py-4">
                      <div className="space-y-2">
                        <div>
                          <span className="font-medium">メールアドレス：</span>
                          <a href="mailto:info@comment-history.com" className="text-purple-600 dark:text-purple-400 hover:underline">
                            info@comment-history.com
                          </a>
                        </div>
                        <div>
                          <span className="font-medium">お問い合わせフォーム：</span>
                          <Link href="/contact?type=inquiry" className="text-purple-600 dark:text-purple-400 hover:underline">
                            https://comment-history.com/contact
                          </Link>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                          ※お電話でのお問い合わせは承っておりません
                        </p>
                      </div>
                    </td>
                  </tr>

                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-4 pr-8 font-medium text-gray-900 dark:text-white align-top">
                      商品の販売価格
                    </td>
                    <td className="py-4">
                      <div className="space-y-2">
                        <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded">
                          <p className="font-medium mb-2">プレミアムプラン</p>
                          <ul className="space-y-1 text-sm">
                            <li>• 月額プラン：500円（税込）</li>
                            <li>• 年額プラン：5,000円（税込）</li>
                          </ul>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          ※基本機能は無料でご利用いただけます
                        </p>
                      </div>
                    </td>
                  </tr>

                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-4 pr-8 font-medium text-gray-900 dark:text-white align-top">
                      商品代金以外の必要料金
                    </td>
                    <td className="py-4">
                      なし
                      <span className="text-sm text-gray-500 dark:text-gray-400 block mt-1">
                        ※インターネット接続料金はお客様負担となります
                      </span>
                    </td>
                  </tr>

                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-4 pr-8 font-medium text-gray-900 dark:text-white align-top">
                      支払方法
                    </td>
                    <td className="py-4">
                      クレジットカード決済（Stripe決済）
                      <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                        対応カード：VISA、Mastercard、American Express、JCB
                      </div>
                    </td>
                  </tr>

                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-4 pr-8 font-medium text-gray-900 dark:text-white align-top">
                      支払時期
                    </td>
                    <td className="py-4">
                      購入手続き完了時に即時決済
                      <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                        • 月額プラン：毎月自動更新<br />
                        • 年額プラン：毎年自動更新
                      </div>
                    </td>
                  </tr>

                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-4 pr-8 font-medium text-gray-900 dark:text-white align-top">
                      商品の引き渡し時期
                    </td>
                    <td className="py-4">
                      決済完了後、即時
                      <span className="text-sm text-gray-500 dark:text-gray-400 block mt-1">
                        ライセンスキーをメールで送信し、即座にプレミアム機能をご利用いただけます
                      </span>
                    </td>
                  </tr>

                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-4 pr-8 font-medium text-gray-900 dark:text-white align-top">
                      返品・交換・キャンセル
                    </td>
                    <td className="py-4">
                      <div className="space-y-3">
                        <div>
                          <p className="font-medium mb-1">原則</p>
                          <p className="text-sm">
                            デジタルコンテンツの性質上、返品・交換はお受けできません
                          </p>
                        </div>
                        <div>
                          <p className="font-medium mb-1">例外</p>
                          <p className="text-sm">
                            以下の場合は個別対応いたします：<br />
                            • サービスの重大な不具合により利用できない場合<br />
                            • 誤って重複購入した場合（24時間以内にご連絡ください）
                          </p>
                        </div>
                        <div>
                          <p className="font-medium mb-1">サブスクリプションのキャンセル</p>
                          <p className="text-sm">
                            • いつでもキャンセル可能<br />
                            • キャンセル後も支払済期間終了まで利用可能<br />
                            • 日割り返金は行っておりません
                          </p>
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-4 pr-8 font-medium text-gray-900 dark:text-white align-top">
                      動作環境
                    </td>
                    <td className="py-4">
                      <div className="space-y-2">
                        <div>
                          <p className="font-medium">対応ブラウザ</p>
                          <p className="text-sm">Google Chrome（バージョン88以降）</p>
                        </div>
                        <div>
                          <p className="font-medium">対応OS</p>
                          <p className="text-sm">Windows、Mac、Linux</p>
                        </div>
                        <div>
                          <p className="font-medium">その他要件</p>
                          <p className="text-sm">
                            • インターネット接続環境<br />
                            • Twitchアカウント（視聴のみ、ログイン不要）
                          </p>
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="py-4 pr-8 font-medium text-gray-900 dark:text-white align-top">
                      その他
                    </td>
                    <td className="py-4">
                      <div className="space-y-2">
                        <p>
                          • 本サービスはTwitch Interactive, Inc.とは無関係です
                        </p>
                        <p>
                          • 収集されるデータは公開情報のみです
                        </p>
                        <p>
                          • 詳細な利用条件は
                          <Link href="/terms" className="text-purple-600 dark:text-purple-400 hover:underline ml-1">
                            利用規約
                          </Link>
                          をご確認ください
                        </p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <p className="text-sm text-blue-800 dark:text-blue-300">
                <span className="font-medium">ご注意：</span>
                特定商取引法に基づく表記に関して、正当な理由なく個人情報の開示を求める行為は
                お断りしております。商取引に関する正当な請求の場合のみ、情報を開示いたします。
              </p>
            </div>
          </div>
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