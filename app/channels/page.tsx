import Link from 'next/link';
import Icon from '../components/Icon';
import SiteFooter from '../components/SiteFooter';
import SiteHeader from '../components/SiteHeader';
import { API_URL } from '../components/site';
import ChannelList, { type Channel } from './ChannelList';

// 収集中チャンネル一覧（VPS の ClickHouse から。10分ごとに再生成）
export const revalidate = 600;

async function getChannels(): Promise<Channel[] | null> {
  try {
    const res = await fetch(`${API_URL}/v1/channels?detail=1`, { next: { revalidate: 600 } });
    if (!res.ok) return null;
    const { channels } = (await res.json()) as { channels: { channel: string; since: string }[] };
    return channels.map((c, i) => ({ id: i + 1, channel_name: c.channel, created_at: c.since }));
  } catch {
    return null;
  }
}

export default async function ChannelsPage() {
  const channels = await getChannels();

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="chx-kicker">Channels</p>
            <h1 className="mt-2 font-display text-4xl text-ink md:text-5xl">収集チャンネル一覧</h1>
            <p className="mt-4 max-w-2xl text-muted">
              現在監視中のTwitchチャンネル一覧です。これらのチャンネルからコメントデータを収集しています。
              ここに載っているチャンネルでの発言なら、コメント履歴に残っています。
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-accent-soft px-4 py-2 font-display text-accent-ink">
              {channels ? `${channels.length} チャンネル` : '—'}
            </span>
            <Link href="/contact?type=user" className="chx-btn chx-btn-primary !py-2.5">
              <Icon name="plus" size={18} /> 収集チャンネル追加要望
            </Link>
          </div>
        </div>

        <div className="mt-10">
          {channels ? (
            <ChannelList channels={channels} />
          ) : (
            <div className="chx-card p-10 text-center">
              <p className="font-bold text-ink">チャンネル情報を取得できませんでした。</p>
              <p className="mt-2 text-sm text-muted">サーバーがちょっと休憩中かもしれません。少し時間をおいて再読み込みしてください。</p>
            </div>
          )}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
