export default [
  {
    id: 'css3-01',
    title: 'CSS 引入方式与选择器',
    summary: '学会引入 CSS 并精准选中元素',
    minutes: 12,
    sections: [
      {
        heading: 'CSS 的三种引入方式',
        text: 'CSS 有三种引入方式：行内样式、内部样式表和外部样式表。\n行内样式直接写在标签的 style 属性里，优先级最高，但会让 HTML 变得杂乱，只适合做临时调试。\n内部样式表写在 HTML 文件的 style 标签中，适合单个页面的简单样式。\n外部样式表是最推荐的做法：把样式写进独立的 .css 文件，再用 link 标签引入。这样样式和结构分离，多个页面还能共用同一份样式，维护起来非常方便。',
        code: '<!-- 外部样式表（推荐） -->\n<link rel="stylesheet" href="style.css">\n\n<!-- 内部样式表 -->\n<style>\n  p { color: red; }\n</style>\n\n<!-- 行内样式 -->\n<p style="color: blue;">文字</p>',
        lang: 'html'
      },
      {
        heading: '常用选择器',
        text: '选择器用来告诉浏览器：这条样式要作用在哪些元素上。\n最基础的有四种：标签选择器（如 p 选中所有段落）、类选择器（如 .box，可复用在多个元素上）、id 选择器（如 #header，页面中应唯一）、通配符选择器（* 选中所有元素）。\n日常开发中最常用的是类选择器，因为它既灵活又能复用。id 选择器优先级很高，但不建议滥用，否则样式很难被覆盖。',
        code: 'p { font-size: 16px; }   /* 标签选择器 */\n.box { padding: 10px; }  /* 类选择器 */\n#header { height: 60px; } /* id 选择器 */\n* { margin: 0; }         /* 通配符选择器 */',
        lang: 'css'
      },
      {
        heading: '组合选择器与优先级',
        text: '选择器还能组合使用：后代选择器用空格（如 .box p，选中 box 里的所有 p），子选择器用大于号（如 .box > p，只选中直接子元素）。\n当多条规则作用于同一个元素时，由优先级决定谁生效：行内样式 > id 选择器 > 类选择器 > 标签选择器。优先级相同时，后写的规则覆盖先写的。\n记住一个原则：尽量用低优先级的类选择器写样式，页面会更好维护。',
        code: '.box p { color: green; }   /* 后代：box 内所有 p */\n.box > p { color: red; }   /* 子代：box 的直接子 p */\np.title { font-weight: bold; } /* 既是 p 又有 title 类 */',
        lang: 'css'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: '在大型项目中，最推荐的 CSS 引入方式是？',
        options: ['行内样式', '内部样式表', '外部样式表', '三种完全一样'],
        answer: 2,
        explanation: '外部样式表实现了结构与样式分离，可复用、易维护，是项目开发的标准做法。'
      },
      {
        type: 'single',
        question: '下列选择器中优先级最高的是？',
        options: ['标签选择器 p', '类选择器 .box', 'id 选择器 #box', '通配符选择器 *'],
        answer: 2,
        explanation: '优先级排序为：行内样式 > id > 类 > 标签 > 通配符，所以 #box 最高。'
      },
      {
        type: 'judge',
        question: '类选择器 .box 在一个页面中只能使用一次。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '类选择器可以复用在任意多个元素上，这正是它的优势；id 才应该唯一。'
      },
      {
        type: 'judge',
        question: '后代选择器 .box p 会选中 .box 内部所有层级的 p 元素。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '空格表示后代选择器，无论嵌套多深都会被选中；只选直接子元素要用 > 。'
      },
      {
        type: 'multiple',
        question: '以下哪些属于 CSS 的引入方式？（多选）',
        options: ['行内样式', '内部样式表', '外部样式表', '脚本样式表'],
        answer: [0, 1, 2],
        explanation: 'CSS 有行内样式、内部样式表和外部样式表三种引入方式，不存在“脚本样式表”。'
      }
    ]
  },
  {
    id: 'css3-02',
    title: '盒模型',
    summary: '理解 content、padding、border、margin',
    minutes: 12,
    sections: [
      {
        heading: '什么是盒模型',
        text: '在 CSS 中，每个元素都可以看作一个矩形的盒子。这个盒子从内到外由四部分组成：\ncontent（内容）：元素实际显示的文字、图片等；\npadding（内边距）：内容与边框之间的距离，transparent 背景会延伸到 padding；\nborder（边框）：包裹内容和内边距的边线；\nmargin（外边距）：盒子与其他盒子之间的距离，是透明的。\n设置 width 和 height 时，默认情况下它们只指 content 的大小，这一点很容易让初学者算错布局。',
        code: '.box {\n  width: 200px;    /* 内容宽 */\n  padding: 20px;   /* 内边距 */\n  border: 5px solid #333; /* 边框 */\n  margin: 30px;    /* 外边距 */\n}',
        lang: 'css'
      },
      {
        heading: 'box-sizing：两种盒模型',
        text: 'CSS 有两种盒模型：标准盒模型（content-box，默认）和怪异盒模型（border-box）。\n标准盒模型下，元素实际占位宽度 = width + padding + border，算上 padding 后盒子会变大，经常把布局撑乱。\nborder-box 下，width 就是盒子的总宽度，padding 和 border 会向内挤压内容，布局更直观、更好控制。\n实际开发中通常全局设置 border-box，这是业界通行的最佳实践。',
        code: '*, *::before, *::after {\n  box-sizing: border-box;\n}\n\n.card {\n  width: 300px;\n  padding: 20px;\n  border: 1px solid #ddd;\n  /* 盒子总宽仍是 300px */\n}',
        lang: 'css'
      },
      {
        heading: 'margin 的合并与居中技巧',
        text: '上下相邻两个块级元素的 margin 会发生“合并”：取两者中较大的那个，而不是相加。比如上面的盒子 margin-bottom 是 20px，下面的 margin-top 是 30px，实际间距是 30px。\n另外，块级元素水平居中的经典写法是 margin: 0 auto，前提是该元素设置了宽度。\n垂直方向没有这么简单的居中方法，通常用 Flex 或 Grid 解决，后面的课程会讲到。',
        code: '.box {\n  width: 400px;\n  margin: 0 auto; /* 水平居中 */\n}\n\n.a { margin-bottom: 20px; }\n.b { margin-top: 30px; }\n/* .a 与 .b 的实际间距是 30px */',
        lang: 'css'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: '标准盒模型下，width: 200px、padding: 20px、border: 5px 的盒子，实际占位宽度是多少？',
        options: ['200px', '220px', '240px', '250px'],
        answer: 3,
        explanation: '200 + 20×2 + 5×2 = 250px，padding 和 border 左右各算一次。'
      },
      {
        type: 'single',
        question: '想让 width 直接等于盒子的总宽度（包含 padding 和 border），应该设置？',
        options: ['box-sizing: content-box', 'box-sizing: border-box', 'box-sizing: padding-box', 'box-sizing: none'],
        answer: 1,
        explanation: 'border-box 会让 padding 和 border 向内计算，width 即为总宽度。'
      },
      {
        type: 'judge',
        question: '上下相邻元素的外边距会简单相加，不会合并。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '垂直方向的 margin 会发生合并，取两者中较大的值。'
      },
      {
        type: 'judge',
        question: '给设置了宽度的块级元素写 margin: 0 auto 可以让它水平居中。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'auto 会把剩余水平空间平分到左右两边，从而实现水平居中。'
      },
      {
        type: 'multiple',
        question: '以下哪些属于盒模型的组成部分？（多选）',
        options: ['content（内容）', 'padding（内边距）', 'border（边框）', 'float（浮动）'],
        answer: [0, 1, 2],
        explanation: '盒模型从内到外由 content、padding、border、margin 四部分组成，float 不属于盒模型。'
      }
    ]
  },
  {
    id: 'css3-03',
    title: '常用文本与背景样式',
    summary: '掌握字体、文本与背景的美化',
    minutes: 10,
    sections: [
      {
        heading: '字体与文本样式',
        text: '文字是网页的主体，常用属性有：\nfont-size 设置字号，常用 px 单位；\nfont-weight 控制粗细，bold 表示加粗；\ncolor 设置文字颜色，可以用颜色名、十六进制或 rgb；\nline-height 设置行高，让多行文字更透气；\ntext-align 控制水平对齐，text-decoration 常用来去掉链接下划线。\n这些属性大多会被子元素继承，所以可以写在 body 上统一全站字体风格。',
        code: 'body {\n  font-size: 16px;\n  line-height: 1.8;\n  color: #333;\n}\na { text-decoration: none; }\nh1 { text-align: center; font-weight: bold; }',
        lang: 'css'
      },
      {
        heading: '背景颜色与背景图片',
        text: 'background 是网页美化的大户。background-color 设置背景色，background-image 用 url() 引入背景图。\n配合背景图的常用属性：background-repeat: no-repeat 让图片不平铺；background-size: cover 让图片铺满容器并保持比例（多余部分裁掉）；background-position: center 让图片居中显示。\n这些属性可以合写成一条 background 简写，但初学者建议先分开写，更容易读懂和调试。',
        code: '.banner {\n  height: 300px;\n  background-color: #f5f5f5;\n  background-image: url("bg.jpg");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n}',
        lang: 'css'
      },
      {
        heading: '圆角与阴影',
        text: 'CSS3 带来了两个美化利器：border-radius 和 box-shadow。\nborder-radius 设置圆角，值越大角越圆，设置为 50% 可以把正方形变成圆形，常用来做头像。\nbox-shadow 给盒子加投影，依次是：水平偏移、垂直偏移、模糊半径和颜色。淡淡的阴影能让卡片有悬浮的层次感，但不要用太重，否则会显得廉价。',
        code: '.avatar {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%; /* 圆形头像 */\n}\n.card {\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}',
        lang: 'css'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: '想要背景图片铺满容器且不变形（允许裁剪），应该使用？',
        options: ['background-size: contain', 'background-size: cover', 'background-size: 100%', 'background-repeat: repeat'],
        answer: 1,
        explanation: 'cover 会缩放图片直到完全覆盖容器，保持比例，超出的部分被裁剪。'
      },
      {
        type: 'single',
        question: '把一个正方形元素变成圆形，border-radius 应该设置为？',
        options: ['4px', '10px', '50%', '100px 一定不行'],
        answer: 2,
        explanation: 'border-radius: 50% 会让四角弧度等于宽高的一半，正方形就变成正圆。'
      },
      {
        type: 'judge',
        question: 'color、font-size 等文字属性可以写在 body 上，被子元素继承。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '大部分文字相关属性具有继承性，写在 body 上能统一全站的文字风格。'
      },
      {
        type: 'judge',
        question: 'text-decoration: none 常用于去掉超链接默认的下划线。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '这是重置链接样式的最常见写法，之后通常配合 hover 再添加交互效果。'
      },
      {
        type: 'multiple',
        question: '以下哪些属于常用的文本样式属性？（多选）',
        options: ['font-size', 'line-height', 'text-align', 'grid-template-columns'],
        answer: [0, 1, 2],
        explanation: 'font-size、line-height、text-align 都是文本样式属性；grid-template-columns 是 Grid 布局属性。'
      }
    ]
  },
  {
    id: 'css3-04',
    title: 'Flex 弹性布局',
    summary: '一维布局神器，轻松对齐与分配空间',
    minutes: 15,
    sections: [
      {
        heading: 'Flex 的基本概念',
        text: 'Flex（弹性布局）是用来排列一行或一列元素的现代布局方式。\n给父容器设置 display: flex 后，它就成为弹性容器，里面的直接子元素自动成为弹性项目，默认沿水平方向（主轴）排成一行。\nFlex 有两个方向：主轴（默认水平）和交叉轴（默认垂直）。理解“主轴”和“交叉轴”是学好 Flex 的关键，因为后续的对齐属性都围绕这两个方向展开。',
        code: '.container {\n  display: flex; /* 子元素默认排成一行 */\n}',
        lang: 'css'
      },
      {
        heading: '主轴与交叉轴对齐',
        text: 'justify-content 控制项目在主轴上的分布：flex-start 靠起点、center 居中、flex-end 靠终点、space-between 两端对齐（项目之间间距相等）、space-around 每个项目两侧间距相等。\nalign-items 控制项目在交叉轴上的对齐：stretch（默认拉伸）、flex-start、center、flex-end。\n最经典的居中写法就是这两个属性都设为 center，水平垂直居中一步到位。',
        code: '.container {\n  display: flex;\n  justify-content: center; /* 主轴居中 */\n  align-items: center;     /* 交叉轴居中 */\n  height: 300px;\n}',
        lang: 'css'
      },
      {
        heading: 'flex 属性与换行',
        text: 'flex 属性写在子元素上，用来分配主轴上的剩余空间。flex: 1 表示平均瓜分剩余宽度，多个项目都写 flex: 1 就实现了等分布局。\nflex-direction: column 可以把主轴换成垂直方向，让项目排成一列。\n默认情况下项目会挤在一行，设置 flex-wrap: wrap 后空间不足时自动换行，常配合 justify-content 做卡片列表。',
        code: '.row { display: flex; }\n.row .item { flex: 1; } /* 三个 item 等分宽度 */\n\n.list {\n  display: flex;\n  flex-wrap: wrap; /* 放不下就换行 */\n  justify-content: space-between;\n}',
        lang: 'css'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: '想让 Flex 容器内的子元素水平垂直都居中，应该设置？',
        options: [
          'text-align: center',
          'justify-content: center; align-items: center',
          'margin: auto 0',
          'float: center'
        ],
        answer: 1,
        explanation: 'justify-content 管主轴，align-items 管交叉轴，两者都取 center 即实现水平垂直居中。'
      },
      {
        type: 'single',
        question: '默认情况下，Flex 容器的主轴方向是？',
        options: ['垂直方向', '水平方向', '由内容决定', '随机方向'],
        answer: 1,
        explanation: 'flex-direction 默认为 row，主轴是水平方向，子元素排成一行。'
      },
      {
        type: 'judge',
        question: '给三个子元素都设置 flex: 1，它们会等分容器的剩余空间。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'flex: 1 表示按相同比例瓜分剩余空间，比例相同即为等分。'
      },
      {
        type: 'judge',
        question: 'Flex 容器默认会自动换行，不需要额外设置。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '默认 flex-wrap 是 nowrap，项目会挤压在一行；需要换行要显式设置 wrap。'
      },
      {
        type: 'multiple',
        question: '以下哪些是 justify-content 的合法取值？（多选）',
        options: ['flex-start', 'center', 'space-between', 'wrap'],
        answer: [0, 1, 2],
        explanation: 'flex-start、center、space-between 都是 justify-content 的取值；wrap 是 flex-wrap 的取值。'
      }
    ]
  },
  {
    id: 'css3-05',
    title: 'Grid 网格布局',
    summary: '二维布局利器，搞定复杂页面结构',
    minutes: 15,
    sections: [
      {
        heading: 'Grid 的基本用法',
        text: 'Flex 擅长一维布局（一行或一列），而 Grid 擅长二维布局（同时控制行和列），适合做整体页面结构。\n给容器设置 display: grid，再用 grid-template-columns 定义列：grid-template-columns: 200px 1fr 1fr 表示三列，第一列固定 200px，后两列平分剩余空间。fr 是 Grid 特有的单位，表示“剩余空间的一份”。\ngrid-gap（或 gap）可以统一设置行列之间的间距，再也不用手动算 margin 了。',
        code: '.container {\n  display: grid;\n  grid-template-columns: 200px 1fr 1fr;\n  gap: 16px; /* 行列间距 */\n}',
        lang: 'css'
      },
      {
        heading: 'repeat 与自适应列数',
        text: '列数很多时，可以用 repeat() 简写：repeat(3, 1fr) 等同于 1fr 1fr 1fr。\n更强大的写法是配合 auto-fill 和 minmax：grid-template-columns: repeat(auto-fill, minmax(200px, 1fr))，意思是每列最小 200px、最大平分剩余空间，浏览器会自动算出能放几列。\n这一行代码就能实现“屏幕宽就多放几列、窄就少放几列”的自适应卡片列表，非常实用。',
        code: '.cards {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 20px;\n}',
        lang: 'css'
      },
      {
        heading: '项目的跨行跨列',
        text: 'Grid 中的项目默认占一个格子，但可以用 grid-column 和 grid-row 让它跨越多个格子。\n比如 grid-column: 1 / 3 表示从第 1 条网格线跨到第 3 条，也就是占两列；grid-column: 1 / -1 表示横跨整行，-1 代表最后一条线。\n利用这个特性，可以轻松做出“左边大图、右边小图”之类的杂志式布局，这在 Flex 里要绕不少弯路。',
        code: '.grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 10px;\n}\n.feature { grid-column: span 2; } /* 占两列 */\n.banner  { grid-column: 1 / -1; } /* 横跨整行 */',
        lang: 'css'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: 'Grid 中 fr 单位的含义是？',
        options: ['固定像素', '剩余空间的一份', '字体大小', '视口宽度'],
        answer: 1,
        explanation: 'fr（fraction）表示按比例分配剩余空间，如 1fr 2fr 表示 1:2 分。'
      },
      {
        type: 'single',
        question: '想实现“每列最小 200px，列数随屏幕宽度自动变化”，应该写？',
        options: [
          'grid-template-columns: repeat(3, 1fr)',
          'grid-template-columns: repeat(auto-fill, minmax(200px, 1fr))',
          'display: flex; flex-wrap: wrap',
          'grid-template-columns: 200px'
        ],
        answer: 1,
        explanation: 'auto-fill + minmax 让浏览器自动计算列数，是自适应网格的标准写法。'
      },
      {
        type: 'judge',
        question: 'Grid 是一维布局，只能控制行或只能控制列。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: 'Grid 是二维布局，可以同时控制行和列；一维布局是 Flex 的主场。'
      },
      {
        type: 'judge',
        question: 'gap 属性可以同时设置 Grid 项目之间的行间距和列间距。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'gap 是 row-gap 和 column-gap 的简写，一个值时行列间距相同。'
      },
      {
        type: 'multiple',
        question: '以下哪些是定义 Grid 列的合法写法？（多选）',
        options: ['grid-template-columns: 200px 1fr 1fr', 'grid-template-columns: repeat(3, 1fr)', 'grid-template-columns: repeat(auto-fill, minmax(200px, 1fr))', 'grid-template-columns: flex 1'],
        answer: [0, 1, 2],
        explanation: '前三种都是本课讲过的列定义写法；flex 1 不是 grid-template-columns 的合法值。'
      }
    ]
  },
  {
    id: 'css3-06',
    title: '动画、过渡与媒体查询',
    summary: '让页面动起来并适配各种屏幕',
    minutes: 15,
    sections: [
      {
        heading: 'transition 过渡',
        text: 'transition 让属性变化不再生硬，而是在一段时间内平滑过渡。\n写法是 transition: 属性名 时长 速度曲线，比如 transition: all 0.3s ease 表示所有属性变化都用 0.3 秒平滑完成。\n注意 transition 要写在元素的初始状态上，而不是 hover 状态上，否则移出时不会有过渡效果。它常配合 :hover 做按钮变色、卡片上浮等微交互。',
        code: '.btn {\n  background: #409eff;\n  transition: all 0.3s ease;\n}\n.btn:hover {\n  background: #66b1ff;\n  transform: translateY(-2px); /* 上移 2px */\n}',
        lang: 'css'
      },
      {
        heading: 'transform 变换与 animation 动画',
        text: 'transform 可以对元素做位移（translate）、缩放（scale）、旋转（rotate），而且不会引起页面重新排版，性能好，做动画首选。\nanimation 用于更复杂的多帧动画：先用 @keyframes 定义关键帧（from/to 或百分比），再用 animation 引用，还能设置 infinite 无限循环。\n简单状态切换用 transition，复杂循环动画用 animation。',
        code: '@keyframes spin {\n  from { transform: rotate(0deg); }\n  to   { transform: rotate(360deg); }\n}\n.loading {\n  animation: spin 1s linear infinite;\n}',
        lang: 'css'
      },
      {
        heading: '媒体查询与响应式',
        text: '响应式布局让同一个页面在手机、平板、电脑上都有良好的显示效果，核心技术就是媒体查询 @media。\n写法是 @media (max-width: 768px) { ... }，表示屏幕宽度不超过 768px 时，括号里的样式生效。\n推荐“移动优先”：先写小屏幕样式，再用 min-width 的媒体查询逐级增强大屏幕效果。配合 Flex 的 wrap 和 Grid 的 auto-fill，很多布局甚至不写媒体查询也能自适应。',
        code: '.container { width: 90%; margin: 0 auto; }\n\n@media (max-width: 768px) {\n  .container { width: 100%; }\n  .sidebar { display: none; } /* 手机上隐藏侧边栏 */\n}',
        lang: 'css'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: '关于 transition 的写法，正确的是？',
        options: [
          'transition: 0.3s color;',
          'transition: color 0.3s ease;',
          'transition: ease color 0.3s 一定报错',
          'transition 只能写在 :hover 里'
        ],
        answer: 1,
        explanation: '标准顺序是“属性名 时长 速度曲线”，且应写在初始状态上，保证进入和离开都有过渡。'
      },
      {
        type: 'single',
        question: '@media (max-width: 768px) 的含义是？',
        options: [
          '屏幕宽度大于 768px 时生效',
          '屏幕宽度等于 768px 才生效',
          '屏幕宽度不超过 768px 时生效',
          '只在 768px 的手机上生效'
        ],
        answer: 2,
        explanation: 'max-width 表示“最大不超过”，即宽度 ≤ 768px 时内部样式生效。'
      },
      {
        type: 'judge',
        question: 'transform 的位移、缩放不会引起页面重新排版，适合做动画。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'transform 在合成阶段处理，不触发重排重绘，动画性能远好于改 width、margin 等属性。'
      },
      {
        type: 'judge',
        question: 'animation 必须配合 @keyframes 定义关键帧才能使用。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'animation 引用的是 @keyframes 定义的动画名称，没有关键帧就没有动画内容。'
      },
      {
        type: 'multiple',
        question: '以下哪些关于过渡与动画的说法是正确的？（多选）',
        options: ['transition 要写在元素的初始状态上', 'transform 做动画性能好，不会引起重新排版', 'animation 设置 infinite 可无限循环', 'transition 只能写在 :hover 状态上'],
        answer: [0, 1, 2],
        explanation: 'transition 写在初始状态上才能保证移入移出都有过渡；transform 不触发重排；infinite 表示无限循环。'
      }
    ]
  }
]
