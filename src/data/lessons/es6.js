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
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nfor (var i = 0; i < 2; i++) {}\nconsole.log(i);',
        options: ['报错', 'undefined', '2', '1'],
        answer: 2,
        explanation: 'var 没有块级作用域，循环结束后 i 泄漏到外部且值为 2；若改用 let，循环外访问 i 会报错。'
      },
      {
        type: 'judge',
        question: '在同一个作用域中，可以连续用 let 重复声明同名变量。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。let 不允许在同一作用域重复声明同名变量，会报语法错误。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconst arr = [1, 2];\narr.push(3);\nconsole.log(arr.length);',
        options: ['2', '3', '报错：不能修改常量', 'undefined'],
        answer: 1,
        explanation: 'const 只禁止重新赋值，数组是引用类型，push 修改的是数组内容，所以长度为 3。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nfor (let i = 0; i < 3; i++) {}\nconsole.log(i);',
        options: ['3', '2', 'undefined', '报错：i is not defined'],
        answer: 3,
        explanation: 'let 声明的 i 是块级作用域，只在 for 循环内有效，循环外访问会报错。'
      },
      {
        type: 'judge',
        question: 'var 声明的变量，在声明语句之前访问会得到 undefined。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。var 存在变量提升，声明被提升到作用域顶部，声明前访问得到 undefined。'
      },
      {
        type: 'judge',
        question: 'const 声明变量时可以先不赋值，等需要的时候再补上。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。const 声明时必须初始化赋值，只写 const a; 会报语法错误。'
      },
      {
        type: 'multiple',
        question: '以下关于 var 的说法，哪些是正确的？（多选）',
        options: ['var 存在变量提升', 'var 是函数作用域', 'var 允许在同一作用域重复声明同名变量', 'var 具有块级作用域'],
        answer: [0, 1, 2],
        explanation: 'var 有变量提升、是函数作用域、允许重复声明；它没有块级作用域，这正是 let/const 要解决的问题。'
      },
      {
        type: 'multiple',
        question: '以下哪些写法会报错？（多选）',
        options: ['const a;（只声明不赋值）', '同一作用域中 let a; let a;', 'const o = {}; o.x = 1;', '在 const 声明语句之前访问该变量'],
        answer: [0, 1, 3],
        explanation: 'const 必须声明时赋值、let 不允许重复声明、const 存在暂时性死区，这三项会报错；修改 const 对象的属性是允许的。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nlet a = 1;\n{\n  let a = 2;\n  console.log(a);\n}\nconsole.log(a);',
        options: ['1 1', '2 2', '2 1', '报错'],
        answer: 2,
        explanation: '块内的 let a 是新变量，块内输出 2；块外的 a 不受影响，输出 1。'
      },
      {
        type: 'judge',
        question: '在不同的代码块中，可以用 let 声明同名的变量，它们互不干扰。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。每个块级作用域相互独立，各自声明的同名 let 变量互不影响。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconsole.log(typeof x);\nlet x = 1;',
        options: ['undefined', '报错', 'number', 'string'],
        answer: 1,
        explanation: 'typeof 也无法绕过暂时性死区，在 let 声明前访问 x 会直接报错。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nvar a = 1;\n{\n  var a = 2;\n}\nconsole.log(a);',
        options: ['1', '2', 'undefined', '报错'],
        answer: 1,
        explanation: 'var 没有块级作用域，块内的 var a 与外部是同一个变量，被重新赋值为 2。'
      },
      {
        type: 'judge',
        question: 'const 声明的数组不能调用 push 方法添加元素。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。const 只禁止重新赋值，push 修改的是数组内容而非重新赋值，是允许的。'
      },
      {
        type: 'judge',
        question: '在 if 代码块中用 var 声明的变量，可以在代码块外部正常访问。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。var 没有块级作用域，if 块中声明的 var 变量会泄漏到外部。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nlet x = 2;\n{\n  console.log(x);\n  let x = 3;\n}',
        options: ['2', '3', 'undefined', '报错'],
        answer: 3,
        explanation: '块内存在自己的 let x，从块开始到声明语句之间是暂时性死区，访问会报错，而不会取到外层的 2。'
      },
      {
        type: 'judge',
        question: '使用 let 或 const 声明的全局变量，会像 var 一样成为全局对象 window 的属性。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。let/const 声明的全局变量不会挂载到 window 上，这也是它们与 var 的区别之一。'
      },
      {
        type: 'multiple',
        question: '以下关于全局变量声明的说法，哪些是正确的？（多选）',
        options: ['var 声明的全局变量会成为 window 的属性', 'let 声明的全局变量不会成为 window 的属性', 'const 声明的全局变量会成为 window 的属性', '块级作用域之间可以嵌套'],
        answer: [0, 1, 3],
        explanation: '只有 var 声明的全局变量会挂载到 window；块级作用域支持任意嵌套。'
      },
      {
        type: 'multiple',
        question: '以下关于变量提升的说法，哪些是正确的？（多选）',
        options: ['var 的声明会被提升并初始化为 undefined', 'let 声明前访问会报 ReferenceError', 'const 声明前访问得到 undefined', '函数声明可以被提升后提前调用'],
        answer: [0, 1, 3],
        explanation: 'let/const 声明前访问处于暂时性死区会报错，而不是得到 undefined；var 提升并初始化为 undefined，函数声明整体提升。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nlet i = 100;\nfor (let i = 0; i < 2; i++) {}\nconsole.log(i);',
        options: ['2', '0', '100', '报错'],
        answer: 2,
        explanation: 'for 循环内的 let i 是块级作用域中的新变量，不影响外部的 i，所以输出 100。'
      },
      {
        type: 'multiple',
        question: '以下哪些场景适合使用 const 声明？（多选）',
        options: ['保存不会被重新赋值的配置对象', '保存从模块中导入的函数', '保存需要不断自增的循环计数器', '保存引用固定不变的数组'],
        answer: [0, 1, 3],
        explanation: '需要重新赋值的计数器应使用 let；其余三项都是 const 的典型使用场景。'
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
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconst fn = () => ({ a: 1 });\nconsole.log(fn().a);',
        options: ['undefined', '1', '{ a: 1 }', '报错'],
        answer: 1,
        explanation: '箭头函数返回对象字面量时需要用小括号包裹，否则花括号会被当作函数体；这里返回 { a: 1 }，所以 fn().a 为 1。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconst name = "小明";\nconsole.log("你好，${name}");',
        options: ['你好，小明', '你好，${name}', '报错', 'undefined'],
        answer: 1,
        explanation: '${} 插值只在反引号包裹的模板字符串中生效，普通字符串会原样输出 ${name}。'
      },
      {
        type: 'judge',
        question: '箭头函数可以配合 new 关键字当作构造函数来创建实例。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。箭头函数没有自己的 this，也不能作为构造函数，用 new 调用会报错。'
      },
      {
        type: 'multiple',
        question: '以下哪些是箭头函数不具备的能力？（多选）',
        options: ['拥有自己的 this', '使用 arguments 对象', '作为构造函数被 new 调用', '用一行代码返回表达式结果'],
        answer: [0, 1, 2],
        explanation: '箭头函数没有自己的 this 和 arguments，也不能作为构造函数；单行返回表达式是它的简写能力。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconst say = () => "hi";\nconsole.log(typeof say);',
        options: ['"string"', '"function"', '"object"', '"undefined"'],
        answer: 1,
        explanation: '箭头函数本质上仍是函数，typeof 检测的结果是 function。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconst list = [1, 2, 3].map(n => n + 1);\nconsole.log(list);',
        options: ['[1, 2, 3]', '[2, 3, 4]', '6', '报错'],
        answer: 1,
        explanation: 'map 对每个元素执行箭头函数 n + 1，返回新数组 [2, 3, 4]。'
      },
      {
        type: 'judge',
        question: '模板字符串的 ${} 中可以写任意表达式，例如 ${1 + 1} 会被计算为 2。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。${} 内可以是变量、运算、函数调用等任意表达式，会先求值再插入。'
      },
      {
        type: 'multiple',
        question: '以下箭头函数写法中，哪些是合法的？（多选）',
        options: ['const f = a => a;', 'const f = () => 1;', 'const f = a => ({ v: a });', 'const f = a, b => a + b;'],
        answer: [0, 1, 2],
        explanation: '单参数可省略括号、无参数必须写空括号、返回对象字面量需用小括号包裹；多个参数必须写括号，第四项非法。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconst nums = [1, 2, 3];\nconst result = nums.filter(n => n % 2 === 1);\nconsole.log(result);',
        options: ['[1, 3]', '[2]', '[1, 2, 3]', '报错'],
        answer: 0,
        explanation: 'filter 保留让回调返回 true 的元素，奇数 1 和 3 被保留，结果为 [1, 3]。'
      },
      {
        type: 'judge',
        question: '在箭头函数内部可以使用 arguments 对象获取所有实参。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。箭头函数没有自己的 arguments 对象，需要收集实参应使用剩余参数。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconst double = x => x * 2;\nconst triple = x => x * 3;\nconsole.log(double(triple(2)));',
        options: ['12', '6', '4', '报错'],
        answer: 0,
        explanation: '先计算 triple(2) 得 6，再计算 double(6) 得 12。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconst arr = [1, 2, 3];\nconsole.log(arr.reduce((a, b) => a + b, 0));',
        options: ['6', '[1, 2, 3]', '0', 'NaN'],
        answer: 0,
        explanation: 'reduce 用箭头函数依次累加，初始值为 0，结果为 6。'
      },
      {
        type: 'judge',
        question: '把箭头函数作为对象的方法时，方法内的 this 指向该对象本身。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。箭头函数没有自己的 this，会继承定义时外层作用域的 this，不会指向对象本身。'
      },
      {
        type: 'judge',
        question: '模板字符串中可以直接换行书写多行文本，不需要书写换行转义符。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。模板字符串原生支持多行文本，源码中的换行会被保留在字符串中。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconst obj = {\n  n: 1,\n  get: () => this.n\n};\nconsole.log(obj.get());',
        options: ['1', 'undefined', '报错', 'null'],
        answer: 1,
        explanation: '箭头函数的 this 继承外层作用域而非 obj，this.n 为 undefined，所以输出 undefined。'
      },
      {
        type: 'judge',
        question: '模板字符串支持嵌套，${} 内部还可以再使用模板字符串。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。${} 中是任意表达式，自然也可以嵌套另一个模板字符串。'
      },
      {
        type: 'multiple',
        question: '以下关于模板字符串的说法，哪些是正确的？（多选）',
        options: ['可以嵌入变量和表达式', '支持直接书写多行文本', '可以在 ${} 中调用函数', '必须使用单引号包裹'],
        answer: [0, 1, 2],
        explanation: '模板字符串必须用反引号包裹，所以第四项错误；其余三项均正确。'
      },
      {
        type: 'multiple',
        question: '以下哪些场景不适合使用箭头函数？（多选）',
        options: ['需要动态 this 的对象方法', '需要用 new 创建实例的构造函数', '数组 map 方法的回调', '需要使用 arguments 对象的函数'],
        answer: [0, 1, 3],
        explanation: '箭头函数没有自己的 this 和 arguments，也不能作为构造函数；map 回调正是箭头函数的典型用途。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconst f = n => n > 0 ? "正" : "非正";\nconsole.log(f(-1));',
        options: ['正', '非正', '报错', 'undefined'],
        answer: 1,
        explanation: '箭头函数单行返回三元表达式的结果，-1 不大于 0，所以返回 "非正"。'
      },
      {
        type: 'multiple',
        question: '以下哪些代码的输出结果是 6？（多选）',
        options: ['const f = x => x + 1; f(5)', 'const f = (x) => { return x + 1; }; f(5)', 'const f = x => { x + 1 }; f(5)', 'const f = () => 6; f()'],
        answer: [0, 1, 3],
        explanation: '第三项写了花括号却没有 return，返回 undefined；其余三项的结果都是 6。'
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
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconst { a: { b } } = { a: { b: 2 } };\nconsole.log(b);',
        options: ['undefined', '2', '报错', '{ b: 2 }'],
        answer: 1,
        explanation: '对象解构支持嵌套模式，这里沿属性路径 a.b 取出值赋给变量 b，所以输出 2。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconst arr1 = [1, 2];\nconst arr2 = arr1;\narr2.push(3);\nconsole.log(arr1.length);',
        options: ['2', '3', '报错', 'undefined'],
        answer: 1,
        explanation: '直接赋值复制的是引用，arr1 和 arr2 指向同一个数组，所以 arr1.length 变为 3；想复制新数组应使用 [...arr1]。'
      },
      {
        type: 'judge',
        question: '对象解构时可以用冒号为变量重命名，例如 const { name: n } = obj 会把 obj.name 赋给变量 n。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。冒号左边是要匹配的属性名，右边才是新变量名。'
      },
      {
        type: 'multiple',
        question: '以下关于三个点（...）写法的说法，哪些是正确的？（多选）',
        options: ['用在参数列表或解构末尾时是剩余参数，负责收集', '用在数组或对象字面量中是展开运算符，负责拆开', '剩余参数收集到的是真正的数组', '剩余参数可以放在参数列表的任意位置'],
        answer: [0, 1, 2],
        explanation: '剩余参数必须放在最后位置，否则报错；其余三项均正确。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconst [a, b] = [1];\nconsole.log(b);',
        options: ['1', 'undefined', 'null', '报错'],
        answer: 1,
        explanation: '数组第二个位置没有对应的值，b 得到 undefined（这里没设默认值）。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconst { a, ...rest } = { a: 1, b: 2, c: 3 };\nconsole.log(rest);',
        options: ['{ a: 1 }', '{ b: 2, c: 3 }', '[2, 3]', '报错'],
        answer: 1,
        explanation: '对象解构中剩余部分会被收集到一个新对象，rest 为 { b: 2, c: 3 }。'
      },
      {
        type: 'judge',
        question: '利用数组解构可以一行代码交换两个变量：写成 [a, b] = [b, a]。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。右侧先构造临时数组，再按位置解构赋值，无需借助中间变量。'
      },
      {
        type: 'multiple',
        question: '以下关于对象解构的说法，哪些是正确的？（多选）',
        options: ['可以用冒号为变量重命名', '可以设置默认值', '支持嵌套解构', '对象解构按属性书写的位置一一对应'],
        answer: [0, 1, 2],
        explanation: '对象解构按属性名匹配而非位置；重命名、默认值、嵌套解构都是支持的。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconsole.log(Math.max(...[3, 9, 5]));',
        options: ['[3, 9, 5]', '9', 'NaN', '报错'],
        answer: 1,
        explanation: '展开运算符把数组拆成 3, 9, 5 三个实参传入 Math.max，返回最大值 9。'
      },
      {
        type: 'judge',
        question: 'const [a, ...rest, b] = [1, 2, 3] 是一种合法的解构写法。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。剩余参数只能放在解构模式的最后位置，中间出现会报语法错误。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconst [a = 1, b = 2] = [10];\nconsole.log(a + b);',
        options: ['3', '12', 'NaN', '报错'],
        answer: 1,
        explanation: 'a 取到 10 默认值不生效；b 取到 undefined，默认值 2 生效，所以 10 + 2 等于 12。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconst { x, y = 5 } = { x: 1, y: null };\nconsole.log(y);',
        options: ['5', 'null', 'undefined', '报错'],
        answer: 1,
        explanation: '解构默认值只在取到 undefined 时生效，y 的值是 null，不会触发默认值，所以输出 null。'
      },
      {
        type: 'judge',
        question: '解构赋值可以直接用在函数参数上，例如 function f({ a, b }) {} 这种写法是合法的。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。函数参数支持对象和数组解构，调用时传入的对象会被自动解构。'
      },
      {
        type: 'judge',
        question: '展开运算符 [...arr] 会直接修改原数组。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。[...arr] 创建的是一个新数组，不会修改原数组。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nfunction f(a, ...rest) {\n  return rest.length;\n}\nconsole.log(f(1, 2, 3));',
        options: ['3', '2', '1', '报错'],
        answer: 1,
        explanation: '第一个实参 1 赋给 a，剩余的 2、3 被收集到 rest，长度为 2。'
      },
      {
        type: 'judge',
        question: '对象的展开可以合并多个对象，同名属性时后面的对象会覆盖前面的。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。{ ...obj1, ...obj2 } 中同名属性以后面的为准，与 Object.assign 行为一致。'
      },
      {
        type: 'multiple',
        question: '以下哪些写法能得到新数组 [1, 2, 3, 4]？（多选）',
        options: ['[...[1, 2], ...[3, 4]]', '[1, 2].concat([3, 4])', '[[1, 2], [3, 4]]', '[1, 2, ...[3, 4]]'],
        answer: [0, 1, 3],
        explanation: '第三项只是把两个数组放进一个新数组，得到的是嵌套数组；其余三项都能得到 [1, 2, 3, 4]。'
      },
      {
        type: 'multiple',
        question: '以下关于函数参数解构的说法，哪些是正确的？（多选）',
        options: ['可以对数组类型的参数解构', '可以对对象类型的参数解构', '参数解构支持设置默认值', '参数解构时必须取出全部属性'],
        answer: [0, 1, 2],
        explanation: '参数解构可以只取需要的部分，不要求取出全部属性；其余三项均正确。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconst { length } = "hello";\nconsole.log(length);',
        options: ['undefined', '5', '报错', 'hello'],
        answer: 1,
        explanation: '字符串会被包装成对象再按属性名解构，取出 length 属性的值 5。'
      },
      {
        type: 'multiple',
        question: '以下关于解构赋值的说法，哪些是正确的？（多选）',
        options: ['const { a } = null 会报错', '数组解构的右侧可以是任何可迭代对象', '解构可以只取需要的部分属性', '解构只能用于数组，不能用于对象'],
        answer: [0, 1, 2],
        explanation: 'null 和 undefined 无法解构会报错；数组解构依赖迭代协议所以可迭代对象都可以；对象解构同样合法。'
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
      },
      {
        type: 'single',
        question: '下面代码的输出顺序是？\nconsole.log("A");\nsetTimeout(() => console.log("B"), 0);\nPromise.resolve().then(() => console.log("C"));\nconsole.log("D");',
        options: ['A B C D', 'A D B C', 'A D C B', 'A C D B'],
        answer: 2,
        explanation: '同步代码先输出 A、D；then 回调是微任务，先于宏任务 setTimeout 执行，所以顺序是 A、D、C、B。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nPromise.resolve(1)\n  .then(v => v + 1)\n  .then(v => v * 2)\n  .then(v => console.log(v));',
        options: ['1', '2', '4', 'undefined'],
        answer: 2,
        explanation: '链式调用中每个 then 的返回值会传给下一个 then：1 加 1 得 2，再乘 2 得 4，所以输出 4。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nPromise.reject("出错了")\n  .then(() => console.log("A"))\n  .catch(e => console.log("B", e))\n  .then(() => console.log("C"));',
        options: ['只输出 B 出错了', '输出 B 出错了，然后输出 C', '只输出 A', '程序中断，什么都不输出'],
        answer: 1,
        explanation: 'reject 跳过第一个 then 进入 catch；catch 处理完后返回的是成功的 Promise，链式调用继续，所以还会输出 C。'
      },
      {
        type: 'single',
        question: '下面代码的输出顺序是？\nasync function f() {\n  console.log(1);\n  await Promise.resolve();\n  console.log(2);\n}\nf();\nconsole.log(3);',
        options: ['1 2 3', '1 3 2', '3 1 2', '1 3'],
        answer: 1,
        explanation: 'f() 先同步输出 1，await 之后的代码作为微任务挂起；主线程继续输出 3，最后再执行输出 2。'
      },
      {
        type: 'judge',
        question: '在 then 的回调中抛出错误，会被链条上后续最近的 catch 捕获。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。then 回调中抛出的错误会让返回的 Promise 变为 rejected，交给后面的 catch 处理。'
      },
      {
        type: 'multiple',
        question: '以下关于事件循环与异步任务的说法，哪些是正确的？（多选）',
        options: ['Promise 的 then 回调属于微任务', 'setTimeout 的回调属于宏任务', '同步代码执行完后会先清空微任务队列再执行宏任务', 'await 会阻塞浏览器主线程'],
        answer: [0, 1, 2],
        explanation: 'await 只暂停所在 async 函数，主线程可以继续处理其他任务；其余三项均正确。'
      },
      {
        type: 'single',
        question: '下面代码的输出顺序是？\nnew Promise((resolve) => {\n  console.log(1);\n  resolve(2);\n});\nconsole.log(3);',
        options: ['1 3', '3 1', '1 2 3', '报错'],
        answer: 0,
        explanation: 'Promise 的执行器函数是同步执行的，先输出 1，resolve 的结果无人接收，随后输出 3。'
      },
      {
        type: 'judge',
        question: 'Promise 的 then 方法每次调用都会返回一个新的 Promise 对象，因此可以链式调用。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。then 返回新 Promise，其状态由回调的执行结果决定，这是链式调用的基础。'
      },
      {
        type: 'multiple',
        question: '以下关于 Promise.all 的说法，哪些是正确的？（多选）',
        options: ['全部成功时 then 拿到结果数组', '结果数组的顺序与传入顺序一致', '任一失败则整体进入 rejected', '传入的必须是 Set 而不能是数组'],
        answer: [0, 1, 2],
        explanation: 'Promise.all 接收 Promise 数组，结果顺序与传入顺序一致，任一失败整体失败；不要求传入 Set。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nasync function f() {\n  const a = await 10;\n  console.log(a);\n}\nf();',
        options: ['Promise 对象', '10', 'undefined', '报错'],
        answer: 1,
        explanation: 'await 后面不是 Promise 时会直接得到该值本身，所以 a 为 10。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nPromise.resolve(1)\n  .then(v => {\n    console.log(v);\n    return v * 10;\n  })\n  .then(v => console.log(v));',
        options: ['只输出 1', '先输出 1 再输出 10', '只输出 10', '报错'],
        answer: 1,
        explanation: '第一个 then 输出 1 并返回 10，返回值传给下一个 then，所以接着输出 10。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nPromise.all([Promise.resolve(1), Promise.resolve(2)])\n  .then(r => console.log(r));',
        options: ['[1, 2]', '1', '2', '报错'],
        answer: 0,
        explanation: 'Promise.all 全部成功时，then 拿到按传入顺序排列的结果数组 [1, 2]。'
      },
      {
        type: 'judge',
        question: 'new Promise 传入的执行器函数是同步执行的。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。执行器函数在创建 Promise 时立即同步执行，只有 then/catch 的回调才是异步的。'
      },
      {
        type: 'judge',
        question: 'async 函数内部抛出错误时，它返回的 Promise 会变成 rejected 状态。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。async 函数中抛出的错误会让返回的 Promise 被拒绝，可以被调用方的 catch 捕获。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconst p = Promise.resolve(5);\nconsole.log(p === p.then(v => v));',
        options: ['true', 'false', '5', '报错'],
        answer: 1,
        explanation: 'then 每次调用都会返回一个全新的 Promise，与原 Promise 不是同一个对象，所以结果为 false。'
      },
      {
        type: 'judge',
        question: 'finally 的回调无论 Promise 成功还是失败都会执行，且不接收成功或失败的结果值。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。finally 用于收尾逻辑，回调没有参数，且不影响结果继续向后传递。'
      },
      {
        type: 'multiple',
        question: '以下关于 Promise 链式调用的说法，哪些是正确的？（多选）',
        options: ['then 回调中 return 的值会传给下一个 then', 'then 回调中 return 一个 Promise 时，下一个 then 会等它完成', 'catch 处理完错误后链条还可以继续 then', '一条链上最多只能有一个 catch 且必须写在末尾'],
        answer: [0, 1, 2],
        explanation: 'catch 数量和位置没有限制，catch 之后依然可以继续链式调用；其余三项均正确。'
      },
      {
        type: 'multiple',
        question: '以下哪些写法能正确处理 async/await 中的异步错误？（多选）',
        options: ['在 async 函数内用 try/catch 包裹 await', '调用 async 函数后用 .catch 捕获', '给单个 await 的 Promise 加 .catch 处理', '用 if 语句直接判断 Promise 的状态'],
        answer: [0, 1, 2],
        explanation: '无法通过 if 直接读取 Promise 的内部状态；其余三项都是常见的错误处理方式。'
      },
      {
        type: 'single',
        question: '下面代码的输出顺序是？\nconsole.log("start");\nasync function f() {\n  console.log("in");\n}\nf();\nconsole.log("end");',
        options: ['start in end', 'start end in', 'in start end', '报错'],
        answer: 0,
        explanation: '函数体内没有 await，调用 f() 时同步执行输出 in，所以整体顺序是 start、in、end。'
      },
      {
        type: 'multiple',
        question: '以下关于 Promise.allSettled 结果的说法，哪些是正确的？（多选）',
        options: ['结果数组的每一项都带 status 属性', '成功的项带 value，失败的项带 reason', '即使全部失败它也会正常返回结果而不是 reject', '结果数组的顺序是随机的'],
        answer: [0, 1, 2],
        explanation: 'allSettled 的结果顺序与传入顺序一致，并非随机；其余三项均正确。'
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
      },
      {
        type: 'single',
        question: '已知 math.js 中命名导出了 add 函数，导入时想给它起别名 sum，正确写法是？',
        options: ['import add as sum from "./math.js";', 'import { add as sum } from "./math.js";', 'import { sum: add } from "./math.js";', 'import sum from "./math.js";'],
        answer: 1,
        explanation: '给命名导出的成员起别名，要在花括号内使用 as 关键字：import { add as sum }。'
      },
      {
        type: 'judge',
        question: '父类中定义的原型方法，子类的实例可以直接调用。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。extends 继承会把父类原型链接到子类上，子类实例可以直接使用父类方法。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nclass A {\n  hi() {\n    return "hi";\n  }\n}\nconst a = new A();\nconsole.log(a.hi());',
        options: ['hi', 'undefined', '报错：a.hi is not a function', 'A'],
        answer: 0,
        explanation: '类中直接书写的方法是原型方法，实例 a 可以调用，返回 "hi"。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nclass A {\n  constructor(name) {\n    this.name = name;\n  }\n}\nconst a = new A("小猫");\nconsole.log(a.name);',
        options: ['undefined', '小猫', 'name', '报错'],
        answer: 1,
        explanation: 'new 实例时自动执行 constructor，把 "小猫" 赋给 this.name，所以输出 小猫。'
      },
      {
        type: 'single',
        question: '子类重写了与父类同名的方法后，想在子类方法内部调用父类的同名方法，应使用？',
        options: ['this.方法名()', 'super.方法名()', 'parent.方法名()', '直接写方法名()'],
        answer: 1,
        explanation: 'super 除了调用父类构造函数，还可以通过 super.方法名() 访问父类的方法。'
      },
      {
        type: 'judge',
        question: '在浏览器中，给 script 标签添加 type="module" 属性后，就可以在脚本中使用 import 和 export。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。浏览器通过 type="module" 原生支持 ES 模块，也可以借助 Vite 等打包工具。'
      },
      {
        type: 'judge',
        question: 'import 语句可以写在代码的任意位置，包括函数内部和 if 代码块中。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。import 声明只能出现在模块的顶层作用域，写在函数或代码块中会报语法错误。'
      },
      {
        type: 'multiple',
        question: '以下关于 class 继承的说法，哪些是正确的？（多选）',
        options: ['通过 extends 关键字实现继承', '子类 constructor 中用 super() 调用父类构造函数', '子类实例可以调用父类的方法', '子类 constructor 中不写 super() 也能直接使用 this'],
        answer: [0, 1, 2],
        explanation: '子类构造函数中必须先调用 super() 才能访问 this，否则报错；其余三项均正确。'
      },
      {
        type: 'multiple',
        question: '以下关于 import 导入的说法，哪些是正确的？（多选）',
        options: ['导入默认导出时不用花括号', '导入命名导出时可以用 as 起别名', '可以在一行中同时导入默认导出和命名导出', '相对路径必须省略 .js 后缀'],
        answer: [0, 1, 2],
        explanation: '相对路径以 ./ 或 ../ 开头，是否写后缀取决于环境，并非必须省略；其余三项均正确。'
      },
      {
        type: 'single',
        question: '已知 hello.js 中只有 export default function hello() {}，正确的导入方式是？',
        options: ['import { hello } from "./hello.js";', 'import hello from "./hello.js";', 'import * hello from "./hello.js";', 'import default from "./hello.js";'],
        answer: 1,
        explanation: '默认导出导入时不用花括号，名称可以自定义，所以 import hello from 是正确的。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nclass A {\n  constructor() {\n    this.n = 0;\n  }\n  add() {\n    this.n++;\n  }\n}\nconst a = new A();\na.add();\na.add();\nconsole.log(a.n);',
        options: ['0', '1', '2', '报错'],
        answer: 2,
        explanation: 'add 是原型方法，调用两次让实例属性 n 自增两次，结果为 2。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nclass Animal {\n  speak() {\n    return "...";\n  }\n}\nclass Dog extends Animal {\n  speak() {\n    return "汪汪";\n  }\n}\nconsole.log(new Dog().speak());',
        options: ['...', '汪汪', '报错', 'undefined'],
        answer: 1,
        explanation: '子类重写了父类的 speak 方法，调用时优先使用子类自己的方法，输出 汪汪。'
      },
      {
        type: 'judge',
        question: 'class 声明存在暂时性死区，在声明语句之前 new 这个类会报错。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。与 let/const 类似，class 声明不会被提升，声明前使用会报错。'
      },
      {
        type: 'judge',
        question: '导出时除了在声明前加 export，也可以先声明再统一用 export { 名称 } 导出。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。两种命名导出的写法是等价的，可以把多个成员集中在一处导出。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nclass A {\n  constructor(name) {\n    this.name = name;\n  }\n}\nclass B extends A {}\nconst b = new B("x");\nconsole.log(b.name);',
        options: ['undefined', 'x', '报错：缺少 constructor', 'null'],
        answer: 1,
        explanation: '子类不写 constructor 时会自动继承父类构造函数，name 被赋值为 "x"。'
      },
      {
        type: 'judge',
        question: '同一个模块文件中可以有多个命名导出。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。命名导出的数量不受限制，只有默认导出才限定一个。'
      },
      {
        type: 'multiple',
        question: '关于 class 的方法与实例化，以下哪些说法是正确的？（多选）',
        options: ['类中直接书写的方法是原型方法', 'constructor 中可以给实例添加属性', 'instanceof 可以判断实例是否由某个类创建', 'class 声明前可以提前使用'],
        answer: [0, 1, 2],
        explanation: 'class 声明存在暂时性死区，不能提前使用；其余三项均正确。'
      },
      {
        type: 'multiple',
        question: '以下哪些是合法的导出写法？（多选）',
        options: ['export const a = 1;', 'const b = 2; export { b };', 'export default 3 + 4;', 'export default const c = 3;'],
        answer: [0, 1, 2],
        explanation: 'export default 后面直接跟表达式即可，不能再写 const 声明，第四项是语法错误；其余三项均合法。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nclass A {\n  hi() {\n    return "A";\n  }\n}\nclass B extends A {\n  hi() {\n    return super.hi() + "B";\n  }\n}\nconsole.log(new B().hi());',
        options: ['A', 'B', 'AB', '报错'],
        answer: 2,
        explanation: '子类方法中通过 super.hi() 调用父类方法得到 "A"，拼接 "B" 后返回 "AB"。'
      },
      {
        type: 'multiple',
        question: '以下哪些是 ES6 模块化带来的好处？（多选）',
        options: ['代码可以拆分到多个文件，便于维护', '可以按需导入需要的功能', '避免所有变量都挤在全局作用域', '模块化后的代码完全无法复用'],
        answer: [0, 1, 2],
        explanation: '模块化恰恰是为了复用代码，所以第四项错误；其余三项均正确。'
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
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconst user = undefined;\nconsole.log(user?.name ?? "匿名");',
        options: ['undefined', '报错', '匿名', 'null'],
        answer: 2,
        explanation: '可选链让 user?.name 短路返回 undefined，随后 ?? 判定左边为 undefined，返回右边的 "匿名"。'
      },
      {
        type: 'judge',
        question: '可以使用 Object.keys(map) 获取 Map 实例的所有键。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。Map 的键存放在内部结构中而非自身属性上，应使用 map.keys() 获取，Object.keys 对 Map 无效。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconst s = new Set();\ns.add(1);\ns.add(1);\nconsole.log(s.size);',
        options: ['2', '1', '0', '报错'],
        answer: 1,
        explanation: 'Set 中的值不会重复，重复 add 同一个值无效，所以 size 为 1。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconst m = new Map();\nconst k = {};\nm.set(k, "v");\nconsole.log(m.get(k));',
        options: ['undefined', 'v', '报错：键必须是字符串', 'null'],
        answer: 1,
        explanation: 'Map 的键可以是任意类型，用同一个对象作键可以取回对应的值 "v"。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconst obj = { a: { b: { c: 5 } } };\nconsole.log(obj.a?.b?.c);',
        options: ['undefined', '5', '报错', 'null'],
        answer: 1,
        explanation: '每一层都存在时可选链正常取到最内层的值，结果为 5。'
      },
      {
        type: 'judge',
        question: 'Set 实例可以通过下标访问成员，例如 set[0] 取第一个成员。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。Set 不是按下标存储的，没有 set[0] 这种访问方式，可转成数组后再取下标。'
      },
      {
        type: 'judge',
        question: '表达式 "" ?? "默认" 的结果是 "默认"。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。空字符串不是 null 或 undefined，?? 不会取右边的值，结果是空字符串。'
      },
      {
        type: 'multiple',
        question: '以下哪些是 Map 提供的常用方法？（多选）',
        options: ['set 设置键值对', 'get 按键获取值', 'has 判断键是否存在', 'push 添加成员'],
        answer: [0, 1, 2],
        explanation: 'push 是数组的方法；Map 用 set、get、has、delete、size 管理键值对。'
      },
      {
        type: 'multiple',
        question: '以下关于可选链 ?. 的说法，哪些是正确的？（多选）',
        options: ['obj?.a 在 obj 为 null 或 undefined 时返回 undefined', 'arr?.[0] 这种写法可用于数组', '使用可选链会修改原对象', 'obj?.a 在 obj 为 0 时会短路返回 undefined'],
        answer: [0, 1],
        explanation: '可选链只读不改，且只在 null 或 undefined 时短路，0 不会触发短路；前两项正确。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconsole.log(0 || "空", 0 ?? "空");',
        options: ['0 0', '空 空', '空 0', '0 空'],
        answer: 2,
        explanation: '|| 把 0 当作假值返回 "空"；?? 只认 null 和 undefined，所以返回 0，最终输出 空 0。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconst s = new Set("aab");\nconsole.log(s.size);',
        options: ['3', '2', '1', '报错'],
        answer: 1,
        explanation: '字符串可迭代，Set 收集其中的字符并去重，成员为 "a"、"b"，size 为 2。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconst m = new Map([["a", 1], ["a", 2]]);\nconsole.log(m.get("a"));',
        options: ['1', '2', '报错：键重复', 'undefined'],
        answer: 1,
        explanation: 'Map 中重复的键会被后面的覆盖，键 "a" 最终的值为 2。'
      },
      {
        type: 'judge',
        question: '数组去重可以用 [...new Set(arr)] 一行代码完成。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。Set 自动去重，再用展开运算符转回数组，是最常用的去重写法。'
      },
      {
        type: 'judge',
        question: 'Map 实例可以通过 length 属性获取键值对的数量。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。Map 获取成员数量用 size 属性，length 是数组的属性。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconst obj = { a: null };\nconsole.log(obj.a?.b);',
        options: ['报错', 'undefined', 'null', '0'],
        answer: 1,
        explanation: 'obj.a 为 null，可选链短路返回 undefined，不会报错。'
      },
      {
        type: 'judge',
        question: '在常规场景下，arr.includes(x) 与 arr.indexOf(x) !== -1 的判断结果一致。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。两者都用于判断包含关系，includes 语义更直观，仅在 NaN 等特殊值上表现不同。'
      },
      {
        type: 'multiple',
        question: '以下哪些方式可以遍历 Set 的成员？（多选）',
        options: ['for...of 循环', 'forEach 方法', '先用展开运算符转成数组再遍历', '通过下标 s[0] 依次访问'],
        answer: [0, 1, 2],
        explanation: 'Set 没有下标访问方式，所以第四项错误；其余三项均可遍历 Set。'
      },
      {
        type: 'multiple',
        question: '以下关于空值合并运算符 ?? 的说法，哪些是正确的？（多选）',
        options: ['null ?? 1 的结果是 1', 'undefined ?? 1 的结果是 1', 'false ?? 1 的结果是 false', '空字符串 ?? 1 的结果是 1'],
        answer: [0, 1, 2],
        explanation: '?? 只认 null 和 undefined，空字符串不会触发，结果仍是空字符串；其余三项均正确。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconsole.log(Object.assign({ a: 1 }, { b: 2 }));',
        options: ['{ a: 1 }', '{ a: 1, b: 2 }', '{ b: 2 }', '报错'],
        answer: 1,
        explanation: 'Object.assign 把源对象的属性复制到目标对象并返回它，结果为合并后的 { a: 1, b: 2 }。'
      },
      {
        type: 'multiple',
        question: '以下哪些场景更适合使用 Map 而不是普通对象？（多选）',
        options: ['键是对象等非字符串类型', '需要频繁增删键值对', '需要随时明确获取键值对的数量', '需要直接 JSON.stringify 序列化'],
        answer: [0, 1, 2],
        explanation: 'Map 不能直接 JSON 序列化，普通对象反而更适合；其余三项都是 Map 的优势场景。'
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
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconsole.log([1, 2, 3].findIndex(n => n > 5));',
        options: ['undefined', '-1', '0', 'null'],
        answer: 1,
        explanation: 'findIndex 找不到满足条件的元素时返回 -1，而 find 找不到时返回 undefined。'
      },
      {
        type: 'judge',
        question: 'find 方法会返回所有满足条件的元素组成的新数组。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。find 只返回第一个满足条件的元素本身，找到即停止。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconsole.log([1, [2, 3]].flat());',
        options: ['[1, [2, 3]]', '[1, 2, 3]', '[[1], [2, 3]]', '报错'],
        answer: 1,
        explanation: 'flat 默认拍平一层嵌套，[1, [2, 3]] 拍平后得到 [1, 2, 3]。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconsole.log(Array.of(1, 2, 3));',
        options: ['[1, 2, 3]', '长度为 3 的空数组', '[3]', '报错'],
        answer: 0,
        explanation: 'Array.of 把传入的一组值直接组成数组，结果为 [1, 2, 3]。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconsole.log([10, 20, 30].find(n => n > 25));',
        options: ['[30]', '30', '2', 'undefined'],
        answer: 1,
        explanation: 'find 返回第一个大于 25 的元素本身，即 30；返回下标的是 findIndex。'
      },
      {
        type: 'judge',
        question: '数组 ["a"].includes("A") 的结果是 true。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。includes 使用严格相等比较，字符串区分大小写，所以结果是 false。'
      },
      {
        type: 'judge',
        question: 'Array.from 只能转换数组，不能转换字符串或 Set 等其他可迭代对象。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。Array.from 可以转换类数组对象和任意可迭代对象，包括字符串、Set、Map 等。'
      },
      {
        type: 'multiple',
        question: '以下关于 find 与 findIndex 区别的说法，哪些是正确的？（多选）',
        options: ['find 返回满足条件的元素本身', 'findIndex 返回满足条件的元素下标', 'find 找不到时返回 undefined', 'findIndex 找不到时返回 undefined'],
        answer: [0, 1, 2],
        explanation: 'findIndex 找不到时返回 -1 而不是 undefined；其余三项均正确。'
      },
      {
        type: 'multiple',
        question: '以下哪些值可以作为 Array.from 的参数，被转换成数组？（多选）',
        options: ['类数组对象（如 arguments）', 'Set 实例', '字符串', '任意普通函数'],
        answer: [0, 1, 2],
        explanation: 'Array.from 接收类数组对象或可迭代对象，普通函数既不是类数组也不可迭代；其余三项均正确。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconsole.log([1, 2].flatMap(n => n > 1 ? [n, n] : []));',
        options: ['[1, 1, 2, 2]', '[2, 2]', '[1, 2]', '报错'],
        answer: 1,
        explanation: '1 不满足条件映射为空数组，2 映射为 [2, 2]，再拍平一层，结果为 [2, 2]。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconsole.log([1, 2, 3, 4].find(n => n % 2 === 0));',
        options: ['[2, 4]', '2', '4', 'true'],
        answer: 1,
        explanation: 'find 只返回第一个满足条件的元素本身，第一个偶数是 2。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconsole.log([[1], [2]].flat().length);',
        options: ['1', '2', '4', '报错'],
        answer: 1,
        explanation: 'flat 默认拍平一层得到 [1, 2]，长度为 2。'
      },
      {
        type: 'judge',
        question: 'flatMap 的回调返回非数组值时也可以正常工作。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。回调返回普通值时会直接作为结果元素，只有返回数组时才会被拍平一层。'
      },
      {
        type: 'judge',
        question: 'Array.from({ length: 3 }) 会得到一个长度为 3、每个元素都是 undefined 的数组。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。{ length: 3 } 是类数组对象，转换后得到 [undefined, undefined, undefined]，常配合第二参数生成序列。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconsole.log(["a", "b", "c"].findIndex(n => n === "c"));',
        options: ['2', '"c"', '-1', 'true'],
        answer: 0,
        explanation: 'findIndex 返回满足条件的元素下标，"c" 的下标是 2。'
      },
      {
        type: 'judge',
        question: 'find 方法找到目标元素后仍会继续遍历完整个数组。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。find 找到第一个满足条件的元素后立即停止并返回，不会继续遍历。'
      },
      {
        type: 'multiple',
        question: '以下代码的运行结果哪些为 true？（多选）',
        options: ['[1, 2, 3].includes(2)', '"hello".includes("ell")', '[NaN].includes(NaN)', '[1, 2, 3].includes("2")'],
        answer: [0, 1, 2],
        explanation: 'includes 使用严格比较，数字 2 与字符串 "2" 不相等，第四项为 false；其余三项均为 true。'
      },
      {
        type: 'multiple',
        question: '以下关于 flat 方法的说法，哪些是正确的？（多选）',
        options: ['可以传入数字指定拍平深度', '返回新数组，不修改原数组', '拍平的同时会去除数组中的空位', '只能拍平元素为数字的数组'],
        answer: [0, 1, 2],
        explanation: 'flat 对元素类型没有限制，任意嵌套数组都可以拍平；其余三项均正确。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconsole.log(Array.from({ length: 2 }, (_, i) => i * 10));',
        options: ['[0, 10]', '[10, 20]', '[0, 1]', '报错'],
        answer: 0,
        explanation: 'Array.from 的第二个参数对每个元素做处理，下标 0、1 分别乘 10，得到 [0, 10]。'
      },
      {
        type: 'multiple',
        question: '以下哪些数组方法会返回新数组而不修改原数组？（多选）',
        options: ['map', 'filter', 'flat', 'sort'],
        answer: [0, 1, 2],
        explanation: 'sort 会直接修改原数组；map、filter、flat 都返回新数组。'
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
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconst obj = { a: 1, b: 2 };\nconsole.log(Object.keys(obj).map(k => obj[k]));',
        options: ['["a", "b"]', '[1, 2]', '[["a", 1], ["b", 2]]', '报错'],
        answer: 1,
        explanation: 'Object.keys 返回键数组 ["a", "b"]，再用 map 取出每个键对应的值，得到 [1, 2]。'
      },
      {
        type: 'judge',
        question: 'for...in 会遍历对象原型链上的可枚举属性，因此遍历对象自身键时更推荐 Object.keys。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。for...in 会把原型链上的可枚举属性也遍历出来，Object.keys 只返回对象自身的键。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconst a = 1, b = 2;\nconst obj = { a, b };\nconsole.log(Object.values(obj));',
        options: ['["a", "b"]', '[1, 2]', '[["a", 1], ["b", 2]]', '报错'],
        answer: 1,
        explanation: '属性简写后 obj 为 { a: 1, b: 2 }，Object.values 返回值组成的数组 [1, 2]。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconst obj = {\n  say() {\n    return "hello";\n  }\n};\nconsole.log(obj.say());',
        options: ['undefined', 'hello', '报错：obj.say is not a function', 'say'],
        answer: 1,
        explanation: '这是方法简写，等价于 say: function() {...}，调用后返回 "hello"。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconst m = new Map([["a", 1]]);\nconsole.log(Object.fromEntries(m).a);',
        options: ['undefined', '1', '报错', '["a", 1]'],
        answer: 1,
        explanation: 'Object.fromEntries 可以把 Map（键值对集合）转成对象 { a: 1 }，所以 .a 为 1。'
      },
      {
        type: 'judge',
        question: 'Object.assign(target, source) 执行后，目标对象 target 本身也会被修改。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。assign 直接把源对象的属性复制到目标对象并返回它；想不影响原对象时第一个参数传空对象。'
      },
      {
        type: 'judge',
        question: 'Object.entries({ a: 1 }) 的结果是 ["a", 1]。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。entries 返回的是键值对数组的数组，结果应为 [["a", 1]]。'
      },
      {
        type: 'multiple',
        question: '以下关于 Object.keys、values、entries 的说法，哪些是正确的？（多选）',
        options: ['Object.keys 返回键组成的数组', 'Object.values 返回值组成的数组', 'Object.entries 返回键值对组成的数组', '它们只遍历原型链上的属性'],
        answer: [0, 1, 2],
        explanation: '这三个方法都只处理对象自身的可枚举属性，不涉及原型链；其余三项均正确。'
      },
      {
        type: 'multiple',
        question: '以下关于计算属性名的说法，哪些是正确的？（多选）',
        options: ['用方括号包裹属性名表达式', '属性名可以在运行时动态确定', '方括号内可以是变量或任意表达式', '一个对象中最多只能有一个计算属性名'],
        answer: [0, 1, 2],
        explanation: '计算属性名可以有多个，数量没有限制；其余三项均正确。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconst obj = { a: 1 };\nconst copy = Object.assign({}, obj);\ncopy.a = 9;\nconsole.log(obj.a);',
        options: ['9', '1', 'undefined', '报错'],
        answer: 1,
        explanation: 'assign 把属性复制到新对象，修改副本的第一层属性不会影响原对象，obj.a 仍为 1。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconst k = "b";\nconst obj = { ["a" + k]: 1 };\nconsole.log(Object.keys(obj)[0]);',
        options: ['a', 'b', 'ab', '报错'],
        answer: 2,
        explanation: '计算属性名在运行时求值，"a" + k 得到 "ab"，所以对象的键为 "ab"。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconst o = { x: 1 };\nconst { x, y = 2 } = o;\nconsole.log(x + y);',
        options: ['NaN', '3', '1', '报错'],
        answer: 1,
        explanation: 'x 解构出 1，y 取不到时使用默认值 2，相加结果为 3。'
      },
      {
        type: 'judge',
        question: 'Object.assign 执行后会返回目标对象本身。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。assign 把源对象属性复制到目标对象后，返回的就是目标对象。'
      },
      {
        type: 'judge',
        question: '对象字面量中的方法简写与完整的 say: function() {} 写法在功能上等价。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。方法简写只是语法上的简化，定义的函数功能一致，同样可以接收参数和使用 this。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconst obj = { a: 1, b: 2, c: 3 };\nconst filtered = Object.fromEntries(\n  Object.entries(obj).filter(([k, v]) => v > 1)\n);\nconsole.log(Object.keys(filtered));',
        options: ['["a", "b", "c"]', '["b", "c"]', '[2, 3]', '报错'],
        answer: 1,
        explanation: 'entries 过滤出值大于 1 的键值对，fromEntries 转回对象 { b: 2, c: 3 }，键数组为 ["b", "c"]。'
      },
      {
        type: 'judge',
        question: 'Object.values({}) 的结果是空数组。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。空对象没有任何自身可枚举属性，values 返回 []。'
      },
      {
        type: 'multiple',
        question: '以下关于对象方法简写的说法，哪些是正确的？（多选）',
        options: ['可以省略 function 关键字', '简写方法中可以使用 this', '简写方法可以被实例或对象正常调用', '简写方法不能接收参数'],
        answer: [0, 1, 2],
        explanation: '方法简写与普通方法一样接收参数，所以第四项错误；其余三项均正确。'
      },
      {
        type: 'multiple',
        question: '以下哪些写法可以拿到对象 obj 的键？（多选）',
        options: ['Object.keys(obj)', 'Object.entries(obj).map(([k]) => k)', 'for...in 循环逐个收集键名', 'Object.values(obj)'],
        answer: [0, 1, 2],
        explanation: 'Object.values 拿到的是值而不是键，所以第四项错误；其余三项都能得到键。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconst target = { a: 1 };\nconst res = Object.assign(target, { b: 2 });\nconsole.log(res === target);',
        options: ['true', 'false', '报错', 'undefined'],
        answer: 0,
        explanation: 'assign 返回的就是目标对象本身，res 与 target 是同一个引用，结果为 true。'
      },
      {
        type: 'multiple',
        question: '以下关于 Object.entries 的说法，哪些是正确的？（多选）',
        options: ['返回的是二维数组', '每个子元素是 [键, 值] 形式的数组', '可以配合解构在循环中同时取键和值', '返回的是一个普通对象'],
        answer: [0, 1, 2],
        explanation: 'entries 返回数组而非对象，转回对象要用 Object.fromEntries；其余三项均正确。'
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
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconst s = Symbol("id");\nconst obj = { [s]: 1, id: 2 };\nconsole.log(obj.id);',
        options: ['1', '2', 'undefined', '报错'],
        answer: 1,
        explanation: 'Symbol 键与字符串键互不相干，obj.id 访问的是字符串属性 id，值为 2；Symbol 属性要用 obj[s] 访问。'
      },
      {
        type: 'judge',
        question: 'Symbol 是引用类型，typeof Symbol() 的结果是 object。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。Symbol 是第七种原始数据类型，typeof 检测的结果是 symbol。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconsole.log(typeof Symbol());',
        options: ['"object"', '"symbol"', '"undefined"', '"string"'],
        answer: 1,
        explanation: 'Symbol 是原始类型，typeof 检测的结果是 "symbol"。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconst s = Symbol("desc");\nconsole.log(s.description);',
        options: ['undefined', 'desc', 'Symbol(desc)', '报错'],
        answer: 1,
        explanation: 'Symbol 实例有只读的 description 属性，返回创建时传入的描述文字 "desc"。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconsole.log(Symbol.keyFor(Symbol.for("k")));',
        options: ['undefined', 'k', 'Symbol(k)', '报错'],
        answer: 1,
        explanation: 'Symbol.keyFor 可以取回全局注册表中某个 Symbol 对应的键，结果为 "k"。'
      },
      {
        type: 'judge',
        question: 'Symbol 值可以隐式转换为字符串参与拼接，例如 "id: " + Symbol()。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。Symbol 不能隐式转字符串，这样拼接会抛出 TypeError，需显式调用 String()。'
      },
      {
        type: 'judge',
        question: '用 Symbol 做属性键的属性，会被 JSON.stringify 正常序列化输出。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。JSON.stringify 会忽略 Symbol 键的属性，只有字符串键会被序列化。'
      },
      {
        type: 'multiple',
        question: '关于 Symbol 的特性与用法，以下哪些说法是正确的？（多选）',
        options: ['Symbol 是原始数据类型', '不能用 new 调用 Symbol', 'Symbol.for 可以在全局共享 Symbol', 'Symbol 可以直接参与数值运算'],
        answer: [0, 1, 2],
        explanation: 'Symbol 不能参与数值运算（会报 TypeError）；其余三项均正确。'
      },
      {
        type: 'multiple',
        question: '以下关于获取对象属性键的说法，哪些是正确的？（多选）',
        options: ['Object.getOwnPropertySymbols 可以获取 Symbol 键', 'Object.keys 只返回字符串键', 'Reflect.ownKeys 可以同时拿到字符串键和 Symbol 键', 'for...in 可以枚举 Symbol 键'],
        answer: [0, 1, 2],
        explanation: 'for...in 只会枚举字符串键，Symbol 键不会出现在其中；其余三项均正确。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconst id = Symbol();\nconst user = { [id]: 1 };\nconsole.log(JSON.stringify(user));',
        options: ['{"id":1}', '{}', '{Symbol():1}', '报错'],
        answer: 1,
        explanation: 'Symbol 键的属性会被 JSON.stringify 忽略，对象序列化结果为 "{}"。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconst a = Symbol();\nconst b = a;\nconsole.log(a === b);',
        options: ['false', 'true', '报错', 'undefined'],
        answer: 1,
        explanation: 'b 只是引用了同一个 Symbol 值，没有创建新 Symbol，所以两者相等，结果为 true。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconst s = Symbol("x");\nconsole.log(String(s));',
        options: ['x', 'Symbol(x)', '报错', 'symbol'],
        answer: 1,
        explanation: '显式调用 String() 可以把 Symbol 转成描述形式 "Symbol(x)"，隐式拼接则会报错。'
      },
      {
        type: 'judge',
        question: 'Symbol 值可以作为 Map 的键。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。Map 的键可以是任意类型，Symbol 自然也可以作为键。'
      },
      {
        type: 'judge',
        question: '两个描述文字相同的 Symbol，用作对象属性键时指向同一个属性。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。每个 Symbol 都独一无二，描述相同也是两个不同的值，对应两个不同的属性。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconst s = Symbol("a");\nconsole.log(Symbol.keyFor(s));',
        options: ['a', 'undefined', '报错', 'Symbol(a)'],
        answer: 1,
        explanation: 'Symbol.keyFor 只能查询全局注册表中的 Symbol，普通 Symbol() 未注册过，返回 undefined。'
      },
      {
        type: 'judge',
        question: 'Object.assign 拷贝对象属性时，也会把 Symbol 键的属性一起拷贝过去。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。Object.assign 会拷贝所有自身可枚举属性，包括 Symbol 键的属性，这与 for...in 和 Object.keys 的行为不同。'
      },
      {
        type: 'multiple',
        question: '以下哪些对 Symbol 的操作会报错？（多选）',
        options: ['Symbol() + 1（参与数值运算）', 'Symbol() + ""（隐式拼接字符串）', 'new Symbol()', 'String(Symbol())'],
        answer: [0, 1, 2],
        explanation: 'Symbol 不能隐式转数值或字符串，也不能用 new 调用；显式 String() 转换是合法的。'
      },
      {
        type: 'multiple',
        question: '以下关于 Symbol.iterator 的说法，哪些是正确的？（多选）',
        options: ['实现它的对象可以被 for...of 遍历', '数组和字符串都内置了它', '展开运算符的底层依赖它', '它是一个字符串类型的属性名'],
        answer: [0, 1, 2],
        explanation: 'Symbol.iterator 是 Symbol 类型的属性名而非字符串；其余三项均正确。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconst id = Symbol("id");\nconst obj = {};\nobj[id] = 42;\nconsole.log(obj[id]);',
        options: ['undefined', '42', '报错', 'id'],
        answer: 1,
        explanation: '通过 obj[id] 用同一个 Symbol 设置并读取属性，可以正常取到 42。'
      },
      {
        type: 'multiple',
        question: '以下哪些方式创建的键可以给对象添加不易与他人冲突的属性？（多选）',
        options: ['Symbol()', 'Symbol.for("key")', 'Symbol("desc")', '普通的数字下标'],
        answer: [0, 1, 2],
        explanation: 'Symbol 值都独一无二，用作属性键不会与字符串键冲突；数字下标是普通属性，容易重名。'
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
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconst map = new Map([["a", 1]]);\nfor (const [k, v] of map) {\n  console.log(k, v);\n}',
        options: ['a 1', '["a", 1]', '0 a', '报错'],
        answer: 0,
        explanation: 'Map 是可迭代对象，遍历时每个成员是 [键, 值] 数组，配合解构可直接拿到 k 为 "a"、v 为 1。'
      },
      {
        type: 'judge',
        question: 'Set 是可迭代对象，可以直接用 for...of 遍历其中的成员。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。Set 内置实现了 Symbol.iterator，for...of 会依次取出每个成员。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nlet s = "";\nfor (const ch of "ab") {\n  s += ch;\n}\nconsole.log(s);',
        options: ['ab', 'a b', '报错', 'undefined'],
        answer: 0,
        explanation: '字符串是可迭代对象，for...of 依次取出每个字符拼接，结果为 "ab"。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nfor (const i in ["a", "b"]) {\n  console.log(typeof i);\n  break;\n}',
        options: ['number', 'string', 'undefined', '报错'],
        answer: 1,
        explanation: 'for...in 遍历数组拿到的是下标的字符串形式，typeof 结果为 "string"。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconst set = new Set([1, 2]);\nlet sum = 0;\nfor (const n of set) {\n  sum += n;\n}\nconsole.log(sum);',
        options: ['2', '3', '12', '报错'],
        answer: 1,
        explanation: 'Set 可直接 for...of 遍历，1 加 2 得到 3。'
      },
      {
        type: 'judge',
        question: '普通对象 {...obj} 或 [...obj] 都可以随意使用，展开运算符对普通对象数组展开没有限制。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。[...obj] 要求对象可迭代，普通对象没有实现 Symbol.iterator，会报错；对象属性展开 {...obj} 才是合法写法。'
      },
      {
        type: 'judge',
        question: '迭代器遍历结束（done 为 true）后，继续调用 next 会得到 { value: undefined, done: true }。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。迭代结束后再次调用 next 仍返回 done 为 true 的结果，不会报错。'
      },
      {
        type: 'multiple',
        question: '以下关于 for...of 的说法，哪些是正确的？（多选）',
        options: ['遍历拿到的是元素的值', '可以遍历字符串的每个字符', '循环中支持 break 和 continue', '可以直接遍历普通对象'],
        answer: [0, 1, 2],
        explanation: '普通对象不是可迭代对象，不能直接 for...of；其余三项均正确。'
      },
      {
        type: 'multiple',
        question: '以下关于 for...of 遍历 Map 的说法，哪些是正确的？（多选）',
        options: ['默认每次迭代拿到的是 [键, 值] 数组', '可以配合解构 const [k, v] 使用', 'Map 是可迭代对象', '遍历时拿到的是下标数字'],
        answer: [0, 1, 2],
        explanation: 'Map 迭代产出键值对而非下标；其余三项均正确。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconst it = [][Symbol.iterator]();\nconsole.log(it.next());',
        options: ['{ value: undefined, done: true }', '{ value: 0, done: false }', 'undefined', '报错'],
        answer: 0,
        explanation: '空数组没有元素，第一次调用 next 就结束，返回 { value: undefined, done: true }。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconst obj = {\n  [Symbol.iterator]() {\n    let n = 0;\n    return {\n      next() {\n        n++;\n        return n <= 2 ? { value: n, done: false } : { value: undefined, done: true };\n      }\n    };\n  }\n};\nconsole.log([...obj]);',
        options: ['[1, 2]', '[0, 1]', '报错', '[1, 2, 3]'],
        answer: 0,
        explanation: '对象实现了 Symbol.iterator 并返回迭代器，就可用展开运算符依次取出 1 和 2。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconsole.log([...new Set([1, 1, 2])].length);',
        options: ['1', '2', '3', '报错'],
        answer: 1,
        explanation: 'Set 去重后剩 1 和 2 两个成员，展开成数组长度为 2。'
      },
      {
        type: 'judge',
        question: '手动调用迭代器的 next 方法与使用 for...of 遍历，底层依赖的是同一套迭代协议。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。for...of 本质上就是自动调用 Symbol.iterator 获得迭代器并不断调用 next。'
      },
      {
        type: 'multiple',
        question: '要让一个普通对象支持 for...of 遍历，需要满足哪些条件？（多选）',
        options: ['给对象添加 Symbol.iterator 方法', '该方法返回一个带 next 方法的迭代器', 'next 方法返回 { value, done } 形式的结果', '必须给对象添加 length 属性'],
        answer: [0, 1, 2],
        explanation: '是否可迭代取决于迭代协议，与 length 属性无关；其余三项均正确。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nlet s = "";\nfor (const [i, v] of ["a", "b"].entries()) {\n  s += i + v;\n}\nconsole.log(s);',
        options: ['a0b1', '0a1b', 'ab01', '报错'],
        answer: 1,
        explanation: '数组的 entries 方法返回迭代器，每次产出 [下标, 值]，拼接结果为 "0a1b"。'
      },
      {
        type: 'judge',
        question: 'for...of 遍历大数组时会先把整个数组复制一份，再逐个取出元素。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。for...of 基于迭代器逐个取值，不会复制数组，按需取值也更省内存。'
      },
      {
        type: 'multiple',
        question: '以下哪些场景更适合使用 for...of 而不是 for...in？（多选）',
        options: ['遍历数组元素的值', '遍历 Map 中的键值对', '遍历 Set 中的成员', '遍历普通对象自身的属性名'],
        answer: [0, 1, 2],
        explanation: '遍历普通对象的属性名才用 for...in 或 Object.keys；其余三项均应用 for...of。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconst arr = ["a", "b"];\narr.extra = "x";\nlet count = 0;\nfor (const k in arr) {\n  count++;\n}\nconsole.log(count);',
        options: ['2', '3', '0', '报错'],
        answer: 1,
        explanation: 'for...in 会遍历所有可枚举键，包括后添加的 extra，共 "0"、"1"、"extra" 三个，所以不推荐用它遍历数组。'
      },
      {
        type: 'judge',
        question: '数组的 entries() 方法返回一个迭代器，每次迭代产出 [下标, 值] 形式的数组。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。entries() 返回的迭代器配合 for...of 可以同时拿到下标和值。'
      },
      {
        type: 'multiple',
        question: '以下关于迭代器的说法，哪些是错误的？（多选）',
        options: ['迭代器必须手动实现，数组没有内置迭代器', 'for...of 只能用于数组，不能用于其他数据', '迭代器的 next 方法返回 { value, done }', '对象实现 Symbol.iterator 后即可被 for...of 遍历'],
        answer: [0, 1],
        explanation: '数组、字符串等内置了迭代器，且 for...of 适用于一切可迭代对象，所以前两项错误。'
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
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconst p = new Proxy({ x: 1 }, {});\nconsole.log(p.x);',
        options: ['undefined', '1', '报错', 'Proxy 对象'],
        answer: 1,
        explanation: '处理器对象为空时没有定义任何陷阱，对代理的操作会直接转发到目标对象，所以 p.x 为 1。'
      },
      {
        type: 'judge',
        question: 'Proxy 的 has 陷阱可以拦截 in 运算符的属性检查。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。has 陷阱在使用 in 运算符检测属性时触发，可以自定义 "key" in proxy 的结果。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconst p = new Proxy({}, {\n  get(t, k) {\n    return k + "!";\n  }\n});\nconsole.log(p.abc);',
        options: ['undefined', 'abc!', 'abc', '报错'],
        answer: 1,
        explanation: 'get 陷阱拿到属性名 k 为 "abc"，返回拼接结果 "abc!"。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconst obj = { x: 1 };\nconsole.log(Reflect.has(obj, "x"));',
        options: ['true', 'false', '1', '报错'],
        answer: 0,
        explanation: 'Reflect.has 等价于 in 运算符，对象上存在 x 属性，结果为 true。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconst p = new Proxy({ n: 1 }, {\n  set(t, k, v) {\n    t[k] = v * 2;\n    return true;\n  }\n});\np.n = 5;\nconsole.log(p.n);',
        options: ['5', '10', '1', '报错'],
        answer: 1,
        explanation: '赋值触发 set 陷阱，实际写入的是 5 乘 2 的结果 10；读取未拦截，输出 10。'
      },
      {
        type: 'judge',
        question: 'Proxy 处理器中没有定义某种陷阱时，对应操作会直接作用于目标对象。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。未定义的陷阱不会拦截操作，默认转发到目标对象执行。'
      },
      {
        type: 'judge',
        question: 'Proxy 的 deleteProperty 陷阱可以拦截 delete 操作。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。delete proxy.key 会触发 deleteProperty 陷阱，可自定义删除行为。'
      },
      {
        type: 'multiple',
        question: '以下哪些操作可以被 Proxy 拦截？（多选）',
        options: ['读取属性（get）', '设置属性（set）', 'in 运算符检查（has）', '数字的四则运算'],
        answer: [0, 1, 2],
        explanation: 'Proxy 拦截的是对象的基本操作，不能拦截四则运算这类运算符；其余三项均正确。'
      },
      {
        type: 'multiple',
        question: '以下哪些是 Reflect 提供的方法？（多选）',
        options: ['Reflect.get', 'Reflect.set', 'Reflect.deleteProperty', 'Reflect.proxy'],
        answer: [0, 1, 2],
        explanation: 'Reflect 没有 proxy 方法，创建代理用 new Proxy；其余三项均正确。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconst p = new Proxy({ a: 1 }, {\n  get(t, k) {\n    return k in t ? t[k] : 0;\n  }\n});\nconsole.log(p.a + p.b);',
        options: ['1', '0', 'NaN', '报错'],
        answer: 0,
        explanation: 'p.a 命中目标对象返回 1，p.b 不存在时陷阱返回 0，相加结果为 1。'
      },
      {
        type: 'single',
        question: '下面代码的运行结果是什么？\nconst p = new Proxy();',
        options: ['创建一个空代理', '报错', '返回 undefined', '返回 null'],
        answer: 1,
        explanation: 'Proxy 的第一个参数必须是对象，省略参数会抛出 TypeError。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconst p = new Proxy({ n: 2 }, {\n  get(t, k) {\n    return t[k] * 10;\n  }\n});\nconsole.log(p.n);',
        options: ['2', '20', 'undefined', '报错'],
        answer: 1,
        explanation: '读取 p.n 触发 get 陷阱，返回目标值 2 乘 10 的结果 20。'
      },
      {
        type: 'judge',
        question: 'Proxy 创建的是目标对象的副本，之后修改目标对象不会影响代理的读取结果。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。代理只是包在目标对象外面的一层，二者共享同一份数据，修改目标对象会反映到代理上。'
      },
      {
        type: 'multiple',
        question: '以下关于 new Proxy(target, handler) 的说法，哪些是正确的？（多选）',
        options: ['target 必须是对象', 'handler 为空对象时操作会直接转发到目标对象', '代理与目标对象共享同一份数据', '创建代理时会深拷贝一份目标对象'],
        answer: [0, 1, 2],
        explanation: 'Proxy 不会拷贝目标对象，只是在它外面包一层拦截；其余三项均正确。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconst target = { x: 1 };\nconst p = new Proxy(target, {});\ntarget.x = 99;\nconsole.log(p.x);',
        options: ['1', '99', 'undefined', '报错'],
        answer: 1,
        explanation: '代理不复制数据，handler 为空时读取直接转发到目标对象，拿到的是修改后的 99。'
      },
      {
        type: 'judge',
        question: 'get 陷阱接收的第一个参数是目标对象，第二个参数是被读取的属性名。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。get(target, key) 中 target 是目标对象，key 是本次读取的属性名。'
      },
      {
        type: 'multiple',
        question: '以下哪些属于 Proxy 的陷阱方法？（多选）',
        options: ['get', 'set', 'has', 'map'],
        answer: [0, 1, 2],
        explanation: 'map 不是 Proxy 陷阱，它是数组的方法；其余三项均为 Proxy 陷阱。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconst obj = { x: 1 };\nconsole.log(Reflect.deleteProperty(obj, "x"));',
        options: ['true', 'false', '1', 'undefined'],
        answer: 0,
        explanation: 'Reflect.deleteProperty 删除属性成功时返回 true，等价于 delete 操作。'
      },
      {
        type: 'judge',
        question: 'Proxy 可以拦截数组按下标读取和赋值的操作，因此可以用来实现负下标数组。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。数组下标访问本质上也是属性读写，会被 get 和 set 陷阱拦截。'
      },
      {
        type: 'multiple',
        question: '在 Proxy 陷阱中搭配 Reflect 有哪些好处？（多选）',
        options: ['Reflect 方法与陷阱一一对应，便于完成默认行为', '行为比直接操作目标对象更规范', 'Reflect.set 返回是否成功，可直接作为 set 陷阱的返回值', '不使用 Reflect 时 Proxy 一定会报错'],
        answer: [0, 1, 2],
        explanation: 'Reflect 是推荐写法而非强制要求，不用它 Proxy 也能正常工作；其余三项均正确。'
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
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nfunction* g() {\n  yield "a";\n  return "b";\n  yield "c";\n}\nconst it = g();\nit.next();\nconsole.log(it.next());',
        options: ['{ value: "c", done: false }', '{ value: "b", done: true }', '{ value: "b", done: false }', '{ value: undefined, done: true }'],
        answer: 1,
        explanation: '第二次 next 执行到 return "b"，函数结束，返回 { value: "b", done: true }，return 之后的 yield 不会再执行。'
      },
      {
        type: 'judge',
        question: 'yield 可以写在 Generator 函数内部嵌套的普通回调函数（如 forEach 的回调）中直接使用。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。yield 只能直接位于 Generator 函数体内，写在嵌套的普通函数中会报语法错误。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nfunction* g() {\n  yield 1;\n  yield 2;\n}\nconsole.log([...g()]);',
        options: ['[1, 2]', '{ value: 1, done: false }', '1 2', '报错'],
        answer: 0,
        explanation: 'Generator 返回的是可迭代对象，展开运算符会依次取出每个 yield 的值，得到 [1, 2]。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nfunction* g() {\n  let n = 0;\n  while (true) {\n    yield ++n;\n  }\n}\nconst it = g();\nit.next();\nit.next();\nconsole.log(it.next().value);',
        options: ['1', '2', '3', '死循环报错'],
        answer: 2,
        explanation: '每次 next 执行一次循环体，三次分别 yield 1、2、3，第三次取出的 value 为 3。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nfunction* g() {\n  const a = yield 1;\n  const b = yield 2;\n  yield a + b;\n}\nconst it = g();\nit.next();\nit.next(10);\nconsole.log(it.next(20).value);',
        options: ['3', '20', '30', 'NaN'],
        answer: 2,
        explanation: 'next(10) 让 a 为 10，next(20) 让 b 为 20，随后 yield a + b 输出 30。'
      },
      {
        type: 'judge',
        question: 'Generator 函数中一个 yield 都不写时，第一次调用 next 就会得到 { value: undefined, done: true }。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。没有 yield 的 Generator 直接执行到函数结束，迭代立即完成。'
      },
      {
        type: 'judge',
        question: '用 for...of 遍历 Generator 时，函数 return 的值也会作为循环的最后一个值被取出。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。for...of 只取 yield 产生的值，done 为 true 时循环结束，return 的值不会被遍历到。'
      },
      {
        type: 'multiple',
        question: '以下关于 Generator 惰性执行的说法，哪些是正确的？（多选）',
        options: ['调用 Generator 函数时函数体不会立即执行', '值是调用 next 时才计算的', '适合表示无穷序列而不占大量内存', '必须提前把所有值算好存入数组'],
        answer: [0, 1, 2],
        explanation: '惰性执行的意义正在于按需计算，无需提前算出全部值；其余三项均正确。'
      },
      {
        type: 'multiple',
        question: '以下关于 Generator 返回的迭代器对象，哪些说法是正确的？（多选）',
        options: ['next 返回 { value, done } 形式的结果', '它是可迭代对象，可以用 for...of 遍历', '可以用展开运算符展开成数组', '它本身就是一个普通数组'],
        answer: [0, 1, 2],
        explanation: 'Generator 返回的是迭代器对象而非数组，但可迭代所以支持 for...of 和展开；其余三项均正确。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nfunction* g() {\n  for (let i = 1; i <= 3; i++) {\n    yield i;\n  }\n}\nconsole.log([...g()].length);',
        options: ['1', '3', '6', '报错'],
        answer: 1,
        explanation: '循环中 yield 出 1、2、3，展开得到 [1, 2, 3]，长度为 3。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nconst obj = {\n  data: [1, 2, 3],\n  *[Symbol.iterator]() {\n    for (const n of this.data) {\n      yield n;\n    }\n  }\n};\nconsole.log([...obj]);',
        options: ['[1, 2, 3]', '[]', '报错', '[undefined, undefined, undefined]'],
        answer: 0,
        explanation: '用 Generator 实现 Symbol.iterator 后对象变得可迭代，展开运算符依次取出 1、2、3。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nfunction* g() {\n  const x = yield 1;\n  yield x;\n}\nconst it = g();\nit.next(100);\nconsole.log(it.next(5).value);',
        options: ['100', '5', '1', 'undefined'],
        answer: 1,
        explanation: '第一次 next 传入的 100 会被忽略（还没有 yield 等待接收），next(5) 让 x 为 5，所以输出 5。'
      },
      {
        type: 'judge',
        question: '第一次调用 next 时传入的参数会被忽略，因为此时还没有任何 yield 表达式等待接收值。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。next(x) 传入的值是赋给上一个暂停的 yield 表达式，第一次 next 之前还没有暂停点。'
      },
      {
        type: 'multiple',
        question: '以下哪些是 Generator 函数的正确写法？（多选）',
        options: ['function* gen() {}', 'function *gen() {}', 'const gen = function* () {}', 'const gen = () =>* {}'],
        answer: [0, 1, 2],
        explanation: '箭头函数不能作为 Generator，() =>* 是语法错误；其余三种写法均合法。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nfunction* g() {\n  yield 1;\n}\nconst it = g();\nit.next();\nit.next();\nconsole.log(it.next().done);',
        options: ['false', 'true', '1', 'undefined'],
        answer: 1,
        explanation: 'yield 只有一个，之后每次 next 都返回 done 为 true，迭代结束后继续调用也不会重新执行。'
      },
      {
        type: 'judge',
        question: 'Generator 迭代结束后（done 为 true），再调用 next 会从头重新执行函数体。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。迭代一旦结束，再调用 next 只会返回 { value: undefined, done: true }，要重新执行需再次调用 Generator 函数生成新的迭代器。'
      },
      {
        type: 'multiple',
        question: '以下关于 next 传值的说法，哪些是正确的？（多选）',
        options: ['next(x) 传入的 x 会成为上一个 yield 表达式的值', '第一次调用 next 时传参会被忽略', '没有传参时 yield 表达式的值为 undefined', 'next 传参会覆盖 yield 后面写出的值'],
        answer: [0, 1, 2],
        explanation: 'next 传参影响的是 yield 表达式的返回值，不会改变 yield 后面已写出的产出值；其余三项均正确。'
      },
      {
        type: 'single',
        question: '下面代码的输出结果是什么？\nfunction* g() {}\nconsole.log(typeof g);',
        options: ['generator', 'function', 'object', 'iterator'],
        answer: 1,
        explanation: 'Generator 函数本质上仍是一种函数，typeof 结果为 "function"；调用它返回的才是迭代器对象。'
      },
      {
        type: 'judge',
        question: 'Generator 函数在两次 next 调用之间处于暂停状态，局部变量的值会被保留。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。Generator 暂停时会保存执行上下文，恢复执行后局部变量仍是暂停前的值。'
      },
      {
        type: 'multiple',
        question: '以下关于 Generator 与普通函数区别的说法，哪些是正确的？（多选）',
        options: ['普通函数调用后会从头执行到尾', 'Generator 调用后只返回迭代器，不执行函数体', 'Generator 可以在 yield 处暂停并从断点恢复', 'Generator 函数中不能使用局部变量'],
        answer: [0, 1, 2],
        explanation: 'Generator 可以正常使用局部变量且状态会被保留；其余三项均正确。'
      }
    ]
  }
];
