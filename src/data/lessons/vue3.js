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
        type: 'judge',
        question: '模板中的 {{ message }} 会把数据 message 的值渲染到页面上。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '双大括号是 Vue 的插值语法，用于输出数据，且数据变化时页面自动更新。'
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
        type: 'judge',
        question: 'v-on 可以缩写为 @，例如 @click 等价于 v-on:click。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '@ 是 v-on 的语法糖，两者完全等价，实际开发中几乎都用 @。'
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
        type: 'judge',
        question: '在模板中使用 ref 数据时，必须写成 count.value 才能显示。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '模板中 ref 会自动解包，直接写 {{ count }} 即可，不需要 .value。'
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
        type: 'judge',
        question: 'computed 通常用来执行异步请求，watch 用来计算派生值。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '说反了：computed 用于同步地派生新值，watch 用于执行副作用如异步请求。'
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
        type: 'judge',
        question: '在 script setup 中，顶层声明的变量可以直接在模板中使用。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'script setup 的顶层绑定会自动暴露给模板，无需手动 return。'
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
        type: 'judge',
        question: '多个组件调用同一个组合式函数，会共享同一份响应式状态。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '每次调用组合式函数都会执行一遍函数体，创建各自独立的 ref 状态，互不干扰。'
      }
    ]
  }
]
