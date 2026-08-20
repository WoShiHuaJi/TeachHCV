export default [
  {
    id: 'browser-01',
    title: '浏览器渲染流程',
    summary: '从 HTML 到屏幕像素的流水线',
    minutes: 14,
    sections: [
      {
        heading: '解析：构建 DOM 树与 CSSOM 树',
        text: '浏览器拿到 HTML 后，先逐行解析生成 DOM 树；遇到 CSS 则解析生成 CSSOM 树（样式规则树）。注意：CSS 不会阻塞 HTML 解析，但会阻塞渲染；而遇到没有 async/defer 的 script 标签时，浏览器会暂停 HTML 解析，先下载并执行 JS，因为 JS 可能修改 DOM。\n这就是面试常问的结论：CSS 放头部、JS 放底部，或者给 script 加 defer/async。defer 是延迟到文档解析完再按顺序执行，async 是下载完立即执行、顺序不保证。',
        code: '<!-- CSS 放 head，尽早加载样式 -->\n<link rel="stylesheet" href="main.css">\n\n<!-- defer：文档解析完后按顺序执行，不阻塞解析 -->\n<script src="app.js" defer></script>',
        lang: 'html'
      },
      {
        heading: '渲染树、布局与绘制',
        text: 'DOM 树和 CSSOM 树合并成渲染树（Render Tree），只包含可见节点：display:none 的元素不进入渲染树，但 visibility:hidden 的元素会（它仍占据空间）。\n接着进入布局阶段（Layout/Reflow），计算每个节点的精确位置和大小；然后是绘制（Paint），把节点画成像素；现代浏览器还会分层（Layer），由合成线程把各层合成最终画面（Composite），比如 transform 动画只发生在合成阶段，效率很高。\n面试口诀：解析 -> DOM/CSSOM -> 渲染树 -> 布局 -> 绘制 -> 合成。',
        code: '/* display:none 不进渲染树 */\n.hide { display: none; }\n/* transform 动画只触发合成，性能最好 */\n.box { transform: translateX(100px); }',
        lang: 'css'
      },
      {
        heading: '关键渲染路径与优化思路',
        text: '从请求 HTML 到首次渲染完成的路径叫“关键渲染路径”，优化的目标就是缩短它：减少关键资源数量、减小资源体积（压缩）、优化加载顺序。\n常见手段：CSS 内联少量首屏样式、JS 加 defer、图片懒加载、使用 CDN。白屏时间长的常见原因就是 CSS/JS 阻塞了渲染。面试中把这条路径讲清楚，再举一两个优化手段，就是完整答案。'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: '关于浏览器解析过程，下列说法正确的是？',
        options: ['CSS 会阻塞 HTML 的解析', '无 defer/async 的 script 会阻塞 HTML 解析', 'async 脚本保证按书写顺序执行', 'display:none 的元素会进入渲染树'],
        answer: 1,
        explanation: '普通 script 会暂停 HTML 解析先执行 JS；CSS 只阻塞渲染不阻塞解析；async 执行顺序不保证；display:none 不进入渲染树。'
      },
      {
        type: 'judge',
        question: 'visibility:hidden 的元素会进入渲染树并参与布局，只是不可见。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。visibility:hidden 的元素仍占据布局空间，会进入渲染树；display:none 才不会。'
      },
      {
        type: 'single',
        question: '浏览器渲染流程的正确顺序是？',
        options: ['布局 -> 构建 DOM -> 绘制', '构建 DOM/CSSOM -> 渲染树 -> 布局 -> 绘制', '绘制 -> 布局 -> 构建渲染树', '构建渲染树 -> 绘制 -> 布局'],
        answer: 1,
        explanation: '正确顺序是：解析生成 DOM 和 CSSOM，合并成渲染树，再布局计算几何信息，最后绘制合成。'
      },
      {
        type: 'multiple',
        question: '以下哪些属于优化首屏渲染速度的手段？（多选）',
        options: ['script 标签添加 defer', 'CSS 文件放在 head 中尽早加载', '所有 JS 都内联到 HTML 里', '图片使用懒加载'],
        answer: [0, 1, 3],
        explanation: 'defer 避免 JS 阻塞解析，CSS 前置避免渲染阻塞，懒加载减少首屏请求；把所有 JS 内联会让 HTML 体积过大，反而不利。'
      },
      {
        type: 'single',
        question: '关于 defer 和 async 的区别，下列说法正确的是？',
        options: ['defer 脚本下载完立即执行，顺序不保证', 'defer 延迟到文档解析完后按顺序执行，async 下载完立即执行、顺序不保证', 'async 脚本在下载阶段就会阻塞 HTML 解析', '两者的执行时机和顺序保证完全相同'],
        answer: 1,
        explanation: 'defer 在文档解析完后按顺序执行；async 下载完立即执行、执行时会阻塞解析、顺序不保证。'
      },
      {
        type: 'single',
        question: '页面白屏时间过长，最常见的原因是？',
        options: ['图片分辨率太低', 'CSS 或 JS 阻塞了首次渲染', 'HTML 标签没有语义化', '浏览器版本太新'],
        answer: 1,
        explanation: '白屏时间长的常见原因就是关键渲染路径上的 CSS/JS 阻塞了渲染。'
      },
      {
        type: 'judge',
        question: '对元素使用 transform 做动画通常只触发合成阶段，不需要重新布局和绘制。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。transform 动画由合成线程处理，跳过布局和绘制阶段，性能很高。'
      },
      {
        type: 'judge',
        question: '只要 HTML 解析完成，即使 CSSOM 尚未构建完，页面也会立即渲染出带样式的内容。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。渲染树由 DOM 和 CSSOM 合并而成，CSS 会阻塞渲染，CSSOM 未构建完成页面不会渲染。'
      },
      {
        type: 'multiple',
        question: '关于 HTML/CSS/JS 的加载与解析，下列说法正确的有？（多选）',
        options: ['无 defer/async 的 script 会暂停 HTML 解析', 'CSS 会阻塞页面渲染', 'defer 脚本按书写顺序执行', 'async 脚本保证按书写顺序执行'],
        answer: [0, 1, 2],
        explanation: '普通 script 阻塞解析，CSS 阻塞渲染，defer 保证顺序；async 下载完立即执行，顺序不保证。'
      },
      {
        type: 'multiple',
        question: '缩短关键渲染路径的常见手段包括？（多选）',
        options: ['减少关键资源的数量', '压缩资源减小体积', '内联少量首屏关键 CSS', '把全部 CSS 和 JS 都内联进 HTML'],
        answer: [0, 1, 2],
        explanation: '减少关键资源、压缩体积、内联少量首屏样式都能缩短关键渲染路径；全部内联会让 HTML 体积过大，反而拖慢首屏。'
      },
      {
        type: 'single',
        question: '关于渲染树（Render Tree）的构建，下列说法正确的是？',
        options: ['包含 HTML 中的所有节点（含 head、script）', '由 DOM 与 CSSOM 合并而成，只包含可见节点', 'display:none 的元素会进入渲染树参与布局', '渲染树构建完成后才会开始解析 HTML'],
        answer: 1,
        explanation: '渲染树由 DOM 与 CSSOM 合并而成，只包含可见节点；display:none、head 等非可见节点不会进入渲染树。'
      },
      {
        type: 'multiple',
        question: '以下哪些情况会导致 HTML 解析被阻塞？（多选）',
        options: ['遇到没有 defer/async 的同步 script 标签', 'async 脚本下载完成后立即执行时', '加载外部 CSS 文件', '使用 defer 的脚本下载时'],
        answer: [0, 1],
        explanation: '同步 script 会暂停解析先执行 JS；async 脚本执行时也会阻塞解析；CSS 只阻塞渲染不阻塞解析；defer 脚本下载和执行都不阻塞解析。'
      }
    ]
  },
  {
    id: 'browser-02',
    title: '重绘与回流（重排）',
    summary: '弄懂回流重绘及性能优化',
    minutes: 12,
    sections: [
      {
        heading: '什么是回流与重绘',
        text: '回流（Reflow/重排）：当元素的几何属性（宽、高、位置、字体大小）发生变化，或增删 DOM 节点时，浏览器要重新计算布局，这个过程叫回流。\n重绘（Repaint）：当元素的外观（颜色、背景、visibility）改变但不影响布局时，只需重新绘制，不需要重新计算位置。\n关键结论：回流必定引起重绘，重绘不一定回流。回流开销远大于重绘，因为布局计算会波及父元素乃至整棵树。',
        code: '/* 触发回流：改变几何属性 */\nbox.style.width = \'200px\';\n/* 只触发重绘：只改外观 */\nbox.style.backgroundColor = \'red\';',
        lang: 'js'
      },
      {
        heading: '哪些操作会强制触发回流',
        text: '除了修改几何样式，读取某些属性也会强制浏览器立即回流（刷新渲染队列）以保证读到最新值，常见的有：offsetWidth、offsetHeight、getBoundingClientRect()、scrollTop 等。\n面试经典坑：在循环里一边改样式一边读 offsetTop，会导致每轮循环都强制同步回流，页面卡顿严重。正确做法是批量修改，或先集中读取再集中写入。',
        code: '// 错误示范：每轮循环都触发强制回流\nfor (var i = 0; i < 100; i++) {\n  box.style.width = box.offsetWidth + 1 + \'px\';\n}\n// 优化：先读取，再统一修改\nvar w = box.offsetWidth;\nbox.style.width = (w + 100) + \'px\';',
        lang: 'js'
      },
      {
        heading: '如何减少回流与重绘',
        text: '常用优化手段：1. 批量修改样式，用 class 替换多次 style 赋值；2. 使用 DocumentFragment 或先 display:none 批量操作 DOM 后再显示；3. 让频繁动画的元素脱离文档流（absolute/fixed）并开启 GPU 加速；4. transform 和 opacity 的动画只触发合成，不触发回流和重绘，性能最好。\n这就是为什么做动画优先用 transform 而不是改 left/top，是面试高频考点。',
        code: '/* 推荐：transform 只触发合成，性能好 */\n.move { transform: translateX(100px); transition: transform .3s; }\n/* 不推荐：改 left 每帧都触发回流 */\n/* .move { left: 100px; } */',
        lang: 'css'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: '关于回流和重绘，下列说法正确的是？',
        options: ['重绘一定会引起回流', '回流一定会引起重绘', '两者开销相同', '修改颜色会触发回流'],
        answer: 1,
        explanation: '回流是重新计算布局，之后必然重绘；重绘只改外观，不一定会回流。修改背景色只触发重绘。'
      },
      {
        type: 'single',
        question: '下列哪个 CSS 属性的动画性能最好，不会触发回流和重绘？',
        options: ['width', 'top', 'transform', 'margin'],
        answer: 2,
        explanation: 'transform（和 opacity）的动画由合成线程处理，不触发回流和重绘；width、top、margin 都会触发回流。'
      },
      {
        type: 'judge',
        question: '读取元素的 offsetWidth 可能强制浏览器立即执行回流。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。读取 offsetWidth 等布局信息时，浏览器必须刷新渲染队列返回最新值，会强制同步回流。'
      },
      {
        type: 'multiple',
        question: '以下哪些做法可以减少回流？（多选）',
        options: ['通过切换 class 批量修改样式', '在循环中反复读取 offsetTop 并修改样式', '使用 DocumentFragment 批量插入节点', '动画元素使用 transform 而非 left/top'],
        answer: [0, 2, 3],
        explanation: 'class 批量修改、DocumentFragment 离线操作、transform 合成动画都能减少回流；循环中读写交替会反复强制回流。'
      },
      {
        type: 'single',
        question: '在循环中需要读取布局信息并修改样式时，推荐的优化做法是？',
        options: ['每轮循环先改样式再读 offsetTop', '先集中读取布局信息，再集中批量修改', '给每个元素都加 position: absolute', '把循环改成 setTimeout 递归'],
        answer: 1,
        explanation: '读写交替会让每轮循环都强制同步回流；先集中读取、再集中写入，可以把回流次数降到最低。'
      },
      {
        type: 'single',
        question: '对于需要频繁做动画的元素，下列处理方式最合理的是？',
        options: ['用 left/top 做位移动画', '使其脱离文档流（absolute/fixed）并用 transform 做动画', '动画过程中不断修改 width/height', '每帧都读取一次 getBoundingClientRect'],
        answer: 1,
        explanation: '脱离文档流可减少回流波及的范围，transform 动画只触发合成，是性能最好的组合方案。'
      },
      {
        type: 'judge',
        question: '向 DOM 中新增或删除节点会触发回流。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。增删 DOM 节点会改变文档结构，浏览器必须重新计算布局。'
      },
      {
        type: 'judge',
        question: '重绘的开销通常比回流更大，因为绘制像素比计算布局更耗时。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。回流要重新计算布局且会波及父元素甚至整棵树，开销远大于重绘。'
      },
      {
        type: 'multiple',
        question: '下列哪些操作会触发回流？（多选）',
        options: ['修改元素的 width', '修改元素的 font-size', '修改元素的 background-color', '向 body 中插入一个新节点'],
        answer: [0, 1, 3],
        explanation: '宽高、字体大小等几何属性变化和增删节点都会触发回流；背景色只影响外观，只触发重绘。'
      },
      {
        type: 'multiple',
        question: '下列哪些修改只会触发重绘，不会触发回流？（多选）',
        options: ['修改 color', '修改 visibility', '修改 margin', '修改元素的背景颜色'],
        answer: [0, 1, 3],
        explanation: '颜色、背景、visibility 只改变外观不影响布局，只触发重绘；margin 是几何属性，会触发回流。'
      },
      {
        type: 'single',
        question: '需要对一个元素批量修改多个几何样式时，下列做法最优的是？',
        options: ['逐条修改 style 属性', '先把元素设为 display:none，修改完再显示', '每改一条就读一次 offsetWidth 确认生效', '用 setInterval 分多次修改'],
        answer: 1,
        explanation: 'display:none 的元素不在渲染树中，修改其样式不触发回流，集中修改完再显示只产生一次回流；逐条改 style 会触发多次回流。'
      },
      {
        type: 'judge',
        question: '使用 opacity 做透明度渐变动画与 transform 一样，通常只触发合成阶段，不触发回流和重绘。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。transform 和 opacity 的动画由合成线程处理，是性能最好的两类动画属性。'
      }
    ]
  },
  {
    id: 'browser-03',
    title: '事件循环：宏任务与微任务',
    summary: '吃透 Event Loop 输出顺序题',
    minutes: 15,
    sections: [
      {
        heading: '为什么需要事件循环',
        text: 'JavaScript 是单线程的，一次只能做一件事。为了不因网络请求、定时器而卡死，浏览器把异步任务交给其他线程处理，完成后再通过事件循环（Event Loop）把回调交还给主线程执行。\n调用栈执行同步代码；异步任务完成后进入任务队列排队。事件循环的规则是：调用栈空了就去看任务队列，有任务就取来执行。',
        code: "console.log('同步1');\nsetTimeout(function () {\n  console.log('定时器回调');\n}, 0);\nconsole.log('同步2');\n// 输出：同步1 -> 同步2 -> 定时器回调\n// 即使延迟 0ms，也要等同步代码执行完",
        lang: 'js'
      },
      {
        heading: '宏任务与微任务',
        text: '任务队列分两类：宏任务（macrotask）包括 script 整体代码、setTimeout、setInterval、I/O、UI 渲染等；微任务（microtask）包括 Promise.then/catch/finally、queueMicrotask、MutationObserver。\n执行顺序规则（务必背熟）：先执行同步代码（它是第一个宏任务），然后清空当前所有微任务，再取一个宏任务执行，执行完再清空微任务……如此循环。每一轮宏任务执行完，浏览器可能进行页面渲染。',
        code: "setTimeout(function () { console.log('宏任务'); }, 0);\nPromise.resolve().then(function () { console.log('微任务'); });\nconsole.log('同步');\n// 输出：同步 -> 微任务 -> 宏任务",
        lang: 'js'
      },
      {
        heading: '经典输出顺序题',
        text: '面试必考题就是给一段混合代码问输出顺序。解题步骤：1. 从头执行同步代码；2. 遇到 setTimeout 放进宏任务队列；3. 遇到 Promise，new Promise 里的代码是同步执行的，then 回调进微任务队列；4. 同步执行完后依次清空微任务（微任务里新产生的微任务也继续执行）；5. 再执行下一个宏任务。\n记住口诀：同步先行，微任务优先于宏任务，每轮宏任务后清空微任务。',
        code: "console.log('1');\nsetTimeout(function () { console.log('2'); }, 0);\nnew Promise(function (resolve) {\n  console.log('3');\n  resolve();\n}).then(function () { console.log('4'); });\nconsole.log('5');\n// 输出：1 -> 3 -> 5 -> 4 -> 2",
        lang: 'js'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: "执行下列代码，输出顺序是？\nconsole.log('A');\nsetTimeout(function(){ console.log('B'); }, 0);\nPromise.resolve().then(function(){ console.log('C'); });\nconsole.log('D');",
        options: ['A D C B', 'A B C D', 'A D B C', 'A C D B'],
        answer: 0,
        explanation: '同步代码先输出 A、D；微任务 Promise.then 优先于宏任务 setTimeout 执行，所以是 A D C B。'
      },
      {
        type: 'single',
        question: "new Promise(function(resolve){ console.log('P'); resolve(); }) 中的 console.log('P') 何时执行？",
        options: ['同步立即执行', '作为微任务稍后执行', '作为宏任务稍后执行', '调用 then 时才执行'],
        answer: 0,
        explanation: 'Promise 的 executor 函数是同步执行的，只有 then/catch 的回调才进入微任务队列。'
      },
      {
        type: 'judge',
        question: 'setTimeout(fn, 0) 的回调会先于 Promise.then 的回调执行。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。每轮宏任务执行完会先清空所有微任务，setTimeout 属于宏任务，要等微任务清空后才执行。'
      },
      {
        type: 'multiple',
        question: '以下哪些属于微任务（microtask）？（多选）',
        options: ['Promise.then 回调', 'setTimeout 回调', 'queueMicrotask', 'MutationObserver 回调'],
        answer: [0, 2, 3],
        explanation: 'Promise.then、queueMicrotask、MutationObserver 都是微任务；setTimeout 是宏任务。'
      },
      {
        type: 'single',
        question: "执行下列代码，输出顺序是？\nconsole.log('start');\nnew Promise(function (resolve) {\n  console.log('promise');\n  resolve();\n}).then(function () { console.log('then'); });\nconsole.log('end');",
        options: ['start promise end then', 'start end promise then', 'start promise then end', 'promise start end then'],
        answer: 0,
        explanation: 'new Promise 的 executor 同步执行打印 promise，同步代码再打印 end，最后执行微任务 then，输出 start promise end then。'
      },
      {
        type: 'single',
        question: "执行下列代码，输出顺序是？\nsetTimeout(function () {\n  console.log('1');\n  setTimeout(function () { console.log('2'); }, 0);\n}, 0);\nsetTimeout(function () { console.log('3'); }, 0);",
        options: ['1 2 3', '1 3 2', '3 1 2', '2 1 3'],
        answer: 1,
        explanation: '两个外层 setTimeout 按顺序进入宏任务队列，先执行打印 1；它内部嵌套的 setTimeout 要等下一轮宏任务，所以先打印 3 再打印 2。'
      },
      {
        type: 'single',
        question: "执行下列代码，输出顺序是？\nsetTimeout(function () {\n  console.log('timeout');\n  Promise.resolve().then(function () { console.log('promise'); });\n}, 0);\nPromise.resolve().then(function () { console.log('micro'); });\nconsole.log('sync');",
        options: ['sync micro timeout promise', 'sync timeout micro promise', 'sync micro promise timeout', 'sync timeout promise micro'],
        answer: 0,
        explanation: '先输出同步 sync，再清空微任务 micro；执行宏任务 timeout 时产生的微任务 promise 会在该宏任务结束后立即清空，所以是 sync micro timeout promise。'
      },
      {
        type: 'judge',
        question: 'Promise.then 回调中新产生的微任务，会在本轮清空微任务阶段继续执行，而不是等下一个宏任务之后。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。清空微任务时会把执行过程中新产生的微任务也一并执行完，直到微任务队列为空。'
      },
      {
        type: 'judge',
        question: 'setTimeout(fn, 0) 表示回调会在 0 毫秒后立刻精确执行。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。0ms 只是最小延迟，回调要进宏任务队列排队，等同步代码和微任务执行完才有机会执行，实际延迟还受浏览器最小间隔限制。'
      },
      {
        type: 'multiple',
        question: '关于宏任务，下列说法正确的有？（多选）',
        options: ['setTimeout、setInterval 的回调是宏任务', 'script 整体代码是第一个宏任务', '每执行完一个宏任务会先清空微任务队列', 'Promise.then 的回调属于宏任务'],
        answer: [0, 1, 2],
        explanation: 'setTimeout/setInterval 和 script 整体都是宏任务，每轮宏任务后清空微任务；Promise.then 是微任务。'
      },
      {
        type: 'single',
        question: "执行下列代码，输出顺序是？\nasync function fn() {\n  console.log('A');\n  await Promise.resolve();\n  console.log('B');\n}\nfn();\nconsole.log('C');",
        options: ['A B C', 'A C B', 'C A B', 'A C 不输出 B'],
        answer: 1,
        explanation: '调用 fn 先同步打印 A；await 之后的代码 console.log(B) 进入微任务队列；继续同步打印 C，最后清空微任务打印 B，输出 A C B。'
      },
      {
        type: 'single',
        question: "执行下列代码，输出顺序是？\nsetTimeout(function () { console.log('T'); }, 0);\nasync function fn() {\n  console.log('S');\n  await null;\n  console.log('E');\n}\nfn();\nconsole.log('D');",
        options: ['S D E T', 'S E D T', 'S D T E', 'D S E T'],
        answer: 0,
        explanation: 'fn 内 await 前同步打印 S，await 后的 E 进微任务；同步代码打印 D；清空微任务打印 E；宏任务 setTimeout 最后打印 T，输出 S D E T。'
      },
      {
        type: 'single',
        question: "执行下列代码，输出顺序是？\nconsole.log('1');\nsetTimeout(function () {\n  console.log('2');\n  Promise.resolve().then(function () { console.log('3'); });\n}, 0);\nsetTimeout(function () { console.log('4'); }, 0);",
        options: ['1 2 4 3', '1 2 3 4', '1 4 2 3', '1 3 2 4'],
        answer: 1,
        explanation: '同步打印 1；第一个宏任务打印 2 并产生微任务 3，该宏任务结束后立即清空微任务打印 3；最后执行第二个宏任务打印 4，输出 1 2 3 4。'
      },
      {
        type: 'single',
        question: "执行下列代码，输出顺序是？\nasync function f1() {\n  console.log('f1 start');\n  await f2();\n  console.log('f1 end');\n}\nasync function f2() { console.log('f2'); }\nconsole.log('script start');\nf1();\nconsole.log('script end');",
        options: ['script start f1 start f2 f1 end script end', 'script start f1 start f2 script end f1 end', 'f1 start f2 script start script end f1 end', 'script start f1 start f1 end f2 script end'],
        answer: 1,
        explanation: '同步打印 script start；f1 同步打印 f1 start，await f2() 时 f2 同步执行打印 f2，f1 end 进微任务；同步打印 script end，最后微任务打印 f1 end。'
      },
      {
        type: 'multiple',
        question: '下列哪些代码的回调或后续逻辑会进入微任务队列？（多选）',
        options: ['Promise.resolve().then(fn)', 'queueMicrotask(fn)', 'setTimeout(fn, 0)', 'async 函数中 await 表达式之后的代码'],
        answer: [0, 1, 3],
        explanation: 'Promise.then、queueMicrotask、await 之后的代码都是微任务；setTimeout 的回调是宏任务。'
      },
      {
        type: 'judge',
        question: 'async 函数中，await 表达式之后的代码会暂停执行，并作为微任务进入微任务队列。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。await 会挂起 async 函数的后续执行，后续代码相当于被包装进 Promise.then，按微任务规则调度。'
      }
    ]
  },
  {
    id: 'browser-04',
    title: 'HTTP 协议基础',
    summary: '请求报文、方法与状态码',
    minutes: 13,
    sections: [
      {
        heading: 'HTTP 是什么与请求报文',
        text: 'HTTP 是超文本传输协议，基于 TCP，采用“请求-响应”模式，默认端口 80。它是无状态的：服务器不记得上一次请求是谁发的，所以才有了 Cookie、Session 等机制。\n一个请求报文包含：请求行（方法 + URL + 协议版本）、请求头（Host、Content-Type、Cookie 等）、空行、请求体（GET 通常没有，POST 放提交的数据）。响应报文对应：状态行、响应头、空行、响应体。',
        code: 'POST /login HTTP/1.1\nHost: example.com\nContent-Type: application/json\n\n{"username":"tom","password":"123456"}',
        lang: 'http'
      },
      {
        heading: '常用请求方法与 GET/POST 区别',
        text: '常用方法：GET 获取资源，POST 提交数据，PUT 整体更新，DELETE 删除，PATCH 部分更新，HEAD 只取响应头。\n面试必考 GET 与 POST 的区别：1. GET 参数在 URL 上，POST 在请求体中；2. GET 有长度限制（URL 限制），POST 理论上没有；3. GET 会被浏览器缓存、留在历史记录，POST 不会；4. GET 是幂等的（多次执行结果相同），POST 不是；5. 从语义上讲 GET 用于查询，POST 用于修改。',
        code: '// GET：参数拼在 URL，可被缓存\nfetch(\'/api/list?page=1\');\n// POST：数据放请求体\nfetch(\'/api/login\', {\n  method: \'POST\',\n  body: JSON.stringify({ name: \'tom\' })\n});',
        lang: 'js'
      },
      {
        heading: '必背状态码',
        text: '状态码分五类：1xx 信息提示；2xx 成功（200 OK 成功，204 无内容）；3xx 重定向（301 永久重定向，302 临时重定向，304 资源未修改走缓存）；4xx 客户端错误（400 请求错误，401 未登录认证，403 无权限，404 资源不存在）；5xx 服务器错误（500 服务器内部错误，502 网关错误，504 网关超时）。\n面试常考 301 与 302 的区别（永久 vs 临时，搜索引擎会更新 301 的地址），以及 401 与 403 的区别（未认证 vs 已认证但没权限）。'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: '状态码 304 的含义是？',
        options: ['永久重定向', '资源未修改，可使用缓存', '请求的资源不存在', '服务器内部错误'],
        answer: 1,
        explanation: '304 Not Modified 表示协商缓存命中，资源没有变化，浏览器直接使用本地缓存。'
      },
      {
        type: 'single',
        question: '关于 GET 和 POST 的区别，下列说法错误的是？',
        options: ['GET 参数在 URL 中，POST 在请求体中', 'GET 请求可被浏览器缓存', 'POST 比 GET 天然更安全，抓包也看不到数据', 'GET 是幂等的，POST 不是'],
        answer: 2,
        explanation: 'POST 只是参数不在 URL 上，抓包依然能看到明文数据，真正安全要靠 HTTPS，所以“POST 天然更安全”是常见误区。'
      },
      {
        type: 'judge',
        question: 'HTTP 是无状态协议，服务器默认无法区分两次请求是否来自同一用户。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。HTTP 本身无状态，需要借助 Cookie、Session、Token 等机制维持用户状态。'
      },
      {
        type: 'multiple',
        question: '以下哪些状态码表示客户端方面的错误（4xx）？（多选）',
        options: ['401 未认证', '404 资源不存在', '500 服务器错误', '403 禁止访问'],
        answer: [0, 1, 3],
        explanation: '401、403、404 都属于 4xx 客户端错误；500 是 5xx 服务器错误。'
      },
      {
        type: 'single',
        question: '一个完整的 HTTP 请求报文通常由哪几部分组成？',
        options: ['请求行、请求头、空行、请求体', '只有 URL 和参数', '状态行、响应头、响应体', '请求头、Cookie、IP 地址'],
        answer: 0,
        explanation: '请求报文 = 请求行（方法 + URL + 版本）+ 请求头 + 空行 + 请求体；状态行、响应体属于响应报文。'
      },
      {
        type: 'single',
        question: '关于 301 和 302 的区别，下列说法正确的是？',
        options: ['301 是临时重定向，302 是永久重定向', '301 是永久重定向，搜索引擎会更新收录地址；302 是临时重定向', '两者完全等价，只是写法不同', '301 只能用于 HTTPS 站点跳转'],
        answer: 1,
        explanation: '301 表示资源永久迁移，搜索引擎会更新地址；302 是临时跳转，原地址仍然有效。'
      },
      {
        type: 'single',
        question: '用户已经登录，但没有权限访问某资源时，服务器应返回的状态码是？',
        options: ['401', '403', '404', '500'],
        answer: 1,
        explanation: '401 是未认证（没登录），403 是已认证但没有权限；404 是资源不存在，500 是服务器内部错误。'
      },
      {
        type: 'judge',
        question: 'HEAD 请求只返回响应头，不返回响应体。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。HEAD 与 GET 类似，但服务器只返回响应头，常用于探测资源是否存在或获取元信息。'
      },
      {
        type: 'judge',
        question: '状态码 502 表示网关错误，通常是网关后面的后端服务无响应或异常。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。502 Bad Gateway 说明网关/代理从上游服务拿到了无效响应，常见于后端服务挂掉。'
      },
      {
        type: 'multiple',
        question: '以下哪些 HTTP 方法是幂等的（多次执行结果相同）？（多选）',
        options: ['GET', 'PUT', 'DELETE', 'POST'],
        answer: [0, 1, 2],
        explanation: 'GET、PUT、DELETE 都是幂等的：多次执行效果与一次相同；POST 每次调用都可能创建新资源，不幂等。'
      },
      {
        type: 'single',
        question: 'HTTP 响应报文的状态行不包含以下哪项？',
        options: ['协议版本', '状态码', '状态描述（如 OK）', '响应体数据'],
        answer: 3,
        explanation: '状态行 = 协议版本 + 状态码 + 状态描述；响应体在空行之后，不属于状态行。'
      },
      {
        type: 'multiple',
        question: '关于 GET 请求，下列说法正确的有？（多选）',
        options: ['参数拼接在 URL 中', '会被浏览器缓存并保留在历史记录中', '语义上用于获取资源且是幂等的', '适合用于上传大文件'],
        answer: [0, 1, 2],
        explanation: 'GET 参数在 URL、可缓存、幂等；URL 有长度限制，上传大文件应使用 POST/PUT 把数据放在请求体中。'
      },
      {
        type: 'single',
        question: '状态码 204 的含义是？',
        options: ['请求成功但没有响应体内容', '永久重定向', '请求参数错误', '服务器处理超时'],
        answer: 0,
        explanation: '204 No Content 表示请求处理成功，但响应没有实体内容，常用于删除、更新等不需要返回数据的操作。'
      },
      {
        type: 'judge',
        question: 'HTTP 默认端口是 80，HTTPS 默认端口是 443。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。URL 中省略端口时，HTTP 默认走 80，HTTPS 默认走 443。'
      }
    ]
  },
  {
    id: 'browser-05',
    title: 'HTTP 缓存策略',
    summary: '强缓存与协商缓存全解析',
    minutes: 13,
    sections: [
      {
        heading: '强缓存：不发请求直接用',
        text: '强缓存命中时，浏览器根本不向服务器发请求，直接使用本地缓存，状态码显示 200 (from cache)。\n由两个响应头控制：Cache-Control（HTTP/1.1，优先级更高），常用值 max-age=3600 表示 1 小时内有效，no-cache 表示跳过强缓存直接进入协商缓存，no-store 表示完全不缓存；Expires（HTTP/1.0）是一个绝对过期时间点，受本地时间影响，已逐步被 Cache-Control 取代。',
        code: 'Cache-Control: max-age=3600\nCache-Control: no-cache   // 需要协商缓存\nCache-Control: no-store   // 完全不缓存',
        lang: 'http'
      },
      {
        heading: '协商缓存：问服务器还能不能用',
        text: '强缓存过期后进入协商缓存：浏览器带上缓存标识发请求，服务器判断资源是否变化，没变化就返回 304，浏览器继续用本地缓存；变了就返回 200 和新资源。\n两对标识：1. Last-Modified（服务器告知最后修改时间）与 If-Modified-Since（浏览器回传该时间）；2. ETag（资源的唯一指纹）与 If-None-Match（浏览器回传指纹）。ETag 优先级更高、更精确，因为 Last-Modified 最小单位是秒，且文件改了又改回来时间会变但内容没变。',
        code: '// 服务器响应头\nETag: "abc123"\nLast-Modified: Mon, 01 Jan 2024 00:00:00 GMT\n// 浏览器下次请求自动带上\nIf-None-Match: "abc123"',
        lang: 'http'
      },
      {
        heading: '整体流程与实战策略',
        text: '完整流程：浏览器先看 Cache-Control/Expires 判断强缓存，没过期直接用；过期了就带 If-None-Match/If-Modified-Since 发请求，服务器返回 304 则继续用缓存，返回 200 则更新缓存。\n实战策略：HTML 文件用 no-cache 保证总能拿到最新页面；JS/CSS 等静态资源由打包工具生成带 hash 的文件名，配合 max-age 设很长的时间（如一年），内容变了 hash 就变、文件名就变，缓存自然失效。这是面试常考的工程化答案。'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: '强缓存命中时，浏览器会？',
        options: ['发请求并收到 304', '不发请求，直接使用本地缓存', '发请求并收到 200', '清空缓存重新下载'],
        answer: 1,
        explanation: '强缓存命中时浏览器不发任何请求，直接使用本地缓存，显示 200 (from cache)。'
      },
      {
        type: 'single',
        question: '协商缓存中，与 ETag 配对使用的请求头是？',
        options: ['If-Modified-Since', 'If-None-Match', 'Cache-Control', 'Expires'],
        answer: 1,
        explanation: '浏览器用 If-None-Match 回传 ETag 指纹；Last-Modified 对应的是 If-Modified-Since。'
      },
      {
        type: 'judge',
        question: 'Cache-Control: no-cache 的意思是完全不缓存任何内容。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。no-cache 是跳过强缓存、每次都要走协商缓存验证；完全不缓存应使用 no-store。'
      },
      {
        type: 'multiple',
        question: '以下哪些响应头与 HTTP 缓存相关？（多选）',
        options: ['Cache-Control', 'ETag', 'Last-Modified', 'Content-Length'],
        answer: [0, 1, 2],
        explanation: 'Cache-Control 控制强缓存，ETag 和 Last-Modified 用于协商缓存；Content-Length 只表示响应体长度。'
      },
      {
        type: 'single',
        question: '相比 Last-Modified，ETag 作为缓存标识的优势是？',
        options: ['ETag 是绝对时间，不受时区影响', 'ETag 是内容指纹，精度更高，不受秒级精度和文件改回问题影响', 'ETag 能让浏览器不发请求', 'ETag 可以完全替代 Cache-Control'],
        answer: 1,
        explanation: 'Last-Modified 最小单位是秒，且文件改了又改回来时间会变但内容没变；ETag 基于内容生成指纹，更精确，优先级也更高。'
      },
      {
        type: 'single',
        question: '对于打包工具生成的带 hash 文件名的 JS/CSS 静态资源，推荐的缓存策略是？',
        options: ['Cache-Control: no-store', 'Cache-Control: max-age 设置很长的时间（如一年）', '不设置任何缓存响应头', 'Cache-Control: no-cache，每次都协商'],
        answer: 1,
        explanation: '内容变化时 hash 文件名会变，缓存自然失效，因此可以放心设置超长的 max-age，让静态资源长期命中强缓存。'
      },
      {
        type: 'judge',
        question: '协商缓存命中时，服务器返回 304 且响应体为空，浏览器继续使用本地缓存。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。304 Not Modified 表示资源没有变化，响应体为空，浏览器直接复用本地缓存。'
      },
      {
        type: 'judge',
        question: 'Expires 使用绝对过期时间，因此会受客户端本地时间不准的影响。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。Expires 是 HTTP/1.0 的绝对时间点，本地时间被修改会导致缓存判断出错，所以 HTTP/1.1 用 Cache-Control 取代它。'
      },
      {
        type: 'multiple',
        question: '关于 Cache-Control，下列说法正确的有？（多选）',
        options: ['max-age=3600 表示资源在 1 小时内命中强缓存', 'no-store 表示完全不缓存', '优先级高于 Expires', 'no-cache 表示浏览器完全不缓存该资源'],
        answer: [0, 1, 2],
        explanation: 'max-age 控制强缓存时长，no-store 完全不缓存，Cache-Control 优先级高于 Expires；no-cache 是跳过强缓存走协商，并非不缓存。'
      },
      {
        type: 'multiple',
        question: '关于强缓存与协商缓存的整体流程，下列说法正确的有？（多选）',
        options: ['强缓存命中时浏览器不发请求', '强缓存过期后会带上缓存标识发协商请求', '服务器返回 304 时浏览器下载新资源更新缓存', '服务器返回 200 时浏览器更新本地缓存'],
        answer: [0, 1, 3],
        explanation: '强缓存命中直接用本地缓存；过期后带 If-None-Match 等标识协商，返回 304 继续用旧缓存，返回 200 才下载新资源更新缓存。'
      },
      {
        type: 'single',
        question: '用户在页面按 F5 普通刷新时，浏览器通常会如何处理缓存？',
        options: ['完全不使用任何缓存', '跳过强缓存，带上缓存标识发起协商缓存验证', '强缓存和协商缓存都直接使用', '清空整个浏览器缓存'],
        answer: 1,
        explanation: 'F5 刷新时浏览器会让强缓存失效（请求头带 max-age=0 一类标识），转而走协商缓存验证，服务器多数返回 304；Ctrl+F5 才是完全不用缓存。'
      },
      {
        type: 'multiple',
        question: '以下哪些响应适合设置 Cache-Control: no-store 完全不缓存？（多选）',
        options: ['包含用户隐私信息的接口响应', '银行交易类数据', 'CDN 上的公共静态图片', '实时行情类接口数据'],
        answer: [0, 1, 3],
        explanation: '隐私数据、交易数据、实时数据都不应被缓存，适合 no-store；公共静态资源恰恰应该设置超长 max-age 充分利用缓存。'
      },
      {
        type: 'judge',
        question: '强缓存命中时，浏览器显示的状态码仍是 200（from cache），而不是 304。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。304 只在协商缓存命中时由服务器返回；强缓存不发请求，直接以 200 (from cache) 展示。'
      },
      {
        type: 'single',
        question: '以下哪种情况浏览器会发起协商缓存验证请求？',
        options: ['强缓存未过期', '强缓存已过期且本地存有 ETag/Last-Modified 标识', '服务器响应为 no-store', '首次访问没有任何缓存'],
        answer: 1,
        explanation: '强缓存过期后，浏览器会带上 If-None-Match / If-Modified-Since 发起协商请求；未过期直接用缓存，no-store 和首次访问则走正常完整请求。'
      }
    ]
  },
  {
    id: 'browser-06',
    title: 'HTTPS 与 Web 安全基础',
    summary: '加密原理与 XSS、CSRF 防御',
    minutes: 15,
    sections: [
      {
        heading: 'HTTPS 如何加密',
        text: 'HTTP 是明文传输，容易被窃听和篡改。HTTPS = HTTP + TLS/SSL，默认端口 443。\n核心机制是“非对称加密交换密钥 + 对称加密传输数据”：握手时服务器出示证书，浏览器验证证书合法性（防止中间人攻击），然后用服务器的公钥加密一个随机生成的会话密钥发给服务器，之后双方用这个对称密钥加密通信。这样既解决了对称密钥安全分发的问题，又保持了对称加密的高效率。',
        code: '// 简化流程\n// 1. 客户端发起请求，服务器返回证书(含公钥)\n// 2. 浏览器验证证书，生成随机会话密钥\n// 3. 用公钥加密会话密钥发给服务器\n// 4. 双方之后用会话密钥对称加密通信',
        lang: 'js'
      },
      {
        heading: 'XSS 跨站脚本攻击',
        text: 'XSS 是攻击者把恶意脚本注入到页面中执行，窃取 Cookie、冒充用户。常见类型：存储型（恶意脚本存进数据库，如评论区）、反射型（脚本藏在 URL 参数里被直接输出到页面）。\n防御手段：1. 对用户输入和输出进行转义（把 < 转成 &lt; 等）；2. 不要直接用 innerHTML 渲染用户内容，用 textContent；3. 设置 Cookie 的 HttpOnly 属性，让 JS 无法读取；4. 使用 CSP 内容安全策略限制脚本来源。',
        code: "// 危险：用户输入被当 HTML 执行\nbox.innerHTML = userInput;\n// 安全：只作为纯文本插入\nbox.textContent = userInput;",
        lang: 'js'
      },
      {
        heading: 'CSRF 跨站请求伪造',
        text: 'CSRF 是攻击者诱导已登录的用户访问恶意页面，该页面悄悄向目标网站发请求。因为浏览器会自动带上目标网站的 Cookie，服务器误以为是用户本人操作。\n防御手段：1. 关键请求校验 CSRF Token（攻击者拿不到 Token）；2. 检查 Referer/Origin 请求头；3. Cookie 设置 SameSite 属性，限制跨站携带；4. 重要操作要求二次验证。\n面试对比题：XSS 是“偷你的数据”（脚本在目标页面执行），CSRF 是“冒充你发请求”（利用你的登录态）。',
        code: '// Cookie 设置 SameSite，跨站请求不再携带\nSet-Cookie: sid=xxx; HttpOnly; SameSite=Strict; Secure',
        lang: 'http'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: 'HTTPS 传输数据时，真正的数据加密使用的是？',
        options: ['全程非对称加密', '全程对称加密（会话密钥）', '不加密', 'Base64 编码'],
        answer: 1,
        explanation: '握手阶段用非对称加密安全地交换会话密钥，之后的数据传输用对称加密，兼顾安全与性能。'
      },
      {
        type: 'single',
        question: '防御 XSS 攻击，下列做法正确的是？',
        options: ['用 innerHTML 渲染用户输入', '对用户输入输出进行转义，Cookie 加 HttpOnly', '把密码存在 localStorage', '关闭浏览器的同源策略'],
        answer: 1,
        explanation: '转义用户输入输出可阻止恶意脚本执行，HttpOnly 让 JS 读不到 Cookie；innerHTML 直接渲染用户内容是危险做法。'
      },
      {
        type: 'judge',
        question: 'CSRF 攻击之所以有效，是因为浏览器在跨站请求时会自动携带目标站点的 Cookie。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。CSRF 利用的正是浏览器自动携带 Cookie 的机制，让服务器误认为请求来自用户本人。'
      },
      {
        type: 'multiple',
        question: '以下哪些措施可以防御 CSRF 攻击？（多选）',
        options: ['校验 CSRF Token', 'Cookie 设置 SameSite 属性', '检查 Origin/Referer 请求头', '对用户输入做 HTML 转义'],
        answer: [0, 1, 2],
        explanation: 'Token、SameSite、Origin/Referer 校验都是 CSRF 防御手段；HTML 转义是防御 XSS 的手段。'
      },
      {
        type: 'single',
        question: '关于存储型 XSS，下列说法正确的是？',
        options: ['恶意脚本只存在于 URL 参数中', '恶意脚本被存入数据库，用户访问页面时被加载执行，如评论区注入', '必须诱导用户点击钓鱼链接才能触发', '只能由服务器管理员发起'],
        answer: 1,
        explanation: '存储型 XSS 把恶意脚本存进数据库（如评论、昵称），之后所有访问该页面的用户都会中招，危害比反射型更大。'
      },
      {
        type: 'single',
        question: '给 Cookie 设置 HttpOnly 属性的作用是？',
        options: ['让 Cookie 只通过 HTTPS 传输', '禁止 JavaScript 读取该 Cookie，缓解 XSS 窃取 Cookie', '让跨站请求不再携带该 Cookie', '对 Cookie 内容加密'],
        answer: 1,
        explanation: 'HttpOnly 让 document.cookie 读不到该 Cookie，即使发生 XSS 也难以窃取会话；HTTPS 传输靠 Secure，跨站携带靠 SameSite 控制。'
      },
      {
        type: 'judge',
        question: 'HTTPS 握手中浏览器验证服务器证书，是为了确认对方身份、防止中间人攻击。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。证书由可信 CA 签发，验证证书可以确认公钥确实属于目标服务器，防止中间人伪造。'
      },
      {
        type: 'judge',
        question: 'XSS 是冒充用户身份向服务器发请求，CSRF 是在目标页面中注入恶意脚本。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。正好说反了：XSS 是在目标页面注入恶意脚本窃取数据，CSRF 是利用用户登录态冒充用户发请求。'
      },
      {
        type: 'multiple',
        question: '以下哪些措施可以防御 XSS 攻击？（多选）',
        options: ['对用户输入和输出进行转义', '用 textContent 替代 innerHTML 渲染用户内容', '配置 CSP 内容安全策略限制脚本来源', '校验请求的 Referer 头'],
        answer: [0, 1, 2],
        explanation: '转义、textContent、CSP 都是 XSS 防御手段；校验 Referer 是防御 CSRF 的手段。'
      },
      {
        type: 'multiple',
        question: '关于 HTTPS，下列说法正确的有？（多选）',
        options: ['默认端口是 443', '证书用于验证服务器身份、防止中间人攻击', '握手阶段用非对称加密交换会话密钥', '数据传输全程使用非对称加密'],
        answer: [0, 1, 2],
        explanation: 'HTTPS 默认 443 端口，证书验证身份防中间人，非对称加密只用于握手交换密钥，之后的数据传输用对称加密。'
      },
      {
        type: 'single',
        question: '关于反射型 XSS，下列说法正确的是？',
        options: ['恶意脚本被存入数据库，所有访问者都会中招', '恶意脚本藏在 URL 参数中被页面直接输出执行，通常需要诱导用户点击链接', '只能攻击 IE 浏览器', '通过抓包篡改请求头实现'],
        answer: 1,
        explanation: '反射型 XSS 把恶意脚本放在 URL 参数里，服务器未做转义直接输出到页面而执行，常配合钓鱼链接诱导点击；存入数据库的是存储型 XSS。'
      },
      {
        type: 'multiple',
        question: '以下哪些 Cookie 属性与 Web 安全直接相关？（多选）',
        options: ['HttpOnly', 'Secure', 'SameSite', 'Max-Age'],
        answer: [0, 1, 2],
        explanation: 'HttpOnly 防止 JS 读取 Cookie（防 XSS 窃取），Secure 限定仅 HTTPS 传输，SameSite 限制跨站携带（防 CSRF）；Max-Age 只是过期时间，与安全无直接关系。'
      }
    ]
  },
  {
    id: 'browser-07',
    title: '跨域与 CORS',
    summary: '同源策略与常见解决方案',
    minutes: 14,
    sections: [
      {
        heading: '同源策略与什么是跨域',
        text: '同源策略是浏览器的安全基石：协议、域名、端口三者完全相同才算同源。比如 https://a.com 与 http://a.com（协议不同）、与 https://b.com（域名不同）、与 https://a.com:8080（端口不同）都是跨域。\n跨域时，AJAX 请求的响应会被浏览器拦截（注意：请求其实发出去了，是浏览器拦截了响应），同时 Cookie、localStorage、DOM 也不能跨域访问。需要跨域共享资源时，就要用 CORS 等方案。',
        code: '// 当前页面：https://a.com\nfetch(\'https://api.b.com/user\')\n  .then(function (res) { console.log(res); })\n  .catch(function () { console.log(\'被同源策略拦截\'); });',
        lang: 'js'
      },
      {
        heading: 'CORS 跨域资源共享',
        text: 'CORS 是官方跨域方案，核心在服务器设置响应头：Access-Control-Allow-Origin 指定允许的来源（* 表示任意，但带 Cookie 时不能用 *）。\n简单请求（GET/POST 等）直接发送；非简单请求（如 PUT、或带自定义头、Content-Type 为 json）会先发一个 OPTIONS 预检请求，服务器允许后才发正式请求。跨域携带 Cookie 还需服务器加 Access-Control-Allow-Credentials: true，前端 fetch 设置 credentials: \'include\'。',
        code: '// 服务器响应头\nAccess-Control-Allow-Origin: https://a.com\nAccess-Control-Allow-Credentials: true\n\n// 前端跨域携带 Cookie\nfetch(\'https://api.b.com/user\', { credentials: \'include\' });',
        lang: 'http'
      },
      {
        heading: 'JSONP 与代理方案',
        text: 'JSONP 利用 script 标签不受同源策略限制的特点：动态创建 script，把回调函数名拼在 URL 里，服务器返回“回调名(数据)”形式的 JS，加载后立即执行回调拿到数据。缺点：只支持 GET，且安全性较差，现代项目很少用。\n开发中最常用的是代理：webpack/vite 的 devServer.proxy 让开发服务器代为转发请求，浏览器访问的是同源地址；生产环境常用 Nginx 反向代理，把 /api 转发到后端服务，同样规避跨域。',
        code: '// JSONP 原理\nfunction callback(data) { console.log(data); }\nvar s = document.createElement(\'script\');\ns.src = \'https://api.b.com/list?cb=callback\';\ndocument.body.appendChild(s);\n// 服务器返回：callback([1,2,3])',
        lang: 'js'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: '下列哪一组 URL 与 https://www.a.com:443 属于同源？',
        options: ['http://www.a.com', 'https://api.a.com', 'https://www.a.com', 'https://www.a.com:8080'],
        answer: 2,
        explanation: '同源要求协议、域名、端口都相同。443 是 https 默认端口可省略；协议不同、子域名不同、端口不同都算跨域。'
      },
      {
        type: 'single',
        question: 'CORS 中，带自定义请求头的跨域请求在正式发送前会先发送什么？',
        options: ['GET 探测请求', 'OPTIONS 预检请求', 'HEAD 请求', '不需要任何额外请求'],
        answer: 1,
        explanation: '非简单请求会先发 OPTIONS 预检请求，服务器在响应头中声明允许的方法和头部，通过后才发正式请求。'
      },
      {
        type: 'judge',
        question: '跨域的 AJAX 请求根本没有发到服务器，是浏览器直接阻止了请求。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。跨域请求实际上已发送到服务器，服务器也返回了响应，是浏览器拦截了响应不给 JS 读取。'
      },
      {
        type: 'multiple',
        question: '以下哪些方案可以解决跨域问题？（多选）',
        options: ['服务器配置 CORS 响应头', 'JSONP', 'Nginx 反向代理 / devServer 代理', '给请求加上 Cache-Control 头'],
        answer: [0, 1, 2],
        explanation: 'CORS、JSONP、代理都是常见跨域方案；Cache-Control 是缓存控制头，与跨域无关。'
      },
      {
        type: 'single',
        question: '跨域请求需要携带 Cookie 时，必须满足的条件是？',
        options: ['服务器设置 Access-Control-Allow-Origin: * 即可', '服务器设置 Access-Control-Allow-Credentials: true 且 Allow-Origin 为具体来源，前端 fetch 设置 credentials: include', '前端设置 credentials 后无需服务器配合', '把请求方法改成 GET 就能携带'],
        answer: 1,
        explanation: '带凭证的跨域请求要求服务器 Allow-Credentials: true、Allow-Origin 必须是指定来源不能为 *，同时前端要设置 credentials: include。'
      },
      {
        type: 'single',
        question: '本地开发时解决跨域问题最常用的方式是？',
        options: ['使用 JSONP', '配置 webpack/vite 的 devServer.proxy 让开发服务器转发请求', '关闭浏览器的同源策略', '给请求头加上 Cache-Control'],
        answer: 1,
        explanation: '开发环境最常用 devServer.proxy：浏览器访问同源的开发服务器，由它代为转发到后端，从而规避跨域。'
      },
      {
        type: 'judge',
        question: '服务器设置 Access-Control-Allow-Origin: * 时，跨域请求仍然可以正常携带 Cookie。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。携带凭证时 Allow-Origin 不能为 *，必须指定具体来源，并配合 Allow-Credentials: true。'
      },
      {
        type: 'judge',
        question: 'script、img、link 等标签加载跨域资源本身不受同源策略限制。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。同源策略限制的是 AJAX 读取响应和跨域 DOM/存储访问，标签加载跨域资源是允许的，JSONP 正是利用了这一点。'
      },
      {
        type: 'multiple',
        question: '以下哪些请求属于非简单请求，会先触发 OPTIONS 预检？（多选）',
        options: ['PUT 请求', 'Content-Type 为 application/json 的 POST 请求', '携带自定义请求头的请求', '普通的 GET 请求'],
        answer: [0, 1, 2],
        explanation: 'PUT、JSON 类型的请求体、自定义请求头都属于非简单请求，会先发 OPTIONS 预检；普通 GET 是简单请求，直接发送。'
      },
      {
        type: 'multiple',
        question: '关于 JSONP，下列说法正确的有？（多选）',
        options: ['利用 script 标签不受同源策略限制的特点', '只支持 GET 请求', '服务器返回“回调函数名(数据)”形式的 JS', '适合用于任意包含敏感操作的接口'],
        answer: [0, 1, 2],
        explanation: 'JSONP 通过动态 script 标签 + 回调函数拿数据，只支持 GET 且安全性较差，不适合敏感接口。'
      },
      {
        type: 'single',
        question: '下列哪种跨域请求不会触发 OPTIONS 预检？',
        options: ['Content-Type 为 text/plain 的 POST 请求', 'Content-Type 为 application/json 的 POST 请求', '携带自定义请求头 X-Token 的请求', 'PUT 请求'],
        answer: 0,
        explanation: '简单请求（GET/POST，且 Content-Type 为 text/plain、form 等少数类型，无自定义头）直接发送；JSON、自定义头、PUT 都属于非简单请求，会触发预检。'
      },
      {
        type: 'judge',
        question: 'JSONP 可以用于向后端发送 POST 请求提交数据。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。JSONP 依赖 script 标签加载资源，而 script 的 src 只能发起 GET 请求，因此 JSONP 只支持 GET。'
      },
      {
        type: 'multiple',
        question: '生产环境中常用的跨域解决方案包括？（多选）',
        options: ['Nginx 反向代理转发接口请求', '服务器正确配置 CORS 响应头', '窗口间使用 postMessage 通信', '修改本机 hosts 文件指向后端'],
        answer: [0, 1, 2],
        explanation: 'Nginx 反向代理、CORS、postMessage 都是生产可用的跨域方案；改 hosts 只是本机调试手段，无法解决真实用户的跨域问题。'
      },
      {
        type: 'single',
        question: '关于同源策略的限制范围，下列哪项不受同源策略限制？',
        options: ['AJAX 读取跨域接口的响应', '跨域读写 localStorage', '跨域操作 iframe 中的 DOM', 'img 标签加载跨域图片'],
        answer: 3,
        explanation: '同源策略限制 AJAX 读响应、跨域存储和 DOM 访问；img/script/link 等标签加载跨域资源是允许的，这也是 JSONP 能工作的前提。'
      }
    ]
  },
  {
    id: 'browser-08',
    title: 'TCP/UDP 与三次握手、四次挥手',
    summary: '网络传输层面试必考题',
    minutes: 14,
    sections: [
      {
        heading: 'TCP 与 UDP 的区别',
        text: 'TCP 是面向连接的可靠传输：先建立连接再传数据，保证数据不丢失、不重复、按顺序到达，有拥塞控制，但开销大、速度相对慢。网页（HTTP）、文件传输、邮件都用 TCP。\nUDP 是无连接的不可靠传输：拿到数据直接发，不保证到达和顺序，但速度快、开销小，适合对实时性要求高、允许少量丢包的场景，比如视频直播、语音通话、DNS 查询。\n一句话记忆：TCP 可靠但慢，UDP 快但不可靠。',
        code: '// 常见协议归类\n// TCP：HTTP/HTTPS、FTP、SMTP(邮件)\n// UDP：DNS、视频直播、实时语音',
        lang: 'js'
      },
      {
        heading: '三次握手：建立连接',
        text: 'TCP 建立连接需要三次握手：第一次，客户端发 SYN（我想建立连接）；第二次，服务器回 SYN + ACK（我知道了，我也想建立）；第三次，客户端发 ACK（好的，开始传数据吧）。\n为什么不能两次？两次握手无法让服务器确认“客户端能收到我的消息”。比如客户端发了一个 SYN 后宕机，若两次握手就建立连接，服务器会白白等待浪费资源。三次握手保证了双方都能确认对方的发送和接收能力正常。',
        code: '客户端 --> SYN ----------> 服务器\n客户端 <-- SYN + ACK ----- 服务器\n客户端 --> ACK ----------> 服务器\n// 三次握手完成，开始传输数据',
        lang: 'js'
      },
      {
        heading: '四次挥手：断开连接',
        text: '断开连接需要四次挥手：第一次，客户端发 FIN（我数据发完了）；第二次，服务器回 ACK（知道了，但我还有数据没发完，稍等）；第三次，服务器数据发完后再发 FIN（我也发完了）；第四次，客户端回 ACK，并等待 2MSL 后正式关闭。\n为什么比握手多一次？因为收到 FIN 时服务器可能还有数据没发完，只能先回 ACK，等发完数据再单独发 FIN，ACK 和 FIN 不能合并。客户端等待 2MSL 是为了确保最后一个 ACK 能到达服务器，若丢失还能重传。'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: 'TCP 建立连接时，三次握手的正确顺序是？',
        options: ['SYN -> SYN+ACK -> ACK', 'ACK -> SYN -> SYN+ACK', 'SYN -> ACK -> FIN', 'SYN+ACK -> SYN -> ACK'],
        answer: 0,
        explanation: '客户端先发 SYN，服务器回 SYN+ACK，客户端再回 ACK，三次握手完成即可传数据。'
      },
      {
        type: 'single',
        question: '关于 UDP，下列说法正确的是？',
        options: ['面向连接，传输可靠', '无连接，不保证数据到达，但速度快', '建立连接需要三次握手', 'HTTP 协议基于 UDP 传输'],
        answer: 1,
        explanation: 'UDP 无连接、不可靠但开销小速度快，适合直播、语音、DNS 等场景；HTTP（TCP 时代）基于 TCP。'
      },
      {
        type: 'judge',
        question: 'TCP 断开连接时之所以要四次挥手，是因为服务器的 ACK 和 FIN 通常不能合并发送。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。收到 FIN 时服务器可能还有数据未发完，只能先回 ACK，数据发完后再单独发 FIN，所以比握手多一次。'
      },
      {
        type: 'multiple',
        question: '以下关于 TCP 的说法正确的有？（多选）',
        options: ['面向连接，传输可靠', '保证数据按顺序到达', '三次握手可防止失效的连接请求造成资源浪费', '开销比 UDP 小，速度更快'],
        answer: [0, 1, 2],
        explanation: 'TCP 面向连接、可靠、有序，三次握手能避免历史失效连接浪费服务器资源；但 TCP 开销比 UDP 大、速度相对慢。'
      },
      {
        type: 'single',
        question: '四次挥手中，客户端回复最后一个 ACK 后还要等待 2MSL，其目的是？',
        options: ['等待服务器把剩余数据发完', '确保最后一个 ACK 能到达服务器，若丢失服务器还可重传 FIN', '给双方留出冷却时间以节省资源', '等待 DNS 解析结果过期'],
        answer: 1,
        explanation: '最后一个 ACK 可能丢失，等待 2MSL 能保证若服务器未收到而重传 FIN 时客户端还在，可以重新回复 ACK，正常关闭连接。'
      },
      {
        type: 'single',
        question: '下列哪个场景更适合使用 UDP 而不是 TCP？',
        options: ['网页浏览', '文件下载', '视频直播', '邮件传输'],
        answer: 2,
        explanation: '视频直播对实时性要求高、允许少量丢包，适合 UDP；网页、文件、邮件都要求可靠传输，使用 TCP。'
      },
      {
        type: 'judge',
        question: '三次握手中的第二次，是服务器把 SYN 和 ACK 合并在一起发送给客户端。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。第二次握手服务器回复 SYN + ACK，既确认收到了客户端的 SYN，也表达自己的连接意愿，所以握手只需三次。'
      },
      {
        type: 'judge',
        question: 'UDP 提供拥塞控制和丢包重传机制，能保证数据可靠按序到达。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。UDP 无连接、不可靠，不保证到达和顺序，也没有拥塞控制与重传机制，这些正是 TCP 的特性。'
      },
      {
        type: 'multiple',
        question: '关于四次挥手，下列说法正确的有？（多选）',
        options: ['客户端先发送 FIN 表示自己的数据已发完', '服务器收到 FIN 后先回 ACK，数据发完后再单独发 FIN', '客户端最后回复 ACK 并等待 2MSL 后正式关闭', '服务器一收到 FIN 就立即关闭连接'],
        answer: [0, 1, 2],
        explanation: '挥手中 ACK 与 FIN 分开发送，所以是四次；服务器收到 FIN 时可能还有数据未发完，不会立即关闭。'
      },
      {
        type: 'multiple',
        question: '以下哪些应用或协议通常基于 TCP 传输？（多选）',
        options: ['HTTP/HTTPS', 'FTP 文件传输', 'SMTP 邮件', 'DNS 域名查询'],
        answer: [0, 1, 2],
        explanation: 'HTTP/HTTPS、FTP、SMTP 都要求可靠传输，基于 TCP；DNS 查询通常基于 UDP。'
      },
      {
        type: 'single',
        question: '四次挥手中，服务器向客户端发送 FIN 表示什么？',
        options: ['服务器收到了客户端的 FIN', '服务器自己的数据也全部发完，准备关闭连接', '服务器要求客户端立即断开', '服务器拒绝建立连接'],
        answer: 1,
        explanation: '服务器收到客户端 FIN 后先回 ACK；等自己剩余数据发完后再发 FIN，表示服务器方向也发完数据、准备关闭，之后客户端回 ACK 完成挥手。'
      },
      {
        type: 'judge',
        question: '相比 TCP，UDP 的首部开销更小，这也是它传输更快的原因之一。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。UDP 首部只有 8 字节，无连接管理、确认重传等机制，开销远小于 TCP（首部至少 20 字节），因此更快但不可靠。'
      }
    ]
  }
];
