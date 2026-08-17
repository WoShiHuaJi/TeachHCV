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
      }
    ]
  }
];
