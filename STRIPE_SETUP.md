# Stripe Test Environment Setup Guide

## 1. Stripeアカウント設定

### テストモードに切り替え
- Stripe Dashboard → 左上のスイッチで「テストデータを表示」に切り替え

### APIキーを取得
- Developers → API keys
- `pk_test_...` (Publishable key) をコピー
- `sk_test_...` (Secret key) をコピー

## 2. 商品とPrice作成

### 月額プラン (500円)
```
商品名: Twitchコメント履歴保管庫 - 月額プラン
価格: ¥500
請求間隔: 月次
通貨: JPY
```

### 年額プラン (5,000円)
```
商品名: Twitchコメント履歴保管庫 - 年額プラン  
価格: ¥5,000
請求間隔: 年次
通貨: JPY
```

## 3. Payment Links作成

### 月額プラン用Payment Link
1. Products → 月額プラン → Create payment link
2. Settings:
   - After payment: Redirect to success page
   - Collect customer information: Email required
   - Metadata: 
     - Key: `plan_type` Value: `monthly`

### 年額プラン用Payment Link  
1. Products → 年額プラン → Create payment link
2. Settings:
   - After payment: Redirect to success page
   - Collect customer information: Email required
   - Metadata:
     - Key: `plan_type` Value: `yearly`

## 4. Webhook設定

### Webhookエンドポイント作成
1. Developers → Webhooks → Add endpoint
2. Endpoint URL: `https://abdhcnstgopoghlqedya.supabase.co/functions/v1/stripe-webhook`
3. Events to send:
   - `checkout.session.completed`
4. Webhook signing secretをコピー (`whsec_...`)

## 5. Supabase環境変数設定

Supabase Dashboard → Project Settings → Edge Functions → Environment variables

```
STRIPE_SECRET_KEY_TEST=sk_test_...
STRIPE_WEBHOOK_SECRET_TEST=whsec_...
```

## 6. Next.js環境変数設定

`.env.local`ファイルに追加:
```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY_TEST=pk_test_...
```

## 7. Payment LinksをPremium Pageに反映

`pages/premium.tsx`の`PAYMENT_LINKS`を実際のURLに更新:
```typescript
const PAYMENT_LINKS = {
  monthly: 'https://buy.stripe.com/test_実際のURL',
  yearly: 'https://buy.stripe.com/test_実際のURL',
};
```

## 8. テスト用クレジットカード情報

```
カード番号: 4242 4242 4242 4242
有効期限: 任意の未来の日付
CVC: 任意の3桁
郵便番号: 任意
```

## 9. 動作確認手順

1. Premium Pageで購入ボタンクリック
2. Stripe Checkoutで決済
3. Webhookが呼ばれてライセンスキー生成
4. メール送信（今後実装）
5. Chrome拡張機能でアクティベート

## 注意事項

- テスト環境なので実際の課金は発生しません
- 本番環境移行時は`_TEST`を削除してproduction keysを使用
- Webhookの署名検証は本格実装時に追加