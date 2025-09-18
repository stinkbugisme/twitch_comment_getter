import Link from 'next/link';

export default function PrivacyPage() {
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
            プライバシーポリシー
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
            <section>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                最終更新日：2025年1月18日
              </p>

              <p className="text-gray-600 dark:text-gray-300">
                Twitchコメント履歴保管庫（以下「本サービス」といいます）は、利用者のプライバシーを尊重し、個人情報の保護に努めます。
                本プライバシーポリシーは、本サービスがどのような情報を収集し、どのように使用・管理するかについて説明します。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                1. 収集する情報
              </h2>

              <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200 mt-6 mb-3">
                1.1 Chrome拡張機能が収集する情報
              </h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                <li>閲覧したユーザー名（履歴表示ボタンをクリックしたユーザー）</li>
                <li>拡張機能の使用状況（表示回数、使用日時）</li>
                <li>お気に入りに保存したユーザー名（プレミアム機能）</li>
                <li>デバイスID（ランダムに生成される識別子）</li>
                <li>ライセンスキー情報</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200 mt-6 mb-3">
                1.2 バックエンドシステムが収集する情報（拡張機能とは独立）
              </h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                <li>Twitchの公開チャットメッセージ（監視対象チャンネルのみ）</li>
                <li>公開ユーザー名</li>
                <li>メッセージの投稿日時</li>
                <li>チャンネル名</li>
              </ul>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 ml-4">
                ※これらの情報は拡張機能が直接収集するものではなく、別システムで事前に収集されたデータです
              </p>

              <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200 mt-6 mb-3">
                1.3 決済時に収集される情報
              </h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                <li>メールアドレス（Stripe経由で取得）</li>
                <li>決済情報（Stripeが直接処理、本サービスには保存されません）</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200 mt-6 mb-3">
                1.4 収集しない情報
              </h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                <li>氏名、住所、電話番号などの個人を特定できる情報</li>
                <li>クレジットカード番号（Stripeが直接処理）</li>
                <li>プライベートメッセージやDM</li>
                <li>Twitchのログイン情報やパスワード</li>
                <li>ブラウジング履歴（Twitch以外のサイト）</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                2. 情報の利用目的
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                収集した情報は以下の目的で利用します：
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                <li>コメント履歴表示機能の提供</li>
                <li>ユーザー検索機能の提供（プレミアム）</li>
                <li>お気に入り機能の提供（プレミアム）</li>
                <li>プレミアムライセンスの認証と管理</li>
                <li>月間使用制限の管理（無料プラン）</li>
                <li>サービスの改善と新機能の開発</li>
                <li>利用統計の分析</li>
                <li>技術的な問題の診断と解決</li>
                <li>不正利用の防止</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                3. 情報の共有と開示
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                本サービスは、以下の場合を除き、収集した情報を第三者に販売、貸与、開示することはありません：
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                <li>利用者の同意がある場合</li>
                <li>法令に基づく開示要請があった場合</li>
                <li>サービス提供に必要な範囲で業務委託先と共有する場合
                  <ul className="list-disc list-inside ml-6 mt-2">
                    <li>Supabase（データベースサービス）</li>
                    <li>Stripe（決済処理）</li>
                    <li>Resend（メール送信）</li>
                  </ul>
                </li>
                <li>統計的なデータとして個人を識別できない形で利用する場合</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                4. データの保存期間
              </h2>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                <li>チャットメッセージ：3ヶ月間（自動削除）</li>
                <li>ユーザー統計情報：サービス提供期間中</li>
                <li>お気に入りユーザーリスト：利用者が削除するまで（ローカル保存）</li>
                <li>月間使用履歴：1ヶ月間（ローカル保存）</li>
                <li>ライセンス情報：契約期間中および終了後1年間</li>
                <li>アナリティクスデータ：1年間</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                5. セキュリティ
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                本サービスは、収集した情報を適切に管理し、不正アクセス、紛失、破壊、改ざん、漏洩などを防ぐために、
                以下のセキュリティ対策を実施しています：
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 ml-4 mt-4">
                <li>HTTPS暗号化通信の使用</li>
                <li>Supabaseの Row Level Security によるアクセス制御</li>
                <li>Chrome拡張機能のローカルストレージ暗号化</li>
                <li>APIキーの適切な管理</li>
                <li>定期的なセキュリティ監査</li>
                <li>最小権限の原則に基づくデータアクセス管理</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                6. Chrome Storage APIの使用
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                本サービスのChrome拡張機能は、Chrome Storage APIを使用してローカルにデータを保存します。
                保存される情報には以下が含まれます：
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 ml-4 mt-4">
                <li>デバイスID（自動生成）</li>
                <li>ライセンスキー情報</li>
                <li>プレミアムステータス</li>
                <li>お気に入りユーザーリスト（最大20名）</li>
                <li>月間使用状況（無料プランの制限管理用）</li>
              </ul>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 ml-4">
                ※これらのデータはブラウザのローカルに保存され、拡張機能をアンインストールすると削除されます
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                7. 子どものプライバシー
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                本サービスは13歳未満の子どもを対象としていません。13歳未満の方は本サービスを利用しないでください。
                Twitchの利用規約に準拠し、Twitchの利用が許可された年齢の方のみご利用ください。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                8. 利用者の権利
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                利用者は以下の権利を有します：
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                <li>収集された情報の開示を求める権利</li>
                <li>情報の訂正を求める権利</li>
                <li>情報の削除を求める権利（技術的に可能な範囲で）</li>
                <li>情報の利用停止を求める権利</li>
                <li>拡張機能のアンインストールによるローカルデータの完全削除</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mt-4">
                これらの権利行使を希望される場合は、下記の連絡先までご連絡ください。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                9. プライバシーポリシーの変更
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                本プライバシーポリシーは、法令の改正やサービスの変更に応じて更新されることがあります。
                重要な変更がある場合は、拡張機能のアップデート時または本サービス内で通知します。
                最終更新日は本ポリシーの冒頭に記載されています。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                10. お問い合わせ
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                本プライバシーポリシーに関するお問い合わせは、以下の連絡先までお願いいたします：
              </p>
              <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300">
                  Twitchコメント履歴保管庫 運営<br />
                  お問い合わせフォーム：
                  <Link href="/contact?type=inquiry" className="text-purple-600 dark:text-purple-400 hover:underline ml-2">
                    https://comment-history.com/contact
                  </Link>
                </p>
              </div>
            </section>
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