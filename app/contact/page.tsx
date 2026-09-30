'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

function ContactForm() {
  const searchParams = useSearchParams();
  const [formType, setFormType] = useState('user');
  const [content, setContent] = useState('');
  const [replyTo, setReplyTo] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const type = searchParams.get('type');
    if (type && ['user', 'feature', 'inquiry'].includes(type)) {
      setFormType(type);
    }
  }, [searchParams]);

  const getFormConfig = () => {
    switch (formType) {
      case 'user':
        return {
          title: 'ユーザー追加申請',
          placeholder: 'ユーザーのIDまたは配信者名を入力してください\n例：\n- ユーザー名: example_user\n- チャンネル名: twitch.tv/example_channel\n- 理由: このユーザーのコメント履歴を確認したいため',
          color: 'blue'
        };
      case 'feature':
        return {
          title: '機能の要請',
          placeholder: '要望する機能の具体的な内容を入力してください\n例：\n- 機能名: コメント検索機能\n- 詳細: ユーザーの過去のコメントをキーワード検索できる機能\n- 理由: 特定のコメントを素早く見つけたいため',
          color: 'green'
        };
      case 'inquiry':
        return {
          title: 'お問い合わせ',
          placeholder: 'お問い合わせ内容を入力してください\n例：\n- 不具合の報告\n- 使用方法に関する質問\n- その他のご意見・ご要望',
          color: 'purple'
        };
      default:
        return {
          title: 'ユーザー追加申請',
          placeholder: 'ユーザーのIDまたは配信者名を入力してください',
          color: 'blue'
        };
    }
  };

  const config = getFormConfig();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: formType,
          content: content.trim(),
          reply_to: replyTo.trim(),
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setContent('');
        setReplyTo('');
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

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          bg: 'bg-blue-600 hover:bg-blue-700',
          ring: 'focus:ring-blue-500',
          check: 'text-blue-600'
        };
      case 'green':
        return {
          bg: 'bg-green-600 hover:bg-green-700',
          ring: 'focus:ring-green-500',
          check: 'text-green-600'
        };
      case 'purple':
        return {
          bg: 'bg-purple-600 hover:bg-purple-700',
          ring: 'focus:ring-purple-500',
          check: 'text-purple-600'
        };
      default:
        return {
          bg: 'bg-blue-600 hover:bg-blue-700',
          ring: 'focus:ring-blue-500',
          check: 'text-blue-600'
        };
    }
  };

  const colors = getColorClasses(config.color);

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
        <nav className="w-full p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-purple-600 dark:text-purple-400">
              📊 Twitchコメント履歴保管庫
            </Link>
          </div>
        </nav>
        <div className="flex items-center justify-center min-h-[50vh]">
          <div className="text-center">
            <div className="text-green-500 text-6xl mb-4">✅</div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">送信完了</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              {config.title}を受け付けました。<br />
              内容を確認次第、対応いたします。
            </p>
            <Link 
              href="/" 
              className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              ホームに戻る
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
      <nav className="w-full p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-purple-600 dark:text-purple-400">
            📊 Twitchコメント履歴保管庫
          </Link>
          <div className="flex gap-4">
            <Link 
              href="/" 
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              ホームに戻る
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-2xl mx-auto p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            📝 {config.title}
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            下記のフォームよりお気軽にお申し込み・お問い合わせください。
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <form onSubmit={handleSubmit}>
            {/* フォームタイプ選択 */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                お問い合わせ種類
              </label>
              <div className="space-y-3">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="type"
                    value="user"
                    checked={formType === 'user'}
                    onChange={(e) => setFormType(e.target.value)}
                    className={`w-4 h-4 ${colors.check} focus:ring-2 ${colors.ring}`}
                  />
                  <span className="ml-2 text-gray-700 dark:text-gray-300">ユーザー追加申請</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="type"
                    value="feature"
                    checked={formType === 'feature'}
                    onChange={(e) => setFormType(e.target.value)}
                    className={`w-4 h-4 ${colors.check} focus:ring-2 ${colors.ring}`}
                  />
                  <span className="ml-2 text-gray-700 dark:text-gray-300">機能の要請</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="type"
                    value="inquiry"
                    checked={formType === 'inquiry'}
                    onChange={(e) => setFormType(e.target.value)}
                    className={`w-4 h-4 ${colors.check} focus:ring-2 ${colors.ring}`}
                  />
                  <span className="ml-2 text-gray-700 dark:text-gray-300">お問い合わせ</span>
                </label>
              </div>
            </div>

            {/* 内容入力 */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                内容
              </label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder={config.placeholder}
                rows={8}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                required
              />
            </div>

            {/* 返信先（任意） */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                返信先（任意）
              </label>
              <input
                type="text"
                value={replyTo}
                onChange={(e) => setReplyTo(e.target.value)}
                maxLength={200}
                placeholder="返信が必要な場合はメールアドレスまたはX(Twitter)のIDを入力してください"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>

            {/* 送信ボタン */}
            <button
              type="submit"
              disabled={isSubmitting || !content.trim()}
              className={`w-full px-6 py-3 ${colors.bg} text-white rounded-lg transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {isSubmitting ? '送信中...' : '送信する'}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
        <nav className="w-full p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-purple-600 dark:text-purple-400">
              📊 Twitchコメント履歴保管庫
            </Link>
          </div>
        </nav>
        <div className="flex items-center justify-center min-h-[50vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-300">読み込み中...</p>
          </div>
        </div>
      </div>
    }>
      <ContactForm />
    </Suspense>
  );
}