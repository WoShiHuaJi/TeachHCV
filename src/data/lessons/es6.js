export default [
  {
    id: 'es6-01',
    title: 'let/const 与块级作用域',
    summary: '告别 var，掌握块级作用域',
    minutes: 12,
    sections: [
      {
        heading: '为什么要用 let 和 const',
        text: '在 ES6 之前，JavaScript 只有 var 来声明变量。var 有两个明显的问题：一是存在变量提升，声明前使用不会报错而是得到 undefined，容易掩盖错误；二是没有块级作用域，if、for 等代码块里声明的变量会泄漏到外部。\nES6 引入了 let 和 const，它们声明的变量只在当前代码块（一对花括号）内有效，而且必须先声明后使用，让代码更安全、更好理解。',
        code: 'if (true) {\n  var a = 1;\n  let b = 2;\n}\nconsole.log(a); // 1\nconsole.log(b); // 报错：b is not defined',
        lang: 'js'
      },
      {
        heading: 'let 与 const 的区别',
        text: 'let 声明的变量可以重新赋值，适合值会变化的场景，比如计数器。const 声明的是常量，声明时必须赋值，之后不能再重新赋值，否则会报错。\n注意：const 只是禁止重新赋值，如果它保存的是对象或数组，对象内部的属性依然可以修改。\n开发中的推荐做法是：优先使用 const，确定需要重新赋值时才用 let，尽量避免使用 var。',
        code: 'const PI = 3.14;\nPI = 3; // 报错：不能给常量赋值\n\nconst user = { name: "小明" };\nuser.name = "小红"; // 可以，修改的是属性\nconsole.log(user.name); // 小红',
        lang: 'js'
      },
      {
        heading: '暂时性死区',
        text: 'let 和 const 声明的变量，在声明语句之前访问会直接报错，这个从代码块开始到声明语句之间的区域被称为暂时性死区（TDZ）。\n这与 var 的变量提升不同：var 在声明前访问得到 undefined，而 let 在声明前访问会抛出错误。这个特性可以帮我们更早地发现代码中的问题，养成良好的编码习惯。',
        code: 'console.log(x); // undefined（var 会提升）\nvar x = 1;\n\nconsole.log(y); // 报错：暂时性死区\nlet y = 2;',
        lang: 'js'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nif (true) {\n  let a = 10;\n}\nconsole.log(a);',
        options: ['10', 'undefined', '报错：a is not defined', 'null'],
        answer: 2,
        explanation: 'let 声明的变量只在块级作用域内有效，在 if 代码块外访问 a 会报错。'
      },
      {
        type: 'single',
        question: '关于 const，下列说法正确的是？',
        options: ['const 声明的变量完全不能被修改', 'const 声明时必须赋值', 'const 存在变量提升，声明前可用', 'const 声明的对象属性不能修改'],
        answer: 1,
        explanation: 'const 声明时必须初始化赋值。它只禁止重新赋值，对象的属性仍然可以修改。'
      },
      {
        type: 'judge',
        question: '使用 let 声明变量时，在声明语句之前访问该变量会得到 undefined。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。let 存在暂时性死区，声明前访问会直接报错，而不是得到 undefined。'
      },
      {
        type: 'multiple',
        question: '以下哪些是 ES6 新增的声明方式的特点？（多选）',
        options: ['let 有块级作用域', 'const 声明后不可重新赋值', 'var 有块级作用域', 'let 不存在变量提升'],
        answer: [0, 1],
        explanation: 'var 是函数作用域且有变量提升；let/const 是块级作用域。'
      }
    ]
  },
  {
    id: 'es6-02',
    title: '箭头函数与模板字符串',
    summary: '更简洁的函数与字符串写法',
    minutes: 12,
    sections: [
      {
        heading: '箭头函数的基本写法',
        text: '箭头函数是 ES6 提供的一种更简洁的函数写法，使用 => 符号定义。如果只有一个参数，可以省略小括号；如果函数体只有一句返回语句，可以省略花括号和 return 关键字。\n箭头函数让回调函数的写法特别简洁，配合数组的 map、filter 等方法使用非常方便，代码可读性也更好。',
        code: 'const add = (a, b) => a + b;\nconsole.log(add(1, 2)); // 3\n\nconst nums = [1, 2, 3];\nconst doubled = nums.map(n => n * 2);\nconsole.log(doubled); // [2, 4, 6]',
        lang: 'js'
      },
      {
        heading: '箭头函数与 this',
        text: '箭头函数和普通函数最重要的区别是 this 的指向。普通函数的 this 取决于调用方式，而箭头函数没有自己的 this，它会捕获定义时所在外层作用域的 this。\n这个特性在处理定时器、事件回调时非常实用，可以避免以前需要用 var self = this 保存上下文的麻烦。但反过来，需要动态 this 的场景（如对象方法、事件处理函数）就不适合用箭头函数。',
        code: 'const timer = {\n  count: 0,\n  start() {\n    setInterval(() => {\n      this.count++;\n    }, 1000);\n  }\n};',
        lang: 'js'
      },
      {
        heading: '模板字符串',
        text: '以前拼接字符串要用加号，遇到多行文本和变量就非常繁琐。ES6 的模板字符串用「反引号」（键盘左上角波浪号那个键）包裹，内部可以用 ${变量} 的形式直接插入变量或表达式，还能直接书写多行文本，不需要再加换行符。\n模板字符串让拼接 HTML、构造提示信息等场景变得清晰直观，是现代前端开发中最常用的语法之一。',
        code: 'const name = "小明";\nconst age = 18;\nconst msg = `你好，我是${name}，今年${age}岁。`;\nconsole.log(msg); // 你好，我是小明，今年18岁。',
        lang: 'js'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconst double = x => x * 2;\nconsole.log(double(5));',
        options: ['undefined', '10', '报错', 'NaN'],
        answer: 1,
        explanation: '箭头函数只有一个参数可省略括号，函数体只有一句时可省略 return，所以 double(5) 返回 10。'
      },
      {
        type: 'single',
        question: '关于箭头函数的 this，下列说法正确的是？',
        options: ['箭头函数的 this 取决于调用它的对象', '箭头函数没有自己的 this，继承外层作用域的 this', '箭头函数的 this 永远指向 window', '箭头函数不能用 this'],
        answer: 1,
        explanation: '箭头函数不绑定自己的 this，它会使用定义时外层作用域中的 this。'
      },
      {
        type: 'judge',
        question: '模板字符串使用「反引号」包裹，并且可以直接书写多行文本。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。模板字符串用反引号包裹，支持多行文本和 ${表达式} 插值。'
      },
      {
        type: 'judge',
        question: '箭头函数非常适合作为对象的方法使用，因为它的 this 总是指向该对象。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。箭头函数的 this 继承自外层作用域，不会指向调用它的对象，所以不适合作为对象方法。'
      },
      {
        type: 'multiple',
        question: '以下关于箭头函数的说法，哪些是正确的？（多选）',
        options: ['箭头函数没有自己的 this，继承外层作用域的 this', '只有一个参数时可以省略小括号', '箭头函数的 this 取决于调用方式', '函数体只有一句返回语句时可省略花括号和 return'],
        answer: [0, 1, 3],
        explanation: '箭头函数的 this 来自外层作用域而非调用方式；单参数可省略括号，单句返回可省略花括号和 return。'
      }
    ]
  },
  {
    id: 'es6-03',
    title: '解构赋值与展开运算符',
    summary: '快速提取与合并数据',
    minutes: 12,
    sections: [
      {
        heading: '数组与对象解构',
        text: '解构赋值可以让我们按照一定的模式，从数组或对象中快速提取值并赋给变量。\n数组解构按照位置对应，用方括号书写；对象解构按照属性名对应，用花括号书写。解构时还可以给变量指定默认值，当取到的值是 undefined 时默认值就会生效。解构大大减少了以前写一个属性取一次的重复代码。',
        code: 'const [a, b = 10] = [1];\nconsole.log(a, b); // 1 10\n\nconst { name, age } = { name: "小明", age: 18 };\nconsole.log(name, age); // 小明 18',
        lang: 'js'
      },
      {
        heading: '展开运算符',
        text: '展开运算符写作三个点（...），可以把数组或对象「展开」成一个个独立的元素。\n它常用于合并数组、复制数组、把数组元素作为函数参数传递等场景。注意展开做的是浅拷贝，嵌套的对象仍然共享引用。展开运算符让数组合并和复制告别循环，一行代码就能完成。',
        code: 'const arr1 = [1, 2];\nconst arr2 = [3, 4];\nconst merged = [...arr1, ...arr2];\nconsole.log(merged); // [1, 2, 3, 4]\n\nconsole.log(Math.max(...merged)); // 4',
        lang: 'js'
      },
      {
        heading: '剩余参数',
        text: '同样是三个点，用在函数参数或解构赋值的最后位置时，叫做剩余参数，作用是把「剩下的所有内容」收集到一个数组或对象中。\n用剩余参数可以让函数接收任意多个实参，替代以前难用的 arguments 对象。和解构配合时，可以方便地把前几个元素单独取出，剩余的统一收集。判断技巧：展开是「拆开」，剩余是「收集」。',
        code: 'function sum(...nums) {\n  return nums.reduce((total, n) => total + n, 0);\n}\nconsole.log(sum(1, 2, 3)); // 6\n\nconst [first, ...rest] = [1, 2, 3];\nconsole.log(rest); // [2, 3]',
        lang: 'js'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconst { x = 5 } = {};\nconsole.log(x);',
        options: ['undefined', '报错', '5', 'null'],
        answer: 2,
        explanation: '对象中取不到 x 属性时为 undefined，解构默认值 5 生效，所以输出 5。'
      },
      {
        type: 'single',
        question: '要把数组 arr = [1, 2, 3] 复制一份新数组，正确写法是？',
        options: ['const copy = arr;', 'const copy = [...arr];', 'const copy = {arr};', 'const copy = arr[];'],
        answer: 1,
        explanation: '[...arr] 通过展开运算符创建一个新数组；直接赋值只是复制引用，修改会互相影响。'
      },
      {
        type: 'judge',
        question: '数组解构是按照元素的位置进行对应的。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。数组解构按位置匹配，对象解构按属性名匹配。'
      },
      {
        type: 'judge',
        question: '剩余参数 ...args 可以出现在函数参数列表的任意位置。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。剩余参数必须放在参数列表的最后一个位置，用于收集剩余的所有实参。'
      },
      {
        type: 'multiple',
        question: '以下关于解构赋值和展开运算符的说法，哪些是正确的？（多选）',
        options: ['数组解构按位置对应', '对象解构按属性名对应', '[...arr] 是深拷贝，嵌套对象互不影响', '剩余参数必须放在参数列表的最后位置'],
        answer: [0, 1, 3],
        explanation: '展开做的是浅拷贝，嵌套对象仍共享引用；其余三项均正确。'
      }
    ]
  },
  {
    id: 'es6-04',
    title: 'Promise 与 async/await',
    summary: '优雅地处理异步操作',
    minutes: 15,
    sections: [
      {
        heading: '认识 Promise',
        text: '异步操作（如网络请求、定时器）不会立即得到结果。以前只能用回调函数处理，多层嵌套后形成难以维护的「回调地狱」。\nPromise 是一个代表异步操作最终完成或失败的对象，有三种状态：pending（进行中）、fulfilled（成功）、rejected（失败）。通过 then 接收成功结果，catch 捕获失败，可以把嵌套的回调写成扁平的链式调用，逻辑清晰得多。',
        code: 'fetchData()\n  .then(data => {\n    console.log(data);\n  })\n  .catch(err => {\n    console.log("出错了", err);\n  });',
        lang: 'js'
      },
      {
        heading: '创建 Promise 与常用静态方法',
        text: '我们可以用 new Promise 包装一个异步任务，在合适的时候调用 resolve 表示成功，调用 reject 表示失败。\nPromise 还提供了实用的静态方法：Promise.all 等待多个任务全部成功，任一失败则整体失败；Promise.race 返回最先完成的那个结果；Promise.allSettled 等待全部结束，无论成败。这些方法让并发控制变得简单。',
        code: 'const p = new Promise((resolve, reject) => {\n  setTimeout(() => resolve("完成"), 1000);\n});\np.then(msg => console.log(msg)); // 1秒后输出 完成\n\nPromise.all([p1, p2]).then(results => console.log(results));',
        lang: 'js'
      },
      {
        heading: 'async/await 语法糖',
        text: 'async/await 是建立在 Promise 之上的语法糖，让我们能用写同步代码的方式写异步逻辑。\n在函数前加 async 关键字，函数内部就可以使用 await 暂停执行，等待 Promise 出结果后再继续。await 表达式的值就是 Promise 成功的结果。错误处理用熟悉的 try/catch 即可。注意 await 只能在 async 函数中使用，async 函数本身总是返回一个 Promise。',
        code: 'async function loadUser() {\n  try {\n    const res = await fetch("/api/user");\n    const data = await res.json();\n    console.log(data);\n  } catch (err) {\n    console.log("请求失败", err);\n  }\n}',
        lang: 'js'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: 'Promise 对象有几种状态？',
        options: ['2 种：成功和失败', '3 种：pending、fulfilled、rejected', '4 种：多一种 cancel', '1 种：只有 pending'],
        answer: 1,
        explanation: 'Promise 有三种状态：pending（进行中）、fulfilled（已成功）、rejected（已失败），且状态一旦改变就不可逆。'
      },
      {
        type: 'single',
        question: '下面代码的输出顺序是？\nconsole.log(1);\nPromise.resolve().then(() => console.log(2));\nconsole.log(3);',
        options: ['1 2 3', '1 3 2', '2 1 3', '3 1 2'],
        answer: 1,
        explanation: 'Promise 的 then 回调是微任务，会等同步代码执行完才执行，所以输出 1、3、2。'
      },
      {
        type: 'judge',
        question: 'await 关键字可以在任何普通函数中使用。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。await 只能在用 async 声明的函数内部使用。'
      },
      {
        type: 'judge',
        question: 'Promise.all 中只要有一个 Promise 失败，整个 Promise.all 就会立即失败。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。Promise.all 是「全部成功才算成功」，任一失败整体进入 rejected 状态。'
      },
      {
        type: 'multiple',
        question: '以下关于 Promise 和 async/await 的说法，哪些是正确的？（多选）',
        options: ['Promise 有 pending、fulfilled、rejected 三种状态', 'await 只能在 async 函数中使用', 'Promise.all 中任一失败则整体失败', 'async 函数返回的不是 Promise'],
        answer: [0, 1, 2],
        explanation: 'async 函数本身总是返回一个 Promise，所以第四项错误；其余三项均正确。'
      }
    ]
  },
  {
    id: 'es6-05',
    title: 'Class 类与模块化',
    summary: '面向对象与代码组织方式',
    minutes: 15,
    sections: [
      {
        heading: 'Class 类的基本用法',
        text: 'ES6 的 class 关键字让面向对象编程的写法更接近其他语言，本质上是基于原型的语法糖。\n用 class 定义类，constructor 是构造函数，在 new 实例时自动执行。类中直接写方法就是原型方法。通过 extends 关键字可以实现继承，子类中用 super() 调用父类构造函数。这种写法比以前的原型链继承清晰很多，是现代框架中常见的代码组织方式。',
        code: 'class Animal {\n  constructor(name) {\n    this.name = name;\n  }\n  speak() {\n    console.log(this.name + " 发出了声音");\n  }\n}\nconst dog = new Animal("旺财");\ndog.speak(); // 旺财 发出了声音',
        lang: 'js'
      },
      {
        heading: '模块化：export 导出',
        text: '随着项目变大，所有代码写在一个文件里难以维护。ES6 模块化允许我们把代码拆分到多个文件中，按需导出和引入。\n导出有两种方式：命名导出可以导出多个，在声明前加 export，或统一用 export { 名称 }；默认导出用 export default，每个模块只能有一个。命名导出和默认导出可以同时存在于一个模块中。',
        code: '// math.js 命名导出\nexport const PI = 3.14;\nexport function add(a, b) {\n  return a + b;\n}\n\n// 默认导出（一个模块只能有一个）\nexport default function multiply(a, b) {\n  return a * b;\n}',
        lang: 'js'
      },
      {
        heading: '模块化：import 导入',
        text: '导入与导出方式一一对应。导入命名导出时，用花括号写出名称，名字必须与导出时一致，可以用 as 起别名；导入默认导出时不用花括号，名字可以自定义。两者也可以写在一行。\n模块路径以 ./ 或 ../ 开头表示相对路径。现代打包工具（如 Vite、Webpack）都原生支持 ES 模块，浏览器中也可以通过给 script 标签加 type="module" 来使用。',
        code: '// 导入默认导出和命名导出\nimport multiply, { PI, add } from "./math.js";\n\nconsole.log(add(1, 2)); // 3\nconsole.log(multiply(2, 3)); // 6',
        lang: 'js'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: '一个模块中最多可以有几个默认导出（export default）？',
        options: ['任意多个', '2 个', '1 个', '0 个，不能用默认导出'],
        answer: 2,
        explanation: '每个模块只能有一个默认导出，而命名导出可以有多个。'
      },
      {
        type: 'single',
        question: '已知 math.js 中写了 export function add(a, b) {...}，正确的导入方式是？',
        options: ['import add from "./math.js";', 'import { add } from "./math.js";', 'import * from "./math.js";', 'require("./math.js");'],
        answer: 1,
        explanation: 'add 是命名导出，导入时必须用花括号并写相同的名称。'
      },
      {
        type: 'judge',
        question: '子类通过 extends 继承父类后，在 constructor 中必须用 super() 调用父类构造函数，才能使用 this。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。子类构造函数中必须先调用 super()，之后才能访问 this。'
      },
      {
        type: 'judge',
        question: 'class 定义的类完全抛弃了 JavaScript 的原型机制。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。class 只是语法糖，底层仍然是基于原型的继承。'
      },
      {
        type: 'multiple',
        question: '以下关于 class 和 ES6 模块化的说法，哪些是正确的？（多选）',
        options: ['每个模块只能有一个默认导出', '子类 constructor 中必须先调用 super() 才能使用 this', 'class 完全抛弃了 JavaScript 的原型机制', '导入命名导出时必须用花括号且名称一致'],
        answer: [0, 1, 3],
        explanation: 'class 是基于原型的语法糖，并未抛弃原型机制；其余三项均正确。'
      }
    ]
  },
  {
    id: 'es6-06',
    title: '常用新特性：Set、Map、可选链等',
    summary: '提升开发效率的实用语法',
    minutes: 12,
    sections: [
      {
        heading: 'Set 与 Map',
        text: 'Set 是一种值的集合，特点是成员都是唯一的，不会重复，常用于数组去重。用 add 添加、has 判断、delete 删除、size 获取数量。\nMap 是键值对集合，与普通对象不同的是，它的键可以是任意类型（包括对象），并且有更好的遍历性能。用 set 设置、get 获取、has 判断。需要频繁增删键值对或键不是字符串时，优先考虑 Map。',
        code: 'const set = new Set([1, 2, 2, 3]);\nconsole.log(set.size); // 3\nconsole.log([...new Set([1, 1, 2])]); // [1, 2]\n\nconst map = new Map();\nmap.set("name", "小明");\nconsole.log(map.get("name")); // 小明',
        lang: 'js'
      },
      {
        heading: '可选链与空值合并',
        text: '访问嵌套对象属性时，如果中间某层是 null 或 undefined，直接访问会报错。可选链操作符 ?. 会在前面的值为 null 或 undefined 时短路返回 undefined，不再继续访问，也不会报错。\n空值合并运算符 ?? 在左边是 null 或 undefined 时返回右边的值。它与 || 的区别是：|| 遇到 false、0、空字符串也会取右边的值，而 ?? 只认 null 和 undefined，更精确。',
        code: 'const user = { info: null };\nconsole.log(user.info?.name); // undefined，不报错\n\nconst count = 0;\nconsole.log(count || 10);  // 10\nconsole.log(count ?? 10);  // 0',
        lang: 'js'
      },
      {
        heading: '其他实用新特性',
        text: 'ES6 之后还有许多高频使用的特性：\nObject.assign 用于合并对象；Object.keys、values、entries 可以方便地遍历对象；数组的 find 查找第一个满足条件的元素，includes 判断数组是否包含某值，比 indexOf 更直观；指数运算符 ** 可以替代 Math.pow；字符串的 padStart、padEnd 用于补全长度，格式化时间、编号时特别好用。掌握这些能让日常编码事半功倍。',
        code: 'const arr = [1, 2, 3];\nconsole.log(arr.includes(2)); // true\nconsole.log(arr.find(n => n > 1)); // 2\nconsole.log(2 ** 10); // 1024\nconsole.log("7".padStart(2, "0")); // "07"',
        lang: 'js'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconsole.log([...new Set([1, 2, 2, 3, 3])]);',
        options: ['[1, 2, 2, 3, 3]', '[1, 2, 3]', '{1, 2, 3}', '[2, 3]'],
        answer: 1,
        explanation: 'Set 中的值不会重复，所以先去重为 {1, 2, 3}，再展开成数组 [1, 2, 3]。'
      },
      {
        type: 'single',
        question: '表达式 0 ?? 100 的结果是？',
        options: ['100', '0', 'undefined', '报错'],
        answer: 1,
        explanation: '?? 只在左边为 null 或 undefined 时才返回右边的值，0 不属于这两种情况，所以结果是 0。'
      },
      {
        type: 'judge',
        question: 'Map 的键只能是字符串类型。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。Map 的键可以是任意类型，包括数字、对象甚至函数，这是它区别于普通对象的重要特性。'
      },
      {
        type: 'judge',
        question: '使用可选链 obj?.a?.b 时，如果 obj 是 undefined，表达式会返回 undefined 而不会报错。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。可选链遇到 null 或 undefined 会短路，返回 undefined，不会抛出错误。'
      },
      {
        type: 'multiple',
        question: '以下关于 Set、Map 和新语法的说法，哪些是正确的？（多选）',
        options: ['Set 中的值不会重复，可用于数组去重', 'Map 的键可以是任意类型', '0 ?? 10 的结果是 10', '可选链遇到 null 或 undefined 会短路返回 undefined'],
        answer: [0, 1, 3],
        explanation: '?? 只在左边为 null 或 undefined 时返回右边的值，0 不满足，所以 0 ?? 10 的结果是 0；其余三项均正确。'
      }
    ]
  }
];
