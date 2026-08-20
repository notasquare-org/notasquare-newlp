// 会社の基本情報（構造化データ / JSON-LD の元データ）。
// 登記情報・連絡先に変更がある場合は、まずこのファイルを更新します。
export const company = {
  name: '株式会社Not a Square',
  englishName: 'Not a Square Inc.',
  brandName: 'Not a Square',
  shortName: 'NaS',
  alternateName: ['Not a Square', 'NaS', 'Not a Square Inc.'],
  url: 'https://notasquare.co.jp/',
  logoPath: '/uploads/titleogo.png',
  description:
    '株式会社Not a Square（NaS）は、AIエンジニアが現場に寄り添い、AIの選定・導入から運用・定着まで伴走する「NaS AI」を提供しています。京阪神および関西一円に対応します。',
  foundingDate: '2026-08',

  representative: {
    name: '酒井涼雅',
    jobTitle: '代表取締役',
  },
  members: [
    { name: '酒井涼雅', jobTitle: 'CEO' },
    { name: '御幡アルバート武嗣', jobTitle: 'COO' },
    { name: '佐伯勇樹', jobTitle: 'CMO' },
  ],

  email: 'info@notasquare.co.jp',
  telephone: '090-6665-6240',

  address: {
    postalCode: '532-0011',
    streetAddress: '西中島1-9-20 新中島ビル1F',
    addressLocality: '大阪市淀川区',
    addressRegion: '大阪府',
    addressCountry: 'JP',
  },

  areaServed: ['京阪神', '関西'],
  capital: '500,000円',

  // 番号は確定後に設定し、それまでは表示用のステータスのみを使用します。
  corporateNumber: null,
  corporateNumberStatus: '近日公開',
  invoiceRegistrationNumber: null,
  invoiceRegistrationStatus: '申請中・近日公開',
};
