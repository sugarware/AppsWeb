# Sugarware Web Apps 紹介サイト 初版

## 公開前に変更する項目
1. `js/common.js` の `G-XXXXXXXXXX` をGoogle Analyticsの測定IDへ変更。
2. リポジトリ名が `WebApps` 以外なら、各HTMLの canonical URL と `sitemap.xml` / `robots.txt` のURLを変更。
3. Google Search Consoleで公開URLを登録し、必要なら所有権確認用metaタグを `index.html` に追加。
4. STEdit / Golf Score Pro / SleepingKindle のNote関連記事が公開済みなら各HTMLへ追加。

## 設計方針
- `index.html`: ポータルのみ。
- `apps/*.html`: 各アプリの説明を独立管理。
- `css/style.css`: 共通デザイン。
- `js/analytics.js`: 紹介サイトだけのGA4。各アプリ本体には解析を追加しない。
- `data/apps.json`: 将来の一覧生成・管理用。SEO本文は各HTMLに直接保持。
