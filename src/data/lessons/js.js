export default [
  {
    id: 'js-01',
    title: '变量与数据类型',
    summary: '认识变量、常量和基本数据类型',
    minutes: 12,
    sections: [
      {
        heading: '变量的声明',
        text: '在 JavaScript 中，我们用 let 声明变量，用 const 声明常量。let 声明的变量可以重新赋值，const 声明的常量一旦赋值就不能再改。建议优先使用 const，确实需要重新赋值时才用 let。旧的 var 也能声明变量，但容易产生意外问题，初学阶段先不要用。',
        code: 'let age = 18;\nage = 19; // 可以重新赋值\nconst name = "小明";\n// name = "小红"; 这一行会报错',
        lang: 'js'
      },
      {
        heading: '基本数据类型',
        text: 'JavaScript 常见的基本类型有：数字（number），如 3、3.14；字符串（string），用引号包裹的文字，如 "hello"；布尔值（boolean），只有 true 和 false；还有 undefined（声明了但没赋值）和 null（主动表示空值）。可以用 typeof 查看一个值的类型，注意 typeof null 的结果是 "object"，这是历史遗留问题。',
        code: 'typeof 3;        // "number"\ntypeof "hi";     // "string"\ntypeof true;     // "boolean"\ntypeof undefined // "undefined"',
        lang: 'js'
      },
      {
        heading: '类型转换与拼接',
        text: '不同类型做运算时会自动转换类型。最常见的是字符串和数字相加：只要有一边是字符串，+ 就变成拼接。比如 "1" + 2 得到 "12" 而不是 3。如果想让数字正常相加，可以用 Number() 或 + 把字符串转成数字，也可以用 String() 把数字转成字符串。',
        code: '"1" + 2;         // "12"\nNumber("1") + 2; // 3\nString(5) + "分"; // "5分"',
        lang: 'js'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: '下列哪种方式适合声明一个不会改变的数据？',
        options: ['let', 'const', 'var', '不需要声明'],
        answer: 1,
        explanation: 'const 声明的常量不能重新赋值，适合保存不会改变的数据。'
      },
      {
        type: 'single',
        question: '表达式 "1" + 2 的结果是？',
        options: ['3', '"12"', 'NaN', '报错'],
        answer: 1,
        explanation: '只要有一边是字符串，+ 就变成字符串拼接，所以结果是 "12"。'
      },
      {
        type: 'judge',
        question: 'typeof null 的结果是 "null"。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: 'typeof null 的结果是 "object"，这是 JavaScript 的一个历史遗留问题。'
      },
      {
        type: 'judge',
        question: 'let 声明的变量可以重新赋值。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'let 声明的变量可以多次赋值，与 const 不同。'
      },
      {
        type: 'multiple',
        question: '以下哪些是 JavaScript 的基本数据类型？（多选）',
        options: ['string', 'number', 'array', 'boolean'],
        answer: [0, 1, 3],
        explanation: 'array 是对象不是基本类型，string/number/boolean 都是基本类型。'
      }
    ]
  },
  {
    id: 'js-02',
    title: '运算符与流程控制',
    summary: '学会比较、判断与循环执行',
    minutes: 15,
    sections: [
      {
        heading: '常用运算符',
        text: '算术运算符有 +、-、*、/ 和 %（取余数）。比较运算符有 ==、===、>、< 等。特别注意：== 会自动转换类型再比较，1 == "1" 为 true；=== 是严格相等，类型不同直接返回 false。实际开发中建议始终使用 ===，避免意外的类型转换。逻辑运算符有 &&（并且）、||（或者）、!（取反）。',
        code: '1 == "1";  // true，类型被转换\n1 === "1"; // false，类型不同\n5 % 2;     // 1，取余数\ntrue && false; // false',
        lang: 'js'
      },
      {
        heading: 'if 条件判断',
        text: 'if 语句根据条件决定是否执行代码。基本结构是：if (条件) { ... } else { ... }。多个分支可以用 else if。条件会被转成布尔值，0、空字符串、null、undefined 都被视为 false（假值），其余大多视为 true。',
        code: 'let score = 85;\nif (score >= 90) {\n  console.log("优秀");\n} else if (score >= 60) {\n  console.log("及格");\n} else {\n  console.log("不及格");\n}',
        lang: 'js'
      },
      {
        heading: 'for 循环',
        text: 'for 循环用来重复执行代码，结构是：for (初始化; 条件; 每次结束后的操作) { 循环体 }。只要条件为 true，循环体就会反复执行。用 break 可以提前跳出循环，用 continue 可以跳过本次直接进入下一次。',
        code: 'for (let i = 0; i < 3; i++) {\n  console.log("第 " + i + " 次");\n}\n// 依次输出：第 0 次、第 1 次、第 2 次',
        lang: 'js'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: '下列哪个比较运算符不会自动转换类型？',
        options: ['==', '===', '!=', '<'],
        answer: 1,
        explanation: '=== 是严格相等，类型不同直接返回 false，不会做类型转换。'
      },
      {
        type: 'single',
        question: 'for (let i = 0; i < 3; i++) 的循环体一共执行几次？',
        options: ['2 次', '3 次', '4 次', '无限次'],
        answer: 1,
        explanation: 'i 依次为 0、1、2，条件 i < 3 成立三次，i 变成 3 后循环结束。'
      },
      {
        type: 'single',
        question: '表达式 7 % 3 的结果是？',
        options: ['2', '1', '3', '0'],
        answer: 1,
        explanation: '% 是取余运算，7 除以 3 商 2 余 1，所以结果是 1。'
      },
      {
        type: 'judge',
        question: '在 if 条件中，数字 0 会被当作 false 处理。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '0、空字符串、null、undefined 都是假值，在条件判断中会被视为 false。'
      },
      {
        type: 'multiple',
        question: '以下哪些值在 if 条件中会被视为 false？（多选）',
        options: ['0', '空字符串 ""', 'undefined', '字符串 "0"'],
        answer: [0, 1, 2],
        explanation: '0、空字符串、null、undefined 都是假值；非空字符串 "0" 是真值。'
      }
    ]
  },
  {
    id: 'js-03',
    title: '函数基础',
    summary: '把可复用的代码装进函数里',
    minutes: 14,
    sections: [
      {
        heading: '函数的定义与调用',
        text: '函数是一段可以重复使用的代码。用 function 关键字定义：function 函数名(参数) { 代码 }。定义后必须调用才会执行，调用方式是函数名加括号，并把需要的参数传进去。函数可以有多个参数，参数之间用逗号隔开。',
        code: 'function sayHello(name) {\n  console.log("你好，" + name);\n}\nsayHello("小明"); // 你好，小明\nsayHello("小红"); // 你好，小红',
        lang: 'js'
      },
      {
        heading: '返回值 return',
        text: '函数可以用 return 返回一个结果，调用处就能拿到这个结果继续使用。return 之后的代码不会再执行。如果函数没有写 return，默认返回 undefined。把计算逻辑放进函数并返回结果，是编程中最常见的做法。',
        code: 'function add(a, b) {\n  return a + b;\n}\nlet total = add(3, 5);\nconsole.log(total); // 8',
        lang: 'js'
      },
      {
        heading: '箭头函数',
        text: '箭头函数是 ES6 引入的简洁写法：const 函数名 = (参数) => { 代码 }。当函数体只有一句 return 时，可以省略花括号和 return。它特别适合作为回调函数使用，比如后面要学的数组方法里会经常见到。',
        code: 'const add = (a, b) => a + b;\nadd(2, 4); // 6\n\nconst square = n => n * n;\nsquare(5); // 25',
        lang: 'js'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: 'function f() { return 1; return 2; } 调用 f() 的结果是？',
        options: ['1', '2', 'undefined', '报错'],
        answer: 0,
        explanation: 'return 之后的代码不会执行，函数遇到第一个 return 就结束，返回 1。'
      },
      {
        type: 'single',
        question: '箭头函数 const f = n => n * 2 中，f(4) 的结果是？',
        options: ['2', '6', '8', '报错'],
        answer: 2,
        explanation: '省略花括号时表达式自动作为返回值，4 * 2 等于 8。'
      },
      {
        type: 'judge',
        question: '函数定义后如果不调用，里面的代码也会自动执行。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '函数必须被调用才会执行，定义本身只是创建函数。'
      },
      {
        type: 'judge',
        question: '没有写 return 的函数，调用后返回 undefined。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '函数默认返回值是 undefined，除非显式使用 return。'
      },
      {
        type: 'multiple',
        question: '以下哪些是箭头函数的特点？（多选）',
        options: ['写法比 function 更简洁', '函数体只有一句 return 时可省略花括号和 return', '必须用 function 关键字定义', '适合作为回调函数使用'],
        answer: [0, 1, 3],
        explanation: '箭头函数用 => 定义，写法简洁，可省略花括号和 return，常用作回调。'
      }
    ]
  },
  {
    id: 'js-04',
    title: '数组与常用方法',
    summary: '用数组管理一组有序数据',
    minutes: 16,
    sections: [
      {
        heading: '数组的创建与访问',
        text: '数组用方括号 [ ] 表示，用来存放一组有序的数据，元素之间用逗号隔开。通过下标访问元素，下标从 0 开始。length 属性表示数组长度。数组可以随时添加或删除元素：push 在末尾添加，pop 删除末尾，unshift 和 shift 则操作开头。',
        code: 'let fruits = ["苹果", "香蕉", "橙子"];\nfruits[0];        // "苹果"\nfruits.length;    // 3\nfruits.push("葡萄"); // 末尾添加\nfruits.pop();     // 删除末尾',
        lang: 'js'
      },
      {
        heading: '遍历：forEach 与 map',
        text: 'forEach 用于遍历数组，对每个元素执行一次传入的函数。map 也是遍历，但它会把每次的返回值收集成一个新数组，原数组不变。需要"生成新数组"时用 map，只是逐个处理时用 forEach。',
        code: 'let nums = [1, 2, 3];\nnums.forEach(n => console.log(n)); // 输出 1 2 3\nlet doubled = nums.map(n => n * 2);\n// doubled 是 [2, 4, 6]，nums 不变',
        lang: 'js'
      },
      {
        heading: '查找与过滤',
        text: 'filter 根据条件筛选出满足的元素，返回新数组；find 返回第一个满足条件的元素；includes 判断数组是否包含某个值。indexOf 能找到元素的下标，找不到返回 -1。这些方法都不会修改原数组（除了部分如 sort、splice，初学先留意区分）。',
        code: 'let scores = [45, 80, 92, 55];\nscores.filter(s => s >= 60); // [80, 92]\nscores.find(s => s >= 60);   // 80\nscores.includes(92);         // true',
        lang: 'js'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: 'let a = [10, 20, 30]; 那么 a[1] 的值是？',
        options: ['10', '20', '30', 'undefined'],
        answer: 1,
        explanation: '数组下标从 0 开始，a[1] 是第二个元素，值为 20。'
      },
      {
        type: 'single',
        question: '想把数组 [1, 2, 3] 变成 [2, 4, 6]，最合适的方法是？',
        options: ['filter', 'find', 'map', 'push'],
        answer: 2,
        explanation: 'map 会把每个元素经过函数处理后的结果组成新数组，正好适合这种映射需求。'
      },
      {
        type: 'single',
        question: '[5, 12, 8].filter(n => n > 6) 的结果是？',
        options: ['[12, 8]', '[5]', '12', '[5, 12, 8]'],
        answer: 0,
        explanation: 'filter 返回所有满足条件的元素组成的新数组，大于 6 的是 12 和 8。'
      },
      {
        type: 'judge',
        question: '数组的 push 方法会在数组开头添加元素。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: 'push 在末尾添加元素，在开头添加应该用 unshift。'
      },
      {
        type: 'multiple',
        question: '以下哪些数组方法不会修改原数组？（多选）',
        options: ['map', 'filter', 'push', 'find'],
        answer: [0, 1, 3],
        explanation: 'map、filter、find 都返回新结果而不改原数组，push 会直接修改原数组。'
      }
    ]
  },
  {
    id: 'js-05',
    title: '对象与 JSON',
    summary: '用键值对描述一个事物的属性',
    minutes: 14,
    sections: [
      {
        heading: '对象的创建与访问',
        text: '对象用花括号 { } 表示，由一个个"键: 值"组成，键（属性名）是字符串，值可以是任意类型。访问属性用点语法 obj.name，也可以用方括号 obj["name"]，方括号适合属性名存在变量里的情况。对象可以嵌套，也可以包含函数（这时称为方法）。',
        code: 'let user = {\n  name: "小明",\n  age: 18,\n  greet: function() { console.log("你好"); }\n};\nuser.name;   // "小明"\nuser["age"]; // 18',
        lang: 'js'
      },
      {
        heading: '对象的常用操作',
        text: '给对象添加属性直接赋值即可，比如 user.city = "北京"。Object.keys() 返回所有属性名组成的数组，Object.values() 返回所有值组成的数组。删除属性用 delete 关键字。用 in 关键字可以判断对象是否拥有某个属性。',
        code: 'let user = { name: "小明" };\nuser.age = 18;      // 添加属性\nObject.keys(user);  // ["name", "age"]\n"name" in user;     // true',
        lang: 'js'
      },
      {
        heading: 'JSON 与转换',
        text: 'JSON 是一种通用的数据格式，和对象写法很像，但属性名必须用双引号，且不能包含函数。网络传输的数据大多是 JSON 字符串。JSON.stringify() 把对象转成 JSON 字符串，JSON.parse() 把 JSON 字符串还原成对象，这一对方法在实际开发中非常常用。',
        code: 'let user = { name: "小明", age: 18 };\nlet str = JSON.stringify(user);\n// str 是字符串 \'{"name":"小明","age":18}\'\nlet obj = JSON.parse(str);\nobj.name; // "小明"',
        lang: 'js'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: 'let o = { a: 1 }; 下面哪种方式能正确读取属性 a？',
        options: ['o.a', 'o(a)', 'o->a', 'o::a'],
        answer: 0,
        explanation: '访问对象属性用点语法 o.a 或方括号语法 o["a"]。'
      },
      {
        type: 'single',
        question: 'JSON.parse(\'{"x": 5}\') 的结果是？',
        options: ['字符串', '数字 5', '一个对象，x 的值为 5', '报错'],
        answer: 2,
        explanation: 'JSON.parse 把 JSON 字符串解析成对应的 JavaScript 对象。'
      },
      {
        type: 'judge',
        question: 'JSON 格式的属性名必须用双引号包裹。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'JSON 是严格的格式，属性名必须用双引号，值也不能是函数。'
      },
      {
        type: 'judge',
        question: 'Object.keys({a:1, b:2}) 返回的是 [1, 2]。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: 'Object.keys 返回的是属性名数组 ["a", "b"]，值要用 Object.values。'
      },
      {
        type: 'multiple',
        question: '以下关于对象与 JSON 的说法哪些是正确的？（多选）',
        options: ['JSON 的属性名必须用双引号', 'JSON 中可以包含函数', 'JSON.stringify 把对象转成 JSON 字符串', 'JSON.parse 把 JSON 字符串还原成对象'],
        answer: [0, 2, 3],
        explanation: 'JSON 不能包含函数；stringify 和 parse 分别负责对象与 JSON 字符串的互转。'
      }
    ]
  },
  {
    id: 'js-06',
    title: 'DOM 操作与事件',
    summary: '让 JavaScript 操控网页元素',
    minutes: 18,
    sections: [
      {
        heading: '获取与修改元素',
        text: 'DOM 是浏览器把网页转成的一棵对象树，JavaScript 可以通过它操作页面。document.querySelector("选择器") 获取匹配的第一个元素，选择器写法和 CSS 一样，比如 "#app" 按 id 查找，".item" 按 class 查找。拿到元素后，用 textContent 改文字，用 innerHTML 改内部 HTML。',
        code: 'const title = document.querySelector("#title");\ntitle.textContent = "新标题";\ntitle.style.color = "red";',
        lang: 'js'
      },
      {
        heading: '创建与插入元素',
        text: 'document.createElement("标签名") 可以创建一个新元素，此时它还不显示在页面上，需要用 appendChild 或 append 把它插入到某个父元素里。反过来，用 remove() 可以删除一个元素。这套"创建、设置、插入"的流程是动态更新页面的基础。',
        code: 'const li = document.createElement("li");\nli.textContent = "新列表项";\ndocument.querySelector("ul").appendChild(li);',
        lang: 'js'
      },
      {
        heading: '事件监听',
        text: '事件是用户在页面上的动作，比如点击、输入、滚动。用 addEventListener 监听事件：元素.addEventListener("事件类型", 处理函数)。当事件发生时，处理函数会被自动调用，参数 event 里包含事件的信息，比如点击位置、按下的键等。这就是网页能"互动"起来的核心原理。',
        code: 'const btn = document.querySelector("#btn");\nbtn.addEventListener("click", function(event) {\n  console.log("按钮被点击了");\n});',
        lang: 'js'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: '要获取 id 为 app 的元素，正确的选择器写法是？',
        options: ['document.querySelector("app")', 'document.querySelector("#app")', 'document.querySelector(".app")', 'document.getElement("app")'],
        answer: 1,
        explanation: 'querySelector 使用 CSS 选择器，按 id 查找要加 # 前缀。'
      },
      {
        type: 'single',
        question: '想让按钮被点击时执行某个函数，应该使用？',
        options: ['btn.click = fn', 'btn.addEventListener("click", fn)', 'btn.onclick("click", fn)', 'btn.addListener(fn)'],
        answer: 1,
        explanation: 'addEventListener 是标准的事件监听方式，第一个参数是事件类型，第二个是处理函数。'
      },
      {
        type: 'judge',
        question: 'document.createElement 创建的元素会立即显示在页面上。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '创建的元素还在内存中，必须用 appendChild 等方法插入到文档里才会显示。'
      },
      {
        type: 'judge',
        question: '修改元素的 textContent 可以改变它在页面上显示的文字。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'textContent 对应元素的纯文本内容，修改它页面文字会即时更新。'
      },
      {
        type: 'multiple',
        question: '以下哪些属于常见的 DOM 操作？（多选）',
        options: ['用 querySelector 获取元素', '用 appendChild 把新元素插入页面', '用 addEventListener 监听点击事件', '用 JSON.parse 修改元素文字'],
        answer: [0, 1, 2],
        explanation: 'JSON.parse 用于解析 JSON 字符串，与 DOM 操作无关；其余三个都是常见 DOM 操作。'
      }
    ]
  }
];
