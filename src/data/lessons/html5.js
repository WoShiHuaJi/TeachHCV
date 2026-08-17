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
      }
    ]
  }
];
