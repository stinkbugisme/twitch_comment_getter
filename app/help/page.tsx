import Link from 'next/link';
import Icon from '../components/Icon';
import Mascot from '../components/Mascot';
import SiteFooter from '../components/SiteFooter';
import SiteHeader from '../components/SiteHeader';
import { FAQ, faqJsonLd } from './faq';

export default function HelpPage() {
  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd()) }} />
      <SiteHeader />

      <main className="mx-auto max-w-4xl px-4 py-12 md:px-6">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="chx-kicker">Help Center</p>
            <h1 className="mt-2 font-display text-4xl text-ink md:text-5xl">ヘルプセンター</h1>
            <p className="mt-4 text-muted">
              よくある質問と回答をまとめました。お探しの情報が見つからない場合は、お気軽にお問い合わせください。
            </p>
          </div>
          <Mascot size={96} className="chx-float hidden shrink-0 sm:block" />
        </div>

        <div className="space-y-4">
          {FAQ.map((category, i) => (
            <details key={category.id} id={category.id} open={i === 0} className="chx-card overflow-hidden">
              <summary className="flex items-center justify-between gap-4 px-5 py-4 hover:bg-surface-2">
                <h2 className="flex items-center gap-3 text-lg font-black text-ink">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent-soft text-accent-ink">
                    <Icon name={category.icon} size={18} />
                  </span>
                  {category.category}
                </h2>
                <Icon name="chevronDown" className="chx-chevron text-muted" />
              </summary>
              <div className="px-5 pb-5">
                {category.questions.map((item) => (
                  <div key={item.q} className="border-t border-line py-4">
                    <h3 className="font-bold text-ink">
                      <span className="mr-2 font-display text-accent">Q.</span>{item.q}
                    </h3>
                    <div className="mt-2 whitespace-pre-line text-sm leading-relaxed text-muted">{item.a}</div>
                  </div>
                ))}
              </div>
            </details>
          ))}
        </div>

        <div className="chx-card chx-dots mt-12 p-8">
          <h2 className="font-display text-2xl text-ink">まだ解決しませんか？</h2>
          <p className="mt-3 text-muted">ヘルプセンターで解決しない場合は、直接お問い合わせください。人間（とたまにAI）が読みます。</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact?type=inquiry" className="chx-btn chx-btn-primary">
              <Icon name="mail" size={18} /> お問い合わせフォーム
            </Link>
            <a href="mailto:info@comment-history.com" className="chx-btn chx-btn-ghost">
              <Icon name="external" size={18} /> メールで問い合わせ
            </a>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
