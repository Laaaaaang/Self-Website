# Hidden Structure

一个面向研究、写作与摄影的个人网站。网站以“当外观、表征、变换或尺度改变时，什么仍然保持不变？”为核心问题，组织研究、博客、个人背景与艺术创作。

## 技术栈

- Next.js 16 App Router
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Lenis
- MDX
- 筑紫明朝体 A Old（本地字体）

## 本地预览

```bash
npm install
npm run dev
```

浏览器打开终端显示的本地地址，通常是 `http://localhost:3000`。

生产构建：

```bash
npm run build
npm run start
```

## 页面与内容位置

- `/`：首页
- `/structures`：研究主题
- `/works`：研究项目与工作线索
- `/fragments`：博客、随笔与笔记
- `/self`：个人背景与研究轨迹
- `/cv`：正式简历
- `/traces`：艺术空间 / 摄影作品
- 研究、项目、摄影、个人资料与简历数据：`content/site-data.ts`
- 博客 MDX：`content/fragments/`
- 本地图片：`public/images/`
- 首页首屏插图组件：`components/sections/hero-observation.tsx`

## Traces 摄影档案管理

`/traces` 现在是一个由文件夹与清单共同管理的摄影档案。添加照片时不需要改页面组件：把文件放进对应文件夹，再在清单中登记元数据即可。

### 1. 放置照片

按系列创建文件夹，照片放在：

```text
public/images/traces/<系列-slug>/<照片文件>.jpg
```

例如：

```text
public/images/traces/night-studies/night-study-01.jpg
public/images/traces/night-studies/night-study-02.jpg
public/images/traces/thresholds/threshold-01.webp
```

### 2. 建立展览

打开 `content/traces.ts`，在 `traceCollections` 中增加一个系列。`layout` 决定展览方式：

- `grid`：常规网格，适合作品集。
- `sequence`：一张接一张的阅读顺序，适合叙事或项目记录。
- `diptych`：两列并置，适合对照、变体与成对作品。

```ts
{
  slug: "night-studies",
  title: "Night Studies",
  description: "Studies of light, support, and distance after dark.",
  layout: "sequence"
}
```

### 3. 登记照片与分类

在同一文件的 `tracePhotos` 数组中添加照片。`collection` 必须对应系列的 `slug`；`tags` 可用于跨系列筛选；`order` 控制系列内排序。

```ts
{
  id: "night-study-01",
  title: "Night Study 01",
  src: "/images/traces/night-studies/night-study-01.jpg",
  alt: "A nocturnal study of reflected light beneath an overpass.",
  collection: "night-studies",
  tags: ["night", "structure", "reflection"],
  location: "Pittsburgh",
  date: "2026",
  orientation: "portrait",
  order: 1
}
```

页面会自动生成“全部照片”、各个系列和标签筛选。图片请继续遵循下方的压缩建议，避免直接放入相机原图。

## 首页内容规划

首页应是一个清晰的导览页，而不是所有内容的完整副本。建议按以下顺序组织：

| 顺序 | 区块 | 目的 | 首页展示内容 | 跳转位置 |
| --- | --- | --- | --- | --- |
| 0 | 首屏 / Hero | 建立身份与视觉记忆 | 姓名或网站标题、一句定位、主插图 | 可保留为首页起点 |
| 1 | 研究 | 让访问者快速理解你的研究问题与方法 | 3 个研究方向、每项一句摘要、链接 | `/structures`、`/works` |
| 2 | 博客 / Fragments | 展示持续思考与表达 | 最新 3 篇文章：日期、标题、摘要 | `/fragments` |
| 3 | 背景 / CV | 交代你是谁、现在在做什么 | 80–120 字简介、研究兴趣、一个 CV 链接 | `/self`、`/cv` |
| 4 | 艺术空间 / Traces | 把摄影作为独立的创作与观察维度 | 2–3 张精选照片、地点/年份、简短说明 | `/traces` |
| 5 | 联系方式 | 为阅读结束提供明确下一步 | 邮箱、社交链接或合作邀请 | 页尾 |

当前首页已有首屏、研究和摄影区块。下一次实现时，建议：

1. 将 `ThesisSection` 改为“背景 / 简历摘要”，并链接到 `/self` 与 `/cv`。
2. 在研究区块之后新增一个博客预览区块，从 `content/fragments/` 取最新 3 篇内容并链接到 `/fragments`。
3. 保留 `TracesSection` 作为艺术空间，仅精选 2–3 张代表作品；完整摄影集留在 `/traces`。
4. 将目前的 `VisibleLatent` 互动区块并入研究叙事，或在内容不再匹配时移至独立项目页。

## 更换与压缩首页插图

### 1. 准备图片

- 照片优先使用 `.webp` 或 `.jpg`；不要用 PNG 保存普通摄影作品。
- 首屏目前为竖幅，推荐比例约 `3:4.45`。建议导出为 **1600 × 2370 px** 左右。
- 普通内容图片建议最长边在 **1600–2400 px**；不要直接放入相机原图。
- WebP 推荐质量 `75–82`；JPEG 推荐质量 `80–85`。以肉眼看不出明显细节损失为准。
- 单张首屏图片尽量控制在 **500 KB 以下**；普通列表图片尽量在 **300 KB 以下**。摄影作品需要保留细节时，可以适度放宽。
- 导出前移除不需要的 GPS 与相机 EXIF 信息；保留必要的版权信息即可。

可用任意图像工具（Photoshop、Lightroom、Squoosh 或 macOS“预览”）压缩。若已安装 ImageMagick，也可以在项目根目录执行：

```bash
magick input.jpg -resize "1600x2370>" -strip -quality 82 public/images/home/hero.jpg
```

这条命令会等比缩小过大的图片、移除元数据并以 JPEG 质量 82 导出。`public/images/home/` 不存在时，请先自行新建该文件夹。

### 2. 放入项目

将图片放在：

```text
public/images/home/hero.jpg
```

`public` 中的文件会从网站根路径提供，因此上面图片在代码中的路径是：

```tsx
"/images/home/hero.jpg"
```

文件名请使用英文小写、数字与连字符，例如 `hero-2026-01.webp`；避免空格和中文文件名。

### 3. 替换首页首屏插图

打开 `components/sections/hero-observation.tsx`，将 `src` 和 `alt` 改为你的内容：

```tsx
<Image
  src="/images/home/hero.jpg"
  alt="清晨雾气中的桥梁结构"
  fill
  preload
  sizes="(min-width: 768px) 18vw, 48vw"
  className="object-cover"
/>
```

- `alt` 应描述图片本身传递的信息；若图片只是纯装饰，使用 `alt=""`。
- `fill` 会让图片填满父容器；父容器必须有 `relative` 定位，本组件已经具备。
- `object-cover` 会按容器比例裁切图片；若要完整显示图片，改为 `object-contain`，但可能留下留白。
- `sizes` 告诉浏览器图片在不同屏幕上的实际显示宽度，不要随意删掉，否则移动端可能下载过大的文件。
- `preload` 只适合首屏的关键图片；摄影列表中的图片保持默认的懒加载即可。

### 4. 调整裁切与比例

在同一组件中找到包住图片的这一行：

```tsx
className="relative aspect-[3/4.45] overflow-hidden bg-[#e7e2da]"
```

把 `aspect-[3/4.45]` 改为图片希望呈现的画框比例，例如：

- 竖幅 4:5：`aspect-[4/5]`
- 竖幅 2:3：`aspect-[2/3]`
- 横幅 3:2：`aspect-[3/2]`
- 方形：`aspect-square`

修改后运行 `npm run dev`，在手机宽度与桌面宽度下检查主体是否被裁切；如主体位置偏上或偏下，可在图片 class 中加入 `object-top`、`object-center` 或 `object-bottom`。

## 图片性能检查清单

- [ ] 图片放在 `public/images/` 下，路径以 `/images/` 开头。
- [ ] 摄影图片已压缩，不使用原始相机文件。
- [ ] 每张信息性图片都有准确的 `alt` 文本。
- [ ] 使用响应式 `fill` 时保留正确的 `sizes`。
- [ ] 只给首屏关键图使用 `preload`；其他图片使用默认懒加载。
- [ ] 在桌面与手机预览中检查裁切、加载速度和文字对比度。

## 设计原则

- 以留白、非对称排版、筑紫明朝体和克制动效构成统一气质。
- 研究、摄影与写作应相互呼应，但每个部分都保有独立入口。
- 首页负责引导，详细内容留在各自页面，避免信息过载。
