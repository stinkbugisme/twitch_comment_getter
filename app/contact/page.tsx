'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Icon from '../components/Icon';
import Mascot from '../components/Mascot';
import SiteFooter from '../components/SiteFooter';
import SiteHeader from '../components/SiteHeader';

type Kind = 'user' | 'feature' | 'inquiry';

type ChannelCheck = {
  login: string;
  exists: boolean;
  display_name?: string;
  profile_image_url?: string;
  followers?: number | null;
  broadcaster_type?: string;
  collected?: boolean;
  auto_approve?: boolean;
};

const API_URL = process.env.NEXT_PUBLIC_COMMENT_API_URL || 'https://api.comment-history.com';

const KINDS: { value: Kind; label: string; desc: string; icon: string }[] = [
  { value: 'user', label: 'チャンネル追加申請', desc: 'コメントを収集してほしい配信者', icon: 'tv' },
  { value: 'feature', label: '機能の要望', desc: 'こんな機能がほしい', icon: 'sparkle' },
  { value: 'inquiry', label: 'お問い合わせ', desc: '不具合・課金・削除依頼など', icon: 'mail' },
];

const INQUIRY_CATEGORIES = ['不具合の報告', '課金・プレミアムについて', '自分のコメント履歴の削除依頼', '使い方の質問', 'その他'];

const inputClass =
  'w-full rounded-2xl border border-line bg-surface px-4 py-3 text-ink shadow-sm outline-none transition-colors placeholder:text-muted focus:border-accent focus:ring-4 focus:ring-accent-soft';

function Nav() {
  return <SiteHeader />;
}

function ContactForm() {
  const searchParams = useSearchParams();
  const [kind, setKind] = useState<Kind>('user');
  const [channel, setChannel] = useState('');
  const [check, setCheck] = useState<ChannelCheck | null>(null);
  const [checking, setChecking] = useState(false);
  const [category, setCategory] = useState(INQUIRY_CATEGORIES[0]);
  const [twitchId, setTwitchId] = useState('');
  const [content, setContent] = useState('');
  const [replyTo, setReplyTo] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState<string | null>(null);

  useEffect(() => {
    const type = searchParams.get('type');
    if (type === 'user' || type === 'feature' || type === 'inquiry') setKind(type);
    const ch = searchParams.get('channel');
    if (ch) setChannel(ch);
  }, [searchParams]);

  // チャンネル名の入力が止まったら Twitch に照会（収集中か・自動追加の対象か）
  useEffect(() => {
    if (kind !== 'user') return;
    const value = channel.trim();
    if (value.length < 3) {
      setCheck(null);
      return;
    }
    const timer = setTimeout(async () => {
      setChecking(true);
      try {
        const res = await fetch(`${API_URL}/v1/channel-check?login=${encodeURIComponent(value)}`);
        setCheck(res.ok ? await res.json() : null);
      } catch {
        setCheck(null);
      } finally {
        setChecking(false);
      }
    }, 600);
    return () => clearTimeout(timer);
  }, [channel, kind]);

  const isDeletion = kind === 'inquiry' && category === '自分のコメント履歴の削除依頼';

  const canSubmit =
    !isSubmitting &&
    (kind === 'user'
      ? !!check?.exists && !check.collected
      : content.trim().length > 0 && (!isDeletion || (twitchId.trim() && replyTo.trim())));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    let body: Record<string, string>;
    if (kind === 'user' && check) {
      body = {
        type: 'user',
        content: `channel: ${check.login}\nfollowers: ${check.followers ?? '?'}\n${content.trim() ? `note: ${content.trim()}` : ''}`,
      };
    } else if (isDeletion) {
      body = { type: 'deletion', content: `twitch_id: ${twitchId.trim()}\n${content.trim()}` };
    } else {
      body = { type: kind, content: content.trim(), ...(kind === 'inquiry' ? { category } : {}) };
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...body, reply_to: replyTo.trim() }),
      });
      if (response.ok) {
        setSubmitted(
          kind === 'user' && check?.auto_approve
            ? `${check.display_name} さんのチャンネルは自動追加の対象です。数分以内に収集が始まります。`
            : kind === 'user'
              ? '申請を受け付けました。内容を確認のうえ追加を検討します。'
              : isDeletion
                ? '削除依頼を受け付けました。ご本人確認のため、ご入力の返信先へご連絡します。'
                : '受け付けました。内容を確認次第、対応いたします。',
        );
      } else if (response.status === 429) {
        alert('短時間に送信が集中しています。しばらく時間をおいてお試しください。');
      } else {
        alert('送信に失敗しました。もう一度お試しください。');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('送信に失敗しました。もう一度お試しください。');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen">
        <Nav />
        <div className="flex items-center justify-center min-h-[60vh] px-6">
          <div className="chx-card chx-pop-in text-center max-w-md p-8">
            <Mascot size={96} className="chx-float mx-auto mb-4" />
            <h2 className="font-display text-3xl text-ink mb-4">送信完了</h2>
            <p className="text-muted mb-8">{submitted}</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={() => {
                  setSubmitted(null);
                  setChannel('');
                  setCheck(null);
                  setContent('');
                }}
                className="chx-btn chx-btn-ghost"
              >
                続けて送る
              </button>
              <Link href="/" className="chx-btn chx-btn-primary">
                ホームに戻る
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Nav />
      <main className="max-w-2xl mx-auto px-4 py-12 md:px-6">
        <div className="mb-8">
          <p className="chx-kicker">Contact</p>
          <h1 className="mt-2 font-display text-4xl text-ink mb-4">お問い合わせ・申請</h1>
          <p className="text-muted">
            チャンネル追加は、フォロワー1万人以上またはパートナーの配信者なら自動で追加されます。
          </p>
        </div>

        <div className="chx-card p-6 md:p-8">
          <form onSubmit={handleSubmit}>
            {/* 種類 */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
              {KINDS.map((k) => (
                <button
                  type="button"
                  key={k.value}
                  onClick={() => setKind(k.value)}
                  className={`text-left p-4 rounded-2xl border-2 transition-all ${
                    kind === k.value
                      ? 'border-accent bg-accent-soft -translate-y-0.5'
                      : 'border-line hover:border-accent'
                  }`}
                >
                  <Icon name={k.icon} size={20} className="text-accent-ink" />
                  <div className="mt-2 font-black text-ink">{k.label}</div>
                  <div className="text-xs text-muted mt-1">{k.desc}</div>
                </button>
              ))}
            </div>

            {kind === 'user' && (
              <div className="mb-6">
                <label className="block text-sm font-bold text-ink mb-2">
                  TwitchチャンネルのID または URL
                </label>
                <input
                  type="text"
                  value={channel}
                  onChange={(e) => setChannel(e.target.value)}
                  placeholder="例: kato_junichi0817 または https://www.twitch.tv/kato_junichi0817"
                  className={inputClass}
                  autoComplete="off"
                />
                <div className="mt-3 min-h-[64px]">
                  {checking && <p className="text-sm text-muted">Twitchに問い合わせ中…</p>}
                  {!checking && check && !check.exists && (
                    <p className="text-sm text-red-600">「{check.login}」というTwitchチャンネルは見つかりませんでした。</p>
                  )}
                  {!checking && check?.exists && (
                    <div className="flex items-center gap-3 p-3 rounded-2xl bg-surface-2 border border-line">
                      {check.profile_image_url && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={check.profile_image_url} alt="" className="w-12 h-12 rounded-full" />
                      )}
                      <div className="text-sm">
                        <div className="font-black text-ink">
                          {check.display_name}（{check.login}）
                        </div>
                        <div className="text-muted">
                          フォロワー {check.followers != null ? check.followers.toLocaleString('ja-JP') : '不明'}人
                          {check.broadcaster_type === 'partner' && ' ・ パートナー'}
                        </div>
                        <div className="mt-1 font-medium">
                          {check.collected ? (
                            <span className="inline-flex items-center gap-1 text-ok"><Icon name="check" size={14} /> すでに収集中です</span>
                          ) : check.auto_approve ? (
                            <span className="inline-flex items-center gap-1 text-accent-ink"><Icon name="zap" size={14} /> 自動追加の対象です（送信後数分で収集開始）</span>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-accent-2"><Icon name="eye" size={14} /> 運営が確認して追加を判断します</span>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {kind === 'inquiry' && (
              <div className="mb-6">
                <label className="block text-sm font-bold text-ink mb-2">種類</label>
                <select value={category} onChange={(e) => setCategory(e.target.value)} className={inputClass}>
                  {INQUIRY_CATEGORIES.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>
            )}

            {isDeletion && (
              <div className="mb-6">
                <label className="block text-sm font-bold text-ink mb-2">
                  削除を希望するあなたのTwitch ID（必須）
                </label>
                <input
                  type="text"
                  value={twitchId}
                  onChange={(e) => setTwitchId(e.target.value)}
                  placeholder="例: your_twitch_id"
                  className={inputClass}
                />
                <p className="text-xs text-muted mt-2">
                  なりすまし防止のため、ご本人確認の連絡をさせていただきます。返信先も必ずご入力ください。
                </p>
              </div>
            )}

            <div className="mb-6">
              <label className="block text-sm font-bold text-ink mb-2">
                {kind === 'user' ? 'ひとこと（任意）' : '内容'}
              </label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder={
                  kind === 'user'
                    ? '追加してほしい理由など（任意）'
                    : kind === 'feature'
                      ? 'ほしい機能と、その理由を教えてください'
                      : '内容をご記入ください。不具合の場合は、どの画面で何をしたときに起きたかを書いていただけると助かります。'
                }
                rows={kind === 'user' ? 3 : 7}
                maxLength={2000}
                className={inputClass}
              />
            </div>

            <div className="mb-8">
              <label className="block text-sm font-bold text-ink mb-2">
                返信先{isDeletion ? '（必須）' : '（任意）'}
              </label>
              <input
                type="text"
                value={replyTo}
                onChange={(e) => setReplyTo(e.target.value)}
                maxLength={200}
                placeholder="メールアドレス または X(Twitter)のID"
                className={inputClass}
              />
            </div>

            <button
              type="submit"
              disabled={!canSubmit}
              className="chx-btn chx-btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              {isSubmitting ? '送信中...' : kind === 'user' ? '追加を申請する' : '送信する'}
            </button>
          </form>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen">
        <SiteHeader />
        <div className="flex items-center justify-center min-h-[50vh]">
          <div className="text-center">
            <Mascot size={80} className="chx-float mx-auto mb-4" />
            <p className="text-muted">フォームを準備中…</p>
          </div>
        </div>
      </div>
    }>
      <ContactForm />
    </Suspense>
  );
}