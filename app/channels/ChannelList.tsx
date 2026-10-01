'use client';

import { useMemo, useState } from 'react';
import Icon from '../components/Icon';

export type Channel = { id: number; channel_name: string; created_at: string };

// 初期表示はサーバーで描画済み（SEO）。入力で絞り込むだけのクライアント部品
export default function ChannelList({ channels }: { channels: Channel[] }) {
  const [q, setQ] = useState('');
  const shown = useMemo(
    () => channels.filter((c) => c.channel_name.toLowerCase().includes(q.trim().toLowerCase())),
    [channels, q],
  );

  return (
    <div>
      <label className="relative block">
        <span className="sr-only">チャンネル名で絞り込む</span>
        <Icon name="search" size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="チャンネル名で絞り込む（例: kato）"
          className="w-full rounded-full border border-line bg-surface py-3 pl-11 pr-4 text-ink outline-none placeholder:text-muted focus:border-accent"
        />
      </label>

      {shown.length === 0 ? (
        <p className="py-12 text-center text-muted">そのチャンネルはまだ収集していないみたい。</p>
      ) : (
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((c) => (
            <li key={c.channel_name} className="chx-card chx-feature flex items-center justify-between gap-3 p-4">
              <div className="min-w-0">
                <p className="truncate font-black text-ink">{c.channel_name}</p>
                <p className="mt-0.5 flex items-center gap-1 text-xs text-muted">
                  <Icon name="calendar" size={12} />
                  {new Date(c.created_at).toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric' })}〜
                </p>
              </div>
              <a
                href={`https://twitch.tv/${c.channel_name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex shrink-0 items-center gap-1 rounded-full bg-accent-soft px-3 py-1.5 text-xs font-black text-accent-ink hover:bg-accent hover:text-white"
              >
                Twitch <Icon name="external" size={12} />
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
