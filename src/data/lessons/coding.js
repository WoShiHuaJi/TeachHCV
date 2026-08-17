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
      }
    ]
  }
];
