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
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nlet x = 1;\nif (true) {\n  let x = 2;\n}\nconsole.log(x);',
        options: ['2', '1', 'undefined', '报错'],
        answer: 1,
        explanation: 'if 块内的 let x 是块级作用域里的新变量，不影响外部的 x，所以输出 1。'
      },
      {
        type: 'single',
        question: '关于变量声明的推荐做法，下列说法正确的是？',
        options: ['优先使用 var', '优先使用 const，确定需要重新赋值时才用 let', '优先使用 let，尽量不用 const', '任何情况都必须用 const'],
        answer: 1,
        explanation: '推荐优先使用 const，确实需要重新赋值时才改用 let，尽量避免 var。'
      },
      {
        type: 'judge',
        question: 'const 声明的变量保存的是对象时，对象内部的属性仍然可以被修改。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。const 只禁止重新赋值，不禁止修改对象内部的属性。'
      },
      {
        type: 'judge',
        question: 'var 声明的变量具有块级作用域，不会泄漏到代码块外部。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。var 没有块级作用域，if、for 块中声明的 var 变量会泄漏到外部。'
      },
      {
        type: 'multiple',
        question: '以下关于暂时性死区（TDZ）的说法，哪些是正确的？（多选）',
        options: ['let 声明前访问该变量会报错', 'var 声明前访问该变量得到 undefined', 'TDZ 只存在于 const，let 没有', 'let 和 const 都存在 TDZ'],
        answer: [0, 1, 3],
        explanation: 'let 和 const 都有暂时性死区，声明前访问会报错；var 则因提升得到 undefined。'
      },
      {
        type: 'multiple',
        question: '以下哪些操作会导致报错？（多选）',
        options: ['给 const 声明的常量重新赋值', '在 let 声明语句之前访问该变量', '修改 const 保存的对象的属性', '在 if 代码块外访问块内 let 声明的变量'],
        answer: [0, 1, 3],
        explanation: 'const 禁止重新赋值、let 有暂时性死区和块级作用域，这三项都会报错；修改 const 对象的属性是允许的。'
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
        type: 'multiple',
        question: '以下关于箭头函数的说法，哪些是正确的？（多选）',
        options: ['箭头函数没有自己的 this，继承外层作用域的 this', '只有一个参数时可以省略小括号', '箭头函数的 this 取决于调用方式', '函数体只有一句返回语句时可省略花括号和 return'],
        answer: [0, 1, 3],
        explanation: '箭头函数的 this 来自外层作用域而非调用方式；单参数可省略括号，单句返回可省略花括号和 return。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconst sum = (a, b) => { a + b };\nconsole.log(sum(1, 2));',
        options: ['3', 'undefined', 'NaN', '报错'],
        answer: 1,
        explanation: '函数体写了花括号就必须显式 return，否则默认返回 undefined。'
      },
      {
        type: 'single',
        question: '在模板字符串中插入变量或表达式，正确的写法是？',
        options: ['#{name}', '${name}', '%(name)', '{{name}}'],
        answer: 1,
        explanation: '模板字符串用 ${表达式} 的形式插入变量或表达式。'
      },
      {
        type: 'judge',
        question: '箭头函数非常适合用作需要动态 this 的对象方法。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。箭头函数没有自己的 this，需要动态 this 的场景（如对象方法）不适合用箭头函数。'
      },
      {
        type: 'judge',
        question: '箭头函数配合数组的 map、filter 等方法使用，可以让回调函数的写法更简洁。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。箭头函数的简写特性让数组回调代码更短、可读性更好。'
      },
      {
        type: 'multiple',
        question: '以下哪些是模板字符串具备的能力？（多选）',
        options: ['用 ${} 插入变量或表达式', '直接书写多行文本', '用反引号包裹', '内部只能写变量名，不能写表达式'],
        answer: [0, 1, 2],
        explanation: '模板字符串的 ${} 中可以写任意表达式，不限于变量名；其余三项均正确。'
      },
      {
        type: 'multiple',
        question: '以下关于箭头函数与普通函数区别的说法，哪些是正确的？（多选）',
        options: ['箭头函数没有自己的 this', '箭头函数捕获定义时外层作用域的 this', '普通函数的 this 取决于调用方式', '箭头函数的 this 可以通过 call 随意改变'],
        answer: [0, 1, 2],
        explanation: '箭头函数的 this 在定义时就确定了，call、apply 无法改变它；其余三项均正确。'
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
        type: 'multiple',
        question: '以下关于解构赋值和展开运算符的说法，哪些是正确的？（多选）',
        options: ['数组解构按位置对应', '对象解构按属性名对应', '[...arr] 是深拷贝，嵌套对象互不影响', '剩余参数必须放在参数列表的最后位置'],
        answer: [0, 1, 3],
        explanation: '展开做的是浅拷贝，嵌套对象仍共享引用；其余三项均正确。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconst [a, , c] = [1, 2, 3];\nconsole.log(a, c);',
        options: ['1 2', '1 3', '2 3', '报错'],
        answer: 1,
        explanation: '数组解构中可以用逗号跳过中间的元素，所以 a 为 1，c 为 3。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nfunction f(...args) {\n  return args.length;\n}\nconsole.log(f(1, 2, 3, 4));',
        options: ['1', '3', '4', 'undefined'],
        answer: 2,
        explanation: '剩余参数 ...args 把全部 4 个实参收集成数组，所以 length 为 4。'
      },
      {
        type: 'judge',
        question: '展开运算符复制数组或对象时做的是浅拷贝，嵌套的对象仍共享引用。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。展开只复制第一层，嵌套对象修改后会互相影响。'
      },
      {
        type: 'judge',
        question: '剩余参数可以把函数接收到的多余实参收集到一个真正的数组中。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。剩余参数收集到的是真正的数组，可以直接使用数组方法，优于 arguments。'
      },
      {
        type: 'multiple',
        question: '以下哪些是展开运算符的常见用途？（多选）',
        options: ['合并数组', '复制数组', '把数组元素作为函数参数传递', '深拷贝嵌套对象'],
        answer: [0, 1, 2],
        explanation: '展开是浅拷贝，无法完成深拷贝；其余三项都是常见用途。'
      },
      {
        type: 'multiple',
        question: '以下关于解构默认值的说法，哪些是正确的？（多选）',
        options: ['取到的值为 undefined 时默认值生效', '数组解构可以设置默认值', '对象解构可以设置默认值', '取到的值为 null 时默认值也会生效'],
        answer: [0, 1, 2],
        explanation: '解构默认值只在值为 undefined 时生效，null 不会触发默认值；其余三项均正确。'
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
        type: 'multiple',
        question: '以下关于 Promise 和 async/await 的说法，哪些是正确的？（多选）',
        options: ['Promise 有 pending、fulfilled、rejected 三种状态', 'await 只能在 async 函数中使用', 'Promise.all 中任一失败则整体失败', 'async 函数返回的不是 Promise'],
        answer: [0, 1, 2],
        explanation: 'async 函数本身总是返回一个 Promise，所以第四项错误；其余三项均正确。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nasync function f() {\n  return 5;\n}\nf().then(v => console.log(v));',
        options: ['Promise 对象', '5', 'undefined', '报错'],
        answer: 1,
        explanation: 'async 函数总是返回 Promise，return 的值会成为成功的结果，所以 then 中拿到 5。'
      },
      {
        type: 'single',
        question: 'Promise.race([p1, p2, p3]) 的行为是？',
        options: ['等待全部成功后才返回', '返回最先完成的那个结果', '等待全部结束，无论成败', '只返回最后一个 Promise 的结果'],
        answer: 1,
        explanation: 'Promise.race 返回最先完成（无论成功或失败）的那个 Promise 的结果。'
      },
      {
        type: 'judge',
        question: 'Promise 的状态一旦从 pending 变为 fulfilled 或 rejected，就再也不能改变。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。Promise 状态的改变是不可逆的。'
      },
      {
        type: 'judge',
        question: 'Promise.allSettled 会在任一任务失败时立即进入 catch。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。allSettled 会等待全部任务结束，无论成败都不会因单个失败而提前 reject。'
      },
      {
        type: 'multiple',
        question: '以下关于 async/await 的说法，哪些是正确的？（多选）',
        options: ['await 表达式的值是 Promise 成功的结果', '可以用 try/catch 捕获 await 的错误', 'await 会暂停当前 async 函数的执行', 'await 会让整个页面线程卡住不动'],
        answer: [0, 1, 2],
        explanation: 'await 只暂停所在 async 函数，不会阻塞主线程；其余三项均正确。'
      },
      {
        type: 'multiple',
        question: '以下关于 Promise 静态方法的说法，哪些是正确的？（多选）',
        options: ['Promise.all 成功时 then 拿到的是结果数组', 'Promise.race 只要有一个完成就返回结果', 'Promise.allSettled 无论成败都等全部结束', 'Promise.all 最多只能接收两个 Promise'],
        answer: [0, 1, 2],
        explanation: 'Promise.all 接收的是 Promise 数组，数量不限；其余三项均正确。'
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
        type: 'multiple',
        question: '以下关于 class 和 ES6 模块化的说法，哪些是正确的？（多选）',
        options: ['每个模块只能有一个默认导出', '子类 constructor 中必须先调用 super() 才能使用 this', 'class 完全抛弃了 JavaScript 的原型机制', '导入命名导出时必须用花括号且名称一致'],
        answer: [0, 1, 3],
        explanation: 'class 是基于原型的语法糖，并未抛弃原型机制；其余三项均正确。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nclass A {\n  constructor() {\n    this.x = 1;\n  }\n}\nclass B extends A {\n  constructor() {\n    super();\n    this.y = 2;\n  }\n}\nconst b = new B();\nconsole.log(b.x, b.y);',
        options: ['undefined 2', '1 2', '报错', '1 undefined'],
        answer: 1,
        explanation: '子类 constructor 中先调用 super() 执行了父类构造函数，x 被赋值为 1，随后 y 赋值为 2。'
      },
      {
        type: 'single',
        question: '关于导入默认导出（export default），下列说法正确的是？',
        options: ['导入时必须使用花括号', '导入时名称必须与导出时一致', '导入时不用花括号，名称可以自定义', '一个模块可以导入多个默认导出'],
        answer: 2,
        explanation: '导入默认导出不用花括号，名称可以自定义；每个模块只能有一个默认导出。'
      },
      {
        type: 'judge',
        question: 'ES6 的 class 本质上是基于原型机制的语法糖。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。class 并没有引入新的继承模型，底层仍然是原型链。'
      },
      {
        type: 'judge',
        question: '命名导出和默认导出不能同时存在于同一个模块中。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。命名导出和默认导出可以同时存在，导入时也可以写在同一行。'
      },
      {
        type: 'multiple',
        question: '以下关于 class 的说法，哪些是正确的？（多选）',
        options: ['constructor 在 new 实例时自动执行', '通过 extends 关键字实现继承', '类中直接书写的方法是原型方法', 'class 声明可以像 var 一样在声明前使用'],
        answer: [0, 1, 2],
        explanation: 'class 声明存在暂时性死区，声明前使用会报错；其余三项均正确。'
      },
      {
        type: 'multiple',
        question: '以下关于 ES6 模块化的说法，哪些是正确的？（多选）',
        options: ['命名导出可以有多个', '导入命名导出时可以用 as 起别名', '每个模块只能有一个默认导出', '导入命名导出时名称可以随意书写'],
        answer: [0, 1, 2],
        explanation: '导入命名导出时名称必须与导出时一致，只能用 as 起别名；其余三项均正确。'
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
        type: 'multiple',
        question: '以下关于 Set、Map 和新语法的说法，哪些是正确的？（多选）',
        options: ['Set 中的值不会重复，可用于数组去重', 'Map 的键可以是任意类型', '0 ?? 10 的结果是 10', '可选链遇到 null 或 undefined 会短路返回 undefined'],
        answer: [0, 1, 3],
        explanation: '?? 只在左边为 null 或 undefined 时返回右边的值，0 不满足，所以 0 ?? 10 的结果是 0；其余三项均正确。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconst m = new Map();\nm.set("a", 1);\nm.set("b", 2);\nconsole.log(m.size);',
        options: ['1', '2', 'undefined', '报错'],
        answer: 1,
        explanation: 'Map 中设置了两个键值对，size 属性返回成员数量 2。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconsole.log("7".padStart(3, "0"));',
        options: ['"700"', '"007"', '"70"', '报错'],
        answer: 1,
        explanation: 'padStart 在字符串开头补全到指定长度，"7" 前面补两个 "0" 得到 "007"。'
      },
      {
        type: 'judge',
        question: '|| 与 ?? 的区别在于：|| 遇到 false、0、空字符串也会取右边的值，而 ?? 只认 null 和 undefined。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。这正是 ?? 比 || 更精确的地方，适合保留 0 等有效值。'
      },
      {
        type: 'judge',
        question: 'Set 实例可以用 push 方法添加成员。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。Set 添加成员用 add 方法，push 是数组的方法。'
      },
      {
        type: 'multiple',
        question: '以下哪些是 Set 具备的用法？（多选）',
        options: ['用 add 添加成员', '用 has 判断成员是否存在', '用 size 获取成员数量', '用 get 按键获取成员'],
        answer: [0, 1, 2],
        explanation: 'get 按键取值是 Map 的方法，Set 没有键的概念；其余三项均正确。'
      },
      {
        type: 'multiple',
        question: '以下关于实用新特性的说法，哪些是正确的？（多选）',
        options: ['2 ** 10 的结果是 1024', 'arr.includes(x) 用于判断数组是否包含 x', 'Object.assign 可以用于合并对象', '?. 在左边为 0 时也会短路返回 undefined'],
        answer: [0, 1, 2],
        explanation: '可选链只在左边为 null 或 undefined 时短路，0 不会触发短路；其余三项均正确。'
      }
    ]
  },
  {
    id: 'es6-07',
    title: '数组新增方法',
    summary: 'find、includes、flat 等好用方法',
    minutes: 12,
    sections: [
      {
        heading: '查找元素：find、findIndex 与 includes',
        text: '以前查找数组元素要写循环或用 indexOf，不够直观。ES6 之后数组有了更语义化的查找方法。\nfind 返回第一个满足条件的元素本身，找不到返回 undefined；findIndex 用法相同，但返回的是下标，找不到返回 -1。includes 用来判断数组是否包含某个值，直接返回布尔值，比 indexOf(x) !== -1 的写法清晰得多，还能正确处理 NaN。',
        code: 'const arr = [5, 12, 8, 130];\nconsole.log(arr.find(n => n > 10)); // 12\nconsole.log(arr.findIndex(n => n > 10)); // 1\nconsole.log(arr.includes(8)); // true\nconsole.log([NaN].includes(NaN)); // true',
        lang: 'js'
      },
      {
        heading: '拍平数组：flat 与 flatMap',
        text: '处理嵌套数组时，flat 可以把多维数组「拍平」成一维。默认只拍平一层，传入数字可以指定深度，传 Infinity 则无论多深都拍平。\nflatMap 相当于先 map 再 flat 一层，适合「每个元素映射成数组再合并」的场景，比如把一句话数组拆成单词数组。这两个方法让嵌套数据的处理不再需要手写递归。',
        code: 'const arr = [1, [2, [3, 4]]];\nconsole.log(arr.flat()); // [1, 2, [3, 4]]\nconsole.log(arr.flat(Infinity)); // [1, 2, 3, 4]\n\nconst words = ["hello world"].flatMap(s => s.split(" "));\nconsole.log(words); // ["hello", "world"]',
        lang: 'js'
      },
      {
        heading: '创建数组：Array.from 与 Array.of',
        text: 'Array.from 可以把「类数组对象」（如 arguments、NodeList）或可迭代对象（如 Set、字符串）转换成真正的数组，第二个参数还能像 map 一样对每个元素做处理。\nArray.of 则用于把一组值组成数组，解决了 new Array(3) 会创建长度为 3 的空数组而不是 [3] 的怪异问题。掌握它们后，数组的创建和转换会更加顺手、不易出错。',
        code: 'console.log(Array.from("abc")); // ["a", "b", "c"]\nconsole.log(Array.from([1, 2, 3], n => n * 2)); // [2, 4, 6]\n\nconsole.log(new Array(3)); // [空, 空, 空]\nconsole.log(Array.of(3)); // [3]',
        lang: 'js'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconst arr = [3, 7, 9];\nconsole.log(arr.find(n => n > 5));',
        options: ['7', '[7, 9]', '1', 'true'],
        answer: 0,
        explanation: 'find 返回第一个满足条件的元素本身，7 是第一个大于 5 的元素。'
      },
      {
        type: 'single',
        question: '要把 [1, [2, [3]]] 彻底拍平成一维数组，正确写法是？',
        options: ['arr.flat()', 'arr.flat(0)', 'arr.flat(Infinity)', 'arr.flatMap()'],
        answer: 2,
        explanation: 'flat 默认只拍平一层，传 Infinity 可以拍平任意深度的嵌套数组。'
      },
      {
        type: 'judge',
        question: 'includes 方法可以正确判断数组中是否包含 NaN。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。indexOf 找不到 NaN，但 includes 使用了更合理的比较算法，[NaN].includes(NaN) 返回 true。'
      },
      {
        type: 'multiple',
        question: '以下关于数组新增方法的说法，哪些是正确的？（多选）',
        options: ['find 返回第一个满足条件的元素', 'findIndex 找不到元素时返回 -1', 'includes 只能用于字符串，不能用于数组', 'Array.from 可以把类数组对象转成真正的数组'],
        answer: [0, 1, 3],
        explanation: 'includes 是数组和字符串都可用的方法；其余三项均正确。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconsole.log(Array.from("hi"));',
        options: ['["h", "i"]', '"hi"', '["hi"]', '报错'],
        answer: 0,
        explanation: '字符串是可迭代对象，Array.from 会把每个字符转成一个数组元素。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconst arr = [1, 2, 3];\nconsole.log(arr.flatMap(n => [n, n]));',
        options: ['[1, 2, 3]', '[1, 1, 2, 2, 3, 3]', '[[1, 1], [2, 2], [3, 3]]', '报错'],
        answer: 1,
        explanation: 'flatMap 相当于先 map 得到 [[1,1],[2,2],[3,3]]，再拍平一层，结果为 [1, 1, 2, 2, 3, 3]。'
      },
      {
        type: 'judge',
        question: 'Array.of(3) 创建的是一个长度为 3 的空数组。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。Array.of(3) 创建的是 [3]；创建长度为 3 空数组的是 new Array(3)。'
      },
      {
        type: 'judge',
        question: 'Array.from 的第二个参数可以像 map 一样对每个元素做处理。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。例如 Array.from([1, 2, 3], n => n * 2) 得到 [2, 4, 6]。'
      },
      {
        type: 'multiple',
        question: '以下关于 flat 与 flatMap 的说法，哪些是正确的？（多选）',
        options: ['flat 默认只拍平一层嵌套', 'flat(Infinity) 可以拍平任意深度', 'flatMap 相当于先 map 再 flat 一层', 'flat 会直接修改原数组'],
        answer: [0, 1, 2],
        explanation: 'flat 返回新数组，不会修改原数组；其余三项均正确。'
      },
      {
        type: 'multiple',
        question: '以下哪些方法可以用于在数组中查找元素？（多选）',
        options: ['find', 'findIndex', 'includes', 'assign'],
        answer: [0, 1, 2],
        explanation: 'assign 是 Object 上用于合并对象的方法，不是数组查找方法；其余三项均正确。'
      }
    ]
  },
  {
    id: 'es6-08',
    title: '对象新增语法与方法',
    summary: '更简洁的对象写法与静态方法',
    minutes: 12,
    sections: [
      {
        heading: '更简洁的对象字面量',
        text: 'ES6 让对象字面量的书写更加简洁。当属性名和变量名相同时，可以省略冒号和值，直接写变量名；定义方法时可以省略 function 关键字。\n此外还支持「计算属性名」：用方括号包裹一个表达式作为属性名，属性名可以在运行时动态确定。这些简写让代码更短，配合解构赋值使用时尤其方便，是日常开发中出现频率极高的语法。',
        code: 'const name = "小明";\nconst key = "age";\nconst user = {\n  name,        // 属性简写\n  [key]: 18,   // 计算属性名\n  sayHi() {    // 方法简写\n    console.log("你好");\n  }\n};\nconsole.log(user.age); // 18',
        lang: 'js'
      },
      {
        heading: '合并对象：Object.assign',
        text: 'Object.assign 用于把一个或多个源对象的属性复制到目标对象，第一个参数是目标对象，后面是源对象，返回目标对象。\n同名属性时后面的源对象会覆盖前面的。常见用法有两个：一是合并配置项，给默认值补充用户配置；二是把第一个参数写成空对象来复制对象。注意它做的是浅拷贝，嵌套对象仍然共享引用，深拷贝需要另想办法。',
        code: 'const defaults = { theme: "light", size: 14 };\nconst custom = { size: 16 };\nconst config = Object.assign({}, defaults, custom);\nconsole.log(config); // { theme: "light", size: 16 }',
        lang: 'js'
      },
      {
        heading: '遍历对象：keys、values、entries',
        text: '以前遍历对象常用 for...in，但它会连原型链上的属性一起遍历。ES 新增的静态方法更直观：Object.keys 返回所有键组成的数组，Object.values 返回所有值组成的数组，Object.entries 返回键值对数组。\n拿到数组后就可以使用 forEach、map 等数组方法处理对象数据了。还有 Object.fromEntries 做反向操作，把键值对数组转回对象，常与 entries 配合用来过滤或修改对象的属性。',
        code: 'const user = { name: "小明", age: 18 };\nconsole.log(Object.keys(user)); // ["name", "age"]\nconsole.log(Object.values(user)); // ["小明", 18]\n\nObject.entries(user).forEach(([k, v]) => {\n  console.log(k + ": " + v);\n});',
        lang: 'js'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconst name = "小红";\nconst user = { name };\nconsole.log(user.name);',
        options: ['报错', 'undefined', '小红', 'name'],
        answer: 2,
        explanation: '属性简写等价于 { name: name }，所以 user.name 的值为 小红。'
      },
      {
        type: 'single',
        question: '执行 Object.assign({}, { a: 1 }, { a: 2, b: 3 }) 的结果是？',
        options: ['{ a: 1, b: 3 }', '{ a: 2, b: 3 }', '{ a: 1, a: 2, b: 3 }', '报错：属性重复'],
        answer: 1,
        explanation: '同名属性时后面的源对象会覆盖前面的，所以 a 最终为 2，结果为 { a: 2, b: 3 }。'
      },
      {
        type: 'judge',
        question: 'Object.assign 是深拷贝，修改拷贝结果的嵌套对象不会影响原对象。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。Object.assign 只做浅拷贝，嵌套对象仍然共享引用，修改会互相影响。'
      },
      {
        type: 'multiple',
        question: '以下关于对象新语法与方法的说法，哪些是正确的？（多选）',
        options: ['属性名与变量名相同时可省略冒号和值', 'Object.entries 返回键值对组成的数组', 'Object.assign 的第一个参数是目标对象', '对象中不能用表达式作为属性名'],
        answer: [0, 1, 2],
        explanation: '用方括号包裹表达式即可作为计算属性名，所以第四项错误；其余三项均正确。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconst key = "score";\nconst obj = { [key]: 90 };\nconsole.log(obj.score);',
        options: ['key', '90', 'undefined', '报错'],
        answer: 1,
        explanation: '[key] 是计算属性名，运行时 key 的值为 "score"，所以 obj.score 为 90。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconst user = { a: 1, b: 2 };\nconsole.log(Object.entries(user).length);',
        options: ['1', '2', '4', '报错'],
        answer: 1,
        explanation: 'Object.entries 返回键值对数组 [["a", 1], ["b", 2]]，长度为 2。'
      },
      {
        type: 'judge',
        question: 'Object.fromEntries 可以把键值对数组转回对象。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。fromEntries 是 entries 的反向操作，常与 entries 配合过滤或修改对象属性。'
      },
      {
        type: 'judge',
        question: 'Object.keys 返回的是对象所有值组成的数组。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。Object.keys 返回键组成的数组，返回值组成数组的是 Object.values。'
      },
      {
        type: 'multiple',
        question: '以下关于对象字面量简写的说法，哪些是正确的？（多选）',
        options: ['属性名与变量名相同时可省略冒号和值', '定义方法时可省略 function 关键字', '可以用方括号书写计算属性名', '计算属性名必须写在对象的最后'],
        answer: [0, 1, 2],
        explanation: '计算属性名可以出现在对象的任意位置；其余三项均正确。'
      },
      {
        type: 'multiple',
        question: '以下关于 Object.assign 的说法，哪些是正确的？（多选）',
        options: ['第一个参数是目标对象', '同名属性时后面的源对象覆盖前面的', '常用于给默认配置合并用户配置', '它做的是深拷贝'],
        answer: [0, 1, 2],
        explanation: 'Object.assign 是浅拷贝，嵌套对象仍共享引用；其余三项均正确。'
      }
    ]
  },
  {
    id: 'es6-09',
    title: 'Symbol 类型详解',
    summary: '独一无二的第七种原始类型',
    minutes: 12,
    sections: [
      {
        heading: '什么是 Symbol',
        text: 'Symbol 是 ES6 新增的第七种原始数据类型，通过 Symbol() 函数创建。它最大的特点是：每次创建的 Symbol 值都是独一无二的，即使传入相同的描述文字也不相等。注意不能用 new 调用。\n创建时可以传一个字符串作为描述，方便调试时辨认，但描述不影响唯一性。用 typeof 检测会得到 symbol。Symbol 的出现主要是为了解决对象属性名冲突的问题。',
        code: 'const s1 = Symbol("id");\nconst s2 = Symbol("id");\nconsole.log(s1 === s2); // false，永远不相等\nconsole.log(typeof s1); // symbol\n\n// 需要共享 Symbol 时用 Symbol.for\nconsole.log(Symbol.for("a") === Symbol.for("a")); // true',
        lang: 'js'
      },
      {
        heading: 'Symbol 作为对象属性键',
        text: '对象的属性键除了字符串，还可以是 Symbol。由于 Symbol 独一无二，用它做属性键绝不会与别人定义的属性重名，非常适合给第三方对象「悄悄」添加属性而不破坏原有结构。\nSymbol 属性有一个隐蔽特性：它不会出现在 for...in 循环和 Object.keys 的结果中，需要用 Object.getOwnPropertySymbols 专门获取。这个特性常用来模拟对象的「私有」属性。',
        code: 'const id = Symbol("id");\nconst user = { name: "小明", [id]: 1001 };\n\nconsole.log(user[id]); // 1001\nconsole.log(Object.keys(user)); // ["name"]\nconsole.log(Object.getOwnPropertySymbols(user).length); // 1',
        lang: 'js'
      },
      {
        heading: '内置的 Symbol 值',
        text: 'JavaScript 内置了一些特殊的 Symbol 值，称为「众所周知的 Symbol」，它们是语言内部行为的钩子。\n最著名的是 Symbol.iterator：对象只要实现了这个属性，就可以被 for...of 遍历，数组、字符串、Map、Set 都内置了它。其他如 Symbol.toPrimitive 可以自定义对象转原始值的规则，Symbol.hasInstance 可以自定义 instanceof 的行为。了解它们有助于理解语言的底层机制。',
        code: 'const arr = [1, 2, 3];\nconst it = arr[Symbol.iterator]();\nconsole.log(it.next()); // { value: 1, done: false }\n\n// 实现 Symbol.iterator 让对象可以被 for...of 遍历\nconst range = {\n  [Symbol.iterator]() {\n    let n = 0;\n    return {\n      next() {\n        return n < 3 ? { value: n++, done: false } : { value: undefined, done: true };\n      }\n    };\n  }\n};',
        lang: 'js'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconsole.log(Symbol("a") === Symbol("a"));',
        options: ['true', 'false', '报错', 'undefined'],
        answer: 1,
        explanation: '每次调用 Symbol() 都会创建一个独一无二的值，描述相同也不相等，所以结果是 false。'
      },
      {
        type: 'single',
        question: '要获取对象上所有的 Symbol 属性，应该使用哪个方法？',
        options: ['Object.keys', 'for...in 循环', 'Object.getOwnPropertySymbols', 'Object.values'],
        answer: 2,
        explanation: 'Symbol 属性不会被 for...in 和 Object.keys 枚举，需要用 Object.getOwnPropertySymbols 获取。'
      },
      {
        type: 'judge',
        question: '创建 Symbol 时必须使用 new Symbol() 的写法。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。Symbol 是原始类型，直接调用 Symbol() 即可，使用 new 反而会报错。'
      },
      {
        type: 'multiple',
        question: '以下关于 Symbol 的说法，哪些是正确的？（多选）',
        options: ['每个 Symbol 值都是独一无二的', 'Symbol 可以作为对象的属性键', 'Symbol 属性会出现在 Object.keys 的结果中', 'typeof Symbol() 的结果是 symbol'],
        answer: [0, 1, 3],
        explanation: 'Symbol 属性不会出现在 Object.keys 中，需要专门的方法获取；其余三项均正确。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconsole.log(Symbol.for("x") === Symbol.for("x"));',
        options: ['false', 'true', '报错', 'undefined'],
        answer: 1,
        explanation: 'Symbol.for 使用全局注册表，相同 key 会返回同一个 Symbol，所以结果为 true。'
      },
      {
        type: 'single',
        question: '需要在全局范围共享同一个 Symbol 时，应该使用？',
        options: ['Symbol()', 'new Symbol()', 'Symbol.for()', 'Object.keys()'],
        answer: 2,
        explanation: 'Symbol.for(key) 会在全局注册表中登记，相同 key 获取到的是同一个 Symbol。'
      },
      {
        type: 'judge',
        question: '创建 Symbol 时传入的描述文字会影响它的唯一性。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。描述文字只用于调试辨认，不影响唯一性，描述相同的两个 Symbol 仍不相等。'
      },
      {
        type: 'judge',
        question: '一个对象只要实现了 Symbol.iterator 属性，就可以被 for...of 遍历。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。Symbol.iterator 是可迭代协议的入口，数组、字符串、Map、Set 都内置了它。'
      },
      {
        type: 'multiple',
        question: '以下关于内置 Symbol 值的说法，哪些是正确的？（多选）',
        options: ['Symbol.iterator 与 for...of 遍历相关', 'Symbol.toPrimitive 可自定义对象转原始值的规则', 'Symbol.hasInstance 可自定义 instanceof 的行为', '内置 Symbol 只是普通常量，对语言行为没有影响'],
        answer: [0, 1, 2],
        explanation: '内置 Symbol 是语言内部行为的钩子，会直接影响语言行为；其余三项均正确。'
      },
      {
        type: 'multiple',
        question: '以下关于 Symbol 作为对象属性键的说法，哪些是正确的？（多选）',
        options: ['不会出现在 for...in 循环中', '不会出现在 Object.keys 的结果中', '可用 Object.getOwnPropertySymbols 获取', '容易与他人定义的字符串属性重名冲突'],
        answer: [0, 1, 2],
        explanation: 'Symbol 独一无二，用它做属性键绝不会重名冲突；其余三项均正确。'
      }
    ]
  },
  {
    id: 'es6-10',
    title: '迭代器与 for...of',
    summary: '统一的遍历协议与遍历语法',
    minutes: 12,
    sections: [
      {
        heading: '迭代器协议',
        text: '迭代器是一个带有 next 方法的对象，每次调用 next 都返回 { value, done } 形式的结果：value 是当前值，done 表示是否遍历结束。\n一个对象只要实现了 Symbol.iterator 方法，调用后能返回迭代器，它就是「可迭代对象」。数组、字符串、Map、Set 都内置实现了这个协议。这套统一的协议是 for...of、展开运算符、解构赋值能够工作的底层基础。',
        code: 'const arr = ["a", "b"];\nconst it = arr[Symbol.iterator]();\nconsole.log(it.next()); // { value: "a", done: false }\nconsole.log(it.next()); // { value: "b", done: false }\nconsole.log(it.next()); // { value: undefined, done: true }',
        lang: 'js'
      },
      {
        heading: 'for...of 循环',
        text: 'for...of 是 ES6 新增的遍历语法，专门用于遍历可迭代对象，每次循环直接拿到元素的值，代码比传统的 for 循环简洁很多。\n循环中可以使用 break、continue 和 return 控制流程。由于字符串也是可迭代对象，for...of 还能正确遍历字符串的每个字符。凡是能用展开运算符的地方，基本都能用 for...of 遍历。',
        code: 'const arr = [10, 20, 30];\nfor (const n of arr) {\n  console.log(n); // 依次输出 10、20、30\n}\n\nfor (const ch of "你好") {\n  console.log(ch); // 依次输出 你、好\n}',
        lang: 'js'
      },
      {
        heading: 'for...of 与 for...in 的区别',
        text: '这两个语法容易混淆，记住一句话：for...of 遍历的是「值」，for...in 遍历的是「键」。\nfor...in 是为遍历对象属性设计的，拿到的是字符串类型的键名，还会遍历原型链上的可枚举属性；用在数组上拿到的是下标字符串，容易出错。遍历数组、Map、Set 请用 for...of，遍历普通对象的键才用 for...in。此外 Map 和 Set 直接 for...of 就能拿到键值对或成员，非常方便。',
        code: 'const arr = ["a", "b"];\nfor (const i in arr) console.log(i); // "0", "1"（下标字符串）\nfor (const v of arr) console.log(v); // "a", "b"（值）\n\nconst map = new Map([["k", "v"]]);\nfor (const [key, value] of map) {\n  console.log(key, value); // k v\n}',
        lang: 'js'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconst it = [7][Symbol.iterator]();\nconsole.log(it.next().value);',
        options: ['7', '0', 'undefined', '{ value: 7, done: false }'],
        answer: 0,
        explanation: '第一次调用 next 返回 { value: 7, done: false }，取其中的 value 得到 7。'
      },
      {
        type: 'single',
        question: '遍历数组时想直接拿到每个元素的值，应该使用？',
        options: ['for...in', 'for...of', 'Object.keys', 'typeof'],
        answer: 1,
        explanation: 'for...of 遍历可迭代对象并直接给出元素的值；for...in 拿到的是下标字符串。'
      },
      {
        type: 'judge',
        question: 'for...in 遍历数组时，拿到的是数组元素的值。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。for...in 拿到的是键（数组下标的字符串形式），for...of 拿到的才是值。'
      },
      {
        type: 'multiple',
        question: '以下哪些数据可以直接使用 for...of 遍历？（多选）',
        options: ['数组', '字符串', 'Map', '普通对象 {}'],
        answer: [0, 1, 2],
        explanation: '普通对象没有实现 Symbol.iterator，不能直接 for...of；数组、字符串、Map 都是可迭代对象。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconst it = [1, 2][Symbol.iterator]();\nit.next();\nconsole.log(it.next().value);',
        options: ['1', '2', 'undefined', '{ value: 2, done: false }'],
        answer: 1,
        explanation: '第一次 next 取走 1，第二次 next 返回 { value: 2, done: false }，value 为 2。'
      },
      {
        type: 'single',
        question: '迭代器的 next 方法每次返回的对象包含哪两个属性？',
        options: ['value 和 done', 'key 和 value', 'index 和 item', 'data 和 status'],
        answer: 0,
        explanation: '迭代器协议规定 next 返回 { value, done }：value 是当前值，done 表示是否结束。'
      },
      {
        type: 'judge',
        question: 'for...of 循环中可以使用 break 和 continue 控制流程。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。for...of 支持 break、continue 和 return，比 forEach 更灵活。'
      },
      {
        type: 'judge',
        question: 'for...in 只会遍历对象自身的属性，不会涉及原型链。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。for...in 会连原型链上的可枚举属性一起遍历，这是它容易出错的原因之一。'
      },
      {
        type: 'multiple',
        question: '以下关于迭代器协议的说法，哪些是正确的？（多选）',
        options: ['next 方法返回 { value, done } 形式的结果', 'done 为 true 表示遍历结束', '数组、字符串内置实现了 Symbol.iterator', '普通对象默认就是可迭代对象'],
        answer: [0, 1, 2],
        explanation: '普通对象没有实现 Symbol.iterator，默认不可迭代；其余三项均正确。'
      },
      {
        type: 'multiple',
        question: '以下哪些语法的底层依赖迭代协议？（多选）',
        options: ['for...of 循环', '展开运算符 ...', '数组的解构赋值', 'if 条件语句'],
        answer: [0, 1, 2],
        explanation: 'for...of、展开运算符、数组解构都建立在迭代协议之上；if 与迭代无关。'
      }
    ]
  },
  {
    id: 'es6-11',
    title: 'Proxy 与 Reflect 简介',
    summary: '拦截与自定义对象的基本操作',
    minutes: 15,
    sections: [
      {
        heading: 'Proxy 的基本用法',
        text: 'Proxy 可以在目标对象外面包一层「代理」，拦截对这个对象的各种操作。创建时传入两个参数：目标对象和一个处理器对象，处理器里定义各种「陷阱」方法来拦截操作。\n最常用的是 get 陷阱（读取属性时触发）和 set 陷阱（设置属性时触发）。在陷阱里可以加入自己的逻辑，比如属性不存在时返回默认值、赋值前做类型校验等。之后对代理对象的操作都会先经过这些陷阱。',
        code: 'const user = { name: "小明" };\nconst proxy = new Proxy(user, {\n  get(target, key) {\n    return key in target ? target[key] : "属性不存在";\n  }\n});\nconsole.log(proxy.name); // 小明\nconsole.log(proxy.age);  // 属性不存在',
        lang: 'js'
      },
      {
        heading: 'Proxy 的实际应用',
        text: 'Proxy 的强大之处在于它让对象的基本操作变得可以编程。典型应用有：数据校验，在 set 陷阱里拒绝非法赋值；实现响应式，在属性被修改时自动通知界面更新——Vue 3 的响应式系统就是基于 Proxy 实现的；还有实现负下标数组、只读对象等。\n相比以前的 Object.defineProperty，Proxy 能拦截的操作种类更多，还能监听新增属性和数组变化，功能更完整。',
        code: 'const ageProxy = new Proxy({ age: 18 }, {\n  set(target, key, value) {\n    if (key === "age" && typeof value !== "number") {\n      throw new Error("年龄必须是数字");\n    }\n    target[key] = value;\n    return true;\n  }\n});\nageProxy.age = "abc"; // 报错：年龄必须是数字',
        lang: 'js'
      },
      {
        heading: 'Reflect 简介',
        text: 'Reflect 是 ES6 新增的一个内置对象，它把对象的常用操作（如读取属性、设置属性、删除属性）统一收拢为函数形式，与 Proxy 的陷阱方法一一对应。\n在 Proxy 陷阱中，推荐用 Reflect 来完成默认行为，而不是直接操作目标对象，这样行为更规范、返回值也更合理。比如 Reflect.get(target, key) 等价于读取 target[key]，Reflect.set 设置属性并返回是否成功。把 Proxy 和 Reflect 搭配使用是最标准的写法。',
        code: 'const obj = { x: 1 };\nconsole.log(Reflect.get(obj, "x")); // 1\nReflect.set(obj, "y", 2);\nconsole.log(obj.y); // 2\nReflect.deleteProperty(obj, "x");\nconsole.log("x" in obj); // false',
        lang: 'js'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: '创建 Proxy 时，第二个参数是什么？',
        options: ['目标对象', '处理器对象（定义陷阱方法）', '一个数组', '一个字符串'],
        answer: 1,
        explanation: 'new Proxy(target, handler) 中第一个参数是目标对象，第二个参数是定义各种陷阱的处理器对象。'
      },
      {
        type: 'single',
        question: '在 Proxy 中拦截「读取属性」操作的陷阱方法是？',
        options: ['read', 'get', 'set', 'has'],
        answer: 1,
        explanation: 'get 陷阱在读取属性时触发，set 陷阱在设置属性时触发。'
      },
      {
        type: 'judge',
        question: 'Vue 3 的响应式系统是基于 Proxy 实现的。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。Vue 3 使用 Proxy 拦截属性的读写，从而实现更完整的响应式追踪。'
      },
      {
        type: 'multiple',
        question: '以下关于 Proxy 和 Reflect 的说法，哪些是正确的？（多选）',
        options: ['Proxy 可以拦截属性的读取和设置', 'Reflect 的方法与 Proxy 陷阱一一对应', '在陷阱中推荐用 Reflect 完成默认行为', 'Proxy 只能拦截 get 一种操作'],
        answer: [0, 1, 2],
        explanation: 'Proxy 能拦截 get、set、has、deleteProperty 等十多种操作，所以第四项错误；其余三项均正确。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconst p = new Proxy({}, {\n  get() {\n    return "hi";\n  }\n});\nconsole.log(p.anything);',
        options: ['undefined', 'hi', '报错', 'null'],
        answer: 1,
        explanation: '读取代理对象的任意属性都会触发 get 陷阱，这里统一返回 "hi"。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconst obj = { x: 1 };\nReflect.set(obj, "y", 2);\nconsole.log(obj.y);',
        options: ['undefined', '1', '2', '报错'],
        answer: 2,
        explanation: 'Reflect.set 等价于给对象设置属性，obj.y 被赋值为 2。'
      },
      {
        type: 'judge',
        question: '相比 Object.defineProperty，Proxy 能拦截的操作种类更多，还能监听新增属性和数组变化。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。这正是 Vue 3 改用 Proxy 实现响应式系统的重要原因。'
      },
      {
        type: 'judge',
        question: '在 set 陷阱中完成赋值后应返回 true，表示赋值成功。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。set 陷阱返回 true 表示赋值成功，返回 false 在严格模式下会抛错。'
      },
      {
        type: 'multiple',
        question: '以下哪些是 Proxy 的典型应用场景？（多选）',
        options: ['在 set 陷阱中做数据校验', '实现响应式系统（如 Vue 3）', '属性不存在时返回默认值', '让代码执行速度翻倍'],
        answer: [0, 1, 2],
        explanation: 'Proxy 用于拦截和自定义对象操作，与提升执行速度无关；其余三项均正确。'
      },
      {
        type: 'multiple',
        question: '以下关于 Reflect 的说法，哪些是正确的？（多选）',
        options: ['Reflect.get(target, key) 等价于读取 target[key]', 'Reflect.set 设置属性并返回是否成功', 'Reflect 的方法与 Proxy 陷阱一一对应', 'Reflect 需要用 new 实例化后才能使用'],
        answer: [0, 1, 2],
        explanation: 'Reflect 是内置对象，直接调用其静态方法即可，不能也不需要用 new；其余三项均正确。'
      }
    ]
  },
  {
    id: 'es6-12',
    title: 'Generator 生成器入门',
    summary: '可以暂停和恢复的函数',
    minutes: 15,
    sections: [
      {
        heading: '认识 Generator',
        text: 'Generator 是一种特殊的函数，定义时在 function 后面加星号（function*）。普通函数一旦调用就会从头执行到尾，而 Generator 函数可以「中途暂停」，之后还能从暂停处继续执行。\n调用 Generator 函数并不会立即执行函数体，而是返回一个迭代器对象。每次调用迭代器的 next 方法，函数才执行到下一个 yield 表达式并暂停，yield 后面的值会作为结果返回。这种「惰性执行」的特性非常适合处理序列数据。',
        code: 'function* gen() {\n  yield 1;\n  yield 2;\n  yield 3;\n}\nconst it = gen();\nconsole.log(it.next()); // { value: 1, done: false }\nconsole.log(it.next()); // { value: 2, done: false }\nconsole.log(it.next()); // { value: 3, done: false }\nconsole.log(it.next()); // { value: undefined, done: true }',
        lang: 'js'
      },
      {
        heading: 'next 方法与传值',
        text: '迭代器的 next 方法不仅能推进执行，还可以向 Generator 内部传值：next(x) 传入的值会成为上一个 yield 表达式的返回值，从而实现函数内外双向通信。\nGenerator 函数执行到 return 或自然结束时，迭代结束，done 变为 true，return 的值是最后一次的 value。由于 Generator 返回的是迭代器，它也可以直接用 for...of 遍历，循环会自动取出每个 yield 的值。',
        code: 'function* chat() {\n  const name = yield "你叫什么？";\n  yield "你好，" + name;\n}\nconst it = chat();\nconsole.log(it.next().value); // 你叫什么？\nconsole.log(it.next("小明").value); // 你好，小明\n\nfor (const n of (function*() { yield 1; yield 2; })()) {\n  console.log(n); // 1、2\n}',
        lang: 'js'
      },
      {
        heading: 'Generator 的应用场景',
        text: 'Generator 最常见的用途是生成序列，比如无穷数列：因为值是调用时才计算的，不用一次性把无限多个数存进内存。\n另一个用途是让对象变得可迭代：给对象实现一个 Generator 形式的 Symbol.iterator 方法，就能用 for...of 遍历它。此外，Generator「暂停-恢复」的能力曾被广泛用于处理异步流程，虽然如今大多被 async/await 取代，但理解它有助于掌握迭代器的底层原理，许多库（如 redux-saga）仍在使用。',
        code: 'function* infinite() {\n  let n = 1;\n  while (true) {\n    yield n++;\n  }\n}\nconst it = infinite();\nconsole.log(it.next().value); // 1\nconsole.log(it.next().value); // 2\nconsole.log(it.next().value); // 3（可以一直取下去）',
        lang: 'js'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nfunction* gen() {\n  yield 10;\n}\nconst it = gen();\nconsole.log(it.next().value);',
        options: ['undefined', '10', '报错', 'gen 函数本身'],
        answer: 1,
        explanation: '第一次调用 next 执行到第一个 yield 并暂停，返回 { value: 10, done: false }，value 为 10。'
      },
      {
        type: 'single',
        question: '调用 Generator 函数后，函数体会立即执行吗？',
        options: ['会，和普通函数一样', '不会，返回迭代器，调用 next 才执行', '会，但只执行一半', '取决于有没有 yield'],
        answer: 1,
        explanation: '调用 Generator 函数只返回一个迭代器对象，函数体要等第一次 next 调用才开始执行。'
      },
      {
        type: 'judge',
        question: 'Generator 函数返回的迭代器可以直接用 for...of 遍历。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。Generator 返回的对象是可迭代对象，for...of 会自动依次取出每个 yield 的值。'
      },
      {
        type: 'multiple',
        question: '以下关于 Generator 的说法，哪些是正确的？（多选）',
        options: ['定义时在 function 后加星号', 'yield 可以暂停函数执行', 'next 方法可以向函数内部传值', 'Generator 不能生成无穷序列'],
        answer: [0, 1, 2],
        explanation: 'Generator 是惰性求值的，非常适合生成无穷序列，所以第四项错误；其余三项均正确。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nfunction* g() {\n  yield 1;\n  yield 2;\n}\nconst it = g();\nit.next();\nconsole.log(it.next());',
        options: ['{ value: 1, done: false }', '{ value: 2, done: false }', '{ value: 2, done: true }', '2'],
        answer: 1,
        explanation: '第一次 next 执行到 yield 1 暂停，第二次 next 执行到 yield 2 暂停，返回 { value: 2, done: false }。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nfunction* g() {\n  const x = yield 1;\n  yield x * 2;\n}\nconst it = g();\nit.next();\nconsole.log(it.next(10).value);',
        options: ['1', '10', '20', 'NaN'],
        answer: 2,
        explanation: 'next(10) 传入的值成为上一个 yield 表达式的返回值，x 为 10，所以下一个 yield 的值为 20。'
      },
      {
        type: 'judge',
        question: 'Generator 适合生成无穷数列，因为值是调用时才计算的，不用一次性存进内存。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。这正是 Generator 惰性执行特性的典型应用。'
      },
      {
        type: 'judge',
        question: 'Generator 函数执行到 return 或自然结束时，迭代的 done 变为 true。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。函数结束后迭代完成，done 为 true，return 的值是最后一次的 value。'
      },
      {
        type: 'multiple',
        question: '以下哪些是 Generator 的常见应用场景？（多选）',
        options: ['生成序列（如无穷数列）', '给对象实现 Symbol.iterator 使其可迭代', 'redux-saga 等库中处理流程', '完全取代 Promise 处理所有异步任务'],
        answer: [0, 1, 2],
        explanation: 'Generator 曾用于异步流程，但如今大多被 async/await 取代，并非完全取代 Promise；其余三项均正确。'
      },
      {
        type: 'multiple',
        question: '以下关于 yield 的说法，哪些是正确的？（多选）',
        options: ['yield 后面的值会作为 next 结果的 value 返回', 'yield 可以让函数中途暂停', 'next(x) 传入的值会成为上一个 yield 表达式的返回值', '一个 Generator 函数中最多只能写一个 yield'],
        answer: [0, 1, 2],
        explanation: 'Generator 中可以有任意多个 yield，甚至可以在循环中使用；其余三项均正确。'
      }
    ]
  }
];
