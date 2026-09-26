# PROGRESS

## 修改日誌

### 2026-08-05 - Codex
- Agent: Codex
- Changed: `index.html`、新增 `ai-articles.html`、`images/article-codex-pet.jpg`、`images/article-notebooklm.png`
- Summary: 官網新增「AI 教學補給站」導覽入口與首頁專區，以深藍星空底、米白粗框卡片、黃／藍硬陰影延續原本遊戲教育美術風格；加入 Codex 動態寵物與 NotebookLM 兩篇文章卡片，並建立獨立文章索引頁供後續擴充分類。封面沿用兩篇文章既有手繪主視覺，避免另製風格不一致的素材。
- Verification: 本機網站回應 200；Codex 內建瀏覽器實測桌機 1440×1000 與手機 390×844，首頁文章區與索引頁皆無水平溢位、圖片完整載入、無瀏覽器錯誤；所有文章連結與首頁／課程導覽皆可使用。
- Notes: 文章內容維持原站獨立發布，官網以卡片入口導流，避免 iframe 造成載入與行動版問題。

### 2026-07-10 00:47 - Claude Opus 4.7
- Agent: Claude Opus 4.7
- Changed: `index.html`, `HANDOFF.md`, `docs/superpowers/specs/2026-07-10-website-redesign-design.md`
- Summary: 官網整頁重構為「活潑遊戲風」（亮黃×珊瑚橘×天藍、貼紙硬陰影、圓角卡片），敘事順序改為決策者導向：Hero＋信任徽章 → 四步驟心法 → 師資前移 → 四彈改 LV1-4 冒險地圖 → 邀約方案（規格 chips）→ 拍立得實況牆 → 年會＋最終 CTA。圖片先沿用舊檔，待 Codex 依 HANDOFF.md 重畫 5 張（hero-main + lv1~lv4 封面）存 `images/` 並換 src。
- Verification: headless Edge 截圖桌面版（1440px）與手機版（390px）全區塊渲染正常；grep 檢查全部本地 src 檔案存在。
- Notes: 待 Codex 生圖交接回來後需驗收 `images/` 5 張圖與 src 替換是否正確。講師頭像／實況照片／示範網站截圖維持真實照片不重畫。

### 2026-07-10 01:45 - Claude Opus 4.7
- Agent: Claude Opus 4.7
- Changed: `index.html`, `PROGRESS.md`
- Summary: 版面微調——師資卡改 items-start 消除等高留白、方法論四卡與各區介紹文字改寫消除孤字斷行。另由 Claude 直接以 CLI 呼叫 Codex（`~\.codex\.sandbox-bin\codex.exe exec`）完成生圖。
- Verification: headless Edge 全頁截圖確認：方法論說明單行收齊、師資卡貼合內容、邀約介紹無孤字。
- Notes: Codex exec 用 stdin 餵中文 prompt 會變問號（編碼問題），但 Codex 會自行重讀 HANDOFF.md 補脈絡；下次可改用 ASCII prompt 指向檔案。

### 2026-07-10 01:45 - Codex (GPT-5.5, 由 Claude 以 CLI 代發)
- Agent: Codex gpt-5.5
- Changed: `images/hero-main.png`, `images/lv1-cover.png` ~ `lv4-cover.png`, `index.html`, `HANDOFF.md`
- Summary: 依 HANDOFF.md 用繪圖模型生成 5 張統一風格插畫（Hero 主視覺＋四彈關卡封面，皆 1:1、無文字），並替換 index.html 對應 src（hero 1 處、LV 各 2 處）。Hero 第一版含指南針字母，自行重生。
- Verification: Claude 驗收——5 張圖風格一致無文字、src 替換 9 處正確、與 Claude 同時段的文字修正無衝突；headless Edge 截圖版面正常。
- Notes: 成果明細見 HANDOFF.md「成果」區塊。

### 2026-07-10 02:00 - Claude Opus 4.7
- Agent: Claude Opus 4.7
- Changed: `index.html`, `HANDOFF.md`, `PROGRESS.md`
- Summary: 使用者回饋第一輪插畫太飽和擁擠、純文字卡難讀。第二輪：全站配色降飽和（柔黃/柔珊瑚/粉藍，淺色塊上白字改深字）；實體工作坊四卡加插圖、拿掉 D1/D2 浮水印；實體＋LV 卡條列全改「粗體關鍵詞 — 短說明」；師資四卡依使用者要求改回等高。
- Verification: headless Edge 全頁截圖（1440px）確認新圖與新版面渲染正常。
- Notes: -

### 2026-07-10 02:00 - Codex (GPT-5.5, 由 Claude 以 CLI 代發)
- Agent: Codex gpt-5.5
- Changed: `images/`（9 張 PNG：hero-main、lv1~lv4-cover 覆蓋重畫；card-d1/d2/outdoor/issue 新增）
- Summary: 第二輪依 HANDOFF.md 改畫低飽和粉彩扁平風，每張 3~5 元素、大量留白、無文字；9 張同一套插畫語言。
- Verification: Claude 驗收 9 張風格一致、符合粉彩規範、皆無文字。
- Notes: 這輪 Codex 未動 index.html（HTML 由 Claude 處理）。

### 2026-07-10 09:05 - Claude Opus 4.7
- Agent: Claude Opus 4.7
- Changed: `course-vibecoding.html`（新增）、`course-gem.html`（新增）、`index.html`、`PROGRESS.md`
- Summary: 新增兩個線上課介紹頁。VIBE CODING 頁內容取自「AI 程式 × Codex 實戰」報名頁（學員與課程管理/課程教材/教師課程_Codex版/報名頁），含痛點/翻轉/六大收穫/試玩/配套/適合誰/課程資訊，CTA 連到 netlify 報名頁；GEM 頁顯示「本堂課目前不開放邀約」。首頁兩張線上課卡片標題區改為可點擊連入介紹頁，加「開放報名中／暫不開放」狀態章與「課程介紹 →」。
- Verification: headless Edge 截圖兩頁渲染正常（1440px）；index 卡片 Edit 成功。
- Notes: 報名頁若改期（目前 2026/8/9），course-vibecoding.html 的日期與費用要同步更新。

### 2026-07-10 09:55 - Claude Opus 4.7
- Agent: Claude Opus 4.7
- Changed: `course-vibecoding.html`、`course-lv4.html`（新增）、`index.html`、`images/vc-*.png`（4 張，複製自報名頁 assets）、`HANDOFF.md`、`PROGRESS.md`
- Summary: 依使用者回饋修 VIBE CODING 頁——移除「四個配套」「課程資訊」（教師研習導向不需要公開課報名資訊）、hero 拿掉日期、CTA 改私訊 FB、放入報名頁原本 4 張水彩插圖；首頁 VC 卡移除「開放報名中」章。另從第四彈課綱 PDF（160 頁，文字亂碼改用頁面轉圖判讀）整理出課程內容，新建 course-lv4.html（痛點三幕／導覽用玩的／一日旅程四站／手作三道具／帶走清單／適合誰），首頁 LV4 卡接上連結。
- Verification: headless Edge 截圖兩頁全區渲染正常。
- Notes: course-vibecoding.html 的注意事項同上（改期要同步）。

### 2026-07-10 09:55 - Codex (GPT-5.5, 由 Claude 以 CLI 代發)
- Agent: Codex gpt-5.5
- Changed: `images/lv4-hero.png`、`images/lv4-pain.png`、`images/lv4-flow.png`、`images/lv4-props.png`
- Summary: 第三輪：以報名頁插圖（images/_style-ref-1/2.png）為風格錨點，畫 4 張溫暖水彩繪本風插圖，中文標題入圖（戶外實境工作坊 hero、三格痛點漫畫、一日課程旅程尋寶地圖、解謎道具動手做）。
- Verification: Claude 驗收——4 張風格與參考圖一致、圖內中文標題全部正確無錯字。
- Notes: 風格參考檔 images/_style-ref-*.png 保留在專案，之後補圖可繼續當錨點。

### 2026-07-10 10:40 - Claude Opus 4.7
- Agent: Claude Opus 4.7
- Changed: `course-lv1.html`（新增）、`index.html`、`HANDOFF.md`、`PROGRESS.md`
- Summary: 從初階兩日班課綱 PDF（222 頁，頁面轉圖判讀）新建第一彈介紹頁：痛點三幕／「你的教室就是最好的密室」／兩日旅程（D1 題海體驗→三步驟出題→故事包裝→LINE@ 自動關主；D2 戶外解謎→支狀圖拆解→教案共備→互玩回饋）／帶走清單／適合誰。首頁 LV1 卡與研習區 D1、D2 卡接連結（#d1/#d2 錨點）。
- Verification: headless Edge 全頁截圖渲染正常。
- Notes: 課綱來源「實境遊戲工作坊初階(2022 最新版).pdf」（專案根目錄）。

### 2026-07-10 10:40 - Codex (GPT-5.5, 由 Claude 以 CLI 代發)
- Agent: Codex gpt-5.5
- Changed: `images/lv1-hero.png`、`images/lv1-pain.png`、`images/lv1-flow.png`、`images/lv1-line.png`、`images/_style-contact-sheet.png`（其自建的風格對照表）
- Summary: 第四輪：延續 lv4 系列水彩繪本風畫 4 張初階插圖，中文標題入圖（我的教室是密室 hero、三格痛點漫畫、兩日課程旅程地圖、LINE@ 自動關主）。
- Verification: Claude 驗收——4 張與 lv4 系列同風格，圖內標題「我的教室是密室／一聽考試就哀嚎／想玩解謎沒頭緒／怕活動沒人買單／兩日課程旅程／LINE@ 自動關主」等全部正確。
- Notes: -

### 2026-07-11 16:00 - Claude Opus 4.7
- Agent: Claude Opus 4.7
- Changed: `course-lv2.html`（新增）、`index.html`、`HANDOFF.md`、`PROGRESS.md`
- Summary: 從進階班課綱 PPT（下載/2025.01 進階課程 花蓮版.pptx，PowerPoint COM 轉 PDF 176 頁後轉圖判讀）新建第二彈介紹頁：痛點三卡（說教/只剩好玩/機制沒花樣）／「讓學生當做決定的人」／一日旅程（玩兩場機制遊戲：街貓 TNR「喵生甚麼事」＋真品贗品鑑定→機制三層結構→議題融入三步驟→設定議題實作）／議題藏進遊戲特色區／帶走清單。首頁 LV2 卡與「議題機制設計課程」研習卡接連結，並補上「戶外實境與解謎道具設計」卡→course-lv4 的連結。
- Verification: headless Edge 全頁截圖渲染正常；已 push 上線。
- Notes: 四彈介紹頁只剩第三彈（故事夢工場）還沒做。

### 2026-07-11 16:00 - Codex (GPT-5.5, 由 Claude 以官方 CLI 代發)
- Agent: Codex gpt-5.5
- Changed: `images/lv2-hero.png`、`images/lv2-pain.png`、`images/lv2-flow.png`、`images/lv2-issue.png`
- Summary: 第五輪（改用官方 CLI + CODEX_HOME=.codex-cli，舊 sandbox-bin 已無繪圖能力）：延續系列水彩繪本風畫 4 張進階班插圖，中文標題入圖（議起玩實境 hero、三格痛點漫畫、一日課程旅程地圖、議題藏進遊戲裡天平圖）。
- Verification: Claude 驗收——4 張同風格，標題字全部正確；lv2-flow 它自己裁掉左緣瑕疵後交付。
- Notes: -

### 2026-07-11 16:20 - Claude Opus 4.7
- Agent: Claude Opus 4.7
- Changed: `course-vibecoding.html`、`index.html`、`PROGRESS.md`
- Summary: 程式課（VIBE CODING）時數 3 小時→4 小時（hero 章、引言、收穫標題、meta）；適合誰區下新增「⚠️ 注意事項」黃卡：必須訂閱 GPT PLUS、有課前程式安裝作業需要事前執行。首頁線上工作坊規格章改「每堂 3～4 小時」。
- Verification: grep 確認頁內無「3 小時」殘留；headless Edge 截圖注意事項卡渲染正常；已 push。
- Notes: -

### 2026-09-26 - Codex
- Changed: `index.html`、`course-vibecoding.html`、`images/yadrei-adventure-cover.webp`、`PROGRESS.md`
- Summary: 更新首頁原有「亞德雷大陸」示範卡，改連新遊玩平台；將同一遊戲加入 10/31 課程頁試玩區，保留桃花源記、鴻門宴。兩處使用新水彩冒險封面，按鈕常駐顯示，提供 `#yadrei-demo` 直達錨點。
- Artwork: 原生成 PNG 保留在工作區；官網使用 1672×941 WebP（456,792 bytes），圖片原比例完整顯示、延遲載入並明定尺寸。
- Verification: 靜態檢查確認 10/31 首頁課程區、課程報名區、頁面 metadata 與既有兩張故事示範卡保持原樣；兩頁各一個新遊戲入口，無舊遊玩網址、無重複 ID，圖檔存在，git diff --check 通過。桌面與手機瀏覽器驗證由主代理接續執行。
- Release: 本次先準備修改，依使用者要求於 Facebook 貼文與留言完成後再發布官網。
