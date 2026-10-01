import Link from "next/link";
import Icon from "./components/Icon";
import Mascot from "./components/Mascot";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import { API_URL, STORE_URL } from "./components/site";
import { FAQ } from "./help/faq";

// トップページの実績値は VPS の実データ（1時間ごとに再生成）
export const revalidate = 3600;

type Stats = { messages: number; messages_24h: number; channels: number; users: number };

async function getStats(): Promise<Stats | null> {
  try {
    const res = await fetch(`${API_URL}/v1/stats`, { next: { revalidate: 3600 } });
    return res.ok ? await res.json() : null;
  } catch {
    return null;
  }
}

// 13112804 -> "1,311万", 170261 -> "17万", 53813 -> "5.3万"
function ja(n: number): string {
  if (n >= 1e8) return `${(n / 1e8).toFixed(1).replace(/\.0$/, "")}億`;
  if (n >= 1e6) return `${Math.floor(n / 1e4).toLocaleString("ja-JP")}万`;
  if (n >= 1e4) return `${(n / 1e4).toFixed(1).replace(/\.0$/, "")}万`;
  return n.toLocaleString("ja-JP");
}

const FEATURES = [
  { icon: "infinity", title: "無期限保存", body: "消えるのはあなたの記憶だけ。コメントは消えずに残り続けます。" },
  { icon: "zap", title: "爆速コメント検索", body: "1,000万件超の過去のコメントから、まばたきする間に探し出します。" },
  { icon: "trash", title: "削除コメント・処分歴", body: "モデレーターに消されたあのコメントも、タイムアウトの回数も記録。" },
  { icon: "play", title: "該当VODへジャンプ", body: "「その発言、配信のどこ？」に一発で答えます。" },
  { icon: "gamepad", title: "ゲームタグ", body: "何の配信中に書き込んだのかまで分かります。" },
  { icon: "thumbsUp", title: "グッド/バッドと注目度", body: "みんなの評価と、どれだけ詮索されている人かが一目で。" },
  { icon: "chat", title: "みんなの掲示板", body: "AIが見張っている、ちょっとだけ治安のいい掲示板。" },
  { icon: "idCard", title: "ユーザーカード連携", body: "Twitchで名前を押すだけ。いつもの画面のまま使えます。" },
];

const STEPS = [
  { icon: "download", title: "拡張機能を入れる", body: "Chromeウェブストアから追加。10秒で終わります。" },
  { icon: "tv", title: "Twitchを開く", body: "いつも通り配信とチャットを表示するだけ。" },
  { icon: "cursor", title: "「履歴」を押す", body: "名前の横のボタンで、その人の過去のコメントが開きます。" },
];

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Twitchコメント履歴保管庫",
  applicationCategory: "BrowserApplication",
  applicationSubCategory: "Chrome拡張機能",
  operatingSystem: "Chrome",
  url: "https://comment-history.com",
  installUrl: STORE_URL,
  description:
    "Twitchで気になるユーザーの過去のコメントを簡単チェック。荒らし対策や配信の雰囲気把握に最適なChrome拡張機能。24時間リアルタイムで収集し、コメントは無期限で保存。",
  inLanguage: "ja",
  offers: [
    { "@type": "Offer", name: "無料プラン", price: "0", priceCurrency: "JPY" },
    {
      "@type": "Offer",
      name: "プレミアムプラン（月額）",
      price: "500",
      priceCurrency: "JPY",
      priceSpecification: { "@type": "UnitPriceSpecification", price: "500", priceCurrency: "JPY", unitCode: "MON" },
    },
  ],
};

// 疑似チャット（ヒーローのイラスト）。色はTwitchのユーザー名色っぽく
const CHAT = [
  { name: "gg_ojisan", color: "#1e90ff", text: "今日の配信神回すぎる" },
  { name: "arashi_king", color: "#ff4f8b", text: "つまんね、他の配信のほうがマシ", target: true },
  { name: "kusa_bot3", color: "#00a67e", text: "草" },
  { name: "shoken_desu", color: "#daa520", text: "初見です！" },
];

export default async function Home() {
  const stats = await getStats();
  const users = stats ? `${ja(stats.users)}人` : "17万人";
  const counters = [
    { value: stats ? `${ja(stats.messages)}+` : "1,300万+", label: "保存コメント数（無期限保存）" },
    { value: stats ? `${ja(stats.users)}+` : "17万+", label: "記録ユーザー数" },
    { value: stats ? `+${ja(stats.messages_24h)}` : "毎日", label: "直近24時間の新着コメント" },
    { value: "24/7", label: "リアルタイム収集" },
  ];

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }} />
      <SiteHeader />

      <main>
        {/* ヒーロー */}
        <section className="chx-dots relative overflow-hidden border-b border-line">
          <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-accent-2/20 blur-3xl" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-14 md:grid-cols-[1.1fr_1fr] md:px-6 md:py-20">
            <div className="chx-pop-in">
              <span className="chx-sticker">
                <span className="chx-live-dot inline-block h-2 w-2 rounded-full bg-accent-2" />
                LIVE {users}以上のユーザーデータを収集中
              </span>
              <h1 className="mt-5 font-display text-4xl leading-tight text-ink sm:text-5xl md:text-6xl">
                <span className="inline-block">Twitch</span><span className="inline-block">コメント履歴</span><span className="inline-block text-accent">保管庫</span>
              </h1>
              <p className="mt-5 font-display text-2xl text-ink md:text-3xl">
                その荒らし、<span className="chx-highlight">前科あります。</span>
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted md:text-lg">
                気になるユーザーの過去のコメントを、名前の横の「履歴」ボタンひとつでチェック。
                荒らし対策にも、配信の空気読みにも。より快適な配信視聴体験を。
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="chx-btn chx-btn-primary text-base md:text-lg">
                  <Icon name="download" /> Chrome拡張機能をインストール
                </a>
                <Link href="/premium" className="chx-btn chx-btn-ghost text-base md:text-lg">
                  <Icon name="crown" /> プレミアムを見る
                </Link>
              </div>
              <p className="mt-4 text-xs text-muted">無料で使えます。クレカもメアドもいりません（Twitchログインだけ）。</p>
            </div>

            {/* 疑似チャット → 履歴カード */}
            <div className="chx-pop-in chx-delay-1 relative mx-auto w-full max-w-md" aria-hidden="true">
              <div className="chx-card overflow-hidden">
                <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
                  <span className="text-xs font-black tracking-wider text-muted">STREAM CHAT</span>
                  <span className="flex items-center gap-1 text-xs font-bold text-accent-2">
                    <span className="chx-live-dot h-1.5 w-1.5 rounded-full bg-accent-2" /> LIVE
                  </span>
                </div>
                <div className="space-y-1 p-3">
                  {CHAT.map((c) => (
                    <div key={c.name} className={`chx-chat-line ${c.target ? "is-target" : ""}`}>
                      <span className="font-bold" style={{ color: c.color }}>{c.name}</span>
                      <span className={`chx-pill ${c.target ? "is-hot" : ""}`}>
                        <Icon name="history" size={11} strokeWidth={2.5} />履歴
                      </span>
                      <span className="text-ink/90">{c.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="chx-card chx-pop-in chx-delay-3 relative -mt-4 ml-6 mr-[-8px] p-4 sm:ml-10">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-accent-2-soft font-display text-accent-2">A</div>
                  <div className="min-w-0">
                    <p className="truncate font-black text-ink">arashi_king</p>
                    <p className="text-xs text-muted">保存 1,204件 ・ 最終 3分前</p>
                  </div>
                  <span className="ml-auto flex shrink-0 items-center gap-1 rounded-full bg-accent-2-soft px-2 py-1 text-xs font-black text-accent-2">
                    <Icon name="alert" size={12} /> 処分 5件
                  </span>
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5 text-xs">
                  <span className="rounded-full bg-accent-soft px-2 py-0.5 font-bold text-accent-ink">12チャンネルに出没</span>
                  <span className="flex items-center gap-1 rounded-full bg-surface-2 px-2 py-0.5 font-bold text-muted"><Icon name="thumbsUp" size={12} /> 2</span>
                  <span className="flex items-center gap-1 rounded-full bg-surface-2 px-2 py-0.5 font-bold text-muted"><Icon name="thumbsUp" size={12} className="rotate-180" /> 48</span>
                  <span className="flex items-center gap-1 rounded-full bg-surface-2 px-2 py-0.5 font-bold text-muted"><Icon name="eye" size={12} /> よく詮索されている人</span>
                </div>
                <p className="mt-3 rounded-xl bg-surface-2 p-2.5 text-xs text-muted">
                  <span className="mr-1 font-bold text-accent-2">削除済み</span> 「（モデレーターにより削除されたコメント）」
                </p>
              </div>
              <Mascot size={88} className="chx-float absolute -bottom-8 -left-6 hidden sm:block" />
            </div>
          </div>
        </section>

        {/* ライブカウンター */}
        <section className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="-mt-px grid grid-cols-2 gap-3 py-10 md:grid-cols-4">
            {counters.map((c) => (
              <div key={c.label} className="chx-card p-5 text-center">
                <div className="font-display text-3xl text-accent md:text-4xl">{c.value}</div>
                <div className="mt-1 text-xs font-bold text-muted md:text-sm">{c.label}</div>
              </div>
            ))}
          </div>
          <p className="-mt-4 text-center text-xs text-muted">数字は実際のデータベースから1時間ごとに自動更新しています。盛ってません。</p>
        </section>

        {/* 無期限保存のメッセージ */}
        <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
          <div className="chx-card relative overflow-hidden p-8 md:p-12">
            <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-accent-2/15 blur-2xl" />
            <p className="chx-kicker">Unlimited archive</p>
            <h2 className="mt-3 font-display text-3xl leading-snug text-ink md:text-4xl">
              3ヶ月で忘れる時代は<br className="sm:hidden" />終わりました。
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted">
              コメント履歴は期限なしで保存。数ヶ月前の過去のコメントも、昨日の発言と同じ速さで出てきます。
              国内サーバーに専用の検索エンジンを置いて、1,000万件を超えるデータでも一瞬で検索できるようにしました。
            </p>
          </div>
        </section>

        {/* 機能 */}
        <section className="mx-auto max-w-6xl px-4 py-8 md:px-6" id="features">
          <div className="text-center">
            <p className="chx-kicker">Features</p>
            <h2 className="mt-2 font-display text-3xl text-ink md:text-4xl">荒らし対策から、ただの好奇心まで。</h2>
            <p className="mt-3 text-muted">快適な配信視聴のための、ちょっと踏み込んだ便利機能。</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f) => (
              <div key={f.title} className="chx-card chx-feature p-6">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-accent-soft text-accent-ink">
                  <Icon name={f.icon} size={22} />
                </span>
                <h3 className="mt-4 text-lg font-black text-ink">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 使い方 */}
        <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
          <div className="text-center">
            <p className="chx-kicker">How it works</p>
            <h2 className="mt-2 font-display text-3xl text-ink md:text-4xl">かんたん3ステップ</h2>
          </div>
          <ol className="mt-10 grid gap-4 md:grid-cols-3">
            {STEPS.map((s, i) => (
              <li key={s.title} className="chx-card relative p-6">
                <span className="absolute -top-4 left-6 grid h-9 w-9 place-items-center rounded-full bg-accent font-display text-white shadow-card">
                  {i + 1}
                </span>
                <span className="mt-2 grid h-12 w-12 place-items-center rounded-2xl bg-accent-2-soft text-accent-2">
                  <Icon name={s.icon} size={22} />
                </span>
                <h3 className="mt-4 text-lg font-black text-ink">{s.title}</h3>
                <p className="mt-2 text-sm text-muted">{s.body}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* 料金 */}
        <section className="mx-auto max-w-6xl px-4 py-8 md:px-6" id="pricing">
          <div className="text-center">
            <p className="chx-kicker">Pricing</p>
            <h2 className="mt-2 font-display text-3xl text-ink md:text-4xl">あなたに最適なプランを選択</h2>
            <p className="mt-3 text-muted">ラーメン1杯より安い。トッピングは付きません。</p>
          </div>
          <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-2">
            <div className="chx-card flex flex-col p-8">
              <h3 className="text-xl font-black text-ink">無料プラン</h3>
              <p className="mt-2 font-display text-5xl text-ink">¥0</p>
              <p className="text-sm text-muted">永久無料</p>
              <ul className="mt-6 flex-1 space-y-3 text-sm">
                {["1日2ユーザーまで履歴表示", "コメント履歴・チャンネル統計", "ユーザー名検索・コメント検索", "お気に入りユーザー保存"].map((t) => (
                  <li key={t} className="flex items-start gap-2 text-ink"><Icon name="check" size={18} className="mt-0.5 shrink-0 text-ok" />{t}</li>
                ))}
              </ul>
              <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="chx-btn chx-btn-ghost mt-8 w-full">無料で始める</a>
            </div>
            <div className="chx-card relative flex flex-col border-2 !border-accent p-8">
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-accent-2 px-4 py-1 text-xs font-black text-white">おすすめ</span>
              <h3 className="text-xl font-black text-ink">プレミアムプラン</h3>
              <p className="mt-2 font-display text-5xl text-accent">¥500<span className="font-sans text-base font-bold text-muted"> /月</span></p>
              <p className="text-sm text-muted">いつでもキャンセル可能</p>
              <ul className="mt-6 flex-1 space-y-3 text-sm">
                {["1日2ユーザーの制限を解除", "無制限にユーザーの履歴を閲覧", "キャンセル後も期間終了まで利用可能"].map((t) => (
                  <li key={t} className="flex items-start gap-2 font-bold text-ink"><Icon name="check" size={18} className="mt-0.5 shrink-0 text-accent" />{t}</li>
                ))}
              </ul>
              <Link href="/premium" className="chx-btn chx-btn-primary mt-8 w-full">プレミアムについて詳しく見る</Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-3xl px-4 py-16 md:px-6">
          <div className="text-center">
            <p className="chx-kicker">FAQ</p>
            <h2 className="mt-2 font-display text-3xl text-ink md:text-4xl">よくある質問</h2>
          </div>
          <div className="mt-8 space-y-3">
            {[FAQ[0].questions[0], FAQ[0].questions[2], FAQ[1].questions[1], FAQ[4].questions[1]].map((item) => (
              <details key={item.q} className="chx-card px-5 py-4">
                <summary className="flex items-center justify-between gap-4 font-bold text-ink">
                  {item.q}
                  <Icon name="chevronDown" className="chx-chevron shrink-0 text-muted" />
                </summary>
                <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-muted">{item.a}</p>
              </details>
            ))}
          </div>
          <p className="mt-6 text-center">
            <Link href="/help" className="inline-flex items-center gap-1 font-bold text-accent-ink hover:underline">
              ヘルプセンターをすべて見る <Icon name="arrowRight" size={16} />
            </Link>
          </p>
        </section>

        {/* チャンネル追加 CTA */}
        <section className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="relative overflow-hidden rounded-[28px] bg-accent p-8 text-white md:p-12">
            <div className="chx-dots pointer-events-none absolute inset-0 opacity-30" />
            <div className="relative grid items-center gap-8 md:grid-cols-[1fr_auto]">
              <div>
                <h2 className="font-display text-3xl leading-snug md:text-4xl">推しのチャンネルがない？</h2>
                <p className="mt-3 max-w-xl text-white/85">
                  収集チャンネルは追加リクエストできます。フォロワー1万人以上またはパートナーの配信者なら、数分で自動追加されます。
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="/contact?type=user" className="chx-btn bg-white text-accent-ink shadow-card">
                    <Icon name="plus" /> チャンネル追加をリクエスト
                  </Link>
                  <Link href="/channels" className="chx-btn border-2 border-white/60 text-white hover:bg-white/10">
                    <Icon name="tv" /> 収集チャンネル一覧
                  </Link>
                </div>
              </div>
              <Mascot size={150} className="chx-float mx-auto hidden md:block" />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
