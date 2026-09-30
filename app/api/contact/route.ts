import { NextRequest, NextResponse } from 'next/server';

// お問い合わせ・チャンネル追加申請を VPS の受付箱に転送する。
// チャンネル追加申請は VPS 側で自動審査され、条件を満たせば自動で収集対象になる。
const API_URL = process.env.COMMENT_API_URL || 'https://api.comment-history.com';

export async function POST(request: NextRequest) {
  try {
    const { type, content, reply_to } = await request.json();

    if (!type || !content) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const res = await fetch(`${API_URL}/v1/inbox`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Client-IP': request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? '',
      },
      body: JSON.stringify({ type, content, reply_to: reply_to ?? '', source: 'site' }),
    });

    if (!res.ok) {
      console.error('Inbox forward failed:', res.status, await res.text());
      return NextResponse.json({ error: 'Failed to submit' }, { status: res.status === 429 ? 429 : 502 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
