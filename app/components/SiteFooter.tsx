import Link from 'next/link';
import Mascot from './Mascot';
import { STORE_URL } from './site';

const COLS = [
  {
    title: 'プロダクト',
    links: [
      { href: '/premium', label: 'プレミアムプラン' },
      { href: '/channels', label: '収集チャンネル' },
      { href: STORE_URL, label: 'Chrome拡張機能', external: true },
    ],
  },
  {
    title: 'サポート',
    links: [
      { href: '/help', label: 'ヘルプセンター' },
      { href: '/contact?type=inquiry', label: 'お問い合わせ' },
      { href: '/contact?type=user', label: 'チャンネル追加要望' },
      { href: '/contact?type=feature', label: '機能要望' },
    ],
  },
  {
    title: '法的情報',
    links: [
      { href: '/terms', label: '利用規約' },
      { href: '/privacy', label: 'プライバシーポリシー' },
      { href: '/legal', label: '特定商取引法に基づく表記' },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-line bg-surface-2">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-5 md:px-6">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <Mascot size={40} />
            <span className="font-display text-lg text-ink">Twitchコメント履歴保管庫</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            コメントは忘れない。ただし、あなたの黒歴史もです。<br />
            Twitchコメント履歴保管庫は、Twitch Interactive, Inc.とは無関係の独立したサービスです。
          </p>
          <p className="mt-3 text-sm text-muted">
            お問い合わせ：<a href="mailto:info@comment-history.com" className="font-bold text-accent-ink hover:underline">info@comment-history.com</a>
          </p>
        </div>
        {COLS.map((c) => (
          <div key={c.title}>
            <h2 className="text-sm font-black text-ink">{c.title}</h2>
            <ul className="mt-3 space-y-2">
              {c.links.map((l) => (
                <li key={l.href}>
                  {'external' in l && l.external ? (
                    <a href={l.href} target="_blank" rel="noopener noreferrer" className="text-sm text-muted hover:text-accent-ink">{l.label}</a>
                  ) : (
                    <Link href={l.href} className="text-sm text-muted hover:text-accent-ink">{l.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-line py-6 text-center text-xs text-muted">
        &copy; 2025–2026 Twitchコメント履歴保管庫. All rights reserved.
      </div>
    </footer>
  );
}
