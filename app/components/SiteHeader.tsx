import Link from 'next/link';
import Icon from './Icon';
import Mascot from './Mascot';
import { STORE_URL } from './site';

const NAV = [
  { href: '/channels', label: '収集チャンネル' },
  { href: '/premium', label: 'プレミアム' },
  { href: '/help', label: 'ヘルプ' },
  { href: '/contact?type=user', label: 'チャンネル追加' },
];

// 共通ヘッダー（JSなしで動く: モバイルメニューは <details>）
export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 md:px-6">
        <Link href="/" className="group flex min-w-0 items-center gap-2" aria-label="Twitchコメント履歴保管庫 トップへ">
          <Mascot size={34} className="shrink-0 transition-transform group-hover:-rotate-6" />
          <span className="truncate font-display text-[15px] text-ink sm:text-lg">
            Twitchコメント履歴<span className="text-accent">保管庫</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="メインメニュー">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href}
              className="rounded-full px-3 py-2 text-sm font-bold text-muted transition-colors hover:bg-accent-soft hover:text-accent-ink">
              {n.label}
            </Link>
          ))}
          <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="chx-btn chx-btn-primary ml-2 !px-4 !py-2 text-sm">
            <Icon name="download" size={16} /> 拡張を入れる
          </a>
        </nav>

        <details className="relative md:hidden">
          <summary className="rounded-full border border-line p-2 text-ink" aria-label="メニューを開く">
            <Icon name="menu" size={20} />
          </summary>
          <div className="chx-card absolute right-0 top-12 w-56 p-2">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href}
                className="block rounded-xl px-3 py-2.5 text-sm font-bold text-ink hover:bg-accent-soft">
                {n.label}
              </Link>
            ))}
            <a href={STORE_URL} target="_blank" rel="noopener noreferrer"
              className="chx-btn chx-btn-primary mt-2 w-full !py-2.5 text-sm">
              <Icon name="download" size={16} /> 拡張を入れる
            </a>
          </div>
        </details>
      </div>
    </header>
  );
}
