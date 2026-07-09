# Handoff

## From → To
Claude → Codex  (2026-07-10)

## 目前在做什麼
一百分遊戲教育官網（`index.html`）已重構為「活潑遊戲風」（亮黃×珊瑚橘×天藍撞色、貼紙硬陰影、圓角卡片）。
你的任務：**重畫 5 張插畫**並替換 index.html 中的圖片引用。

## 已經決定的事
- 視覺風格：活潑遊戲風／手遊選關畫面感。明亮飽和色、圓潤卡通、乾淨線條。
- 配色需與網站一致：亮黃 `#FFC93C`、珊瑚橘 `#FF6B35`、天藍 `#2EC4E6`、夜空藍 `#2B2B46`、奶油底 `#FFF8E7`、薄荷綠 `#3DDC97`
- 五張圖統一畫風（同一套插畫語言），可有卡通人物（老師＋學生）、鑰匙、鎖、放大鏡、地圖、寶箱、謎題紙條等元素
- 圖中**不要出現任何文字**（中英文都不要，AI 生圖文字容易爛掉）
- 講師頭像、實況照片、示範網站截圖**維持真實照片，不重畫**

## ⚠️ 生圖方式（重要）
**請用你的繪圖模型直接畫插圖，不要手刻 SVG。** 產出 PNG 存到 `images/` 資料夾（自己建立）。

## 你要畫的 5 張圖

| # | 檔名 | 比例 | 內容描述 |
|---|------|------|----------|
| 1 | `images/hero-main.png` | 1:1（建議 1024×1024） | 官網主視覺：一間教室正在「變身」成密室冒險場景——黑板變成藏寶地圖、課桌上有鎖與鑰匙、老師和學生們興奮解謎。活潑卡通風，構圖飽滿、當封面主圖 |
| 2 | `images/lv1-cover.png` | 4:3 或 1:1 | LV1 新手村「初階工作坊」：教室內解謎入門——桌上攤開謎題卡片、一把大鑰匙、燈泡靈感符號，簡單明快的新手感 |
| 3 | `images/lv2-cover.png` | 4:3 或 1:1（與 #2 同比例） | LV2 進階區「議題機制工作坊」：多人圍桌玩大型機制遊戲——棋子、卡牌、天平（象徵議題兩難），氣氛熱烈 |
| 4 | `images/lv3-cover.png` | 4:3 或 1:1（與 #2 同比例） | LV3 劇情關「故事夢工場」：說故事與角色創造——打開的魔法書冒出角色與場景、羽毛筆、舞台聚光燈感 |
| 5 | `images/lv4-cover.png` | 4:3 或 1:1（與 #2 同比例） | LV4 最終章「戶外實境」：校園戶外跑關——操場/校門場景、學生拿地圖與指南針奔跑、終點旗幟與寶箱 |

LV1→LV4 四張是同一個系列（網頁上垂直排成一條冒險路線），請務必風格、色調、繪畫密度一致。

## 畫完後要改的 HTML（index.html）

每張圖在 HTML 裡都有 `<!-- Codex 封面：images/lvN-cover.png -->` 註解標記。把以下 `src` 全部替換（每個檔名出現 1–2 次，全換）：

- `src="封面右側正方形圖.jfif"` → `src="images/hero-main.png"`（1 處，Hero 區）
- `src="第一彈.jpg"` → `src="images/lv1-cover.png"`（2 處：手機版＋桌面版）
- `src="第二彈.png"` → `src="images/lv2-cover.png"`（2 處）
- `src="第三彈.jpg"` → `src="images/lv3-cover.png"`（2 處）
- `src="第四彈.jpg"` → `src="images/lv4-cover.png"`（2 處）

其他 `<img>`（.jfif 頭像、實況 .jpg、GEM／亞德雷截圖）**不要動**。

## 相關檔案
- `index.html`：唯一的網頁檔（Tailwind CDN，開檔即看）
- `docs/superpowers/specs/2026-07-10-website-redesign-design.md`：完整設計 spec
- 舊版四彈封面 `第一彈.jpg`／`第二彈.png`／`第三彈.jpg`／`第四彈.jpg` 可參考各彈主題，但風格不用跟隨

## 注意事項
- 圖片放 `images/` 子資料夾，不要散在根目錄（根目錄已經很亂）
- 完成後請在本檔案底部加「## 成果」區塊：列出生成的檔案與有無改動 HTML，方便交接回來驗收
## 成果
- 已建立 `images/` 資料夾並放入 5 張 PNG 插圖：
  - `images/hero-main.png`
  - `images/lv1-cover.png`
  - `images/lv2-cover.png`
  - `images/lv3-cover.png`
  - `images/lv4-cover.png`
- 已修改 `index.html` 圖片引用：
  - Hero 主視覺改為 `images/hero-main.png`
  - LV1 兩處改為 `images/lv1-cover.png`
  - LV2 兩處改為 `images/lv2-cover.png`
  - LV3 兩處改為 `images/lv3-cover.png`
  - LV4 兩處改為 `images/lv4-cover.png`
- 保留講師頭像、實況照片、GEM/亞德雷示範網站截圖等其他圖片引用不變。
