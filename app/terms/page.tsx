import Link from 'next/link';

export default function TermsPage() {
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
            利用規約
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
            <section>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                最終更新日：2025年1月18日
              </p>

              <p className="text-gray-600 dark:text-gray-300">
                この利用規約（以下「本規約」といいます）は、Twitchコメント履歴保管庫（以下「本サービス」といいます）の
                利用条件を定めるものです。本サービスを利用される方（以下「利用者」といいます）は、
                本規約に同意したものとみなされます。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                第1条（適用）
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                本規約は、利用者と本サービス運営者（以下「運営者」といいます）との間の本サービスの利用に関わる
                一切の関係に適用されるものとします。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                第2条（サービス内容）
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                本サービスは、以下の機能を提供します：
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                <li>Twitchの公開チャットメッセージの履歴表示（過去3ヶ月分）</li>
                <li>ユーザーごとのメッセージ統計表示</li>
                <li>ユーザー名検索機能（プレミアムプラン）</li>
                <li>コメント内容検索機能（プレミアムプラン）</li>
                <li>お気に入りユーザー保存機能（プレミアムプラン）</li>
                <li>チャンネル統計機能（プレミアムプラン）</li>
                <li>広告非表示機能（プレミアムプラン）</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mt-4">
                運営者は、本サービスの内容を利用者に通知することなく変更することができるものとします。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                第3条（利用条件）
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                本サービスを利用するには、以下の条件を満たす必要があります：
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                <li>13歳以上であること</li>
                <li>Twitchの利用規約に違反していないこと</li>
                <li>Chrome ウェブストアの利用規約に違反していないこと</li>
                <li>本規約に同意していること</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                第4条（アカウント管理）
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                1. 利用者は、プレミアムプランの購入時に発行されるライセンスキーを適切に管理する責任を負います。<br />
                2. ライセンスキーの紛失、盗難、不正使用等による損害について、運営者は一切責任を負いません。<br />
                3. ライセンスキーの譲渡、貸与、販売は禁止されています。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                第5条（料金および支払い）
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                1. 本サービスの基本機能は無料でご利用いただけます。
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                2. プレミアムプランの料金は以下の通りです：
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                <li>月額プラン：500円（税込）</li>
                <li>年額プラン：5,000円（税込）</li>
                <li>その他、運営者が定める料金プラン</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mt-4">
                3. 支払いは、Stripe を通じて処理されます。<br />
                4. 料金は前払いとし、日割り計算による返金は行いません。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                第6条（禁止事項）
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                利用者は、本サービスの利用にあたり、以下の行為をしてはなりません：
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                <li>法令または公序良俗に違反する行為</li>
                <li>犯罪行為に関連する行為</li>
                <li>運営者または第三者の知的財産権を侵害する行為</li>
                <li>運営者または第三者の名誉、信用を毀損する行為</li>
                <li>本サービスのサーバーに過度な負荷をかける行為</li>
                <li>リバースエンジニアリング、逆コンパイル、逆アセンブル等の行為</li>
                <li>自動化ツール、ボット、スクレイピング等による過度なアクセス</li>
                <li>ライセンスキーの不正使用、譲渡、販売</li>
                <li>複数のデバイスでの同時使用（ライセンスごとに1デバイス）</li>
                <li>収集したデータの商用利用</li>
                <li>その他、運営者が不適切と判断する行為</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                第7条（サービスの停止等）
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                運営者は、以下のいずれかに該当する場合、事前の通知なく本サービスの全部または一部の提供を
                停止または中断することができるものとします：
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 ml-4 mt-4">
                <li>本サービスのシステムの保守、更新、修理を行う場合</li>
                <li>地震、落雷、火災、停電等の不可抗力により提供が困難な場合</li>
                <li>コンピューターまたは通信回線等の障害が生じた場合</li>
                <li>Twitch、Supabase、Stripe等の外部サービスが停止した場合</li>
                <li>その他、運営者が停止または中断が必要と判断した場合</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                第8条（免責事項）
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                1. 運営者は、本サービスに起因して利用者に生じた損害について、一切の責任を負いません。<br />
                2. 本サービスで表示される情報の正確性、完全性、有用性等について、運営者は保証しません。<br />
                3. 本サービスは、Twitchの公開APIおよび公開情報を使用しており、Twitchの仕様変更により
                サービスが利用できなくなる可能性があります。<br />
                4. データの消失、破損等について、運営者は責任を負いません。<br />
                5. 運営者は、利用者間のトラブルに関与しません。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                第9条（知的財産権）
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                1. 本サービスに関する知的財産権は、運営者または正当な権利者に帰属します。<br />
                2. 利用者は、本サービスを利用することにより得られる情報を、運営者の事前の書面による
                承諾なく、複製、譲渡、出版、放送、公衆送信等をしてはなりません。<br />
                3. Twitchのチャットメッセージの著作権は、各投稿者に帰属します。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                第10条（利用制限および登録抹消）
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                運営者は、利用者が以下のいずれかに該当する場合、事前の通知なく本サービスの利用を
                制限し、またはライセンスを無効化することができるものとします：
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 ml-4 mt-4">
                <li>本規約のいずれかの条項に違反した場合</li>
                <li>登録事項に虚偽の事実があることが判明した場合</li>
                <li>決済手段として指定したクレジットカードの利用が停止された場合</li>
                <li>その他、運営者が本サービスの利用が不適当と判断した場合</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                第11条（返金・キャンセル）
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                1. 利用者都合によるキャンセルの場合、返金は行いません。<br />
                2. サービスの重大な不具合により利用できない場合は、個別に対応します。<br />
                3. サブスクリプションのキャンセルは、次回更新日の24時間前までに行ってください。<br />
                4. キャンセル後も、既に支払い済みの期間終了まではサービスを利用できます。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                第12条（規約の変更）
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                1. 運営者は、必要と判断した場合、利用者に通知することなく本規約を変更できるものとします。<br />
                2. 変更後の規約は、本サービス内に掲示した時点から効力を生じるものとします。<br />
                3. 本規約の変更後に本サービスを利用した場合、変更後の規約に同意したものとみなします。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                第13条（通知）
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                運営者から利用者への通知は、本サービス内での掲示、拡張機能のアップデート、
                または登録されたメールアドレスへの送信により行います。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                第14条（準拠法・裁判管轄）
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                1. 本規約の解釈にあたっては、日本法を準拠法とします。<br />
                2. 本サービスに関して紛争が生じた場合、運営者の所在地を管轄する裁判所を
                専属的合意管轄とします。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
                第15条（お問い合わせ）
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                本規約に関するお問い合わせは、以下の連絡先までお願いいたします：
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

            <section className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <p className="text-gray-600 dark:text-gray-300">
                以上
              </p>
              <p className="text-gray-600 dark:text-gray-300 mt-4">
                制定日：2025年1月18日<br />
                最終改定日：2025年1月18日
              </p>
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