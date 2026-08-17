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
        type: 'judge',
        question: 'span 是块级元素，会自动独占一行。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。span 是行内元素，只占内容所需的宽度，不会自动换行；div 才是块级元素。'
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
        type: 'single',
        question: '想跳转到本页面 id 为 top 的位置，href 应该写成？',
        options: ['"top"', '"#top"', '"top.html"', '"/top"'],
        answer: 1,
        explanation: '锚点链接用 # 加 id 名，即 href="#top"，点击后页面会滚动到对应元素。'
      },
      {
        type: 'judge',
        question: 'strong 和 b 都能加粗文字，但 strong 带有“重要内容”的语义，更推荐使用。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。b 只改变外观，strong 还表示内容重要，对搜索引擎和屏幕阅读器更友好。'
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
        type: 'single',
        question: 'video 标签中用来设置未播放时封面图的属性是？',
        options: ['cover', 'thumb', 'poster', 'image'],
        answer: 2,
        explanation: 'poster 属性指定视频加载前显示的封面图片地址。'
      },
      {
        type: 'judge',
        question: '在多数浏览器中，视频设置 autoplay 后一定会带声音自动播放。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。为避免打扰用户，浏览器通常要求视频 muted 静音后才允许自动播放。'
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
        type: 'single',
        question: 'label 标签通过哪个属性与输入框的 id 关联？',
        options: ['for', 'to', 'name', 'link'],
        answer: 0,
        explanation: 'label 的 for 属性值等于输入框的 id，点击 label 即可聚焦对应输入框。'
      },
      {
        type: 'judge',
        question: 'input type="email" 会自动校验输入内容是否为合法的邮箱格式。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。提交表单时浏览器会自动检查 email 类型输入框的内容格式，不合格会提示。'
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
        type: 'single',
        question: '想让一个单元格横向占两列，应该使用哪个属性？',
        options: ['rowspan="2"', 'colspan="2"', 'span="2"', 'width="2"'],
        answer: 1,
        explanation: 'colspan 控制跨列（横向），rowspan 控制跨行（纵向）。'
      },
      {
        type: 'judge',
        question: '现代网页开发中，推荐大量使用 table 来做整个页面的布局。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。table 只应用于展示真正的表格数据，页面布局应使用 CSS（如 Flexbox、Grid）。'
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
        type: 'single',
        question: '使用 Canvas 绘制 2D 图形前，必须先调用哪个方法？',
        options: ['getContext("2d")', 'createCanvas()', 'beginDraw()', 'paint("2d")'],
        answer: 0,
        explanation: 'canvas.getContext("2d") 返回 2D 绘图上下文，所有绘图方法都挂在它上面。'
      },
      {
        type: 'judge',
        question: 'localStorage 中的数据在关闭浏览器后会被自动清除。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。localStorage 的数据会长期保存，除非代码或用户手动清除；sessionStorage 才是会话结束就清除。'
      }
    ]
  }
];
