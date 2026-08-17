export default [
  {
    id: 'vue3-01',
    title: 'Vue3 简介与创建应用',
    summary: '认识 Vue3 并创建第一个应用',
    minutes: 12,
    sections: [
      {
        heading: '什么是 Vue3',
        text: 'Vue 是一个用于构建用户界面的渐进式 JavaScript 框架，由尤雨溪创建。所谓渐进式，是指你可以从一个页面的小功能开始用起，也可以用它构建复杂的单页应用。Vue3 是 2020 年发布的大版本，相比 Vue2，它性能更好、体积更小，并且引入了组合式 API，让代码组织和复用更加方便。Vue3 还支持更好的 TypeScript 类型推断。对于初学者来说，Vue 语法简单直观，文档友好，是入门前端框架的绝佳选择。',
        lang: 'html'
      },
      {
        heading: '用 CDN 快速体验',
        text: '学习 Vue 最简单的方式是直接在 HTML 中通过 CDN 引入，无需安装任何工具。我们在页面里准备一个挂载点（通常是 id 为 app 的 div），然后调用 Vue.createApp 创建应用实例，传入一个包含数据的对象，最后用 mount 方法把应用挂载到页面上。模板中的双大括号 {{ }} 是插值语法，会把数据的值显示在页面中。当数据变化时，页面会自动更新，这就是 Vue 的响应式魅力。',
        code: '<div id="app">{{ message }}</div>\n<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>\n<script>\n  Vue.createApp({\n    data() {\n      return { message: \'你好，Vue3！\' }\n    }\n  }).mount(\'#app\')\n</script>',
        lang: 'html'
      },
      {
        heading: '使用 Vite 创建工程化项目',
        text: '实际开发中，我们通常使用官方推荐的构建工具 Vite 来创建 Vue 项目。只需在命令行运行 npm create vite@latest，选择 Vue 模板，然后进入目录执行 npm install 安装依赖、npm run dev 启动开发服务器即可。Vite 启动速度极快，并且支持热更新：修改代码后页面会立刻刷新对应部分。工程化项目中，我们编写的是以 .vue 结尾的单文件组件，把模板、脚本和样式写在同一个文件里，结构清晰，便于维护。',
        code: 'npm create vite@latest my-vue-app -- --template vue\ncd my-vue-app\nnpm install\nnpm run dev',
        lang: 'js'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: 'Vue3 应用通过哪个方法把应用挂载到页面上？',
        options: ['render()', 'mount()', 'start()', 'bind()'],
        answer: 1,
        explanation: 'createApp 创建应用实例后，调用 mount(\'#app\') 将其挂载到对应的 DOM 节点上。'
      },
      {
        type: 'single',
        question: '创建 Vue3 工程化项目官方推荐的构建工具是？',
        options: ['Webpack', 'Gulp', 'Vite', 'Grunt'],
        answer: 2,
        explanation: 'Vite 是 Vue 官方推荐的构建工具，启动快、热更新迅速。'
      },
      {
        type: 'judge',
        question: 'Vue 被称为渐进式框架，意味着可以只在一个页面的局部使用它。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '渐进式意味着可以从局部小功能逐步扩展到完整单页应用，使用方式灵活。'
      },
      {
        type: 'multiple',
        question: '以下哪些是创建和使用 Vue3 应用的正确方式？（多选）',
        options: ['调用 Vue.createApp 创建应用实例', '调用 mount 方法把应用挂载到页面', '使用 Vite 创建工程化项目', '通过 CDN 引入时也必须先执行 npm install'],
        answer: [0, 1, 2],
        explanation: 'CDN 方式直接在 HTML 中引入脚本即可体验，无需安装任何依赖。'
      }
    ]
  },
  {
    id: 'vue3-02',
    title: '模板语法与常用指令',
    summary: '掌握 v-if、v-for、v-model、v-on',
    minutes: 15,
    sections: [
      {
        heading: '条件渲染与列表渲染',
        text: 'v-if 用于条件渲染：表达式为真时元素才会被创建并插入页面，为假时元素会被移除。它还可以搭配 v-else 使用。v-for 用于列表渲染，把数组中的每一项渲染成一个元素，语法是 item in items。使用 v-for 时建议加上 :key，为每一项提供唯一标识，这样 Vue 更新列表时效率更高，也能避免状态错乱。注意 v-if 和 v-for 不要写在同一个元素上，因为 v-if 的优先级更高，会拿不到 v-for 的循环变量。',
        code: '<ul>\n  <li v-for="item in list" :key="item.id">{{ item.name }}</li>\n</ul>\n<p v-if="list.length === 0">暂无数据</p>\n<p v-else>共 {{ list.length }} 条</p>',
        lang: 'html'
      },
      {
        heading: '事件绑定 v-on',
        text: 'v-on 用于监听 DOM 事件，最常缩写为 @。例如 @click 监听点击事件，值可以是方法名，也可以直接写内联表达式。方法一般定义在 methods 或 setup 中。如果需要阻止默认行为或阻止冒泡，可以使用事件修饰符，如 @click.prevent、@click.stop，比手动调用 event.preventDefault() 更简洁。Vue 会自动把事件对象传给方法，也可以写成 @click="fn($event)" 显式传递。',
        code: '<button @click="count++">加一</button>\n<button @click="sayHi">打招呼</button>\n<form @submit.prevent="onSubmit">...</form>',
        lang: 'html'
      },
      {
        heading: '双向绑定 v-model',
        text: 'v-model 是表单元素上的双向绑定指令：数据变化时输入框内容更新，用户输入时数据也同步变化。它会根据元素类型自动选择合适的方式：文本框绑定 value 和 input 事件，复选框绑定 checked，下拉框绑定 selected。v-model 也有修饰符，.trim 自动去除首尾空格，.number 把输入转成数字，.lazy 改为在 change 时同步。有了 v-model，处理表单再也不用写繁琐的取值赋值代码了。',
        code: '<input v-model="username" placeholder="请输入用户名">\n<p>你输入的是：{{ username }}</p>\n<input v-model.number="age" type="number">',
        lang: 'html'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: '使用 v-for 渲染列表时，推荐配合哪个属性提升更新效率？',
        options: [':id', ':class', ':key', ':name'],
        answer: 2,
        explanation: ':key 为每个列表项提供唯一标识，帮助 Vue 高效复用和更新 DOM。'
      },
      {
        type: 'single',
        question: '下列哪个写法可以阻止表单提交的默认行为？',
        options: ['@submit.stop', '@submit.prevent', '@submit.once', '@submit.capture'],
        answer: 1,
        explanation: '.prevent 修饰符等价于调用 event.preventDefault()，可阻止表单默认提交。'
      },
      {
        type: 'judge',
        question: 'v-model 只能用在文本输入框上，不能用于复选框和下拉框。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: 'v-model 支持 input、textarea、select、checkbox、radio 等多种表单元素。'
      },
      {
        type: 'multiple',
        question: '以下哪些是 v-model 支持的修饰符？（多选）',
        options: ['.trim', '.number', '.lazy', '.stop'],
        answer: [0, 1, 2],
        explanation: '.stop 是事件修饰符（用于 v-on），不是 v-model 的修饰符。'
      }
    ]
  },
  {
    id: 'vue3-03',
    title: '响应式基础：ref 与 reactive',
    summary: '理解 Vue3 的响应式数据声明',
    minutes: 14,
    sections: [
      {
        heading: '为什么需要响应式',
        text: '普通的 JavaScript 变量变化后，页面不会自动更新。Vue3 的响应式系统会追踪数据的读取和修改：当数据被修改时，依赖它的视图会自动重新渲染。在组合式 API 中，我们使用 ref 和 reactive 来创建响应式数据。它们底层基于 ES6 的 Proxy 实现，比 Vue2 的 Object.defineProperty 更强大，可以检测到新增属性、删除属性等操作。',
        lang: 'js'
      },
      {
        heading: 'ref：包装任意值',
        text: 'ref 可以把任意类型的值（数字、字符串、对象都行）包装成响应式对象。它返回一个带 .value 属性的对象，在 script 中读写时需要通过 .value 访问，例如 count.value++。但在模板中 ref 会自动解包，直接写 {{ count }} 即可，不需要 .value。ref 是组合式 API 中最常用的响应式声明方式，官方推荐优先使用 ref。',
        code: 'import { ref } from \'vue\'\n\nconst count = ref(0)\n\nfunction add() {\n  count.value++\n}\n\n// 模板中直接使用：{{ count }}',
        lang: 'js'
      },
      {
        heading: 'reactive：包装对象',
        text: 'reactive 只能用于对象类型（包括数组），它让对象本身变成响应式的，访问属性时不需要 .value，直接 state.count 即可，写起来更像普通对象。但它有两个注意点：一是不能解构，解构出来的属性会丢失响应式；二是不能整个替换对象，否则也会断开响应式连接。因此实践中，简单值用 ref，复杂状态对象才考虑 reactive；如果确实需要解构，可以用 toRefs 保持响应式。',
        code: 'import { reactive } from \'vue\'\n\nconst state = reactive({\n  name: \'小明\',\n  age: 18\n})\n\nfunction grow() {\n  state.age++\n}\n\n// 不要这样：const { age } = state  // 会丢失响应式',
        lang: 'js'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: '在 script 中修改 ref 声明的数据，正确写法是？',
        options: ['count = 1', 'count.value = 1', 'count.set(1)', 'this.count = 1'],
        answer: 1,
        explanation: 'ref 返回带 .value 的对象，script 中必须通过 .value 读写；模板中会自动解包。'
      },
      {
        type: 'single',
        question: '关于 reactive，下列说法正确的是？',
        options: ['可以包装数字和字符串', '解构后仍保持响应式', '只能用于对象类型', '访问时需要 .value'],
        answer: 2,
        explanation: 'reactive 只能包装对象（含数组），直接解构会丢失响应式，访问属性无需 .value。'
      },
      {
        type: 'judge',
        question: 'Vue3 的响应式系统底层基于 Proxy 实现。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'Vue3 使用 ES6 Proxy 实现响应式，比 Vue2 的 defineProperty 能检测更多操作。'
      },
      {
        type: 'multiple',
        question: '关于 ref 和 reactive，下列说法正确的有？（多选）',
        options: ['script 中通过 .value 读写 ref 数据', '模板中 ref 会自动解包', '直接解构 reactive 对象会丢失响应式', 'reactive 可以包装数字和字符串'],
        answer: [0, 1, 2],
        explanation: 'reactive 只能用于对象类型（含数组），包装简单值请使用 ref。'
      }
    ]
  },
  {
    id: 'vue3-04',
    title: '计算属性与侦听器',
    summary: '用 computed 和 watch 处理派生状态',
    minutes: 13,
    sections: [
      {
        heading: '计算属性 computed',
        text: '当页面需要展示由其他数据加工而来的值时，应该使用计算属性 computed。它接收一个函数，返回一个只读的响应式引用。计算属性的最大特点是有缓存：只要依赖的数据不变，多次访问只会计算一次，直接在模板中写表达式则每次渲染都会执行。比如购物车总价、过滤后的列表，都是计算属性的典型场景。把复杂逻辑放到 computed 里，模板会更简洁清晰。',
        code: 'import { ref, computed } from \'vue\'\n\nconst price = ref(100)\nconst num = ref(2)\n\nconst total = computed(() => price.value * num.value)\n\n// 模板中：{{ total }}  显示 200',
        lang: 'js'
      },
      {
        heading: '侦听器 watch',
        text: 'watch 用于在数据变化时执行副作用操作，比如发送请求、操作 DOM、写 localStorage 等。它接收两个参数：要监听的数据源和回调函数，回调能拿到新值和旧值。监听 ref 直接传入即可；监听 reactive 对象的某个属性，需要写成函数形式。选项 immediate: true 可以让回调在创建时立即执行一次，deep: true 可以深度监听对象内部变化。',
        code: 'import { ref, watch } from \'vue\'\n\nconst keyword = ref(\'\')\n\nwatch(keyword, (newVal, oldVal) => {\n  console.log(\'搜索：\' + newVal)\n  // 在这里发请求\n}, { immediate: true })',
        lang: 'js'
      },
      {
        heading: 'computed 和 watch 怎么选',
        text: '两者容易混淆，记住一个原则：computed 用来"算出一个新值"，有返回值，是同步的派生数据；watch 用来"变化后做一件事"，执行动作，通常没有返回值。能用 computed 解决的就优先用 computed，因为它声明式、带缓存、更好维护。只有当需要在变化后执行异步请求、定时器等副作用时，才使用 watch。另外还有一个 watchEffect，会自动收集回调里用到的依赖，依赖一变就重新执行，适合依赖较多的场景。',
        lang: 'js'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: '计算属性 computed 相比模板中直接写表达式，主要优势是？',
        options: ['写法更短', '有缓存，依赖不变时不重复计算', '可以异步执行', '能修改原始数据'],
        answer: 1,
        explanation: 'computed 具有缓存特性，只有依赖变化时才重新计算，性能更好。'
      },
      {
        type: 'single',
        question: '想让 watch 的回调在组件创建时立即执行一次，应该设置哪个选项？',
        options: ['deep: true', 'once: true', 'immediate: true', 'sync: true'],
        answer: 2,
        explanation: 'immediate: true 表示侦听开始后立即以当前值触发一次回调。'
      },
      {
        type: 'judge',
        question: 'watch 适合在数据变化后发送网络请求等副作用操作。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'watch 的定位就是"变化后做事"，异步请求、写缓存等都是典型用法。'
      },
      {
        type: 'multiple',
        question: '以下哪些场景适合使用 watch？（多选）',
        options: ['数据变化后发送网络请求', '数据变化后写入 localStorage', '监听数据并在回调中拿到新值和旧值', '计算一个需要缓存的派生值'],
        answer: [0, 1, 2],
        explanation: '需要缓存的派生值应该用 computed；watch 用于变化后执行副作用。'
      }
    ]
  },
  {
    id: 'vue3-05',
    title: '组件基础：props 与 emit',
    summary: '学会组件拆分与父子通信',
    minutes: 16,
    sections: [
      {
        heading: '什么是组件',
        text: '组件是可复用的界面单元，把页面拆成一个个小组件，每个组件负责一块功能，代码更易维护和复用。Vue 的单文件组件以 .vue 结尾，包含三个部分：template 写结构，script 写逻辑，style 写样式。在 script setup 语法中，顶层声明的变量和方法可以直接在模板中使用，无需显式返回。使用组件时先导入，然后像写 HTML 标签一样使用它，标签名一般采用大驼峰或短横线形式。',
        code: '<template>\n  <button class="btn">{{ text }}</button>\n</template>\n\n<script setup>\ndefineProps([\'text\'])\n</script>\n\n<style scoped>\n.btn { color: #42b883; }\n</style>',
        lang: 'html'
      },
      {
        heading: '父传子：props',
        text: '父组件通过 props 向子组件传递数据。子组件用 defineProps 声明要接收哪些 prop，可以写成数组形式，也可以写成对象形式并指定类型和默认值。父组件在使用子组件时，通过属性的形式传入数据，动态数据前面加冒号。props 是单向数据流：子组件不应该直接修改 prop 的值，如果确实需要基于 prop 维护本地状态，应复制到本地变量中。这样数据流向清晰，便于排查问题。',
        code: '// 子组件 Child.vue\nconst props = defineProps({\n  title: { type: String, default: \'默认标题\' },\n  count: Number\n})\n\n// 父组件中\n<Child title="你好" :count="10" />',
        lang: 'js'
      },
      {
        heading: '子传父：emit',
        text: '子组件通过 emit 触发自定义事件，把消息和数据传给父组件。先用 defineEmits 声明组件会触发哪些事件，得到一个 emit 函数，然后在合适的时机调用 emit(\'事件名\', 数据)。父组件像监听原生事件一样用 @事件名 接收，并在处理函数中拿到子组件传来的数据。这样就形成了完整闭环：props 向下传数据，emit 向上传消息，父子组件职责分明、互不越界。',
        code: '// 子组件\nconst emit = defineEmits([\'add\'])\nfunction onClick() {\n  emit(\'add\', 1)\n}\n\n// 父组件\n<Child @add="handleAdd" />\nfunction handleAdd(n) {\n  total.value += n\n}',
        lang: 'js'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: '父组件向子组件传递数据使用什么方式？',
        options: ['emit', 'props', 'watch', 'v-model'],
        answer: 1,
        explanation: 'props 用于父传子，子组件用 defineProps 声明接收。'
      },
      {
        type: 'single',
        question: '子组件向父组件发送消息，正确做法是？',
        options: ['直接修改父组件变量', '调用 emit 触发自定义事件', '修改 prop 的值', '使用 v-if'],
        answer: 1,
        explanation: '子组件通过 defineEmits 得到 emit 函数，触发事件并携带数据，父组件用 @事件名 接收。'
      },
      {
        type: 'judge',
        question: '子组件可以直接修改从父组件传来的 prop 值。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: 'props 遵循单向数据流，子组件不应直接修改 prop，需要时复制到本地状态。'
      },
      {
        type: 'multiple',
        question: '关于父子组件通信，下列说法正确的有？（多选）',
        options: ['父组件通过 props 向子组件传递数据', '子组件通过 emit 触发自定义事件向父组件传消息', '子组件不应直接修改 prop 的值', 'emit 用于父组件向子组件传递数据'],
        answer: [0, 1, 2],
        explanation: 'emit 的方向是子传父；父传子使用的是 props。'
      }
    ]
  },
  {
    id: 'vue3-06',
    title: '组合式 API 与生命周期',
    summary: '掌握 setup 与常用生命周期钩子',
    minutes: 15,
    sections: [
      {
        heading: '组合式 API 的思想',
        text: 'Vue2 的选项式 API 要求把代码按 data、methods、computed 分类放置，一个功能的逻辑被拆散在多处。组合式 API 则允许按功能组织代码：同一个功能相关的数据、方法、计算属性写在一起，阅读和维护都更顺畅。script setup 是组合式 API 的语法糖，写起来最简洁。组合式 API 还便于逻辑复用：把某块功能封装成以 use 开头的组合式函数（如 useMouse、useFetch），在任意组件中调用即可。',
        code: '<script setup>\nimport { ref, computed } from \'vue\'\n\n// 计数功能相关的代码聚在一起\nconst count = ref(0)\nconst double = computed(() => count.value * 2)\nfunction add() { count.value++ }\n</script>',
        lang: 'js'
      },
      {
        heading: '常用生命周期钩子',
        text: '组件从创建到销毁会经历一系列阶段，每个阶段都有对应的生命周期钩子。在组合式 API 中，钩子以 on 开头：onMounted 在组件挂载到页面后触发，最常用于发送初始请求或操作 DOM；onUnmounted 在组件卸载后触发，用于清理定时器、移除事件监听，防止内存泄漏；onUpdated 在数据导致页面更新后触发。注意钩子里常配合清理函数，比如定时器一定要在卸载时 clearInterval。',
        code: 'import { onMounted, onUnmounted } from \'vue\'\n\nlet timer = null\n\nonMounted(() => {\n  console.log(\'组件已挂载\')\n  timer = setInterval(() => {\n    console.log(\'滴答\')\n  }, 1000)\n})\n\nonUnmounted(() => {\n  clearInterval(timer)  // 卸载时清理\n})',
        lang: 'js'
      },
      {
        heading: '抽取可复用的组合式函数',
        text: '组合式函数是 Vue3 逻辑复用的核心方式，约定以 use 开头命名，如 useCounter。它本质上就是一个普通函数，内部使用 ref、computed 等声明状态，最后把状态和方法返回出去。任何组件调用它，都会得到一份独立的响应式状态。相比 Vue2 的 mixin，组合式函数数据来源清晰、没有命名冲突、类型友好。当你发现多个组件有相似逻辑时，就是抽取组合式函数的好时机。',
        code: '// useCounter.js\nimport { ref } from \'vue\'\n\nexport function useCounter() {\n  const count = ref(0)\n  function add() { count.value++ }\n  function reset() { count.value = 0 }\n  return { count, add, reset }\n}\n\n// 组件中使用\nconst { count, add, reset } = useCounter()',
        lang: 'js'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: '想在组件挂载完成后发送请求，应该使用哪个钩子？',
        options: ['onCreated', 'onMounted', 'onUpdated', 'onUnmounted'],
        answer: 1,
        explanation: 'onMounted 在组件挂载到 DOM 后触发，是发送初始请求、操作 DOM 的常用时机。'
      },
      {
        type: 'single',
        question: '组合式函数通常遵循什么命名约定？',
        options: ['以 handle 开头', '以 on 开头', '以 use 开头', '以 get 开头'],
        answer: 2,
        explanation: '社区约定组合式函数以 use 开头命名，如 useCounter、useFetch。'
      },
      {
        type: 'judge',
        question: '组件卸载时应该在 onUnmounted 中清理定时器，避免内存泄漏。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '定时器、事件监听等资源若不在卸载时清理，组件销毁后仍会运行，造成内存泄漏。'
      },
      {
        type: 'multiple',
        question: '以下哪些是组合式 API 中的生命周期钩子？（多选）',
        options: ['onMounted', 'onUnmounted', 'onUpdated', 'onClicked'],
        answer: [0, 1, 2],
        explanation: 'onClicked 不是生命周期钩子，点击事件用 @click 监听。'
      }
    ]
  },
  {
    id: 'vue3-07',
    title: '插槽：默认、具名与作用域插槽',
    summary: '用 slot 让组件内容更灵活',
    minutes: 14,
    sections: [
      {
        heading: '默认插槽',
        text: '组件的结构是固定的，但有时我们希望组件的某部分内容由使用者决定，这就需要插槽 slot。子组件在模板中放置 <slot> 标签作为占位，父组件在使用子组件时，把想显示的内容写在标签之间，这些内容就会被渲染到 slot 的位置。如果父组件没有传入任何内容，slot 标签内部写的文字会作为默认内容显示。插槽让组件像相框一样：框架由组件提供，照片由使用者放入，复用性大大提升。',
        code: '<!-- 子组件 Child.vue -->\n<div class="card">\n  <slot>默认内容</slot>\n</div>\n\n<!-- 父组件 -->\n<Child>这是父组件传进来的内容</Child>',
        lang: 'html'
      },
      {
        heading: '具名插槽',
        text: '一个组件有时需要多个内容出口，比如卡片分为头部和主体，这时就要用具名插槽。子组件通过 <slot name="header"> 给插槽起名字，没有名字的默认插槽其实叫 default。父组件用 <template #header> 指定内容放入哪个插槽，# 是 v-slot 的缩写。父组件传入内容的顺序无所谓，子组件按照自己模板中 slot 的位置来渲染，这样布局的控制权始终在子组件手里。',
        code: '<!-- 子组件 -->\n<header><slot name="header"></slot></header>\n<main><slot></slot></main>\n\n<!-- 父组件 -->\n<Child>\n  <template #header><h1>标题</h1></template>\n  <p>正文内容</p>\n</Child>',
        lang: 'html'
      },
      {
        heading: '作用域插槽',
        text: '普通插槽的内容写在父组件里，只能访问父组件的数据。而作用域插槽允许子组件把数据传递给插槽内容使用。子组件在 slot 标签上绑定属性，如 <slot :msg="message">，父组件通过 v-slot 接收这些属性，再用在插槽内容中。典型场景是列表组件：循环渲染的逻辑在子组件，每一项具体长什么样由父组件决定，同时每一项的数据由子组件传给父组件，两者各司其职、配合默契。',
        code: '<!-- 子组件：把数据传给插槽 -->\n<slot :msg="message" :n="1"></slot>\n\n<!-- 父组件：接收插槽数据 -->\n<Child>\n  <template #default="slotProps">\n    <p>{{ slotProps.msg }}</p>\n  </template>\n</Child>',
        lang: 'html'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: '父组件没有向插槽传入任何内容时，页面会显示什么？',
        options: ['一片空白', '编译报错', 'slot 标签内部写的默认内容', '子组件的 data'],
        answer: 2,
        explanation: 'slot 标签内部的内容是后备内容（默认内容），父组件未传内容时显示它。'
      },
      {
        type: 'single',
        question: '父组件向名为 header 的具名插槽传内容，正确写法是？',
        options: ['<template name="header">', '<template #header>', '<div slot:header>', '<slot name="header">'],
        answer: 1,
        explanation: '# 是 v-slot 的缩写，<template #header> 表示内容放入名为 header 的插槽。'
      },
      {
        type: 'judge',
        question: '作用域插槽允许子组件把数据传给父组件的插槽内容使用。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '子组件在 slot 上绑定属性，父组件通过 v-slot 接收，这就是作用域插槽。'
      },
      {
        type: 'multiple',
        question: '关于插槽，下列说法正确的有？（多选）',
        options: ['默认插槽的名字是 default', 'v-slot 可以缩写为 #', '插槽内容的渲染位置由子组件决定', '插槽内容可以直接访问子组件的所有数据'],
        answer: [0, 1, 2],
        explanation: '插槽内容编译在父组件作用域，不能直接访问子组件数据，需通过作用域插槽传递。'
      }
    ]
  },
  {
    id: 'vue3-08',
    title: '组件的 v-model 与 defineModel',
    summary: '让自定义组件支持双向绑定',
    minutes: 13,
    sections: [
      {
        heading: '组件上使用 v-model 的原理',
        text: 'v-model 不仅可以用于表单元素，也可以用在自定义组件上。它的本质是语法糖：默认等价于传入名为 modelValue 的 prop，并监听 update:modelValue 事件。子组件接收 modelValue 作为显示值，当内部值变化时（比如用户输入），触发 update:modelValue 事件把新值抛给父组件，父组件的数据随之更新。理解了"prop 向下、事件向上"这个模式，就掌握了组件双向绑定的核心。',
        code: '<!-- 子组件 MyInput.vue -->\n<script setup>\ndefineProps([\'modelValue\'])\nconst emit = defineEmits([\'update:modelValue\'])\n</script>\n\n<template>\n  <input :value="modelValue"\n    @input="emit(\'update:modelValue\', $event.target.value)">\n</template>',
        lang: 'html'
      },
      {
        heading: 'defineModel 简化写法',
        text: '手动声明 prop 加事件比较繁琐，Vue 3.4 提供了 defineModel 宏来简化。子组件调用 const model = defineModel()，会得到一个 ref，读写它就会自动完成接收 prop 和触发更新事件两件事，模板里甚至可以直接 v-model="model"。父组件的使用方式不变，还是 v-model="text"。defineModel 还支持默认值、校验和修饰符，是目前实现组件双向绑定的推荐方式。',
        code: '<!-- 子组件 -->\n<script setup>\nconst model = defineModel()\n</script>\n\n<template>\n  <input v-model="model">\n</template>\n\n<!-- 父组件 -->\n<MyInput v-model="text" />',
        lang: 'html'
      },
      {
        heading: '一个组件多个 v-model',
        text: '一个组件还可以同时绑定多个值，通过给 v-model 加参数实现，如 v-model:name、v-model:age。这时子组件接收的 prop 是 name 和 age，事件是 update:name 和 update:age；用 defineModel 时传入名字即可，如 defineModel(\'name\')。典型场景是复杂的表单组件：父组件一次性把表单各个字段与组件绑定，代码比为每个字段写 prop 和事件清爽得多。',
        code: '<!-- 父组件：同时绑定两个值 -->\n<UserForm\n  v-model:name="userName"\n  v-model:age="userAge" />\n\n<!-- 子组件 -->\n<script setup>\nconst name = defineModel(\'name\')\nconst age = defineModel(\'age\')\n</script>',
        lang: 'html'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: '组件上的 v-model 默认绑定的 prop 和事件分别是？',
        options: ['value 和 change', 'modelValue 和 update:modelValue', 'input 和 update', 'model 和 sync'],
        answer: 1,
        explanation: 'v-model 默认是 modelValue prop 加 update:modelValue 事件的语法糖。'
      },
      {
        type: 'single',
        question: 'defineModel 是从哪个版本开始提供的？',
        options: ['Vue 2.7', 'Vue 3.0', 'Vue 3.4', 'Vue 3.1'],
        answer: 2,
        explanation: 'defineModel 于 Vue 3.4 正式稳定提供，用于简化组件双向绑定。'
      },
      {
        type: 'judge',
        question: 'defineModel 返回的 ref 可以直接在子组件模板中配合 v-model 使用。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'defineModel 返回可双向绑定的 ref，直接 v-model="model" 即可完成双向同步。'
      },
      {
        type: 'multiple',
        question: '关于组件的 v-model，下列说法正确的有？（多选）',
        options: ['一个组件可以定义多个 v-model', 'v-model:title 等价于 title prop 加 update:title 事件', 'defineModel 支持默认值和修饰符', '组件上的 v-model 是单向的，子组件无需通知父组件'],
        answer: [0, 1, 2],
        explanation: 'v-model 是双向绑定：子组件值变化时必须触发更新事件通知父组件。'
      }
    ]
  },
  {
    id: 'vue3-09',
    title: 'provide / inject 跨层级通信',
    summary: '祖先直接向后代传递数据',
    minutes: 12,
    sections: [
      {
        heading: '为什么需要 provide / inject',
        text: '父子组件通信用 props 很方便，但如果数据要传给很深的后代组件，中间的每一层都得帮忙转发 prop，即使它们自己根本用不到，这种现象叫 prop 逐级透传，写起来又累又难维护。provide / inject 就是为解决这个问题而生：祖先组件用 provide 提供数据，无论隔多少层的后代组件，都可以用 inject 直接取到，中间组件完全无感知。常见场景有主题色、用户信息、全局配置等。',
        lang: 'js'
      },
      {
        heading: '基本用法',
        text: '在祖先组件中调用 provide(key, value) 提供数据，key 是唯一的标识，value 可以是任意值。后代组件调用 inject(key) 即可拿到这份数据。如果想让后代拿到的数据是响应式的，直接 provide 一个 ref 就行：后代修改这个 ref 时祖先也会同步变化，反之亦然。这样祖先和后代就通过同一个响应式数据建立了连接，而中间层完全不需要参与。',
        code: '// 祖先组件\nimport { provide, ref } from \'vue\'\n\nconst theme = ref(\'dark\')\nprovide(\'theme\', theme)\n\n// 任意后代组件\nimport { inject } from \'vue\'\n\nconst theme = inject(\'theme\')',
        lang: 'js'
      },
      {
        heading: '默认值与最佳实践',
        text: 'inject 可以传入第二个参数作为默认值，当祖先没有提供对应数据时不会报错，而是使用默认值，这让组件更健壮。最佳实践是：数据的所有权归祖先，修改也应由祖先负责。祖先可以在 provide 时同时提供一个修改方法，后代想改数据就调用这个方法，而不是直接改值。这样能避免多处随意修改数据导致状态难以追踪，让数据流向保持清晰。',
        code: '// 注入时提供默认值\nconst theme = inject(\'theme\', ref(\'light\'))\n\n// 同时提供数据和修改方法\nprovide(\'theme\', {\n  theme,\n  toggle() {\n    theme.value = theme.value === \'dark\' ? \'light\' : \'dark\'\n  }\n})',
        lang: 'js'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: 'provide 一般应该在哪个组件中调用？',
        options: ['后代组件', '任意兄弟组件', '祖先组件', '全局样式文件'],
        answer: 2,
        explanation: '数据流向是自上而下：祖先 provide，后代 inject。'
      },
      {
        type: 'single',
        question: 'inject 的第二个参数的作用是什么？',
        options: ['指定注入次数', '指定默认值', '指定类型检查', '指定是否响应式'],
        answer: 1,
        explanation: 'inject(key, 默认值)：祖先未提供该 key 时使用默认值，避免得到 undefined。'
      },
      {
        type: 'judge',
        question: '为了让后代组件拿到响应式数据，provide 可以直接传入一个 ref。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'provide 一个 ref，后代 inject 后读写 .value 即可实现跨层级响应式共享。'
      },
      {
        type: 'multiple',
        question: '关于 provide / inject，下列说法正确的有？（多选）',
        options: ['适合跨越多层组件传递数据', 'provide 和 inject 需要在 setup 阶段同步调用', '后代最好通过祖先提供的方法来修改数据', 'inject 找不到数据时程序一定崩溃'],
        answer: [0, 1, 2],
        explanation: 'inject 可以设置默认值，找不到数据时不会崩溃，只是得到 undefined 或默认值。'
      }
    ]
  },
  {
    id: 'vue3-10',
    title: '内置组件：Transition 与 Teleport',
    summary: '给界面加动画，把 DOM 传送到别处',
    minutes: 13,
    sections: [
      {
        heading: 'Transition 过渡动画',
        text: '当元素通过 v-if 或 v-show 插入、移除时，默认是瞬间出现的，比较生硬。用内置组件 Transition 把元素包起来，Vue 会在元素进入和离开的不同阶段自动添加 CSS 类名，比如进入起始的 v-enter-from、进入过程的 v-enter-active、离开结束的 v-leave-to。我们只需为这些类名写好过渡样式，就能得到平滑的动画效果。设置 name 属性后，类名前缀会从 v- 变成该名字，方便多个过渡共存。',
        code: '<template>\n  <button @click="show = !show">切换</button>\n  <Transition name="fade">\n    <p v-if="show">你好</p>\n  </Transition>\n</template>\n\n<style>\n.fade-enter-active, .fade-leave-active {\n  transition: opacity .5s;\n}\n.fade-enter-from, .fade-leave-to {\n  opacity: 0;\n}\n</style>',
        lang: 'html'
      },
      {
        heading: 'Teleport 传送门',
        text: '弹窗、通知这类组件，逻辑上属于某个组件，但渲染时希望放到 body 下，避免被父元素的 overflow hidden 裁剪或 z-index 层级问题困扰。内置组件 Teleport 可以把内容"传送"到页面的任何位置：用 to 属性指定目标选择器，子元素就会被渲染到那里。传送后，组件的数据绑定、事件、父子关系都保持不变，只是 DOM 位置变了，非常适合做全局弹窗和提示。',
        code: '<template>\n  <button @click="open = true">打开弹窗</button>\n  <Teleport to="body">\n    <div v-if="open" class="modal">弹窗内容</div>\n  </Teleport>\n</template>',
        lang: 'html'
      },
      {
        heading: '组合使用与注意点',
        text: 'Transition 和 Teleport 经常配合使用：用 Teleport 把弹窗传送到 body，再用 Transition 给弹窗加上淡入淡出动画，注意 Transition 要放在 Teleport 内部。Transition 只作用于单个根元素，如果是一组元素的过渡，可以用 TransitionGroup。另外，Transition 只是帮你管理类名，真正的动画效果靠 CSS 的 transition 或 animation 实现；TransitionGroup 则额外支持列表项位置变化时的移动动画。',
        lang: 'html'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: 'Transition 组件的主要作用是？',
        options: ['切换路由页面', '为元素的插入和移除添加过渡动画', '把 DOM 传送到 body', '缓存组件状态'],
        answer: 1,
        explanation: 'Transition 在元素进入、离开的不同阶段自动切换 CSS 类名，配合样式实现过渡动画。'
      },
      {
        type: 'single',
        question: 'Teleport 的 to 属性用于指定什么？',
        options: ['动画时长', '传送目标的选择器', '路由地址', '组件名称'],
        answer: 1,
        explanation: 'to 接收一个 CSS 选择器，子元素会被渲染到该选择器对应的 DOM 节点内。'
      },
      {
        type: 'judge',
        question: 'Transition 设置 name="fade" 后，会自动生成 fade-enter-from 等类名。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'name 属性会替换默认的 v- 前缀，生成 fade-enter-from、fade-leave-to 等类名。'
      },
      {
        type: 'multiple',
        question: '以下哪些是 Transition 提供的过渡类名？（多选）',
        options: ['v-enter-from', 'v-enter-active', 'v-leave-to', 'v-move-end'],
        answer: [0, 1, 2],
        explanation: '过渡类名只有 enter / leave 相关的 from、active、to 六种，没有 v-move-end。'
      }
    ]
  },
  {
    id: 'vue3-11',
    title: '组合式函数：封装复用逻辑',
    summary: '用 use 开头的函数复用状态逻辑',
    minutes: 13,
    sections: [
      {
        heading: '什么是组合式函数',
        text: '组合式函数（Composable）是利用组合式 API 封装和复用有状态逻辑的函数，约定以 use 开头命名，如 useMouse、useFetch。它内部可以使用 ref、computed、watch 甚至生命周期钩子，最后把状态和方法返回出去。与普通工具函数的区别在于：组合式函数处理的是响应式状态和副作用，每次调用都会创建独立的内部状态。当多个组件有相似逻辑时，抽成组合式函数能大幅减少重复代码。',
        lang: 'js'
      },
      {
        heading: '动手写一个 useMouse',
        text: '我们来封装一个追踪鼠标位置的组合式函数。内部用 ref 保存坐标 x、y，定义更新函数；在 onMounted 中给 window 添加 mousemove 监听，在 onUnmounted 中移除监听，防止组件销毁后还在执行。最后把 x、y 返回出去。这个函数可以在任何组件中使用，事件监听器的注册和清理完全由它自己管理，调用方一行代码就能获得鼠标位置功能，这就是封装的威力。',
        code: '// useMouse.js\nimport { ref, onMounted, onUnmounted } from \'vue\'\n\nexport function useMouse() {\n  const x = ref(0)\n  const y = ref(0)\n  function update(e) {\n    x.value = e.pageX\n    y.value = e.pageY\n  }\n  onMounted(() => window.addEventListener(\'mousemove\', update))\n  onUnmounted(() => window.removeEventListener(\'mousemove\', update))\n  return { x, y }\n}',
        lang: 'js'
      },
      {
        heading: '在组件中使用',
        text: '使用组合式函数就像调用普通函数一样，在 setup 中调用并解构返回值即可。返回的 ref 可以直接在模板中使用，响应式一切正常。相比 Vue2 的 mixin，组合式函数优势明显：数据来源一目了然（就在 return 里），多个组合式函数之间不易产生命名冲突，对 TypeScript 也更友好。社区还有 VueUse 这样的库，收集了几百个现成的组合式函数，开发时可以直接取用，避免重复造轮子。',
        code: '<script setup>\nimport { useMouse } from \'./useMouse\'\n\nconst { x, y } = useMouse()\n</script>\n\n<template>\n  <p>鼠标位置：{{ x }}, {{ y }}</p>\n</template>',
        lang: 'html'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: '组合式函数的本质是什么？',
        options: ['一个 Vue 组件', '一个返回响应式状态的普通函数', '一个生命周期钩子', '一个内置指令'],
        answer: 1,
        explanation: '组合式函数就是普通函数，只是内部使用组合式 API 并把状态和方法返回出去。'
      },
      {
        type: 'single',
        question: '在组合式函数内部可以使用哪些 API？',
        options: ['只能用 ref', '可以用生命周期钩子和其他组合式函数', '不能返回任何值', '只能操作 DOM'],
        answer: 1,
        explanation: '组合式函数中可以使用 ref、computed、watch、生命周期钩子，也能调用其他组合式函数。'
      },
      {
        type: 'judge',
        question: '不同组件各自调用 useMouse，会得到各自独立的 x、y 状态。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '每次调用都会执行一遍函数体，创建新的 ref，状态相互独立、互不干扰。'
      },
      {
        type: 'multiple',
        question: '相比 Vue2 的 mixin，组合式函数的优点有？（多选）',
        options: ['数据来源清晰可追溯', '不易产生命名冲突', '对 TypeScript 更友好', '只能在单个组件中使用'],
        answer: [0, 1, 2],
        explanation: '组合式函数恰恰是为了跨组件复用逻辑，来源清晰、无冲突、类型友好。'
      }
    ]
  },
  {
    id: 'vue3-12',
    title: 'Vue Router 路由基础',
    summary: '搭建单页应用的页面导航系统',
    minutes: 15,
    sections: [
      {
        heading: '什么是前端路由',
        text: '单页应用只有一个 HTML 文件，"切换页面"其实是根据地址栏的路径动态切换显示的组件，浏览器不会真正刷新，这就是前端路由。Vue Router 是 Vue 官方的路由管理器。使用前先安装：npm install vue-router@4，然后创建路由实例：调用 createRouter，传入路由模式（如 createWebHistory）和路由规则数组，每条规则把路径 path 和组件 component 对应起来，最后导出这个路由实例。',
        code: 'npm install vue-router@4\n\n// router/index.js\nimport { createRouter, createWebHistory } from \'vue-router\'\nimport Home from \'../views/Home.vue\'\nimport About from \'../views/About.vue\'\n\nconst router = createRouter({\n  history: createWebHistory(),\n  routes: [\n    { path: \'/\', component: Home },\n    { path: \'/about\', component: About }\n  ]\n})\nexport default router',
        lang: 'js'
      },
      {
        heading: '挂载与两个核心组件',
        text: '在入口文件 main.js 中通过 app.use(router) 安装路由，整个应用就具备了路由能力。模板中用到两个核心组件：router-link 负责导航，通过 to 属性指定目标路径，最终渲染成 a 标签，但点击时不会刷新页面；router-view 是占位出口，当前路径匹配到的组件就渲染在它所在的位置。一般把导航菜单和 router-view 放在 App.vue 里，形成固定的页面骨架。',
        code: '// main.js\nimport router from \'./router\'\n\ncreateApp(App).use(router).mount(\'#app\')\n\n<!-- App.vue -->\n<template>\n  <router-link to="/">首页</router-link>\n  <router-link to="/about">关于</router-link>\n  <router-view />\n</template>',
        lang: 'html'
      },
      {
        heading: 'hash 与 history 两种模式',
        text: 'Vue Router 有两种常用模式。hash 模式（createWebHashHistory）的地址带 # 号，如 /#/about，# 后面的变化不会发给服务器，所以部署最简单，任何静态服务器都能直接跑。history 模式（createWebHistory）的地址干净美观，如 /about，但用户刷新或直接访问子路径时请求会到达服务器，需要服务器配置把未匹配的路径都回退到 index.html。开发新项目一般推荐 history 模式，上线时记得配置服务器即可。',
        lang: 'js'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: '单页应用切换"页面"而浏览器不刷新，依靠的是？',
        options: ['location.reload', '前端路由', '后端模板渲染', 'iframe 嵌套'],
        answer: 1,
        explanation: '前端路由根据路径动态切换组件，不发起真正的页面请求。'
      },
      {
        type: 'single',
        question: '渲染当前路径所匹配组件的占位组件是？',
        options: ['router-link', 'router-view', 'router-push', 'keep-alive'],
        answer: 1,
        explanation: 'router-view 是路由出口，匹配的组件会渲染在它的位置。'
      },
      {
        type: 'judge',
        question: 'router-link 最终会被渲染成 a 标签，但点击不会触发页面刷新。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'router-link 渲染为 a 标签，Vue Router 拦截点击事件改为前端跳转。'
      },
      {
        type: 'multiple',
        question: '关于 Vue Router 的配置，下列说法正确的有？（多选）',
        options: ['routes 是路由规则数组', 'createWebHistory 使用 HTML5 history 模式', 'createWebHashHistory 的 URL 中带 # 号', '每条路由规则必须配置 name 属性'],
        answer: [0, 1, 2],
        explanation: 'name 是可选的命名路由标识，path 和 component 才是核心配置。'
      }
    ]
  },
  {
    id: 'vue3-13',
    title: 'Vue Router 进阶',
    summary: '动态路由、编程式导航与守卫',
    minutes: 15,
    sections: [
      {
        heading: '动态路由与参数',
        text: '像用户详情页这样的页面，路径是 /user/1、/user/2 变化的，不可能为每个用户写一条路由。动态路由用冒号声明参数：path: \'/user/:id\'，同一路由就能匹配所有 /user/ 开头的地址。组件中通过 useRoute() 拿到当前路由对象，用 route.params.id 读取参数。查询字符串参数（?tab=info 这种）则从 route.query 中获取。这样一套模板组件就能展示任意用户的数据。',
        code: '// 路由配置\n{ path: \'/user/:id\', component: User }\n\n// 组件中读取参数\nimport { useRoute } from \'vue-router\'\nconst route = useRoute()\nconsole.log(route.params.id)\n\n// 跳转\n<router-link to="/user/42">用户 42</router-link>',
        lang: 'js'
      },
      {
        heading: '编程式导航',
        text: '除了在模板中写 router-link，还可以在代码里主动跳转，这叫编程式导航。通过 useRouter() 获取路由器实例：router.push(\'/path\') 跳转到新页面并留下历史记录；router.replace() 跳转但不留记录，适合登录后替换掉登录页；router.back() 后退、router.forward() 前进。push 还可以传对象，同时携带 params 或 query 参数。表单提交成功、登录完成后的跳转都用这种方式。',
        code: 'import { useRouter } from \'vue-router\'\nconst router = useRouter()\n\nfunction goHome() {\n  router.push(\'/\')\n}\nfunction goUser() {\n  router.push({ path: \'/user/1\', query: { tab: \'info\' } })\n}\n// 后退一页\nrouter.back()',
        lang: 'js'
      },
      {
        heading: '导航守卫',
        text: '导航守卫让你在路由跳转发生前进行拦截判断，最典型的场景是登录验证。router.beforeEach 注册全局前置守卫，回调能拿到目标路由 to 和来源路由 from。守卫通过返回值控制导航：返回 true 或不返回表示放行，返回 false 取消跳转，返回一个路径字符串则重定向到该路径。比如检测到用户未登录却想进后台，就返回 \'/login\' 把他送去登录页。此外还有 afterEach 和组件内的守卫。',
        code: 'router.beforeEach((to, from) => {\n  const isLogin = Boolean(localStorage.getItem(\'token\'))\n  if (to.path === \'/admin\' && !isLogin) {\n    return \'/login\'\n  }\n})',
        lang: 'js'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: '路由路径 /user/:id 中的 :id 表示什么？',
        options: ['固定字符串', '动态路由参数', '查询字符串参数', '页面锚点'],
        answer: 1,
        explanation: '冒号开头的是动态参数，匹配到的值通过 route.params.id 读取。'
      },
      {
        type: 'single',
        question: '在代码中跳转到新页面并保留历史记录，应使用？',
        options: ['router.push()', 'router.back()', 'router.go(0)', 'router.afterEach()'],
        answer: 0,
        explanation: 'router.push 导航到新地址并添加历史记录；replace 才不留记录。'
      },
      {
        type: 'judge',
        question: '在 beforeEach 守卫中返回 false 会取消本次导航。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '返回 false 取消导航，返回路径字符串则重定向，放行则返回 true 或不返回。'
      },
      {
        type: 'multiple',
        question: '关于 route 与 router，下列说法正确的有？（多选）',
        options: ['useRoute 获取当前路由信息', 'useRouter 获取路由器实例用于跳转', 'route.params 可以拿到动态路由参数', 'route 和 router 是同一个对象'],
        answer: [0, 1, 2],
        explanation: 'route 是当前路由状态（只读信息），router 是路由器实例（用于操作），两者不同。'
      }
    ]
  },
  {
    id: 'vue3-14',
    title: 'Pinia 状态管理',
    summary: '用 store 集中管理共享状态',
    minutes: 14,
    sections: [
      {
        heading: '为什么需要 Pinia',
        text: '当多个互不相关的组件需要共享同一份数据（比如登录用户信息、购物车）时，props 传不动、provide 也显得零散，这时就需要状态管理库。Pinia 是 Vue 官方推荐的状态管理库，可以把它理解为一个全局的响应式数据仓库：任何组件都能读取和修改 store 里的数据，数据一变，所有用到它的组件自动更新。安装后只需在入口文件 app.use(createPinia()) 注册即可使用。',
        code: 'npm install pinia\n\n// main.js\nimport { createPinia } from \'pinia\'\n\ncreateApp(App).use(createPinia()).mount(\'#app\')',
        lang: 'js'
      },
      {
        heading: '定义 store：state、getters、actions',
        text: '用 defineStore 定义一个 store，第一个参数是唯一 id。配置对象里有三部分：state 是数据本身，写成返回对象的函数；getters 类似计算属性，由 state 派生而来且带缓存，比如由 count 算出 double；actions 是修改数据的方法，可以写同步逻辑也可以写异步请求，内部通过 this 访问 state 和其他成员。一个应用可以按业务划分多个 store，如 userStore、cartStore，结构清晰。',
        code: '// stores/counter.js\nimport { defineStore } from \'pinia\'\n\nexport const useCounterStore = defineStore(\'counter\', {\n  state: () => ({ count: 0 }),\n  getters: {\n    double: (state) => state.count * 2\n  },\n  actions: {\n    add() { this.count++ }\n  }\n})',
        lang: 'js'
      },
      {
        heading: '在组件中使用 store',
        text: '组件中调用 useCounterStore() 就能得到 store 实例，通过 store.count、store.double 访问数据和计算值，调用 store.add() 执行修改。有一个重要注意点：直接解构 store 会丢失响应式，想解构 state 或 getters 必须用 storeToRefs 包一层；而 actions 是普通函数，可以直接解构。在模板中也可以直接用 store.count，简单场景下连解构都可以省略。',
        code: '<script setup>\nimport { storeToRefs } from \'pinia\'\nimport { useCounterStore } from \'./stores/counter\'\n\nconst store = useCounterStore()\n// 解构 state/getters 要用 storeToRefs 保持响应式\nconst { count, double } = storeToRefs(store)\n// actions 可以直接解构\nconst { add } = store\n</script>',
        lang: 'html'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: 'Pinia 的 store 中，存放数据的部分是？',
        options: ['getters', 'state', 'actions', 'plugins'],
        answer: 1,
        explanation: 'state 是数据源，getters 是派生计算，actions 是修改数据的方法。'
      },
      {
        type: 'single',
        question: '从 store 解构 state 时保持响应式，应使用？',
        options: ['toRaw', 'storeToRefs', 'shallowRef', 'markRaw'],
        answer: 1,
        explanation: 'storeToRefs 会把 state 和 getters 包装成 ref，解构后仍保持响应式。'
      },
      {
        type: 'judge',
        question: 'Pinia 的 actions 中可以编写异步逻辑，比如发送网络请求。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'actions 支持同步和异步操作，await 请求完成后用 this 修改 state 即可。'
      },
      {
        type: 'multiple',
        question: '关于 Pinia，下列说法正确的有？（多选）',
        options: ['getters 类似计算属性，具有缓存', 'defineStore 的第一个参数是 store 的唯一 id', 'actions 中可以通过 this 访问 state', 'Pinia 注册后只能在一个组件中使用'],
        answer: [0, 1, 2],
        explanation: 'Pinia 的意义就是跨组件共享状态，注册后任何组件都可以使用 store。'
      }
    ]
  },
  {
    id: 'vue3-15',
    title: '工程化实战：构建、规范与部署',
    summary: '从开发到上线的完整流程',
    minutes: 14,
    sections: [
      {
        heading: 'Vite 构建与打包',
        text: 'Vite 项目开发阶段用 npm run dev 启动开发服务器，享受毫秒级热更新。开发完成后执行 npm run build 进行生产构建：Vite 会把代码压缩、合并、做 Tree Shaking 去掉无用代码，最终输出到 dist 目录。想检查打包效果，可以执行 npm run preview 在本地起一个静态服务器预览 dist 的内容。dist 里的就是纯静态文件，不依赖 Node 环境，可以直接部署到任何静态服务器。',
        code: '# 开发\nnpm run dev\n\n# 打包到 dist 目录\nnpm run build\n\n# 本地预览打包结果\nnpm run preview',
        lang: 'js'
      },
      {
        heading: '单文件组件规范',
        text: '良好的组件写法能让项目更好维护。约定俗成的规范有：template 放最前面，保持结构简洁，复杂表达式移入 computed；script setup 中导入语句放顶部，相关逻辑按功能分组，适时抽取组合式函数；style 加上 scoped，让样式只作用于当前组件，避免污染全局。组件文件名用大驼峰，如 UserCard.vue；一个组件只负责一件事，太大就拆分成多个子组件。团队项目还应配合 ESLint 和 Prettier 统一风格。',
        code: '<template>\n  <!-- 结构：保持简洁，复杂逻辑下沉到 script -->\n</template>\n\n<script setup>\n// 逻辑：导入放顶部，按功能分组组织\n</script>\n\n<style scoped>\n/* 样式：scoped 防止污染其他组件 */\n</style>',
        lang: 'html'
      },
      {
        heading: '部署上线',
        text: '部署就是把 dist 目录的内容放到服务器上。可以选择 Nginx、GitHub Pages、Vercel 等静态托管方式。注意两点：一是如果路由用了 history 模式，需要在服务器配置把所有未匹配的路径回退到 index.html，否则刷新子页面会 404；二是环境变量要写在 .env.production 等文件中，且必须以 VITE_ 开头才会暴露给客户端代码，比如 VITE_API_BASE 用来区分开发和生产的接口地址。上传 dist 后访问域名，你的应用就正式上线了。',
        code: '# .env.production\nVITE_API_BASE=https://api.example.com\n\n# 代码中读取\nconst api = import.meta.env.VITE_API_BASE',
        lang: 'js'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: 'Vite 项目执行哪个命令生成生产环境文件？',
        options: ['npm run dev', 'npm run build', 'npm run preview', 'npm run serve'],
        answer: 1,
        explanation: 'npm run build 执行生产构建，压缩打包后输出到 dist 目录。'
      },
      {
        type: 'single',
        question: 'Vite 打包后的产物默认输出到哪个目录？',
        options: ['src', 'public', 'dist', 'node_modules'],
        answer: 2,
        explanation: '默认输出到 dist 目录，里面的静态文件可直接部署。'
      },
      {
        type: 'judge',
        question: '使用 history 路由模式部署时，服务器需要配置将未匹配路径回退到 index.html。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '否则用户刷新子路径时服务器找不到对应文件，会返回 404。'
      },
      {
        type: 'multiple',
        question: '关于单文件组件与部署，下列说法正确的有？（多选）',
        options: ['style 加 scoped 可避免样式污染其他组件', 'Vite 环境变量需以 VITE_ 开头才能暴露给客户端', 'npm run preview 可在本地预览打包结果', '部署时必须把 node_modules 一起上传服务器'],
        answer: [0, 1, 2],
        explanation: '部署只需上传 dist 静态产物，node_modules 只在构建时需要。'
      }
    ]
  }
]
