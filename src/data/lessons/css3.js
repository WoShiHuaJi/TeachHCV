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
        type: 'multiple',
        question: '以下哪些属于 CSS 的引入方式？（多选）',
        options: ['行内样式', '内部样式表', '外部样式表', '脚本样式表'],
        answer: [0, 1, 2],
        explanation: 'CSS 有行内样式、内部样式表和外部样式表三种引入方式，不存在“脚本样式表”。'
      },
      {
        type: 'single',
        question: '行内样式是直接写在哪里的？',
        options: ['标签的 style 属性里', '独立的 .css 文件里', 'style 标签里', 'link 标签里'],
        answer: 0,
        explanation: '行内样式写在标签的 style 属性中，优先级最高，但只适合做临时调试。'
      },
      {
        type: 'single',
        question: '选择器 .box > p 的含义是？',
        options: ['选中 box 内所有层级的 p', '只选中 box 的直接子元素 p', '选中 box 后面的兄弟 p', '选中所有带 box 类的 p'],
        answer: 1,
        explanation: '大于号是子选择器，只匹配直接子元素；空格后代选择器才会匹配所有层级。'
      },
      {
        type: 'judge',
        question: '两条规则优先级相同时，后书写的规则会覆盖先书写的。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '层叠规则之一：优先级相同时按源码顺序，后写的生效。'
      },
      {
        type: 'judge',
        question: '通配符选择器 * 只能选中页面中的第一个元素。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '通配符选择器选中所有元素，常用于全局重置 margin 和 padding。'
      },
      {
        type: 'multiple',
        question: '以下哪些属于最基础的四种选择器？（多选）',
        options: ['标签选择器', '类选择器', 'id 选择器', '动画选择器'],
        answer: [0, 1, 2],
        explanation: '基础选择器有标签、类、id 和通配符四种，不存在“动画选择器”。'
      },
      {
        type: 'multiple',
        question: '关于后代选择器和子选择器，以下说法正确的有？（多选）',
        options: ['空格表示后代关系', '.box p 选中 box 内所有层级的 p', '.box > p 只选中直接子元素 p', '大于号表示兄弟关系'],
        answer: [0, 1, 2],
        explanation: '空格是后代、大于号是子代；兄弟关系另有 + 和 ~ 选择器，本课未涉及。'
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
        type: 'multiple',
        question: '以下哪些属于盒模型的组成部分？（多选）',
        options: ['content（内容）', 'padding（内边距）', 'border（边框）', 'float（浮动）'],
        answer: [0, 1, 2],
        explanation: '盒模型从内到外由 content、padding、border、margin 四部分组成，float 不属于盒模型。'
      },
      {
        type: 'single',
        question: '块级元素水平居中的经典写法是？',
        options: ['text-align: center', '设置宽度后 margin: 0 auto', 'float: left', 'padding: 0 auto'],
        answer: 1,
        explanation: '定宽块级元素用 margin: 0 auto 让左右外边距自动均分，从而实现水平居中。'
      },
      {
        type: 'single',
        question: '上面的盒子 margin-bottom 为 20px，下面的盒子 margin-top 为 30px，实际间距是？',
        options: ['50px', '20px', '30px', '10px'],
        answer: 2,
        explanation: '垂直方向的 margin 会合并，取两者中较大的 30px，而不是相加。'
      },
      {
        type: 'judge',
        question: '标准盒模型（content-box）下，width 只指 content 部分的宽度。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '标准盒模型下 width 和 height 只描述内容区，实际占位还要加上 padding 和 border。'
      },
      {
        type: 'judge',
        question: 'margin 区域会显示元素自己的背景色。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: 'margin 是透明的，元素背景只延伸到 padding（border 之内）。'
      },
      {
        type: 'multiple',
        question: '关于 border-box 盒模型，以下说法正确的有？（多选）',
        options: ['width 即盒子的总宽度', 'padding 和 border 会向内挤压内容', '实际开发中常全局设置为 border-box', '它是 CSS 的默认盒模型'],
        answer: [0, 1, 2],
        explanation: 'border-box 更直观好控制，是业界最佳实践；但默认盒模型是 content-box。'
      },
      {
        type: 'multiple',
        question: '元素的背景默认会延伸覆盖到盒模型的哪些区域？（多选）',
        options: ['content', 'padding', 'margin', '其他元素下方'],
        answer: [0, 1],
        explanation: '背景从 content 一直延伸到 padding 区域，margin 完全透明。'
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
        type: 'multiple',
        question: '以下哪些属于常用的文本样式属性？（多选）',
        options: ['font-size', 'line-height', 'text-align', 'grid-template-columns'],
        answer: [0, 1, 2],
        explanation: 'font-size、line-height、text-align 都是文本样式属性；grid-template-columns 是 Grid 布局属性。'
      },
      {
        type: 'single',
        question: '想去掉链接默认的下划线，应该设置？',
        options: ['text-decoration: none', 'font-style: none', 'border: none', 'underline: off'],
        answer: 0,
        explanation: 'text-decoration: none 是去掉链接下划线的标准写法。'
      },
      {
        type: 'single',
        question: '想让背景图片不平铺重复，应该设置？',
        options: ['background-repeat: no-repeat', 'background-size: cover', 'background-position: center', 'background-color: transparent'],
        answer: 0,
        explanation: 'background-repeat: no-repeat 让背景图只显示一次，常与 size、position 配合使用。'
      },
      {
        type: 'judge',
        question: '初学者建议把 background 的各属性分开写，便于读懂和调试。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'background 简写虽然短，但顺序不直观，初学阶段分开写更不容易出错。'
      },
      {
        type: 'judge',
        question: 'font-weight: bold 是用来设置文字字号的。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: 'font-weight 控制粗细，bold 表示加粗；字号要用 font-size。'
      },
      {
        type: 'multiple',
        question: '设置背景图片时，常与 background-image 配合使用的属性有？（多选）',
        options: ['background-repeat', 'background-size', 'background-position', 'animation-duration'],
        answer: [0, 1, 2],
        explanation: 'repeat、size、position 是背景图三件套；animation-duration 属于动画属性。'
      },
      {
        type: 'multiple',
        question: 'color 属性可以使用以下哪些写法？（多选）',
        options: ['颜色名，如 red', '十六进制，如 #333', 'rgb() 函数', 'url() 函数'],
        answer: [0, 1, 2],
        explanation: '颜色名、十六进制和 rgb 都是合法颜色值；url() 用于引入图片，不能表示颜色。'
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
        type: 'multiple',
        question: '以下哪些是 justify-content 的合法取值？（多选）',
        options: ['flex-start', 'center', 'space-between', 'wrap'],
        answer: [0, 1, 2],
        explanation: 'flex-start、center、space-between 都是 justify-content 的取值；wrap 是 flex-wrap 的取值。'
      },
      {
        type: 'single',
        question: '想让 Flex 项目排成一列（垂直方向），应该设置？',
        options: ['flex-wrap: wrap', 'flex-direction: column', 'align-items: column', 'display: block'],
        answer: 1,
        explanation: 'flex-direction: column 把主轴换成垂直方向，项目自上而下排成一列。'
      },
      {
        type: 'single',
        question: '空间不足时让 Flex 项目自动换行，应该设置？',
        options: ['flex-wrap: wrap', 'flex-direction: wrap', 'justify-content: wrap', 'overflow: wrap'],
        answer: 0,
        explanation: '默认项目挤在一行，flex-wrap: wrap 让放不下时自动换行，常配合卡片列表使用。'
      },
      {
        type: 'judge',
        question: 'align-items 控制的是项目在主轴上的分布。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: 'align-items 管交叉轴对齐；主轴分布由 justify-content 控制。'
      },
      {
        type: 'judge',
        question: '给容器设置 display: flex 后，它的直接子元素自动成为弹性项目。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '成为弹性容器后，直接子元素就是弹性项目，无需额外设置。'
      },
      {
        type: 'multiple',
        question: '以下哪些是 align-items 的合法取值？（多选）',
        options: ['stretch', 'center', 'flex-end', 'space-between'],
        answer: [0, 1, 2],
        explanation: 'stretch、center、flex-end 都是 align-items 的取值；space-between 属于 justify-content。'
      },
      {
        type: 'multiple',
        question: '关于 space-between 与 space-around，以下说法正确的有？（多选）',
        options: ['space-between 两端对齐', 'space-between 项目之间间距相等', 'space-around 每个项目两侧间距相等', '两者效果完全相同'],
        answer: [0, 1, 2],
        explanation: 'space-between 首尾贴边、中间均分；space-around 每项两侧间距相等，首尾留有半间距。'
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
        type: 'multiple',
        question: '以下哪些是定义 Grid 列的合法写法？（多选）',
        options: ['grid-template-columns: 200px 1fr 1fr', 'grid-template-columns: repeat(3, 1fr)', 'grid-template-columns: repeat(auto-fill, minmax(200px, 1fr))', 'grid-template-columns: flex 1'],
        answer: [0, 1, 2],
        explanation: '前三种都是本课讲过的列定义写法；flex 1 不是 grid-template-columns 的合法值。'
      },
      {
        type: 'single',
        question: 'grid-column: 1 / -1 的含义是？',
        options: ['只占第一列', '横跨整行', '从第 1 列到倒数第 2 列', '写法错误'],
        answer: 1,
        explanation: '-1 代表最后一条网格线，1 / -1 即从第一条线跨到最后一条，横跨整行。'
      },
      {
        type: 'single',
        question: '统一设置 Grid 行列之间间距的属性是？',
        options: ['gap', 'spacing', 'margin-grid', 'border-gap'],
        answer: 0,
        explanation: 'gap（旧名 grid-gap）一条属性同时设置行距和列距，不用手动算 margin。'
      },
      {
        type: 'judge',
        question: 'repeat(3, 1fr) 完全等同于 1fr 1fr 1fr。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'repeat() 是简写，第一个参数是重复次数，第二个参数是重复的内容。'
      },
      {
        type: 'judge',
        question: 'Grid 中的项目默认就横跨整行，需要手动收回。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: 'Grid 项目默认只占一个格子，需要用 grid-column 或 grid-row 才能跨格。'
      },
      {
        type: 'multiple',
        question: '关于 fr 单位，以下说法正确的有？（多选）',
        options: ['是 Grid 特有的单位', '表示剩余空间的一份', '1fr 2fr 表示按 1:2 分配', '等同于固定像素'],
        answer: [0, 1, 2],
        explanation: 'fr 按比例瓜分剩余空间，是弹性尺寸；与 px 这种固定单位完全不同。'
      },
      {
        type: 'multiple',
        question: '让 Grid 项目跨越多格，可以使用哪些写法？（多选）',
        options: ['grid-column: 1 / 3', 'grid-column: span 2', 'grid-row', 'flex-grow'],
        answer: [0, 1, 2],
        explanation: 'grid-column、grid-row 及 span 关键字都能控制跨格；flex-grow 是 Flex 属性。'
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
        type: 'multiple',
        question: '以下哪些关于过渡与动画的说法是正确的？（多选）',
        options: ['transition 要写在元素的初始状态上', 'transform 做动画性能好，不会引起重新排版', 'animation 设置 infinite 可无限循环', 'transition 只能写在 :hover 状态上'],
        answer: [0, 1, 2],
        explanation: 'transition 写在初始状态上才能保证移入移出都有过渡；transform 不触发重排；infinite 表示无限循环。'
      },
      {
        type: 'single',
        question: '定义多帧动画的关键帧，应该使用哪个规则？',
        options: ['@keyframes', '@media', '@font-face', '@transition'],
        answer: 0,
        explanation: '@keyframes 定义关键帧（from/to 或百分比），再由 animation 属性引用。'
      },
      {
        type: 'single',
        question: '想让 animation 动画无限循环播放，应该加上哪个关键字？',
        options: ['loop: true', 'infinite', 'repeat: always', 'for-ever'],
        answer: 1,
        explanation: 'animation: spin 1s linear infinite 中的 infinite 即表示无限循环。'
      },
      {
        type: 'judge',
        question: '简单的状态切换适合用 transition，复杂的循环动画适合用 animation。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '这是两者的分工原则：过渡做状态平滑切换，动画做多帧和循环。'
      },
      {
        type: 'judge',
        question: '“移动优先”是指先用 max-width 写大屏幕样式，再逐级缩小适配。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '移动优先恰恰相反：先写小屏默认样式，再用 min-width 媒体查询逐级增强大屏。'
      },
      {
        type: 'multiple',
        question: 'transform 可以对元素做哪些变换？（多选）',
        options: ['位移 translate', '缩放 scale', '旋转 rotate', '改变文档流'],
        answer: [0, 1, 2],
        explanation: 'translate、scale、rotate 是 transform 三大基础变换，且不影响文档流。'
      },
      {
        type: 'multiple',
        question: '哪些技术能在不写媒体查询的情况下帮助布局自适应？（多选）',
        options: ['Flex 的 flex-wrap', 'Grid 的 auto-fill', 'Grid 的 minmax', 'table 表格布局'],
        answer: [0, 1, 2],
        explanation: 'wrap、auto-fill 和 minmax 都能随空间自动调整，媒体查询留给结构大调整。'
      }
    ]
  },
  {
    id: 'css3-07',
    title: '选择器进阶：伪类、伪元素与属性选择器',
    summary: '伪类伪元素与属性选择器一网打尽',
    minutes: 12,
    sections: [
      {
        heading: '常用伪类：选中特定状态',
        text: '伪类用单冒号开头，用来选中元素的某种状态或位置。\n最常用的是 :hover（鼠标悬停）、:focus（获得焦点）、:first-child（第一个子元素）和 :nth-child(n)（第 n 个子元素）。\n:nth-child 很灵活：:nth-child(odd) 选中奇数行、:nth-child(even) 选中偶数行，常用来做斑马纹表格。\n注意伪类选中的是“状态”，元素本身并没有多出类名，所以优先级和普通类选择器相同。',
        code: 'a:hover { color: red; }       /* 悬停变红 */\nli:first-child { font-weight: bold; }\ntr:nth-child(odd) { background: #f5f5f5; } /* 斑马纹 */',
        lang: 'css'
      },
      {
        heading: '伪元素：选中元素的一部分',
        text: '伪元素用双冒号开头（如 ::before、::after），它会在元素内部创建一个不存在的“虚拟元素”，可以向里面插入内容。\n::before 在元素内容的最前面插入，::after 在最后面插入，必须配合 content 属性才有效果，哪怕 content 是空字符串。\n常见用途：加小图标、做装饰线、清除浮动。它和伪类的区别是：伪类选状态，伪元素造元素。',
        code: '.icon::before {\n  content: "★ ";\n  color: gold;\n}\n.quote::after {\n  content: "";\n  display: block;\n  border-bottom: 2px solid #ddd;\n}',
        lang: 'css'
      },
      {
        heading: '属性选择器：按属性选中元素',
        text: '属性选择器用方括号，根据元素的属性来选中它，非常精准。\n[type="text"] 选中所有文本输入框；[href^="https"] 选中 href 以 https 开头的链接（^= 表示开头）；[href$=".pdf"] 选中以 .pdf 结尾的链接（$= 表示结尾）；[class*="btn"] 选中 class 中包含 btn 的元素（*= 表示包含）。\n写表单样式时属性选择器特别好用，不用给每个输入框都加类名。',
        code: 'input[type="text"] { border: 1px solid #ccc; }\na[href^="https"] { color: green; }  /* 安全链接 */\na[href$=".pdf"]::after { content: "(PDF)"; }',
        lang: 'css'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: '想给表格的奇数行加背景色，应该使用哪个伪类？',
        options: [':first-child', ':nth-child(odd)', ':hover', ':last-child'],
        answer: 1,
        explanation: ':nth-child(odd) 选中奇数位置的子元素，配合背景色即可实现斑马纹。'
      },
      {
        type: 'judge',
        question: '::before 伪元素必须设置 content 属性（哪怕为空字符串）才会生效。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '没有 content，::before 和 ::after 不会生成任何盒子，这是初学者常踩的坑。'
      },
      {
        type: 'single',
        question: '[href$=".pdf"] 这个属性选择器的含义是？',
        options: ['href 以 .pdf 开头', 'href 等于 .pdf', 'href 以 .pdf 结尾', 'href 包含 .pdf 任意位置'],
        answer: 2,
        explanation: '$= 表示“以……结尾”，^= 表示开头，*= 表示包含。'
      },
      {
        type: 'multiple',
        question: '以下哪些写法是正确的伪元素？（多选）',
        options: ['p::before', 'p::after', 'p:hover', 'p::first-line'],
        answer: [0, 1, 3],
        explanation: '::before、::after、::first-line 都是伪元素；:hover 是伪类，不是伪元素。'
      },
      {
        type: 'single',
        question: '[href^="https"] 这个属性选择器的含义是？',
        options: ['href 以 https 开头', 'href 以 https 结尾', 'href 包含 https', 'href 等于 https'],
        answer: 0,
        explanation: '^= 表示“以……开头”，$= 表示结尾，*= 表示包含。'
      },
      {
        type: 'single',
        question: '想选中鼠标悬停状态的元素，应该使用哪个伪类？',
        options: [':active', ':hover', ':focus', ':checked'],
        answer: 1,
        explanation: ':hover 匹配鼠标悬停状态；:focus 是获得焦点，:active 是按下瞬间。'
      },
      {
        type: 'judge',
        question: '伪类用单冒号开头，伪元素用双冒号开头。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '这是两者的书写区别：伪类选状态（单冒号），伪元素造元素（双冒号）。'
      },
      {
        type: 'judge',
        question: '[class*="btn"] 选中的是 class 以 btn 开头的元素。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '*= 表示“包含”，class 中任意位置含 btn 即匹配；开头要用 ^=。'
      },
      {
        type: 'multiple',
        question: '以下哪些属于伪类？（多选）',
        options: [':hover', ':focus', ':first-child', '::before'],
        answer: [0, 1, 2],
        explanation: ':hover、:focus、:first-child 都是选中状态的伪类；::before 是伪元素。'
      },
      {
        type: 'multiple',
        question: '关于伪元素，以下说法正确的有？（多选）',
        options: ['::before 在元素内容最前面插入', '::after 在元素内容最后面插入', '必须配合 content 属性才生效', '会向 HTML 中插入真实的标签'],
        answer: [0, 1, 2],
        explanation: '伪元素是渲染时生成的“虚拟元素”，不会出现在 HTML 结构中。'
      }
    ]
  },
  {
    id: 'css3-08',
    title: '定位 position 详解',
    summary: '五种定位方式，掌握元素精准摆放',
    minutes: 12,
    sections: [
      {
        heading: '五种定位值',
        text: 'position 有五个取值：\nstatic 是默认值，元素按文档流正常排列，top、left 等偏移属性无效。\nrelative 相对自己原来的位置偏移，原来的空间仍然保留，不会挤走别人。\nabsolute 脱离文档流，相对于最近的“非 static 祖先”定位，没有就相对于整个页面。\nfixed 脱离文档流，相对于浏览器窗口定位，滚动页面也不动，常用于吸顶导航。\nsticky 是混合体：滚动前表现为 relative，滚到指定位置后像 fixed 一样吸住。',
        code: '.nav { position: fixed; top: 0; left: 0; } /* 吸顶 */\n.badge { position: relative; top: -5px; }    /* 微调位置 */',
        lang: 'css'
      },
      {
        heading: '经典组合：父相子绝',
        text: 'absolute 最常和 relative 搭配使用，口诀是“父相子绝”：父元素设 position: relative（只建立定位参照，自己不动），子元素设 position: absolute，这样子元素就相对于父元素定位了。\n典型场景：图片右上角的“热卖”角标、卡片里的关闭按钮。用 top、right、bottom、left 四个属性精确控制位置。\n记住：absolute 元素脱离文档流，父元素的高度不再被它撑开，要小心布局塌陷。',
        code: '.card {\n  position: relative; /* 定位参照 */\n}\n.card .tag {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  background: red;\n  color: #fff;\n}',
        lang: 'css'
      },
      {
        heading: 'sticky 粘性定位',
        text: 'sticky 是吸顶效果的现代解决方案，不需要 JavaScript。\n设置 position: sticky; top: 0 后，元素平时正常参与文档流，当页面滚动使它即将越过 top 指定的位置时，它就会“粘”在那里，直到父容器滚出视野。\n它比 fixed 更智能：不会脱离文档流，也不用在滚动时切换类名。常用于表格表头、分组标题。\n注意：父元素不能有 overflow: hidden，且必须设置 top 等阈值才生效。',
        code: '.section-title {\n  position: sticky;\n  top: 0; /* 距离顶部 0 时吸住 */\n  background: #fff;\n}',
        lang: 'css'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: '想让子元素相对于父元素精确定位，标准做法是？',
        options: ['父元素 static，子元素 absolute', '父元素 relative，子元素 absolute', '父子都用 fixed', '父元素 absolute，子元素 relative'],
        answer: 1,
        explanation: '“父相子绝”：relative 只建立参照系不影响布局，absolute 相对最近的非 static 祖先定位。'
      },
      {
        type: 'single',
        question: 'position: fixed 的元素是相对于什么定位的？',
        options: ['父元素', '最近的 relative 祖先', '浏览器窗口', '它原来的位置'],
        answer: 2,
        explanation: 'fixed 始终相对于视口定位，页面滚动时纹丝不动，常用于吸顶导航。'
      },
      {
        type: 'judge',
        question: 'relative 定位的元素偏移后，它原来占据的空间会被其他元素占据。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: 'relative 只是视觉上偏移，原来的空间仍然保留，不会影响其他元素的布局。'
      },
      {
        type: 'multiple',
        question: '以下哪些定位值会让元素脱离正常文档流？（多选）',
        options: ['absolute', 'fixed', 'relative', 'sticky'],
        answer: [0, 1],
        explanation: 'absolute 和 fixed 完全脱离文档流；relative 和 sticky 仍保留在文档流中。'
      },
      {
        type: 'single',
        question: 'position: absolute 的元素相对于什么定位？',
        options: ['一定是父元素', '最近的非 static 祖先', '浏览器窗口', '它原来的位置'],
        answer: 1,
        explanation: 'absolute 找最近的非 static 祖先作为参照，找不到才相对于整个页面。'
      },
      {
        type: 'single',
        question: 'sticky 定位在滚动到达阈值之前，表现类似于？',
        options: ['fixed', 'absolute', 'relative', 'float'],
        answer: 2,
        explanation: 'sticky 是混合体：滚动前像 relative 正常占位，滚到指定位置后像 fixed 吸住。'
      },
      {
        type: 'judge',
        question: 'static 定位下，top、left 等偏移属性是无效的。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'static 是默认值，元素按文档流排列，偏移属性对它不起作用。'
      },
      {
        type: 'judge',
        question: 'sticky 定位不设置 top 等阈值也能生效。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '必须设置 top（或 bottom 等）阈值，否则元素没有“粘住”的触发位置。'
      },
      {
        type: 'multiple',
        question: '以下哪些是 position 的合法取值？（多选）',
        options: ['static', 'relative', 'sticky', 'float'],
        answer: [0, 1, 2],
        explanation: 'position 有 static、relative、absolute、fixed、sticky 五个取值；float 是独立属性。'
      },
      {
        type: 'multiple',
        question: 'sticky 吸顶不生效，可能的原因有？（多选）',
        options: ['父元素设置了 overflow: hidden', '没有设置 top 等阈值', '父容器已完全滚出视野', '元素设置了 color 属性'],
        answer: [0, 1, 2],
        explanation: '前三个都是 sticky 失效的常见原因；color 与定位无关。'
      }
    ]
  },
  {
    id: 'css3-09',
    title: '浮动与清除浮动',
    summary: '理解 float 的影响与正确清除方法',
    minutes: 10,
    sections: [
      {
        heading: '浮动的用途与影响',
        text: 'float 最初是为“文字环绕图片”设计的，取值有 left 和 right。元素浮动后会脱离文档流，向左或向右贴边，后面的文字会围绕它排列。\n在 Flex 出现之前，浮动是多栏布局的主力，但它有个大麻烦：父元素的高度不会被浮动的子元素撑开，导致“高度塌陷”，父元素背景、边框都消失，后续元素也会跑上来。\n现在布局首选 Flex 和 Grid，但老代码里浮动随处可见，必须学会应对。',
        code: 'img {\n  float: left;      /* 图片靠左，文字环绕 */\n  margin-right: 12px;\n}',
        lang: 'css'
      },
      {
        heading: '清除浮动的三种方法',
        text: '解决高度塌陷叫“清除浮动”，常用三种方法：\n一、clear 属性：在浮动元素后面加一个空元素，设置 clear: both，表示左右都不允许浮动元素，它会被挤到浮动元素下方。\n二、clearfix 伪元素法：给父元素加 ::after，content 为空、display: block、clear: both，不用污染 HTML，是最经典的写法。\n三、触发 BFC：给父元素设 overflow: hidden，让父元素自己计算浮动子元素的高度。\n实际开发推荐 clearfix，语义清晰且无副作用。',
        code: '.clearfix::after {\n  content: "";\n  display: block;\n  clear: both;\n}\n/* 用法：给浮动元素的父容器加 clearfix 类 */',
        lang: 'css'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: '父元素内的子元素全部浮动后，父元素高度变为 0，这种现象叫？',
        options: ['外边距合并', '高度塌陷', '层叠覆盖', '盒模型异常'],
        answer: 1,
        explanation: '浮动元素脱离文档流，不再撑开父元素高度，这就是高度塌陷。'
      },
      {
        type: 'judge',
        question: 'float 属性最初的设计目的是实现文字环绕图片的效果。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'float 的本意是图文环绕，后来被广泛用于多栏布局，如今布局更推荐 Flex 和 Grid。'
      },
      {
        type: 'single',
        question: 'clearfix 方案中 ::after 的三个关键属性是？',
        options: ['content、display、clear', 'width、height、float', 'position、top、left', 'margin、padding、border'],
        answer: 0,
        explanation: 'content 生成伪元素，display: block 让它独占一行，clear: both 把它挤到浮动元素下方撑开父元素。'
      },
      {
        type: 'multiple',
        question: '以下哪些方法可以清除（解决）浮动带来的影响？（多选）',
        options: ['浮动元素后加空元素并设 clear: both', '父元素使用 clearfix 伪元素', '父元素设 overflow: hidden 触发 BFC', '给父元素设 text-align: center'],
        answer: [0, 1, 2],
        explanation: '前三种都是有效的清除浮动方案；text-align 只影响文字对齐，与浮动无关。'
      },
      {
        type: 'single',
        question: 'float 属性的合法取值是？',
        options: ['left 和 right', 'top 和 bottom', 'center', '任意方向'],
        answer: 0,
        explanation: 'float 只有 left、right（和 none）取值，没有 top、bottom 或 center。'
      },
      {
        type: 'single',
        question: '通过触发 BFC 来清除浮动，可以给父元素设置？',
        options: ['overflow: hidden', 'text-align: center', 'color: red', 'font-weight: bold'],
        answer: 0,
        explanation: 'overflow: hidden 触发 BFC，让父元素自己计算浮动子元素的高度。'
      },
      {
        type: 'judge',
        question: '元素浮动后会脱离文档流，向左或向右贴边。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '浮动元素脱离文档流并贴边，后面的文字会围绕它排列，这正是高度塌陷的根源。'
      },
      {
        type: 'judge',
        question: '现代布局中，多栏布局仍应首选浮动而不是 Flex 和 Grid。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '现在布局首选 Flex 和 Grid，学习浮动主要是为了维护老代码。'
      },
      {
        type: 'multiple',
        question: '高度塌陷会带来哪些后果？（多选）',
        options: ['父元素背景消失', '父元素边框消失', '后续元素跑上来', '浮动子元素自动清除浮动'],
        answer: [0, 1, 2],
        explanation: '父元素高度为 0 后背景、边框都会消失，后续元素也会上移，布局全乱。'
      },
      {
        type: 'multiple',
        question: '关于 clear: both，以下说法正确的有？（多选）',
        options: ['表示左右都不允许浮动元素', '元素会被挤到浮动元素下方', '可配合空元素或伪元素清除浮动', '会让元素自身产生浮动'],
        answer: [0, 1, 2],
        explanation: 'clear 用来清除别人的浮动影响，而不是让自己浮动。'
      }
    ]
  },
  {
    id: 'css3-10',
    title: '层叠、优先级与 z-index',
    summary: '搞懂样式谁生效、元素谁在上',
    minutes: 12,
    sections: [
      {
        heading: '层叠与优先级计算',
        text: '当多条规则选中同一个元素时，浏览器按“层叠”规则决定谁生效：先看重要性，再看优先级，最后看书写顺序。\n优先级可以记作四位数：行内样式（1000）> id 选择器（0100）> 类/伪类/属性选择器（0010）> 标签/伪元素（0001）。比如 #nav .item 的优先级是 110，比 .nav .item 的 20 高。\n优先级相同时，后写的覆盖先写的。!important 能强行置顶，但会破坏可维护性，能不用就不用。',
        code: '#nav .item { color: red; }  /* 优先级 110 */\n.nav .item { color: blue; }  /* 优先级 20，被覆盖 */',
        lang: 'css'
      },
      {
        heading: 'z-index 与层叠上下文',
        text: 'z-index 控制定位元素在垂直屏幕方向上的叠放次序，值越大越靠上，只对 position 非 static 的元素（或 Flex/Grid 子项）有效。\n初学者常遇到“z-index 设了 9999 还是被盖住”的问题，原因是层叠上下文：z-index 只在同一个层叠上下文里比较。父元素一旦形成层叠上下文（如设了 opacity 小于 1、transform 或 z-index），子元素的 z-index 再高也跳不出父元素的层级。\n解决方法：调整两个“祖先”的层级，而不是一味加大 z-index。',
        code: '.modal {\n  position: fixed;\n  z-index: 1000; /* 弹窗盖在内容上方 */\n}\n.mask {\n  position: fixed;\n  z-index: 999; /* 遮罩在弹窗下面 */\n}',
        lang: 'css'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: '下列选择器中优先级最高的是？',
        options: ['.box .item', '#box .item', 'div.box', '.box:hover'],
        answer: 1,
        explanation: 'id 选择器权重为 100，#box .item 总权重 110，高于其他三个纯类/标签组合。'
      },
      {
        type: 'single',
        question: 'z-index 生效的前提条件通常是？',
        options: ['元素必须设置 width', '元素的 position 不是 static', '元素必须是块级元素', '元素必须有背景色'],
        answer: 1,
        explanation: 'z-index 只对定位元素（position 非 static）或 Flex/Grid 子项生效。'
      },
      {
        type: 'judge',
        question: '两条优先级相同的规则冲突时，后书写的规则生效。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '“后来者居上”：优先级相同时按源码顺序，后面的覆盖前面的。'
      },
      {
        type: 'multiple',
        question: '以下哪些情况会让元素创建新的层叠上下文？（多选）',
        options: ['根元素 html', 'position 非 static 且 z-index 有值', '设置 transform', '设置 color: red'],
        answer: [0, 1, 2],
        explanation: '根元素、带 z-index 的定位元素、transform 等都会创建层叠上下文；color 不会。'
      },
      {
        type: 'single',
        question: '关于 !important，正确的说法是？',
        options: ['完全无效', '能强行置顶但应尽量少用', '只在行内样式中有效', '日常开发推荐多用'],
        answer: 1,
        explanation: '!important 优先级最高，但会破坏样式可维护性，能不用就不用。'
      },
      {
        type: 'single',
        question: '在优先级四位数记法中，类、伪类、属性选择器对应的级别是？',
        options: ['1000', '0100', '0010', '0001'],
        answer: 2,
        explanation: '行内 1000、id 0100、类/伪类/属性 0010、标签/伪元素 0001。'
      },
      {
        type: 'judge',
        question: '父元素形成层叠上下文后，子元素的 z-index 再高也跳不出父元素的层级。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'z-index 只在同一个层叠上下文里比较，这就是“9999 也被盖住”的原因。'
      },
      {
        type: 'judge',
        question: '遇到 z-index 被盖住的问题，正确做法是不断把 z-index 加得更大。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '应该调整两个祖先元素的层级关系，一味加大数值治标不治本。'
      },
      {
        type: 'multiple',
        question: '浏览器按层叠规则决定样式生效时，依次比较哪些因素？（多选）',
        options: ['重要性', '优先级', '书写顺序', '文件大小'],
        answer: [0, 1, 2],
        explanation: '层叠顺序是：先看重要性，再看优先级，最后看书写顺序，与文件大小无关。'
      },
      {
        type: 'multiple',
        question: '以下哪些做法可能让元素形成新的层叠上下文？（多选）',
        options: ['opacity 小于 1', '设置 transform', '定位元素设置 z-index', '设置 margin'],
        answer: [0, 1, 2],
        explanation: 'opacity、transform、带 z-index 的定位元素都会创建层叠上下文；margin 不会。'
      }
    ]
  },
  {
    id: 'css3-11',
    title: '圆角、阴影与渐变',
    summary: '三个美化利器，页面质感瞬间提升',
    minutes: 10,
    sections: [
      {
        heading: '圆角与阴影',
        text: 'border-radius 设置圆角，可以写 1 到 4 个值分别控制四个角，设 50% 能让正方形变成正圆。\nbox-shadow 给盒子加投影：box-shadow: 水平偏移 垂直偏移 模糊半径 颜色，加一个 inset 关键字就变成内阴影。淡淡的投影能营造层次，推荐用 rgba 带透明度的黑色。\ntext-shadow 用法类似，但作用于文字，可以做出描边或发光效果。\n阴影不是越重越好，克制才高级。',
        code: '.card {\n  border-radius: 12px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\nh1 { text-shadow: 1px 1px 2px #999; }',
        lang: 'css'
      },
      {
        heading: '渐变背景',
        text: '渐变用 background-image 设置，浏览器会自动生成平滑过渡的色带。\nlinear-gradient 是线性渐变：linear-gradient(to right, red, blue) 表示从左到右由红变蓝；也可以用角度，如 45deg。\nradial-gradient 是径向渐变，从中心向外扩散，默认椭圆形，circle 关键字可以强制为正圆。\n渐变里还可以写多个颜色和位置节点（色标），做出彩虹、条纹等效果，配合 background-size 甚至能画出重复纹理。',
        code: '.banner {\n  background-image: linear-gradient(135deg, #667eea, #764ba2);\n}\n.sun {\n  background-image: radial-gradient(circle, #ffd700, #ff8c00);\n}',
        lang: 'css'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: 'box-shadow: 0 4px 12px rgba(0,0,0,0.15) 中 12px 代表什么？',
        options: ['水平偏移', '垂直偏移', '模糊半径', '阴影颜色'],
        answer: 2,
        explanation: '四个值依次是水平偏移、垂直偏移、模糊半径、颜色，12px 是模糊半径。'
      },
      {
        type: 'judge',
        question: '渐变是图片的一种，要通过 background-image 属性来设置。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '渐变在 CSS 中被视为生成的图像，所以写在 background-image 上，而不是 background-color。'
      },
      {
        type: 'single',
        question: 'linear-gradient(to right, red, blue) 的渐变方向是？',
        options: ['从上到下', '从左到右', '从中心向外', '从右到左'],
        answer: 1,
        explanation: 'to right 表示朝右渐变，即左侧红色平滑过渡到右侧蓝色。'
      },
      {
        type: 'multiple',
        question: '以下哪些属性可以给元素增加立体或层次效果？（多选）',
        options: ['box-shadow', 'text-shadow', 'linear-gradient', 'line-height'],
        answer: [0, 1, 2],
        explanation: '盒阴影、文字阴影和渐变都能提升视觉层次；line-height 只控制行间距。'
      },
      {
        type: 'single',
        question: 'box-shadow 加上哪个关键字可以变成内阴影？',
        options: ['inset', 'inside', 'inner', 'in'],
        answer: 0,
        explanation: 'box-shadow 前加 inset 关键字，投影就会画在盒子内部。'
      },
      {
        type: 'single',
        question: 'radial-gradient 径向渐变默认的形状是？',
        options: ['正圆', '椭圆', '方形', '三角形'],
        answer: 1,
        explanation: '径向渐变默认是椭圆形，加 circle 关键字才能强制为正圆。'
      },
      {
        type: 'judge',
        question: 'border-radius 可以写 1 到 4 个值，分别控制四个角。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '与 margin、padding 类似，border-radius 支持一到四个值分别设置四角。'
      },
      {
        type: 'judge',
        question: '阴影用得越重，页面就显得越高级。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '阴影过重会显得廉价，淡淡的投影才有层次感，克制才高级。'
      },
      {
        type: 'multiple',
        question: 'linear-gradient 的渐变方向可以用哪些方式指定？（多选）',
        options: ['to right 等方向关键字', '角度，如 45deg', '配合多个颜色和色标位置', 'float 关键字'],
        answer: [0, 1, 2],
        explanation: '方向可用关键字或角度，色标可精确控制颜色节点；float 与渐变无关。'
      },
      {
        type: 'multiple',
        question: '关于 text-shadow，以下说法正确的有？（多选）',
        options: ['作用于文字', '用法与 box-shadow 类似', '可以做出描边或发光效果', '可以替代 font-size'],
        answer: [0, 1, 2],
        explanation: 'text-shadow 是文字版阴影，参数形式类似 box-shadow，但与字号无关。'
      }
    ]
  },
  {
    id: 'css3-12',
    title: 'transform 变形深入',
    summary: '位移旋转缩放，动画的性能基石',
    minutes: 12,
    sections: [
      {
        heading: '三大基础变形',
        text: 'transform 可以对元素进行位移、旋转、缩放，且不影响文档流，是动画性能最好的属性。\ntranslate(x, y) 位移：translate(10px, 20px) 向右下移动；translate(-50%, -50%) 配合定位是水平垂直居中的经典技巧。\nrotate(deg) 旋转：rotate(45deg) 顺时针转 45 度，负数逆时针。\nscale(n) 缩放：scale(1.2) 放大 1.2 倍，scale(0.5) 缩小一半，也可以分别写 scale(x, y)。',
        code: '.box { transform: translate(10px, 20px); }\n.icon:hover { transform: rotate(45deg); }\n.thumb:hover { transform: scale(1.1); } /* 悬停放大 */',
        lang: 'css'
      },
      {
        heading: 'transform-origin 与组合变形',
        text: 'transform-origin 设置变形的基准点，默认是元素中心（50% 50%）。把旋转基准点改到左上角，元素就会绕着左上角转，可以做门开关的效果。\n多个变形可以组合写在一条 transform 里，用空格分隔，如 transform: translate(10px, 0) rotate(45deg)。注意执行顺序是从左到右，先平移再旋转和先旋转再平移，结果完全不同。\n另外 transform 会让元素创建新的层叠上下文，并成为 fixed 后代的定位参照，偶尔会带来意外。',
        code: '.door {\n  transform-origin: left top; /* 绕左上角旋转 */\n  transform: rotate(-30deg);\n}\n.center {\n  position: absolute;\n  top: 50%; left: 50%;\n  transform: translate(-50%, -50%); /* 精确居中 */\n}',
        lang: 'css'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: '配合绝对定位 top: 50%; left: 50% 实现精确居中，还需要加？',
        options: ['transform: rotate(50%)', 'transform: translate(-50%, -50%)', 'transform: scale(0.5)', 'transform: translate(50%, 50%)'],
        answer: 1,
        explanation: '定位后元素左上角在中心点，再向左上各平移自身宽高的一半，才是视觉上的正中。'
      },
      {
        type: 'single',
        question: '想让元素绕着左上角旋转，应该设置？',
        options: ['transform: rotate(0)', 'transform-origin: left top', 'position: relative', 'rotate-origin: 0 0'],
        answer: 1,
        explanation: 'transform-origin 定义变形基准点，left top 即左上角。'
      },
      {
        type: 'judge',
        question: 'transform 的多个函数组合时，书写顺序不会影响最终结果。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '组合变形从左到右依次执行，先平移再旋转与先旋转再平移的结果不同。'
      },
      {
        type: 'multiple',
        question: '以下哪些是 transform 的合法函数？（多选）',
        options: ['translate(10px, 20px)', 'rotate(45deg)', 'scale(1.2)', 'float(left)'],
        answer: [0, 1, 2],
        explanation: 'translate、rotate、scale 都是 transform 的函数；float 是独立属性，不是 transform 函数。'
      },
      {
        type: 'single',
        question: 'rotate(45deg) 表示元素如何旋转？',
        options: ['逆时针转 45 度', '顺时针转 45 度', '放大 45 倍', '位移 45px'],
        answer: 1,
        explanation: '正数角度为顺时针旋转，负数角度为逆时针旋转。'
      },
      {
        type: 'single',
        question: 'transform-origin 的默认基准点是？',
        options: ['左上角', '元素中心', '右下角', '视口中心'],
        answer: 1,
        explanation: '默认基准点是元素中心（50% 50%），旋转、缩放都围绕它进行。'
      },
      {
        type: 'judge',
        question: 'transform 不影响文档流，是做动画性能最好的属性之一。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'transform 不触发重排，在合成阶段处理，因此动画首选 transform。'
      },
      {
        type: 'judge',
        question: '祖先元素设置 transform 后，其 fixed 定位的后代仍然相对于视口定位。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: 'transform 会让元素成为 fixed 后代的定位参照，这是容易踩的坑。'
      },
      {
        type: 'multiple',
        question: '关于 scale 缩放，以下写法或说法正确的有？（多选）',
        options: ['scale(1.2) 放大到 1.2 倍', 'scale(0.5) 缩小一半', 'scale(x, y) 可分别设置两轴', 'scale 规定最小只能到 0.1'],
        answer: [0, 1, 2],
        explanation: 'scale 接受任意数值，没有最小 0.1 的规定，甚至可以写负数实现翻转。'
      },
      {
        type: 'multiple',
        question: '使用 transform 可能带来的副作用包括？（多选）',
        options: ['创建新的层叠上下文', '成为 fixed 后代的定位参照', '组合变形的书写顺序影响结果', '触发整个页面重新排版'],
        answer: [0, 1, 2],
        explanation: '前三个都是本课提到的注意点；transform 恰恰不会引起重新排版。'
      }
    ]
  },
  {
    id: 'css3-13',
    title: '响应式与移动端适配',
    summary: 'rem/vw 加媒体查询实战一套搞定',
    minutes: 15,
    sections: [
      {
        heading: '视口设置与适配思路',
        text: '移动端适配第一步是在 HTML 中设置视口：width=device-width 让页面宽度等于设备宽度，initial-scale=1 禁止默认缩放，否则手机会按 980px 宽渲染再缩小。\n适配的核心思路是让尺寸“跟着屏幕走”。常见方案有两种：rem 方案和 vw 方案。rem 相对于根元素 font-size，用 JavaScript 或媒体查询动态设置 html 字号，页面所有尺寸都用 rem，屏幕变化整体缩放。vw 直接表示视口宽度的 1%，连计算都省了。',
        code: '<meta name="viewport" content="width=device-width, initial-scale=1">\n\n/* vw 方案：设计稿 375px，100px 约合 26.67vw */\n.box { width: 26.67vw; }',
        lang: 'html'
      },
      {
        heading: '媒体查询实战',
        text: '媒体查询按屏幕宽度应用不同样式，是响应式的核心武器。\n推荐“移动优先”：默认样式写给手机，再用 min-width 逐级增强平板和桌面。常见断点：768px（平板）、992px（小桌面）、1200px（大桌面）。\n实战中常做的事：小屏把多栏改成单栏、隐藏次要内容、把横向导航改成汉堡菜单、调大点击区域。\n配合 Flex 的 wrap 和 Grid 的 auto-fill，很多组件不写媒体查询也能自适应，媒体查询留给整体结构的大调整。',
        code: '/* 移动优先：默认单列 */\n.list { display: grid; grid-template-columns: 1fr; gap: 12px; }\n\n@media (min-width: 768px) {\n  .list { grid-template-columns: 1fr 1fr; } /* 平板两列 */\n}\n@media (min-width: 992px) {\n  .list { grid-template-columns: repeat(4, 1fr); } /* 桌面四列 */\n}',
        lang: 'css'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: '移动端页面必须加的视口 meta 标签中，width=device-width 的作用是？',
        options: ['禁止用户缩放', '让视口宽度等于设备宽度', '设置初始缩放为 1', '锁定横屏显示'],
        answer: 1,
        explanation: '不设置的话手机浏览器会按约 980px 宽渲染再整体缩小，页面会显示成“微缩版”。'
      },
      {
        type: 'judge',
        question: '“移动优先”是指先写小屏幕的默认样式，再用 min-width 媒体查询增强大屏幕。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '移动优先用小屏样式作基础，大屏逐级增强，代码更简洁，也符合渐进增强思想。'
      },
      {
        type: 'single',
        question: '1vw 等于多少？',
        options: ['视口宽度的 1%', '视口高度的 1%', '根元素字号的 1 倍', '固定 1px'],
        answer: 0,
        explanation: 'vw 是视口宽度单位，100vw 正好等于视口宽度，1vw 即 1%。'
      },
      {
        type: 'multiple',
        question: '以下哪些是移动端适配的常用手段？（多选）',
        options: ['设置 viewport meta 标签', '使用 rem 或 vw 做弹性尺寸', '用媒体查询调整布局', '所有尺寸写死 750px'],
        answer: [0, 1, 2],
        explanation: '视口设置、弹性单位和媒体查询是适配三件套；写死宽度无法适配不同屏幕。'
      },
      {
        type: 'single',
        question: 'rem 单位是相对于什么计算的？',
        options: ['父元素的字号', '根元素 html 的 font-size', '视口高度', '固定像素'],
        answer: 1,
        explanation: 'rem 相对根元素字号，所以动态设置 html 字号就能让整页尺寸整体缩放。'
      },
      {
        type: 'single',
        question: '以下哪个不是常见的响应式断点？',
        options: ['768px', '992px', '1200px', '3333px'],
        answer: 3,
        explanation: '常见断点是 768（平板）、992（小桌面）、1200（大桌面），3333px 不是约定俗成的断点。'
      },
      {
        type: 'judge',
        question: '不设置 viewport meta 标签时，手机浏览器可能按约 980px 宽渲染再整体缩小。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '这正是要设置 width=device-width 的原因，否则页面会显示成“微缩版”。'
      },
      {
        type: 'judge',
        question: 'min-width: 768px 表示屏幕宽度不超过 768px 时样式生效。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: 'min-width 是“最小不低于”，即宽度 ≥ 768px 时生效；不超过要用 max-width。'
      },
      {
        type: 'multiple',
        question: '小屏幕下的常见响应式调整有？（多选）',
        options: ['多栏改成单栏', '隐藏次要内容', '横向导航改成汉堡菜单', '把所有文字放大三倍'],
        answer: [0, 1, 2],
        explanation: '前三个都是实战常用手法；文字只需适度调大点击区域，不是无脑放大。'
      },
      {
        type: 'multiple',
        question: '关于 rem 适配方案，以下做法正确的有？（多选）',
        options: ['动态设置 html 的 font-size', '页面尺寸统一用 rem', '屏幕变化时页面整体缩放', '所有元素尺寸用 px 写死'],
        answer: [0, 1, 2],
        explanation: 'rem 方案靠根字号联动实现整体缩放；写死 px 就失去了适配能力。'
      }
    ]
  },
  {
    id: 'css3-14',
    title: '常见布局技巧',
    summary: '居中、多栏与粘性页脚一次学会',
    minutes: 15,
    sections: [
      {
        heading: '居中技巧大全',
        text: '水平居中分情况：行内元素给父元素加 text-align: center；定宽块级元素用 margin: 0 auto。\n水平垂直居中最推荐 Flex：父元素 display: flex; justify-content: center; align-items: center，一行容器搞定。\n不定宽高的弹窗常用“绝对定位 + transform”：top: 50%; left: 50%; transform: translate(-50%, -50%)，不需要知道元素尺寸。\nGrid 也能居中：父元素 display: grid; place-items: center，是最短的写法。',
        code: '/* Flex 居中 */\n.parent { display: flex; justify-content: center; align-items: center; }\n\n/* Grid 居中（最短） */\n.parent { display: grid; place-items: center; }',
        lang: 'css'
      },
      {
        heading: '两栏三栏与粘性页脚',
        text: '两栏布局（左固定右自适应）用 Flex 最简单：左边写死宽度，右边 flex: 1 占满剩余。三栏（左右固定中间自适应）同理，中间列 flex: 1，这就是经典的“圣杯布局”。\n粘性页脚指内容不足一屏时页脚贴在底部，内容很多时页脚被自然顶下去。做法是：body 设为 min-height: 100vh 的纵向 Flex 容器，主内容区 flex: 1，页脚就会被推到底部。\n这些都是面试高频题，用 Flex 十几行代码就能优雅解决。',
        code: '/* 两栏：左固定右自适应 */\n.row { display: flex; }\n.side { width: 200px; }\n.main { flex: 1; }\n\n/* 粘性页脚 */\nbody { display: flex; flex-direction: column; min-height: 100vh; }\n.content { flex: 1; }',
        lang: 'css'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: '不定宽高的弹窗要水平垂直居中，最常用的方案是？',
        options: ['margin: 0 auto', '绝对定位 + transform: translate(-50%, -50%)', 'text-align: center', 'float: left'],
        answer: 1,
        explanation: '绝对定位到 50% 再反向平移自身一半，不需要知道元素的具体宽高。'
      },
      {
        type: 'judge',
        question: '粘性页脚要求内容不足一屏时页脚在底部，内容超出一屏时页脚跟随内容下移。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '这正是粘性页脚的定义，用 min-height: 100vh 加 flex: 1 即可实现。'
      },
      {
        type: 'single',
        question: 'Flex 两栏布局中，让右栏占满剩余宽度的写法是？',
        options: ['width: 100%', 'flex: 1', 'float: right', 'width: auto 一定行'],
        answer: 1,
        explanation: 'flex: 1 表示瓜分主轴剩余空间，是自适应列的标准写法。'
      },
      {
        type: 'multiple',
        question: '以下哪些方案可以实现水平垂直居中？（多选）',
        options: ['Flex 双 center', 'display: grid; place-items: center', '绝对定位 + translate(-50%, -50%)', 'float: left + margin'],
        answer: [0, 1, 2],
        explanation: '前三种都是常用居中方案；float 用于左右贴边，无法实现居中。'
      },
      {
        type: 'single',
        question: '想让行内元素水平居中，应该给父元素设置？',
        options: ['text-align: center', 'margin: 0 auto', 'flex: 1', 'float: center'],
        answer: 0,
        explanation: '行内元素水平居中用 text-align: center；margin: 0 auto 只适用于定宽块级元素。'
      },
      {
        type: 'single',
        question: '实现粘性页脚时，body 应该设置为？',
        options: ['height: 100px', 'min-height: 100vh 的纵向 Flex 容器', 'position: fixed', 'overflow: hidden'],
        answer: 1,
        explanation: 'body 设为 min-height: 100vh 的纵向 flex 容器，主内容 flex: 1，页脚自然被推到底部。'
      },
      {
        type: 'judge',
        question: 'margin: 0 auto 让块级元素水平居中的前提是该元素设置了宽度。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '不定宽的块级元素默认占满整行，auto 外边距没有可分配的空间。'
      },
      {
        type: 'judge',
        question: '三栏“圣杯布局”中，中间自适应列应该写死宽度。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '左右两列写死宽度，中间列用 flex: 1 占满剩余空间，才是自适应。'
      },
      {
        type: 'multiple',
        question: '用 Grid 实现水平垂直居中，需要哪些设置？（多选）',
        options: ['display: grid', 'place-items: center', '这是最短的居中写法之一', '必须配合 float'],
        answer: [0, 1, 2],
        explanation: 'display: grid 加 place-items: center 两行搞定，是最短写法，与 float 无关。'
      },
      {
        type: 'multiple',
        question: '关于水平居中的分情况处理，以下说法正确的有？（多选）',
        options: ['行内元素给父元素加 text-align: center', '定宽块级元素用 margin: 0 auto', 'Flex 可同时实现水平和垂直居中', 'float 是居中的最优方案'],
        answer: [0, 1, 2],
        explanation: '居中要分场景选方案；float 用于贴边和环绕，不能实现居中。'
      }
    ]
  },
  {
    id: 'css3-15',
    title: 'CSS 单位与 BFC',
    summary: 'px/em/rem/vw 区别与 BFC 原理',
    minutes: 12,
    sections: [
      {
        heading: '常用单位对比',
        text: 'px 是绝对单位，大小固定，适合边框、小图标等精确尺寸。\nem 相对于父元素的 font-size，父元素 16px 时 1.5em 就是 24px；嵌套多层后会层层放大，容易失控。\nrem 相对于根元素 html 的 font-size，全站统一参照，是可伸缩布局的主力单位。\nvw/vh 相对于视口宽高，100vw 就是整个视口宽，适合全屏横幅和移动端适配。\n经验法则：布局用 rem 或 vw，字号用 rem 或 px，边框用 px，尽量别在嵌套结构里用 em。',
        code: 'html { font-size: 16px; }\n.title { font-size: 1.5rem; }  /* 24px，跟着根字号走 */\n.banner { height: 50vh; }     /* 视口高度的一半 */\n.card { border: 1px solid #ddd; } /* 边框用 px */',
        lang: 'css'
      },
      {
        heading: 'BFC：块级格式化上下文',
        text: 'BFC 是一个独立的渲染区域，里面的元素布局不受外界影响，也不会影响外界。\n触发 BFC 的常见方式：overflow 非 visible（如 hidden）、float 非 none、display: flow-root、position 为 absolute 或 fixed。\nBFC 能解决三大经典问题：一、清除浮动——BFC 容器会计算浮动子元素的高度；二、阻止外边距合并——把相邻元素放进不同 BFC；三、防止文字环绕——给文字容器触发 BFC，它就不再贴着浮动元素。\n理解 BFC 后，很多“灵异”布局问题都能想通。',
        code: '/* 触发 BFC，清除浮动 */\n.parent { overflow: hidden; }\n\n/* 更现代的写法，无副作用 */\n.parent { display: flow-root; }',
        lang: 'css'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: 'rem 单位的参照基准是？',
        options: ['父元素字号', '根元素 html 的字号', '视口宽度', '浏览器默认字号不可变'],
        answer: 1,
        explanation: 'rem（root em）始终相对于根元素的 font-size，全站统一，不受嵌套影响。'
      },
      {
        type: 'judge',
        question: 'em 单位在多层嵌套时会逐级累积，容易导致尺寸失控。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'em 相对父元素字号，嵌套时层层相乘，所以复杂结构中更推荐 rem。'
      },
      {
        type: 'single',
        question: '下列哪种方式最现代且无副作用地触发 BFC？',
        options: ['float: left', 'display: flow-root', 'position: fixed', 'overflow: visible'],
        answer: 1,
        explanation: 'display: flow-root 专为创建 BFC 而生，不像 overflow 或 float 那样带有额外副作用。'
      },
      {
        type: 'multiple',
        question: 'BFC 可以解决哪些布局问题？（多选）',
        options: ['浮动导致的高度塌陷', '相邻元素的外边距合并', '文字环绕浮动元素', '选择器优先级冲突'],
        answer: [0, 1, 2],
        explanation: '清除浮动、阻止 margin 合并、防止环绕是 BFC 的三大用途；优先级冲突由层叠规则决定，与 BFC 无关。'
      },
      {
        type: 'single',
        question: '100vw 等于多少？',
        options: ['视口高度的一半', '整个视口宽度', '根字号的 100 倍', '100px'],
        answer: 1,
        explanation: 'vw 相对于视口宽度，100vw 正好铺满整个视口宽，适合全屏横幅。'
      },
      {
        type: 'single',
        question: '父元素 font-size 为 16px 时，1.5em 等于多少？',
        options: ['16px', '24px', '32px', '1.5px'],
        answer: 1,
        explanation: 'em 相对父元素字号，16 × 1.5 = 24px。'
      },
      {
        type: 'judge',
        question: 'px 是绝对单位，适合边框、小图标等精确尺寸。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'px 大小固定不随环境变化，用于需要精确控制的场景正合适。'
      },
      {
        type: 'judge',
        question: '经验法则建议在嵌套结构中大量使用 em 单位。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '恰恰相反：em 嵌套会层层放大失控，嵌套结构里应避免，优先用 rem。'
      },
      {
        type: 'multiple',
        question: '以下哪些方式可以触发 BFC？（多选）',
        options: ['overflow: hidden', 'float: left', 'display: flow-root', 'color: red'],
        answer: [0, 1, 2],
        explanation: 'overflow 非 visible、float 非 none、flow-root、absolute/fixed 都能触发 BFC；color 不能。'
      },
      {
        type: 'multiple',
        question: '关于 vw / vh 单位，以下说法正确的有？（多选）',
        options: ['相对于视口的宽高', '适合全屏横幅', '适合移动端适配', '与视口大小无关'],
        answer: [0, 1, 2],
        explanation: 'vw/vh 就是视口单位，视口变化它们就跟着变，所以适合全屏与移动端场景。'
      }
    ]
  }
]
