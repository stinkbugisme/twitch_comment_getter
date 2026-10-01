import type { Metadata } from 'next';
import Link from 'next/link';
import Icon from '../components/Icon';
import Mascot from '../components/Mascot';
import SiteFooter from '../components/SiteFooter';
import SiteHeader from '../components/SiteHeader';

export const metadata: Metadata = {
  title: 'プレミアムプラン - Twitchコメント履歴保管庫',
  description: 'Twitchコメント履歴保管庫のプレミアムプランで、無制限にユーザー履歴を閲覧できます。',
};

const PERKS = [
  { text: '1日2ユーザーの制限を解除', strong: true },
  { text: '無制限にユーザーの履歴を閲覧' },
  { text: 'キャンセル後も期間終了まで利用可能' },
];

const QA = [
  { q: '支払い方法は？', a: 'クレジットカード（VISA、Mastercard、American Express、JCB）がご利用いただけます。決済はStripeで安全に処理されます。' },
  { q: 'キャンセルはできますか？', a: 'いつでもキャンセル可能です。キャンセル後も支払済期間終了まで利用できます。拡張機能のポップアップからキャンセルできます。' },
  { q: '返金はできますか？', a: '原則として返金は承っておりませんが、サービスの重大な不具合がある場合は個別対応いたします。詳しくはヘルプページをご確認ください。', help: true },
  { q: '複数デバイスで使えますか？', a: 'Twitchアカウントに紐づくため、同じアカウントでログインすればどのデバイスでもプレミアム機能をご利用いただけます。' },
];

export default function PremiumPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="mx-auto max-w-5xl px-4 py-12 md:px-6">
        <div className="text-center">
          <span className="chx-sticker"><Icon name="crown" size={14} /> 1日2ユーザーの制限を解除</span>
          <h1 className="mt-4 font-display text-5xl text-ink md:text-6xl">プレミアム<span className="text-accent">プラン</span></h1>
          <p className="mt-4 text-lg text-muted">無制限にユーザーの履歴を閲覧できます。詮索に上限はいりません。</p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl items-start gap-6 md:grid-cols-[1.2fr_1fr]">
          <div className="chx-card relative border-2 !border-accent p-8">
            <span className="absolute -top-3.5 left-8 rounded-full bg-accent-2 px-4 py-1 text-xs font-black text-white">月額プラン</span>
            <p className="font-display text-6xl text-accent">¥500<span className="font-sans text-lg font-bold text-muted">/月</span></p>
            <p className="mt-1 text-sm text-muted">いつでもキャンセル可能</p>
            <ul className="mt-6 space-y-3">
              {PERKS.map((p) => (
                <li key={p.text} className={`flex items-start gap-2 text-ink ${p.strong ? 'font-black' : 'font-bold'}`}>
                  <Icon name="check" size={20} className="mt-0.5 shrink-0 text-accent" />{p.text}
                </li>
              ))}
            </ul>
          </div>

          <div className="chx-card chx-dots p-6">
            <div className="flex items-center gap-3">
              <Mascot size={56} />
              <p className="font-black text-ink">プレミアムプランは拡張機能から購入できます</p>
            </div>
            <ol className="mt-5 space-y-3 text-sm text-ink">
              {['Chrome拡張機能のポップアップを開く', 'Twitchアカウントでログイン', '「プレミアム設定」から月額¥500で登録'].map((s, i) => (
                <li key={s} className="flex items-start gap-3">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-accent font-display text-sm text-white">{i + 1}</span>
                  <span className="pt-1">{s}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <section className="mx-auto mt-14 max-w-3xl">
          <h2 className="text-center font-display text-3xl text-ink">よくある質問</h2>
          <div className="mt-6 space-y-3">
            {QA.map((item) => (
              <div key={item.q} className="chx-card p-5">
                <h3 className="font-black text-ink"><span className="mr-2 font-display text-accent">Q.</span>{item.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.help ? (
                    <>原則として返金は承っておりませんが、サービスの重大な不具合がある場合は個別対応いたします。
                      詳しくは<Link href="/help" className="font-bold text-accent-ink hover:underline">ヘルプページ</Link>をご確認ください。</>
                  ) : item.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm font-bold text-muted">
          <span className="flex items-center gap-2"><Icon name="lock" size={18} /> SSL暗号化通信</span>
          <span className="flex items-center gap-2"><Icon name="card" size={18} /> Stripe安全決済</span>
          <span className="flex items-center gap-2"><Icon name="mail" size={18} /> サポート体制</span>
        </div>
        <p className="mt-3 text-center text-xs text-muted">
          決済はStripeを通じて安全に処理されます。カード情報は当サービスには保存されません。
        </p>
      </main>

      <SiteFooter />
    </div>
  );
}
