import { NextResponse } from 'next/server';

// 収集中チャンネル一覧（VPS の ClickHouse から）。10分キャッシュ。
const API_URL = process.env.COMMENT_API_URL || 'https://api.comment-history.com';

export const revalidate = 600;

export async function GET() {
  try {
    const res = await fetch(`${API_URL}/v1/channels?detail=1`, { next: { revalidate: 600 } });
    if (!res.ok) {
      return NextResponse.json({ error: 'Failed to load channels' }, { status: 502 });
    }
    const { channels } = (await res.json()) as { channels: { channel: string; since: string }[] };
    return NextResponse.json(
      channels.map((c, i) => ({ id: i + 1, channel_name: c.channel, created_at: c.since })),
    );
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
