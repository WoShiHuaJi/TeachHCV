export default [
  {
    id: 'html5-01',
    title: 'HTML5 文档结构与语义化标签',
    summary: '认识 HTML5 骨架与语义标签',
    minutes: 12,
    sections: [
      {
        heading: 'HTML5 文档的基本骨架',
        text: '每一个 HTML5 页面都从一个固定骨架开始：第一行写 <!DOCTYPE html> 告诉浏览器这是 HTML5 文档；html 标签包裹整个页面；head 里放标题、编码等元信息，用户看不到；body 里放用户真正看到的内容。\n记得在 head 里写上 <meta charset="UTF-8">，这样中文才不会乱码。把骨架背下来，以后每个页面都从这里开始写。',
        code: '<!DOCTYPE html>\n<html lang="zh-CN">\n<head>\n  <meta charset="UTF-8">\n  <title>我的第一个页面</title>\n</head>\n<body>\n  <h1>你好，HTML5！</h1>\n</body>\n</html>',
        lang: 'html'
      },
      {
        heading: '为什么要用语义化标签',
        text: 'HTML5 提供了一批能表达含义的标签：header 表示页眉，nav 表示导航，main 表示主体内容，article 表示独立文章，section 表示章节，aside 表示侧边栏，footer 表示页脚。\n用这些标签代替满屏的 div，浏览器、搜索引擎和屏幕阅读器都能看懂页面结构，代码也更好维护。原则是：内容是什么，就用什么标签。',
        code: '<body>\n  <header>网站名称</header>\n  <nav>首页 | 课程 | 关于</nav>\n  <main>\n    <article>\n      <h2>文章标题</h2>\n      <p>文章内容……</p>\n    </article>\n  </main>\n  <footer>版权信息</footer>\n</body>',
        lang: 'html'
      },
      {
        heading: '块级元素与行内元素',
        text: 'HTML 元素分两大类：块级元素独占一行，可以设置宽高，比如 h1、p、div、section；行内元素只占内容所需的宽度，比如 span、a、strong、img。\n理解这个区别，后面学 CSS 布局才不会懵。简单判断方法：如果一个标签出现后内容自动换行，它多半就是块级元素。',
        code: '<p>这是块级段落，<strong>这是行内加粗</strong>，不会换行。</p>',
        lang: 'html'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: 'HTML5 文档的第一行应该写什么？',
        options: ['<html5>', '<!DOCTYPE html>', '<head>', '<?xml version="1.0"?>'],
        answer: 1,
        explanation: '<!DOCTYPE html> 是 HTML5 的文档声明，必须放在第一行，告诉浏览器按 HTML5 标准解析页面。'
      },
      {
        type: 'single',
        question: '下面哪个标签最适合包裹页面的导航菜单？',
        options: ['<menu>', '<nav>', '<aside>', '<header>'],
        answer: 1,
        explanation: 'nav 是专门的导航语义标签，搜索引擎和屏幕阅读器都能识别它。'
      },
      {
        type: 'judge',
        question: '为了防止中文乱码，应在 head 中加入 <meta charset="UTF-8">。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。声明 UTF-8 编码后，浏览器才能正确解析页面中的中文字符。'
      },
      {
        type: 'multiple',
        question: '以下哪些是 HTML5 的语义化标签？（多选）',
        options: ['<header>', '<div>', '<article>', '<span>'],
        answer: [0, 2],
        explanation: 'header 和 article 是语义化标签，div 和 span 无语义。'
      },
      {
        type: 'single',
        question: '用户在页面上真正能看到的内容应该写在哪个标签里？',
        options: ['<head>', '<body>', '<title>', '<meta>'],
        answer: 1,
        explanation: 'body 里放用户看到的内容，head 里放标题、编码等元信息，用户看不到。'
      },
      {
        type: 'single',
        question: '以下哪个是行内元素？',
        options: ['<p>', '<div>', '<span>', '<section>'],
        answer: 2,
        explanation: 'span 是行内元素，只占内容所需宽度；p、div、section 都是块级元素。'
      },
      {
        type: 'judge',
        question: 'aside 标签通常用于表示页面的侧边栏内容。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。aside 是语义化标签，表示与主体内容相关的侧边栏。'
      },
      {
        type: 'judge',
        question: '块级元素只占内容所需的宽度，不会独占一行。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。块级元素独占一行、可设置宽高；只占内容宽度的是行内元素。'
      },
      {
        type: 'multiple',
        question: '以下哪些属于块级元素？（多选）',
        options: ['<h1>', '<p>', '<span>', '<div>'],
        answer: [0, 1, 3],
        explanation: 'h1、p、div 都是块级元素，独占一行；span 是行内元素。'
      },
      {
        type: 'multiple',
        question: '使用语义化标签的好处有哪些？（多选）',
        options: ['搜索引擎更好理解页面', '屏幕阅读器更容易解析', '代码更好维护', '让页面加载速度翻倍'],
        answer: [0, 1, 2],
        explanation: '语义化标签让浏览器、搜索引擎和屏幕阅读器都能看懂结构，代码也更易维护，但与加载速度无直接关系。'
      },
      {
        type: 'single',
        question: '页面中一篇独立完整的文章，最适合用哪个标签包裹？',
        options: ['<section>', '<article>', '<div>', '<span>'],
        answer: 1,
        explanation: 'article 表示独立完整的内容块，如一篇文章；section 表示章节，div 和 span 无语义。'
      },
      {
        type: 'judge',
        question: '在 HTML5 骨架中，title 标签应该写在 head 标签里。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。title 属于元信息，放在 head 中；body 里放用户能看到的内容。'
      },
      {
        type: 'single',
        question: 'html 标签上 lang="zh-CN" 属性的作用是？',
        options: ['声明页面主要语言为中文', '设置文字颜色', '引入中文字体', '让浏览器自动翻译页面'],
        answer: 0,
        explanation: 'lang 声明页面语言，帮助搜索引擎和屏幕阅读器正确处理内容。'
      },
      {
        type: 'judge',
        question: 'header 标签只能在页面最顶部使用一次，不能出现在其他地方。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。header 表示页眉，页面可以有多个，article 等区块内部也可以有自己的 header。'
      },
      {
        type: 'multiple',
        question: '以下哪些内容适合写在 head 标签中？（多选）',
        options: ['字符编码声明', '页面标题 title', '用户看到的正文段落', '元信息 meta'],
        answer: [0, 1, 3],
        explanation: 'head 放元信息：编码声明、title、meta 等；正文段落属于 body。'
      },
      {
        type: 'single',
        question: 'main 标签在语义化结构中表示什么？',
        options: ['页面主体内容', '导航菜单', '侧边栏', '页脚信息'],
        answer: 0,
        explanation: 'main 表示页面的主体内容区域，一个页面通常只放一个 main。'
      },
      {
        type: 'judge',
        question: 'section 标签用于表示页面中的一个章节或内容区块。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。section 表示有主题的一组内容，常配合标题使用。'
      },
      {
        type: 'multiple',
        question: '关于块级元素，以下说法正确的有？（多选）',
        options: ['独占一行', '可以设置宽高', '只占内容所需宽度', 'h1 属于块级元素'],
        answer: [0, 1, 3],
        explanation: '块级元素独占一行、可设宽高，h1 是块级元素；只占内容宽度是行内元素的特征。'
      },
      {
        type: 'judge',
        question: 'footer 标签通常用于放置版权信息等页脚内容。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。footer 是页脚语义标签，常放版权、联系方式等信息。'
      },
      {
        type: 'multiple',
        question: '关于 article 与 section 的用法，以下说法正确的有？（多选）',
        options: ['article 表示独立完整的内容', 'section 表示内容章节', 'article 内部可以嵌套 section', '两者完全相同可以随意互换'],
        answer: [0, 1, 2],
        explanation: 'article 是独立内容块，section 是章节，二者语义不同但可以嵌套组合使用。'
      }
    ]
  },
  {
    id: 'html5-02',
    title: '文本与链接',
    summary: '掌握标题段落与超链接用法',
    minutes: 10,
    sections: [
      {
        heading: '标题与段落',
        text: 'HTML 有六级标题 h1 到 h6，h1 最大最重要，一个页面通常只用一个 h1。p 标签表示段落，段落之间会自动留出空隙。\n想让文本换行可以用 <br>，想让内容分组可以用 <hr> 画一条水平线。注意标题要按层级顺序使用，不要跳过，这对阅读结构和搜索引擎都很友好。',
        code: '<h1>网页主标题</h1>\n<h2>章节标题</h2>\n<p>这是一个段落，文字内容写在这里。</p>\n<p>这是另一个段落。<br>这里强制换行。</p>',
        lang: 'html'
      },
      {
        heading: '常用文本强调标签',
        text: '想让文字加粗用 strong（重要内容），想倾斜用 em（强调语气）。旧的 b 和 i 标签只改变外观，没有语义，现在更推荐 strong 和 em。\n另外还有 code 表示代码片段，mark 表示高亮标记。合理使用这些标签，页面内容会更有层次感。',
        code: '<p><strong>重要提示：</strong>保存前请<em>务必检查</em>。</p>\n<p>使用 <code>console.log()</code> 打印结果。</p>\n<p>这个词被<mark>高亮</mark>了。</p>',
        lang: 'html'
      },
      {
        heading: '超链接 a 标签',
        text: 'a 标签是网页的灵魂，href 属性指定跳转地址。可以链接外部网站（写完整网址，并加 target="_blank" 在新窗口打开），也可以链接站内页面（写相对路径），还能用 href="#id名" 跳转到本页某个位置。\n链接文字要写清楚去哪，别只写“点这里”，这对用户体验和搜索引擎都更好。',
        code: '<a href="https://developer.mozilla.org" target="_blank">MDN 文档</a>\n<a href="about.html">关于我们</a>\n<a href="#top">回到顶部</a>',
        lang: 'html'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: '一个页面中最重要、通常只出现一次的标题标签是？',
        options: ['<h6>', '<h2>', '<h1>', '<title>'],
        answer: 2,
        explanation: 'h1 是最高级标题，一个页面一般只用一个，代表整个页面的主题。'
      },
      {
        type: 'single',
        question: '想让链接在新窗口打开，应该设置哪个属性？',
        options: ['href="_blank"', 'target="_blank"', 'new="true"', 'window="new"'],
        answer: 1,
        explanation: 'target="_blank" 让链接在新标签页打开，href 只负责指定地址。'
      },
      {
        type: 'judge',
        question: 'strong 和 b 都能加粗文字，但 strong 带有“重要内容”的语义，更推荐使用。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。b 只改变外观，strong 还表示内容重要，对搜索引擎和屏幕阅读器更友好。'
      },
      {
        type: 'multiple',
        question: '以下哪些标签带有语义，推荐用于文本强调？（多选）',
        options: ['<strong>', '<b>', '<em>', '<i>'],
        answer: [0, 2],
        explanation: 'strong 表示重要内容、em 表示强调语气，都带语义；b 和 i 只改变外观，没有语义。'
      },
      {
        type: 'single',
        question: '哪个标签表示一个段落？',
        options: ['<para>', '<p>', '<text>', '<br>'],
        answer: 1,
        explanation: 'p 是段落标签，段落之间会自动留出空隙；br 只是换行。'
      },
      {
        type: 'single',
        question: 'a 标签的 href="#top" 表示什么？',
        options: ['链接到外部网站', '跳转到本页 id 为 top 的位置', '在新窗口打开', '下载一个文件'],
        answer: 1,
        explanation: 'href 以 # 开头表示页内锚点跳转，会滚动到 id 为 top 的元素处。'
      },
      {
        type: 'judge',
        question: 'br 标签用于强制换行，且不需要结束标签。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。br 是自闭合标签，作用是在文本中强制换行。'
      },
      {
        type: 'judge',
        question: '链接文字只写“点这里”是很好的做法，对用户体验和搜索引擎都友好。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。链接文字应写清楚去向，“点这里”无法让用户和搜索引擎理解链接目的。'
      },
      {
        type: 'multiple',
        question: '以下哪些标签可用于修饰文本内容？（多选）',
        options: ['<code>', '<mark>', '<hr>', '<video>'],
        answer: [0, 1, 2],
        explanation: 'code 表示代码片段、mark 表示高亮、hr 画水平线分隔内容；video 是视频播放标签。'
      },
      {
        type: 'multiple',
        question: '关于标题标签的使用，以下说法正确的有？（多选）',
        options: ['标题应按层级顺序使用', '一个页面通常只用一个 h1', '可以随意跳级使用标题', 'h6 比 h1 更大更重要'],
        answer: [0, 1],
        explanation: '标题要按层级使用、不跳级，一个页面一般一个 h1；h1 最大最重要，h6 最小。'
      },
      {
        type: 'single',
        question: '想让文字倾斜以强调语气，应该用哪个标签？',
        options: ['<strong>', '<em>', '<code>', '<mark>'],
        answer: 1,
        explanation: 'em 表示强调语气，默认显示为斜体；strong 是加粗重要内容，code 是代码片段，mark 是高亮。'
      },
      {
        type: 'judge',
        question: '链接到外部网站时，href 应该写完整的网址。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。外部链接要写完整网址，站内页面才使用相对路径。'
      },
      {
        type: 'single',
        question: 'HTML 的标题标签一共有几级？',
        options: ['三级', '五级', '六级', '十级'],
        answer: 2,
        explanation: '标题从 h1 到 h6 共六级，h1 最大最重要，h6 最小。'
      },
      {
        type: 'judge',
        question: 'hr 标签用于在页面中画一条水平分隔线。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。hr 表示内容的分隔，默认显示为一条水平线。'
      },
      {
        type: 'multiple',
        question: '关于 code 和 mark 标签，以下说法正确的有？（多选）',
        options: ['code 表示代码片段', 'mark 表示高亮标记', '它们都带有语义', '它们都必须配合 a 标签使用'],
        answer: [0, 1, 2],
        explanation: 'code 标记代码、mark 高亮文本，都带语义且可独立使用，与 a 标签无关。'
      },
      {
        type: 'single',
        question: '链接到同一网站下的 about.html 页面，href 最合适写法是？',
        options: ['完整的外部网址', '相对路径 about.html', 'href="#about"', 'href 留空'],
        answer: 1,
        explanation: '站内页面用相对路径即可，简洁且换域名后不用修改。'
      },
      {
        type: 'judge',
        question: 'em 标签默认显示为斜体，用于强调语气。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。em 表示强调，浏览器默认以斜体呈现。'
      },
      {
        type: 'multiple',
        question: 'a 标签可以链接到以下哪些目标？（多选）',
        options: ['外部网站', '站内页面', '本页某个位置', '只能链接外部网站'],
        answer: [0, 1, 2],
        explanation: 'a 标签既能链接外部网站和站内页面，也能用 #id 做页内锚点跳转。'
      },
      {
        type: 'judge',
        question: '使用标题时可以随意跳级，比如 h1 后面直接用 h4。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。标题应按层级顺序使用，跳级会破坏文档结构，影响阅读器和搜索引擎理解。'
      },
      {
        type: 'multiple',
        question: '以下哪些标签是自闭合、无需结束标签的？（多选）',
        options: ['<br>', '<hr>', '<p>', '<strong>'],
        answer: [0, 1],
        explanation: 'br 和 hr 是自闭合标签；p 和 strong 必须成对出现。'
      }
    ]
  },
  {
    id: 'html5-03',
    title: '图片与多媒体',
    summary: '学会插入图片、音频与视频',
    minutes: 11,
    sections: [
      {
        heading: 'img 插入图片',
        text: 'img 标签用来在页面中插入图片，src 属性写图片地址，alt 属性写替代文字。alt 很重要：图片加载失败时它会显示出来，屏幕阅读器也会读给视障用户听。\nimg 是自闭合标签，没有结束标签。可以用 width 和 height 控制大小，但更推荐后面用 CSS 来控制。',
        code: '<img src="logo.png" alt="网站标志">\n<img src="photo.jpg" alt="夕阳下的海滩" width="300">',
        lang: 'html'
      },
      {
        heading: 'audio 播放音频',
        text: 'HTML5 用 audio 标签直接播放音频，不再需要插件。加上 controls 属性会显示播放、暂停、音量等控制按钮。\n为了兼容不同浏览器，可以放多个 source 标签提供不同格式，浏览器会自动选择第一个能播放的格式。',
        code: '<audio controls>\n  <source src="music.mp3" type="audio/mpeg">\n  <source src="music.ogg" type="audio/ogg">\n  您的浏览器不支持音频播放。\n</audio>',
        lang: 'html'
      },
      {
        heading: 'video 播放视频',
        text: 'video 标签的用法和 audio 几乎一样：controls 显示控制条，width/height 设置尺寸，poster 设置视频未播放时的封面图。\n还可以加 autoplay 自动播放、loop 循环播放、muted 静音。注意很多浏览器规定：只有 muted 静音时 autoplay 才生效，这是为了不打扰用户。',
        code: '<video controls width="400" poster="cover.jpg">\n  <source src="movie.mp4" type="video/mp4">\n  您的浏览器不支持视频播放。\n</video>',
        lang: 'html'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: 'img 标签中，图片加载失败时显示的替代文字由哪个属性提供？',
        options: ['src', 'title', 'alt', 'text'],
        answer: 2,
        explanation: 'alt 属性提供替代文字，图片无法显示时展示，也供屏幕阅读器朗读。'
      },
      {
        type: 'single',
        question: '想让 audio 或 video 显示播放/暂停按钮，需要添加哪个属性？',
        options: ['buttons', 'controls', 'play', 'show'],
        answer: 1,
        explanation: 'controls 属性让浏览器显示默认的播放控制条，不写它用户就无法操作播放器。'
      },
      {
        type: 'judge',
        question: '在多数浏览器中，视频设置 autoplay 后一定会带声音自动播放。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。为避免打扰用户，浏览器通常要求视频 muted 静音后才允许自动播放。'
      },
      {
        type: 'multiple',
        question: '以下哪些是 video 标签支持的属性？（多选）',
        options: ['controls', 'poster', 'loop', 'href'],
        answer: [0, 1, 2],
        explanation: 'controls 显示控制条、poster 设置封面图、loop 循环播放都是 video 的属性；href 是 a 标签的属性。'
      },
      {
        type: 'single',
        question: 'img 标签中指定图片地址的属性是？',
        options: ['href', 'src', 'link', 'url'],
        answer: 1,
        explanation: 'src 指定图片地址；href 是 a 标签用来指定链接地址的属性。'
      },
      {
        type: 'single',
        question: 'video 标签的 poster 属性作用是？',
        options: ['设置视频未播放时的封面图', '让视频自动播放', '让视频循环播放', '让视频静音'],
        answer: 0,
        explanation: 'poster 设置视频播放前显示的封面图，自动播放、循环、静音分别由 autoplay、loop、muted 控制。'
      },
      {
        type: 'judge',
        question: 'img 是自闭合标签，没有对应的结束标签。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。img 不需要成对出现，直接写 <img src="..." alt="..."> 即可。'
      },
      {
        type: 'judge',
        question: 'audio 标签中放多个 source 时，浏览器会同时播放所有格式。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。浏览器只会自动选择第一个能播放的格式，其余作为备用。'
      },
      {
        type: 'multiple',
        question: '关于 audio 和 video 标签，以下说法正确的有？（多选）',
        options: ['加 controls 可显示控制条', '可用多个 source 提供不同格式', '不支持时显示标签内的提示文字', '必须依赖 Flash 插件才能播放'],
        answer: [0, 1, 2],
        explanation: 'HTML5 原生播放音视频无需插件；controls 显示控制条、多 source 做格式兼容、标签内文字在不支持时提示。'
      },
      {
        type: 'multiple',
        question: '想让视频静音循环自动播放，需要组合哪些属性？（多选）',
        options: ['autoplay', 'loop', 'muted', 'poster'],
        answer: [0, 1, 2],
        explanation: 'autoplay 自动播放、loop 循环、muted 静音（多数浏览器要求静音才允许自动播放）；poster 只是封面图。'
      },
      {
        type: 'single',
        question: '控制图片在页面中的显示大小，更推荐的做法是？',
        options: ['只用 width 属性', '只用 height 属性', '使用 CSS 控制', '无法调整大小'],
        answer: 2,
        explanation: '虽然 img 有 width 和 height 属性，但实际项目中更推荐用 CSS 统一控制尺寸。'
      },
      {
        type: 'judge',
        question: 'img 标签的 alt 替代文字会被屏幕阅读器朗读给视障用户听。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。alt 不仅在图片加载失败时显示，也是无障碍访问的重要内容。'
      },
      {
        type: 'single',
        question: 'audio 或 video 标签内部写的提示文字在什么情况下会显示？',
        options: ['永远显示', '浏览器不支持该标签时显示', '播放结束后显示', '鼠标悬停时显示'],
        answer: 1,
        explanation: '支持音视频的浏览器会忽略标签内的文字，只有不支持的旧浏览器才会显示它。'
      },
      {
        type: 'judge',
        question: 'video 标签可以用 width 和 height 属性设置视频的显示尺寸。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。video 支持 width、height 设置尺寸，与 img 类似。'
      },
      {
        type: 'multiple',
        question: '以下哪些是 img 标签的常用属性？（多选）',
        options: ['src', 'alt', 'width', 'controls'],
        answer: [0, 1, 2],
        explanation: 'src 指定地址、alt 提供替代文字、width 控制宽度；controls 是音视频标签的属性。'
      },
      {
        type: 'single',
        question: '想让视频播放完后自动重新播放，应该添加哪个属性？',
        options: ['repeat', 'loop', 'cycle', 'again'],
        answer: 1,
        explanation: 'loop 属性让媒体循环播放；repeat、cycle、again 都不是合法属性。'
      },
      {
        type: 'judge',
        question: 'source 标签的 type 属性用于声明媒体的格式类型，帮助浏览器判断能否播放。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。type 写明 MIME 类型，浏览器可快速跳过自己不支持的格式。'
      },
      {
        type: 'multiple',
        question: '关于 video 的 autoplay 自动播放，以下说法正确的有？（多选）',
        options: ['配合 muted 通常才能生效', '浏览器为不打扰用户做了限制', '任何情况下都允许带声音自动播放', 'autoplay 是 video 的合法属性'],
        answer: [0, 1, 3],
        explanation: 'autoplay 是合法属性，但多数浏览器要求静音后才生效，以免打扰用户。'
      },
      {
        type: 'judge',
        question: 'img 标签写 width="300" 表示图片显示宽度为 300 像素。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。img 的 width 属性值按像素计算，但实际项目更推荐用 CSS 控制。'
      },
      {
        type: 'multiple',
        question: '以下哪些属于 HTML5 多媒体相关的标签？（多选）',
        options: ['<audio>', '<video>', '<source>', '<sound>'],
        answer: [0, 1, 2],
        explanation: 'audio、video、source 都是 HTML5 多媒体标签；sound 不是合法标签。'
      }
    ]
  },
  {
    id: 'html5-04',
    title: '表单与常用输入类型',
    summary: '掌握表单控件与输入类型',
    minutes: 13,
    sections: [
      {
        heading: 'form 与基础输入框',
        text: '表单用 form 标签包裹，action 指定提交地址，method 指定提交方式（get 或 post）。\n最常用的是 input 标签，type="text" 是单行文本框，type="password" 输入时会显示为圆点。每个输入框都应该配一个 label 标签，用 for 属性关联输入框的 id，点击 label 就能聚焦输入框，体验更好。',
        code: '<form action="/login" method="post">\n  <label for="name">用户名：</label>\n  <input type="text" id="name" name="username">\n  <label for="pwd">密码：</label>\n  <input type="password" id="pwd" name="password">\n  <button type="submit">登录</button>\n</form>',
        lang: 'html'
      },
      {
        heading: '单选、多选与下拉框',
        text: '单选框用 type="radio"，同一组单选框的 name 必须相同才能互斥；多选框用 type="checkbox"；下拉选择用 select 和 option 组合。\n想让用户填数字、邮箱、日期，HTML5 提供了对应 type，浏览器会自动校验格式并弹出合适的键盘，移动端体验尤其好。',
        code: '<input type="radio" name="gender" value="male" id="m"><label for="m">男</label>\n<input type="radio" name="gender" value="female" id="f"><label for="f">女</label>\n\n<select name="city">\n  <option value="bj">北京</option>\n  <option value="sh">上海</option>\n</select>',
        lang: 'html'
      },
      {
        heading: 'HTML5 新输入类型与校验',
        text: 'HTML5 新增了很多好用的类型：email 校验邮箱格式，number 只能输数字（可配 min、max），date 弹出日期选择器，color 弹出取色器，range 变成滑块。\n还有几个校验属性：required 表示必填，placeholder 显示灰色提示文字，maxlength 限制字数。用好它们，不用写一行 JavaScript 就能完成基础校验。',
        code: '<input type="email" name="email" required placeholder="请输入邮箱">\n<input type="number" name="age" min="1" max="120">\n<input type="date" name="birthday">\n<input type="range" name="volume" min="0" max="100">',
        lang: 'html'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: '要让一组单选框（radio）互斥，必须怎么做？',
        options: ['id 相同', 'name 相同', 'value 相同', 'class 相同'],
        answer: 1,
        explanation: 'name 相同的 radio 会被视为同一组，选中一个会自动取消其他的。'
      },
      {
        type: 'single',
        question: '想让输入框必须填写才能提交表单，应该加哪个属性？',
        options: ['placeholder', 'must', 'required', 'need'],
        answer: 2,
        explanation: 'required 属性让该字段必填，空值提交时浏览器会自动阻止并提示。'
      },
      {
        type: 'judge',
        question: 'input type="email" 会自动校验输入内容是否为合法的邮箱格式。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。提交表单时浏览器会自动检查 email 类型输入框的内容格式，不合格会提示。'
      },
      {
        type: 'multiple',
        question: '以下哪些是 HTML5 新增的 input 输入类型？（多选）',
        options: ['email', 'date', 'range', 'address'],
        answer: [0, 1, 2],
        explanation: 'email 校验邮箱、date 弹出日期选择器、range 变成滑块，都是 HTML5 新类型；address 不是合法的 input 类型。'
      },
      {
        type: 'single',
        question: 'label 标签的 for 属性应该与输入框的哪个属性对应？',
        options: ['name', 'id', 'value', 'class'],
        answer: 1,
        explanation: 'label 的 for 等于输入框的 id，点击 label 即可聚焦对应输入框。'
      },
      {
        type: 'single',
        question: '想让输入的内容显示为圆点以隐藏密码，应该用哪种 type？',
        options: ['text', 'hidden', 'password', 'secret'],
        answer: 2,
        explanation: 'type="password" 会把输入内容显示为圆点，保护密码不被旁人看到。'
      },
      {
        type: 'judge',
        question: '下拉选择框由 select 和 option 标签组合而成。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。select 定义下拉框，内部的每个 option 是一个可选项。'
      },
      {
        type: 'judge',
        question: 'form 的 method 属性只能是 get，不能使用 post。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。method 常用 get 和 post 两种方式，登录等场景通常使用 post。'
      },
      {
        type: 'multiple',
        question: '关于表单提交，以下说法正确的有？（多选）',
        options: ['action 指定提交地址', 'method 指定提交方式', 'button type="submit" 可提交表单', 'src 指定表单提交地址'],
        answer: [0, 1, 2],
        explanation: 'action 和 method 分别指定提交地址与方式，提交按钮触发表单提交；src 不是 form 的属性。'
      },
      {
        type: 'multiple',
        question: '以下哪些 input 类型会让浏览器自动校验或提供专用输入控件？（多选）',
        options: ['email', 'number', 'date', 'text'],
        answer: [0, 1, 2],
        explanation: 'email 校验格式、number 限制数字并可配 min/max、date 弹出日期选择器；text 只是普通文本框，不做格式校验。'
      },
      {
        type: 'single',
        question: '想让用户从多个选项中同时勾选多项，应该使用哪种 input 类型？',
        options: ['radio', 'checkbox', 'select', 'text'],
        answer: 1,
        explanation: 'checkbox 是多选框，可同时勾选多个；radio 同组内只能单选。'
      },
      {
        type: 'judge',
        question: 'input type="range" 会把输入框变成一个滑块控件。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。range 显示为滑块，常配合 min、max 限定取值范围。'
      },
      {
        type: 'single',
        question: 'input type="color" 会让浏览器弹出什么控件？',
        options: ['日期选择器', '取色器', '滑块', '下拉框'],
        answer: 1,
        explanation: 'color 类型弹出取色器，方便用户直接选取颜色值。'
      },
      {
        type: 'judge',
        question: 'placeholder 属性会在输入框为空时显示灰色的提示文字。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。placeholder 提供输入提示，用户开始输入后自动消失。'
      },
      {
        type: 'multiple',
        question: '关于 radio 单选框，以下说法正确的有？（多选）',
        options: ['同一组的 name 必须相同', '一组中只能选中一个', 'value 是选中后提交的值', '同组可以同时选中多个'],
        answer: [0, 1, 2],
        explanation: 'radio 靠相同 name 分组互斥，提交的是选中项的 value；多选要用 checkbox。'
      },
      {
        type: 'single',
        question: '提交登录密码等敏感信息时，form 的 method 更适合用哪种？',
        options: ['get', 'post', 'put', '随便哪种都一样'],
        answer: 1,
        explanation: 'get 会把数据拼在网址中暴露出来，登录等敏感场景应使用 post。'
      },
      {
        type: 'judge',
        question: 'option 标签的 value 属性值是该选项被选中时提交给服务器的数据。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。option 显示的文字给用户看，提交的是 value 的值。'
      },
      {
        type: 'multiple',
        question: '以下哪些做法能提升表单的用户体验？（多选）',
        options: ['用 label 关联输入框', '为控件写清楚的提示文字', '移动端使用合适的 input type', '所有输入框都不写 name'],
        answer: [0, 1, 2],
        explanation: 'label 关联、清晰提示、合适的输入类型都能改善体验；不写 name 会导致数据无法提交。'
      },
      {
        type: 'judge',
        question: '点击与输入框关联的 label 文字，可以让该输入框获得焦点。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。label 的 for 指向输入框 id 后，点击 label 等同于点击输入框。'
      },
      {
        type: 'multiple',
        question: '以下哪些控件可以放在 form 表单中使用？（多选）',
        options: ['input', 'select', 'button', 'meta'],
        answer: [0, 1, 2],
        explanation: 'input、select、button 都是常见表单控件；meta 是 head 中的元信息标签。'
      }
    ]
  },
  {
    id: 'html5-05',
    title: '表格与列表',
    summary: '用表格列表组织页面数据',
    minutes: 11,
    sections: [
      {
        heading: '三种列表',
        text: 'HTML 有三种列表：无序列表 ul（前面是圆点，顺序无所谓，比如导航菜单）；有序列表 ol（自动带编号，顺序有意义，比如排行榜）；描述列表 dl 配 dt（术语）和 dd（解释）。\nul 和 ol 的直接子元素都必须是 li。列表可以互相嵌套，把子列表写在 li 里面就行。',
        code: '<ul>\n  <li>苹果</li>\n  <li>香蕉</li>\n</ul>\n<ol>\n  <li>第一名：张三</li>\n  <li>第二名：李四</li>\n</ol>',
        lang: 'html'
      },
      {
        heading: 'table 表格基础',
        text: '表格用 table 标签，tr 表示一行，th 表示表头单元格（自动加粗居中），td 表示普通单元格。\n规范的写法是用 thead 包裹表头行、tbody 包裹数据行，这样结构清晰，也方便以后加样式。border 属性可以快速显示边框，实际项目中更推荐用 CSS 美化。',
        code: '<table border="1">\n  <thead>\n    <tr><th>姓名</th><th>成绩</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>小明</td><td>90</td></tr>\n    <tr><td>小红</td><td>95</td></tr>\n  </tbody>\n</table>',
        lang: 'html'
      },
      {
        heading: '合并单元格',
        text: '有时一个单元格要占多列或多行：colspan 让单元格横向跨列，rowspan 让它纵向跨行。\n合并后记得把被占位置的单元格删掉，否则表格会错位。比如 colspan="2" 表示这个格子占两列，那一行就少写一个 td。表格适合做真正的数据展示，不要再用它来做页面布局。',
        code: '<table border="1">\n  <tr><th>课程</th><th>周一</th><th>周二</th></tr>\n  <tr><td>数学</td><td colspan="2">连上两节</td></tr>\n  <tr><td>语文</td><td>第1节</td><td>第2节</td></tr>\n</table>',
        lang: 'html'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: '想制作带自动编号的排行榜，应该用哪组标签？',
        options: ['ul + li', 'ol + li', 'dl + dt + dd', 'table + tr'],
        answer: 1,
        explanation: 'ol 是有序列表，会自动为每个 li 生成 1、2、3……的序号，适合有顺序的内容。'
      },
      {
        type: 'single',
        question: '表格中表示表头单元格（自动加粗）的标签是？',
        options: ['<td>', '<th>', '<tr>', '<thead>'],
        answer: 1,
        explanation: 'th 是表头单元格，默认加粗居中；td 是普通数据单元格。'
      },
      {
        type: 'judge',
        question: '现代网页开发中，推荐大量使用 table 来做整个页面的布局。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。table 只应用于展示真正的表格数据，页面布局应使用 CSS（如 Flexbox、Grid）。'
      },
      {
        type: 'multiple',
        question: '以下哪些标签是构成 HTML 表格的常用标签？（多选）',
        options: ['<tr>', '<th>', '<td>', '<li>'],
        answer: [0, 1, 2],
        explanation: 'tr 表示行、th 表示表头单元格、td 表示普通单元格；li 是列表项，属于 ul/ol 列表。'
      },
      {
        type: 'single',
        question: '想让一个单元格横向跨两列，应该使用哪个属性？',
        options: ['rowspan', 'colspan', 'merge', 'span'],
        answer: 1,
        explanation: 'colspan 控制横向跨列，rowspan 控制纵向跨行。'
      },
      {
        type: 'single',
        question: '描述列表 dl 中，dt 标签表示什么？',
        options: ['解释内容', '术语', '列表序号', '表格行'],
        answer: 1,
        explanation: 'dt 表示术语，dd 表示对该术语的解释，二者配合 dl 组成描述列表。'
      },
      {
        type: 'judge',
        question: 'ul 和 ol 的直接子元素都必须是 li。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。列表项必须放在 li 里，嵌套子列表也要写在某个 li 内部。'
      },
      {
        type: 'judge',
        question: '单元格使用 colspan 合并后，被占位置的单元格仍然要保留。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。合并后要删掉被占位置的单元格，否则表格会错位。'
      },
      {
        type: 'multiple',
        question: '关于 HTML 列表，以下说法正确的有？（多选）',
        options: ['ul 默认以圆点标记', 'ol 自动带编号', '列表可以互相嵌套', 'dl 的直接子元素是 li'],
        answer: [0, 1, 2],
        explanation: 'ul 用圆点、ol 带编号、列表可嵌套；dl 的子元素是 dt 和 dd，不是 li。'
      },
      {
        type: 'multiple',
        question: '以下哪些标签用于划分表格的结构分区？（多选）',
        options: ['<thead>', '<tbody>', '<tr>', '<li>'],
        answer: [0, 1],
        explanation: 'thead 包裹表头行、tbody 包裹数据行，让表格结构清晰；tr 是行标签，li 属于列表。'
      },
      {
        type: 'single',
        question: '想让一个单元格纵向跨两行，应该使用哪个属性？',
        options: ['rowspan', 'colspan', 'merge', 'span'],
        answer: 0,
        explanation: 'rowspan 控制纵向跨行，colspan 控制横向跨列。'
      },
      {
        type: 'judge',
        question: 'th 表头单元格默认会加粗并居中显示。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。th 默认样式是加粗居中，用于表头；普通数据单元格用 td。'
      },
      {
        type: 'single',
        question: '导航菜单这种顺序无关紧要的项目列表，最适合使用？',
        options: ['ol', 'ul', 'dl', 'table'],
        answer: 1,
        explanation: '顺序无所谓时用无序列表 ul；顺序有意义时才用 ol。'
      },
      {
        type: 'judge',
        question: 'table 的 border 属性能快速显示边框，但实际项目更推荐用 CSS 美化表格。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。border 属性适合快速调试，正式样式应交给 CSS 统一控制。'
      },
      {
        type: 'multiple',
        question: '关于列表嵌套，以下说法正确的有？（多选）',
        options: ['子列表要写在某个 li 里面', '列表可以互相嵌套', '子列表可以直接写在 ul 里面', 'ol 里面可以嵌套 ul'],
        answer: [0, 1, 3],
        explanation: '嵌套列表必须放在 li 内部，ul 和 ol 可以互相嵌套；ul 的直接子元素只能是 li。'
      },
      {
        type: 'single',
        question: '表格中 tr 标签表示什么？',
        options: ['表头单元格', '普通单元格', '一行', '整个表格'],
        answer: 2,
        explanation: 'tr 表示一行，行内再用 th 或 td 划分单元格。'
      },
      {
        type: 'judge',
        question: '描述列表中 dd 标签表示对 dt 术语的解释内容。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。dt 是术语，dd 是对该术语的描述或解释。'
      },
      {
        type: 'multiple',
        question: '以下哪些内容适合用 table 表格展示？（多选）',
        options: ['学生成绩表', '每周课程表', '整个页面的布局排版', '商品价格对比'],
        answer: [0, 1, 3],
        explanation: '表格适合展示真正的二维数据；页面布局应使用 CSS，而不是 table。'
      },
      {
        type: 'judge',
        question: '单元格设置 rowspan="2" 后，下方相邻行要少写一个对应位置的单元格。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。纵向合并占了下一行的位置，下一行必须删掉被占的单元格，否则表格错位。'
      },
      {
        type: 'multiple',
        question: '一个结构规范的表格通常包含哪些部分？（多选）',
        options: ['thead 表头区', 'tbody 数据区', 'tr 行', 'script 脚本'],
        answer: [0, 1, 2],
        explanation: 'thead 包表头、tbody 包数据行、tr 表示每一行；script 与表格结构无关。'
      }
    ]
  },
  {
    id: 'html5-06',
    title: 'HTML5 新特性简介',
    summary: '初识本地存储、拖放与Canvas',
    minutes: 14,
    sections: [
      {
        heading: 'localStorage 本地存储',
        text: 'localStorage 可以把数据存在用户浏览器里，关闭浏览器再打开数据还在，容量大约 5MB。\n用法很简单：setItem 存数据，getItem 取数据，removeItem 删除。注意它只能存字符串，存对象要先用 JSON.stringify 转换。适合保存用户名、主题设置等不敏感的小数据，千万不要存密码。',
        code: "// 保存\nlocalStorage.setItem('username', '小明');\n// 读取\nvar name = localStorage.getItem('username');\nconsole.log(name); // 小明\n// 删除\nlocalStorage.removeItem('username');",
        lang: 'js'
      },
      {
        heading: '拖放（Drag and Drop）',
        text: 'HTML5 原生支持拖放：给元素加上 draggable="true"，它就变得可以拖动了。\n拖放过程中会触发一系列事件：被拖元素上触发 dragstart，目标区域上触发 dragover（要调用 preventDefault 才能放下）和 drop。利用这些事件，配合 DataTransfer 传递数据，就能做出拖动排序、拖文件上传等效果。',
        code: '<div id="box" draggable="true">拖我</div>\n<div id="target">放到这里</div>\n<script>\n  var target = document.getElementById(\'target\');\n  target.ondragover = function (e) { e.preventDefault(); };\n  target.ondrop = function () { alert(\'放下了！\'); };\n</script>',
        lang: 'html'
      },
      {
        heading: 'Canvas 画布简介',
        text: 'canvas 标签在页面上开辟一块画布，本身什么都不会画，要用 JavaScript 来作画。\n基本步骤：先获取 canvas 元素，调用 getContext(\'2d\') 拿到 2D 绘图上下文，然后就能画矩形、圆形、线条、文字甚至图片。Canvas 常用于游戏、图表、图片编辑等场景，是前端进阶的重要技能。',
        code: '<canvas id="c" width="200" height="100"></canvas>\n<script>\n  var ctx = document.getElementById(\'c\').getContext(\'2d\');\n  ctx.fillStyle = \'orange\';\n  ctx.fillRect(10, 10, 100, 60);\n</script>',
        lang: 'html'
      },
      {
        heading: 'HTML5 还有哪些新能力',
        text: '除了上面三个，HTML5 还有很多实用新特性：Geolocation 获取用户地理位置；sessionStorage 提供仅当前会话有效的存储；Web Worker 让耗时计算在后台线程运行不卡页面。\n还有新表单类型、语义标签、音视频这些我们前面学过的内容。学习时不必一次全记住，知道“HTML5 有这个能力”，用的时候再查文档就好。',
        code: "// 获取地理位置（需要用户授权）\nnavigator.geolocation.getCurrentPosition(function (pos) {\n  console.log('纬度：' + pos.coords.latitude);\n  console.log('经度：' + pos.coords.longitude);\n});",
        lang: 'js'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: 'localStorage 中保存的数据是什么类型的？',
        options: ['数字', '对象', '字符串', '数组'],
        answer: 2,
        explanation: 'localStorage 只能存字符串，存对象需要先用 JSON.stringify 转换。'
      },
      {
        type: 'single',
        question: '想让一个 HTML 元素可以被拖动，需要添加哪个属性？',
        options: ['drag="true"', 'draggable="true"', 'move="true"', 'dragable="yes"'],
        answer: 1,
        explanation: 'draggable="true" 让元素可拖动，再配合 dragstart、dragover、drop 等事件完成拖放逻辑。'
      },
      {
        type: 'judge',
        question: 'localStorage 中的数据在关闭浏览器后会被自动清除。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。localStorage 的数据会长期保存，除非代码或用户手动清除；sessionStorage 才是会话结束就清除。'
      },
      {
        type: 'multiple',
        question: '以下哪些属于 HTML5 提供的新能力？（多选）',
        options: ['localStorage 本地存储', 'Canvas 画布', 'Geolocation 地理位置', 'marquee 跑马灯'],
        answer: [0, 1, 2],
        explanation: 'localStorage、Canvas、Geolocation 都是 HTML5 新特性；marquee 是早期的非标准标签，已被淘汰。'
      },
      {
        type: 'single',
        question: '从 localStorage 中读取数据应该使用哪个方法？',
        options: ['setItem', 'getItem', 'removeItem', 'clear'],
        answer: 1,
        explanation: 'getItem 按键读取数据，setItem 存数据，removeItem 删某一项，clear 清空全部。'
      },
      {
        type: 'single',
        question: '使用 Canvas 绘图前，需要先调用哪个方法获取 2D 绘图上下文？',
        options: ['getContext', 'getCanvas', 'createContext', 'draw2d'],
        answer: 0,
        explanation: '调用 canvas 元素的 getContext 方法并传入 2d，才能拿到 2D 绘图上下文。'
      },
      {
        type: 'judge',
        question: 'localStorage 容量大约只有 5MB，适合保存小数据。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。localStorage 容量有限，适合用户名、主题设置等小数据。'
      },
      {
        type: 'judge',
        question: 'localStorage 适合用来保存用户密码等敏感信息。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。本地存储中的数据容易被读取，千万不要保存密码等敏感信息。'
      },
      {
        type: 'multiple',
        question: 'HTML5 拖放过程中会涉及哪些事件？（多选）',
        options: ['dragstart', 'dragover', 'drop', 'mouseover'],
        answer: [0, 1, 2],
        explanation: '被拖元素触发 dragstart，目标区域触发 dragover 和 drop；mouseover 是普通鼠标事件，与拖放无关。'
      },
      {
        type: 'multiple',
        question: '以下哪些数据适合用 localStorage 保存？（多选）',
        options: ['主题设置', '用户名', '登录密码', '一次性会话草稿'],
        answer: [0, 1],
        explanation: '主题、用户名等不敏感的小数据适合 localStorage；密码不能存本地；一次性草稿更适合 sessionStorage。'
      },
      {
        type: 'single',
        question: 'sessionStorage 中的数据在什么情况下会被清除？',
        options: ['关闭浏览器后仍在', '当前标签页会话结束时', '永远不会清除', '每小时自动清除'],
        answer: 1,
        explanation: 'sessionStorage 只在当前标签页会话中有效，关掉标签页数据就消失；localStorage 才长期保存。'
      },
      {
        type: 'judge',
        question: 'Web Worker 可以让耗时的计算在后台线程运行，避免卡住页面。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。Web Worker 把耗时任务放到后台线程，页面交互不受影响。'
      },
      {
        type: 'single',
        question: '想把一个对象存入 localStorage，正确的做法是？',
        options: ['直接 setItem 存对象', '先用 JSON.stringify 转成字符串再存', '先用 parseInt 转换', '对象根本无法保存'],
        answer: 1,
        explanation: 'localStorage 只存字符串，对象需先用 JSON.stringify 序列化，读取时再 JSON.parse 还原。'
      },
      {
        type: 'judge',
        question: '拖放时在目标区域的 dragover 事件中调用 preventDefault 后，drop 事件才能触发。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。浏览器默认不允许放下，必须取消默认行为，这是拖放最常见的坑。'
      },
      {
        type: 'multiple',
        question: '以下哪些是 localStorage 的常用方法？（多选）',
        options: ['setItem', 'getItem', 'removeItem', 'saveData'],
        answer: [0, 1, 2],
        explanation: 'setItem 存、getItem 取、removeItem 删，另有 clear 清空全部；saveData 不存在。'
      },
      {
        type: 'single',
        question: 'Canvas 中设置填充颜色使用的属性是？',
        options: ['fillStyle', 'color', 'bgColor', 'paint'],
        answer: 0,
        explanation: 'fillStyle 设置填充色，再用 fillRect 等方法绘制；strokeStyle 才是描边色。'
      },
      {
        type: 'judge',
        question: '使用 Geolocation 获取用户位置时，浏览器会弹窗请求用户授权。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。地理位置涉及隐私，必须经用户同意才能获取。'
      },
      {
        type: 'multiple',
        question: 'Canvas 画布适合用在以下哪些场景？（多选）',
        options: ['网页游戏', '数据图表', '图片编辑', '提升页面 SEO'],
        answer: [0, 1, 2],
        explanation: 'Canvas 常用于游戏、图表、图片编辑；它与 SEO 无关。'
      },
      {
        type: 'judge',
        question: '调用 canvas 的 getContext 方法时传入字符串 2d，即可获得 2D 绘图上下文。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。getContext 加参数 2d 是 Canvas 绘图的第一步。'
      },
      {
        type: 'multiple',
        question: '拖放中的 DataTransfer 对象可以用来做什么？（多选）',
        options: ['拖放时传递数据', '用 setData 存数据', '用 getData 取数据', '操作 localStorage'],
        answer: [0, 1, 2],
        explanation: 'DataTransfer 负责拖放过程中的数据传递：setData 存、getData 取；它与 localStorage 无关。'
      }
    ]
  },
  {
    id: 'html5-07',
    title: '头部元信息：meta、title、SEO 与 viewport',
    summary: '搞懂 head 里的元信息设置',
    minutes: 12,
    sections: [
      {
        heading: 'title 与 charset',
        text: 'head 里的内容不会直接显示在页面上，但对浏览器和搜索引擎非常重要。\ntitle 标签定义页面标题，会显示在浏览器标签页上，也是搜索结果中的大标题，每个页面都应该认真填写。meta charset="UTF-8" 声明字符编码，缺少它中文很可能变成乱码，必须放在 head 靠前的位置。',
        code: '<head>\n  <meta charset="UTF-8">\n  <title>前端学习网 - 零基础学 HTML</title>\n</head>',
        lang: 'html'
      },
      {
        heading: 'SEO 相关的 meta',
        text: 'SEO 是搜索引擎优化，目的是让百度、谷歌更容易收录和展示你的网页。最关键的两个 meta：description 是页面简介，会显示在搜索结果的摘要里，建议 80 字以内；keywords 是关键词，如今权重很低，简单写几个即可。\n写好 title 和 description，是性价比最高的 SEO 手段。',
        code: '<meta name="description" content="面向零基础的前端学习网站，提供 HTML、CSS、JavaScript 免费课程。">\n<meta name="keywords" content="前端,HTML,CSS,教程">',
        lang: 'html'
      },
      {
        heading: 'viewport 移动端适配',
        text: '手机屏幕比电脑小得多，如果不加 viewport 声明，手机浏览器会把页面按电脑宽度渲染再整体缩小，字小得看不清。\n加上一行 meta，告诉浏览器页面宽度等于设备宽度、初始缩放比例为 1，页面就能正常适配手机。这是做移动端网页的第一步，几乎每个现代网页都有这一行。',
        code: '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
        lang: 'html'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: '显示在浏览器标签页上的页面标题由哪个标签定义？',
        options: ['<h1>', '<title>', '<header>', '<meta name="title">'],
        answer: 1,
        explanation: 'title 标签定义页面标题，显示在标签页和搜索结果标题中；h1 是页面正文里的大标题。'
      },
      {
        type: 'single',
        question: '为了让网页在手机上按设备宽度正常显示，应该设置哪个 meta？',
        options: ['charset', 'keywords', 'description', 'viewport'],
        answer: 3,
        explanation: 'viewport 的 width=device-width 让页面宽度等于设备宽度，是移动端适配的基础。'
      },
      {
        type: 'judge',
        question: 'meta charset="UTF-8" 应该放在 head 中，用来避免中文乱码。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。声明 UTF-8 编码后浏览器才能正确解析中文，且应尽早声明。'
      },
      {
        type: 'multiple',
        question: '以下哪些设置对搜索引擎优化（SEO）有帮助？（多选）',
        options: ['写好 title 标题', '写 description 页面简介', '设置合适的 viewport', '堆砌大量 keywords'],
        answer: [0, 1],
        explanation: 'title 和 description 会直接影响搜索结果的展示；viewport 影响移动端体验；堆砌关键词反而可能被判定作弊。'
      },
      {
        type: 'single',
        question: '搜索结果摘要中显示的页面简介，通常由哪个 meta 提供？',
        options: ['keywords', 'description', 'viewport', 'charset'],
        answer: 1,
        explanation: 'meta name="description" 的内容会显示在搜索结果的摘要里，建议 80 字以内。'
      },
      {
        type: 'single',
        question: 'viewport 中 width=device-width 的含义是？',
        options: ['页面宽度等于设备宽度', '页面固定为 100 像素宽', '禁止用户缩放页面', '字体大小等于设备宽度'],
        answer: 0,
        explanation: 'width=device-width 让页面宽度等于设备宽度，是移动端正常显示的基础。'
      },
      {
        type: 'judge',
        question: 'head 里的内容会直接显示在页面正文中。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。head 放的是元信息，不会直接显示；用户看到的内容都在 body 里。'
      },
      {
        type: 'judge',
        question: 'keywords 如今权重很低，堆砌大量关键词没有好处。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。关键词权重已很低，堆砌甚至可能被搜索引擎判定作弊。'
      },
      {
        type: 'multiple',
        question: '以下哪些信息属于 head 中的元信息？（多选）',
        options: ['页面标题 title', '字符编码 charset', '页面简介 description', '正文段落 p'],
        answer: [0, 1, 2],
        explanation: 'title、charset、description 都是 head 里的元信息；p 是 body 中的正文内容。'
      },
      {
        type: 'multiple',
        question: '一个标准的移动端 viewport 声明通常包含哪些内容？（多选）',
        options: ['width=device-width', 'initial-scale=1.0', 'charset=UTF-8', 'name="viewport"'],
        answer: [0, 1, 3],
        explanation: 'viewport 声明写作 meta name="viewport"，内容含 width=device-width 和 initial-scale=1.0；charset 是另一个独立的 meta。'
      },
      {
        type: 'single',
        question: 'SEO 中建议 description 页面简介控制在多少字以内？',
        options: ['20 字', '80 字', '200 字', '500 字'],
        answer: 1,
        explanation: 'description 建议 80 字以内，过长会在搜索结果中被截断。'
      },
      {
        type: 'judge',
        question: '如果不加 viewport 声明，手机浏览器可能把页面按电脑宽度渲染再整体缩小。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。缺少 viewport 时页面会被缩小显示，文字小得看不清，因此移动端页面必须加这行声明。'
      },
      {
        type: 'single',
        question: 'viewport 声明中 initial-scale=1.0 的含义是？',
        options: ['初始缩放比例为 1', '页面宽度为 1 像素', '字体放大一倍', '禁止用户缩放'],
        answer: 0,
        explanation: 'initial-scale=1.0 表示页面初始不缩放，按原始大小显示。'
      },
      {
        type: 'judge',
        question: 'meta charset 声明应该放在 head 靠前的位置，让浏览器尽早知道编码。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。编码声明越靠前越好，避免浏览器猜错编码导致乱码。'
      },
      {
        type: 'multiple',
        question: '关于 title 标签，以下说法正确的有？（多选）',
        options: ['显示在浏览器标签页上', '是搜索结果中的大标题', '每个页面都应认真填写', '会直接显示在页面正文顶部'],
        answer: [0, 1, 2],
        explanation: 'title 显示在标签页和搜索结果中，值得认真写；正文顶部的大标题是 h1，不是 title。'
      },
      {
        type: 'single',
        question: 'meta 标签中承载具体内容（如简介文字）的属性是？',
        options: ['name', 'content', 'value', 'text'],
        answer: 1,
        explanation: 'meta 用 name 说明信息类型，用 content 写具体内容，如 name="description" content="简介"。'
      },
      {
        type: 'judge',
        question: 'description 写得再认真，也不会影响搜索结果摘要的展示。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。description 的内容会显示在搜索结果摘要里，直接影响用户是否点击。'
      },
      {
        type: 'multiple',
        question: '以下哪些 meta 写法是正确的？（多选）',
        options: ['<meta charset="UTF-8">', '<meta name="description" content="简介">', '<meta name="viewport" content="width=device-width">', '<meta src="viewport">'],
        answer: [0, 1, 2],
        explanation: 'charset、description、viewport 的写法都正确；meta 没有 src 属性。'
      },
      {
        type: 'judge',
        question: 'SEO 的目的是让搜索引擎更容易收录和展示网页。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。SEO 即搜索引擎优化，写好 title 和 description 是性价比最高的手段。'
      },
      {
        type: 'multiple',
        question: 'viewport 适配没做好，手机上浏览页面可能出现哪些问题？（多选）',
        options: ['页面被整体缩小', '文字小得看不清', '页面按电脑宽度渲染', '页面一定会报错'],
        answer: [0, 1, 2],
        explanation: '缺少 viewport 时手机按电脑宽度渲染再缩小，导致文字过小；但页面本身不会报错。'
      }
    ]
  },
  {
    id: 'html5-08',
    title: '表单进阶：验证属性与 datalist',
    summary: '不写 JS 也能做表单验证',
    minutes: 13,
    sections: [
      {
        heading: '常用验证属性',
        text: 'HTML5 的验证属性让浏览器自动检查表单：required 表示必填，空着就不让提交；type 为 number 时可配 min 和 max 限制数值范围；maxlength 限制最多输入多少字符。\n这些验证在提交时自动触发，不通过会弹出提示并阻止提交，不用写一行 JavaScript。',
        code: '<input type="text" name="name" required maxlength="20">\n<input type="number" name="age" min="18" max="60" required>',
        lang: 'html'
      },
      {
        heading: 'pattern 正则验证',
        text: 'pattern 属性可以用正则表达式自定义输入格式。比如手机号是 1 开头的 11 位数字，就写 pattern="1[0-9]{10}"。\n输入不符合规则时浏览器会阻止提交并提示，配合 title 属性还能自定义提示文字，告诉用户正确的格式是什么。',
        code: '<input type="text" name="phone" pattern="1[0-9]{10}" title="请输入 11 位手机号" required>',
        lang: 'html'
      },
      {
        heading: 'datalist 输入建议',
        text: 'datalist 能给输入框提供候选建议，既能输入任意内容，又能从列表中快速选择，相当于“可输入的下拉框”。\n用法：写一个 datalist，里面放若干 option，再给 input 加上 list 属性指向 datalist 的 id 即可。浏览器会自动实现输入过滤，非常适合搜索框、城市选择等场景。',
        code: '<input list="cities" name="city" placeholder="选择或输入城市">\n<datalist id="cities">\n  <option value="北京">\n  <option value="上海">\n  <option value="广州">\n</datalist>',
        lang: 'html'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: '想限制数字输入框只能填 1 到 100，应该使用哪两个属性？',
        options: ['min 和 max', 'low 和 high', 'start 和 end', 'from 和 to'],
        answer: 0,
        explanation: 'min 和 max 分别限定数值的下限和上限，超出范围提交时浏览器会提示。'
      },
      {
        type: 'single',
        question: 'input 的 list 属性应该指向什么，才能显示候选建议？',
        options: ['一个 select 的 id', '一个 datalist 的 id', '一个 ul 的 id', '一个数组变量名'],
        answer: 1,
        explanation: 'list 属性的值等于 datalist 的 id，浏览器就会把 datalist 里的 option 作为输入建议。'
      },
      {
        type: 'judge',
        question: 'pattern 属性可以用正则表达式自定义输入内容的格式。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。pattern 接收正则表达式，输入不匹配时浏览器会阻止提交并给出提示。'
      },
      {
        type: 'multiple',
        question: '以下哪些属于 HTML5 表单自带的验证手段？（多选）',
        options: ['required 必填', 'pattern 正则', 'maxlength 限制长度', 'confirm 弹窗确认'],
        answer: [0, 1, 2],
        explanation: 'required、pattern、maxlength 都是浏览器原生验证；confirm 是 JavaScript 的弹窗方法，不属于表单验证属性。'
      },
      {
        type: 'single',
        question: 'pattern="1[0-9]{10}" 这个正则适合用来校验什么？',
        options: ['邮箱地址', '手机号码', '出生日期', '颜色取值'],
        answer: 1,
        explanation: '该正则匹配 1 开头的 11 位数字，正是手机号的基本格式。'
      },
      {
        type: 'single',
        question: 'pattern 校验失败时，配合哪个属性可以自定义提示文字？',
        options: ['alt', 'title', 'placeholder', 'label'],
        answer: 1,
        explanation: 'title 属性的内容会作为校验失败时的提示文字，告诉用户正确格式。'
      },
      {
        type: 'judge',
        question: 'datalist 既允许从候选中选择，也允许用户自由输入。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。datalist 相当于“可输入的下拉框”，选择候选或自由输入都可以。'
      },
      {
        type: 'judge',
        question: 'HTML5 的表单验证必须借助 JavaScript 才能实现。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。required、min、max、pattern 等属性能让浏览器自动完成基础验证，无需写 JS。'
      },
      {
        type: 'multiple',
        question: '以下哪些属性可以限制用户在输入框中填写的内容？（多选）',
        options: ['maxlength', 'min', 'max', 'href'],
        answer: [0, 1, 2],
        explanation: 'maxlength 限制字符数，min 和 max 限制数值范围；href 是 a 标签的属性，与输入限制无关。'
      },
      {
        type: 'multiple',
        question: 'datalist 适合用在以下哪些场景？（多选）',
        options: ['搜索框输入建议', '城市快速选择', '完全禁止自由输入的场景', '提供常见选项供快速选取'],
        answer: [0, 1, 3],
        explanation: 'datalist 提供候选又允许自由输入，适合搜索建议、城市选择等；要完全限制输入应使用 select。'
      },
      {
        type: 'single',
        question: 'maxlength 属性的作用是？',
        options: ['限制最多输入的字符数', '限制数值的下限', '显示灰色提示文字', '标记字段为必填'],
        answer: 0,
        explanation: 'maxlength 限制最多输入多少字符；提示文字用 placeholder，必填用 required。'
      },
      {
        type: 'judge',
        question: '表单验证不通过时，浏览器会弹出提示并阻止表单提交。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。HTML5 的内置验证在提交时自动触发，验证失败会提示且不提交。'
      },
      {
        type: 'single',
        question: 'input 关联 datalist 后，浏览器会自动实现什么功能？',
        options: ['输入时过滤并显示候选建议', '自动提交表单', '对输入内容加密', '跳转到其他页面'],
        answer: 0,
        explanation: '浏览器会根据已输入内容自动过滤 datalist 中的 option，给出候选建议。'
      },
      {
        type: 'judge',
        question: '加了 required 的字段为空时，浏览器会阻止表单提交并给出提示。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。required 是最常用的验证属性，空值提交会被浏览器拦截。'
      },
      {
        type: 'multiple',
        question: '以下哪些写法可以限制数字输入框的取值？（多选）',
        options: ['min="18"', 'max="60"', 'type="number"', 'placeholder="18-60"'],
        answer: [0, 1, 2],
        explanation: 'min、max 限定范围，number 类型限制只能输数字；placeholder 只是提示文字，不做校验。'
      },
      {
        type: 'single',
        question: '想让用户只能从固定几项中选择、完全不能自由输入，应该用？',
        options: ['input + datalist', 'select + option', 'input type="text"', 'input type="range"'],
        answer: 1,
        explanation: 'select 只能从给定选项中选择；datalist 允许自由输入，不适合严格限制。'
      },
      {
        type: 'judge',
        question: 'datalist 的候选项由它内部的若干个 option 标签定义。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。datalist 里每个 option 就是一条候选建议。'
      },
      {
        type: 'multiple',
        question: '以下哪些验证属性可以同时写在同一个 input 上？（多选）',
        options: ['required', 'maxlength', 'pattern', 'href'],
        answer: [0, 1, 2],
        explanation: 'required、maxlength、pattern 都是 input 的验证相关属性，可组合使用；href 属于 a 标签。'
      },
      {
        type: 'judge',
        question: 'pattern="1[0-9]{10}" 中的 {10} 表示前面的字符要连续出现 10 次。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。[0-9]{10} 表示 10 个数字，加上开头的 1 正好是 11 位手机号。'
      },
      {
        type: 'multiple',
        question: '关于 HTML5 表单验证的提示，以下说法正确的有？（多选）',
        options: ['验证失败时会弹出提示', 'title 属性可自定义 pattern 的提示文字', '验证在提交时自动触发', '必须引入第三方库才有提示'],
        answer: [0, 1, 2],
        explanation: '浏览器原生支持验证提示，title 可自定义内容；无需任何第三方库。'
      }
    ]
  },
  {
    id: 'html5-09',
    title: 'Canvas 绘图入门',
    summary: '用 JS 在画布上绘制图形',
    minutes: 14,
    sections: [
      {
        heading: '认识 canvas 与绘图上下文',
        text: 'canvas 标签在页面上开辟一块画布，用 width 和 height 设置像素尺寸。它本身不会画任何东西，要靠 JavaScript 操作。\n第一步永远是：获取 canvas 元素，调用 getContext(\'2d\') 拿到 2D 绘图上下文（通常叫 ctx），之后所有绘图方法都通过 ctx 调用。坐标原点在画布左上角，x 向右增大，y 向下增大。',
        code: '<canvas id="c" width="300" height="150"></canvas>\n<script>\n  var ctx = document.getElementById(\'c\').getContext(\'2d\');\n</script>',
        lang: 'html'
      },
      {
        heading: '绘制矩形与路径',
        text: '画矩形最简单：fillRect 画实心矩形，strokeRect 画边框矩形，先用 fillStyle 或 strokeStyle 设置颜色。\n画折线等复杂图形要用路径：beginPath 开始一条新路径，moveTo 移动起点，lineTo 连线，最后 stroke 描边或 fill 填充。',
        code: 'ctx.fillStyle = \'orange\';\nctx.fillRect(10, 10, 100, 60);\nctx.beginPath();\nctx.moveTo(10, 100);\nctx.lineTo(150, 120);\nctx.stroke();',
        lang: 'js'
      },
      {
        heading: '画圆与文字',
        text: '画圆用 arc 方法，参数依次是圆心 x、圆心 y、半径、起始角度、结束角度，角度用弧度表示，画整圆就是 0 到 Math.PI * 2。\n画文字用 fillText，先通过 font 属性设置字号字体。Canvas 绘制的是像素，放大后会模糊，这是它和 SVG 最大的区别。',
        code: 'ctx.beginPath();\nctx.arc(100, 75, 40, 0, Math.PI * 2);\nctx.fill();\nctx.font = \'20px sans-serif\';\nctx.fillText(\'你好 Canvas\', 10, 30);',
        lang: 'js'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: 'Canvas 画布的坐标原点（0, 0）位于哪个位置？',
        options: ['画布中心', '左上角', '左下角', '右上角'],
        answer: 1,
        explanation: 'Canvas 坐标原点在左上角，x 轴向右、y 轴向下增大，与数学坐标系不同。'
      },
      {
        type: 'single',
        question: '用 arc 方法画一个完整的圆，结束角度应该设置为？',
        options: ['360', 'Math.PI', 'Math.PI * 2', '180'],
        answer: 2,
        explanation: 'arc 使用弧度制，一整圈是 2π，即 Math.PI * 2。'
      },
      {
        type: 'judge',
        question: 'Canvas 绘制的是像素图，放大后会变得模糊。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。Canvas 基于像素绘制，放大后会出现锯齿；需要无损缩放时应考虑 SVG。'
      },
      {
        type: 'multiple',
        question: '以下哪些是 Canvas 2D 上下文的常用方法或属性？（多选）',
        options: ['fillRect', 'fillStyle', 'beginPath', 'appendChild'],
        answer: [0, 1, 2],
        explanation: 'fillRect 画矩形、fillStyle 设填充色、beginPath 开始路径，都属于 2D 上下文；appendChild 是 DOM 节点操作方法。'
      },
      {
        type: 'single',
        question: '要绘制一个实心矩形，应该调用哪个方法？',
        options: ['strokeRect', 'fillRect', 'drawRect', 'rect'],
        answer: 1,
        explanation: 'fillRect 画实心矩形，strokeRect 只画边框，颜色分别由 fillStyle 和 strokeStyle 控制。'
      },
      {
        type: 'single',
        question: '在 Canvas 中画文字前，用哪个属性设置字号和字体？',
        options: ['textStyle', 'font', 'fillStyle', 'lineWidth'],
        answer: 1,
        explanation: 'font 属性设置字号字体，例如 20px sans-serif，然后用 fillText 绘制文字。'
      },
      {
        type: 'judge',
        question: '使用路径绘图时，beginPath 表示开始一条新路径。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。beginPath 开启新路径，避免与之前的路径互相影响。'
      },
      {
        type: 'judge',
        question: 'canvas 标签本身就能自动显示图形，不需要 JavaScript。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。canvas 只是一块空白画布，所有图形都要靠 JavaScript 调用上下文方法绘制。'
      },
      {
        type: 'multiple',
        question: '用路径画一条折线，正确的流程包含哪些步骤？（多选）',
        options: ['beginPath 开始路径', 'moveTo 和 lineTo 定义线条', 'stroke 或 fill 完成绘制', 'appendChild 把路径插入页面'],
        answer: [0, 1, 2],
        explanation: '路径绘制流程是 beginPath → moveTo/lineTo → stroke/fill；appendChild 是 DOM 操作，与路径无关。'
      },
      {
        type: 'multiple',
        question: '以下哪些属于 Canvas 2D 上下文的样式相关属性？（多选）',
        options: ['fillStyle', 'strokeStyle', 'color-stop', 'font'],
        answer: [0, 1, 3],
        explanation: 'fillStyle 填充色、strokeStyle 描边色、font 字体都是上下文属性；color-stop 不是 Canvas 的属性。'
      },
      {
        type: 'single',
        question: 'strokeRect 方法绘制出来的是？',
        options: ['实心矩形', '只有边框的矩形', '圆形', '一段文字'],
        answer: 1,
        explanation: 'strokeRect 只画矩形边框，fillRect 才是实心矩形，颜色分别由 strokeStyle 和 fillStyle 控制。'
      },
      {
        type: 'judge',
        question: 'fillText 方法用于在画布上绘制文字。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。先用 font 属性设置字号字体，再调用 fillText 绘制文字内容。'
      },
      {
        type: 'single',
        question: 'arc 方法的参数依次是什么？',
        options: ['圆心 x、圆心 y、半径、起始角度、结束角度', '半径、圆心 x、圆心 y、颜色', '颜色、圆心、半径、角度', '起始角度、结束角度、半径'],
        answer: 0,
        explanation: 'arc(圆心x, 圆心y, 半径, 起始角, 结束角)，角度使用弧度制。'
      },
      {
        type: 'judge',
        question: 'Canvas 中的角度使用弧度表示，而不是 0 到 360 的角度制。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。一整圈是 Math.PI * 2 弧度，等于 360 度。'
      },
      {
        type: 'multiple',
        question: '以下哪些与绘制矩形直接相关？（多选）',
        options: ['fillRect', 'strokeRect', 'fillStyle', 'fillText'],
        answer: [0, 1, 2],
        explanation: 'fillRect、strokeRect 画矩形，fillStyle 决定填充色；fillText 是画文字的方法。'
      },
      {
        type: 'single',
        question: 'ctx.fillRect(10, 10, 100, 60) 中 100 和 60 分别表示？',
        options: ['起点的坐标', '矩形的宽和高', '颜色值', '圆角的大小'],
        answer: 1,
        explanation: 'fillRect 的前两个参数是起点坐标，后两个参数是矩形的宽度和高度。'
      },
      {
        type: 'judge',
        question: '画新路径前不调用 beginPath，新旧路径可能会互相影响。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。beginPath 清空旧路径开始新路径，忘记调用是常见错误。'
      },
      {
        type: 'multiple',
        question: '以下关于 Canvas 的说法正确的有？（多选）',
        options: ['y 轴向下增大', '要用 JavaScript 绘图', '放大后会模糊', '画出的图形可以直接绑定点击事件'],
        answer: [0, 1, 2],
        explanation: 'Canvas 是像素画，y 轴向下、由 JS 绘制、放大会模糊；画布内容不是 DOM 元素，无法直接绑定事件。'
      },
      {
        type: 'judge',
        question: 'moveTo 只是移动路径的起点，本身不会画出线条。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。moveTo 抬起“画笔”移动位置，真正连线靠 lineTo 加 stroke。'
      },
      {
        type: 'multiple',
        question: "ctx.font = '20px sans-serif' 这条语句设定了哪些信息？（多选）",
        options: ['字号为 20px', '字体为 sans-serif', '文字的颜色', '文字的具体内容'],
        answer: [0, 1],
        explanation: 'font 属性设定字号和字体；颜色由 fillStyle 控制，内容由 fillText 传入。'
      }
    ]
  },
  {
    id: 'html5-10',
    title: 'SVG 矢量图基础',
    summary: '学会在页面中使用 SVG',
    minutes: 12,
    sections: [
      {
        heading: '什么是 SVG',
        text: 'SVG 是可缩放矢量图形，用 XML 标签描述图形，不管放大多少倍都清晰，非常适合图标、Logo 和插画。\nSVG 可以直接写在 HTML 里：svg 标签定义画布，viewBox 定义坐标系范围，里面放各种图形标签。修改 width、height 就能无损缩放，这是它和 Canvas 像素图最大的不同。',
        code: '<svg width="100" height="100" viewBox="0 0 100 100">\n  <circle cx="50" cy="50" r="40" fill="tomato">\n</svg>',
        lang: 'html'
      },
      {
        heading: '常用图形标签',
        text: 'SVG 内置了常用图形：circle 画圆（cx、cy 圆心，r 半径），rect 画矩形（x、y 左上角，width、height 尺寸），line 画直线（x1、y1 到 x2、y2），text 写文字。\n外观靠属性控制：fill 是填充色，stroke 是描边色，stroke-width 是描边粗细。这些属性也可以写进 CSS，方便统一管理。',
        code: '<svg width="120" height="120">\n  <rect x="10" y="10" width="60" height="40" fill="skyblue">\n  <line x1="0" y1="100" x2="120" y2="100" stroke="gray" stroke-width="2">\n</svg>',
        lang: 'html'
      },
      {
        heading: 'SVG 与 Canvas 怎么选',
        text: '两者都能在页面画图，但适用场景不同。SVG 是矢量图，每个图形都是 DOM 元素，可以绑定点击事件、用 CSS 改样式，放大不模糊，适合图标和交互图表。\nCanvas 是像素画，性能高，适合游戏、大量图形的动画、图片处理。简单记：少量图形要交互选 SVG，海量图形要性能选 Canvas。',
        code: '<svg width="60" height="60" style="cursor:pointer">\n  <circle cx="30" cy="30" r="25" fill="green"\n    onclick="alert(\'点到圆了\')">\n</svg>',
        lang: 'html'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: 'SVG 相比 Canvas 最突出的优势是？',
        options: ['渲染速度永远更快', '放大不模糊的矢量图', '代码一定更短', '只能在手机端使用'],
        answer: 1,
        explanation: 'SVG 是矢量图形，任意缩放都保持清晰；Canvas 是位图，放大会模糊。'
      },
      {
        type: 'single',
        question: 'SVG 中 circle 标签的哪个属性表示圆的半径？',
        options: ['width', 'radius', 'r', 'size'],
        answer: 2,
        explanation: 'circle 用 cx、cy 指定圆心，r 指定半径。'
      },
      {
        type: 'judge',
        question: 'SVG 中的图形是 DOM 元素，可以直接绑定点击事件。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。SVG 图形是文档中的元素，支持事件绑定和 CSS 样式，交互很方便。'
      },
      {
        type: 'multiple',
        question: '以下哪些是 SVG 的内置图形标签？（多选）',
        options: ['<circle>', '<rect>', '<line>', '<paint>'],
        answer: [0, 1, 2],
        explanation: 'circle 画圆、rect 画矩形、line 画直线，都是 SVG 内置标签；paint 不是 SVG 标签。'
      },
      {
        type: 'single',
        question: 'svg 标签中用来定义坐标系范围的属性是？',
        options: ['viewBox', 'view', 'box', 'coords'],
        answer: 0,
        explanation: 'viewBox 定义 SVG 的坐标系范围，配合 width、height 实现无损缩放。'
      },
      {
        type: 'single',
        question: 'SVG 中用来设置描边颜色的属性是？',
        options: ['fill', 'stroke', 'border', 'outline'],
        answer: 1,
        explanation: 'stroke 设置描边色，fill 设置填充色，stroke-width 设置描边粗细。'
      },
      {
        type: 'judge',
        question: 'SVG 图形无论放大多少倍都能保持清晰。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。SVG 是矢量图，用标签描述图形，任意缩放都不会失真。'
      },
      {
        type: 'judge',
        question: '制作包含大量图形的游戏动画时，Canvas 通常比 SVG 更合适。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。Canvas 基于像素、性能高，适合海量图形的动画；SVG 图形是 DOM 元素，数量大时性能较差。'
      },
      {
        type: 'multiple',
        question: '以下哪些属于 SVG 的外观控制属性？（多选）',
        options: ['fill', 'stroke', 'stroke-width', 'controls'],
        answer: [0, 1, 2],
        explanation: 'fill 填充色、stroke 描边色、stroke-width 描边粗细都控制 SVG 外观；controls 是音视频标签的属性。'
      },
      {
        type: 'multiple',
        question: '以下哪些场景适合使用 SVG？（多选）',
        options: ['图标和 Logo', '可交互的图表', '海量图形的游戏画面', '需要无损缩放的插画'],
        answer: [0, 1, 3],
        explanation: 'SVG 清晰、可交互、可用 CSS 控制，适合图标、图表和插画；海量图形求性能应选 Canvas。'
      },
      {
        type: 'single',
        question: 'SVG 的 rect 标签中，x 和 y 属性表示什么？',
        options: ['矩形右下角的坐标', '矩形左上角的坐标', '矩形的宽和高', '矩形的旋转角度'],
        answer: 1,
        explanation: 'rect 的 x、y 指定矩形左上角位置，width、height 指定尺寸。'
      },
      {
        type: 'judge',
        question: 'SVG 的 fill、stroke 等外观属性也可以写进 CSS 统一管理。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。这些外观属性既能写在标签上，也能用 CSS 控制，方便统一维护样式。'
      },
      {
        type: 'single',
        question: 'SVG 中 line 标签画直线需要哪些坐标属性？',
        options: ['x1、y1、x2、y2', 'cx、cy', 'x、y、width、height', 'r'],
        answer: 0,
        explanation: 'line 用 x1、y1 指定起点，x2、y2 指定终点；cx/cy 属于 circle，x/y/width/height 属于 rect。'
      },
      {
        type: 'judge',
        question: 'SVG 中 circle 标签的 cx 和 cy 属性用来指定圆心的位置。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。cx、cy 是圆心坐标，r 是半径。'
      },
      {
        type: 'multiple',
        question: '以下哪些是 SVG 相对于 Canvas 的特点？（多选）',
        options: ['每个图形都是 DOM 元素', '放大不模糊', '可用 CSS 改样式', '海量图形时性能更高'],
        answer: [0, 1, 2],
        explanation: 'SVG 图形是 DOM 元素、矢量清晰、可用 CSS 控制；海量图形时性能不如 Canvas。'
      },
      {
        type: 'single',
        question: '想在 SVG 画面中添加文字，应该使用哪个标签？',
        options: ['<p>', '<text>', '<font>', '<span>'],
        answer: 1,
        explanation: 'SVG 中用 text 标签写文字；p 和 span 是 HTML 标签，font 已被淘汰。'
      },
      {
        type: 'judge',
        question: 'stroke-width 属性用来设置 SVG 图形的描边粗细。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。stroke 定颜色，stroke-width 定粗细，二者配合使用。'
      },
      {
        type: 'multiple',
        question: '把 SVG 直接写在 HTML 中，以下说法正确的有？（多选）',
        options: ['用 svg 标签定义画布', 'viewBox 定义坐标系范围', '内部放各种图形标签', '必须引入外部插件才能显示'],
        answer: [0, 1, 2],
        explanation: '浏览器原生支持内联 SVG，无需插件；svg 定画布、viewBox 定坐标系、内部放图形。'
      },
      {
        type: 'judge',
        question: '修改 svg 标签的 width 和 height，可以让图形无损缩放。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。SVG 是矢量图，改尺寸不影响清晰度，这是它与 Canvas 最大的不同。'
      },
      {
        type: 'multiple',
        question: '关于 SVG 与 Canvas 的选型，以下说法正确的有？（多选）',
        options: ['少量图形要交互选 SVG', '海量图形要性能选 Canvas', 'SVG 适合图标和图表', 'Canvas 里的图形天然支持点击事件'],
        answer: [0, 1, 2],
        explanation: '简单记：少量要交互选 SVG，海量要性能选 Canvas；Canvas 内容是像素，不能直接绑定事件。'
      }
    ]
  },
  {
    id: 'html5-11',
    title: 'Web Storage 本地存储实战',
    summary: '掌握 localStorage 与 sessionStorage',
    minutes: 13,
    sections: [
      {
        heading: '两种存储的区别',
        text: 'Web Storage 提供两个对象：localStorage 长期保存，关闭浏览器再打开数据仍在；sessionStorage 只在当前标签页会话中有效，关掉标签页就消失。\n两者用法完全一样，容量大约 5MB，都只能存字符串。根据需求选择：主题设置、用户名用 localStorage；一次性表单草稿用 sessionStorage。',
        code: "localStorage.setItem('theme', 'dark');\nsessionStorage.setItem('draft', '未完成的留言');",
        lang: 'js'
      },
      {
        heading: '增删改查 API',
        text: '常用方法就四个：setItem(键, 值) 保存，getItem(键) 读取（不存在返回 null），removeItem(键) 删除某一项，clear() 清空全部。\n注意键和值都是字符串，传数字也会被自动转成字符串。读取时先判断是否 null，避免程序出错。',
        code: "localStorage.setItem('score', 100);\nvar score = localStorage.getItem('score');\nconsole.log(score); // '100' 字符串\nlocalStorage.removeItem('score');",
        lang: 'js'
      },
      {
        heading: '存储对象与实战技巧',
        text: '想存对象或数组，要用 JSON.stringify 转成字符串再保存；取出来后用 JSON.parse 还原。这是 Web Storage 最重要的实战技巧。\n典型应用是待办清单：每次增删任务后把整个数组存进去，页面打开时读取并渲染，刷新数据也不丢。提醒：本地存储不适合保存密码等敏感信息。',
        code: "var todos = ['学 HTML', '学 CSS'];\nlocalStorage.setItem('todos', JSON.stringify(todos));\nvar list = JSON.parse(localStorage.getItem('todos') || '[]');\nconsole.log(list[0]); // 学 HTML",
        lang: 'js'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: '关闭标签页后数据就会被清除的存储是？',
        options: ['localStorage', 'sessionStorage', 'cookie 一定清除', '两者都会清除'],
        answer: 1,
        explanation: 'sessionStorage 只在当前标签页会话中有效；localStorage 会长期保存。'
      },
      {
        type: 'single',
        question: '要把对象保存到 localStorage，正确的做法是？',
        options: ['直接 setItem 存对象', '先 JSON.stringify 再存', '先 toString 再存', '对象无法保存'],
        answer: 1,
        explanation: 'localStorage 只能存字符串，对象需用 JSON.stringify 序列化，取出时用 JSON.parse 还原。'
      },
      {
        type: 'judge',
        question: 'getItem 读取一个不存在的键时会返回 null。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。读取不存在的键返回 null，因此使用前应做判空处理。'
      },
      {
        type: 'multiple',
        question: '关于 localStorage，以下说法正确的有？（多选）',
        options: ['只能存字符串', '容量约 5MB', '关闭浏览器后数据仍在', '适合保存用户密码'],
        answer: [0, 1, 2],
        explanation: 'localStorage 只存字符串、容量约 5MB、长期有效；敏感信息如密码不应保存在本地存储中。'
      },
      {
        type: 'single',
        question: '删除 localStorage 中某一项数据应该用哪个方法？',
        options: ['deleteItem', 'removeItem', 'clear', 'unset'],
        answer: 1,
        explanation: 'removeItem 按键删除某一项；clear 会清空全部数据。'
      },
      {
        type: 'single',
        question: '用 setItem 存入数字 100 后，getItem 取到的值是什么？',
        options: ['数字 100', '字符串 100', 'null', 'undefined'],
        answer: 1,
        explanation: 'Web Storage 只存字符串，数字会被自动转成字符串，取出来的是字符串 100。'
      },
      {
        type: 'judge',
        question: 'localStorage 和 sessionStorage 的 API 用法完全一样。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。两者方法相同，区别只在数据的生命周期：一个长期保存，一个会话结束即清除。'
      },
      {
        type: 'judge',
        question: 'clear() 方法只会删除最后存入的那一条数据。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。clear() 会清空全部数据，删除单条数据要用 removeItem。'
      },
      {
        type: 'multiple',
        question: '以下哪些是 Web Storage 的常用方法？（多选）',
        options: ['setItem', 'getItem', 'removeItem', 'pushItem'],
        answer: [0, 1, 2],
        explanation: 'setItem 存、getItem 取、removeItem 删，另有 clear 清空全部；pushItem 不存在。'
      },
      {
        type: 'multiple',
        question: '用 localStorage 存取一个数组，正确的做法包括？（多选）',
        options: ['存之前用 JSON.stringify 转换', '取出后用 JSON.parse 还原', '读取结果可能为 null，需要判空', '直接存取就能得到数组'],
        answer: [0, 1, 2],
        explanation: '数组要先序列化再存，取出时解析还原，并对不存在的键做判空；直接存对象会被转成无用的字符串。'
      },
      {
        type: 'single',
        question: '一次性的表单草稿（关掉标签页就不需要了）更适合用哪种存储？',
        options: ['localStorage', 'sessionStorage', '两者一样合适', '都不适合'],
        answer: 1,
        explanation: 'sessionStorage 在会话结束时自动清除，适合一次性草稿；长期有效的数据才用 localStorage。'
      },
      {
        type: 'judge',
        question: 'Web Storage 的键和值都会被当作字符串处理，传入数字也会自动转换。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。Web Storage 只存字符串，存入数字时会被自动转成字符串。'
      },
      {
        type: 'single',
        question: '从 localStorage 取出对象字符串后，还原成对象应该用？',
        options: ['JSON.stringify', 'JSON.parse', 'String()', 'parseInt'],
        answer: 1,
        explanation: 'JSON.parse 把字符串解析还原成对象；JSON.stringify 是存入前做的序列化。'
      },
      {
        type: 'judge',
        question: '实现待办清单时，常见做法是每次增删任务后把整个数组重新存入 localStorage。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。数组整体序列化保存是最简单可靠的做法，页面打开时读取并渲染即可。'
      },
      {
        type: 'multiple',
        question: '以下哪些情况需要对 getItem 的结果做判空处理？（多选）',
        options: ['读取可能不存在的键', 'JSON.parse 之前提供默认值', '首次打开页面时', 'setItem 保存数据时'],
        answer: [0, 1, 2],
        explanation: '读取不存在或首次访问的键会得到 null，解析前要判空或给默认值；setItem 是写入，无需判空。'
      },
      {
        type: 'single',
        question: "JSON.parse(localStorage.getItem('todos') || '[]') 中 || '[]' 的作用是？",
        options: ['拼接字符串', '键不存在时提供默认空数组', '强制清空存储', '把结果转成字符串'],
        answer: 1,
        explanation: 'getItem 返回 null 时 || 会取后面的空数组字符串，保证 JSON.parse 不报错。'
      },
      {
        type: 'judge',
        question: '主题设置这类需要长期保存的偏好适合用 localStorage。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。主题、用户名等长期有效的偏好用 localStorage；一次性草稿才用 sessionStorage。'
      },
      {
        type: 'multiple',
        question: 'localStorage 和 sessionStorage 的共同点有哪些？（多选）',
        options: ['API 用法完全相同', '容量大约 5MB', '都只能存字符串', '数据生命周期相同'],
        answer: [0, 1, 2],
        explanation: '两者用法、容量、存储类型都一样；区别只在生命周期：一个长期保存，一个会话结束即清除。'
      },
      {
        type: 'judge',
        question: '在新标签页中打开同一页面，原来标签页 sessionStorage 里的数据会自动共享过去。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。sessionStorage 按标签页会话隔离，新标签页是新的会话，数据不共享。'
      },
      {
        type: 'multiple',
        question: '以下哪些属于 Web Storage 的实战技巧？（多选）',
        options: ['对象先序列化再保存', '读取时判空处理', '数据变化后重新保存整个数组', '把密码明文存进去'],
        answer: [0, 1, 2],
        explanation: '序列化、判空、整体重存都是常用技巧；密码等敏感信息绝不能存本地。'
      }
    ]
  },
  {
    id: 'html5-12',
    title: '拖放 API 与其他实用 API',
    summary: '实现拖放并了解地理定位',
    minutes: 14,
    sections: [
      {
        heading: '拖放的基本流程',
        text: '实现拖放分两头：被拖元素加 draggable="true"，并监听 dragstart 事件，在事件里用 dataTransfer.setData 存上要传递的数据；目标区域监听 dragover 和 drop 事件。\n关键一步：dragover 里必须调用 e.preventDefault()，否则浏览器默认不允许放下，drop 事件永远不会触发。这是初学者最常踩的坑。',
        code: 'box.ondragstart = function (e) {\n  e.dataTransfer.setData(\'text\', e.target.id);\n};\ntarget.ondragover = function (e) {\n  e.preventDefault();\n};',
        lang: 'js'
      },
      {
        heading: 'drop 事件与数据传递',
        text: '在目标区域的 drop 事件里，先 preventDefault 阻止默认行为，再用 dataTransfer.getData 取出 dragstart 时存入的数据，最后完成移动元素、更新状态等操作。\n利用这套机制，可以实现拖动排序、把文件拖进页面读取、看板式任务管理等丰富的交互效果。',
        code: 'target.ondrop = function (e) {\n  e.preventDefault();\n  var id = e.dataTransfer.getData(\'text\');\n  e.target.appendChild(document.getElementById(id));\n};',
        lang: 'js'
      },
      {
        heading: '地理定位与其他 API',
        text: 'navigator.geolocation 可以获取用户位置，调用 getCurrentPosition 后浏览器会弹窗请求授权，用户同意后回调函数里能拿到经纬度。出于隐私考虑，它只在 HTTPS 或 localhost 下可用。\nHTML5 还有很多实用 API：Notification 发系统通知、History 管理浏览历史、requestAnimationFrame 做流畅动画。用到时再查文档即可。',
        code: "navigator.geolocation.getCurrentPosition(function (pos) {\n  console.log('纬度：' + pos.coords.latitude);\n  console.log('经度：' + pos.coords.longitude);\n});",
        lang: 'js'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: '目标区域的 dragover 事件中必须调用什么方法，元素才能被放下？',
        options: ['e.stopPropagation()', 'e.preventDefault()', 'e.allowDrop()', 'e.returnValue()'],
        answer: 1,
        explanation: '浏览器默认禁止放下，必须在 dragover 中调用 preventDefault 取消默认行为，drop 事件才会触发。'
      },
      {
        type: 'single',
        question: '拖放过程中，dragstart 存入的数据在 drop 事件中用什么方法取出？',
        options: ['dataTransfer.getData', 'dataTransfer.readData', 'dataTransfer.fetch', 'localStorage.getItem'],
        answer: 0,
        explanation: 'dragstart 用 setData 存数据，drop 用 getData 按相同类型取出。'
      },
      {
        type: 'judge',
        question: '获取用户地理位置不需要用户授权，代码可以直接拿到。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。出于隐私保护，调用 getCurrentPosition 时浏览器会弹窗请求用户授权，用户拒绝则获取失败。'
      },
      {
        type: 'multiple',
        question: '以下哪些属于 HTML5 提供的实用 API？（多选）',
        options: ['Geolocation 地理定位', 'Drag and Drop 拖放', 'Notification 通知', 'ActiveX 控件'],
        answer: [0, 1, 2],
        explanation: '地理定位、拖放、通知都是 HTML5 标准 API；ActiveX 是旧版 IE 的专有技术，与 HTML5 无关。'
      },
      {
        type: 'single',
        question: '在 dragstart 事件中保存要传递的数据，应该调用哪个方法？',
        options: ['dataTransfer.setData', 'dataTransfer.save', 'localStorage.setItem', 'dataTransfer.push'],
        answer: 0,
        explanation: 'dragstart 里用 dataTransfer.setData 存数据，drop 里再用 getData 取出。'
      },
      {
        type: 'single',
        question: '获取用户地理位置应该使用哪个对象？',
        options: ['navigator.geolocation', 'window.location', 'document.geo', 'navigator.position'],
        answer: 0,
        explanation: 'navigator.geolocation 提供定位能力，调用 getCurrentPosition 获取经纬度。'
      },
      {
        type: 'judge',
        question: '在 drop 事件中通常也需要调用 preventDefault 阻止默认行为。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。drop 中先 preventDefault，再用 getData 取数据并完成后续操作。'
      },
      {
        type: 'judge',
        question: '地理定位 API 在任何 HTTP 页面中都能使用，没有任何限制。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。出于隐私考虑，地理定位只在 HTTPS 或 localhost 环境下可用，且需要用户授权。'
      },
      {
        type: 'multiple',
        question: '利用拖放 API 可以实现以下哪些效果？（多选）',
        options: ['拖动排序', '拖文件进页面读取', '看板式任务管理', '自动生成网页内容'],
        answer: [0, 1, 2],
        explanation: '拖放 API 常用于拖动排序、文件拖入上传、看板管理等交互；它不能自动生成内容。'
      },
      {
        type: 'multiple',
        question: '关于 dataTransfer，以下说法正确的有？（多选）',
        options: ['dragstart 里用 setData 存数据', 'drop 里用 getData 取数据', '存取时使用相同的类型标识', '它可以用来操作 localStorage'],
        answer: [0, 1, 2],
        explanation: 'dataTransfer 在拖放事件中传递数据，setData 存、getData 按相同类型取；它与 localStorage 无关。'
      },
      {
        type: 'single',
        question: '以下哪个 API 适合用来制作流畅的动画效果？',
        options: ['Notification', 'History', 'requestAnimationFrame', 'localStorage'],
        answer: 2,
        explanation: 'requestAnimationFrame 会在浏览器每次重绘前执行回调，是制作流畅动画的首选；Notification 发通知，History 管理历史记录。'
      },
      {
        type: 'judge',
        question: 'History API 可以用来管理浏览器的浏览历史。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。History 是 HTML5 的实用 API 之一，用于管理浏览历史。'
      },
      {
        type: 'single',
        question: "dragstart 中 setData('text', e.target.id) 的第一个参数 'text' 表示什么？",
        options: ['数据的类型标识', '元素的文本内容', '文件名', '没有实际意义'],
        answer: 0,
        explanation: '第一个参数是数据类型标识，drop 里 getData 要用相同的标识才能取出数据。'
      },
      {
        type: 'judge',
        question: '实现拖放需要被拖元素和目标区域两头配合：一边存数据，一边接数据。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。被拖元素在 dragstart 里 setData，目标区域在 drop 里 getData，缺一不可。'
      },
      {
        type: 'multiple',
        question: 'drop 事件的处理函数中通常包含哪些步骤？（多选）',
        options: ['preventDefault 阻止默认行为', 'getData 取出拖放数据', '移动元素或更新状态', '重新加载整个页面'],
        answer: [0, 1, 2],
        explanation: 'drop 中先阻止默认行为，再取数据并完成移动元素等操作；不需要重新加载页面。'
      },
      {
        type: 'single',
        question: 'drop 事件里想把被拖元素移动进目标区域，常用哪个 DOM 方法？',
        options: ['appendChild', 'getContext', 'setData', 'alert'],
        answer: 0,
        explanation: 'appendChild 把元素追加到目标容器中，实现视觉上的移动效果。'
      },
      {
        type: 'judge',
        question: 'getCurrentPosition 成功后，回调函数里能通过 pos.coords 拿到经纬度。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。pos.coords.latitude 是纬度，pos.coords.longitude 是经度。'
      },
      {
        type: 'multiple',
        question: '关于拖放的常见错误，以下说法正确的有？（多选）',
        options: ['忘记加 draggable 会导致元素拖不动', 'dragover 不 preventDefault 会导致 drop 不触发', 'setData 与 getData 的类型标识要一致', 'draggable 必须写在目标区域上'],
        answer: [0, 1, 2],
        explanation: 'draggable 加在被拖元素上；目标区域只需监听 dragover 和 drop 并正确处理。'
      },
      {
        type: 'judge',
        question: 'Notification API 可以用来向用户发送系统通知。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。Notification 是 HTML5 实用 API 之一，可以发送系统级通知。'
      },
      {
        type: 'multiple',
        question: '以下哪些属于 HTML5 的实用 API？（多选）',
        options: ['Geolocation 地理定位', 'Notification 系统通知', 'History 浏览历史', 'console.log 控制台输出'],
        answer: [0, 1, 2],
        explanation: '地理定位、通知、History 都是 HTML5 实用 API；console.log 只是调试方法，不属于 HTML5 新 API。'
      }
    ]
  }
];
