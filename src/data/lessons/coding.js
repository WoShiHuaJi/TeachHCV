export default [
  {
    id: 'coding-01',
    title: '手写深拷贝：递归与循环引用',
    summary: '递归深拷贝并处理循环引用',
    minutes: 15,
    sections: [
      {
        heading: '为什么需要深拷贝',
        text: '浅拷贝（如 Object.assign、展开运算符）只复制对象的第一层，嵌套对象仍然共享引用，改一处会互相影响。深拷贝要把嵌套结构完整复制一份，新旧对象互不相干。\n面试手写深拷贝的核心思路：基本类型直接返回；对象类型就创建一个新的空对象（数组则创建空数组），再递归拷贝每一个属性。注意只拷贝自身属性，用 hasOwnProperty 过滤掉原型链上的属性，避免把不该拷贝的东西带过去。',
        code: '// 浅拷贝的问题\nvar a = { info: { age: 18 } };\nvar b = Object.assign({}, a);\nb.info.age = 20;\nconsole.log(a.info.age); // 20，原对象也被改了',
        lang: 'js'
      },
      {
        heading: '递归版深拷贝的完整实现',
        text: '实现分四步：第一步判断类型，非对象或 null 直接返回；第二步用 WeakMap 做缓存，拷贝前先查缓存，命中就直接返回缓存结果，这是处理循环引用的关键；第三步创建空容器并立刻放入缓存，注意必须在递归之前放入，否则遇到自引用会死循环；第四步遍历自身属性递归拷贝。\n易错点：判断顺序不能反，要先查缓存再建容器；用 WeakMap 而不是普通对象做缓存，键可以是对象且不阻碍垃圾回收。',
        code: 'function deepClone(target, map) {\n  var cache = map || new WeakMap();\n  // 1. 基本类型直接返回\n  if (typeof target !== "object" || target === null) {\n    return target;\n  }\n  // 2. 命中缓存说明是循环引用，直接返回已拷贝的部分\n  if (cache.has(target)) {\n    return cache.get(target);\n  }\n  // 3. 创建新容器，先放入缓存再递归\n  var result = Array.isArray(target) ? [] : {};\n  cache.set(target, result);\n  // 4. 只遍历自身属性，递归拷贝\n  for (var key in target) {\n    if (Object.prototype.hasOwnProperty.call(target, key)) {\n      result[key] = deepClone(target[key], cache);\n    }\n  }\n  return result;\n}\n\nvar obj = { name: "小明" };\nobj.self = obj; // 循环引用\nvar copy = deepClone(obj);\nconsole.log(copy.self === copy); // true\nconsole.log(copy !== obj); // true',
        lang: 'js'
      },
      {
        heading: '面试中的追问方向',
        text: '面试官常追问：特殊对象怎么办？Date 和 RegExp 要单独处理，可以用 new Date(target.getTime()) 和 new RegExp(target) 重建；函数一般不拷贝，直接返回原引用即可；Symbol 作为键的属性 for in 遍历不到，需要配合 Object.getOwnPropertySymbols。\n另一个高频追问是性能：递归可能栈溢出，可以改成用栈或队列迭代实现；JSON.parse(JSON.stringify(obj)) 虽然简单，但会丢失 undefined、函数、Symbol，且遇到循环引用直接报错，面试时要能说出它的局限。',
        code: '// JSON 方式的局限\nvar obj = {\n  a: undefined,\n  b: function () {},\n  c: new Date()\n};\nvar str = JSON.stringify(obj);\nconsole.log(str); // 只剩 c，且变成了字符串',
        lang: 'js'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: '这段代码的输出是什么？\nvar obj = { name: "a" };\nvar copy = deepClone(obj);\ncopy.name = "b";\nconsole.log(obj.name);',
        options: ['"b"', '"a"', 'undefined', '报错'],
        answer: 1,
        explanation: '深拷贝后新旧对象互不影响，修改 copy.name 不会改变 obj.name，输出 "a"。'
      },
      {
        type: 'judge',
        question: '深拷贝中必须先把新容器放入缓存，再递归拷贝属性，否则遇到循环引用会死循环。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。先缓存再递归，子属性如果引用回父对象时能命中缓存，直接返回已有容器，避免无限递归。'
      },
      {
        type: 'single',
        question: '补全深拷贝代码的第 4 行，应该选哪段？\n1: function deepClone(t, map) {\n2:   var cache = map || new WeakMap();\n3:   if (typeof t !== "object" || t === null) return t;\n4:   __________\n5:   var result = Array.isArray(t) ? [] : {};\n6:   cache.set(t, result);',
        options: ['if (cache.has(t)) return t;', 'if (cache.has(t)) return cache.get(t);', 'if (!cache.has(t)) cache.set(t, {});', 'cache.delete(t);'],
        answer: 1,
        explanation: '第 4 行是循环引用的处理：命中缓存说明该对象已经在拷贝中，直接返回缓存中对应的新容器 cache.get(t)。'
      },
      {
        type: 'multiple',
        question: '关于 JSON.parse(JSON.stringify(obj)) 实现深拷贝，以下说法正确的有哪些？（多选）',
        options: ['遇到循环引用会抛错', '可以完整拷贝函数属性', '会丢失 undefined 和 Symbol 类型的属性', 'Date 对象拷贝后仍是 Date 实例'],
        answer: [0, 2],
        explanation: 'JSON 方式遇循环引用直接报错，且 undefined、函数、Symbol 会被丢弃，Date 会变成字符串而不是 Date 实例。'
      },
      {
        type: 'single',
        question: '这段代码的输出是什么？\nvar obj = { a: 1 };\nobj.self = obj;\nvar copy = deepClone(obj);\nconsole.log(copy.self === obj);',
        options: ['true', 'false', 'undefined', '报错'],
        answer: 1,
        explanation: '循环引用被正确处理后 copy.self 指向 copy 本身，而不是原对象 obj，所以比较结果为 false。'
      },
      {
        type: 'single',
        question: '补全深拷贝遍历属性的第 2 行，应该选哪段？\n1: for (var key in target) {\n2:   __________\n3:     result[key] = deepClone(target[key], cache);\n4:   }\n5: }',
        options: ['if (target[key] !== null) {', 'if (Object.prototype.hasOwnProperty.call(target, key)) {', 'if (typeof key === "string") {', 'if (key in target) {'],
        answer: 1,
        explanation: 'for in 会遍历到原型链上的可枚举属性，必须用 hasOwnProperty 过滤，只拷贝对象自身的属性。'
      },
      {
        type: 'judge',
        question: 'for in 循环会遍历到原型链上的可枚举属性，所以深拷贝遍历时要用 hasOwnProperty 过滤。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。只拷贝自身属性可以避免把原型上的属性误拷到新对象上，这是深拷贝实现的细节要求。'
      },
      {
        type: 'judge',
        question: '深拷贝的缓存用普通对象和 WeakMap 效果完全一样，选哪个都无所谓。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。普通对象的键只能是字符串，无法直接以对象做键；WeakMap 的键可以是对象，且不阻碍垃圾回收，是正确选择。'
      },
      {
        type: 'multiple',
        question: '关于深拷贝中处理循环引用，以下说法正确的有哪些？（多选）',
        options: ['用 WeakMap 保存“原对象到拷贝结果”的映射', '递归前先查缓存，命中就直接返回缓存结果', '新容器创建后要立即放入缓存，再递归拷贝属性', '遇到循环引用应当直接抛出异常'],
        answer: [0, 1, 2],
        explanation: '前三项正是实现的关键步骤；循环引用是合法场景，正确实现应借助缓存正常处理而不是抛错。'
      },
      {
        type: 'single',
        question: '这段代码的输出是什么？\nvar obj = { d: new Date(0) };\nvar copy = JSON.parse(JSON.stringify(obj));\nconsole.log(typeof copy.d);',
        options: ['"object"', '"string"', '"number"', '"undefined"'],
        answer: 1,
        explanation: 'JSON.stringify 会把 Date 转成 ISO 字符串，parse 后不会还原为 Date 实例，typeof copy.d 是 "string"。'
      },
      {
        type: 'single',
        question: '这段代码的输出是什么？\nvar d = new Date(0);\nvar copy = new Date(d.getTime());\ncopy.setTime(1000);\nconsole.log(d.getTime());',
        options: ['0', '1000', 'undefined', '报错'],
        answer: 0,
        explanation: '用 new Date(d.getTime()) 重建得到的是独立的 Date 实例，修改 copy 不影响原对象 d，输出 0。'
      },
      {
        type: 'judge',
        question: '深拷贝遇到函数类型的属性时，常见处理是直接保留原函数引用，而不是尝试复制函数。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。函数无法被有意义地“拷贝”，约定俗成的做法是直接返回原引用，这也是面试中的标准答案。'
      },
      {
        type: 'judge',
        question: 'for in 循环可以遍历到对象上以 Symbol 作为键的属性。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。Symbol 键不会被 for in 遍历到，需要配合 Object.getOwnPropertySymbols 单独处理。'
      },
      {
        type: 'multiple',
        question: '关于深拷贝中特殊对象的处理，以下说法正确的有哪些？（多选）',
        options: ['Date 可用 new Date(target.getTime()) 重建', 'RegExp 可用 new RegExp(target) 重建', '函数属性一般直接保留原引用', 'Symbol 键靠 for in 就能完整遍历'],
        answer: [0, 1, 2],
        explanation: 'Date 和 RegExp 需要用各自的方式重建，函数直接保留引用；for in 遍历不到 Symbol 键，第四项错误。'
      },
      {
        type: 'single',
        question: '这段代码的输出是什么？\nvar re = /ab+c/gi;\nvar copy = new RegExp(re);\nconsole.log(copy.source);',
        options: ['"ab+c"', '"/ab+c/gi"', '"gi"', '报错'],
        answer: 0,
        explanation: '用 new RegExp(re) 重建得到独立的正则实例，source 属性是正则的文本部分 "ab+c"，不含斜杠和修饰符。'
      },
      {
        type: 'judge',
        question: '深拷贝用 WeakMap 做缓存时，键是原对象，值是对应拷贝出来的新容器。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。映射关系是“原对象 -> 拷贝结果”，命中缓存说明该对象正在或已被拷贝，直接取出对应的新容器返回。'
      },
      {
        type: 'single',
        question: '这段代码的输出是什么？\nvar proto = { p: 1 };\nvar obj = Object.create(proto);\nobj.own = 2;\nvar copy = deepClone(obj);\nconsole.log(copy.p);',
        options: ['1', 'undefined', '2', '报错'],
        answer: 1,
        explanation: 'for in 虽能遍历到原型链上的 p，但 hasOwnProperty 过滤后只拷贝自身属性 own，copy 的原型是 Object.prototype，访问 copy.p 为 undefined。'
      },
      {
        type: 'multiple',
        question: '关于递归深拷贝的局限与改进，以下说法正确的有哪些？（多选）',
        options: ['递归层级过深时可能栈溢出', '可以改用栈或队列迭代实现来避免栈溢出', 'JSON.parse(JSON.stringify(obj)) 遇到循环引用会抛错', '递归版天然支持任意深度的嵌套，无需担心'],
        answer: [0, 1, 2],
        explanation: '前三项正确；递归遇到极深嵌套同样会调用栈溢出，需要迭代版规避，第四项错误。'
      },
      {
        type: 'single',
        question: '补全深拷贝中处理 RegExp 的第 2 行，应该选哪段？\n1: if (target instanceof RegExp) {\n2:   __________\n3: }',
        options: ['return new RegExp(target);', 'return target.source;', 'return { source: target.source };', 'return target;'],
        answer: 0,
        explanation: 'RegExp 要重建一个新实例而不是复用原引用；new RegExp(target) 会保留 source 和修饰符，返回 source 字符串或原引用都不符合深拷贝语义。'
      },
      {
        type: 'multiple',
        question: '关于深拷贝缓存选用 WeakMap，以下说法正确的有哪些？（多选）',
        options: ['WeakMap 的键可以是对象', 'WeakMap 的弱引用不阻碍垃圾回收', '缓存中保存的是“原对象到拷贝结果”的映射', 'WeakMap 可以用 forEach 遍历所有缓存项'],
        answer: [0, 1, 2],
        explanation: '前三项正确；WeakMap 不可遍历（没有 forEach、keys 等方法），这正是弱引用设计带来的限制，第四项错误。'
      },
      {
        type: 'single',
        question: '这段代码的输出是什么？\nvar obj = { list: [1, 2] };\nvar copy = deepClone(obj);\ncopy.list.push(3);\nconsole.log(obj.list.length);',
        options: ['2', '3', 'undefined', '报错'],
        answer: 0,
        explanation: '深拷贝会递归拷贝嵌套数组，copy.list 与 obj.list 是两个独立数组，push 只影响拷贝结果，输出 2。'
      },
      {
        type: 'judge',
        question: '深拷贝类型判断 if (typeof target !== "object" || target === null) 中的 target === null 不能省略，因为 typeof null 的结果是 "object"。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。typeof null 为 "object"，若不单独排除，null 会走进对象分支，cache.set(null, ...) 会因键不是对象而抛 TypeError。'
      },
      {
        type: 'single',
        question: '下面哪个深拷贝实现存在 bug？（针对循环引用的处理顺序）',
        options: ['创建新容器后先 cache.set(target, result) 再递归拷贝属性', '递归拷贝完所有属性之后才把 result 放入缓存', '递归前先判断 cache.has(target)，命中直接返回缓存值', '用 WeakMap 保存原对象到拷贝结果的映射'],
        answer: 1,
        explanation: '必须先放入缓存再递归，否则遇到自引用（obj.self = obj）时缓存一直不命中，会无限递归直至栈溢出。'
      },
      {
        type: 'single',
        question: '这段代码的输出是什么？\nvar arr = [1, [2, 3]];\nvar copy = deepClone(arr);\ncopy[1].push(4);\nconsole.log(arr[1].length);',
        options: ['2', '3', 'undefined', '报错'],
        answer: 0,
        explanation: '数组也是对象，deepClone 会用空数组作为容器递归拷贝，copy[1] 是独立的新数组，修改不影响原数组，输出 2。'
      },
      {
        type: 'judge',
        question: 'JSON.stringify 遇到值为 undefined 的对象属性时，会保留该属性并把值序列化为字符串 "undefined"。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。值为 undefined、函数或 Symbol 的属性会被直接丢弃，不会出现在序列化结果中，这是 JSON 方式深拷贝的局限之一。'
      },
      {
        type: 'judge',
        question: '如果不对 Date 单独重建，把它当普通对象用 for in 逐属性拷贝，得到的新对象仍然是可调用的 Date 实例。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。Date 的内部时间值不是可枚举自有属性，逐属性拷贝得到的只是一个普通空对象，调用 getTime 等方法会抛错，必须用 new Date(target.getTime()) 重建。'
      },
      {
        type: 'multiple',
        question: '以下哪些内容会在 JSON.parse(JSON.stringify(obj)) 深拷贝中丢失或改变类型？（多选）',
        options: ['值为 undefined 的属性', '函数类型的属性', '以 Symbol 为键的属性', '字符串类型的属性'],
        answer: [0, 1, 2],
        explanation: 'undefined、函数、Symbol 键都会在序列化时被丢弃；普通字符串属性可以正常保留，第四项错误。'
      },
      {
        type: 'multiple',
        question: '为了让基础版 deepClone 更完善，面试中常被要求补充的处理有哪些？（多选）',
        options: ['Date 用 new Date(target.getTime()) 重建', 'RegExp 用 new RegExp(target) 重建', 'Symbol 键配合 Object.getOwnPropertySymbols 遍历', '数字属性必须用 new Number 包装后再拷贝'],
        answer: [0, 1, 2],
        explanation: '前三项是常见补充方向；数字是基本类型直接返回即可，包装成 Number 对象反而改变了类型，第四项错误。'
      },
      {
        type: 'single',
        question: '这段代码的输出是什么？\nvar a = { x: 1 };\nvar b = { x: 1 };\nvar obj = { p: a, q: b };\nvar copy = deepClone(obj);\nconsole.log(copy.p === copy.q);',
        options: ['true', 'false', 'undefined', '报错'],
        answer: 1,
        explanation: 'a 和 b 是两个不同引用，各自独立拷贝后仍是两个不同对象，输出 false；若 p、q 原本指向同一对象，缓存机制会让拷贝结果仍共享同一副本。'
      },
      {
        type: 'multiple',
        question: '以下哪些情况会让没有缓存机制的简单递归深拷贝出问题？（多选）',
        options: ['对象自引用：obj.self = obj', '两个对象互相引用形成环', '嵌套层级极深导致调用栈溢出', '对象含有数字类型的属性'],
        answer: [0, 1, 2],
        explanation: '环状引用会让无缓存的递归陷入死循环，极深嵌套会导致栈溢出；数字是基本类型直接返回，不会造成任何问题。'
      }
    ]
  },
  {
    id: 'coding-02',
    title: '手写 call、apply、bind',
    summary: '掌握 this 绑定的三种手写实现',
    minutes: 14,
    sections: [
      {
        heading: '三个方法的共同原理',
        text: 'call、apply、bind 都用来显式指定函数执行时的 this。它们的底层原理是同一个技巧：把函数临时挂到目标对象上，以对象方法的形式调用，这样函数内部的 this 自然指向该对象，调用完再把这个临时属性删掉。\n区别在于传参和返回值：call 逐个传参并立即执行；apply 用数组传参并立即执行；bind 不立即执行，而是返回一个绑定了 this 的新函数，还支持预先传入部分参数（柯里化）。',
        code: 'function greet(greeting) {\n  return greeting + ", " + this.name;\n}\nvar person = { name: "小明" };\ngreet.call(person, "你好");   // "你好, 小明"\ngreet.apply(person, ["早上好"]); // "早上好, 小明"\nvar bound = greet.bind(person, "晚上好");\nbound(); // "晚上好, 小明"',
        lang: 'js'
      },
      {
        heading: '手写 myCall 与 myApply 完整实现',
        text: 'myCall 的实现步骤：先处理 context 为 null 或 undefined 的情况（非严格模式下指向全局对象），并用 Object() 把基本类型包装成对象；然后用一个 Symbol 作为临时键避免污染原有属性；把 this（也就是原函数）挂到 context 上并调用；最后删掉临时键并返回结果。\nmyApply 与 myCall 几乎一样，只是把第二个参数当作数组展开。易错点：忘记 delete 临时属性会污染目标对象；忘记处理 null 会在严格模式下出错。',
        code: 'Function.prototype.myCall = function (context) {\n  var args = [].slice.call(arguments, 1);\n  var ctx = context == null ? globalThis : Object(context);\n  var key = Symbol("fn");\n  ctx[key] = this;              // this 就是要执行的函数\n  var result = ctx[key].apply(ctx, args);\n  delete ctx[key];              // 用完记得删掉\n  return result;\n};\n\nFunction.prototype.myApply = function (context, arr) {\n  var ctx = context == null ? globalThis : Object(context);\n  var key = Symbol("fn");\n  ctx[key] = this;\n  var result = arr ? ctx[key].apply(ctx, arr) : ctx[key]();\n  delete ctx[key];\n  return result;\n};',
        lang: 'js'
      },
      {
        heading: '手写 myBind 完整实现',
        text: 'bind 要返回一个新函数，所以先保存原函数和预设参数。新函数被调用时，把预设参数和调用时传入的参数拼接起来，再用 apply 执行原函数。\n进阶考点是 new 的情况：如果绑定后的函数被当作构造函数 new 调用，this 应该指向新创建的实例而不是绑定的对象，所以规范实现里会判断 this 是否继承自绑定函数，是的话就把 this 传给 apply。初级面试掌握基础版即可，进阶版能答出来是加分项。',
        code: '// 基础版\nFunction.prototype.myBind = function (context) {\n  var fn = this;\n  var bindArgs = [].slice.call(arguments, 1);\n  return function () {\n    var callArgs = [].slice.call(arguments);\n    return fn.apply(context, bindArgs.concat(callArgs));\n  };\n};\n\n// 使用\nfunction add(a, b, c) {\n  return a + b + c;\n}\nvar addFive = add.myBind(null, 2, 3);\nconsole.log(addFive(5)); // 10',
        lang: 'js'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: '这段代码的输出是什么？\nvar name = "全局";\nvar obj = { name: "对象" };\nfunction show() { return this.name; }\nvar fn = show.bind(obj);\nconsole.log(fn());',
        options: ['"全局"', '"对象"', 'undefined', '报错'],
        answer: 1,
        explanation: 'bind 把 this 永久绑定到 obj，返回的新函数无论在哪里调用，this 都指向 obj，输出 "对象"。'
      },
      {
        type: 'single',
        question: '补全 myCall 的第 5 行，应该选哪段？\n1: Function.prototype.myCall = function (context) {\n2:   var args = [].slice.call(arguments, 1);\n3:   var ctx = Object(context);\n4:   var key = Symbol("fn");\n5:   __________\n6:   var result = ctx[key].apply(ctx, args);\n7:   delete ctx[key];\n8:   return result;\n9: };',
        options: ['ctx = this;', 'ctx[key] = this;', 'this[key] = ctx;', 'ctx[key].call(ctx);'],
        answer: 1,
        explanation: '核心技巧就是把函数本身（this）挂到目标对象的临时键上，第 5 行应为 ctx[key] = this，之后才能以 ctx[key]() 的方式调用。'
      },
      {
        type: 'judge',
        question: 'call 和 apply 都会立即执行函数，区别仅在于传参方式：call 逐个传，apply 传数组。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。两者都是立即执行，只有参数形式不同；不立即执行、返回新函数的是 bind。'
      },
      {
        type: 'multiple',
        question: '关于手写 call 的实现，以下哪些做法是正确的？（多选）',
        options: ['context 为 null 时应回退到全局对象（非严格模式）', '用 Symbol 作为临时属性键避免覆盖原有属性', '调用结束后必须 delete 临时属性', '应把函数挂到 this 上再调用，即 this[fn]()'],
        answer: [0, 1, 2],
        explanation: '正确做法：null 回退全局、Symbol 防冲突、用完 delete。函数应挂到 context 上调用，这样 this 才指向 context；挂到 this 上完全错误。'
      },
      {
        type: 'single',
        question: '这段代码的输出是什么？\nfunction fn(a, b) {\n  return this.x + a + b;\n}\nvar obj = { x: 1 };\nconsole.log(fn.myApply(obj, [2, 3]));',
        options: ['3', '6', 'NaN', '报错'],
        answer: 1,
        explanation: 'myApply 把 this 绑定到 obj 并把数组 [2, 3] 展开传参，结果为 1 + 2 + 3 = 6。'
      },
      {
        type: 'single',
        question: '补全 myBind 基础版的第 6 行，应该选哪段？\n1: Function.prototype.myBind = function (context) {\n2:   var fn = this;\n3:   var bindArgs = [].slice.call(arguments, 1);\n4:   return function () {\n5:     var callArgs = [].slice.call(arguments);\n6:     __________\n7:   };\n8: };',
        options: ['return fn.apply(context, bindArgs.concat(callArgs));', 'return fn.call(context, bindArgs);', 'return context.fn(bindArgs, callArgs);', 'return fn(context, bindArgs, callArgs);'],
        answer: 0,
        explanation: 'bind 要把预设参数和调用时参数拼接后一起传给原函数，用 apply 一次性传入数组最方便，即 bindArgs.concat(callArgs)。'
      },
      {
        type: 'judge',
        question: '在 myCall 的实现中，this 指向被调用的函数本身，所以可以直接把它挂到 context 的临时键上调用。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。myCall 定义在 Function.prototype 上，调用 fn.myCall(obj) 时 this 就是 fn，挂到 obj 上以方法形式调用即可改变 this 指向。'
      },
      {
        type: 'judge',
        question: '手写 myCall 时 context 传 null 不需要任何处理，直接使用也不会出问题。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。context 为 null 或 undefined 时应回退到全局对象（非严格模式），否则给 null 添加属性会直接报错。'
      },
      {
        type: 'multiple',
        question: '关于 bind 与 call、apply 的区别，以下说法正确的有哪些？（多选）',
        options: ['bind 不立即执行，返回一个绑定了 this 的新函数', 'bind 支持预先传入部分参数（柯里化）', 'call 和 apply 都是立即执行，仅传参形式不同', 'bind 绑定的 this 之后还能被 call 覆盖'],
        answer: [0, 1, 2],
        explanation: '前三项正确；bind 绑定的 this 是永久的，之后再用 call 或 apply 调用绑定函数也无法改变其 this 指向。'
      },
      {
        type: 'single',
        question: '这段代码的输出是什么？\nvar name = "全局";\nvar obj = { name: "对象" };\nfunction show() { return this.name; }\nvar bound = show.myBind(obj);\nconsole.log(bound.myCall(null));',
        options: ['"全局"', '"对象"', 'undefined', '报错'],
        answer: 1,
        explanation: 'myBind 内部固定用 fn.apply(context, ...) 执行，绑定后的函数 this 无法被后续的 call 覆盖，仍输出 "对象"。'
      },
      {
        type: 'single',
        question: '这段代码的输出是什么？\nfunction fn() { return this.x; }\nvar obj = { x: 5 };\nvar bound = fn.bind(obj);\nvar o2 = { x: 9, bound: bound };\nconsole.log(o2.bound());',
        options: ['5', '9', 'undefined', '报错'],
        answer: 0,
        explanation: 'bind 绑定的 this 是永久的，即使把 bound 挂到 o2 上以方法形式调用，this 仍指向最初绑定的 obj，输出 5。'
      },
      {
        type: 'judge',
        question: 'bind 返回的函数被 new 调用时，规范实现中 this 应指向新创建的实例，而不是绑定的对象。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。这是 bind 的进阶考点：new 的优先级高于 bind，实现时通过判断 this 是否为绑定函数的实例来决定传给 apply 的对象。'
      },
      {
        type: 'single',
        question: '补全 myApply 的第 5 行，应该选哪段？\n1: Function.prototype.myApply = function (context, arr) {\n2:   var ctx = context == null ? globalThis : Object(context);\n3:   var key = Symbol("fn");\n4:   ctx[key] = this;\n5:   __________\n6:   delete ctx[key];\n7:   return result;\n8: };',
        options: ['var result = ctx[key](arr);', 'var result = arr ? ctx[key].apply(ctx, arr) : ctx[key]();', 'var result = ctx[key].apply(arr, ctx);', 'var result = this.apply(ctx, arr);'],
        answer: 1,
        explanation: '要兼容不传参数数组的情况：arr 存在就展开传入，不存在就直接无参调用；且必须用挂到 ctx 上的临时方法调用，this 才指向 ctx。'
      },
      {
        type: 'multiple',
        question: '关于 myCall 中 Object(context) 的处理，以下说法正确的有哪些？（多选）',
        options: ['能把基本类型的 context 包装成对象，才能挂载临时属性', 'context 是基本类型时不包装，直接挂属性会静默失败或报错', '它与 null 回退全局对象的判断配合，覆盖各种入参情况', '它的作用是把要执行的函数本身转成对象'],
        answer: [0, 1, 2],
        explanation: 'Object(context) 是包装调用方传入的 context，让基本类型也能作为挂载点；它与函数本身无关，第四项错误。'
      },
      {
        type: 'single',
        question: '这段代码的输出是什么？\nfunction add(a, b, c) {\n  return a + b + c;\n}\nvar addOne = add.myBind(null, 1);\nconsole.log(addOne(2, 3));',
        options: ['3', '6', 'NaN', '报错'],
        answer: 1,
        explanation: 'bind 预设参数 1，调用时再传 2、3，拼接后为 add(1, 2, 3)，结果为 6，这就是 bind 的柯里化能力。'
      },
      {
        type: 'single',
        question: '这段代码的输出是什么？\nvar a = { x: 1 };\nvar b = { x: 2 };\nfunction fn() { return this.x; }\nvar bound = fn.bind(a).bind(b);\nconsole.log(bound());',
        options: ['1', '2', 'undefined', '报错'],
        answer: 0,
        explanation: 'bind 绑定的 this 是永久的，第一次 bind(a) 已固定 this，第二次 bind(b) 无法覆盖，输出 1。'
      },
      {
        type: 'judge',
        question: '手写 myCall 时若用固定字符串（如 "fn"）作为临时属性键，可能覆盖 context 上的同名属性，用 Symbol 可以彻底避免冲突。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。Symbol 每次创建都是唯一值，不会与 context 上已有的任何键冲突，这是使用 Symbol 做临时键的原因。'
      },
      {
        type: 'judge',
        question: '非严格模式下用 call 传入基本类型作为 this 时，函数内部拿到的 this 是被 Object() 包装后的对象。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。原生 call 与规范实现都会把基本类型 context 包装成对象，所以手写实现里用 Object(context) 与原生行为保持一致。'
      },
      {
        type: 'multiple',
        question: '关于 bind 返回的函数被 new 调用，以下说法正确的有哪些？（多选）',
        options: ['new 的优先级高于 bind，this 指向新创建的实例', '规范实现需判断 this 是否为绑定函数的实例', 'new 调用时 bind 预设的参数仍会拼在实参前面', 'new 调用时 this 仍指向 bind 绑定的对象'],
        answer: [0, 1, 2],
        explanation: 'new 绑定函数时 this 指向新实例，实现上通过 this instanceof 绑定函数来判断；预设参数依然有效并拼在前面；第四项与 new 的优先级矛盾，错误。'
      },
      {
        type: 'multiple',
        question: '关于 apply 的第二个参数，以下说法正确的有哪些？（多选）',
        options: ['应是一个数组或类数组', '其元素会按顺序作为函数的实参', '传 null 或 undefined 时按无参调用处理', '第二个参数必须像 call 一样逐个列出实参'],
        answer: [0, 1, 2],
        explanation: 'apply 的第二参数是数组或类数组，元素按序展开为实参，传 null 或 undefined 等价于不传参；逐个列参是 call 的形式，第四项错误。'
      },
      {
        type: 'single',
        question: '这段代码的输出是什么？\nfunction mul(a, b) {\n  return a * b;\n}\nconsole.log(mul.myCall(null, 3, 4));',
        options: ['7', '12', 'NaN', '报错'],
        answer: 1,
        explanation: 'myCall 从 arguments 第 1 位开始截取参数 3、4，null 回退到全局对象后正常执行，3 * 4 = 12。'
      },
      {
        type: 'judge',
        question: 'myCall 实现中 ctx[key].apply(ctx, args) 的 this 参数写不写 ctx 都不影响结果，因为以 ctx[key]() 方式调用时函数内的 this 已经是 ctx。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。方法调用本身已经决定了 this 指向 ctx，再 apply(ctx, ...) 只是保持语义一致的显式写法，常用于展开参数。'
      },
      {
        type: 'single',
        question: '下面哪个 myCall 实现存在 bug？',
        options: ['用 Symbol("fn") 作为临时属性键', '调用结束后 delete ctx[key] 清理临时属性', '调用结束后忘记 delete 临时属性，直接返回结果', 'context 为 null 时回退到全局对象'],
        answer: 2,
        explanation: '忘记 delete 会让 context 对象上残留一个 Symbol 属性，污染目标对象；虽然 Symbol 键不易被发现，但仍属于实现缺陷。'
      },
      {
        type: 'single',
        question: '这段代码的输出是什么？\nfunction count() {\n  return arguments.length;\n}\nconsole.log(count.myApply(null, [1, 2, 3]));',
        options: ['1', '3', '[1, 2, 3]', '报错'],
        answer: 1,
        explanation: 'myApply 把数组 [1, 2, 3] 展开成三个实参传入，arguments.length 为 3。'
      },
      {
        type: 'judge',
        question: '原生 bind 绑定的函数被 new 调用时，新实例的原型仍然来自原函数的 prototype。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。new 绑定函数时实例的原型链仍指向原函数的 prototype，这也是进阶实现要用 this instanceof 原函数来判断是否被 new 调用的原因。'
      },
      {
        type: 'judge',
        question: '手写 myCall 把 null 回退到 globalThis 后，在严格模式下与原生 call 传入 null 的行为完全一致。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。严格模式下原生 call 传入 null 时函数内 this 就是 null，不会回退到全局对象；手写实现回退 globalThis 只与非严格模式的行为一致。'
      },
      {
        type: 'multiple',
        question: '手写 myCall 的关键步骤包括哪些？（多选）',
        options: ['把函数本身（this）挂到 context 的临时键上', '用 [].slice.call(arguments, 1) 截取除 context 外的参数', '调用结束后 delete 临时键', '用固定字符串 "__fn__" 做键与 Symbol 效果完全一样'],
        answer: [0, 1, 2],
        explanation: '前三项是实现要点；固定字符串键可能与 context 原有属性冲突，而 Symbol 唯一，二者效果不同，第四项错误。'
      },
      {
        type: 'multiple',
        question: '关于 myBind 中参数的拼接，以下说法正确的有哪些？（多选）',
        options: ['bind 时的预设参数排在调用时参数之前', '用 bindArgs.concat(callArgs) 合并两次参数', '合并后的数组一次性通过 apply 传给原函数', '预设参数会覆盖调用时传入的参数'],
        answer: [0, 1, 2],
        explanation: '预设参数在前、调用参数在后，concat 合并后由 apply 展开传入；两组参数是拼接而非覆盖关系，第四项错误。'
      },
      {
        type: 'single',
        question: '这段代码的输出是什么？\nfunction add(a, b) {\n  return a + b;\n}\nvar f = add.myBind(null, 5);\nvar g = f.myBind(null, 10);\nconsole.log(g(1));',
        options: ['6', '15', '16', 'NaN'],
        answer: 1,
        explanation: 'g(1) 会以参数 [10, 1] 调用 f，f 内部再拼上预设的 5 得到 add(5, 10, 1)，add 只取前两个参数，结果为 15。'
      },
      {
        type: 'multiple',
        question: '假设 fn 是一个普通函数，以下哪些写法能以 obj 为 this 正确调用 fn(1, 2)？（多选）',
        options: ['fn.call(obj, 1, 2)', 'fn.apply(obj, [1, 2])', 'fn.bind(obj)(1, 2)', 'fn(obj, 1, 2)'],
        answer: [0, 1, 2],
        explanation: 'call、apply、bind 都能显式指定 this；fn(obj, 1, 2) 只是把 obj 当普通实参传入，this 仍指向全局或 undefined，第四项错误。'
      }
    ]
  },
  {
    id: 'coding-03',
    title: '手写 Promise：状态机与链式调用',
    summary: '理解 Promise 状态机与 then 实现',
    minutes: 18,
    sections: [
      {
        heading: 'Promise 的状态机模型',
        text: '手写 Promise 先抓住三条铁律：一、状态只有 pending、fulfilled、rejected 三种；二、状态只能从 pending 单向变成 fulfilled 或 rejected，一旦改变就不可逆，后续再调 resolve 或 reject 都无效；三、resolve 和 reject 各只能生效一次。\n实现上用 state 保存状态，value 存成功的值，reason 存失败原因。executor 是同步执行的，所以构造函数里要立即调用它，并用 try catch 包住，executor 抛错时自动走 reject。',
        code: 'new MyPromise(function (resolve, reject) {\n  resolve(1);\n  reject(2);   // 无效，状态已是 fulfilled\n  resolve(3);  // 同样无效\n}).then(function (v) {\n  console.log(v); // 1\n});',
        lang: 'js'
      },
      {
        heading: '手写 MyPromise 完整实现',
        text: '核心难点在 then：调用时如果状态已是 fulfilled 或 rejected，直接执行回调；如果还是 pending，就把回调存进数组，等状态改变时再统一执行，这就是发布订阅模式。\n链式调用的秘密是 then 必须返回一个新的 Promise，回调的返回值作为新 Promise 的 resolve 值。注意回调要用 setTimeout 包一层变成异步执行，模拟真实 Promise 的微任务行为；回调抛错要 catch 住并 reject 新 Promise，否则链就断了。',
        code: 'function MyPromise(executor) {\n  var self = this;\n  self.state = "pending";\n  self.value = undefined;\n  self.reason = undefined;\n  self.onFulfilledList = [];\n  self.onRejectedList = [];\n  function resolve(value) {\n    if (self.state === "pending") {\n      self.state = "fulfilled";\n      self.value = value;\n      self.onFulfilledList.forEach(function (cb) { cb(); });\n    }\n  }\n  function reject(reason) {\n    if (self.state === "pending") {\n      self.state = "rejected";\n      self.reason = reason;\n      self.onRejectedList.forEach(function (cb) { cb(); });\n    }\n  }\n  try {\n    executor(resolve, reject);\n  } catch (err) {\n    reject(err);\n  }\n}\n\nMyPromise.prototype.then = function (onFulfilled, onRejected) {\n  var self = this;\n  return new MyPromise(function (resolve, reject) {\n    function run(cb, data) {\n      setTimeout(function () {\n        try {\n          var x = cb(data);\n          resolve(x);\n        } catch (e) {\n          reject(e);\n        }\n      }, 0);\n    }\n    if (self.state === "fulfilled") run(onFulfilled, self.value);\n    else if (self.state === "rejected") run(onRejected, self.reason);\n    else {\n      self.onFulfilledList.push(function () { run(onFulfilled, self.value); });\n      self.onRejectedList.push(function () { run(onRejected, self.reason); });\n    }\n  });\n};',
        lang: 'js'
      },
      {
        heading: '常见追问与易错点',
        text: '追问一：为什么回调要异步执行？因为规范要求 then 的回调在当前同步代码之后执行，保证 resolve 同步调用和异步调用时行为一致。真实 Promise 用微任务，手写时用 setTimeout 宏任务模拟即可，但要能说出两者的区别。\n追问二：then 里 return 一个 Promise 会怎样？新 Promise 会等待这个返回的 Promise 落定后再决定自己的状态，这叫 Promise 解析过程，完整实现里需要递归处理。\n易错点：then 不传回调时要能透传值（值穿透），即 onFulfilled 不是函数时直接把 value 往下传。',
        code: '// 值穿透：then 不传回调，值会原样传给下一个 then\nnew MyPromise(function (resolve) {\n  resolve(42);\n})\n  .then()\n  .then(function (v) {\n    console.log(v); // 42\n  });',
        lang: 'js'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: '这段代码的输出是什么？\nnew MyPromise(function (resolve, reject) {\n  resolve(1);\n  reject(2);\n  resolve(3);\n}).then(function (v) {\n  console.log(v);\n});',
        options: ['1', '2', '3', '报错'],
        answer: 0,
        explanation: '状态一旦从 pending 变为 fulfilled 就不可逆，后面的 reject(2) 和 resolve(3) 都无效，输出 1。'
      },
      {
        type: 'judge',
        question: 'Promise 的 executor 函数是异步执行的，要等当前同步代码跑完才会调用。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。executor 在 new Promise 时同步立即执行，异步的是 then 的回调。'
      },
      {
        type: 'single',
        question: '补全 then 方法实现链式调用的第 2 行，应该选哪段？\n1: MyPromise.prototype.then = function (onFulfilled) {\n2:   __________\n3:     function run(cb, data) { ... }\n4:     ...\n5: };',
        options: ['return this;', 'return new MyPromise(function (resolve, reject) {', 'return onFulfilled(self.value);', 'return self.value;'],
        answer: 1,
        explanation: '链式调用的关键是 then 返回一个新的 Promise，回调的返回值作为新 Promise 的 resolve 值；返回 this 无法支持状态隔离，直接返回值则不是 Promise。'
      },
      {
        type: 'multiple',
        question: '关于手写 Promise 的正确做法，以下哪些说法是对的？（多选）',
        options: ['状态改变后必须不可逆', 'pending 时 then 的回调应存入数组等待状态改变', 'executor 抛错时应自动 reject', 'then 的回调应该同步立即执行'],
        answer: [0, 1, 2],
        explanation: '前三项都是规范要求；then 的回调必须异步执行（真实 Promise 是微任务），同步执行会导致行为不一致。'
      },
      {
        type: 'single',
        question: '这段代码的输出顺序是什么？\nconsole.log("start");\nnew MyPromise(function (resolve) {\n  console.log("executor");\n  resolve(1);\n});\nconsole.log("end");',
        options: ['start executor end', 'start end executor', 'executor start end', '报错'],
        answer: 0,
        explanation: 'executor 在 new 时同步立即执行，所以输出顺序是 start、executor、end。'
      },
      {
        type: 'single',
        question: '这段代码的输出是什么？\nnew MyPromise(function (resolve) {\n  resolve(1);\n})\n  .then(function (v) { return v + 1; })\n  .then(function (v) { console.log(v); });',
        options: ['1', '2', 'undefined', '报错'],
        answer: 1,
        explanation: 'then 返回新 Promise，上一个回调的返回值 v + 1 作为新 Promise 的 resolve 值，最终输出 2。'
      },
      {
        type: 'judge',
        question: '值穿透是指 then 不传 onFulfilled 回调时，value 会原样传给下一个 then 的回调。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。规范要求 onFulfilled 不是函数时直接把 value 透传下去，所以 then() 后面仍能拿到原来的值。'
      },
      {
        type: 'judge',
        question: '状态变为 fulfilled 之后，再次调用 resolve 可以覆盖之前保存的 value。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。状态一旦从 pending 变为 fulfilled 或 rejected 就不可逆，resolve 内部会判断 state 是否为 pending，后续调用直接无效。'
      },
      {
        type: 'multiple',
        question: '关于 then 回调要异步执行，以下说法正确的有哪些？（多选）',
        options: ['规范要求回调在当前同步代码之后执行', '真实 Promise 用微任务，手写时常用 setTimeout 宏任务模拟', '异步执行保证同步 resolve 和异步 resolve 的回调行为一致', '异步执行会导致回调收不到之前同步 resolve 的值'],
        answer: [0, 1, 2],
        explanation: '前三项正确；pending 时回调会被存入数组，状态改变后统一执行，不会丢失同步 resolve 的值。'
      },
      {
        type: 'single',
        question: '补全 resolve 函数的第 2 行，应该选哪段？\n1: function resolve(value) {\n2:   __________\n3:     self.state = "fulfilled";\n4:     self.value = value;\n5:     self.onFulfilledList.forEach(function (cb) { cb(); });\n6:   }\n7: }',
        options: ['if (self.state === "fulfilled") {', 'if (self.state === "pending") {', 'if (self.state !== "pending") {', 'if (value !== undefined) {'],
        answer: 1,
        explanation: '只有 pending 状态才允许改变状态，这就是“状态不可逆、resolve 只生效一次”的实现方式。'
      },
      {
        type: 'single',
        question: '这段代码的输出顺序是什么？\nconsole.log("a");\nnew MyPromise(function (resolve) {\n  resolve(1);\n}).then(function (v) {\n  console.log("then");\n});\nconsole.log("b");',
        options: ['a then b', 'a b then', 'then a b', '报错'],
        answer: 1,
        explanation: 'then 的回调被 setTimeout 包成异步执行，会等当前同步代码结束后才运行，所以顺序是 a、b、then。'
      },
      {
        type: 'judge',
        question: 'then 的回调中抛出的错误会被 try catch 捕获，并以该错误 reject then 返回的新 Promise。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。run 函数内部用 try catch 包住回调执行，抛错时 reject(e)，错误会沿着 Promise 链向后传递。'
      },
      {
        type: 'judge',
        question: 'then 的回调返回另一个 Promise 时，新 Promise 会等待这个返回的 Promise 落定后再决定自己的状态。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。这称为 Promise 解析过程，完整实现需要对回调返回值递归处理，直到拿到非 Promise 的值。'
      },
      {
        type: 'multiple',
        question: '关于手写 Promise 中的发布订阅模式，以下说法正确的有哪些？（多选）',
        options: ['pending 状态下 then 的回调会存入数组等待', '状态改变时统一遍历执行数组中已存的回调', '同一个 Promise 多次调用 then，各回调都会被执行', 'pending 状态下 then 的回调会被直接丢弃'],
        answer: [0, 1, 2],
        explanation: 'pending 时回调入数组、状态改变时统一执行、多次 then 各自注册回调都会执行；回调被保存而不是丢弃，第四项错误。'
      },
      {
        type: 'single',
        question: '这段代码的输出是什么？\nnew MyPromise(function (resolve) {\n  resolve(7);\n})\n  .then()\n  .then(function (v) {\n    console.log(v);\n  });',
        options: ['undefined', '7', 'pending', '报错'],
        answer: 1,
        explanation: '值穿透：第一个 then 没传回调，值 7 会原样透传给下一个 then，最终输出 7。'
      },
      {
        type: 'single',
        question: '这段代码的输出是什么？\nnew MyPromise(function (resolve) {\n  resolve(1);\n})\n  .then(function (v) { throw "boom"; })\n  .then(null, function (err) {\n    console.log(err);\n  });',
        options: ['1', 'boom', 'undefined', '同步报错终止脚本'],
        answer: 1,
        explanation: '回调抛错会被 run 内的 try catch 捕获并 reject 新 Promise，错误沿链传递，被下一个 then 的 onRejected 接住，输出 boom。'
      },
      {
        type: 'single',
        question: '这段代码（真实 Promise）的输出顺序是什么？\nconsole.log("sync");\nPromise.resolve().then(function () {\n  console.log("micro");\n});\nsetTimeout(function () {\n  console.log("macro");\n}, 0);',
        options: ['sync micro macro', 'sync macro micro', 'micro macro sync', 'macro sync micro'],
        answer: 0,
        explanation: '同步代码先执行，then 的回调是微任务，优先于 setTimeout 的宏任务执行，所以顺序是 sync、micro、macro。'
      },
      {
        type: 'judge',
        question: 'then 的回调返回一个普通值时，then 返回的新 Promise 会以这个值进入 fulfilled 状态。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。回调返回值 x 会作为新 Promise 的 resolve 值，对应实现里 run 函数中的 resolve(x)。'
      },
      {
        type: 'multiple',
        question: '关于 Promise 解析过程（回调返回 Promise 的情况），以下说法正确的有哪些？（多选）',
        options: ['新 Promise 会等待返回的 Promise 落定后再决定自己的状态', '返回 thenable 对象同样会被展开处理', '需要递归解析直到拿到非 Promise 的值', '新 Promise 直接把返回的 Promise 当普通值 resolve'],
        answer: [0, 1, 2],
        explanation: '前三项是规范要求；若直接把 Promise 当普通值 resolve，下一个 then 拿到的将是 Promise 对象本身而不是其结果，第四项错误。'
      },
      {
        type: 'multiple',
        question: '关于手写 Promise 中的错误与 reject，以下说法正确的有哪些？（多选）',
        options: ['executor 同步抛错时应自动 reject', 'then 回调抛错会 reject 该 then 返回的新 Promise', '错误被 onRejected 处理后，后续的 then 还能正常拿到其返回值', '状态变为 rejected 后还能再调用 resolve 改成 fulfilled'],
        answer: [0, 1, 2],
        explanation: '前三项正确；状态不可逆，rejected 之后 resolve 无效，第四项错误。'
      },
      {
        type: 'single',
        question: '这段代码的输出顺序是什么？\nconsole.log("a");\nnew MyPromise(function (resolve) {\n  resolve(1);\n})\n  .then(function () { console.log("t1"); })\n  .then(function () { console.log("t2"); });\nconsole.log("b");',
        options: ['a t1 t2 b', 'a b t1 t2', 'a t1 b t2', '报错'],
        answer: 1,
        explanation: '两个 then 的回调都被 setTimeout 包成异步任务，要等同步代码结束后按注册顺序执行，输出 a、b、t1、t2。'
      },
      {
        type: 'judge',
        question: 'executor 中同步调用 resolve 后，即便 then 在之后才被调用，已保存的 value 也不会丢失，回调仍会被安排执行。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。状态已是 fulfilled 时 then 会直接以保存的 value 安排回调异步执行，这就是状态与值分离保存的意义。'
      },
      {
        type: 'single',
        question: '这段代码的输出是什么？\nnew MyPromise(function (resolve, reject) {\n  reject("e");\n})\n  .then(null, function (r) { return "fixed"; })\n  .then(function (v) { console.log(v); });',
        options: ['e', 'fixed', 'undefined', '报错'],
        answer: 1,
        explanation: '第一个 then 的 onRejected 捕获错误并返回 "fixed"，该返回值作为新 Promise 的 resolve 值，链恢复为 fulfilled，输出 fixed。'
      },
      {
        type: 'single',
        question: '下面哪个 MyPromise 实现存在 bug？',
        options: ['then 的回调用 setTimeout 包一层异步执行', 'pending 时把回调存入数组等待状态改变', 'resolve 中不判断 state，每次都直接改写状态和 value', 'then 返回一个新的 MyPromise 实例'],
        answer: 2,
        explanation: '不判断 state 会导致状态可被反复改写，违背“状态不可逆、resolve 只生效一次”的铁律，必须先判断 state 是否为 pending。'
      },
      {
        type: 'judge',
        question: '在同一个 Promise 实例上连续调用两次 then，两个 onFulfilled 回调都会被注册并各自执行一次。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。每次 then 都是独立注册：pending 时各自推入回调数组，已落定时各自安排执行，两次回调互不影响。'
      },
      {
        type: 'judge',
        question: '手写实现用 setTimeout 模拟 then 回调的异步执行，与真实 Promise 的微任务在事件循环中的执行时机完全相同。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。setTimeout 是宏任务，会在微任务之后执行；真实 Promise 回调是微任务，先于宏任务执行，两者时机不同只是都满足“异步”。'
      },
      {
        type: 'multiple',
        question: '关于 Promise 状态机的铁律，以下说法正确的有哪些？（多选）',
        options: ['状态只有 pending、fulfilled、rejected 三种', '状态只能从 pending 单向转换且不可逆', 'resolve 和 reject 各只能生效一次', 'fulfilled 状态可以再调用 reject 转成 rejected'],
        answer: [0, 1, 2],
        explanation: '前三项是状态机的核心约束；fulfilled 之后 reject 无效，状态不可能再变，第四项错误。'
      },
      {
        type: 'multiple',
        question: '关于 then 实现链式调用，以下说法正确的有哪些？（多选）',
        options: ['then 必须返回一个新的 Promise', '回调返回普通值时作为新 Promise 的 resolve 值', '回调抛错时新 Promise 进入 rejected 状态', '链式调用中的所有 then 共享同一个 Promise 实例'],
        answer: [0, 1, 2],
        explanation: '前三项正确；每个 then 都返回独立的新 Promise，状态互不影响，共享同一实例无法实现状态隔离，第四项错误。'
      },
      {
        type: 'single',
        question: '这段代码的输出是什么？\nnew MyPromise(function (resolve, reject) {\n  reject(5);\n})\n  .then(function (v) { return v * 2; })\n  .then(null, function (e) { console.log(e); });',
        options: ['10', '5', 'undefined', '报错'],
        answer: 1,
        explanation: '第一个 then 没有提供 onRejected，reason 发生穿透原样下传，被第二个 then 的 onRejected 接住，输出 5。'
      },
      {
        type: 'multiple',
        question: '关于 Promise 的值穿透，以下说法正确的有哪些？（多选）',
        options: ['onFulfilled 不是函数时 value 原样向下传递', 'onRejected 不是函数时 reason 原样向下传递', 'then().then(cb) 中 cb 仍能拿到最初的值', '值穿透会把 Promise 的状态重置回 pending'],
        answer: [0, 1, 2],
        explanation: '前三项是值穿透的正确描述；穿透只传递值或原因，不会改变已落定的状态，第四项错误。'
      }
    ]
  },
  {
    id: 'coding-04',
    title: '手写防抖与节流',
    summary: '掌握 debounce 与 throttle 实现',
    minutes: 13,
    sections: [
      {
        heading: '防抖与节流的区别',
        text: '防抖（debounce）：事件频繁触发时，只执行最后一次。原理是每次触发都清掉上一个定时器再重新计时，只有停止触发超过设定时间，函数才真正执行。典型场景：搜索框输入联想、窗口 resize。\n节流（throttle）：事件频繁触发时，按固定频率执行，比如每隔 200 毫秒最多执行一次。原理是记录上次执行时间，距现在不足间隔就忽略。典型场景：滚动加载、按钮防连点。\n一句话记忆：防抖是“等你停下来我再做”，节流是“再急也按节奏来”。',
        code: '// 场景对照\nwindow.addEventListener("resize", debounce(layout, 300)); // 停手才重排\nwindow.addEventListener("scroll", throttle(loadMore, 200)); // 每 200ms 最多加载一次',
        lang: 'js'
      },
      {
        heading: '手写防抖与节流完整实现',
        text: '防抖实现要点：用闭包保存 timer，返回的函数里先 clearTimeout 再重新 setTimeout。两个易错点：一是 this，定时器回调里 this 会丢失，要提前用变量保存返回函数的 this；二是参数，要用 arguments 保存并通过 apply 传进去，否则事件对象等参数拿不到。\n节流时间戳版要点：闭包保存上次执行时间 lastTime，触发时比较当前时间与 lastTime 的差值，达到间隔才执行并更新 lastTime。时间戳版第一次立即执行，定时器版第一次会延迟，面试要能说出区别。',
        code: 'function debounce(fn, delay) {\n  var timer = null;\n  return function () {\n    var context = this;   // 保存 this\n    var args = arguments; // 保存参数\n    clearTimeout(timer);  // 清掉上次计时\n    timer = setTimeout(function () {\n      fn.apply(context, args);\n    }, delay);\n  };\n}\n\nfunction throttle(fn, interval) {\n  var lastTime = 0;\n  return function () {\n    var context = this;\n    var args = arguments;\n    var now = Date.now();\n    if (now - lastTime >= interval) {\n      lastTime = now;     // 更新执行时间\n      fn.apply(context, args);\n    }\n  };\n}',
        lang: 'js'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: '这段代码的输出是什么？\nvar count = 0;\nvar fn = debounce(function () { count++; }, 100);\nfn(); fn(); fn();\nsetTimeout(function () { console.log(count); }, 300);',
        options: ['0', '1', '3', '不确定'],
        answer: 1,
        explanation: '连续三次调用互相清掉定时器，只有最后一次的计时器存活，100ms 后执行一次，count 为 1。'
      },
      {
        type: 'single',
        question: '下面哪个节流实现存在 bug？',
        options: ['用 lastTime 记录上次执行时间，间隔不够就 return', '用闭包保存 lastTime，执行后更新 lastTime = Date.now()', '每次触发都 setTimeout 执行 fn，且从不清除或判断间隔', '用 timer 标记：定时器存在就忽略触发，执行后清空'],
        answer: 2,
        explanation: '节流的核心是限制频率，每次都直接 setTimeout 执行且无任何间隔判断，等于完全没有节流效果，存在 bug。'
      },
      {
        type: 'judge',
        question: '防抖函数返回的新函数中，需要提前保存 this 和 arguments，否则定时器回调里会丢失原来的上下文和参数。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。setTimeout 的回调是全局调用，this 会指向 window，必须用闭包变量保存后用 apply 还原。'
      },
      {
        type: 'multiple',
        question: '以下哪些场景适合用防抖而不是节流？（多选）',
        options: ['搜索框输入联想请求', '页面滚动时持续加载更多', '窗口 resize 结束后重新计算布局', '按钮防止重复提交'],
        answer: [0, 2],
        explanation: '输入联想和 resize 都希望“停下来再做”，用防抖；滚动加载需要持续按节奏触发用节流，防重复提交通常用节流或禁用按钮。'
      },
      {
        type: 'single',
        question: '这段代码的输出是什么？\nvar count = 0;\nvar fn = throttle(function () { count++; }, 100);\nfn(); fn(); fn();\nconsole.log(count);',
        options: ['0', '1', '3', '不确定'],
        answer: 1,
        explanation: '时间戳版节流第一次立即执行，后两次距 lastTime 不足 100ms 被忽略，同步输出时 count 为 1。'
      },
      {
        type: 'single',
        question: '补全防抖实现的第 6 行，应该选哪段？\n1: function debounce(fn, delay) {\n2:   var timer = null;\n3:   return function () {\n4:     var context = this;\n5:     var args = arguments;\n6:     __________\n7:     timer = setTimeout(function () {\n8:       fn.apply(context, args);\n9:     }, delay);\n10:   };\n11: }',
        options: ['clearTimeout(timer);', 'timer = null;', 'clearInterval(timer);', 'fn.apply(context, args);'],
        answer: 0,
        explanation: '防抖的关键是每次触发先清掉上一个定时器再重新计时，只有停止触发后计时器才会真正执行。'
      },
      {
        type: 'judge',
        question: '节流的时间戳版会在第一次触发时立即执行，而定时器版第一次触发会延迟一个间隔才执行。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。时间戳版 lastTime 初始为 0，第一次比较必然通过立即执行；定时器版要等定时器到点才执行，这是两者的经典区别。'
      },
      {
        type: 'judge',
        question: '防抖在连续快速触发时，每次触发都重新计时，因此函数会被执行多次。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。每次触发都 clearTimeout 清掉上一个计时器，只有最后一次触发的计时器存活，函数最终只执行一次。'
      },
      {
        type: 'multiple',
        question: '关于防抖与节流的实现，以下说法正确的有哪些？（多选）',
        options: ['防抖只执行最后一次触发', '节流按固定频率执行，间隔内的触发被忽略', '两者都用闭包保存内部状态（timer 或 lastTime）', '防抖适合按钮防连点，节流适合搜索联想'],
        answer: [0, 1, 2],
        explanation: '前三项正确；场景恰好说反了，搜索联想适合防抖，按钮防连点适合节流。'
      },
      {
        type: 'single',
        question: '这段代码的输出是什么？\nvar count = 0;\nvar fn = debounce(function () { count++; }, 100);\nfn();\nsetTimeout(function () { fn(); }, 200);\nsetTimeout(function () { console.log(count); }, 400);',
        options: ['0', '1', '2', '3'],
        answer: 2,
        explanation: '两次触发间隔 200ms 大于 100ms 延迟，第一次的计时器在 100ms 时已执行，第二次又在 300ms 时执行，count 为 2。'
      },
      {
        type: 'judge',
        question: '带 leading 选项的防抖变体会在连续触发的第一次立即执行，之后的连续触发只重置计时器。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。leading 变体在计时器不存在时立即执行一次并启动计时，后续触发只 clearTimeout 重计，直到停下后进入下一轮。'
      },
      {
        type: 'single',
        question: '这段代码的输出是什么？\nvar count = 0;\nvar fn = throttle(function () { count++; }, 100);\nfn();\nsetTimeout(function () { fn(); }, 150);\nsetTimeout(function () { console.log(count); }, 300);',
        options: ['0', '1', '2', '3'],
        answer: 2,
        explanation: '时间戳版节流第一次立即执行，150ms 时距上次已超过 100ms 再执行一次，300ms 时输出 count 为 2。'
      },
      {
        type: 'single',
        question: '补全时间戳版节流的第 7 行，应该选哪段？\n1: function throttle(fn, interval) {\n2:   var lastTime = 0;\n3:   return function () {\n4:     var context = this;\n5:     var args = arguments;\n6:     var now = Date.now();\n7:     __________\n8:       lastTime = now;\n9:       fn.apply(context, args);\n10:     }\n11:   };\n12: }',
        options: ['if (now - lastTime >= interval) {', 'if (now - lastTime <= interval) {', 'if (lastTime === 0) {', 'if (now > interval) {'],
        answer: 0,
        explanation: '只有当前时间与上次执行时间的差值达到间隔才执行并更新 lastTime，差值不足则忽略本次触发。'
      },
      {
        type: 'multiple',
        question: '关于定时器版节流，以下说法正确的有哪些？（多选）',
        options: ['用闭包中的 timer 标记是否存在计时器', '计时器存在期间的触发会被忽略', '第一次触发会延迟一个间隔才执行', '每次触发都重新创建计时器并立即执行'],
        answer: [0, 1, 2],
        explanation: '定时器版靠 timer 是否存在来拦截触发，计时期间触发被忽略，首次执行要等定时器到点；第四项描述的不是节流。'
      },
      {
        type: 'single',
        question: '假设使用定时器版节流（timer 存在期间触发被忽略），这段代码的输出是什么？\nvar count = 0;\nvar fn = throttleByTimer(function () { count++; }, 100);\nfn();\nconsole.log(count);',
        options: ['0', '1', '100', '报错'],
        answer: 0,
        explanation: '定时器版第一次触发只是启动计时器，要等 100ms 到点才执行，同步输出时 count 还是 0，这与时间戳版首次立即执行形成对比。'
      },
      {
        type: 'single',
        question: '补全定时器版节流的第 6 行，应该选哪段？\n1: function throttle(fn, interval) {\n2:   var timer = null;\n3:   return function () {\n4:     var context = this;\n5:     var args = arguments;\n6:     __________\n7:     timer = setTimeout(function () {\n8:       fn.apply(context, args);\n9:       timer = null;\n10:     }, interval);\n11:   };\n12: }',
        options: ['if (timer) return;', 'if (!timer) return;', 'clearTimeout(timer);', 'timer = 0;'],
        answer: 0,
        explanation: '定时器版的拦截方式是 timer 存在期间直接 return 忽略触发，等定时器到点执行后把 timer 置回 null，才允许下一轮；clearTimeout 是防抖的思路。'
      },
      {
        type: 'judge',
        question: '防抖返回的函数中如果不先保存 arguments，定时器回调里就拿不到触发时传入的参数（如事件对象）。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。setTimeout 回调执行时外层函数的 arguments 已不可用，必须用闭包变量保存后通过 apply 传给原函数。'
      },
      {
        type: 'judge',
        question: '时间戳版节流在触发停止后，不会再补执行最后一次被忽略的触发（缺少 trailing 效果）。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。时间戳版只在触发瞬间判断间隔，间隔内的触发直接被丢弃且不会安排补执行；想要尾部补执行需要结合定时器做 trailing 变体。'
      },
      {
        type: 'multiple',
        question: '关于防抖中 this 与参数的处理，以下说法正确的有哪些？（多选）',
        options: ['setTimeout 的普通回调中 this 默认指向全局对象', '需要用闭包变量提前保存返回函数的 this', '用 fn.apply(context, args) 执行可还原 this 与参数', '定时器回调里直接使用 this 也能拿到正确的上下文'],
        answer: [0, 1, 2],
        explanation: '前三项正确；普通函数形式的定时器回调 this 会丢失，直接使用 this 是防抖实现的经典 bug，第四项错误。'
      },
      {
        type: 'multiple',
        question: '关于时间戳版与定时器版节流的区别，以下说法正确的有哪些？（多选）',
        options: ['时间戳版第一次触发立即执行', '定时器版第一次触发会延迟一个间隔才执行', '时间戳版停止触发后没有尾部补执行', '两种实现的行为完全一致，可以互相替换'],
        answer: [0, 1, 2],
        explanation: '前三项是两者的经典区别；首尾执行时机不同决定了它们不能完全互换，面试常要求说出这一点，第四项错误。'
      },
      {
        type: 'single',
        question: '这段代码的输出是什么？\nvar log = [];\nvar fn = debounce(function (x) { log.push(x); }, 100);\nfn(1);\nfn(2);\nsetTimeout(function () { console.log(log.join(",")); }, 300);',
        options: ['"1,2"', '"2"', '"1"', '""'],
        answer: 1,
        explanation: '两次触发只保留最后一次的定时器，执行时用的是第二次触发保存的 args，log 只有 "2"。'
      },
      {
        type: 'judge',
        question: '防抖的 delay 即使设为 0，函数也会在当前同步代码执行完之后才执行，因为 setTimeout 是异步的。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。setTimeout(fn, 0) 仍会把回调放入宏任务队列，当前同步代码结束后才会执行，所以防抖返回值无法同步拿到执行结果。'
      },
      {
        type: 'single',
        question: '这段代码的输出是什么？\nvar obj = { n: 1 };\nobj.go = throttle(function () { this.n++; }, 100);\nobj.go();\nconsole.log(obj.n);',
        options: ['1', '2', 'NaN', '报错'],
        answer: 1,
        explanation: '时间戳版节流第一次立即执行，且实现中用 fn.apply(context, args) 还原了 this，obj.n 从 1 变为 2。'
      },
      {
        type: 'single',
        question: '下面哪个防抖实现存在 bug？',
        options: ['用闭包保存 timer，触发时先 clearTimeout 再重新计时', '定时器回调中直接调用 fn()，不使用保存的 context 和 args', '提前用变量保存返回函数的 this 和 arguments', '用 fn.apply(context, args) 还原执行上下文和参数'],
        answer: 1,
        explanation: '定时器回调是全局调用，直接 fn() 会丢失 this 和参数（如事件对象），必须用闭包保存后 apply 还原。'
      },
      {
        type: 'judge',
        question: '只要触发频率足够高，节流后的函数执行总次数可以超过设定的频率上限。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。节流的核心就是在时间窗口内最多执行一次，无论触发多频繁，执行频率都不会超过设定上限。'
      },
      {
        type: 'judge',
        question: '防抖与节流都需要借助闭包来保存内部状态（timer 或 lastTime），使状态在多次调用之间保持。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。返回的函数通过闭包引用外层的 timer 或 lastTime，每次调用才能读到上一次留下的状态，这是两者共同的实现基础。'
      },
      {
        type: 'multiple',
        question: '以下哪些场景适合用节流而不是防抖？（多选）',
        options: ['页面滚动时按节奏加载更多', '按钮防止短时间重复提交', '拖拽过程中按固定频率上报位置', '搜索框输入停止后再发起联想请求'],
        answer: [0, 1, 2],
        explanation: '前三项都需要“按固定节奏持续响应”，适合节流；搜索联想是“停下来再做”，适合防抖，第四项错误。'
      },
      {
        type: 'multiple',
        question: '关于防抖的执行时机变体，以下说法正确的有哪些？（多选）',
        options: ['默认防抖在停止触发 delay 后才执行（trailing）', 'leading 变体在连续触发的第一次立即执行', 'leading 与 trailing 可以组合成首尾都执行的变体', '防抖能保证每一次触发都会执行一次原函数'],
        answer: [0, 1, 2],
        explanation: '前三项正确；防抖恰恰会吞掉中间的所有触发，不可能每次触发都执行，第四项错误。'
      },
      {
        type: 'single',
        question: '假设使用定时器版节流（timer 存在期间触发被忽略，到点执行后置回 null），这段代码的输出是什么？\nvar count = 0;\nvar fn = throttleByTimer(function () { count++; }, 100);\nfn();\nsetTimeout(fn, 50);\nsetTimeout(fn, 150);\nsetTimeout(function () { console.log(count); }, 300);',
        options: ['0', '1', '2', '3'],
        answer: 2,
        explanation: '0ms 启动计时器，100ms 执行第一次；50ms 的触发被忽略；150ms 时 timer 已为 null，再次启动计时器，250ms 执行第二次，300ms 输出 2。'
      },
      {
        type: 'multiple',
        question: '关于防抖与节流实现的共同点，以下说法正确的有哪些？（多选）',
        options: ['两者都用闭包保存内部状态', '执行原函数时用 apply 还原 this 与参数', '返回的都是一个新函数，替换原事件处理函数', '两者在第一次触发时都会立即执行原函数'],
        answer: [0, 1, 2],
        explanation: '前三项是共同实现要点；默认防抖首次触发只启动计时器不会立即执行，只有时间戳版节流首次立即执行，第四项错误。'
      }
    ]
  },
  {
    id: 'coding-05',
    title: '手写数组方法：map、reduce、flat 与去重',
    summary: '手写常用数组方法与去重方案',
    minutes: 15,
    sections: [
      {
        heading: '手写 myMap 与 myReduce',
        text: 'myMap 的思路：新建一个空数组，遍历原数组，把每个元素、下标、原数组传给回调，把回调返回值依次 push 进新数组，最后返回。要点是不能修改原数组。\nmyReduce 稍复杂：要处理第二个参数 initial 可省略的情况——省略时累加器取数组第一个元素，遍历从下标 1 开始；否则累加器取 initial，从下标 0 开始。每一轮把累加器、当前元素、下标、原数组传给回调，回调返回值成为新的累加器。易错点：忘记区分起始下标会导致重复累加第一个元素。',
        code: 'Array.prototype.myMap = function (fn) {\n  var result = [];\n  for (var i = 0; i < this.length; i++) {\n    result.push(fn(this[i], i, this));\n  }\n  return result;\n};\n\nArray.prototype.myReduce = function (fn, initial) {\n  var hasInit = initial !== undefined;\n  var acc = hasInit ? initial : this[0];\n  var start = hasInit ? 0 : 1;\n  for (var i = start; i < this.length; i++) {\n    acc = fn(acc, this[i], i, this);\n  }\n  return acc;\n};\n\nconsole.log([1, 2, 3].myMap(function (x) { return x * 2; })); // [2, 4, 6]\nconsole.log([1, 2, 3].myReduce(function (a, b) { return a + b; })); // 6',
        lang: 'js'
      },
      {
        heading: '手写 myFlat 与数组去重',
        text: 'myFlat 用递归：遍历数组，如果元素是数组且当前深度大于 0，就递归拍平它（深度减 1）并用 concat 合并；否则直接 push。depth 默认为 1，传 Infinity 可以无限拍平。\n数组去重记三种：一是 Set 一行搞定，Array.from(new Set(arr))；二是 filter 加 indexOf，只保留第一次出现的元素；三是 reduce 加 includes 逐个收集。Set 最简洁是首选答案，但要知道它无法去重对象引用（两个内容相同的对象是不同的引用）。',
        code: 'Array.prototype.myFlat = function (depth) {\n  var d = depth === undefined ? 1 : depth;\n  var result = [];\n  for (var i = 0; i < this.length; i++) {\n    var item = this[i];\n    if (Array.isArray(item) && d > 0) {\n      result = result.concat(item.myFlat(d - 1));\n    } else {\n      result.push(item);\n    }\n  }\n  return result;\n};\n\n// 数组去重三种写法\nvar arr = [1, 2, 2, 3, 1];\nArray.from(new Set(arr));                 // [1, 2, 3]\narr.filter(function (x, i) { return arr.indexOf(x) === i; });\narr.reduce(function (acc, x) {\n  if (!acc.includes(x)) acc.push(x);\n  return acc;\n}, []);',
        lang: 'js'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: '这段代码的输出是什么？\nvar r = [1, 2, 3].myReduce(function (acc, x) {\n  return acc + x;\n}, 10);\nconsole.log(r);',
        options: ['6', '10', '16', '报错'],
        answer: 2,
        explanation: '传了初始值 10，累加器从 10 开始，10 + 1 + 2 + 3 = 16。'
      },
      {
        type: 'single',
        question: '下面哪个 myReduce 实现存在 bug？',
        options: ['无初始值时从下标 1 开始遍历，累加器取 this[0]', '有初始值时从下标 0 开始遍历', '无初始值时从下标 0 开始遍历，累加器取 this[0]', '每轮用回调返回值更新累加器'],
        answer: 2,
        explanation: '无初始值时累加器已经是第一个元素，再从下标 0 遍历会把第一个元素重复累加一次，这是经典 bug，应从下标 1 开始。'
      },
      {
        type: 'judge',
        question: 'Array.from(new Set(arr)) 可以去重对象数组中内容相同但引用不同的对象。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。Set 去重基于引用比较（对象用 SameValueZero），两个内容相同的不同对象是两个不同引用，无法被去重。'
      },
      {
        type: 'multiple',
        question: '关于手写 myFlat，以下哪些说法是正确的？（多选）',
        options: ['depth 默认值为 1', '用 Array.isArray 判断元素是否为数组', '递归时深度应减 1 传入', '只能拍平一层，无法处理深层嵌套'],
        answer: [0, 1, 2],
        explanation: 'myFlat 默认 depth 为 1，用 Array.isArray 判断，递归时 d - 1 控制深度；传足够大的深度（如 Infinity）可以处理任意层嵌套。'
      },
      {
        type: 'single',
        question: '这段代码的输出是什么？\nconsole.log([1, 2, 3].myMap(function (x, i) { return x + i; }));',
        options: ['[1, 2, 3]', '[1, 3, 5]', '[2, 4, 6]', '[0, 1, 2]'],
        answer: 1,
        explanation: '回调收到元素和下标，x + i 分别为 1+0、2+1、3+2，结果是 [1, 3, 5]。'
      },
      {
        type: 'single',
        question: '这段代码的输出是什么？\nconsole.log([1, [2, [3, [4]]]].myFlat(2));',
        options: ['[1, 2, 3, 4]', '[1, 2, 3, [4]]', '[1, 2, [3, [4]]]', '报错'],
        answer: 1,
        explanation: 'depth 为 2 只拍平两层：第二层递归时 d 已为 0 不再展开，[4] 保持嵌套，结果是 [1, 2, 3, [4]]。'
      },
      {
        type: 'judge',
        question: '手写 myMap 时直接修改原数组的元素再返回原数组，也是可以接受的实现。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。map 的语义是不修改原数组、返回一个新数组，正确实现必须新建空数组逐个 push 回调返回值。'
      },
      {
        type: 'judge',
        question: 'myFlat 传入 Infinity 作为 depth 时，可以拍平任意深度的嵌套数组。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。Infinity 减 1 仍是 Infinity，递归条件 d > 0 恒成立，会一直拍平到没有嵌套数组为止。'
      },
      {
        type: 'multiple',
        question: '以下哪些是可行的数组去重方案？（多选）',
        options: ['Array.from(new Set(arr))', 'filter 配合 indexOf 只保留首次出现的元素', 'reduce 配合 includes 逐个收集不重复元素', 'sort 之后直接返回原数组'],
        answer: [0, 1, 2],
        explanation: '前三种都是常见去重写法；sort 只排序不去重，且会原地修改数组，直接用它去重是错误的。'
      },
      {
        type: 'single',
        question: '补全 myReduce 的第 4 行，应该选哪段？\n1: Array.prototype.myReduce = function (fn, initial) {\n2:   var hasInit = initial !== undefined;\n3:   var acc = hasInit ? initial : this[0];\n4:   __________\n5:   for (var i = start; i < this.length; i++) {\n6:     acc = fn(acc, this[i], i, this);\n7:   }\n8:   return acc;\n9: };',
        options: ['var start = 0;', 'var start = hasInit ? 0 : 1;', 'var start = hasInit ? 1 : 0;', 'var start = 1;'],
        answer: 1,
        explanation: '有初始值时从下标 0 开始累加所有元素；无初始值时累加器已是 this[0]，必须从下标 1 开始，避免重复累加第一个元素。'
      },
      {
        type: 'single',
        question: '这段代码的输出是什么？\nvar r = [1, 2, 3].myReduce(function (acc, x) {\n  return acc + x;\n});\nconsole.log(r);',
        options: ['6', '9', '3', '报错'],
        answer: 0,
        explanation: '没有传初始值，累加器取第一个元素 1，从下标 1 开始累加，1 + 2 + 3 = 6。'
      },
      {
        type: 'judge',
        question: 'myMap 的回调会收到三个参数：当前元素、当前下标和原数组本身。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。这与原生 map 的回调签名一致，实现时用 fn(this[i], i, this) 传入。'
      },
      {
        type: 'single',
        question: '这段代码的输出是什么？\nconsole.log([[1, 2], [3]].myFlat());',
        options: ['[1, 2, 3]', '[[1, 2], [3]]', '[1, 2, [3]]', '报错'],
        answer: 0,
        explanation: 'depth 默认为 1，两个子数组各被拍平一层，元素合并后结果是 [1, 2, 3]。'
      },
      {
        type: 'multiple',
        question: '关于 myMap 的正确实现，以下说法正确的有哪些？（多选）',
        options: ['新建空数组存放结果，不修改原数组', '回调依次收到元素、下标、原数组', '把回调返回值依次 push 进新数组', '用 for in 遍历数组是推荐写法'],
        answer: [0, 1, 2],
        explanation: '前三项正确；数组遍历应使用带下标的 for 循环，for in 会遍历到原型链上的可枚举属性且顺序不保证，不是推荐写法。'
      },
      {
        type: 'single',
        question: '这段代码的输出是什么？\nconsole.log([1, [2, [3]]].myFlat(Infinity));',
        options: ['[1, 2, 3]', '[1, 2, [3]]', '[1, [2, [3]]]', '报错'],
        answer: 0,
        explanation: 'Infinity 减 1 仍是 Infinity，递归条件 d > 0 恒成立，所有嵌套层都会被拍平，结果是 [1, 2, 3]。'
      },
      {
        type: 'single',
        question: '这段代码的输出是什么？\nvar arr = [4, 2, 4, 3];\nvar r = arr.filter(function (x, i) {\n  return arr.indexOf(x) === i;\n});\nconsole.log(r);',
        options: ['[4, 2, 3]', '[4, 2, 4, 3]', '[4, 4]', '[2, 3]'],
        answer: 0,
        explanation: 'indexOf 返回元素第一次出现的下标，只有下标与 i 相等的元素被保留，下标为 2 的重复 4 被过滤掉，结果是 [4, 2, 3]。'
      },
      {
        type: 'judge',
        question: '对空数组调用未传初始值的 myReduce 时，累加器会取到 undefined，原生 reduce 在这种情况会直接抛出 TypeError。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。空数组无初始值时没有任何元素可作为累加器，原生规范要求抛错，手写实现至少要意识到这个边界情况。'
      },
      {
        type: 'judge',
        question: 'myMap 通过 push 逐个收集回调返回值构造新数组，返回数组的长度与原数组保持一致。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。map 是一对一映射，每个元素都产生一个新元素，长度不变；长度会变化的是 filter 等方法。'
      },
      {
        type: 'multiple',
        question: '关于使用 Set 去重，以下说法正确的有哪些？（多选）',
        options: ['Array.from(new Set(arr)) 是最简洁的去重写法', 'Set 的重复判断基于 SameValueZero 比较', '数组中的多个 NaN 用 Set 去重后只保留一个', 'Set 能去掉内容相同但引用不同的对象'],
        answer: [0, 1, 2],
        explanation: '前三项正确（SameValueZero 认为 NaN 等于 NaN）；对象按引用比较，内容相同但引用不同的对象不会被去重，第四项错误。'
      },
      {
        type: 'multiple',
        question: '关于 myFlat 递归实现的关键点，以下说法正确的有哪些？（多选）',
        options: ['非数组元素直接 push 进结果数组', '深度 d 减到 0 后子数组不再展开', '每层递归要把 d - 1 传下去', '必须用 JSON.parse(JSON.stringify()) 辅助拍平'],
        answer: [0, 1, 2],
        explanation: '前三项正确；拍平用递归加 concat 即可，JSON 方式与拍平无关还会丢失 undefined 等数据，第四项错误。'
      },
      {
        type: 'single',
        question: '这段代码的输出是什么？\nvar r = [1, 2, 3].myMap(function (x) { return x * x; });\nconsole.log(r[2]);',
        options: ['3', '6', '9', 'undefined'],
        answer: 2,
        explanation: 'myMap 把每个元素映射为它的平方，结果为 [1, 4, 9]，下标 2 处是 9。'
      },
      {
        type: 'judge',
        question: '手写 myReduce 用 initial !== undefined 判断是否有初始值，这与原生 reduce 按实参个数判断在传入 undefined 作为初始值时行为不同。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。原生 reduce(fn, undefined) 视为传了初始值（累加器就是 undefined），而 initial !== undefined 会把它当成未传，这是手写实现与原生行为的细微差别。'
      },
      {
        type: 'single',
        question: '这段代码的输出是什么？\nvar r = [[1], [2, 3], [4]].myFlat(1);\nconsole.log(r.length);',
        options: ['3', '4', '6', '报错'],
        answer: 1,
        explanation: 'depth 为 1 时每个子数组被拍平一层，元素合并为 [1, 2, 3, 4]，长度为 4。'
      },
      {
        type: 'single',
        question: '这段代码的输出是什么？\nvar r = [1, 2, 3].myReduce(function (acc, x) { return acc * x; }, 2);\nconsole.log(r);',
        options: ['6', '12', '8', '报错'],
        answer: 1,
        explanation: '有初始值 2，从下标 0 开始累乘：2 * 1 * 2 * 3 = 12。'
      },
      {
        type: 'judge',
        question: 'myFlat 中 result = result.concat(item.myFlat(d - 1)) 依赖 concat 返回新数组、不修改原数组的特性。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。concat 不会改变 result 本身，必须把拼接结果重新赋值给 result，这也是该实现中容易漏写赋值的细节。'
      },
      {
        type: 'judge',
        question: 'filter 配合 indexOf 的去重写法会改变数组中元素的先后顺序。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。filter 按原顺序遍历并保留首次出现的元素，去重结果保持原有先后顺序，只是过滤掉重复项。'
      },
      {
        type: 'multiple',
        question: '关于 myReduce 的实现细节，以下说法正确的有哪些？（多选）',
        options: ['有初始值时从下标 0 开始遍历', '无初始值时累加器取 this[0]、从下标 1 开始', '每轮回调的返回值会成为下一轮的累加器', 'myReduce 会直接修改原数组的元素'],
        answer: [0, 1, 2],
        explanation: '前三项正确；reduce 只读取原数组并返回累积结果，不修改原数组，第四项错误。'
      },
      {
        type: 'multiple',
        question: '关于 Set 去重的比较规则，以下说法正确的有哪些？（多选）',
        options: ['数组中的多个 NaN 去重后只保留一个', '基本类型按值比较，重复的数字 1 只保留一个', 'Set 认为字符串 "1" 与数字 1 是重复项', '内容相同的两个对象会被 Set 去重'],
        answer: [0, 1],
        explanation: 'SameValueZero 认为 NaN 等于 NaN、基本类型按值比较；字符串 "1" 与数字 1 类型不同不算重复，对象按引用比较也不会被去重。'
      },
      {
        type: 'single',
        question: '下面哪个 myMap 实现存在 bug？',
        options: ['新建空数组 result，遍历后逐个 push 回调返回值', '回调用 fn(this[i], i, this) 传入元素、下标、原数组', '直接修改 this[i] 的值，最后返回原数组 this', '用带下标的 for 循环遍历原数组'],
        answer: 2,
        explanation: 'map 的语义是返回新数组且不改原数组，直接修改 this[i] 并返回 this 既污染了原数组，也让新旧“两个”数组实为同一引用。'
      },
      {
        type: 'multiple',
        question: '关于 myFlat 的深度控制，以下说法正确的有哪些？（多选）',
        options: ['depth 不传时默认为 1', '只有 d > 0 且元素是数组时才递归展开', 'd 减到 0 后嵌套数组原样保留', 'myFlat 会原地修改调用它的数组'],
        answer: [0, 1, 2],
        explanation: '前三项正确；myFlat 通过新数组收集结果，不修改原数组，第四项错误。'
      }
    ]
  },
  {
    id: 'coding-06',
    title: '高频算法题：排序、双指针、回文与斐波那契',
    summary: '拿下面试最常考的四类算法',
    minutes: 18,
    sections: [
      {
        heading: '冒泡排序与排序思想',
        text: '冒泡排序：相邻两个元素比较，大的往后换，每一轮把当前最大值“冒泡”到末尾。外层循环 n - 1 轮，内层每轮比较到 length - 1 - i，因为末尾 i 个已经有序不用再比。\n易错点有三个：内层边界写错会越界或漏比；交换要用临时变量或解构；面试中记得先 slice 一份再排，避免修改入参数组，这是加分细节。时间复杂度 O(n^2)，小数据或几乎有序的场景够用，大数据量要知道快排、归并的思想。',
        code: 'function bubbleSort(arr) {\n  var a = arr.slice(); // 不修改原数组\n  for (var i = 0; i < a.length - 1; i++) {\n    for (var j = 0; j < a.length - 1 - i; j++) {\n      if (a[j] > a[j + 1]) {\n        var tmp = a[j];\n        a[j] = a[j + 1];\n        a[j + 1] = tmp;\n      }\n    }\n  }\n  return a;\n}\n\nconsole.log(bubbleSort([3, 1, 4, 1, 5])); // [1, 1, 3, 4, 5]',
        lang: 'js'
      },
      {
        heading: '双指针：回文判断与两数之和',
        text: '双指针是用两个下标从两端（或一快一慢）向中间走，把 O(n^2) 的暴力解法优化到 O(n)。\n回文判断：left 从 0 开始、right 从末尾开始，只要 left 小于 right 就比较两端字符，不等直接返回 false，每轮 left 加一、right 减一，全部相等返回 true。\n两数之和（无序数组）：用哈希表边遍历边存“元素到下标”的映射，对每个数检查 target 减去它的差值是否已在表中，在就返回两个下标。注意要先查再存，避免同一个元素被用两次。',
        code: 'function isPalindrome(str) {\n  var left = 0;\n  var right = str.length - 1;\n  while (left < right) {\n    if (str[left] !== str[right]) return false;\n    left++;\n    right--;\n  }\n  return true;\n}\n\nfunction twoSum(nums, target) {\n  var map = {};\n  for (var i = 0; i < nums.length; i++) {\n    var need = target - nums[i];\n    if (map[need] !== undefined) {\n      return [map[need], i];\n    }\n    map[nums[i]] = i; // 先查再存\n  }\n  return [];\n}\n\nconsole.log(isPalindrome("level")); // true\nconsole.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]',
        lang: 'js'
      },
      {
        heading: '斐波那契：递归、记忆化与迭代',
        text: '斐波那契数列：f(0) = 0，f(1) = 1，之后每项等于前两项之和。最直观的递归写法是 f(n) = f(n-1) + f(n-2)，但它有大量重复计算，时间复杂度 O(2^n)，n 稍大就卡死。\n优化方向两个：一是记忆化，用对象缓存算过的结果；二是迭代，用两个变量滚动保存前两项，从 2 循环到 n，时间 O(n)、空间 O(1)，是面试最佳答案。易错点：迭代时更新顺序不能错，要先算出新值 c = a + b，再令 a = b、b = c。',
        code: '// 迭代版（推荐）\nfunction fib(n) {\n  if (n <= 1) return n;\n  var a = 0;\n  var b = 1;\n  for (var i = 2; i <= n; i++) {\n    var c = a + b;\n    a = b;\n    b = c;\n  }\n  return b;\n}\n\n// 记忆化递归\nvar memo = {};\nfunction fibMemo(n) {\n  if (n <= 1) return n;\n  if (memo[n] !== undefined) return memo[n];\n  memo[n] = fibMemo(n - 1) + fibMemo(n - 2);\n  return memo[n];\n}\n\nconsole.log(fib(10)); // 55',
        lang: 'js'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: '这段代码的输出是什么？\nconsole.log(twoSum([3, 3], 6));',
        options: ['[0, 0]', '[0, 1]', '[1, 1]', '[]'],
        answer: 1,
        explanation: '先查再存保证不会重复使用同一个元素：i=0 时存入 3->0，i=1 时查到差值 3 已在表中，返回 [0, 1]。'
      },
      {
        type: 'single',
        question: '补全冒泡排序的第 3 行（内层循环条件），应该选哪段？\n1: for (var i = 0; i < a.length - 1; i++) {\n2:   // 末尾 i 个元素已排好\n3:   __________\n4:     if (a[j] > a[j + 1]) { /* 交换 */ }\n5:   }\n6: }',
        options: ['for (var j = 0; j < a.length; j++) {', 'for (var j = 0; j < a.length - 1 - i; j++) {', 'for (var j = i; j < a.length; j++) {', 'for (var j = a.length - 1; j > 0; j--) {'],
        answer: 1,
        explanation: '每轮结束后末尾 i 个已有序，内层只需比到 length - 1 - i，再往后比会越界访问 a[j+1] 或做无用比较。'
      },
      {
        type: 'judge',
        question: '纯递归版斐波那契 f(n) = f(n-1) + f(n-2) 的时间复杂度是 O(n)，效率很高。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。纯递归存在大量重复计算，时间复杂度约 O(2^n)，需用记忆化或迭代优化到 O(n)。'
      },
      {
        type: 'multiple',
        question: '以下哪些实现是正确的回文判断？（多选）',
        options: ['left、right 双指针从两端向中间比较，不等即返回 false', '将字符串反转后与原字符串比较是否相等', '转成数组后用 every 比较每个位置与对称位置', '从中间向两端递归比较每个字符'],
        answer: [0, 1, 2],
        explanation: '双指针、反转比较、every 对称比较都是正确思路；从中间向两端比较方向反了，无法正确判断回文。'
      },
      {
        type: 'single',
        question: '这段代码的输出是什么？\nconsole.log(isPalindrome("abba"));',
        options: ['true', 'false', 'undefined', '报错'],
        answer: 0,
        explanation: '双指针比较 a 与 a、b 与 b 都相等，left 不小于 right 后循环结束，返回 true。'
      },
      {
        type: 'single',
        question: '这段代码的输出是什么？\nconsole.log(fib(6));',
        options: ['5', '8', '13', '6'],
        answer: 1,
        explanation: '数列为 0、1、1、2、3、5、8，第 6 项是 8；迭代版从 i = 2 滚动计算到 i = 6 后返回 b。'
      },
      {
        type: 'judge',
        question: '冒泡排序每完成一轮外层循环，当前未排序部分的最大值就会被交换到末尾。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。这正是内层只需比较到 length - 1 - i 的原因：末尾 i 个元素已经有序，无需再比。'
      },
      {
        type: 'judge',
        question: 'twoSum 实现中先存后查（先把当前元素放进哈希表再查找差值），同样能保证结果正确。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。先存后查可能让同一个元素被自己匹配，例如 [3, 3] 目标 6 时 i = 0 就会查到自己，违反不能重复使用同一元素的要求。'
      },
      {
        type: 'multiple',
        question: '关于斐波那契数列的优化，以下说法正确的有哪些？（多选）',
        options: ['记忆化递归用缓存消除重复计算', '迭代版时间复杂度 O(n)、空间复杂度 O(1)', '纯递归版存在大量重复子问题，复杂度约 O(2^n)', '迭代版应先令 a = b，再计算 c = a + b'],
        answer: [0, 1, 2],
        explanation: '前三项正确；更新顺序不能错，必须先算 c = a + b，再令 a = b、b = c，先更新 a 会丢掉旧值导致结果错误。'
      },
      {
        type: 'single',
        question: '下面哪个冒泡排序实现存在 bug？',
        options: ['先 slice 拷贝一份再排序，不修改入参数组', '内层循环条件为 j < a.length - 1 - i，跳过已排好的末尾', '交换时不用临时变量，直接 a[j] = a[j + 1]; a[j + 1] = a[j]', '交换时用临时变量暂存 a[j] 再互换'],
        answer: 2,
        explanation: '不用临时变量时，a[j] 先被覆盖为 a[j + 1] 的值，随后 a[j + 1] 拿到的已不是原来的 a[j]，交换失败，这是经典 bug。'
      },
      {
        type: 'single',
        question: '这段代码的输出是什么？\nconsole.log(twoSum([3, 2, 4], 6));',
        options: ['[0, 1]', '[1, 2]', '[0, 2]', '[]'],
        answer: 1,
        explanation: 'i=0 时差值 3 不在表中，存入 3->0；i=1 时差值 4 不在表中，存入 2->1；i=2 时差值 2 已存在，返回 [map[2], i] 即 [1, 2]。'
      },
      {
        type: 'judge',
        question: '调用 isPalindrome("ab") 时，left 为 0、right 为 1，第一次比较两端字符不等就立即返回 false。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。str[0] 是 "a"、str[1] 是 "b"，不相等时循环内直接 return false，不再继续比较。'
      },
      {
        type: 'judge',
        question: '冒泡排序的时间复杂度是 O(n^2)，适合数据量较小或数组几乎有序的场景。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。冒泡是 O(n^2) 的排序，小数据或几乎有序时表现可接受，大数据量应选择快排、归并等 O(n log n) 算法。'
      },
      {
        type: 'multiple',
        question: '关于双指针技巧，以下说法正确的有哪些？（多选）',
        options: ['回文判断用左右指针从两端向中间收缩', '双指针常把 O(n^2) 的暴力比较优化到 O(n)', '回文判断的循环条件是 left < right，交错即结束', '回文判断中 left 与 right 每次必须同时移动两位'],
        answer: [0, 1, 2],
        explanation: '前三项正确；每轮 left 加一、right 减一即可，移动两位会跳过中间位置的比较，第四项错误。'
      },
      {
        type: 'single',
        question: '这段代码的输出是什么？\nconsole.log(bubbleSort([5, 3, 8, 1]).join(","));',
        options: ['"1,3,5,8"', '"5,3,8,1"', '"1,5,3,8"', '报错'],
        answer: 0,
        explanation: '冒泡排序逐轮把最大值交换到末尾，最终数组升序排列，join 后输出 "1,3,5,8"；且实现先 slice 拷贝，不影响入参数组。'
      },
      {
        type: 'single',
        question: '这段代码的输出是什么？\nconsole.log(isPalindrome("abca"));',
        options: ['true', 'false', '"abca"', '报错'],
        answer: 1,
        explanation: '两端比较：a 与 a 相等后 left 为 1、right 为 2，b 与 c 不等，立即返回 false。'
      },
      {
        type: 'single',
        question: '这段代码的输出是什么？\nconsole.log(twoSum([1, 5, 5], 10));',
        options: ['[0, 1]', '[1, 2]', '[2, 2]', '[]'],
        answer: 1,
        explanation: 'i=0 时存入 1->0；i=1 时差值 5 不在表中，存入 5->1；i=2 时差值 5 已存在，返回 [map[5], 2] 即 [1, 2]，先查再存避免了元素复用。'
      },
      {
        type: 'judge',
        question: '记忆化斐波那契用对象缓存已计算的结果，把时间复杂度从 O(2^n) 降到 O(n)。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。每个 n 只计算一次，后续直接查缓存，计算次数从指数级降到线性。'
      },
      {
        type: 'multiple',
        question: '关于冒泡排序的实现细节，以下说法正确的有哪些？（多选）',
        options: ['外层循环需要 n - 1 轮', '内层比较到 length - 1 - i，跳过已排序的末尾', '可以加“本轮无交换则提前退出”的标志来优化几乎有序的数组', '不使用临时变量也能正确完成两元素交换'],
        answer: [0, 1, 2],
        explanation: '前三项正确；不用临时变量直接赋值会覆盖原值导致交换失败（除非用解构等技巧），第四项错误。'
      },
      {
        type: 'multiple',
        question: '关于哈希法求解两数之和，以下说法正确的有哪些？（多选）',
        options: ['边遍历边建立“元素到下标”的映射', '对每个元素检查 target 减去它的差值是否已在表中', '必须先查再存，避免同一个元素被使用两次', '整体时间复杂度是 O(n^2)'],
        answer: [0, 1, 2],
        explanation: '前三项正确；哈希表把查找降到 O(1)，整体时间复杂度是 O(n)，第四项错误。'
      },
      {
        type: 'single',
        question: '这段代码的输出是什么？\nvar arr = [2, 1];\nvar r = bubbleSort(arr);\nconsole.log(arr.join(",") + "|" + r.join(","));',
        options: ['"1,2|1,2"', '"2,1|1,2"', '"2,1|2,1"', '报错'],
        answer: 1,
        explanation: '实现里先 arr.slice() 拷贝再排序，原数组保持 "2,1"，返回的新数组为 "1,2"，拼接输出 "2,1|1,2"。'
      },
      {
        type: 'judge',
        question: '冒泡排序若某一轮内层循环没有发生任何交换，说明数组已经有序，可以设置标志提前退出。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。一轮无交换意味着所有相邻元素都已按序排列，提前退出是对几乎有序数组的经典优化。'
      },
      {
        type: 'single',
        question: '这段代码的输出是什么？\nconsole.log(isPalindrome("a"));',
        options: ['true', 'false', 'undefined', '报错'],
        answer: 0,
        explanation: '单字符时 left 为 0、right 为 0，left < right 不成立，循环体不执行，直接返回 true。'
      },
      {
        type: 'single',
        question: '这段代码的输出是什么？\nconsole.log(fib(8));',
        options: ['13', '21', '34', '8'],
        answer: 1,
        explanation: '数列为 0、1、1、2、3、5、8、13、21，第 8 项是 21；迭代版滚动更新 a、b，循环结束后返回 b。'
      },
      {
        type: 'judge',
        question: 'twoSum 中用 map[need] !== undefined 判断差值是否存在，能正确处理差值元素下标为 0 的情况。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。存的是下标，若差值元素下标为 0，map[need] 为 0，用真值判断 if (map[need]) 会漏判，而 !== undefined 能正确处理。'
      },
      {
        type: 'judge',
        question: '记忆化递归版斐波那契的空间复杂度是 O(1)，因为只用了几个变量。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。memo 要缓存最多 n 个结果，加上递归调用栈的深度，空间复杂度是 O(n)；空间 O(1) 是迭代滚动变量版的优势。'
      },
      {
        type: 'multiple',
        question: '关于冒泡排序的特征与优化，以下说法正确的有哪些？（多选）',
        options: ['时间复杂度为 O(n^2)', '相邻元素两两比较、逆序则交换是冒泡的特征', '对几乎有序的数组可加无交换标志提前退出', '每轮从未排序区选出最小值放到开头'],
        answer: [0, 1, 2],
        explanation: '前三项正确；每轮选最小值放到开头是选择排序的特征，冒泡是把最大值逐步交换到末尾，第四项错误。'
      },
      {
        type: 'multiple',
        question: '以下哪些问题适合用双指针求解？（多选）',
        options: ['判断字符串是否为回文', '有序数组中查找和为 target 的两个数', '原地反转字符串（两端交换）', '无序数组两数之和且不能用额外空间'],
        answer: [0, 1, 2],
        explanation: '前三项都是双指针的典型场景；无序数组两数之和无法直接双指针（需先排序或用哈希表），且要求不用额外空间时双指针也不适用，第四项错误。'
      },
      {
        type: 'single',
        question: '下面哪个 isPalindrome 实现存在 bug？',
        options: ['left 从 0、right 从 str.length - 1 开始', '循环条件为 left < right', '每轮比较后同时 left++ 和 right--', '每轮比较后只执行 left++，right 保持不变'],
        answer: 3,
        explanation: 'right 不移动会导致右端始终指向末尾字符，比较结果完全错误（如 "ab" 会一直拿 str[1] 比），必须两端同时收缩。'
      },
      {
        type: 'multiple',
        question: '关于迭代版斐波那契的实现，以下说法正确的有哪些？（多选）',
        options: ['用 a、b 两个变量滚动保存前两项', 'n <= 1 时直接返回 n', '每轮先算 c = a + b，再执行 a = b、b = c', '必须用数组保存所有中间结果'],
        answer: [0, 1, 2],
        explanation: '前三项正确；迭代版的优势正是只用 O(1) 空间滚动更新，不需要数组保存中间结果，第四项错误。'
      }
    ]
  }
];
