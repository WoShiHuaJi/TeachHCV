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
        type: 'multiple',
        question: '以下哪些是 JavaScript 的基本数据类型？（多选）',
        options: ['string', 'number', 'array', 'boolean'],
        answer: [0, 1, 3],
        explanation: 'array 是对象不是基本类型，string/number/boolean 都是基本类型。'
      },
      {
        type: 'single',
        question: 'let x; 之后执行 typeof x 的结果是？',
        options: ['"undefined"', '"null"', '"object"', '报错'],
        answer: 0,
        explanation: '声明了但没有赋值的变量值为 undefined，typeof undefined 是 "undefined"。'
      },
      {
        type: 'single',
        question: '表达式 Number("12") + 3 的结果是？',
        options: ['15', '"123"', 'NaN', '报错'],
        answer: 0,
        explanation: 'Number("12") 把字符串转成数字 12，再与 3 相加得到 15。'
      },
      {
        type: 'judge',
        question: '用 let 声明的变量可以重新赋值。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'let 声明的变量允许重新赋值，const 才不允许。'
      },
      {
        type: 'judge',
        question: 'typeof "abc" 的结果是 "text"。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '字符串的类型名是 "string"，没有 "text" 这种类型。'
      },
      {
        type: 'multiple',
        question: '以下哪些说法是正确的？（多选）',
        options: ['const 声明后不能重新赋值', '初学阶段建议先不要使用 var', 'null 表示主动设置的空值', 'undefined 表示数字 0'],
        answer: [0, 1, 2],
        explanation: 'undefined 是声明后未赋值的状态，与数字 0 无关，其余三项正确。'
      },
      {
        type: 'multiple',
        question: '以下哪些表达式的结果是字符串？（多选）',
        options: ['"1" + 2', 'String(5)', 'Number("3")', '"a" + "b"'],
        answer: [0, 1, 3],
        explanation: 'Number("3") 结果是数字 3；其余三个结果都是字符串。'
      },
      {
        type: 'single',
        question: 'let a; console.log(a); 输出什么？',
        options: ['null', 'undefined', '0', '报错'],
        answer: 1,
        explanation: '声明了但没有赋值的变量，其值为 undefined。'
      },
      {
        type: 'judge',
        question: '表达式 1 + "2" + 3 的结果是数字 6。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '1 + "2" 先拼接成 "12"，再与 3 拼接得到 "123"，不是数字 6。'
      },
      {
        type: 'single',
        question: '给 const 声明的常量重新赋值会发生什么？',
        options: ['常量被更新为新值', '抛出错误（Assignment to constant variable）', '没有任何反应', '常量变成 undefined'],
        answer: 1,
        explanation: 'const 声明的常量不能重新赋值，强行赋值会抛出 TypeError。'
      },
      {
        type: 'single',
        question: 'Number("abc") 的结果是？',
        options: ['0', 'NaN', 'undefined', '报错'],
        answer: 1,
        explanation: '"abc" 无法转成有效数字，Number 返回 NaN（Not a Number）。'
      },
      {
        type: 'single',
        question: '下面代码输出什么？let s = "5"; let n = +s + 1; console.log(n);',
        options: ['"51"', '6', 'NaN', '报错'],
        answer: 1,
        explanation: 's 前面的一元加号 + 把字符串 "5" 转成数字 5，再加 1 得到 6。'
      },
      {
        type: 'single',
        question: 'console.log(typeof typeof 100); 输出什么？',
        options: ['"number"', '"string"', '"undefined"', '报错'],
        answer: 1,
        explanation: 'typeof 100 是字符串 "number"，再对它取 typeof 得到 "string"。'
      },
      {
        type: 'judge',
        question: '表达式 "10" - 2 的结果是 8。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '减法没有拼接歧义，"10" 会被转成数字 10 再减 2，结果是 8。'
      },
      {
        type: 'judge',
        question: '用 const 声明一个对象后，仍然可以修改它的属性，只是不能整体重新赋值。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'const 锁定的是变量绑定本身，对象内部的属性依然可以增删改。'
      },
      {
        type: 'multiple',
        question: '以下哪些操作会导致报错？（多选）',
        options: ['给 const 声明的常量重新赋值', 'const 声明时不给初始值', '给 let 声明的变量重新赋值', '用 typeof 查看一个未声明的变量'],
        answer: [0, 1],
        explanation: 'const 必须初始化且不能重新赋值；let 可以重新赋值，typeof 未声明变量返回 "undefined" 不报错。'
      },
      {
        type: 'multiple',
        question: '以下哪些表达式发生了字符串拼接？（多选）',
        options: ['"5" + 3', '5 + "3"', '"2" + "3"', '5 + 3'],
        answer: [0, 1, 2],
        explanation: '只要 + 有一边是字符串就发生拼接；5 + 3 两边都是数字，正常相加得 8。'
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
      },
      {
        type: 'single',
        question: '表达式 5 % 3 的结果是？',
        options: ['1', '2', '3', '0'],
        answer: 1,
        explanation: '% 是取余数，5 除以 3 商 1 余 2，所以结果是 2。'
      },
      {
        type: 'single',
        question: 'let x = 10; if (x > 5) { console.log("大"); } else { console.log("小"); } 输出什么？',
        options: ['"大"', '"小"', 'true', '没有输出'],
        answer: 0,
        explanation: '10 > 5 为 true，执行 if 分支输出 "大"。'
      },
      {
        type: 'judge',
        question: '表达式 true && false 的结果是 true。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '&& 要求两边都为 true 结果才是 true，所以这里结果是 false。'
      },
      {
        type: 'judge',
        question: 'break 的作用是跳过本次循环、直接进入下一次循环。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '跳过本次进入下一次的是 continue，break 是直接结束整个循环。'
      },
      {
        type: 'multiple',
        question: '以下关于运算符的说法哪些是正确的？（多选）',
        options: ['|| 表示逻辑或', '! 表示取反', '% 用于取余数', '== 比较时不做类型转换'],
        answer: [0, 1, 2],
        explanation: '== 会自动转换类型再比较，=== 才不做类型转换。'
      },
      {
        type: 'multiple',
        question: '关于 else if 多分支结构，以下哪些说法是正确的？（多选）',
        options: ['可以有多个 else if 分支', '各分支条件按从上到下的顺序判断', '每个 if 语句都必须写 else', '前面分支成立后，后面的分支不再执行'],
        answer: [0, 1, 3],
        explanation: 'else 是可选的，不是必须；其余三项说法正确。'
      },
      {
        type: 'single',
        question: 'for (let i = 0; i < 5; i++) { if (i === 3) { break; } } 循环体实际执行了几次？',
        options: ['3 次', '4 次', '5 次', '无限次'],
        answer: 0,
        explanation: 'i 为 0、1、2 时正常执行，i 等于 3 时 break 直接结束循环，共执行 3 次。'
      },
      {
        type: 'judge',
        question: '表达式 false || true 的结果是 true。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '|| 只要有一边为 true 结果就是 true。'
      },
      {
        type: 'single',
        question: 'console.log(1 == "1", 1 === "1"); 依次输出什么？',
        options: ['true true', 'true false', 'false true', 'false false'],
        answer: 1,
        explanation: '== 会把 "1" 转成数字再比较得 true；=== 类型不同直接返回 false。'
      },
      {
        type: 'single',
        question: '下面代码依次输出什么？for (let i = 0; i < 4; i++) { if (i === 2) { continue; } console.log(i); }',
        options: ['0 1 2 3', '0 1 3', '0 1', '只输出 2'],
        answer: 1,
        explanation: 'i 为 2 时 continue 跳过本次输出，其余 0、1、3 正常输出。'
      },
      {
        type: 'single',
        question: 'console.log(!true || false); 的结果是？',
        options: ['true', 'false', 'undefined', '报错'],
        answer: 1,
        explanation: '!true 是 false，false || false 结果仍是 false。'
      },
      {
        type: 'single',
        question: '下面代码输出什么？let score = 55; if (score >= 90) { console.log("优秀"); } else if (score >= 60) { console.log("及格"); } else { console.log("不及格"); }',
        options: ['"优秀"', '"及格"', '"不及格"', '没有输出'],
        answer: 2,
        explanation: '55 不满足前两个条件，进入 else 分支输出 "不及格"。'
      },
      {
        type: 'judge',
        question: '表达式 10 / 4 的结果是 2.5。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'JavaScript 只有一种数字类型，除法可以产生小数，10 / 4 等于 2.5。'
      },
      {
        type: 'judge',
        question: '在 if 条件中，空数组 [] 会被视为 true。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '常见的假值只有 0、空字符串、null、undefined、NaN 等，空数组是对象，属于真值。'
      },
      {
        type: 'multiple',
        question: '以下哪些表达式的结果是 true？（多选）',
        options: ['3 > 2 && 1 < 2', '1 === "1"', '5 !== 4', '!"abc"'],
        answer: [0, 2],
        explanation: '1 === "1" 类型不同为 false；非空字符串是真值，取反后 !"abc" 为 false。'
      },
      {
        type: 'multiple',
        question: '关于 for 循环的执行流程，以下哪些说法是正确的？（多选）',
        options: ['初始化部分只在循环开始前执行一次', '条件一开始为 false 时循环体一次也不执行', '每次循环体执行完后先执行 i++ 之类的操作再判断条件', 'continue 会直接结束整个循环'],
        answer: [0, 1, 2],
        explanation: '直接结束整个循环的是 break，continue 只跳过本次。'
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
        type: 'multiple',
        question: '以下哪些是箭头函数的特点？（多选）',
        options: ['写法比 function 更简洁', '函数体只有一句 return 时可省略花括号和 return', '必须用 function 关键字定义', '适合作为回调函数使用'],
        answer: [0, 1, 3],
        explanation: '箭头函数用 => 定义，写法简洁，可省略花括号和 return，常用作回调。'
      },
      {
        type: 'single',
        question: 'function hi() { console.log("hi"); } 调用 hi() 的返回值是？',
        options: ['undefined', 'null', '"hi"', '报错'],
        answer: 0,
        explanation: '函数没有写 return 时默认返回 undefined，console.log 只是输出不是返回值。'
      },
      {
        type: 'single',
        question: 'function f(a, b) { return a * b; } 执行 f(3, 4) 的结果是？',
        options: ['7', '12', '34', 'undefined'],
        answer: 1,
        explanation: '传入 a 为 3、b 为 4，返回 3 * 4 即 12。'
      },
      {
        type: 'judge',
        question: '函数可以有多个参数，参数之间用逗号隔开。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '函数参数数量不限，多个参数用逗号分隔。'
      },
      {
        type: 'judge',
        question: '箭头函数的函数体必须用花括号包裹。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '函数体只有一句 return 时，可以省略花括号和 return。'
      },
      {
        type: 'multiple',
        question: '以下哪些是合法的函数定义方式？（多选）',
        options: ['function add(a, b) { return a + b; }', 'const add = (a, b) => a + b;', 'const add = function(a, b) { return a + b; };', 'def add(a, b)'],
        answer: [0, 1, 2],
        explanation: 'JavaScript 没有 def 关键字，前三种都是合法定义方式。'
      },
      {
        type: 'multiple',
        question: '关于 return 语句，以下哪些说法是正确的？（多选）',
        options: ['return 之后的代码不会再执行', '函数没写 return 时默认返回 undefined', '一个函数里最多只能写一个 return 语句', 'return 的值可以被调用处接收使用'],
        answer: [0, 1, 3],
        explanation: '函数可以有多个 return（比如不同分支各返回一次），只是每次调用只执行到其中一个。'
      },
      {
        type: 'single',
        question: 'const f = (a, b) => { const s = a + b; return s * 2; }; 执行 f(1, 2) 的结果是？',
        options: ['3', '6', 'undefined', '报错'],
        answer: 1,
        explanation: '函数体有多句时必须写花括号和 return，a+b 为 3，乘以 2 返回 6。'
      },
      {
        type: 'judge',
        question: '调用函数时传入的参数个数必须与定义时完全一致，否则会报错。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '少传的参数值为 undefined，多传的会被忽略，不会因此报错。'
      },
      {
        type: 'single',
        question: 'function f(a, b) { return a + b; } 执行 f(3) 的结果是？',
        options: ['3', 'NaN', 'undefined', '报错'],
        answer: 1,
        explanation: '少传的 b 为 undefined，3 + undefined 结果是 NaN。'
      },
      {
        type: 'single',
        question: 'const f = function(x) { return x + 1; }; 执行 f(4) 的结果是？',
        options: ['4', '5', 'undefined', '报错'],
        answer: 1,
        explanation: '函数表达式赋给 f，调用时 x 为 4，返回 4 + 1 即 5。'
      },
      {
        type: 'single',
        question: '下面代码输出什么？function f() { console.log("A"); return; console.log("B"); } f();',
        options: ['依次输出 "A" 和 "B"', '只输出 "A"', '只输出 "B"', '没有输出'],
        answer: 1,
        explanation: 'return 会结束函数，后面的 console.log("B") 不会执行。'
      },
      {
        type: 'single',
        question: '[1, 2].forEach(function(n) { console.log(n * 10); }); 会依次输出什么？',
        options: ['1 和 2', '10 和 20', '[10, 20]', 'undefined'],
        answer: 1,
        explanation: '传给 forEach 的函数是回调，对每个元素执行一次，分别输出 10 和 20。'
      },
      {
        type: 'judge',
        question: '函数可以作为参数传给另一个函数，这种用法称为回调函数。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '把函数当作值传递是 JavaScript 的常见做法，数组方法和事件监听都大量使用回调。'
      },
      {
        type: 'judge',
        question: '箭头函数只有一个参数时，参数外的圆括号可以省略，如 n => n * n。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '单个参数时圆括号可省略；没有参数或有多个参数时必须写圆括号。'
      },
      {
        type: 'multiple',
        question: '以下哪些函数调用的返回值是 undefined？（多选）',
        options: ['function f() {} f()', 'function f() { console.log("x"); } f()', 'function f() { return; } f()', 'function f() { return null; } f()'],
        answer: [0, 1, 2],
        explanation: '没写 return、只输出不返回、return 后不接值，得到的都是 undefined；return null 返回的是 null。'
      },
      {
        type: 'multiple',
        question: '关于调用函数时的参数传递，以下哪些说法是正确的？（多选）',
        options: ['少传的参数值为 undefined', '多传的参数会被忽略', '实参按位置依次对应形参', '实参可以打乱顺序传入，靠参数名自动匹配'],
        answer: [0, 1, 2],
        explanation: 'JavaScript 的参数按位置对应，没有按名字匹配的机制，顺序不能乱。'
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
      },
      {
        type: 'single',
        question: 'let a = [1, 2, 3]; a.push(4); 之后 a.length 是？',
        options: ['3', '4', '5', 'undefined'],
        answer: 1,
        explanation: 'push 在末尾添加一个元素，数组从 3 个变成 4 个，length 为 4。'
      },
      {
        type: 'single',
        question: '[5, 12, 8].find(n => n > 6) 的返回值是？',
        options: ['5', '12', '8', '[12, 8]'],
        answer: 1,
        explanation: 'find 返回第一个满足条件的元素，12 是第一个大于 6 的元素。'
      },
      {
        type: 'judge',
        question: '数组的 pop 方法会删除数组末尾的元素。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'pop 删除并返回末尾元素，与之对应的 shift 删除开头元素。'
      },
      {
        type: 'judge',
        question: '[1, 2, 3].indexOf(9) 的返回值是 0。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: 'indexOf 找不到元素时返回 -1，而不是 0。'
      },
      {
        type: 'multiple',
        question: '以下哪些方法会返回一个新数组？（多选）',
        options: ['map', 'filter', 'forEach', 'slice'],
        answer: [0, 1, 3],
        explanation: 'forEach 只是逐个执行函数，没有有意义的返回值；map、filter、slice 都返回新数组。'
      },
      {
        type: 'multiple',
        question: '关于 forEach 和 map，以下哪些说法是正确的？（多选）',
        options: ['forEach 没有有意义的返回值', 'map 会把每次回调的返回值收集成新数组', 'forEach 会直接修改原数组的内容', 'map 执行后原数组保持不变'],
        answer: [0, 1, 3],
        explanation: 'forEach 和 map 本身都不修改原数组；区别在于 map 会收集返回值生成新数组。'
      },
      {
        type: 'single',
        question: '下面代码的输出是什么？let a = [1, 2, 3, 4]; let b = a.filter(n => n % 2 === 0).map(n => n * 10); console.log(b);',
        options: ['[2, 4]', '[20, 40]', '[10, 20, 30, 40]', '[2, 4, 20, 40]'],
        answer: 1,
        explanation: 'filter 先筛出偶数 [2, 4]，map 再各乘 10，链式调用得到 [20, 40]。'
      },
      {
        type: 'single',
        question: 'let a = [1, 2, 3]; a.forEach(n => n * 2); 执行后 a 的值是？',
        options: ['[2, 4, 6]', '[1, 2, 3]', 'undefined', '报错'],
        answer: 1,
        explanation: 'forEach 回调的返回值不会被收集，也不修改原数组，a 仍是 [1, 2, 3]。'
      },
      {
        type: 'judge',
        question: '想从数组中找出所有满足条件的元素，应该用 find 而不是 filter。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: 'find 只返回第一个满足条件的元素，找全部满足条件的元素要用 filter。'
      },
      {
        type: 'multiple',
        question: '某电商页面要展示购物车中价格大于 100 的商品名称列表，以下哪些步骤是合理的？（多选）',
        options: ['用 filter 筛出价格大于 100 的商品', '用 map 把筛选结果映射为名称数组', '用 forEach 遍历名称数组渲染到页面', '用 push 直接修改接口返回的原始数组'],
        answer: [0, 1, 2],
        explanation: '先用 filter 筛选、再用 map 取名称、最后遍历渲染是标准做法；直接修改原始数据应避免。'
      },
      {
        type: 'single',
        question: 'let a = ["a", "b", "c"]; console.log(a[a.length - 1]); 输出什么？',
        options: ['"a"', '"c"', 'undefined', '报错'],
        answer: 1,
        explanation: 'a.length - 1 是最后一个元素的下标，取到 "c"，这是取末尾元素的常用写法。'
      },
      {
        type: 'single',
        question: '[45, 80, 92, 55].includes(60) 的返回值是？',
        options: ['true', 'false', '60', '-1'],
        answer: 1,
        explanation: 'includes 判断数组是否包含某个值，数组中没有 60，返回 false。'
      },
      {
        type: 'judge',
        question: 'let a = [1, 2, 3]; 访问 a[10] 会报错并中断程序。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '访问越界下标不会报错，只是得到 undefined。'
      },
      {
        type: 'judge',
        question: 'filter 的回调返回 false 的元素会被保留在新数组中。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '恰恰相反，回调返回 true 的元素才会被保留，返回 false 的被过滤掉。'
      },
      {
        type: 'multiple',
        question: '想把 ["小明", "小红"] 展示成问候语列表，以下哪些做法合理？（多选）',
        options: ['用 map 生成 ["你好，小明", "你好，小红"] 新数组', '用 forEach 逐个创建 li 元素插入页面', '直接修改原数组并指望页面自动更新', '用数组的 join("") 拼成一个长字符串展示'],
        answer: [0, 1, 2],
        explanation: '三种都是常见做法；数组本身不会驱动页面更新，改了数据还需操作 DOM。'
      },
      {
        type: 'multiple',
        question: '以下哪些说法是正确的？（多选）',
        options: ['数组下标从 0 开始', 'length 属性会随元素的增删自动更新', '访问越界下标 a[10] 会直接报错', 'shift 会删除并返回数组开头的元素'],
        answer: [0, 1, 3],
        explanation: '访问越界下标得到 undefined 而非报错；其余三项说法正确。'
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
        type: 'multiple',
        question: '以下关于对象与 JSON 的说法哪些是正确的？（多选）',
        options: ['JSON 的属性名必须用双引号', 'JSON 中可以包含函数', 'JSON.stringify 把对象转成 JSON 字符串', 'JSON.parse 把 JSON 字符串还原成对象'],
        answer: [0, 2, 3],
        explanation: 'JSON 不能包含函数；stringify 和 parse 分别负责对象与 JSON 字符串的互转。'
      },
      {
        type: 'single',
        question: 'let u = { name: "小明" }; u.age = 20; 之后 Object.keys(u) 的结果是？',
        options: ['["name"]', '["age"]', '["name", "age"]', '报错'],
        answer: 2,
        explanation: '直接赋值即添加属性，Object.keys 返回所有属性名组成的数组。'
      },
      {
        type: 'single',
        question: 'JSON.stringify({ a: 1 }) 的返回值类型是？',
        options: ['对象', '字符串', '数字', '数组'],
        answer: 1,
        explanation: 'JSON.stringify 的作用就是把对象转成 JSON 字符串。'
      },
      {
        type: 'judge',
        question: '删除对象的属性可以使用 delete 关键字。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'delete obj.key 可以删除对象上的指定属性。'
      },
      {
        type: 'judge',
        question: 'Object.values({ a: 1, b: 2 }) 的返回值是 ["a", "b"]。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: 'Object.values 返回所有值组成的数组，即 [1, 2]；返回属性名的是 Object.keys。'
      },
      {
        type: 'multiple',
        question: '以下哪些方式可以正确访问对象的属性？（多选）',
        options: ['obj.name', 'obj["name"]', '属性名存在变量 key 中时写 obj[key]', 'obj->name'],
        answer: [0, 1, 2],
        explanation: 'JavaScript 没有 -> 语法；点语法、方括号语法以及方括号加变量都可以访问属性。'
      },
      {
        type: 'multiple',
        question: '关于 JSON，以下哪些说法是正确的？（多选）',
        options: ['网络传输的数据大多是 JSON 字符串', 'JSON 中可以包含函数', 'JSON 的属性名必须用双引号', 'JSON.parse 可以把对象转成字符串'],
        answer: [0, 2],
        explanation: 'JSON 不能包含函数；把对象转成字符串的是 JSON.stringify，parse 是反方向。'
      },
      {
        type: 'single',
        question: 'let user = { name: "小明", info: { city: "北京" } }; user.info.city 的值是？',
        options: ['undefined', '"北京"', '报错', '"小明"'],
        answer: 1,
        explanation: '对象可以嵌套，连续用点语法逐级访问即可取到内层属性。'
      },
      {
        type: 'judge',
        question: '表达式 "age" in { age: 18 } 的结果是 true。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'in 关键字用于判断对象是否拥有某个属性，该对象确实有 age 属性。'
      },
      {
        type: 'single',
        question: 'let key = "age"; let u = { age: 18 }; console.log(u[key]); 输出什么？',
        options: ['undefined', '18', '"age"', '报错'],
        answer: 1,
        explanation: '方括号里放变量时按变量的值查找属性，即读取 u["age"]，得到 18。'
      },
      {
        type: 'single',
        question: 'let u = { name: "小明" }; delete u.name; console.log("name" in u); 输出什么？',
        options: ['true', 'false', 'undefined', '报错'],
        answer: 1,
        explanation: 'delete 删除了 name 属性，再用 in 判断得到 false。'
      },
      {
        type: 'single',
        question: 'JSON.parse("[1, 2, 3]") 的结果是？',
        options: ['字符串 "[1, 2, 3]"', '数组 [1, 2, 3]', '数字 123', '报错'],
        answer: 1,
        explanation: 'JSON.parse 不仅能解析对象字符串，也能解析数组等基本结构的 JSON。'
      },
      {
        type: 'single',
        question: 'console.log(typeof JSON.parse("true")); 输出什么？',
        options: ['"string"', '"boolean"', '"object"', '报错'],
        answer: 1,
        explanation: 'JSON.parse("true") 还原出布尔值 true，typeof true 是 "boolean"。'
      },
      {
        type: 'judge',
        question: '对象的属性名是字符串，而属性值可以是任意类型，包括数组和函数。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '对象的值没有类型限制，数组、函数、嵌套对象都可以作为属性值。'
      },
      {
        type: 'judge',
        question: 'JSON.stringify 转换包含函数的对象时，函数也会被完整保留。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: 'JSON 不能表示函数，stringify 时函数属性会被丢弃。'
      },
      {
        type: 'multiple',
        question: '以下哪些方式能正确给对象 u 添加属性 city？（多选）',
        options: ['u.city = "北京"', 'u["city"] = "北京"', 'let k = "city"; u[k] = "北京"', 'u->city = "北京"'],
        answer: [0, 1, 2],
        explanation: 'JavaScript 没有 -> 语法；点语法、方括号语法及方括号加变量都可以。'
      },
      {
        type: 'multiple',
        question: '关于对象的嵌套与方法，以下哪些说法是正确的？（多选）',
        options: ['对象可以嵌套对象', '对象里的函数称为方法', '调用对象的方法写作 obj.greet()', '嵌套对象最多只能嵌一层'],
        answer: [0, 1, 2],
        explanation: '对象嵌套没有层数限制，可以逐级深入访问。'
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
        type: 'multiple',
        question: '以下哪些属于常见的 DOM 操作？（多选）',
        options: ['用 querySelector 获取元素', '用 appendChild 把新元素插入页面', '用 addEventListener 监听点击事件', '用 JSON.parse 修改元素文字'],
        answer: [0, 1, 2],
        explanation: 'JSON.parse 用于解析 JSON 字符串，与 DOM 操作无关；其余三个都是常见 DOM 操作。'
      },
      {
        type: 'single',
        question: 'document.querySelector(".item") 是按照什么来查找元素？',
        options: ['id', 'class', '标签名', '属性值'],
        answer: 1,
        explanation: '选择器写法与 CSS 一致，点号开头表示按 class 查找。'
      },
      {
        type: 'single',
        question: '要修改元素显示的文字内容，应该使用哪个属性？',
        options: ['text', 'textContent', 'content', 'value'],
        answer: 1,
        explanation: 'textContent 用于读写元素的文字内容，innerHTML 则用于内部 HTML。'
      },
      {
        type: 'judge',
        question: '通过元素的 style 属性可以修改它的颜色等样式，比如 el.style.color = "red"。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '元素的 style 对象可以逐项设置内联样式。'
      },
      {
        type: 'judge',
        question: '调用元素的 remove() 方法可以把它从页面中删除。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'remove() 会把元素自身从文档树中移除。'
      },
      {
        type: 'multiple',
        question: '以下哪些是常见的事件类型？（多选）',
        options: ['click', 'input', 'scroll', 'push'],
        answer: [0, 1, 2],
        explanation: 'push 是数组方法不是事件类型；click、input、scroll 分别对应点击、输入、滚动。'
      },
      {
        type: 'multiple',
        question: '动态添加一个页面元素的正确流程包括哪些步骤？（多选）',
        options: ['用 createElement 创建元素', '设置元素的内容或样式', '用 appendChild 或 append 插入到父元素中', '创建后它会自动显示在页面上'],
        answer: [0, 1, 2],
        explanation: '创建的元素不会自动显示，必须手动插入到文档中。'
      },
      {
        type: 'single',
        question: '页面上有多个 class 为 item 的元素，document.querySelector(".item") 会返回？',
        options: ['所有匹配元素组成的数组', '第一个匹配的元素', '最后一个匹配的元素', 'null'],
        answer: 1,
        explanation: 'querySelector 只返回匹配的第一个元素，要取全部需用 querySelectorAll。'
      },
      {
        type: 'judge',
        question: '同一个元素可以通过多次 addEventListener 为同一事件类型绑定多个处理函数。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'addEventListener 可以重复绑定，事件触发时各处理函数依次执行。'
      },
      {
        type: 'single',
        question: 'document.querySelector("#none") 在页面上找不到匹配元素时返回？',
        options: ['undefined', 'null', '空对象', '直接报错'],
        answer: 1,
        explanation: 'querySelector 找不到元素时返回 null，使用前最好先做判断。'
      },
      {
        type: 'single',
        question: '要一次性获取页面上所有 class 为 item 的元素，应该使用？',
        options: ['document.querySelector(".item")', 'document.querySelectorAll(".item")', 'document.getElement(".item")', 'document.createElement(".item")'],
        answer: 1,
        explanation: 'querySelectorAll 返回所有匹配元素的列表；querySelector 只返回第一个。'
      },
      {
        type: 'single',
        question: '想在输入框内容每次变化时立即做出响应，应该监听哪个事件？',
        options: ['click', 'input', 'scroll', 'submit'],
        answer: 1,
        explanation: 'input 事件在输入内容变化时触发，适合实时校验、字数统计等需求。'
      },
      {
        type: 'single',
        question: '已有 const li = document.createElement("li"); li.textContent = "苹果"; 要把 li 插入页面已有的 ul 末尾，应执行？',
        options: ['ul.innerHTML = li', 'ul.appendChild(li)', 'document.add(li)', 'li.show()'],
        answer: 1,
        explanation: '创建好的元素要用 appendChild（或 append）挂到父元素上才会显示。'
      },
      {
        type: 'judge',
        question: 'innerHTML 会把内容当作 HTML 解析，而 textContent 只把它当作纯文本。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '给 innerHTML 赋 "<b>加粗</b>" 会真的加粗；textContent 则会原样显示这串字符。'
      },
      {
        type: 'judge',
        question: 'addEventListener 的处理函数会收到一个 event 参数，其中包含事件的相关信息。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'event 对象里有事件类型、触发元素、点击位置、按下的键等信息。'
      },
      {
        type: 'multiple',
        question: '以下哪些 querySelector 选择器写法是正确的？（多选）',
        options: ['"#app" 按 id 查找', '".item" 按 class 查找', '"ul" 按标签名查找', '"*app" 按 id 查找'],
        answer: [0, 1, 2],
        explanation: '选择器写法与 CSS 一致：# 开头按 id、. 开头按 class、直接写标签名按标签查找。'
      },
      {
        type: 'multiple',
        question: '关于事件监听，以下哪些说法是正确的？（多选）',
        options: ['事件是用户在页面上的动作，如点击、输入、滚动', 'addEventListener 的第一个参数是事件类型', '事件发生时处理函数会被自动调用', '处理函数必须命名为 handleClick 才能生效'],
        answer: [0, 1, 2],
        explanation: '处理函数的名字随意，甚至可以传匿名函数，与命名无关。'
      }
    ]
  },
  {
    id: 'js-07',
    title: '字符串常用方法',
    summary: '掌握字符串的截取查找与拼接',
    minutes: 12,
    sections: [
      {
        heading: '长度与字符访问',
        text: '字符串的 length 属性表示字符个数。访问某个字符可以用下标 str[0]，下标从 0 开始，也可以用 charAt。字符串是不可变的，所有方法都返回新字符串，不会改变原字符串本身。这点和初学者直觉不同，需要特别记住。',
        code: 'let s = "hello";\ns.length;  // 5\ns[0];      // "h"\ns.charAt(4); // "o"',
        lang: 'js'
      },
      {
        heading: '查找与截取',
        text: 'indexOf 返回子串第一次出现的位置，找不到返回 -1；includes 判断字符串是否包含某段文字。slice(开始, 结束) 截取子串，含头不含尾；只传一个参数则截到末尾。substring 用法类似但不支持负数下标，日常更推荐 slice。',
        code: 'let s = "hello world";\ns.indexOf("world");   // 6\ns.includes("hello");  // true\ns.slice(0, 5);        // "hello"',
        lang: 'js'
      },
      {
        heading: '转换与拼接',
        text: 'toUpperCase 转大写，toLowerCase 转小写，trim 去掉首尾空白，replace 替换第一处匹配。拼接除了 + 号，还可以用数组的 join 或者字符串的 repeat。这些方法是处理用户输入、格式化文字时的得力工具。',
        code: '"abc".toUpperCase();      // "ABC"\n"  hi  ".trim();          // "hi"\n"aaa".replace("a", "b");  // "baa"\n"ab".repeat(3);           // "ababab"',
        lang: 'js'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: '"hello world".slice(6) 的结果是？',
        options: ['"hello"', '"world"', '"hello world"', '"o world"'],
        answer: 1,
        explanation: 'slice 只传一个参数时从该下标截到字符串末尾，下标 6 开始是 "world"。'
      },
      {
        type: 'judge',
        question: '字符串的方法会直接修改原字符串。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '字符串是不可变的，所有方法都返回新字符串，原字符串保持不变。'
      },
      {
        type: 'single',
        question: '"abcabc".indexOf("z") 的返回值是？',
        options: ['0', 'undefined', '-1', '报错'],
        answer: 2,
        explanation: 'indexOf 找不到子串时返回 -1，这是它的固定约定。'
      },
      {
        type: 'multiple',
        question: '以下哪些方法属于字符串的常用方法？（多选）',
        options: ['slice', 'includes', 'push', 'trim'],
        answer: [0, 1, 3],
        explanation: 'push 是数组方法，字符串没有 push；slice、includes、trim 都是字符串方法。'
      },
      {
        type: 'single',
        question: '"hello"[1] 的值是？',
        options: ['"h"', '"e"', '"l"', 'undefined'],
        answer: 1,
        explanation: '字符串下标从 0 开始，下标 1 对应第二个字符 "e"。'
      },
      {
        type: 'single',
        question: '"  hello  ".trim() 的结果是？',
        options: ['"hello"', '"  hello"', '"hello  "', '"HELLO"'],
        answer: 0,
        explanation: 'trim 去掉字符串首尾的空白字符，中间的内容不受影响。'
      },
      {
        type: 'judge',
        question: '"ABC".toLowerCase() 的结果是 "abc"。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'toLowerCase 把所有字母转为小写，返回新字符串。'
      },
      {
        type: 'judge',
        question: 'substring 方法和 slice 一样支持负数下标。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: 'substring 不支持负数下标，日常更推荐使用 slice。'
      },
      {
        type: 'multiple',
        question: '以下关于字符串方法的说法哪些是正确的？（多选）',
        options: ['length 表示字符个数', 'replace 默认只替换第一处匹配', 'slice(开始, 结束) 截取时含头不含尾', 'charAt 会直接修改原字符串'],
        answer: [0, 1, 2],
        explanation: '字符串不可变，任何方法都不会修改原字符串，只会返回新字符串。'
      },
      {
        type: 'multiple',
        question: '以下哪些表达式的结果是 "abab"？（多选）',
        options: ['"ab".repeat(2)', '"ab" + "ab"', '["a", "b", "a", "b"].join("")', '"abab".slice(0, 2)'],
        answer: [0, 1, 2],
        explanation: '"abab".slice(0, 2) 只截取前两个字符，结果是 "ab"。'
      },
      {
        type: 'single',
        question: '"hello world".replace("o", "0") 的结果是？',
        options: ['"hell0 w0rld"', '"hell0 world"', '"hello w0rld"', '"hello world"'],
        answer: 1,
        explanation: 'replace 默认只替换第一处匹配，第一个 o 被替换成 0。'
      },
      {
        type: 'judge',
        question: '"hello".slice(-3) 的结果是 "llo"。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'slice 支持负数下标，-3 表示从倒数第三个字符截到末尾。'
      },
      {
        type: 'single',
        question: '"hello world".indexOf("world") 的返回值是？',
        options: ['5', '6', '7', '-1'],
        answer: 1,
        explanation: 'indexOf 返回子串第一次出现的下标，"world" 从下标 6 开始。'
      },
      {
        type: 'single',
        question: '"hello".length 的值是？',
        options: ['4', '5', '6', 'undefined'],
        answer: 1,
        explanation: 'length 表示字符个数，"hello" 共 5 个字符。'
      },
      {
        type: 'single',
        question: '"JavaScript".slice(0, 4) 的结果是？',
        options: ['"Java"', '"JavaS"', '"avaS"', '"Script"'],
        answer: 0,
        explanation: 'slice 含头不含尾，截取下标 0 到 3，即 "Java"。'
      },
      {
        type: 'single',
        question: '输入框拿到的值是 "  admin  "，想判断用户是否输入了 admin，最稳妥的写法是？',
        options: ['s === "admin"', 's.trim() === "admin"', 's.toUpperCase() === "admin"', 's.length === 5'],
        answer: 1,
        explanation: '用户输入常带首尾空格，先 trim 去掉空白再比较才稳妥。'
      },
      {
        type: 'judge',
        question: '"abc".includes("b") 的返回值是 true。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'includes 判断字符串是否包含某段文字，"abc" 包含 "b"。'
      },
      {
        type: 'judge',
        question: '"Hello".toUpperCase() 只把首字母变成大写。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: 'toUpperCase 会把所有字母都转为大写，结果是 "HELLO"。'
      },
      {
        type: 'multiple',
        question: '以下哪些方法可以用于查找或判断子串？（多选）',
        options: ['indexOf', 'includes', 'charAt', 'trim'],
        answer: [0, 1],
        explanation: 'charAt 是按下标取单个字符，trim 是去掉首尾空白，都与查找子串无关。'
      },
      {
        type: 'multiple',
        question: '以下哪些表达式的结果是 "HELLO"？（多选）',
        options: ['"hello".toUpperCase()', '"HELLO world".slice(0, 5)', '"HE" + "LLO"', '"hello".replace("h", "H")'],
        answer: [0, 1, 2],
        explanation: 'replace 只替换第一处匹配，"hello".replace("h", "H") 得到的是 "Hello"。'
      }
    ]
  },
  {
    id: 'js-08',
    title: '数字、Math 与 Date 日期',
    summary: '处理数值计算与时间日期',
    minutes: 13,
    sections: [
      {
        heading: '数字与常用转换',
        text: 'JavaScript 只有 number 一种数字类型，整数小数不分家。parseInt 把字符串按整数解析，parseFloat 解析小数；isNaN 判断一个值是否为 NaN。注意浮点数精度问题：0.1 + 0.2 并不等于 0.3，比较金额时要用整数（以分为单位）或做四舍五入处理。',
        code: 'parseInt("3.9");    // 3\nparseFloat("3.9");  // 3.9\nisNaN("abc");       // true\n0.1 + 0.2;          // 0.30000000000000004',
        lang: 'js'
      },
      {
        heading: 'Math 对象',
        text: 'Math 是内置的数学工具对象：Math.round 四舍五入，Math.floor 向下取整，Math.ceil 向上取整，Math.max 和 Math.min 求最大最小值。Math.random() 返回 0 到 1 之间（不含 1）的随机小数，配合 floor 可以生成指定范围的随机整数。',
        code: 'Math.round(4.5);  // 5\nMath.floor(4.9);  // 4\nMath.ceil(4.1);   // 5\n// 生成 1~10 的随机整数\nMath.floor(Math.random() * 10) + 1;',
        lang: 'js'
      },
      {
        heading: 'Date 日期',
        text: 'new Date() 创建当前时间的日期对象，传入字符串或数字可以创建指定时间。常用方法有 getFullYear、getMonth（注意月份从 0 开始）、getDate、getDay（星期几）。getTime() 返回毫秒时间戳，两个时间戳相减就能算出时间差。',
        code: 'let now = new Date();\nnow.getFullYear(); // 如 2026\nnow.getMonth();    // 0 表示一月\nlet d = new Date("2026-01-01");\nd.getTime();       // 毫秒时间戳',
        lang: 'js'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: 'Math.floor(4.9) 的结果是？',
        options: ['5', '4', '4.9', '报错'],
        answer: 1,
        explanation: 'Math.floor 向下取整，4.9 去掉小数部分是 4。'
      },
      {
        type: 'single',
        question: 'new Date("2026-03-01").getMonth() 的返回值是？',
        options: ['3', '2', '1', '0'],
        answer: 1,
        explanation: 'getMonth 返回的月份从 0 开始计数，三月对应 2。'
      },
      {
        type: 'judge',
        question: '在 JavaScript 中，0.1 + 0.2 的结果精确等于 0.3。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '浮点数存在精度误差，0.1 + 0.2 约等于 0.30000000000000004。'
      },
      {
        type: 'multiple',
        question: '以下哪些是 Math 对象的方法？（多选）',
        options: ['Math.random', 'Math.floor', 'Math.parseInt', 'Math.max'],
        answer: [0, 1, 3],
        explanation: 'parseInt 是全局函数不是 Math 的方法；random、floor、max 都属于 Math。'
      },
      {
        type: 'single',
        question: 'parseInt("3.9") 的结果是？',
        options: ['3', '3.9', '4', 'NaN'],
        answer: 0,
        explanation: 'parseInt 按整数解析，直接丢弃小数部分，得到 3。'
      },
      {
        type: 'single',
        question: 'Math.ceil(4.1) 的结果是？',
        options: ['4', '4.1', '5', '6'],
        answer: 2,
        explanation: 'Math.ceil 向上取整，4.1 向上是 5。'
      },
      {
        type: 'judge',
        question: 'isNaN("abc") 的返回值是 true。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '"abc" 无法转成有效数字，会被判定为 NaN，isNaN 返回 true。'
      },
      {
        type: 'judge',
        question: 'Math.random() 有可能返回 1。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: 'Math.random() 返回 0 到 1 之间的小数，包含 0 但不包含 1。'
      },
      {
        type: 'multiple',
        question: '以下哪些说法是正确的？（多选）',
        options: ['Math.floor 是向下取整', 'Math.max(1, 2, 3) 返回 3', 'getTime() 返回毫秒时间戳', 'Math.round(4.4) 返回 5'],
        answer: [0, 1, 2],
        explanation: 'Math.round 是四舍五入，4.4 舍去小数得 4，不是 5。'
      },
      {
        type: 'multiple',
        question: '关于 Date 对象的方法，以下哪些说法是正确的？（多选）',
        options: ['getMonth 返回的月份从 0 开始', 'getDay 返回星期几', 'getFullYear 返回四位年份', 'getDate 返回星期几'],
        answer: [0, 1, 2],
        explanation: 'getDate 返回的是月份中的第几天（几号），星期几要用 getDay。'
      },
      {
        type: 'single',
        question: '想生成一个 1 到 6 之间的随机整数（模拟骰子），正确的写法是？',
        options: ['Math.random() * 6', 'Math.floor(Math.random() * 6) + 1', 'Math.round(Math.random() * 6)', 'Math.ceil(Math.random()) * 6'],
        answer: 1,
        explanation: 'random() 乘 6 得到 0~6 之间的小数，floor 取整后是 0~5，加 1 正好是 1~6。'
      },
      {
        type: 'judge',
        question: '处理金额计算时，可以先把单位换算成分转成整数再计算，避免浮点精度问题。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '整数计算没有精度误差，是处理金额类需求的常用技巧。'
      },
      {
        type: 'single',
        question: 'parseFloat("3.9") 的结果是？',
        options: ['3', '3.9', '4', 'NaN'],
        answer: 1,
        explanation: 'parseFloat 解析小数，保留小数部分得到 3.9。'
      },
      {
        type: 'single',
        question: 'Math.round(4.5) 的结果是？',
        options: ['4', '4.5', '5', '报错'],
        answer: 2,
        explanation: 'Math.round 四舍五入，4.5 入为 5。'
      },
      {
        type: 'single',
        question: 'Math.max(3, 9, 5) 的返回值是？',
        options: ['3', '5', '9', '[3, 9, 5]'],
        answer: 2,
        explanation: 'Math.max 返回所有参数中的最大值，这里是 9。'
      },
      {
        type: 'single',
        question: '想计算两个日期相差的天数，合理的做法是？',
        options: ['两个 Date 对象直接相减再除以 86400', '用 getTime() 拿到毫秒时间戳相减，再换算成天数', '用 getDate() 的返回值相减即可', '日期之间无法做减法'],
        answer: 1,
        explanation: 'getTime() 返回毫秒时间戳，差值除以一天的毫秒数（1000 * 60 * 60 * 24）即为天数差。'
      },
      {
        type: 'judge',
        question: 'new Date() 不传参数时，创建的是当前时间的日期对象。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '不传参数的 new Date() 表示代码执行那一刻的时间。'
      },
      {
        type: 'judge',
        question: 'isNaN("123") 的返回值是 true。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '"123" 能转成有效数字 123，不是 NaN，isNaN 返回 false。'
      },
      {
        type: 'multiple',
        question: '以下哪些表达式的结果是整数？（多选）',
        options: ['Math.floor(4.9)', 'Math.ceil(4.1)', 'parseInt("3.9")', '0.1 + 0.2'],
        answer: [0, 1, 2],
        explanation: '0.1 + 0.2 约等于 0.30000000000000004，不是整数；其余三个都返回整数。'
      },
      {
        type: 'multiple',
        question: '关于 Math.random()，以下哪些说法是正确的？（多选）',
        options: ['每次调用通常返回不同的值', 'Math.floor(Math.random() * 10) 得到 0 到 9 的整数', '它有可能返回负数', '它返回的是字符串类型'],
        answer: [0, 1],
        explanation: 'Math.random() 返回 0 到 1 之间的随机小数，不会是负数，类型是 number。'
      }
    ]
  },
  {
    id: 'js-09',
    title: '作用域与闭包',
    summary: '理解变量的可见范围与私有数据',
    minutes: 16,
    sections: [
      {
        heading: '作用域',
        text: '作用域决定变量在哪里能被访问。函数内部声明的变量只在该函数内有效，称为局部变量；函数外部声明的变量全局可用。ES6 的 let 和 const 还有块级作用域，在 if、for 的花括号里声明的变量，出了花括号就访问不到。查找变量时从内层逐层向外找，称为作用域链。',
        code: 'let a = 1;\nfunction f() {\n  let b = 2;\n  console.log(a); // 1，能访问外层\n}\nf();\n// console.log(b); 报错，b 是局部变量',
        lang: 'js'
      },
      {
        heading: '什么是闭包',
        text: '闭包是指内层函数"记住"了它定义时所在外层函数的变量，即使外层函数已经执行完毕，这些变量依然存活。最常见的形式是函数里返回一个函数，返回的函数继续使用外层变量。闭包让变量既能长期保存，又不暴露到全局。',
        code: 'function outer() {\n  let count = 0;\n  return function() {\n    count++;\n    return count;\n  };\n}\nconst fn = outer();\nfn(); // 1\nfn(); // 2，count 被记住了',
        lang: 'js'
      },
      {
        heading: '闭包的实际用途',
        text: '闭包最常用来做"私有数据"：把变量藏在函数里，只通过返回的函数来读写，外部无法直接篡改。比如计数器、缓存、模块封装都依赖闭包。使用时要注意，闭包会让外层变量无法被垃圾回收，不必要时不要滥用，避免内存占用过高。',
        code: 'function createCounter() {\n  let n = 0;\n  return {\n    add: function() { n++; },\n    get: function() { return n; }\n  };\n}\nconst c = createCounter();\nc.add();\nc.get(); // 1，外部拿不到 n 本身',
        lang: 'js'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: '在函数内部用 let 声明的变量，函数外部能否访问？',
        options: ['可以', '不可以', '视情况而定', '只有返回后才能'],
        answer: 1,
        explanation: '函数内声明的变量是局部变量，作用域仅限于该函数内部。'
      },
      {
        type: 'single',
        question: '下面代码输出什么？function f(){ let x=1; return function(){ x++; return x; }; } const g=f(); g(); g(); console.log(g());',
        options: ['1', '2', '3', 'undefined'],
        answer: 2,
        explanation: '闭包记住了 x，三次调用分别返回 1、2、3，最后输出 3。'
      },
      {
        type: 'judge',
        question: 'let 声明的变量在 if 的花括号之外仍然可以访问。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: 'let 具有块级作用域，出了花括号就访问不到。'
      },
      {
        type: 'multiple',
        question: '以下哪些属于闭包的典型用途？（多选）',
        options: ['实现私有变量', '制作计数器', '声明全局变量', '封装模块数据'],
        answer: [0, 1, 3],
        explanation: '闭包用于隐藏和保护数据，声明全局变量反而与闭包的目的相反。'
      },
      {
        type: 'single',
        question: 'let a = 1; function f() { let a = 2; return a; } 执行 f() 返回？',
        options: ['1', '2', 'undefined', '报错'],
        answer: 1,
        explanation: '函数内部的局部变量 a 遮蔽了外层的 a，返回的是局部的 2。'
      },
      {
        type: 'single',
        question: '在嵌套函数中访问变量时，JavaScript 的查找顺序是？',
        options: ['从内层作用域逐层向外查找', '从最外层向内查找', '只在全局作用域查找', '随机查找'],
        answer: 0,
        explanation: '变量查找沿着作用域链从内层逐层向外进行，找到即止。'
      },
      {
        type: 'judge',
        question: '闭包会让外层变量无法被垃圾回收，因此不必要时不应滥用。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '闭包持有外层变量的引用，过度使用会增加内存占用。'
      },
      {
        type: 'judge',
        question: '外层函数执行完毕后，闭包所引用的外层变量会立即被销毁。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '只要返回的函数还在使用这些变量，它们就会一直存活。'
      },
      {
        type: 'multiple',
        question: '以下哪些说法是正确的？（多选）',
        options: ['let 和 const 具有块级作用域', '函数内声明的变量是局部变量', '闭包可以用来实现私有数据', '闭包会把变量暴露到全局'],
        answer: [0, 1, 2],
        explanation: '闭包恰恰相反，是把变量藏起来不暴露到全局。'
      },
      {
        type: 'multiple',
        question: '以下哪些场景适合使用闭包？（多选）',
        options: ['实现一个计数器', '缓存计算结果', '封装模块内部数据', '声明一个全局常量'],
        answer: [0, 1, 2],
        explanation: '声明全局常量不需要闭包；计数器、缓存、模块封装都是闭包的典型应用。'
      },
      {
        type: 'single',
        question: '下面代码输出什么？function counter(){ let n = 10; return function(){ n += 5; return n; }; } const c1 = counter(); const c2 = counter(); c1(); console.log(c1(), c2());',
        options: ['15 15', '20 15', '20 20', '15 20'],
        answer: 1,
        explanation: '每次调用 counter() 都会创建独立的闭包环境，c1 的 n 累加两次为 20，c2 的 n 首次调用为 15。'
      },
      {
        type: 'single',
        question: '循环中的经典闭包问题：for (var i = 0; i < 3; i++) { setTimeout(function(){ console.log(i); }, 0); } 输出结果是？',
        options: ['0 1 2', '3 3 3', '0 0 0', 'undefined undefined undefined'],
        answer: 1,
        explanation: 'var 没有块级作用域，三个回调共享同一个 i，定时器触发时循环已结束，i 为 3，故输出三个 3。'
      },
      {
        type: 'single',
        question: '接上题，想让定时器依次输出 0、1、2，最简洁的修改方式是？',
        options: ['把 var 改成 let', '把 setTimeout 的延迟改为 100', '在循环外再包一层普通函数但不传参', '把 console.log(i) 改成 console.log("i")'],
        answer: 0,
        explanation: 'let 具有块级作用域，每次循环都会创建新的 i 绑定，各回调记住自己那次循环的值。'
      },
      {
        type: 'judge',
        question: '闭包指的是内层函数记住了它定义时所在外层函数的变量。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '这正是闭包的核心定义：函数与其定义时所在的词法作用域的组合。'
      },
      {
        type: 'judge',
        question: '内层函数只能读取外层变量，无法修改外层变量的值。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '闭包中的内层函数既能读也能写外层变量，计数器就是靠修改外层变量实现的。'
      },
      {
        type: 'multiple',
        question: '关于下面的私有数据代码：function create(){ let secret = 1; return { get: function(){ return secret; } }; } const o = create(); 以下哪些说法是正确的？（多选）',
        options: ['o.get() 返回 1', '外部无法直接读写变量 secret', 'secret 会因闭包而长期存活', '执行 o.secret 可以得到 1'],
        answer: [0, 1, 2],
        explanation: 'secret 不在返回的对象上，o.secret 是 undefined；外部只能通过 get 方法间接读取。'
      },
      {
        type: 'single',
        question: '下面代码输出什么？let x = 1; if (true) { let x = 2; } console.log(x);',
        options: ['1', '2', 'undefined', '报错'],
        answer: 0,
        explanation: 'if 花括号里的 let x 属于块级作用域，与外部的 x 互不影响，输出 1。'
      },
      {
        type: 'single',
        question: '想让一份数据长期保存又不污染全局，最合适的手段是？',
        options: ['用 var 声明在全局', '用闭包把变量藏在函数里，只暴露操作方法', '在每个需要它的地方重复定义', '把它写进注释里'],
        answer: 1,
        explanation: '闭包能让变量长期存活又不暴露到全局，是实现私有数据的标准方式。'
      },
      {
        type: 'judge',
        question: '函数内部可以读取在函数外部声明的变量。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '内层作用域可以访问外层变量，这是作用域链从内向外查找的结果。'
      },
      {
        type: 'multiple',
        question: '以下关于作用域的说法哪些是正确的？（多选）',
        options: ['函数内部可以访问外部的变量', '函数外部可以直接访问函数内的局部变量', '查找变量沿作用域链从内层逐层向外进行', 'for 循环花括号里用 let 声明的变量，出了循环就访问不到'],
        answer: [0, 2, 3],
        explanation: '局部变量只在函数内有效，外部访问不到；其余三项说法正确。'
      }
    ]
  },
  {
    id: 'js-10',
    title: 'this 指向详解',
    summary: '搞清函数中的 this 到底是谁',
    minutes: 15,
    sections: [
      {
        heading: 'this 的基本规则',
        text: 'this 的值取决于函数的调用方式，而不是定义位置。作为对象的方法调用时，this 指向该对象；直接调用普通函数时，非严格模式下 this 指向全局对象（浏览器里是 window），严格模式下是 undefined。记住一句话：谁调用，this 就是谁。',
        code: 'const user = {\n  name: "小明",\n  say: function() {\n    console.log(this.name);\n  }\n};\nuser.say(); // "小明"，this 是 user',
        lang: 'js'
      },
      {
        heading: 'call、apply 与 bind',
        text: '这三个方法可以手动指定 this。call 和 apply 立即调用函数，参数分别按列表和数组传入；bind 不立即执行，而是返回一个 this 被固定的新函数。借用方法或固定回调里的 this 时它们非常好用。',
        code: 'function greet() {\n  console.log(this.name);\n}\nconst obj = { name: "小红" };\ngreet.call(obj);  // "小红"\nconst g = greet.bind(obj);\ng();              // "小红"',
        lang: 'js'
      },
      {
        heading: '箭头函数没有自己的 this',
        text: '箭头函数不会绑定自己的 this，它直接沿用外层代码的 this。这一特性在定时器、事件回调里特别方便，不用担心 this 丢失。但也因此箭头函数不能用作对象方法，也不能用 call、bind 改变它的 this。',
        code: 'const obj = {\n  name: "小李",\n  say: function() {\n    setTimeout(() => {\n      console.log(this.name);\n    }, 100);\n  }\n};\nobj.say(); // 100 毫秒后输出 "小李"',
        lang: 'js'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: 'const o = { a: 1, f: function(){ return this.a; } }; 执行 o.f() 返回？',
        options: ['undefined', '1', 'window', '报错'],
        answer: 1,
        explanation: 'f 作为 o 的方法被调用，this 指向 o，所以返回 o.a 即 1。'
      },
      {
        type: 'judge',
        question: '箭头函数的 this 可以用 bind 方法改变。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '箭头函数没有自己的 this，它沿用外层 this，bind 对它无效。'
      },
      {
        type: 'single',
        question: '下面哪个方法只返回一个绑定了 this 的新函数，而不立即执行？',
        options: ['call', 'apply', 'bind', 'this'],
        answer: 2,
        explanation: 'bind 返回新函数；call 和 apply 会立即调用原函数。'
      },
      {
        type: 'multiple',
        question: '以下哪些说法是正确的？（多选）',
        options: ['方法调用时 this 指向调用它的对象', 'call 可以指定函数执行时的 this', '箭头函数有自己的 this', '严格模式下直接调用普通函数，this 是 undefined'],
        answer: [0, 1, 3],
        explanation: '箭头函数没有自己的 this，其余三项说法均正确。'
      },
      {
        type: 'single',
        question: '非严格模式下，直接调用一个普通函数（如 fn()），函数内的 this 指向？',
      options: ['全局对象（浏览器里是 window）', 'undefined', 'null', '函数自身'],
        answer: 0,
        explanation: '非严格模式下直接调用普通函数，this 指向全局对象；严格模式下才是 undefined。'
      },
      {
        type: 'single',
        question: 'call 和 apply 的主要区别是？',
        options: ['call 的参数按列表传入，apply 的参数按数组传入', 'apply 的参数按列表传入，call 的按数组传入', '两者完全一样', 'call 不会立即执行函数'],
        answer: 0,
        explanation: 'call 逐个传参，apply 把参数放进数组传入，两者都会立即调用函数。'
      },
      {
        type: 'judge',
        question: '箭头函数很适合用作对象的方法。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '箭头函数没有自己的 this，用作对象方法时 this 不指向该对象，应避免。'
      },
      {
        type: 'judge',
        question: '在定时器回调中使用箭头函数，可以避免 this 丢失的问题。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '箭头函数沿用外层 this，回调中的 this 与外层一致，不会变成 window 或 undefined。'
      },
      {
        type: 'multiple',
        question: '以下哪些方法可以手动指定函数执行时的 this？（多选）',
        options: ['call', 'apply', 'bind', 'setTimeout'],
        answer: [0, 1, 2],
        explanation: 'setTimeout 是定时器，与指定 this 无关；call、apply、bind 都能指定 this。'
      },
      {
        type: 'multiple',
        question: '关于 this，以下哪些说法是正确的？（多选）',
        options: ['this 的值取决于函数的调用方式', '作为对象方法调用时，this 指向该对象', '箭头函数沿用外层代码的 this', 'bind 会立即执行原函数'],
        answer: [0, 1, 2],
        explanation: 'bind 只返回绑定了 this 的新函数，不会立即执行。'
      },
      {
        type: 'single',
        question: '下面代码输出什么？const obj = { name: "小明", say: function(){ return this.name; } }; const f = obj.say; console.log(f());',
        options: ['"小明"', 'undefined（非严格模式下 this.name 为 undefined）', '报错：say is not defined', 'null'],
        answer: 1,
        explanation: '方法被赋值给变量后是独立调用，this 不再指向 obj，非严格模式下指向全局对象，window.name 一般不是 "小明"。'
      },
      {
        type: 'single',
        question: '下面代码输出什么？const a = { n: 1 }; const b = { n: 2, f: function(){ return this.n; } }; console.log(b.f.call(a));',
        options: ['1', '2', 'undefined', '报错'],
        answer: 0,
        explanation: 'call 手动把 this 指定为 a，所以读取的是 a.n 即 1。'
      },
      {
        type: 'single',
        question: '下面代码输出什么？const obj = { name: "outer", f: () => this.name }; console.log(typeof obj.f());',
        options: ['"string"', '"undefined"（this 不指向 obj）', '"object" 且必为 obj', '一定报错'],
        answer: 1,
        explanation: '箭头函数没有自己的 this，它沿用外层作用域的 this，不会指向 obj。'
      },
      {
        type: 'judge',
        question: '把对象的方法赋值给普通变量后再调用，方法内的 this 仍然指向原对象。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: 'this 由调用方式决定，脱离对象独立调用时 this 会丢失，这是常见面试坑。'
      },
      {
        type: 'judge',
        question: 'const bound = fn.bind(obj); bound.call(other); 之后 bound 内的 this 会变成 other。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: 'bind 绑定的 this 是固定的，之后再用 call 也无法改变。'
      },
      {
        type: 'multiple',
        question: '某同学在 btn.addEventListener("click", obj.say) 后发现 this 丢失，以下哪些修复方式是可行的？（多选）',
        options: ['改成 btn.addEventListener("click", obj.say.bind(obj))', '改成 btn.addEventListener("click", () => obj.say())', '提前保存 const self = obj，回调里用 self 代替 this', '把 obj.say 改成箭头函数定义在全局作用域'],
        answer: [0, 1, 2],
        explanation: '全局定义的箭头函数 this 仍不指向 obj；bind、箭头函数包裹、缓存变量都是修复 this 丢失的常用手段。'
      },
      {
        type: 'single',
        question: '下面代码输出什么？function show(){ return this; } const r = show.call({ tag: "x" }); console.log(r.tag);',
        options: ['undefined', '"x"', 'window', '报错'],
        answer: 1,
        explanation: 'call 把 this 指定为该对象，函数返回 this，读取其 tag 属性得到 "x"。'
      },
      {
        type: 'single',
        question: '下面代码输出什么？const obj = { n: 5, f: function(){ const inner = () => this.n; return inner(); } }; console.log(obj.f());',
        options: ['undefined', '5', 'window', '报错'],
        answer: 1,
        explanation: 'inner 是箭头函数，沿用它定义处（方法 f 内部）的 this，即 obj，返回 5。'
      },
      {
        type: 'judge',
        question: 'this 的值取决于函数的定义位置，而不是调用方式。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '恰恰相反，this 由调用方式决定：谁调用，this 就是谁（箭头函数除外）。'
      },
      {
        type: 'multiple',
        question: '关于 call、apply、bind，以下哪些说法是正确的？（多选）',
        options: ['call 和 apply 会立即调用函数', 'bind 返回一个 this 被固定的新函数', 'apply 把参数放在数组中传入', '三者都能改变箭头函数的 this'],
        answer: [0, 1, 2],
        explanation: '箭头函数没有自己的 this，call、apply、bind 对它都无效。'
      }
    ]
  },
  {
    id: 'js-11',
    title: '原型与原型链',
    summary: '理解对象之间共享方法的机制',
    minutes: 16,
    sections: [
      {
        heading: '构造函数与原型',
        text: '构造函数（首字母大写约定）配合 new 可以批量创建对象。如果每个对象都各自存一份方法，会浪费内存。于是 JavaScript 让每个函数都有一个 prototype 属性，挂在它上面的方法会被所有实例共享。实例通过内部的 proto 指针连接到构造函数的 prototype。',
        code: 'function Person(name) {\n  this.name = name;\n}\nPerson.prototype.say = function() {\n  console.log("我是 " + this.name);\n};\nconst p1 = new Person("小明");\nconst p2 = new Person("小红");\np1.say(); // 我是 小明\np1.say === p2.say; // true，共享同一个方法',
        lang: 'js'
      },
      {
        heading: '原型链',
        text: '访问对象属性时，JavaScript 先找对象自身，找不到就沿着 proto 往原型上找，再找不到继续向上，直到 Object.prototype，还没有就返回 undefined。这条查找路径就叫原型链。数组能用 push、对象能用 toString，都是因为方法挂在各自的原型链上。',
        code: 'const arr = [1, 2, 3];\narr.hasOwnProperty("length"); // true\n// hasOwnProperty 来自原型链顶端的\n// Object.prototype',
        lang: 'js'
      },
      {
        heading: 'ES6 class 语法',
        text: 'class 是原型的语法糖，写法更接近其他语言：constructor 是构造函数，直接写的方法会自动挂到 prototype 上，extends 实现继承，子类中用 super 调用父类。底层机制依然是原型，但代码更清晰易读，是现代开发的主流写法。',
        code: 'class Animal {\n  constructor(name) { this.name = name; }\n  speak() { console.log(this.name + " 叫了"); }\n}\nclass Dog extends Animal {\n  speak() { console.log(this.name + " 汪汪"); }\n}\nnew Dog("旺财").speak(); // 旺财 汪汪',
        lang: 'js'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: '想让构造函数创建的所有实例共享一个方法，应该把方法写在哪里？',
        options: ['构造函数内部的 this 上', '构造函数的 prototype 上', '全局对象上', '写在任何位置都一样'],
        answer: 1,
        explanation: '挂在 prototype 上的方法会被所有实例共享，避免每个实例各自存一份。'
      },
      {
        type: 'judge',
        question: 'class 语法底层仍然是基于原型实现的。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'class 只是原型的语法糖，底层机制没有改变。'
      },
      {
        type: 'single',
        question: 'const o = {}; 执行 o.toString() 能成功，是因为 toString 来自？',
        options: ['o 自身', 'window 对象', '原型链上的 Object.prototype', '全局函数'],
        answer: 2,
        explanation: '对象自身没有 toString，沿原型链向上在 Object.prototype 上找到。'
      },
      {
        type: 'multiple',
        question: '以下哪些说法是正确的？（多选）',
        options: ['实例通过 proto 指向构造函数的 prototype', '原型链顶端是 Object.prototype', 'extends 用于 class 的继承', '查找属性时只找对象自身，不找原型'],
        answer: [0, 1, 2],
        explanation: '查找属性会沿原型链一直向上查找，而不是只看对象自身。'
      },
      {
        type: 'single',
        question: '在 class 语法中，哪个名称的方法相当于构造函数？',
        options: ['constructor', 'init', 'main', 'new'],
        answer: 0,
        explanation: 'class 中的 constructor 就是构造函数，new 时会自动执行。'
      },
      {
        type: 'single',
        question: 'function A() {} A.prototype.x = 1; const a = new A(); 那么 a.x 的值是？',
        options: ['undefined', '1', 'null', '报错'],
        answer: 1,
        explanation: '实例 a 自身没有 x，沿原型链在 A.prototype 上找到，值为 1。'
      },
      {
        type: 'judge',
        question: '把方法直接写在构造函数的 this 上，会让每个实例各自存一份方法，浪费内存。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '写在 this 上每个实例都会复制一份，挂在 prototype 上才能共享。'
      },
      {
        type: 'judge',
        question: '在 class 的子类中，可以用 super 调用父类的构造函数或方法。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'super 是子类访问父类的桥梁，常配合 extends 使用。'
      },
      {
        type: 'multiple',
        question: '关于原型方法的共享与查找，以下哪些说法是正确的？（多选）',
        options: ['挂在 prototype 上的方法会被所有实例共享', '访问属性找不到时会沿原型链向上查找', 'class 中直接写的方法会自动挂到 prototype 上', '同一构造函数的各个实例之间方法互不相干'],
        answer: [0, 1, 2],
        explanation: '实例共享 prototype 上的方法，p1.say === p2.say 为 true，并非互不相干。'
      },
      {
        type: 'multiple',
        question: '以下关于原型链的说法哪些是正确的？（多选）',
        options: ['数组能用的 push 方法来自 Array.prototype', 'hasOwnProperty 方法来自 Object.prototype', '原型链上找不到属性时返回 undefined', '查找属性时直接从 Object.prototype 开始'],
        answer: [0, 1, 2],
        explanation: '查找总是从对象自身开始，再逐级向上，而不是从顶端开始。'
      },
      {
        type: 'single',
        question: '下面代码输出什么？function A() {} A.prototype.x = 1; const a = new A(); a.x = 99; delete a.x; console.log(a.x);',
        options: ['99', '1', 'undefined', '报错'],
        answer: 1,
        explanation: 'delete 只删除实例自身的 x，之后查找会沿原型链在 A.prototype 上找到 x 为 1。'
      },
      {
        type: 'single',
        question: '下面代码输出什么？class Animal { speak(){ return "animal"; } } class Dog extends Animal { speak(){ return "dog"; } } console.log(new Dog().speak());',
        options: ['"animal"', '"dog"', '"animaldog"', '报错'],
        answer: 1,
        explanation: '子类 Dog 重写了 speak 方法，查找时先在自身原型找到，输出 "dog"。'
      },
      {
        type: 'single',
        question: '面试官问 p1.say === p2.say（两者由同一构造函数创建，方法挂在 prototype 上）的结果是？',
        options: ['true', 'false', 'undefined', '报错'],
        answer: 0,
        explanation: '两个实例共享同一个原型方法，引用相等，结果为 true。'
      },
      {
        type: 'judge',
        question: '对象自身存在某个属性时，查找会停止，不会继续向原型链上层查找。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '自身找到即返回，这称为属性遮蔽（shadowing）。'
      },
      {
        type: 'judge',
        question: 'Object.prototype 的再上一层原型是 null，原型链到此结束。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'Object.prototype 处于原型链顶端，其原型为 null，查找到此仍未命中则返回 undefined。'
      },
      {
        type: 'multiple',
        question: '关于 new Person("小明") 创建实例时发生的事情，以下哪些说法是正确的？（多选）',
        options: ['创建一个空对象并连接其原型到 Person.prototype', '构造函数内的 this 指向这个新对象', '构造函数默认返回这个新对象', '新对象的原型指向 window'],
        answer: [0, 1, 2],
        explanation: 'new 会创建对象、绑定原型、以该对象为 this 执行构造函数并返回它，与 window 无关。'
      },
      {
        type: 'single',
        question: '下面代码输出什么？class Cat { constructor(name){ this.name = name; } } const c = new Cat("咪咪"); console.log(c.name);',
        options: ['undefined', '"咪咪"', '"Cat"', '报错'],
        answer: 1,
        explanation: 'new 时自动执行 constructor，把传入的 "咪咪" 赋给 this.name。'
      },
      {
        type: 'single',
        question: '下面代码输出什么？function P() {} P.prototype.tag = "p"; const a = new P(); const b = new P(); a.tag = "a"; console.log(b.tag);',
        options: ['"a"', '"p"', 'undefined', '报错'],
        answer: 1,
        explanation: 'a.tag = "a" 只给 a 自身添加了属性，不影响其他实例，b 沿原型链取到 "p"。'
      },
      {
        type: 'judge',
        question: 'hasOwnProperty 方法可以判断一个属性是对象自身拥有的，还是来自原型链。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'hasOwnProperty 只认对象自身的属性，来自原型的属性返回 false。'
      },
      {
        type: 'multiple',
        question: '关于 class 的继承，以下哪些说法是正确的？（多选）',
        options: ['extends 用于声明继承关系', '子类中可以用 super 调用父类的构造函数或方法', '子类重写的方法优先于父类同名方法被找到', 'class 继承与原型机制毫无关系'],
        answer: [0, 1, 2],
        explanation: 'class 是原型的语法糖，extends 底层正是通过原型链实现继承。'
      }
    ]
  },
  {
    id: 'js-12',
    title: '事件进阶：冒泡、捕获与事件委托',
    summary: '掌握事件传播机制与委托技巧',
    minutes: 15,
    sections: [
      {
        heading: '冒泡与捕获',
        text: '点击页面上的元素时，事件不是只触发一次，而是经历两个阶段：先从最外层向内传到目标元素（捕获阶段），再从目标向外传回最外层（冒泡阶段）。addEventListener 默认在冒泡阶段触发，第三个参数传 true 则改为捕获阶段。阻止冒泡用 event.stopPropagation()。',
        code: 'box.addEventListener("click", function(e) {\n  console.log("外层");\n});\nbtn.addEventListener("click", function(e) {\n  e.stopPropagation(); // 阻止冒泡\n  console.log("按钮");\n});',
        lang: 'js'
      },
      {
        heading: '事件对象 event',
        text: '事件处理函数收到的 event 对象包含丰富信息：event.target 是实际触发事件的最内层元素，event.currentTarget 是绑定监听器的元素。event.preventDefault() 可以阻止默认行为，比如阻止链接跳转、表单提交。区分 target 和 currentTarget 是理解委托的前提。',
        code: 'link.addEventListener("click", function(e) {\n  e.preventDefault(); // 不跳转\n  console.log(e.target);\n});',
        lang: 'js'
      },
      {
        heading: '事件委托',
        text: '事件委托是利用冒泡，把多个子元素的事件统一交给父元素处理，再通过 event.target 判断点的是谁。好处很明显：只绑定一次监听器，性能更好；动态新增的子元素也自动生效，不用重复绑定。列表、菜单等场景广泛使用这个技巧。',
        code: 'ul.addEventListener("click", function(e) {\n  if (e.target.tagName === "LI") {\n    console.log("点了 " + e.target.textContent);\n  }\n});',
        lang: 'js'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: '事件委托主要利用了事件的什么特性？',
        options: ['捕获', '冒泡', '默认行为', '定时触发'],
        answer: 1,
        explanation: '子元素的事件会冒泡到父元素，因此父元素可以统一处理，这就是事件委托。'
      },
      {
        type: 'judge',
        question: 'addEventListener 默认在捕获阶段触发事件处理函数。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '默认在冒泡阶段触发，第三个参数传 true 才改为捕获阶段。'
      },
      {
        type: 'single',
        question: '想阻止链接点击后的默认跳转，应该调用？',
        options: ['event.stopPropagation()', 'event.preventDefault()', 'event.stop()', 'return true'],
        answer: 1,
        explanation: 'preventDefault 阻止默认行为；stopPropagation 阻止的是事件传播。'
      },
      {
        type: 'multiple',
        question: '事件委托有哪些优点？（多选）',
        options: ['减少监听器数量，提升性能', '动态新增的子元素自动生效', '能完全阻止事件冒泡', '代码更简洁易维护'],
        answer: [0, 1, 3],
        explanation: '委托只是统一处理事件，并不阻止冒泡，冒泡恰恰是它依赖的机制。'
      },
      {
        type: 'single',
        question: '事件对象中，event.target 指的是？',
        options: ['实际触发事件的最内层元素', '绑定监听器的元素', '页面的最外层元素', 'document 对象'],
        answer: 0,
        explanation: 'target 是实际触发元素，绑定监听器的元素是 currentTarget。'
      },
      {
        type: 'single',
        question: 'addEventListener 的第三个参数传 true 表示什么？',
        options: ['在捕获阶段触发处理函数', '阻止事件冒泡', '监听器只生效一次', '阻止默认行为'],
        answer: 0,
        explanation: '第三个参数为 true 时处理函数在捕获阶段触发，默认（false）在冒泡阶段触发。'
      },
      {
        type: 'judge',
        question: '冒泡阶段中，事件从目标元素向外层元素传播。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '冒泡是从内向外传播，捕获则是从外向内。'
      },
      {
        type: 'judge',
        question: '在任何情况下，event.currentTarget 都等于 event.target。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '点击子元素时，target 是子元素而 currentTarget 是绑定监听器的父元素，两者可以不同。'
      },
      {
        type: 'multiple',
        question: '以下哪些说法是正确的？（多选）',
        options: ['event.stopPropagation() 可以阻止冒泡', 'event.preventDefault() 可以阻止默认行为', '事件传播包括捕获和冒泡两个阶段', 'event.preventDefault() 可以阻止冒泡'],
        answer: [0, 1, 2],
        explanation: 'preventDefault 只阻止默认行为（如链接跳转），不影响事件传播。'
      },
      {
        type: 'multiple',
        question: '以下哪些场景适合使用事件委托？（多选）',
        options: ['有几十上百项的长列表点击', '菜单中多个菜单项的点击', '会动态新增子元素的列表', '需要阻止所有事件传播的场景'],
        answer: [0, 1, 2],
        explanation: '事件委托的目的不是阻止传播，前三个场景都能体现它少绑定、自动覆盖新元素的优势。'
      },
      {
        type: 'single',
        question: '页面结构为 div#outer 嵌套 button，两者都在冒泡阶段监听 click。点击 button 后输出顺序是？',
        options: ['先 outer 后 button', '先 button 后 outer', '只输出 button', '只输出 outer'],
        answer: 1,
        explanation: '冒泡从内向外传播，目标元素 button 的处理函数先执行，再轮到外层 outer。'
      },
      {
        type: 'single',
        question: '事件委托代码 ul.addEventListener("click", e => { if (e.target.tagName === "LI") { ... } }) 中，判断 tagName 的目的是？',
        options: ['阻止事件继续冒泡', '确认实际被点击的是 LI 而不是 ul 间的空隙或其他子元素', '阻止默认行为', '让事件在捕获阶段触发'],
        answer: 1,
        explanation: '委托时事件也可能落在 ul 自身或其他元素上，需要用 target 过滤出真正关心的目标。'
      },
      {
        type: 'judge',
        question: '调用 event.stopPropagation() 后，事件处理函数中位于该行之后的代码也不会执行。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: 'stopPropagation 只阻止事件向其他元素传播，当前函数内后续代码仍会正常执行。'
      },
      {
        type: 'multiple',
        question: '一个动态增删的新闻列表想实现点击删除，以下哪些做法是可取的？（多选）',
        options: ['在 ul 上绑一次点击监听，通过 e.target 判断点的是删除按钮', '每次新增 li 后给新按钮单独绑定监听器', '利用冒泡机制让父元素统一处理', '给 document 绑定监听器并在里面刷新整个页面'],
        answer: [0, 1, 2],
        explanation: '委托（一次绑定）和逐个绑定都可行，委托更省；刷新整个页面不是处理点击的合理方式。'
      },
      {
        type: 'single',
        question: 'div#outer 嵌套 button，outer 的监听器第三个参数传 true（捕获阶段），button 用默认（冒泡阶段）。点击 button 后输出顺序是？',
        options: ['先 button 后 outer', '先 outer 后 button', '只输出 outer', '两者同时输出'],
        answer: 1,
        explanation: '捕获阶段先于冒泡阶段发生，outer 的处理函数在捕获阶段触发，先于 button。'
      },
      {
        type: 'single',
        question: '事件处理函数中，event.currentTarget 指的是？',
        options: ['实际触发事件的最内层元素', '绑定监听器的元素', 'document 对象', 'window 对象'],
        answer: 1,
        explanation: 'currentTarget 是绑定监听器的元素，与实际触发的 target 可能不同。'
      },
      {
        type: 'judge',
        question: '捕获阶段中，事件从最外层元素向内传播到目标元素。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '捕获由外向内，冒泡由内向外，两个阶段方向相反。'
      },
      {
        type: 'judge',
        question: '事件委托代码中，event.target.tagName 返回的标签名是大写形式，如 "LI"。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'HTML 元素的 tagName 统一为大写，所以判断时写 "LI" 而不是 "li"。'
      },
      {
        type: 'multiple',
        question: '想阻止一个链接被点击时既不跳转也不冒泡，需要调用哪些方法？（多选）',
        options: ['event.preventDefault()', 'event.stopPropagation()', 'event.stop()', '在处理函数里写 return false'],
        answer: [0, 1],
        explanation: 'preventDefault 阻止默认跳转，stopPropagation 阻止冒泡；没有 event.stop，且 addEventListener 中 return false 无效。'
      },
      {
        type: 'multiple',
        question: '关于 event 事件对象，以下哪些说法是正确的？（多选）',
        options: ['event.target 是实际触发的最内层元素', 'event.currentTarget 是绑定监听器的元素', 'event.preventDefault() 可以阻止默认行为', '处理函数必须先手动 new 一个 event 对象才能使用'],
        answer: [0, 1, 2],
        explanation: 'event 对象由浏览器自动创建并作为参数传给处理函数，无需手动创建。'
      }
    ]
  },
  {
    id: 'js-13',
    title: '定时器、防抖与节流',
    summary: '控制函数执行的时机与频率',
    minutes: 14,
    sections: [
      {
        heading: 'setTimeout 与 setInterval',
        text: 'setTimeout 让代码延迟指定毫秒后执行一次，setInterval 则每隔指定毫秒反复执行。两者都返回一个编号，分别用 clearTimeout 和 clearInterval 取消。注意毫秒只是"最早"执行时间，如果主线程忙碌会顺延，不能保证精确。',
        code: 'const id = setTimeout(function() {\n  console.log("1 秒后执行");\n}, 1000);\nclearTimeout(id); // 取消\n\nconst timer = setInterval(function() {\n  console.log("每秒一次");\n}, 1000);\nclearInterval(timer);',
        lang: 'js'
      },
      {
        heading: '防抖 debounce',
        text: '防抖的思想是：频繁触发时不做事，等停下来一段时间后才执行一次。实现方式是每次触发都清除上一次的定时器再重新计时。典型场景是搜索框输入联想——用户连续打字时不发请求，停下来 300 毫秒后才真正搜索，避免请求过多。',
        code: 'function debounce(fn, wait) {\n  let timer = null;\n  return function() {\n    clearTimeout(timer);\n    timer = setTimeout(fn, wait);\n  };\n}\ninput.addEventListener("input", debounce(search, 300));',
        lang: 'js'
      },
      {
        heading: '节流 throttle',
        text: '节流的思想是：无论触发多频繁，都按固定间隔执行，像水龙头一样匀速放水。可以用时间戳判断距离上次执行是否已超过间隔。典型场景是滚动加载、窗口缩放——滚动事件一秒可能触发几十次，节流到每 200 毫秒执行一次就足够流畅。',
        code: 'function throttle(fn, wait) {\n  let last = 0;\n  return function() {\n    if (Date.now() - last >= wait) {\n      last = Date.now();\n      fn();\n    }\n  };\n}\nwindow.addEventListener("scroll", throttle(onScroll, 200));',
        lang: 'js'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: '想让某段代码延迟 2 秒后只执行一次，应该用？',
        options: ['setInterval', 'setTimeout', 'debounce', 'requestAnimationFrame'],
        answer: 1,
        explanation: 'setTimeout 延迟执行一次；setInterval 是反复执行。'
      },
      {
        type: 'judge',
        question: '防抖适用于搜索框输入联想，用户停止输入后才发起请求。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '防抖等待触发停止一段时间后才执行，正适合输入联想场景。'
      },
      {
        type: 'single',
        question: '节流和防抖的核心区别是？',
        options: ['节流按固定间隔执行，防抖等停止后执行一次', '防抖按固定间隔执行，节流等停止后执行一次', '两者完全一样', '节流只能用于滚动事件'],
        answer: 0,
        explanation: '节流匀速执行、防抖等安静后执行一次，方向正好相反，注意区分。'
      },
      {
        type: 'multiple',
        question: '关于 setTimeout 与 setInterval，以下哪些说法是正确的？（多选）',
        options: ['clearTimeout 可以取消尚未执行的 setTimeout', 'setInterval 返回的编号用于 clearInterval', 'setTimeout 的执行时间绝对精确', '滚动监听适合用节流控制频率'],
        answer: [0, 1, 3],
        explanation: '定时器时间不保证精确，主线程忙碌时会顺延，其余三项正确。'
      },
      {
        type: 'single',
        question: '要取消一个 setInterval 定时器，应该使用？',
        options: ['clearTimeout', 'clearInterval', 'clearTimer', 'stopInterval'],
        answer: 1,
        explanation: 'setInterval 返回的编号传给 clearInterval 即可取消；clearTimeout 对应 setTimeout。'
      },
      {
        type: 'single',
        question: '防抖（debounce）的实现思路是？',
        options: ['每次触发都清除上一次的定时器，重新计时', '每隔固定时间强制执行一次', '事件一触发就立即执行', '随机延迟后执行'],
        answer: 0,
        explanation: '防抖通过不断重置定时器，确保只有停下来一段时间后才真正执行。'
      },
      {
        type: 'judge',
        question: 'setTimeout 设定的毫秒数能保证回调在该时刻精确执行。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '毫秒只是最早执行时间，主线程忙碌时回调会顺延。'
      },
      {
        type: 'judge',
        question: '节流可以让高频触发的处理函数按固定间隔匀速执行。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '节流像水龙头匀速放水，无论触发多频繁都按固定间隔执行。'
      },
      {
        type: 'multiple',
        question: '以下哪些说法是正确的？（多选）',
        options: ['setTimeout 延迟后只执行一次', 'setInterval 每隔指定时间反复执行', '防抖是等触发停止一段时间后执行一次', '节流是等触发停止一段时间后才执行'],
        answer: [0, 1, 2],
        explanation: '等停止后执行是防抖的特点，节流是按固定间隔执行。'
      },
      {
        type: 'multiple',
        question: '以下哪些场景适合使用防抖？（多选）',
        options: ['搜索框输入联想', '用户停止输入后再校验内容', '页面滚动时加载更多', '连续打字时不发送请求'],
        answer: [0, 1, 3],
        explanation: '滚动加载是高频持续触发，适合节流而不是防抖。'
      },
      {
        type: 'single',
        question: '下面防抖代码中，用户在 1 秒内连续触发 5 次事件，fn 实际执行几次？function debounce(fn, wait){ let t; return function(){ clearTimeout(t); t = setTimeout(fn, wait); }; }（wait 为 300）',
        options: ['5 次', '1 次', '0 次', '2 次'],
        answer: 1,
        explanation: '每次触发都清除上一个定时器重新计时，只有最后一次触发的定时器能等到执行，故只执行 1 次。'
      },
      {
        type: 'single',
        question: '下面代码的输出顺序是？console.log("A"); setTimeout(function(){ console.log("B"); }, 0); console.log("C");',
        options: ['A B C', 'A C B', 'B A C', 'C A B'],
        answer: 1,
        explanation: 'setTimeout 回调即使延迟为 0 也要等当前同步代码执行完才运行，所以先输出 A、C，最后 B。'
      },
      {
        type: 'judge',
        question: '用节流处理滚动事件时，处理函数会在用户停止滚动 300 毫秒后才执行一次。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '停止后才执行一次是防抖的特点；节流是在滚动过程中按固定间隔执行。'
      },
      {
        type: 'multiple',
        question: '关于防抖和节流函数的实现，以下哪些说法是正确的？（多选）',
        options: ['它们通常借助闭包保存定时器或时间戳', '返回的是一个新函数，用它替换原来的处理函数', '防抖常用 clearTimeout 重置计时', '节流必须依赖 setInterval 才能实现'],
        answer: [0, 1, 2],
        explanation: '节流可以用时间戳或定时器实现，并非必须用 setInterval。'
      },
      {
        type: 'single',
        question: 'setInterval 每隔 500 毫秒执行一次，3 秒内大约执行几次？',
        options: ['1 次', '3 次', '6 次', '无数次'],
        answer: 2,
        explanation: '3000 毫秒除以 500 毫秒约为 6 次；setInterval 会按间隔反复执行直到被取消。'
      },
      {
        type: 'single',
        question: '窗口大小改变（resize）会高频触发，想控制重新布局的执行频率，最合适的是？',
        options: ['防抖，等停止调整后执行一次', '节流，按固定间隔执行', '不做任何控制', '每次都弹 alert 提示'],
        answer: 1,
        explanation: 'resize 持续触发且需要在过程中多次响应，适合按固定间隔执行的节流。'
      },
      {
        type: 'judge',
        question: 'setTimeout 和 setInterval 都返回一个编号，分别可用 clearTimeout 和 clearInterval 取消。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '保存好返回的编号，随时可以把尚未执行或正在循环的定时器取消掉。'
      },
      {
        type: 'judge',
        question: '节流的实现中，常用时间戳判断距离上次执行是否已超过设定间隔。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '记录上次执行的时间戳，当前时间与之相减超过间隔才执行，是节流的常见写法。'
      },
      {
        type: 'multiple',
        question: '以下哪些场景适合使用节流？（多选）',
        options: ['页面滚动时加载更多内容', '拖拽元素时更新位置提示', '搜索框停止输入后才发送请求', '窗口缩放时重新计算布局'],
        answer: [0, 1, 3],
        explanation: '停止输入后才请求是防抖场景；滚动、拖拽、缩放这类持续高频触发适合节流。'
      },
      {
        type: 'multiple',
        question: '代码 console.log("1"); setTimeout(输出"2", 100); setTimeout(输出"3", 0); console.log("4"); 执行时，以下哪些说法是正确的？（多选）',
        options: ['"1" 最先输出', '"4" 在两个定时器回调之前输出', '"3" 先于 "2" 输出', '"2" 先于 "4" 输出'],
        answer: [0, 1, 2],
        explanation: '同步代码先执行完，定时器回调按延迟排队，延迟 0 的 "3" 排在延迟 100 的 "2" 前面。'
      }
    ]
  },
  {
    id: 'js-14',
    title: 'BOM：浏览器对象模型',
    summary: '用 location/history/navigator 操控浏览器',
    minutes: 12,
    sections: [
      {
        heading: 'window 与 location',
        text: 'BOM 的核心是 window 对象，它代表浏览器窗口，也是全局对象。location 对象表示当前网址：location.href 读写完整地址，赋值即可跳转页面；location.reload() 刷新页面；location.search 保存问号后的查询参数，常用于读取 URL 传参。',
        code: 'location.href;      // 当前完整网址\nlocation.href = "https://example.com"; // 跳转\nlocation.reload();  // 刷新页面\n// 网址 ?id=5 时\nlocation.search;    // "?id=5"',
        lang: 'js'
      },
      {
        heading: 'history 历史记录',
        text: 'history 对象管理浏览历史：history.back() 后退一页，history.forward() 前进一页，history.go(-1) 等价于后退。单页应用（SPA）的路由也依赖 history.pushState() 修改地址栏而不刷新页面，配合 popstate 事件监听前进后退。',
        code: 'history.back();    // 后退一页\nhistory.forward(); // 前进一页\nhistory.go(-2);    // 后退两页\nhistory.pushState({}, "", "/new"); // 改地址不刷新',
        lang: 'js'
      },
      {
        heading: 'navigator 与弹窗',
        text: 'navigator 对象包含浏览器信息，navigator.userAgent 是标识浏览器的字符串，可用于粗略判断设备类型。window 上还有几个常用弹窗：alert 提示信息，confirm 询问并返回布尔值，prompt 让用户输入文本。弹窗会阻塞页面，正式项目里一般用自定义组件代替。',
        code: 'navigator.userAgent; // 浏览器标识字符串\nalert("你好");\nconst ok = confirm("确定删除吗？");\nif (ok) { console.log("已删除"); }',
        lang: 'js'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: '要让页面跳转到另一个网址，正确的写法是？',
        options: ['history.go("url")', 'location.href = "url"', 'navigator.href = "url"', 'window.jump("url")'],
        answer: 1,
        explanation: '给 location.href 赋值即可跳转，这是标准的页面跳转方式。'
      },
      {
        type: 'judge',
        question: 'history.pushState 修改地址栏时会导致页面刷新。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: 'pushState 只改变地址栏和历史记录，不会刷新页面，这正是 SPA 路由的基础。'
      },
      {
        type: 'single',
        question: 'confirm("确定吗？") 在用户点击"取消"时返回？',
        options: ['true', 'false', 'null', 'undefined'],
        answer: 1,
        explanation: 'confirm 点确定返回 true，点取消返回 false。'
      },
      {
        type: 'multiple',
        question: '以下哪些属于 BOM 提供的对象或能力？（多选）',
        options: ['location 对象', 'history.back()', 'document.querySelector', 'navigator.userAgent'],
        answer: [0, 1, 3],
        explanation: 'querySelector 属于 DOM；location、history、navigator 都属于 BOM。'
      },
      {
        type: 'single',
        question: '当前网址为 https://a.com/list?id=5 时，location.search 的值是？',
        options: ['"?id=5"', '"id=5"', '"5"', '"https://a.com/list"'],
        answer: 0,
        explanation: 'location.search 保存问号及其后的查询参数部分，包含问号本身。'
      },
      {
        type: 'single',
        question: 'history.go(-1) 的效果等价于？',
        options: ['history.forward()', 'history.back()', 'location.reload()', 'history.pushState()'],
        answer: 1,
        explanation: 'go(-1) 表示后退一页，与 back() 等价；正数则前进。'
      },
      {
        type: 'judge',
        question: 'window 对象代表浏览器窗口，同时也是 JavaScript 的全局对象。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'window 是 BOM 的核心，全局变量和全局函数都挂在它上面。'
      },
      {
        type: 'judge',
        question: 'alert 弹窗弹出时，页面上的 JavaScript 仍会继续执行，不会被阻塞。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: 'alert、confirm、prompt 都会阻塞页面，因此正式项目一般用自定义组件代替。'
      },
      {
        type: 'multiple',
        question: '以下哪些属于 location 对象的能力？（多选）',
        options: ['用 href 读写完整网址', '用 reload() 刷新页面', '用 search 读取查询参数', '用 back() 后退一页'],
        answer: [0, 1, 2],
        explanation: 'back() 属于 history 对象，不属于 location。'
      },
      {
        type: 'multiple',
        question: '以下哪些说法是正确的？（多选）',
        options: ['history.pushState 修改地址栏但不刷新页面', '可以监听 popstate 事件感知前进后退', 'navigator.userAgent 可粗略判断设备类型', 'prompt 的返回值类型是数字'],
        answer: [0, 1, 2],
        explanation: 'prompt 返回用户输入的字符串（取消时为 null），不是数字。'
      },
      {
        type: 'single',
        question: '当前网址为 https://a.com/list?id=5，想读取参数 id 的值，最合理的做法是？',
        options: ['用 location.search 拿到 "?id=5" 再解析', '用 location.href 拿到完整网址再解析', '用 history.go("id")', '用 navigator.userAgent'],
        answer: 0,
        explanation: 'location.search 直接给出查询串部分，解析它即可取到参数，无需处理整个网址。'
      },
      {
        type: 'judge',
        question: '单页应用（SPA）切换路由时页面不刷新，依赖的是 history.pushState 等 API。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'pushState 修改地址栏而不刷新页面，配合 popstate 监听即可实现前端路由。'
      },
      {
        type: 'single',
        question: 'history.forward() 的作用是？',
        options: ['后退一页', '前进一页', '刷新页面', '跳转到新网址'],
        answer: 1,
        explanation: 'forward 前进一页，back 后退一页，两者是 history 的一对基本操作。'
      },
      {
        type: 'single',
        question: 'location.reload() 的作用是？',
        options: ['跳转到新页面', '刷新当前页面', '后退一页', '关闭标签页'],
        answer: 1,
        explanation: 'reload 重新加载当前页面，相当于用户点击刷新按钮。'
      },
      {
        type: 'single',
        question: 'prompt("请输入姓名") 中用户输入"小明"并点击确定后，返回值是？',
        options: ['true', '字符串 "小明"', 'null', '一个对象'],
        answer: 1,
        explanation: 'prompt 返回用户输入的字符串；点击取消时才返回 null。'
      },
      {
        type: 'single',
        question: '当前网址为 https://a.com/news#top，想读取锚点部分 "#top"，应使用 location 的哪个属性？',
        options: ['search', 'hash', 'href', 'reload'],
        answer: 1,
        explanation: 'location.hash 保存 # 及其后的锚点部分；search 是问号后的查询参数。'
      },
      {
        type: 'judge',
        question: 'history.go(2) 表示在历史记录中前进两页。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'go 的参数为正数表示前进，负数表示后退，go(2) 即前进两页。'
      },
      {
        type: 'judge',
        question: 'BOM 的核心对象是 document。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: 'BOM 的核心是 window 对象；document 属于 DOM，是 window 的一个属性。'
      },
      {
        type: 'multiple',
        question: '以下哪些属于 window 上的弹窗方法？（多选）',
        options: ['alert', 'confirm', 'prompt', 'reload'],
        answer: [0, 1, 2],
        explanation: 'reload 是 location 的刷新方法，不是弹窗；alert、confirm、prompt 是三种内置弹窗。'
      },
      {
        type: 'multiple',
        question: '关于 history 对象，以下哪些说法是正确的？（多选）',
        options: ['back() 后退一页', 'forward() 前进一页', 'go(-2) 后退两页', '调用 go(0) 会直接报错'],
        answer: [0, 1, 2],
        explanation: 'go(0) 不会报错，它的效果是重新加载当前页面；其余三项正确。'
      }
    ]
  },
  {
    id: 'js-15',
    title: '正则表达式基础',
    summary: '用模式匹配处理字符串',
    minutes: 15,
    sections: [
      {
        heading: '创建正则与基本符号',
        text: '正则表达式用斜杠包裹，如 /abc/，也可以用 new RegExp 创建。常用符号：\\d 匹配数字，\\w 匹配字母数字下划线，\\s 匹配空白，点号匹配任意字符；* 表示 0 次或多次，+ 表示 1 次以上，? 表示 0 或 1 次，{n} 表示恰好 n 次。^ 和 $ 分别匹配开头和结尾。',
        code: '/\\d+/.test("a123");  // true，包含数字\n/^a/.test("abc");     // true，以 a 开头\n/\\d{4}/.test("2026");  // true，恰好 4 位数字',
        lang: 'js'
      },
      {
        heading: 'test 与 match、replace',
        text: '正则对象的 test 方法判断字符串是否匹配，返回布尔值。字符串的 match 返回匹配结果，replace 可以把匹配部分替换掉，replace 配合正则全局标志 g 可替换所有匹配。捕获组用小括号，可以在替换时通过 $1、$2 引用。',
        code: '"2026-08-17".match(/\\d+/g); // ["2026","08","17"]\n"a1b2".replace(/\\d/g, "#");  // "a#b#"\n"ab".replace(/(a)(b)/, "$2$1"); // "ba"',
        lang: 'js'
      },
      {
        heading: '常见校验场景',
        text: '正则最常见的用途是表单校验。判断手机号可以用 /^1\\d{10}$/ 做粗略校验；判断邮箱用包含 @ 和域名的模式。校验时务必加上 ^ 和 $ 锚定整体，否则 "abc123" 也能通过数字校验。复杂格式建议多用几个简单条件组合，而不是写一个超长正则。',
        code: 'const phoneRe = /^1\\d{10}$/;\nphoneRe.test("13800138000"); // true\nphoneRe.test("12345");       // false\nconst emailRe = /^\\w+@\\w+\\.\\w+$/;\nemailRe.test("a@b.com");     // true',
        lang: 'js'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: '/\\d+/.test("abc") 的返回值是？',
        options: ['true', 'false', 'null', '报错'],
        answer: 1,
        explanation: '"abc" 中没有任何数字，test 返回 false。'
      },
      {
        type: 'judge',
        question: '正则中的 ? 表示前面的元素出现 0 次或 1 次。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '? 是量词，表示前面的元素可有可无（0 或 1 次）。'
      },
      {
        type: 'single',
        question: '"a1b2c3".replace(/\\d/g, "") 的结果是？',
        options: ['"a1b2c3"', '"abc"', '"123"', '报错'],
        answer: 1,
        explanation: '全局标志 g 让所有数字都被替换为空字符串，剩下 "abc"。'
      },
      {
        type: 'multiple',
        question: '以下哪些正则符号的说法是正确的？（多选）',
        options: ['\\d 匹配一个数字', '* 表示出现 0 次或多次', '^ 匹配字符串开头', 'g 标志表示只替换第一处匹配'],
        answer: [0, 1, 2],
        explanation: 'g 是全局标志，表示匹配所有位置而不是只匹配第一处。'
      },
      {
        type: 'single',
        question: '/^1\\d{10}$/.test("13800138000") 的返回值是？',
        options: ['true', 'false', 'null', '报错'],
        answer: 0,
        explanation: '该字符串是以 1 开头的 11 位数字，符合手机号粗略校验规则，返回 true。'
      },
      {
        type: 'single',
        question: '"2026-08-17".match(/\\d+/g) 的结果是？',
        options: ['["2026"]', '["2026", "08", "17"]', '"2026"', 'null'],
        answer: 1,
        explanation: 'g 标志让 match 返回所有匹配的数组，三段数字都被匹配到。'
      },
      {
        type: 'judge',
        question: '正则中的 \\w 可以匹配字母、数字和下划线。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '\\w 等价于 [A-Za-z0-9_]，覆盖字母、数字和下划线。'
      },
      {
        type: 'judge',
        question: '做表单校验时，不加 ^ 和 $ 也能保证整个字符串完全符合规则。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '不加锚点时只要字符串中有一段匹配就算通过，比如 "abc123" 也能通过数字校验，必须加 ^ 和 $ 锚定整体。'
      },
      {
        type: 'multiple',
        question: '以下哪些属于正则中的量词？（多选）',
        options: ['*', '+', '?', '\\d'],
        answer: [0, 1, 2],
        explanation: '\\d 是字符类不是量词；*、+、? 分别表示 0 次或多次、1 次以上、0 或 1 次。'
      },
      {
        type: 'multiple',
        question: '以下关于正则用法的说法哪些是正确的？（多选）',
        options: ['test 方法返回布尔值', '捕获组用小括号表示', '替换时可以用 $1、$2 引用捕获组', 'replace 默认替换所有匹配位置'],
        answer: [0, 1, 2],
        explanation: 'replace 默认只替换第一处匹配，要加 g 标志才会全部替换。'
      },
      {
        type: 'single',
        question: '/^\\d{4}$/.test("20268") 的返回值是？',
        options: ['true', 'false', 'null', '报错'],
        answer: 1,
        explanation: '{4} 要求恰好 4 位，且有 ^ 和 $ 锚定整体，5 位数字不匹配。'
      },
      {
        type: 'judge',
        question: '正则中的 \\s 用于匹配空白字符（如空格、换行）。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '\\s 匹配任意空白字符，\\S 则匹配非空白字符。'
      },
      {
        type: 'single',
        question: '/^a/.test("abc") 的返回值是？',
        options: ['true', 'false', 'null', '报错'],
        answer: 0,
        explanation: '^ 匹配开头，"abc" 以 a 开头，test 返回 true。'
      },
      {
        type: 'single',
        question: '"ab".replace(/(a)(b)/, "$2$1") 的结果是？',
        options: ['"ab"', '"ba"', '"$2$1"', '报错'],
        answer: 1,
        explanation: '小括号是捕获组，替换时 $1、$2 分别引用两个组，交换后得到 "ba"。'
      },
      {
        type: 'single',
        question: '"a1b2".replace(/\\d/, "#") 的结果是？',
        options: ['"a#b#"', '"a#b2"', '"a1b2"', '报错'],
        answer: 1,
        explanation: '不带 g 标志时 replace 只替换第一处匹配，只有 1 被替换成 #。'
      },
      {
        type: 'single',
        question: '正则 /^\\w+@\\w+\\.\\w+$/ 最适合用来粗略校验什么？',
        options: ['手机号', '邮箱', '身份证号', '邮政编码'],
        answer: 1,
        explanation: '该模式要求包含 @ 和域名部分，是邮箱格式的粗略校验。'
      },
      {
        type: 'judge',
        question: '正则中的点号 . 可以匹配任意字符。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '点号是通配符，匹配除换行外的任意字符；要匹配点号本身需写成 \\. 。'
      },
      {
        type: 'judge',
        question: '"abc123".match(/\\d+/)（不带 g 标志）的返回结果是 ["123"]。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '不带 g 时 match 返回第一个匹配组成的结果数组，这里是 ["123"]。'
      },
      {
        type: 'multiple',
        question: '以下哪些字符串能通过 /^1\\d{10}$/ 的校验？（多选）',
        options: ['"13800138000"', '"12345678901"', '"1380013800"', '"23800138000"'],
        answer: [0, 1],
        explanation: '规则是以 1 开头且恰好 11 位数字：第三个只有 10 位，第四个以 2 开头，都不通过。'
      },
      {
        type: 'multiple',
        question: '想让 replace 替换字符串中的所有匹配位置，需要满足哪些条件？（多选）',
        options: ['正则带上 g 全局标志', '传入匹配后要替换成的新内容', '正则必须加上 ^ 和 $ 锚点', '使用字符串的 replace 方法'],
        answer: [0, 1, 3],
        explanation: '全局替换只需要 g 标志，与 ^ 和 $ 无关；锚点是做整体校验时才需要的。'
      }
    ]
  },
  {
    id: 'js-16',
    title: '错误处理与调试',
    summary: '用 try/catch 和调试工具排错',
    minutes: 13,
    sections: [
      {
        heading: 'try / catch / finally',
        text: '可能出错的代码放进 try 块，一旦抛出异常，立即跳到 catch 块处理，程序不会整体崩溃。finally 块无论是否出错都会执行，适合做清理工作。catch 收到的 error 对象有 message 属性描述错误信息。也可以用 throw 主动抛出错误。',
        code: 'try {\n  JSON.parse("不是JSON");\n} catch (err) {\n  console.log("出错了: " + err.message);\n} finally {\n  console.log("总会执行");\n}',
        lang: 'js'
      },
      {
        heading: '主动抛出错误 throw',
        text: '遇到不合理的参数或状态时，可以用 throw 主动抛出错误，让调用方感知问题。推荐抛出 Error 对象而不是字符串，因为 Error 带有调用栈信息，方便定位。函数开头做参数校验并抛错，是写出健壮代码的好习惯。',
        code: 'function divide(a, b) {\n  if (b === 0) {\n    throw new Error("除数不能为 0");\n  }\n  return a / b;\n}\ntry {\n  divide(1, 0);\n} catch (err) {\n  console.log(err.message); // 除数不能为 0\n}',
        lang: 'js'
      },
      {
        heading: 'console 与断点调试',
        text: 'console.log 输出普通信息，console.error 标红显示错误，console.table 把数组或对象打印成表格，console.time/timeEnd 测量代码耗时。浏览器开发者工具的 Sources 面板可以打断点：点击行号后，代码执行到该处会暂停，此时可以查看变量值、单步执行，比到处写 log 高效得多。',
        code: 'console.table([{name: "小明", age: 18}]);\nconsole.time("耗时");\nfor (let i = 0; i < 100000; i++) {}\nconsole.timeEnd("耗时"); // 输出耗时毫秒数\n// 在代码中写 debugger; 也会触发断点',
        lang: 'js'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: 'try 块中抛出异常后，接下来会执行？',
        options: ['try 块的剩余代码', 'catch 块', '程序直接崩溃', '忽略异常继续执行'],
        answer: 1,
        explanation: 'try 中一旦抛错，剩余代码被跳过，立即进入 catch 处理。'
      },
      {
        type: 'judge',
        question: 'finally 块只有在没有异常发生时才会执行。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: 'finally 无论是否发生异常都会执行，常用于清理工作。'
      },
      {
        type: 'single',
        question: '想测量一段代码的执行耗时，应该用哪一对方法？',
        options: ['console.log 和 console.error', 'console.time 和 console.timeEnd', 'console.table 和 console.clear', 'try 和 catch'],
        answer: 1,
        explanation: 'console.time 开始计时，同名的 console.timeEnd 结束并输出耗时。'
      },
      {
        type: 'multiple',
        question: '以下哪些是推荐的调试手段？（多选）',
        options: ['用 console.table 查看数组数据', '在开发者工具中打断点单步执行', '用 try/catch 捕获可能失败的代码', '出错后删掉所有代码重写'],
        answer: [0, 1, 2],
        explanation: '删光重写不是调试手段，其余三项都是常用且有效的做法。'
      },
      {
        type: 'single',
        question: 'throw new Error("除数不能为 0") 这行代码的作用是？',
        options: ['主动抛出一个错误', '在控制台打印一条日志', '让浏览器停止运行', '定义一种新的错误类型'],
        answer: 0,
        explanation: 'throw 主动抛出错误，让调用方能通过 try/catch 感知并处理问题。'
      },
      {
        type: 'single',
        question: 'catch 捕获到的 error 对象上，描述错误信息的属性是？',
        options: ['msg', 'message', 'text', 'info'],
        answer: 1,
        explanation: 'Error 对象的 message 属性保存错误描述信息。'
      },
      {
        type: 'judge',
        question: '抛错时推荐抛出 Error 对象而不是字符串，因为 Error 带有调用栈信息。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '调用栈信息能帮助定位错误来源，所以推荐 throw new Error(...)。'
      },
      {
        type: 'judge',
        question: '开发者工具打开时，代码中的 debugger; 语句会触发断点暂停执行。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'debugger; 相当于在代码里写死的断点，执行到该行会暂停，方便查看变量。'
      },
      {
        type: 'multiple',
        question: '以下哪些说法是正确的？（多选）',
        options: ['try 块中一旦抛错就跳到 catch', 'finally 无论是否出错都会执行', 'console.error 会以红色样式显示错误', 'catch 捕获异常后程序一定会崩溃'],
        answer: [0, 1, 2],
        explanation: 'catch 的意义正是接住异常、避免程序整体崩溃。'
      },
      {
        type: 'multiple',
        question: '以下哪些是 console 对象的方法？（多选）',
        options: ['log', 'table', 'time', 'parse'],
        answer: [0, 1, 2],
        explanation: 'console 没有 parse 方法；log、table、time 都是常用调试方法。'
      },
      {
        type: 'single',
        question: '下面代码的输出是什么？try { throw new Error("自定义错误"); } catch (e) { console.log(e.message); } finally { console.log("end"); }',
      options: ['只输出 "自定义错误"', '依次输出 "自定义错误" 和 "end"', '只输出 "end"', '程序崩溃无输出'],
        answer: 1,
        explanation: 'throw 抛出的错误被 catch 捕获并打印 message，finally 无论是否出错都会执行。'
      },
      {
        type: 'judge',
        question: '在函数开头校验参数并用 throw 抛出 Error，是写出健壮代码的好习惯。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '尽早暴露问题能让调用方通过 try/catch 感知错误，而不是带着坏数据继续执行。'
      },
      {
        type: 'single',
        question: '下面代码输出什么？try { JSON.parse("不是JSON"); console.log("解析成功"); } catch (e) { console.log("解析失败"); }',
        options: ['"解析成功"', '"解析失败"', '两个都输出', '程序崩溃无输出'],
        answer: 1,
        explanation: 'JSON.parse 解析失败抛出异常，跳过 try 剩余代码进入 catch，输出 "解析失败"。'
      },
      {
        type: 'single',
        question: '下面代码输出什么？try { console.log("A"); } catch (e) { console.log("B"); } finally { console.log("C"); }',
        options: ['依次输出 A B C', '依次输出 A C', '只输出 A', '依次输出 A B'],
        answer: 1,
        explanation: 'try 没有出错所以跳过 catch，finally 无论是否出错都执行，输出 A、C。'
      },
      {
        type: 'single',
        question: '在浏览器开发者工具的 Sources 面板中，给某一行代码打断点的方式是？',
        options: ['点击该行左侧的行号', '在代码里写 stop', '调用 console.log', '刷新页面'],
        answer: 0,
        explanation: '点击行号即可打断点，执行到该行会暂停，可查看变量、单步执行。'
      },
      {
        type: 'single',
        question: 'function divide(a, b){ if (b === 0) { throw new Error("除数不能为 0"); } return a / b; } 直接调用 divide(1, 0) 且不用 try/catch 包裹，结果是？',
        options: ['返回 NaN', '返回 Infinity', '抛出未捕获的错误，中断后续代码执行', '返回 undefined'],
        answer: 2,
        explanation: 'throw 抛出的错误若无人捕获，会向上传播并中断程序，这正是要用 try/catch 接住它的原因。'
      },
      {
        type: 'judge',
        question: 'try/catch 可以捕获代码中的语法错误（比如少写了括号）。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '语法错误发生在代码解析阶段，整个脚本都无法运行，try/catch 只能捕获运行时的异常。'
      },
      {
        type: 'judge',
        question: 'console.time 和 console.timeEnd 传入的标签名必须一致，才能正确测出耗时。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '计时靠标签名配对，同名才是一对；名字不一致则测不到对应区间。'
      },
      {
        type: 'multiple',
        question: '以下哪些情况适合用 try/catch 包裹？（多选）',
        options: ['JSON.parse 解析来源不可信的字符串', '调用可能因网络问题失败的请求代码', '项目里的每一行代码都必须包一层 try/catch', '调用可能主动 throw 的参数校验函数'],
        answer: [0, 1, 2],
        explanation: 'try/catch 用于可能出错的关键位置，处处包裹反而掩盖问题、降低可读性。'
      },
      {
        type: 'multiple',
        question: '关于 Error 对象，以下哪些说法是正确的？（多选）',
        options: ['message 属性保存错误描述信息', '带有调用栈信息便于定位问题', '可以用 new Error("...") 手动创建', 'Error 对象只能由系统产生，不能手动创建'],
        answer: [0, 1, 2],
        explanation: '开发者可以 new Error 并 throw 主动抛出错误，这是参数校验的常见做法。'
      }
    ]
  },
  {
    id: 'js-17',
    title: '本地存储与 Cookie',
    summary: '在浏览器里保存数据',
    minutes: 13,
    sections: [
      {
        heading: 'localStorage 与 sessionStorage',
        text: 'localStorage 可以把数据长期保存在浏览器里，关闭页面甚至重启浏览器都不会丢；sessionStorage 用法相同，但只在当前标签页会话期间有效，关闭标签页即清空。两者都以字符串键值对存储：setItem 存、getItem 取、removeItem 删、clear 清空。存对象要先 JSON.stringify。',
        code: 'localStorage.setItem("name", "小明");\nlocalStorage.getItem("name"); // "小明"\nlocalStorage.setItem("user", JSON.stringify({age: 18}));\nJSON.parse(localStorage.getItem("user")).age; // 18\nlocalStorage.removeItem("name");',
        lang: 'js'
      },
      {
        heading: 'Cookie 基础',
        text: 'Cookie 是浏览器按域名保存的小段文本，最大约 4KB，每次请求都会自动带给服务器，因此常用来保存登录凭证。通过 document.cookie 可以读写，格式是 "键=值"，可以设置 expires 过期时间和 path 路径。读取时拿到的是所有 Cookie 拼成的字符串，需要自己解析。',
        code: '// 写入一个 7 天后过期的 Cookie\ndocument.cookie = "token=abc123; max-age=604800; path=/";\nconsole.log(document.cookie); // "token=abc123"',
        lang: 'js'
      },
      {
        heading: '如何选择存储方案',
        text: '简单原则：只在浏览器用、不需要发给服务器的数据放 localStorage，比如界面设置、草稿；需要随请求发给服务器的身份标识放 Cookie，比如登录态；临时的、关页即弃的数据放 sessionStorage。注意这些存储都是明文的，绝不要存密码等敏感信息，且都有容量限制。',
        code: '// 记住用户的主题设置\nlocalStorage.setItem("theme", "dark");\n// 登录态通常由服务器通过\n// Set-Cookie 响应头写入 Cookie',
        lang: 'js'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: 'localStorage 里存储的值是什么类型？',
        options: ['任意类型', '对象', '字符串', '数字'],
        answer: 2,
        explanation: 'localStorage 只存字符串，存对象需先 JSON.stringify，取出再 parse。'
      },
      {
        type: 'judge',
        question: 'sessionStorage 中的数据在关闭标签页后仍然保留。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: 'sessionStorage 只在当前会话有效，关闭标签页即被清空。'
      },
      {
        type: 'single',
        question: 'Cookie 与 localStorage 的一个重要区别是？',
        options: ['Cookie 容量更大', 'Cookie 会随每次请求自动发送给服务器', 'localStorage 会随请求发送', '两者完全一样'],
        answer: 1,
        explanation: 'Cookie 会自动附带在同域请求中，这正是它用于登录态的原因。'
      },
      {
        type: 'multiple',
        question: '以下哪些做法是正确的？（多选）',
        options: ['用 localStorage 保存界面主题设置', '把登录凭证放在 Cookie 中', '把用户密码明文存入 localStorage', '存对象前用 JSON.stringify 转换'],
        answer: [0, 1, 3],
        explanation: '浏览器存储是明文的，绝不能存密码等敏感信息。'
      },
      {
        type: 'single',
        question: 'localStorage.getItem("不存在的键") 的返回值是？',
        options: ['undefined', 'null', '空字符串', '报错'],
        answer: 1,
        explanation: 'getItem 读取不存在的键时返回 null，不会报错。'
      },
      {
        type: 'single',
        question: '单个域名下 Cookie 的容量上限大约是？',
        options: ['4KB', '4MB', '100KB', '没有限制'],
        answer: 0,
        explanation: 'Cookie 最大约 4KB，只适合存小段文本，比如登录凭证。'
      },
      {
        type: 'judge',
        question: 'localStorage 中的数据在关闭浏览器后会自动丢失。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: 'localStorage 是长期保存的，重启浏览器也不会丢；关页即清的是 sessionStorage。'
      },
      {
        type: 'judge',
        question: '读取 document.cookie 得到的是所有 Cookie 拼成的一个字符串，需要自己解析。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'document.cookie 返回 "键=值; 键=值" 形式的字符串，需自行拆分取值。'
      },
      {
        type: 'multiple',
        question: '以下哪些是 localStorage 的方法？（多选）',
        options: ['setItem', 'getItem', 'removeItem', 'push'],
        answer: [0, 1, 2],
        explanation: 'push 是数组方法；setItem 存、getItem 取、removeItem 删，另有 clear 清空。'
      },
      {
        type: 'multiple',
        question: '关于存储方案的选择，以下哪些做法是合理的？（多选）',
        options: ['界面主题设置放 localStorage', '登录身份标识放 Cookie', '关页即弃的临时数据放 sessionStorage', '把用户密码明文存入 localStorage'],
        answer: [0, 1, 2],
        explanation: '浏览器存储都是明文的，绝不能存密码等敏感信息。'
      },
      {
        type: 'single',
        question: '执行 localStorage.setItem("age", 18) 后再 localStorage.getItem("age")，返回值是？',
        options: ['数字 18', '字符串 "18"', '对象 {age: 18}', 'null'],
        answer: 1,
        explanation: 'localStorage 只存字符串，数字会被自动转成字符串 "18"，需要数字时应自行转换。'
      },
      {
        type: 'judge',
        question: 'Cookie 每次都会自动随请求发送给服务器，因此适合存放大体积数据。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: 'Cookie 仅约 4KB 且每次请求都会携带，体积越大请求越慢，只适合存小段凭证类文本。'
      },
      {
        type: 'single',
        question: '想把对象 {age: 18} 存入 localStorage，正确的写法是？',
        options: ['localStorage.setItem("u", {age: 18})', 'localStorage.setItem("u", JSON.stringify({age: 18}))', 'localStorage.setObject("u", {age: 18})', '对象无法存入'],
        answer: 1,
        explanation: 'localStorage 只存字符串，对象要先 JSON.stringify 转换，取出时再 JSON.parse。'
      },
      {
        type: 'single',
        question: '已执行 localStorage.setItem("user", JSON.stringify({age: 18}))，之后想读取 age，正确写法是？',
        options: ['localStorage.getItem("user").age', 'JSON.parse(localStorage.getItem("user")).age', 'localStorage.age', 'localStorage.getItem("user.age")'],
        answer: 1,
        explanation: 'getItem 取出的是字符串，需先 JSON.parse 还原成对象再访问 age 属性。'
      },
      {
        type: 'single',
        question: 'localStorage.removeItem("name") 的作用是？',
        options: ['清空所有存储数据', '删除 name 这一条数据', '把 name 的值设为 null', '关闭存储功能'],
        answer: 1,
        explanation: 'removeItem 按键删除单条数据；清空全部要用 clear()。'
      },
      {
        type: 'single',
        question: '页面想记住用户选择的深色主题，刷新甚至重启浏览器后仍然生效，应选用？',
        options: ['sessionStorage', 'localStorage', '普通变量', 'prompt 弹窗'],
        answer: 1,
        explanation: '主题设置属于长期有效、不需要发给服务器的数据，正适合 localStorage。'
      },
      {
        type: 'judge',
        question: 'localStorage.clear() 会清空当前域名下的所有存储数据。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'clear 不带参数，一次清空全部键值对，使用时要谨慎。'
      },
      {
        type: 'judge',
        question: '写入 Cookie 时可以设置过期时间（expires 或 max-age）。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '不设置过期时间的 Cookie 是会话级的，设置后可在指定时间内保持有效。'
      },
      {
        type: 'multiple',
        question: '以下哪些是 sessionStorage 与 localStorage 的共同点？（多选）',
        options: ['都以字符串键值对存储', '都提供 setItem 和 getItem 方法', '关闭标签页后数据都保留', '存对象前都需要先转成字符串'],
        answer: [0, 1, 3],
        explanation: '关闭标签页后 sessionStorage 即被清空，只有 localStorage 长期保留，这是两者的关键区别。'
      },
      {
        type: 'multiple',
        question: '关于 Cookie，以下哪些说法是正确的？（多选）',
        options: ['按域名保存，不同域名互不影响', '写入时可以设置 path 路径', '单个域名下容量约 4KB', '适合存放大文件'],
        answer: [0, 1, 2],
        explanation: 'Cookie 容量小且每次请求都会携带，绝不能存放大体积数据。'
      }
    ]
  },
  {
    id: 'js-18',
    title: 'AJAX 与 fetch 网络请求',
    summary: '从服务器获取和提交数据',
    minutes: 16,
    sections: [
      {
        heading: '什么是 AJAX 与 fetch',
        text: 'AJAX 指在不刷新页面的情况下与服务器交换数据，网页因此能做到局部更新。fetch 是现代浏览器提供的请求方法，返回 Promise。基本用法：fetch(地址) 拿到响应对象后，调用 response.json() 解析数据，它同样返回 Promise，所以常配合 then 或 async/await 使用。',
        code: 'fetch("https://api.example.com/users")\n  .then(function(res) { return res.json(); })\n  .then(function(data) {\n    console.log(data);\n  });',
        lang: 'js'
      },
      {
        heading: '配合 async/await 与错误处理',
        text: '用 async/await 写请求代码更像同步逻辑。注意两个层次的错误：网络失败会让 fetch 直接 reject，要用 try/catch 捕获；而服务器返回 404、500 时 fetch 不会抛错，需要检查 response.ok 或 response.status 自行判断。这是初学者最常踩的坑。',
        code: 'async function loadUser() {\n  try {\n    const res = await fetch("https://api.example.com/user/1");\n    if (!res.ok) { throw new Error("HTTP " + res.status); }\n    const data = await res.json();\n    console.log(data);\n  } catch (err) {\n    console.log("请求失败: " + err.message);\n  }\n}',
        lang: 'js'
      },
      {
        heading: '发送数据：POST 请求',
        text: 'fetch 的第二个参数可以配置请求：method 指定方法，headers 设置请求头，body 是请求体。发送 JSON 数据时，body 要用 JSON.stringify 转换，并加上 Content-Type: application/json 请求头。GET 用于获取，POST 用于提交，还有 PUT、DELETE 等方法对应更新和删除。',
        code: 'fetch("https://api.example.com/users", {\n  method: "POST",\n  headers: { "Content-Type": "application/json" },\n  body: JSON.stringify({ name: "小明", age: 18 })\n}).then(function(res) { return res.json(); })\n  .then(function(data) { console.log("已创建", data); });',
        lang: 'js'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: 'fetch 返回的是什么？',
        options: ['解析好的数据对象', '一个 Promise', '字符串', '同步结果'],
        answer: 1,
        explanation: 'fetch 返回 Promise，需要再用 response.json() 解析出数据。'
      },
      {
        type: 'judge',
        question: '服务器返回 404 状态码时，fetch 会自动抛出异常。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '只有网络失败 fetch 才会 reject，404 需要检查 response.ok 自行处理。'
      },
      {
        type: 'single',
        question: '用 POST 提交 JSON 数据时，body 应该怎么写？',
        options: ['直接写对象 {name: "小明"}', 'JSON.stringify({name: "小明"})', 'JSON.parse({name: "小明"})', '写 body 会报错'],
        answer: 1,
        explanation: 'body 必须是字符串，对象要先用 JSON.stringify 转换，并设置对应请求头。'
      },
      {
        type: 'multiple',
        question: '以下哪些说法是正确的？（多选）',
        options: ['AJAX 可以在不刷新页面的情况下请求数据', 'response.json() 用于解析 JSON 响应', 'try/catch 可以捕获 fetch 的网络错误', 'fetch 只能发送 GET 请求'],
        answer: [0, 1, 2],
        explanation: 'fetch 通过 method 参数支持 POST、PUT、DELETE 等各种请求方法。'
      },
      {
        type: 'single',
        question: 'response.ok 为 false 通常意味着？',
        options: ['网络完全断开', '服务器返回了 404、500 等错误状态码', '请求一定成功了', '浏览器不支持 fetch'],
        answer: 1,
        explanation: '状态码在 200~299 之外时 ok 为 false，需要自行检查并处理。'
      },
      {
        type: 'single',
        question: '以下哪种 HTTP 方法通常用于向服务器提交新数据？',
        options: ['GET', 'POST', 'HEAD', 'OPTIONS'],
        answer: 1,
        explanation: 'GET 用于获取，POST 用于提交，PUT、DELETE 对应更新和删除。'
      },
      {
        type: 'judge',
        question: 'fetch 只有在网络失败时才会 reject，返回 404 时不会抛错。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '这是初学者最常踩的坑：HTTP 错误状态码要检查 response.ok 或 status 自行判断。'
      },
      {
        type: 'judge',
        question: '用 fetch 发送 JSON 数据时，应设置 Content-Type: application/json 请求头。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '设置该请求头告诉服务器请求体是 JSON 格式，同时 body 要用 JSON.stringify 转换。'
      },
      {
        type: 'multiple',
        question: '关于 async/await 与 fetch 的配置，以下哪些说法是正确的？（多选）',
        options: ['async/await 让异步代码写起来更像同步逻辑', 'response.json() 同样返回 Promise', 'fetch 的第二个参数可配置 method、headers、body', 'await 可以写在任何普通函数里'],
        answer: [0, 1, 2],
        explanation: 'await 只能用在 async 函数内部。'
      },
      {
        type: 'multiple',
        question: '以下哪些属于常见的 HTTP 请求方法？（多选）',
        options: ['GET', 'POST', 'DELETE', 'FETCH'],
        answer: [0, 1, 2],
        explanation: 'FETCH 不是 HTTP 方法，fetch 是浏览器提供的请求 API。'
      },
      {
        type: 'single',
        question: '下面代码中 catch 能捕获到什么错误？try { const res = await fetch(url); const data = await res.json(); } catch (e) { ... }（假设服务器返回 500）',
        options: ['能捕获到 500 错误', '捕获不到，因为 500 不会让 fetch reject', '一定会语法报错', 'catch 会被执行两次'],
        answer: 1,
        explanation: 'HTTP 错误状态码不会让 fetch reject，必须检查 res.ok 后自行 throw 才能进入 catch。'
      },
      {
        type: 'single',
        question: 'fetch(url).then(res => res.json()).then(data => console.log(data)); 第一个 then 中 return res.json() 的作用是？',
        options: ['直接把数据打印出来', '把解析 JSON 的 Promise 传给下一个 then，让 data 成为解析好的数据', '把响应转成字符串', '结束整个请求链'],
        answer: 1,
        explanation: 'res.json() 返回 Promise，return 后下一个 then 拿到的是解析完成的实际数据。'
      },
      {
        type: 'judge',
        question: 'await 关键字只能写在 async 声明的函数内部。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '在普通函数中使用 await 会报语法错误，必须先用 async 声明函数。'
      },
      {
        type: 'multiple',
        question: '某页面提交表单后接口返回 401（未登录），但代码没有进入 catch，以下哪些分析和做法是合理的？（多选）',
        options: ['401 不会让 fetch reject，所以不会进入 catch', '应检查 res.ok 或 res.status 后自行抛出错误', '可以在拦截处判断 status 为 401 时跳转登录页', '说明网络连接一定断了，应检查网线'],
        answer: [0, 1, 2],
        explanation: '401 是服务器正常返回的响应，与网络断开无关；需要靠 res.ok/status 主动判断处理。'
      },
      {
        type: 'single',
        question: 'fetch 不配置第二个参数时，默认发送什么方法的请求？',
        options: ['GET', 'POST', 'PUT', 'DELETE'],
        answer: 0,
        explanation: 'fetch(url) 默认是 GET 请求，提交数据时才需要在配置中指定 method。'
      },
      {
        type: 'single',
        question: '想请求服务器删除 id 为 5 的用户，method 配置应写为？',
        options: ['"GET"', '"POST"', '"DELETE"', '"REMOVE"'],
        answer: 2,
        explanation: 'REST 风格中用 DELETE 表示删除，REMOVE 不是 HTTP 方法。'
      },
      {
        type: 'single',
        question: '请求发出后想给页面加上"加载中"提示，拿到响应后去掉，合理的做法是？',
        options: ['fetch 前把 loading 状态设为 true，拿到响应后设为 false', '用 alert 阻塞页面直到请求完成', '请求期间什么都做不了', '调用 location.reload() 刷新页面'],
        answer: 0,
        explanation: '用 loading 状态驱动界面提示是异步请求的常见交互模式，fetch 的异步特性正适合这样做。'
      },
      {
        type: 'judge',
        question: 'async 函数执行到 await 时会阻塞整个页面，其他代码都无法运行。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: 'await 只暂停 async 函数自身的执行，页面其余部分照常运行，这正是异步的意义。'
      },
      {
        type: 'multiple',
        question: '一个健壮的请求函数通常包含哪些步骤？（多选）',
        options: ['用 try/catch 包裹以应对网络失败', '检查 res.ok，状态码异常时主动抛出错误', '用 res.json() 解析响应数据', '服务器返回 500 时直接忽略不做处理'],
        answer: [0, 1, 2],
        explanation: '500 不会自动进入 catch，必须主动检查并处理，不能忽略。'
      },
      {
        type: 'multiple',
        question: '关于 HTTP 请求方法与 fetch，以下哪些说法是正确的？（多选）',
        options: ['PUT 通常用于更新数据', 'DELETE 用于删除数据', '请求方法通过 fetch 第二个参数的 method 配置', 'fetch 只支持 GET 和 POST 两种方法'],
        answer: [0, 1, 2],
        explanation: 'fetch 的 method 支持 GET、POST、PUT、DELETE 等各种 HTTP 方法。'
      }
    ]
  }
];
