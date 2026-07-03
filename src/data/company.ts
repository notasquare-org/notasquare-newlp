// 会社の基本情報（構造化データ / JSON-LD の元データ）。
//
// ⚠️ 法人化・移転・連絡先変更のときは、まずこのファイルだけを更新してください。
//    ここを直せば、サイト全体の Organization 構造化データ（BaseLayout）に自動で反映されます。
//    - 法人化   → name / founder の扱い、invoiceRegistrationNumber（法人番号ベース）を見直す
//    - 移転     → address を更新
//    - 連絡先変更 → email を更新
export const company = {
  name: 'Not a Square',
  alternateName: ['NaS AI', 'ナスAI', 'ノットアスクエア', 'NaS'],
  url: 'https://notasquare.co.jp/',
  logoPath: '/uploads/titleogo.png',
  description:
    'AI開発者が現場に入り込み「一番ムダな業務」から自動化するFDE（Forward Deployed Engineer）。京阪神および関西一円に対応。',

  // 代表者（E-E-A-T：誰が運営しているか）
  founderName: '酒井 涼雅',

  // 問い合わせ先メールアドレス（変更時はここだけ）
  email: 'r.sakai@notasquare.org',

  // 所在地（移転・法人化時に更新）
  address: {
    streetAddress: '西中島1-9-20 新中島ビル1F',
    addressLocality: '大阪市淀川区',
    addressRegion: '大阪府',
    addressCountry: 'JP',
  },

  // 対応エリア
  areaServed: ['京阪神', '関西'],

  // 適格請求書発行事業者 登録番号（法人化に伴い法人番号ベースへ変わる想定）
  invoiceRegistrationNumber: 'T3810366982257',
};
