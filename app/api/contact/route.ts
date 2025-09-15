import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { type, content } = await request.json();

    if (!type || !content) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const typeNames = {
      user: 'ユーザー追加申請',
      feature: '機能の要請',
      inquiry: 'お問い合わせ'
    };

    const typeName = typeNames[type as keyof typeof typeNames] || 'お問い合わせ';
    const emoji = type === 'user' ? '👤' : type === 'feature' ? '⚡' : '💬';

    // Slack通知の送信
    const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL;
    
    if (slackWebhookUrl) {
      const slackMessage = {
        text: `${emoji} 新しい${typeName}が届きました`,
        blocks: [
          {
            type: "header",
            text: {
              type: "plain_text",
              text: `${emoji} ${typeName}`,
              emoji: true
            }
          },
          {
            type: "section",
            fields: [
              {
                type: "mrkdwn",
                text: `*種類:*\n${typeName}`
              },
              {
                type: "mrkdwn",
                text: `*受信時刻:*\n${new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })}`
              }
            ]
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: `*内容:*\n\`\`\`${content}\`\`\``
            }
          },
          {
            type: "divider"
          },
          {
            type: "context",
            elements: [
              {
                type: "mrkdwn",
                text: "📊 Twitchコメント履歴保管庫 | Contact Form"
              }
            ]
          }
        ]
      };

      const slackResponse = await fetch(slackWebhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(slackMessage),
      });

      if (!slackResponse.ok) {
        console.error('Slack notification failed:', await slackResponse.text());
        // Slack送信失敗でもフォーム送信は成功とする
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}