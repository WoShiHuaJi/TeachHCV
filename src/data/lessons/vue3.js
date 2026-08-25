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
      },
      {
        type: 'single',
        question: '模板中用于显示数据的双大括号 {{ }} 被称为什么语法？',
        options: ['插值语法', '指令语法', '事件语法', '过滤器语法'],
        answer: 0,
        explanation: '{{ }} 是插值语法，会把数据的值渲染到页面中，数据变化时自动更新。'
      },
      {
        type: 'single',
        question: 'Vue3 是在哪一年发布的大版本？',
        options: ['2016 年', '2018 年', '2020 年', '2022 年'],
        answer: 2,
        explanation: 'Vue3 于 2020 年发布，带来了组合式 API 等重要更新。'
      },
      {
        type: 'judge',
        question: 'Vue3 相比 Vue2 性能更好、体积更小，并且对 TypeScript 的类型推断支持更好。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '性能、体积和 TypeScript 支持都是 Vue3 的重要改进点。'
      },
      {
        type: 'judge',
        question: '使用 Vite 创建项目后，需要先执行 npm install 安装依赖，再执行 npm run dev 启动开发服务器。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '创建项目后依次执行 npm install 和 npm run dev 即可开始开发。'
      },
      {
        type: 'multiple',
        question: '以下哪些是 Vue3 相比 Vue2 的改进？（多选）',
        options: ['性能更好', '体积更小', '引入组合式 API', '不再支持模板语法'],
        answer: [0, 1, 2],
        explanation: 'Vue3 依然支持模板语法，同时新增了组合式 API 等能力。'
      },
      {
        type: 'multiple',
        question: '关于 Vite 的开发体验，下列说法正确的有？（多选）',
        options: ['启动速度极快', '支持热更新', '通过 npm run dev 启动开发服务器', '必须先配置 Webpack 才能使用'],
        answer: [0, 1, 2],
        explanation: 'Vite 开箱即用，无需手动配置 Webpack。'
      },
      {
        type: 'single',
        question: 'Vue 框架的作者是？',
        options: ['尤雨溪', 'Dan Abramov', 'Ryan Dahl', 'Brendan Eich'],
        answer: 0,
        explanation: 'Vue 由尤雨溪创建，渐进式的设计理念让入门和扩展都很平滑。'
      },
      {
        type: 'judge',
        question: '通过 CDN 方式引入 Vue3 体验时，必须先安装 Node.js 和 npm。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: 'CDN 方式只需在 HTML 中引入一个 script 标签即可体验，无需安装任何工具。'
      },
      {
        type: 'single',
        question: '工程化项目中以 .vue 结尾的文件称为？',
        options: ['单文件组件', '路由文件', '配置文件', '样式文件'],
        answer: 0,
        explanation: '.vue 文件是单文件组件，把模板、脚本和样式写在同一个文件里。'
      },
      {
        type: 'single',
        question: '使用 Vite 创建 Vue 项目的命令是？',
        options: ['npm create vite@latest', 'npm install vue', 'npm run build', 'npm run preview'],
        answer: 0,
        explanation: '运行 npm create vite@latest 并选择 Vue 模板即可创建工程化项目。'
      },
      {
        type: 'judge',
        question: 'mount 方法的参数是一个 CSS 选择器，指定应用挂载到哪个 DOM 节点。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'mount(\'#app\') 中的 #app 就是选择器，对应页面中的挂载点。'
      },
      {
        type: 'multiple',
        question: '关于单文件组件（.vue 文件），下列说法正确的有？（多选）',
        options: ['通常包含 template 部分', '通常包含 script 部分', '通常包含 style 部分', '浏览器无需构建即可直接运行 .vue 文件'],
        answer: [0, 1, 2],
        explanation: '.vue 文件需要经过 Vite 等构建工具编译后浏览器才能运行。'
      },
      {
        type: 'multiple',
        question: '关于 Vue 的渐进式理念，下列说法正确的有？（多选）',
        options: ['可以只在页面局部使用', '可以构建完整的单页应用', '可以按需逐步引入更多能力', '必须一次性引入全套生态才能使用'],
        answer: [0, 1, 2],
        explanation: '渐进式意味着使用规模可大可小，按需采用，没有强制全家桶要求。'
      },
      {
        type: 'single',
        question: '面试情景：老项目只想给其中一个页面增加交互功能，又不想引入构建工具，最合适的方案是？',
        options: ['整站重写为 Vite 工程', '通过 CDN 在该页面引入 Vue 做局部增强', '改用其他框架重写', '无法实现'],
        answer: 1,
        explanation: '渐进式框架的优势之一：用 CDN 引入即可对老页面做局部增强，成本最低。'
      },
      {
        type: 'single',
        question: '一个 Vue3 应用从创建到显示在页面上，正确的调用顺序是？',
        options: ['mount 后再 createApp', 'createApp 创建实例后再 mount', '先写 data 再 mount', '直接 new Vue()'],
        answer: 1,
        explanation: '先 createApp 创建应用实例，再调用 mount 挂载到 DOM。'
      },
      {
        type: 'judge',
        question: 'Vue3 既支持选项式 API，也支持组合式 API，两者可以在项目中共存。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'Vue3 保留了选项式 API，同时新增组合式 API，开发者可按需选择。'
      },
      {
        type: 'single',
        question: '通过 CDN 引入 Vue3 后，创建应用实例使用的是哪个全局对象？',
        options: ['Vue', 'React', 'jQuery', 'Axios'],
        answer: 0,
        explanation: 'CDN 引入后全局暴露 Vue 对象，通过 Vue.createApp 创建应用实例。'
      },
      {
        type: 'single',
        question: 'createApp 传入的配置对象中，data() 方法的作用是？',
        options: ['返回应用使用的数据对象', '注册全局组件', '配置路由规则', '引入外部样式'],
        answer: 0,
        explanation: 'data() 返回一个对象，其中的字段可以在模板中通过插值等方式使用。'
      },
      {
        type: 'judge',
        question: '模板插值中使用的数据发生变化时，页面会自动更新。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '这就是 Vue 的响应式特性：数据驱动视图自动更新。'
      },
      {
        type: 'judge',
        question: '一个页面上只能创建一个 Vue 应用实例。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '可以多次调用 createApp 创建多个应用实例，分别挂载到不同的节点。'
      },
      {
        type: 'multiple',
        question: '关于 createApp，下列说法正确的有？（多选）',
        options: ['用于创建应用实例', '可以传入包含 data 的配置对象', '创建的实例可以调用 mount 挂载', '调用后应用会自动挂载到 body'],
        answer: [0, 1, 2],
        explanation: 'createApp 只负责创建实例，必须显式调用 mount 并指定挂载点。'
      },
      {
        type: 'multiple',
        question: '关于插值语法 {{ }}，下列说法正确的有？（多选）',
        options: ['用于在模板中显示数据', '数据变化时显示内容自动更新', '属于 Vue 模板语法的一部分', '可以用来绑定元素的属性'],
        answer: [0, 1, 2],
        explanation: '绑定元素属性应使用 v-bind，插值语法只用于文本内容。'
      },
      {
        type: 'single',
        question: '面试情景：Vite 开发服务器运行期间修改了 .vue 文件，浏览器中的页面会？',
        options: ['自动热更新对应部分', '必须手动刷新才生效', '开发服务器直接退出', '清空页面所有内容'],
        answer: 0,
        explanation: 'Vite 支持热更新，修改代码后页面立刻更新对应部分。'
      },
      {
        type: 'judge',
        question: 'Vue3 只能用于构建完整的单页应用，无法对老页面做局部增强。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '渐进式框架可以从局部小功能开始用起，CDN 引入即可做局部增强。'
      },
      {
        type: 'multiple',
        question: '关于 CDN 方式与工程化方式的对比，下列说法正确的有？（多选）',
        options: ['CDN 方式适合快速体验和局部增强', '工程化项目使用 .vue 单文件组件', '工程化代码需经构建工具编译后运行', 'CDN 方式也必须配置路由和构建工具'],
        answer: [0, 1, 2],
        explanation: 'CDN 方式零配置即可体验，工程化才涉及构建、路由等完整设施。'
      },
      {
        type: 'single',
        question: '面试题：被问到「为什么 Vue 适合前端入门」时，合理的回答是？',
        options: ['语法简单直观、文档友好', '必须精通 TypeScript 才能使用', '只能配合后端框架使用', '社区没有任何学习资料'],
        answer: 0,
        explanation: 'Vue 语法简单直观、文档友好，是入门前端框架的绝佳选择。'
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
      },
      {
        type: 'single',
        question: 'v-if 与 v-else 配合使用时，v-else 元素必须？',
        options: ['写在任意位置', '紧跟在 v-if 元素之后', '写在 v-if 元素之前', '可以脱离 v-if 单独使用'],
        answer: 1,
        explanation: 'v-else 必须紧跟在带 v-if 的元素之后，否则无法被识别。'
      },
      {
        type: 'single',
        question: 'v-on 指令最常用的缩写符号是？',
        options: [':', '#', '@', '/'],
        answer: 2,
        explanation: 'v-on:click 可缩写为 @click；: 是 v-bind 的缩写，# 是 v-slot 的缩写。'
      },
      {
        type: 'judge',
        question: 'v-if 的表达式为假时，对应元素会被从 DOM 中移除。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'v-if 是真正的条件渲染，为假时元素不会被创建，或会被移除。'
      },
      {
        type: 'judge',
        question: '官方推荐把 v-if 和 v-for 写在同一个元素上，以提高渲染效率。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '不推荐同用：v-if 优先级更高，会拿不到 v-for 的循环变量。'
      },
      {
        type: 'multiple',
        question: '以下哪些是 v-on 支持的事件修饰符？（多选）',
        options: ['.prevent', '.stop', '.once', '.trim'],
        answer: [0, 1, 2],
        explanation: '.trim 是 v-model 的修饰符，不是事件修饰符。'
      },
      {
        type: 'multiple',
        question: '关于 v-for 列表渲染，下列说法正确的有？（多选）',
        options: ['基本语法是 item in items', '建议为每一项提供唯一的 :key', '与 v-if 同用时 v-if 优先级更高', '遍历时绝对不需要 :key'],
        answer: [0, 1, 2],
        explanation: ':key 能帮助 Vue 高效复用 DOM 并避免状态错乱，应始终提供。'
      },
      {
        type: 'single',
        question: '面试情景：希望用户输入的内容自动去除首尾空格后再同步到数据，最简洁的写法是？',
        options: ['v-model.trim="username"', '在 @input 中手动调用 trim', '用 watch 监听后再处理', '定义一个 computed 处理'],
        answer: 0,
        explanation: 'v-model 的 .trim 修饰符会自动去除首尾空格，无需手动处理。'
      },
      {
        type: 'single',
        question: '面试情景：点击按钮既要执行方法，又要阻止事件冒泡到父元素，应使用？',
        options: ['@click.stop="fn"', '@click.prevent="fn"', '@click.once="fn"', '@click.self="fn"'],
        answer: 0,
        explanation: '.stop 修饰符等价于调用 event.stopPropagation()，可阻止事件冒泡。'
      },
      {
        type: 'judge',
        question: 'v-model.number 会自动把用户输入的内容转换为数字类型。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '.number 修饰符会把输入值转成数字，转换失败时保留原始字符串。'
      },
      {
        type: 'multiple',
        question: '面试情景：实现一个待办事项列表，下列做法正确的有？（多选）',
        options: ['用 v-for 遍历数组渲染每一项', '为每一项提供唯一的 :key', '列表为空时用 v-if 显示提示文案', '把 v-if 和 v-for 写在同一个 li 上'],
        answer: [0, 1, 2],
        explanation: 'v-if 与 v-for 不要写在同一元素上，v-if 优先级更高，会拿不到循环变量。'
      },
      {
        type: 'single',
        question: 'v-bind 指令的缩写符号是？',
        options: [':', '@', '#', '*'],
        answer: 0,
        explanation: 'v-bind:class 可缩写为 :class；@ 是 v-on 的缩写，# 是 v-slot 的缩写。'
      },
      {
        type: 'judge',
        question: 'v-show 为假时元素只是通过 CSS 隐藏，仍然保留在 DOM 中。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'v-show 通过 display 控制显隐，不创建也不销毁 DOM。'
      },
      {
        type: 'multiple',
        question: '关于 v-show 与 v-if 的区别，下列说法正确的有？（多选）',
        options: ['v-show 通过 CSS display 控制显隐', 'v-if 会真实创建和移除 DOM', '频繁切换的场景适合用 v-show', 'v-show 也支持搭配 v-else 使用'],
        answer: [0, 1, 2],
        explanation: 'v-else 只能配合 v-if 使用，v-show 不支持。'
      },
      {
        type: 'single',
        question: '面试情景：一个提示弹层需要频繁地显示和隐藏，从性能角度应优先选择？',
        options: ['v-if', 'v-show', 'v-for', 'v-model'],
        answer: 1,
        explanation: '频繁切换时 v-show 只切换 CSS，避免反复创建销毁 DOM，性能更好。'
      },
      {
        type: 'single',
        question: '想根据数据动态绑定元素的 class，应使用的指令写法是？',
        options: ['v-bind:class', 'v-on:class', 'v-model:class', 'v-slot:class'],
        answer: 0,
        explanation: '动态绑定属性用 v-bind（缩写 :），如 :class="..."；v-on 绑事件，v-model 绑表单值。'
      },
      {
        type: 'judge',
        question: 'v-model.lazy 会让数据同步改为在 change 时进行，而不是每次输入都同步。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '.lazy 修饰符把同步时机从 input 事件改为 change 事件。'
      },
      {
        type: 'single',
        question: 'v-for 遍历数组时，除了每一项 item，还可以同时拿到什么？',
        options: ['索引 index', '父组件实例', '路由对象', '上一个组件的状态'],
        answer: 0,
        explanation: 'v-for="(item, index) in list" 可以同时拿到每一项和它的索引。'
      },
      {
        type: 'single',
        question: '@click 绑定的事件处理方法一般定义在哪里？',
        options: ['methods 或 setup 中', 'style 标签中', 'template 的注释里', '路由配置中'],
        answer: 0,
        explanation: '事件处理方法定义在 methods（选项式）或 setup（组合式）中，模板里通过名字引用。'
      },
      {
        type: 'judge',
        question: '@click 的值可以直接写内联表达式，例如让计数器自增。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'v-on 的值可以是方法名，也可以是内联表达式，如 @click="count++"。'
      },
      {
        type: 'judge',
        question: '事件处理需要原生事件对象时，可以写成 @click="fn($event)" 显式传递。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '$event 是 Vue 提供的特殊变量，代表原生事件对象。'
      },
      {
        type: 'multiple',
        question: 'v-model 可以用在下列哪些表单元素上？（多选）',
        options: ['文本输入框', '复选框', '下拉选择框', 'div 容器'],
        answer: [0, 1, 2],
        explanation: 'v-model 支持 input、textarea、select、checkbox、radio 等表单元素。'
      },
      {
        type: 'multiple',
        question: '下列哪些是合法的点击事件绑定写法？（多选）',
        options: ['v-on:click="fn"', '@click="fn"', '@click="count++"', 'v-on:click-fn'],
        answer: [0, 1, 2],
        explanation: 'v-on:click-fn 不是合法写法，事件名与修饰符要通过点号连接。'
      },
      {
        type: 'single',
        question: '面试情景：v-for 渲染的列表中多个项使用了相同的 :key，可能导致什么问题？',
        options: ['状态错乱、更新异常', '渲染速度变快', '重复项自动去重', '不会有任何影响'],
        answer: 0,
        explanation: ':key 必须唯一，重复的 key 会导致 Vue 复用错误的 DOM，出现状态错乱。'
      },
      {
        type: 'judge',
        question: ':key 的值应使用唯一且稳定的标识（如 item.id），而不是数组索引。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '索引会随列表顺序变化，使用唯一稳定的 id 才能保证更新正确高效。'
      },
      {
        type: 'multiple',
        question: '关于 v-model 双向绑定，下列说法正确的有？（多选）',
        options: ['数据变化时输入框内容会更新', '用户输入时数据会同步变化', '可以用在 textarea 上', '使用后数据的响应式会被禁用'],
        answer: [0, 1, 2],
        explanation: 'v-model 是数据与表单控件之间的双向同步，不影响数据本身的响应式。'
      },
      {
        type: 'single',
        question: '模板插值 {{ }} 中可以编写的内容是？',
        options: ['简单的 JavaScript 表达式', '多条语句和 for 循环', 'import 导入语句', '会被解析成 DOM 的 HTML 字符串'],
        answer: 0,
        explanation: '插值只支持简单表达式；HTML 字符串不会被解析，会按普通文本显示。'
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
      },
      {
        type: 'single',
        question: '在模板中使用 ref 声明的 count，正确写法是？',
        options: ['{{ count.value }}', '{{ count }}', '{{ count() }}', '{{ count[0] }}'],
        answer: 1,
        explanation: 'ref 在模板中会自动解包，直接写 {{ count }} 即可。'
      },
      {
        type: 'single',
        question: '想从 reactive 对象中解构出属性且保持响应式，应使用？',
        options: ['toRefs', 'toRaw', 'markRaw', 'shallowRef'],
        answer: 0,
        explanation: 'toRefs 会把 reactive 对象的属性转成 ref，解构后仍保持响应式。'
      },
      {
        type: 'judge',
        question: 'ref 可以包装数字、字符串以及对象等任意类型的值。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'ref 可以包装任意类型，这也是官方推荐优先使用 ref 的原因之一。'
      },
      {
        type: 'judge',
        question: '对 reactive 声明的对象整体重新赋值，不会断开响应式连接。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '整体替换 reactive 对象会丢失响应式，这是 reactive 的注意点之一。'
      },
      {
        type: 'multiple',
        question: '相比 Vue2 的 Object.defineProperty，基于 Proxy 的响应式能检测到哪些操作？（多选）',
        options: ['新增属性', '删除属性', '修改已有属性', '变量提升'],
        answer: [0, 1, 2],
        explanation: 'Proxy 能拦截更多操作，包括新增、删除和修改属性。'
      },
      {
        type: 'multiple',
        question: '关于 ref，下列说法正确的有？（多选）',
        options: ['返回带 .value 属性的对象', 'script 中读写需通过 .value', '模板中会自动解包', '只能包装对象类型'],
        answer: [0, 1, 2],
        explanation: 'ref 可以包装任意类型的值，不局限于对象。'
      },
      {
        type: 'single',
        question: '面试题：const count = ref(0) 后，在模板中写 {{ count.value }} 会显示什么？',
        options: ['显示 0', '显示 undefined', '直接报错', '显示 [object Object]'],
        answer: 1,
        explanation: '模板中 ref 会自动解包，count 已经是数值 0，再访问 .value 得到 undefined。'
      },
      {
        type: 'single',
        question: '面试情景：把 reactive 对象 state 直接解构出 name 后，再修改 state.name，页面上的 name 会怎样？',
        options: ['同步更新', '不再更新，解构丢失了响应式', '延迟一会儿才更新', '页面直接报错'],
        answer: 1,
        explanation: '直接解构 reactive 对象会丢失响应式，需要解构时应使用 toRefs。'
      },
      {
        type: 'single',
        question: 'ref 和 reactive 的响应式底层都基于什么实现？',
        options: ['ES6 Proxy', 'Object.defineProperty', '手动发布订阅', '虚拟 DOM diff'],
        answer: 0,
        explanation: 'Vue3 响应式系统基于 ES6 Proxy，能检测新增、删除属性等更多操作。'
      },
      {
        type: 'judge',
        question: 'ref 包装对象类型的值时，其内部深层属性同样具有响应式。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'ref 内部会借助 reactive 处理对象值，因此深层属性也是响应式的。'
      },
      {
        type: 'multiple',
        question: '面试情景：下列操作会导致响应式丢失的有？（多选）',
        options: ['直接解构 reactive 对象的属性', '把 reactive 对象整体替换为另一个对象', '通过 state.age = 20 修改 reactive 属性', '通过 count.value = 5 修改 ref'],
        answer: [0, 1],
        explanation: '解构 reactive 属性和整体替换 reactive 对象都会断开响应式连接，后两种是标准写法。'
      },
      {
        type: 'multiple',
        question: '关于 ref 在模板中的自动解包，下列说法正确的有？（多选）',
        options: ['模板中直接写 {{ count }} 即可读取值', 'script 中仍需通过 .value 读写', '自动解包只发生在模板渲染中', 'script 中也可以省略 .value'],
        answer: [0, 1, 2],
        explanation: 'script 中必须写 .value，只有模板里 ref 才会自动解包。'
      },
      {
        type: 'judge',
        question: '普通的 JavaScript 变量被修改后，Vue 页面会自动更新。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '普通变量不具备响应式，必须用 ref 或 reactive 声明数据才会驱动视图更新。'
      },
      {
        type: 'single',
        question: '面试情景：要声明一个简单的响应式计数器，官方更推荐的写法是？',
        options: ['reactive 包装后解构使用', 'const count = ref(0)', '用 let 声明普通变量', '挂载到 window 上'],
        answer: 1,
        explanation: '简单值推荐用 ref；reactive 解构会丢失响应式，普通变量不具备响应式。'
      },
      {
        type: 'single',
        question: '关于 toRefs 的作用，下列说法正确的是？',
        options: ['把 reactive 对象的属性转成 ref，解构后保持响应式', '把 ref 转成普通值', '彻底移除对象的响应式', '对对象做深拷贝'],
        answer: 0,
        explanation: 'toRefs 用于从 reactive 对象中解构属性时保持响应式连接。'
      },
      {
        type: 'multiple',
        question: '面试情景：下列哪些是适合使用 ref 而非 reactive 的场景？（多选）',
        options: ['声明一个数字计数器', '声明一个字符串标题', '需要把状态解构后传给其他地方使用', '声明一个永不修改的常量配置'],
        answer: [0, 1, 2],
        explanation: '简单值用 ref；reactive 不能解构。常量配置不需要响应式，两者都不必用。'
      },
      {
        type: 'single',
        question: 'reactive 声明对象后，修改其中属性的正确写法是？',
        options: ['state.age = 20', 'state.age.value = 20', 'set(state.age, 20)', 'reactive(state.age)'],
        answer: 0,
        explanation: 'reactive 对象访问和修改属性都无需 .value，直接 state.age = 20 即可。'
      },
      {
        type: 'single',
        question: '在工程化项目的 script setup 中引入 ref 的正确方式是？',
        options: ['import { ref } from \'vue\'', '直接 new ref(0)', '从 window 对象上获取', 'ref 是关键字无需引入'],
        answer: 0,
        explanation: 'ref、reactive 等 API 都需要从 vue 中导入后使用。'
      },
      {
        type: 'judge',
        question: 'reactive 除了包装普通对象，也可以用于数组类型。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'reactive 支持对象类型，数组也属于对象类型。'
      },
      {
        type: 'judge',
        question: '用 ref 包装对象后，在 script 中访问对象属性要写成 user.value.name 的形式。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'ref 在 script 中必须先通过 .value 拿到包装的值，再访问其属性。'
      },
      {
        type: 'multiple',
        question: '关于 reactive 的使用限制，下列说法正确的有？（多选）',
        options: ['只能用于对象类型', '不能整体替换为新对象', '直接解构属性会丢失响应式', '包装的对象中不能包含数组'],
        answer: [0, 1, 2],
        explanation: 'reactive 的对象里可以包含数组，数组本身也会是响应式的。'
      },
      {
        type: 'multiple',
        question: '下列哪些声明方式能创建出响应式数据？（多选）',
        options: ['const n = ref(0)', 'const s = reactive({ a: 1 })', 'const list = ref([])', 'let n = 0'],
        answer: [0, 1, 2],
        explanation: 'let 声明的普通变量不具备响应式，修改后页面不会更新。'
      },
      {
        type: 'single',
        question: '面试题：const user = ref({ name: \'小明\' })，在模板中显示名字的正确写法是？',
        options: ['{{ user.name }}', '{{ user.value.name }}', '{{ name }}', '{{ user(name) }}'],
        answer: 0,
        explanation: '模板中 ref 自动解包，直接 {{ user.name }} 即可，不要再写 .value。'
      },
      {
        type: 'judge',
        question: 'ref 声明的数据在模板中读取时必须写上 .value。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '模板中 ref 会自动解包，直接写变量名即可；.value 只在 script 中需要。'
      },
      {
        type: 'multiple',
        question: '面试情景：下列哪些写法能正确触发视图更新？（多选）',
        options: ['对 ref 执行 count.value++', '对 reactive 执行 state.age++', '修改通过 toRefs 解构出的 ref 的 .value', '给直接解构自 reactive 的普通变量重新赋值'],
        answer: [0, 1, 2],
        explanation: '直接解构 reactive 得到的是普通值，修改它与响应式对象已断开连接。'
      },
      {
        type: 'single',
        question: '关于选择 ref 还是 reactive 的实践建议，正确的是？',
        options: ['简单值用 ref，复杂状态对象才考虑 reactive', '无论什么数据一律用 reactive', '无论什么数据一律用普通变量', '随机选择即可，没有差别'],
        answer: 0,
        explanation: '官方推荐优先使用 ref；reactive 适合管理内聚的复杂状态对象。'
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
      },
      {
        type: 'single',
        question: 'computed 接收的参数是什么？',
        options: ['一个函数', '一个字符串', '一个 DOM 元素', '一个组件实例'],
        answer: 0,
        explanation: 'computed 接收一个函数，函数的返回值就是计算属性的值。'
      },
      {
        type: 'single',
        question: '想让 watch 深度监听对象内部的变化，应设置哪个选项？',
        options: ['immediate: true', 'deep: true', 'once: true', 'lazy: true'],
        answer: 1,
        explanation: 'deep: true 会深度监听对象内部属性的变化。'
      },
      {
        type: 'judge',
        question: 'computed 返回的是一个响应式引用，可以直接在模板中使用。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'computed 返回只读的响应式引用，模板中直接写 {{ total }} 即可。'
      },
      {
        type: 'judge',
        question: '能用 computed 实现的派生数据，官方更推荐改用 watch 来实现。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '能用 computed 解决的就优先用 computed，它声明式、带缓存、更好维护。'
      },
      {
        type: 'multiple',
        question: '关于 computed 计算属性，下列说法正确的有？（多选）',
        options: ['用于算出一个新值', '具有缓存特性', '是同步的派生数据', '适合在内部发送异步请求'],
        answer: [0, 1, 2],
        explanation: '异步请求等副作用应交给 watch，computed 负责同步派生。'
      },
      {
        type: 'multiple',
        question: '关于 watchEffect，下列说法正确的有？（多选）',
        options: ['会自动收集回调里用到的依赖', '依赖变化时会重新执行', '适合依赖较多的场景', '必须显式传入要监听的数据源'],
        answer: [0, 1, 2],
        explanation: 'watchEffect 不需要显式指定数据源，它会自动追踪回调中用到的依赖。'
      },
      {
        type: 'single',
        question: '面试题：搜索框输入变化后等待用户停手再发请求（防抖），最适合使用？',
        options: ['computed', 'watch', 'v-model', 'props'],
        answer: 1,
        explanation: '防抖属于变化后执行副作用，应在 watch 回调中配合定时器实现。'
      },
      {
        type: 'single',
        question: '面试情景：要监听 reactive 对象 state 的 count 属性，watch 的数据源正确写法是？',
        options: ['watch(state.count, cb)', 'watch(() => state.count, cb)', 'watch(\'state.count\', cb)', 'watch(count, cb)'],
        answer: 1,
        explanation: '监听 reactive 对象的某个属性，数据源需要写成函数形式 () => state.count。'
      },
      {
        type: 'judge',
        question: 'watch 的回调函数可以同时拿到数据变化后的新值和变化前的旧值。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'watch 回调的参数就是 (newVal, oldVal)，方便对比前后变化。'
      },
      {
        type: 'multiple',
        question: '面试情景：下列需求中更适合用 computed 而非 watch 的有？（多选）',
        options: ['计算购物车商品总价', '根据关键字过滤出要展示的列表', '把姓和名拼成全名展示', '关键字变化后发送搜索请求'],
        answer: [0, 1, 2],
        explanation: '前三项都是同步派生数据，用 computed 带缓存更好；发请求属于副作用，用 watch。'
      },
      {
        type: 'single',
        question: 'computed 默认是只读的，直接给计算属性赋值通常会？',
        options: ['正常生效并更新依赖', '发出警告且不生效', '自动转成可写 ref', '触发页面刷新'],
        answer: 1,
        explanation: '默认 computed 只读，赋值会在开发环境警告；需要可写计算属性得传入 get/set 对象。'
      },
      {
        type: 'judge',
        question: '只要依赖的数据不变，多次访问同一个 computed 只会计算一次。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '缓存是 computed 的核心特性，依赖不变时直接返回缓存结果。'
      },
      {
        type: 'multiple',
        question: '关于 watch 的使用，下列说法正确的有？（多选）',
        options: ['immediate: true 让回调创建时立即执行一次', 'deep: true 深度监听对象内部变化', '监听 reactive 对象的属性要写成函数形式', 'watch 只能监听 ref，不能监听 getter 函数'],
        answer: [0, 1, 2],
        explanation: 'watch 的数据源可以是 ref、reactive 对象或返回值的 getter 函数。'
      },
      {
        type: 'single',
        question: '面试情景：watch 回调中发起搜索请求，用户连续输入导致旧请求比新请求更晚返回，可能出现的问题是？',
        options: ['不会有任何问题', '旧结果覆盖新结果，出现竞态问题', 'computed 全部失效', '路由自动跳转'],
        answer: 1,
        explanation: '异步副作用要考虑竞态，可通过取消防抖或只采用最新一次结果来处理。'
      },
      {
        type: 'single',
        question: 'watchEffect 与 watch 的主要区别是？',
        options: ['watchEffect 自动收集回调中用到的依赖，无需显式指定数据源', 'watchEffect 执行速度一定更快', 'watch 不支持异步回调', '两者完全没有区别'],
        answer: 0,
        explanation: 'watchEffect 自动追踪依赖，适合依赖较多的场景；watch 需显式指定数据源。'
      },
      {
        type: 'judge',
        question: 'computed 的函数内部适合编写发送异步请求的逻辑。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: 'computed 应是同步的纯计算，异步请求等副作用应放在 watch 中。'
      },
      {
        type: 'single',
        question: 'computed 的返回值是什么？',
        options: ['一个只读的响应式引用', '一个普通数字', '一个 Promise', '一个 DOM 节点'],
        answer: 0,
        explanation: 'computed 返回只读的响应式引用，可以直接在模板中使用。'
      },
      {
        type: 'single',
        question: '用 watch 监听一个 ref 数据时，数据源的正确写法是？',
        options: ['watch(count, cb)', 'watch(count.value, cb)', 'watch(\'count\', cb)', 'watch(cb, count)'],
        answer: 0,
        explanation: '监听 ref 直接传入 ref 本身即可；监听 reactive 的属性才需要写成函数形式。'
      },
      {
        type: 'judge',
        question: 'watchEffect 的回调在创建时会立即执行一次。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'watchEffect 创建时立即执行并自动收集依赖，之后依赖变化就重新执行。'
      },
      {
        type: 'judge',
        question: 'watch 可以把多个数据源放进一个数组中同时监听。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'watch 的第一个参数可以是数组，任一数据源变化都会触发回调。'
      },
      {
        type: 'multiple',
        question: 'watch 的数据源可以是下列哪些形式？（多选）',
        options: ['一个 ref', '一个 reactive 对象', '一个返回值的 getter 函数', '一个 DOM 元素'],
        answer: [0, 1, 2],
        explanation: '数据源必须是响应式数据或 getter 函数，DOM 元素不能作为数据源。'
      },
      {
        type: 'multiple',
        question: '关于 computed 的缓存机制，下列说法正确的有？（多选）',
        options: ['依赖不变时多次访问只计算一次', '依赖变化后会重新计算', '比模板中内联写表达式更省计算', '缓存意味着永远不会重新计算'],
        answer: [0, 1, 2],
        explanation: '缓存只在依赖不变时生效，依赖一旦变化就会重新计算。'
      },
      {
        type: 'single',
        question: '面试情景：表单中「全名」由「姓」和「名」拼接展示，不涉及任何请求，最合适的实现是？',
        options: ['computed 计算属性', 'watch 侦听器', 'onMounted 中手动拼接', 'setInterval 定时拼接'],
        answer: 0,
        explanation: '同步派生数据用 computed，声明式且带缓存，模板也更简洁。'
      },
      {
        type: 'judge',
        question: 'computed 的依赖数据变化后，下次访问该计算属性时会重新计算。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '依赖变化会使缓存失效，再次访问时重新执行计算函数。'
      },
      {
        type: 'multiple',
        question: '面试情景：实现搜索建议功能，合理的做法有？（多选）',
        options: ['用 watch 监听搜索关键字', '在回调中防抖后再发送请求', '注意处理旧请求覆盖新结果的竞态问题', '在 computed 内部直接发送请求'],
        answer: [0, 1, 2],
        explanation: '发请求属于副作用应放在 watch 中；computed 只做同步派生。'
      },
      {
        type: 'single',
        question: '面试情景：需要在数据变化时对比新旧值来决定后续逻辑，应选择？',
        options: ['watch', 'computed', 'v-if', '插值表达式'],
        answer: 0,
        explanation: 'watch 回调能同时拿到新值和旧值，正好满足对比前后变化的需求。'
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
      },
      {
        type: 'single',
        question: 'Vue 单文件组件的文件扩展名是？',
        options: ['.js', '.vue', '.jsx', '.html'],
        answer: 1,
        explanation: '单文件组件以 .vue 结尾，包含 template、script、style 三部分。'
      },
      {
        type: 'single',
        question: '在 script setup 中，子组件声明接收 props 使用的宏是？',
        options: ['defineEmits', 'defineProps', 'defineModel', 'defineExpose'],
        answer: 1,
        explanation: 'defineProps 用于声明组件接收的 props，可以写数组或对象形式。'
      },
      {
        type: 'judge',
        question: 'Vue 单文件组件通常由 template、script、style 三部分组成。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'template 写结构，script 写逻辑，style 写样式。'
      },
      {
        type: 'judge',
        question: '在 script setup 中，顶层声明的变量必须显式 return 才能在模板中使用。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: 'script setup 中顶层声明的变量和方法可直接在模板中使用，无需返回。'
      },
      {
        type: 'multiple',
        question: 'defineProps 用对象形式声明 prop 时，可以指定哪些内容？（多选）',
        options: ['类型 type', '默认值 default', '接收哪些 prop', '组件的生命周期钩子'],
        answer: [0, 1, 2],
        explanation: '生命周期钩子与 defineProps 无关，需单独从 vue 导入使用。'
      },
      {
        type: 'multiple',
        question: '关于 emit 的使用，下列说法正确的有？（多选）',
        options: ['先用 defineEmits 声明会触发的事件', '调用 emit 时可以携带数据', '父组件用 @事件名 接收消息', 'emit 只能传递字符串类型的数据'],
        answer: [0, 1, 2],
        explanation: 'emit 可以携带任意类型的数据，不限于字符串。'
      },
      {
        type: 'single',
        question: '面试题：子组件想基于 prop 的值维护一份可编辑的本地数据，正确做法是？',
        options: ['直接修改 prop', '把 prop 复制到本地 ref 中再修改', '用 v-model 直接改 prop', '在子组件里调用 defineProps 覆盖'],
        answer: 1,
        explanation: 'props 单向数据流不可直接改，需要本地编辑时应复制到本地响应式变量。'
      },
      {
        type: 'single',
        question: '面试情景：父组件需要响应子组件的按钮点击并累加数量，正确的通信方式是？',
        options: ['子组件 emit 自定义事件，父组件用 @事件名 接收', '子组件直接修改父组件的变量', '父组件定时轮询子组件的状态', '子组件通过 v-if 通知父组件'],
        answer: 0,
        explanation: '子传父的标准方式就是 emit 事件，父组件像监听原生事件一样接收。'
      },
      {
        type: 'judge',
        question: 'props 是单向数据流：父组件数据更新会流向子组件，子组件不应反向修改 prop。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '单向数据流让数据流向清晰，便于排查问题，是 props 的核心原则。'
      },
      {
        type: 'multiple',
        question: '面试情景：封装一个通用按钮组件，下列设计合理的有？（多选）',
        options: ['通过 props 接收按钮文字', '点击时 emit 事件通知父组件', '样式写在 style scoped 中避免污染', '在子组件内部直接修改父组件的数据'],
        answer: [0, 1, 2],
        explanation: '子组件不应直接修改父组件数据，应通过 emit 事件把变化通知出去。'
      },
      {
        type: 'single',
        question: '面试情景：父组件传 :count="10"，子组件却把 count 声明为 String 类型，开发环境下会？',
        options: ['正常运行且无任何提示', '控制台出现 props 类型校验警告', '页面直接白屏', '自动把类型改成 Number'],
        answer: 1,
        explanation: 'defineProps 指定类型后 Vue 会做开发环境校验，类型不符会在控制台警告。'
      },
      {
        type: 'judge',
        question: 'defineProps 用对象形式声明 prop 时，可以通过 default 指定默认值。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '对象形式可配置 type、default 等，父组件未传时使用默认值。'
      },
      {
        type: 'multiple',
        question: '关于 script setup，下列说法正确的有？（多选）',
        options: ['顶层声明的变量可直接用于模板', '用 defineProps 声明接收的 props', '用 defineEmits 声明会触发的事件', '必须手动 return 所有要在模板中使用的变量'],
        answer: [0, 1, 2],
        explanation: 'script setup 无需显式返回，顶层声明自动暴露给模板。'
      },
      {
        type: 'single',
        question: '面试情景：两个兄弟组件之间需要共享并同步一份数据，最合理的基础做法是？',
        options: ['各自直接读写对方的数据', '把状态提升到共同父组件，用 props 下发、emit 上报', '定义全局变量随意读写', '用 v-if 互相控制'],
        answer: 1,
        explanation: '兄弟组件通信的经典方案是状态提升到共同父组件；跨层级更多时再考虑 provide 或 Pinia。'
      },
      {
        type: 'judge',
        question: '子组件 emit(\'add\', 1) 后，父组件可以用 @add="handler" 监听并在 handler 中拿到 1。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'emit 的第二个参数会作为参数传给父组件的事件处理函数。'
      },
      {
        type: 'single',
        question: '使用组件时给标签起名字，推荐的写法是？',
        options: ['大驼峰或短横线形式', '必须全部小写无连字符', '必须以数字开头', '必须使用中文'],
        answer: 0,
        explanation: '组件标签名一般采用大驼峰（如 UserCard）或短横线（如 user-card）形式。'
      },
      {
        type: 'single',
        question: '父组件向子组件传递动态数据（变量或表达式）时，属性前需要加什么符号？',
        options: [':', '@', '#', '.'],
        answer: 0,
        explanation: '动态绑定属性用 v-bind（缩写 :），如 :count="num"；不加冒号传递的是字符串字面量。'
      },
      {
        type: 'single',
        question: 'defineProps 除了对象形式，还可以用哪种形式快速声明要接收的 prop 名？',
        options: ['数组形式', '字符串拼接', 'JSON 文件', '正则表达式'],
        answer: 0,
        explanation: 'defineProps([\'title\', \'count\']) 是数组形式，适合不需要校验的简单场景。'
      },
      {
        type: 'single',
        question: 'defineEmits 调用后的返回值是？',
        options: ['一个用于触发事件的 emit 函数', '一个响应式 ref', '父组件实例', '当前路由对象'],
        answer: 0,
        explanation: 'const emit = defineEmits([\'add\']) 得到 emit 函数，用 emit(\'add\', 数据) 触发事件。'
      },
      {
        type: 'single',
        question: '面试情景：prop 声明了 default: \'默认标题\'，父组件没有传该 prop 时，子组件拿到的是？',
        options: ['default 指定的默认值', 'undefined', '直接报错', '空字符串'],
        answer: 0,
        explanation: '父组件未传时使用 default 指定的默认值，让组件更健壮。'
      },
      {
        type: 'judge',
        question: 'defineProps([\'title\']) 这样的数组形式也是合法的 prop 声明方式。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '数组形式只声明 prop 名，不做类型校验；需要校验时用对象形式。'
      },
      {
        type: 'judge',
        question: '父组件传字符串字面量时属性不加冒号，传变量或表达式时才需要加冒号。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'title="你好" 传的是字符串；:count="num" 传的是变量 num 的值。'
      },
      {
        type: 'judge',
        question: 'emit 触发事件时最多只能携带一个参数，不能携带多个。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: 'emit 可以携带多个参数，如 emit(\'change\', a, b)，父组件处理函数按顺序接收。'
      },
      {
        type: 'multiple',
        question: '把页面拆分成多个组件的好处有？（多选）',
        options: ['代码更易维护', '组件可以在多处复用', '每个组件职责单一清晰', '拆分后页面加载速度一定翻倍'],
        answer: [0, 1, 2],
        explanation: '拆分带来可维护性和复用性，但加载速度取决于资源体积等因素，并非必然翻倍。'
      },
      {
        type: 'multiple',
        question: '下列哪些是合法的 prop 声明写法？（多选）',
        options: ['defineProps([\'title\'])', 'defineProps({ title: String })', 'defineProps({ title: { type: String, default: \'你好\' } })', 'defineProps = [\'title\']'],
        answer: [0, 1, 2],
        explanation: 'defineProps 是宏调用，不能用赋值的方式声明。'
      },
      {
        type: 'multiple',
        question: '关于 emit 自定义事件，下列说法正确的有？（多选）',
        options: ['事件名可以自定义，如 \'add\'', '触发时可以携带数据给父组件', '父组件用 @事件名 监听', 'emit 可以直接修改父组件的 prop'],
        answer: [0, 1, 2],
        explanation: 'emit 只是通知父组件，数据修改由父组件自己完成，prop 依然不可直接改。'
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
      },
      {
        type: 'single',
        question: '数据更新导致页面重新渲染后触发的钩子是？',
        options: ['onMounted', 'onUpdated', 'onUnmounted', 'onCreated'],
        answer: 1,
        explanation: 'onUpdated 在数据导致页面更新后触发。'
      },
      {
        type: 'single',
        question: '组合式 API 组织代码的方式是？',
        options: ['按 data、methods 分类放置', '按功能把相关代码聚在一起', '所有逻辑必须写在 data 中', '只能配合类组件使用'],
        answer: 1,
        explanation: '组合式 API 按功能组织代码，同一功能的数据、方法、计算属性写在一起。'
      },
      {
        type: 'judge',
        question: 'script setup 是组合式 API 的语法糖，写起来最简洁。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'script setup 让组合式 API 的写法更加简洁直观。'
      },
      {
        type: 'judge',
        question: '在 onUnmounted 中不清除 setInterval，组件销毁后定时器会自动停止。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '定时器不会自动停止，必须在卸载时 clearInterval，否则造成内存泄漏。'
      },
      {
        type: 'multiple',
        question: '组合式 API 相比选项式 API 的优势有？（多选）',
        options: ['同一功能的代码可以写在一起', '便于逻辑复用', '阅读和维护更顺畅', '完全废弃了选项式 API'],
        answer: [0, 1, 2],
        explanation: '选项式 API 依然可用，组合式 API 是补充而非废弃。'
      },
      {
        type: 'multiple',
        question: '关于组合式函数，下列说法正确的有？（多选）',
        options: ['本质上是一个普通函数', '内部可以使用 ref、computed 等 API', '通常把状态和方法返回出去', '所有组件调用后共享同一份状态'],
        answer: [0, 1, 2],
        explanation: '每个组件调用组合式函数都会得到一份独立的响应式状态。'
      },
      {
        type: 'single',
        question: '面试题：组件中创建的定时器，在哪个钩子中清理最合适？',
        options: ['onMounted', 'onUnmounted', 'onUpdated', 'watch 回调中'],
        answer: 1,
        explanation: 'onUnmounted 在组件卸载后触发，是清理定时器、事件监听的正确时机。'
      },
      {
        type: 'single',
        question: '面试情景：发现三个组件都有获取列表数据并分页的相似逻辑，最好的做法是？',
        options: ['复制三份代码各自维护', '抽取成组合式函数 usePagination', '把数据放到全局变量中共享', '用 props 一层层传递逻辑'],
        answer: 1,
        explanation: '多组件有相似逻辑时，抽取组合式函数复用是 Vue3 推荐的做法。'
      },
      {
        type: 'judge',
        question: '组合式 API 中的生命周期钩子以 on 开头命名，如 onMounted、onUnmounted。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '组合式 API 钩子统一以 on 开头，需从 vue 中导入后使用。'
      },
      {
        type: 'multiple',
        question: '面试情景：关于组合式函数与普通工具函数的区别，正确的有？（多选）',
        options: ['组合式函数管理的是响应式状态', '组合式函数内部可以使用生命周期钩子', '每次调用组合式函数都会创建独立状态', '两者在使用上完全没有区别'],
        answer: [0, 1, 2],
        explanation: '普通工具函数处理纯计算，组合式函数处理响应式状态和副作用。'
      },
      {
        type: 'single',
        question: '组合式 API 中使用 onMounted 等生命周期钩子的方式是？',
        options: ['从 vue 中导入后调用', '全局自动可用，直接使用', '挂在 window 对象上调用', '写在 template 标签属性里'],
        answer: 0,
        explanation: '钩子需从 vue 导入后在 setup 中调用，如 import { onMounted } from \'vue\'。'
      },
      {
        type: 'judge',
        question: 'onMounted 是发送初始请求或操作 DOM 的常用时机。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '组件挂载完成后 DOM 已可用，适合发请求和操作 DOM。'
      },
      {
        type: 'multiple',
        question: '关于 onUnmounted，下列说法正确的有？（多选）',
        options: ['在组件卸载后触发', '适合清理定时器', '适合移除 window 上的事件监听', '适合发送初始请求'],
        answer: [0, 1, 2],
        explanation: '初始请求应放在 onMounted；onUnmounted 的职责是清理副作用。'
      },
      {
        type: 'single',
        question: '面试情景：组件给 window 添加了 resize 监听却忘了移除，组件被反复创建销毁会导致？',
        options: ['没有任何影响', '监听器不断累积，内存泄漏且回调重复执行', '页面自动刷新', '路由失效'],
        answer: 1,
        explanation: '全局事件监听必须在 onUnmounted 中移除，否则会累积造成内存泄漏。'
      },
      {
        type: 'single',
        question: '面试题：同一个组合式函数被两个组件分别调用，它们得到的状态关系是？',
        options: ['共享同一份状态', '各自拥有独立状态', '第二个组件会报错', '随机共享'],
        answer: 1,
        explanation: '每次调用都会执行函数体创建新的 ref，各组件状态相互独立。'
      },
      {
        type: 'judge',
        question: '选项式 API 把一个功能的逻辑分散在 data、methods、computed 等多处。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '这正是组合式 API 要改善的问题：让同一功能的代码聚在一起。'
      },
      {
        type: 'single',
        question: '选项式 API 中 data 里声明的状态，在组合式 API 中通常用什么创建？',
        options: ['ref 或 reactive', '继续写 data 函数', 'new Object()', 'localStorage'],
        answer: 0,
        explanation: '组合式 API 中用 ref 和 reactive 声明响应式状态，替代选项式的 data。'
      },
      {
        type: 'single',
        question: '选项式 API 的 mounted 钩子，在组合式 API 中对应的是？',
        options: ['onMounted', 'onCreate', 'onStart', 'onReady'],
        answer: 0,
        explanation: '组合式 API 钩子在选项式名称前加 on：mounted 对应 onMounted。'
      },
      {
        type: 'single',
        question: '面试情景：封装 useCounter 时希望调用方能指定初始值，合理的做法是？',
        options: ['让函数接收参数，如 useCounter(10)', '把初始值写死不可改', '改用全局变量传值', '通过 localStorage 传入'],
        answer: 0,
        explanation: '组合式函数就是普通函数，可以通过参数接收配置，如 useCounter(10)。'
      },
      {
        type: 'single',
        question: '面试题：相比 Vue2 的 mixin，组合式函数在类型支持上的优势是？',
        options: ['对 TypeScript 更友好', '完全不支持类型', '必须把所有状态标成 any', '与类型支持无关'],
        answer: 0,
        explanation: '组合式函数是普通函数，参数和返回值都可以有明确的类型推导，比 mixin 类型友好。'
      },
      {
        type: 'judge',
        question: '同一个组件中可以多次注册 onMounted，这些回调会依次执行。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '同一钩子可以注册多次，按注册顺序依次执行，常见于组合式函数各自注册钩子。'
      },
      {
        type: 'judge',
        question: 'Vue2 的 mixin 存在数据来源不清晰、多个 mixin 之间容易命名冲突的问题。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '这正是组合式函数要替代 mixin 的原因：来源清晰、无命名冲突、类型友好。'
      },
      {
        type: 'judge',
        question: '选项式 API 中 methods 里定义的方法，在组合式 API 中就是普通的函数声明，可直接绑定到模板事件。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'script setup 中顶层声明的 function 可直接在模板中通过 @click 等绑定使用。'
      },
      {
        type: 'multiple',
        question: '关于 mixin 与组合式函数的对比，下列说法正确的有？（多选）',
        options: ['mixin 的数据来源不清晰', '多个 mixin 容易产生命名冲突', '组合式函数数据来源清晰、类型友好', 'mixin 与组合式函数在使用体验上没有任何区别'],
        answer: [0, 1, 2],
        explanation: '组合式函数正是针对 mixin 的这些痛点设计的复用方案。'
      },
      {
        type: 'multiple',
        question: '关于 script setup 顶层代码，下列说法正确的有？（多选）',
        options: ['可以直接声明响应式数据', '顶层声明的函数可直接绑定到模板事件', '可以在顶层调用生命周期钩子', '顶层代码会在每次数据更新时重新执行一遍'],
        answer: [0, 1, 2],
        explanation: 'setup 顶层代码只在组件初始化时执行一次，数据更新由响应式系统驱动视图。'
      },
      {
        type: 'multiple',
        question: '关于 onUpdated，下列说法正确的有？（多选）',
        options: ['在数据导致页面更新后触发', '可以用于观察更新后的 DOM', '其中的回调会频繁触发时要注意性能', '在组件挂载之前触发'],
        answer: [0, 1, 2],
        explanation: 'onUpdated 在挂载后的每次更新时触发，应避免在其中做高开销操作。'
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
      },
      {
        type: 'single',
        question: '没有名字的默认插槽，其插槽名实际是？',
        options: ['main', 'default', 'body', 'anonymous'],
        answer: 1,
        explanation: '未指定 name 的插槽名为 default。'
      },
      {
        type: 'single',
        question: '子组件给插槽起名为 header，正确写法是？',
        options: ['<slot name="header">', '<slot #header>', '<slot :header>', '<slot header>'],
        answer: 0,
        explanation: '子组件通过 <slot name="header"> 给插槽命名；#header 是父组件使用的写法。'
      },
      {
        type: 'judge',
        question: '父组件传入多个插槽内容时，渲染位置由父组件书写的先后顺序决定。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '渲染位置由子组件模板中 slot 的位置决定，与父组件书写顺序无关。'
      },
      {
        type: 'judge',
        question: '普通插槽的内容写在父组件里，只能访问父组件的数据。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '普通插槽编译在父组件作用域，访问子组件数据需用作用域插槽。'
      },
      {
        type: 'multiple',
        question: '关于具名插槽，下列说法正确的有？（多选）',
        options: ['子组件通过 name 属性给插槽起名', '父组件用 <template #插槽名> 指定内容', '# 是 v-slot 的缩写', '一个组件最多只能有一个插槽'],
        answer: [0, 1, 2],
        explanation: '具名插槽正是为了让一个组件拥有多个内容出口。'
      },
      {
        type: 'multiple',
        question: '关于作用域插槽，下列说法正确的有？（多选）',
        options: ['子组件在 slot 标签上绑定属性传递数据', '父组件通过 v-slot 接收插槽数据', '典型场景是列表项结构由父组件决定、数据由子组件提供', '使用作用域插槽后默认插槽会被禁用'],
        answer: [0, 1, 2],
        explanation: '作用域插槽与默认插槽互不影响，可以共存。'
      },
      {
        type: 'single',
        question: '作用域插槽中，子组件把数据传给插槽内容的方式是？',
        options: ['在 slot 标签上绑定属性', '使用 defineProps 声明', '使用 emit 触发事件', '使用 provide 提供'],
        answer: 0,
        explanation: '子组件在 <slot :msg="message"> 上绑定属性，父组件通过 v-slot 接收。'
      },
      {
        type: 'judge',
        question: '父组件没有给某个具名插槽传内容时，该插槽会显示子组件 slot 标签内的后备内容。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '具名插槽和默认插槽一样，slot 标签内部的内容就是未传内容时的后备内容。'
      },
      {
        type: 'single',
        question: '插槽让组件更灵活的本质是？',
        options: ['组件的部分内容由使用它的父组件决定', '组件可以无限嵌套', '样式自动隔离', '数据自动双向绑定'],
        answer: 0,
        explanation: '组件提供框架，内容由使用者放入，这正是插槽提升复用性的方式。'
      },
      {
        type: 'single',
        question: '面试情景：封装一个弹窗组件，标题和底部按钮区域都要由使用者自定义，应采用？',
        options: ['只保留一个默认插槽', '用具名插槽分别提供 header 和 footer 出口', '用多个 props 传 HTML 字符串', '用 provide / inject'],
        answer: 1,
        explanation: '多个可定制区域对应多个具名插槽，比传 HTML 字符串更安全清晰。'
      },
      {
        type: 'judge',
        question: '<template #default> 对应的就是子组件中未命名的默认插槽。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '未命名插槽的名字是 default，#default 显式指定了它。'
      },
      {
        type: 'multiple',
        question: '面试情景：封装列表组件，要求每行结构由使用方决定、行数据由列表组件提供，正确的做法有？（多选）',
        options: ['子组件用 v-for 循环渲染 slot', '子组件在 slot 上绑定每行的数据', '父组件用 v-slot 接收每行数据再渲染', '父组件把每行数据逐个通过 props 传给子组件'],
        answer: [0, 1, 2],
        explanation: '数据在子组件手里，应由子组件通过作用域插槽传给父组件的插槽内容。'
      },
      {
        type: 'multiple',
        question: '关于插槽的作用域规则，下列说法正确的有？（多选）',
        options: ['插槽内容可以访问父组件的数据', '插槽内容默认不能访问子组件的数据', '子组件可通过 slot 上的属性向插槽传数据', '插槽内容可以直接修改子组件内部数据'],
        answer: [0, 1, 2],
        explanation: '插槽内容编译在父组件作用域，想拿子组件数据必须通过作用域插槽传递。'
      },
      {
        type: 'judge',
        question: '具名插槽的内容需要写在 template 标签内并配合 #插槽名 使用。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '<template #header> 是向具名插槽传内容的标准写法。'
      },
      {
        type: 'single',
        question: '下列哪种场景最适合使用插槽而不是 props？',
        options: ['传递一个数字', '传递一段带 HTML 结构的复杂内容', '传递一个布尔开关', '传递一个字符串标题'],
        answer: 1,
        explanation: '简单的值用 props；复杂的结构内容用插槽更灵活、语义更清晰。'
      },
      {
        type: 'single',
        question: '父组件接收作用域插槽数据的正确写法是？',
        options: ['<template #default="slotProps">', '<template #default :slotProps>', '<slot #default>', '<template props="slotProps">'],
        answer: 0,
        explanation: 'v-slot 的值就是接收插槽属性的对象，常命名为 slotProps，也可直接解构。'
      },
      {
        type: 'single',
        question: '子组件模板中 <slot> 标签的作用是？',
        options: ['作为父组件传入内容的占位出口', '声明一个响应式变量', '引入外部样式', '定义一个事件监听器'],
        answer: 0,
        explanation: 'slot 是占位符，父组件传入的内容会被渲染到 slot 所在的位置。'
      },
      {
        type: 'single',
        question: '一个子组件同时有默认插槽和具名插槽，父组件没有包在 template 中的内容会进入？',
        options: ['默认插槽', '第一个具名插槽', '被丢弃不渲染', '报错'],
        answer: 0,
        explanation: '未通过 template #名字 指定的内容默认进入名为 default 的默认插槽。'
      },
      {
        type: 'single',
        question: 'v-slot 指令可以写在什么位置？',
        options: ['template 标签或组件标签上', '任意普通 div 上', 'style 标签里', 'script 标签里'],
        answer: 0,
        explanation: 'v-slot 只能用在 template 标签上（或直接用在组件标签上），不能用于普通元素。'
      },
      {
        type: 'single',
        question: '父组件想直接使用作用域插槽传出的 msg 而不写 slotProps.msg，可以怎么做？',
        options: ['在 v-slot 值中解构，如 #default="{ msg }"', '无法实现，必须用 slotProps', '用 defineProps 接收', '用 emit 接收'],
        answer: 0,
        explanation: 'v-slot 的值支持 ES6 解构语法，可以直接解构出需要的插槽属性。'
      },
      {
        type: 'judge',
        question: '一个组件可以同时拥有一个默认插槽和多个具名插槽。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '默认插槽与具名插槽可以共存，卡片组件的头尾加正文就是典型结构。'
      },
      {
        type: 'judge',
        question: 'v-slot 可以写在任意普通 HTML 元素上，不限于 template 标签。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: 'v-slot 只能用于 template 标签或组件标签，写在普通元素上会报错。'
      },
      {
        type: 'judge',
        question: '插槽内容中绑定的事件处理函数，来自父组件的作用域。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '插槽内容编译在父组件作用域中，数据和方法都来自父组件。'
      },
      {
        type: 'multiple',
        question: '关于默认插槽，下列说法正确的有？（多选）',
        options: ['父组件写在子组件标签之间的内容会渲染到 slot 位置', '未传内容时显示 slot 标签内部的后备内容', '未命名插槽的名字是 default', '默认插槽不能与具名插槽共存'],
        answer: [0, 1, 2],
        explanation: '默认插槽和具名插槽可以共存于同一个组件。'
      },
      {
        type: 'multiple',
        question: '下列哪些场景适合使用插槽来实现？（多选）',
        options: ['卡片组件的内容区域', '弹窗的标题和底部按钮区', '列表项的自定义渲染结构', '传递一个数字类型的计数'],
        answer: [0, 1, 2],
        explanation: '简单值用 props 传递即可；结构化的内容区域适合用插槽。'
      },
      {
        type: 'multiple',
        question: '关于 <template #header>，下列说法正确的有？（多选）',
        options: ['# 是 v-slot 的缩写', '表示内容进入名为 header 的插槽', '内容中可以访问父组件的数据', '它会在页面上额外渲染出一个 template 元素'],
        answer: [0, 1, 2],
        explanation: 'template 只是分组容器，本身不会被渲染成真实 DOM。'
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
      },
      {
        type: 'single',
        question: '子组件调用 defineModel() 后得到的是什么？',
        options: ['一个字符串', '一个可双向绑定的 ref', '一个组件实例', '一个事件对象'],
        answer: 1,
        explanation: 'defineModel 返回一个 ref，读写它会自动完成接收 prop 和触发更新事件。'
      },
      {
        type: 'single',
        question: '实现 v-model:name 绑定时，子组件应调用？',
        options: ['defineModel(\'name\')', 'defineProps(\'name\')', 'defineEmits(\'name\')', 'useModel(\'name\')'],
        answer: 0,
        explanation: 'defineModel 传入名字即可支持带参数的 v-model，如 defineModel(\'name\')。'
      },
      {
        type: 'judge',
        question: '使用 defineModel 后，父组件的使用方式仍然是 v-model="text"，无需改变。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'defineModel 只简化子组件的写法，父组件用法保持不变。'
      },
      {
        type: 'judge',
        question: '一个组件最多只能绑定一个 v-model。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '通过 v-model:name、v-model:age 等参数形式，一个组件可绑定多个 v-model。'
      },
      {
        type: 'multiple',
        question: '不使用 defineModel，手动实现组件 v-model 需要？（多选）',
        options: ['声明 modelValue prop', '声明 update:modelValue 事件', '值变化时触发更新事件把新值抛给父组件', '在父组件中手动监听原生的 input 事件'],
        answer: [0, 1, 2],
        explanation: '父组件只需写 v-model，无需手动监听事件，事件由子组件触发。'
      },
      {
        type: 'multiple',
        question: 'defineModel 相比手动写法的优势有？（多选）',
        options: ['无需手动声明 prop 和事件', '返回的 ref 可直接在模板中 v-model 绑定', '支持默认值、校验和修饰符', '只能用于原生表单元素'],
        answer: [0, 1, 2],
        explanation: 'defineModel 用于自定义组件的双向绑定，不局限于原生表单元素。'
      },
      {
        type: 'single',
        question: 'v-model:title 在子组件中等价于哪组 prop 和事件？',
        options: ['title 和 update:title', 'modelValue 和 update:modelValue', 'title 和 change:title', 'value 和 input'],
        answer: 0,
        explanation: '带参数的 v-model:title 等价于 title prop 加 update:title 事件的语法糖。'
      },
      {
        type: 'judge',
        question: 'defineModel 支持为绑定的值设置默认值和校验规则。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'defineModel 可以传入选项配置默认值、校验和修饰符。'
      },
      {
        type: 'single',
        question: '面试情景：封装一个自定义输入组件，希望父组件能用 v-model 直接绑定，目前最推荐的实现是？',
        options: ['手动声明 value prop', '使用 defineModel', '使用 provide / inject', '使用插槽'],
        answer: 1,
        explanation: 'defineModel 是 Vue 3.4 起实现组件双向绑定的推荐方式，写法最简洁。'
      },
      {
        type: 'judge',
        question: '组件上的 v-model 本质是 prop 向下传值、事件向上更新的语法糖。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '默认就是 modelValue prop 加 update:modelValue 事件的组合。'
      },
      {
        type: 'multiple',
        question: '面试情景：封装用户信息表单组件，需要同时双向绑定姓名和年龄，正确的做法有？（多选）',
        options: ['父组件使用 v-model:name 和 v-model:age', '子组件分别调用 defineModel(\'name\') 和 defineModel(\'age\')', '子组件修改绑定的值会自动同步回父组件', '必须为每个字段各写一个 prop 和一个 emit 才能实现'],
        answer: [0, 1, 2],
        explanation: 'defineModel 传入名字即可支持多个 v-model，无需手写 prop 和事件。'
      },
      {
        type: 'multiple',
        question: '手动实现组件 v-model（不使用 defineModel）时，子组件模板中 input 的正确写法要点有？（多选）',
        options: ['用 :value 绑定 modelValue', '在 input 事件中 emit update:modelValue', '新值从 $event.target.value 获取', '直接对 modelValue 使用 v-model 修改它'],
        answer: [0, 1, 2],
        explanation: 'modelValue 是 prop，不能直接改，必须在值变化时触发 update 事件。'
      },
      {
        type: 'judge',
        question: '子组件中修改 defineModel 返回的 ref，父组件通过 v-model 绑定的数据会同步更新。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '读写 defineModel 返回的 ref 会自动完成接收 prop 和触发更新事件。'
      },
      {
        type: 'single',
        question: '父组件写 <MyInput v-model="text" />，使用 defineModel 的子组件中读取当前值的方式是？',
        options: ['model.value', 'props.text', 'this.text', 'inject(\'text\')'],
        answer: 0,
        explanation: 'const model = defineModel() 返回 ref，script 中通过 model.value 读写。'
      },
      {
        type: 'single',
        question: '面试题：在 defineModel 出现之前，实现组件双向绑定需要同时声明哪两项？',
        options: ['一个 prop 和对应的 update 事件', '两个 props', '两个 emits', 'state 和 getters'],
        answer: 0,
        explanation: '手动方案就是 modelValue prop 加 update:modelValue 事件，defineModel 把它们合并了。'
      },
      {
        type: 'judge',
        question: 'defineModel 是编译器宏，在 script setup 中无需从 vue 导入即可使用。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'defineModel 与 defineProps、defineEmits 一样是编译器宏，可直接使用。'
      },
      {
        type: 'single',
        question: '面试情景：封装一个评分组件，内部值变化时要把新分数同步给父组件的 v-model，应该？',
        options: ['触发 update:modelValue 事件并携带新值', '直接修改 modelValue prop', '用 watch 监听自己', '什么都不用做'],
        answer: 0,
        explanation: '双向绑定的规则：值变化时触发 update:modelValue，把新值抛给父组件。'
      },
      {
        type: 'single',
        question: '使用 defineModel 并想为绑定值设置默认值，正确的写法是？',
        options: ['defineModel({ default: \'默认\' })', 'defineModel(\'默认\')', 'defineModel.default(\'默认\')', 'setDefault(defineModel())'],
        answer: 0,
        explanation: 'defineModel 传入选项对象可配置默认值；传入字符串则是给带名字的 v-model 指定名字。'
      },
      {
        type: 'single',
        question: '组件上 v-model 绑定的值，类型上有什么要求？',
        options: ['任意类型都可以', '只能是字符串', '只能是数字', '只能是布尔值'],
        answer: 0,
        explanation: 'modelValue 可以携带任意类型的值，字符串、数字、对象、数组都行。'
      },
      {
        type: 'single',
        question: '一个组件同时使用默认 v-model 和 v-model:title，子组件需要调用几次 defineModel？',
        options: ['两次：defineModel() 和 defineModel(\'title\')', '只能调用一次', '需要调用三次', '零次，自动生效'],
        answer: 0,
        explanation: '每个 v-model 对应一次 defineModel 调用，无参对应默认的 modelValue。'
      },
      {
        type: 'judge',
        question: 'v-model 既可以绑定到自定义组件上，也可以绑定到原生表单元素上。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '原生元素上 v-model 自动选择 value/checked 等绑定方式，组件上则是 prop 加事件的语法糖。'
      },
      {
        type: 'judge',
        question: '手动实现组件 v-model 时，父组件如果不写 v-model 简写，就需要同时写 :modelValue 和 @update:modelValue。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'v-model="text" 展开后就是 :modelValue="text" 加 @update:modelValue="text = $event"。'
      },
      {
        type: 'judge',
        question: 'v-model 的修饰符（如 .trim）同样可以应用在自定义组件的 v-model 上。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'defineModel 支持修饰符，自定义组件可以读取并处理父组件传入的修饰符。'
      },
      {
        type: 'multiple',
        question: '关于 defineModel 的调用形式，下列说法正确的有？（多选）',
        options: ['defineModel() 对应默认的 v-model', 'defineModel(\'name\') 对应 v-model:name', 'defineModel({ default: \'\' }) 可配置默认值', 'defineModel 必须在 onMounted 中调用'],
        answer: [0, 1, 2],
        explanation: 'defineModel 是编译器宏，在 script setup 顶层直接调用，与生命周期钩子无关。'
      },
      {
        type: 'multiple',
        question: '下列哪些组件适合支持 v-model 双向绑定？（多选）',
        options: ['自定义输入框组件', '开关切换组件', '评分组件', '纯展示且永远不变的标题组件'],
        answer: [0, 1, 2],
        explanation: 'v-model 适合有「值」需要双向同步的组件；纯展示组件用普通 props 即可。'
      },
      {
        type: 'multiple',
        question: '面试情景：审查手写 v-model 的代码发现双向绑定不生效，可能的原因有？（多选）',
        options: ['子组件忘记 emit update:modelValue', '事件名拼写与 update:modelValue 不一致', '子组件只绑定了 :value 却没监听输入事件', '父组件使用了 v-model 简写'],
        answer: [0, 1, 2],
        explanation: 'v-model 简写是正确写法；问题多出在子组件没触发或拼错更新事件。'
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
      },
      {
        type: 'single',
        question: '中间多层组件都得帮忙转发自己根本用不到的 prop，这种现象称为？',
        options: ['prop 逐级透传', '事件冒泡', '双向绑定', '状态提升'],
        answer: 0,
        explanation: 'prop 逐级透传（prop drilling）正是 provide / inject 要解决的问题。'
      },
      {
        type: 'single',
        question: '后代组件获取祖先 provide 的数据，应调用？',
        options: ['provide(key)', 'inject(key)', 'use(key)', 'emit(key)'],
        answer: 1,
        explanation: '后代组件用 inject(key) 注入祖先提供的数据。'
      },
      {
        type: 'judge',
        question: '主题色、用户信息、全局配置等是 provide / inject 的常见使用场景。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '这些跨多层共享的数据非常适合用 provide / inject 传递。'
      },
      {
        type: 'judge',
        question: 'inject 拿不到数据时，只要设置了默认值就不会报错。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'inject 的第二个参数是默认值，祖先未提供时使用默认值，组件更健壮。'
      },
      {
        type: 'multiple',
        question: '关于 provide 的用法，下列说法正确的有？（多选）',
        options: ['第一个参数是唯一标识 key', 'value 可以是任意值', '可以传入 ref 实现响应式共享', '只能在根组件中调用一次'],
        answer: [0, 1, 2],
        explanation: '任何祖先组件都可以 provide，且可以提供多份不同 key 的数据。'
      },
      {
        type: 'multiple',
        question: 'provide / inject 的最佳实践包括？（多选）',
        options: ['数据的所有权归祖先', '祖先 provide 时同时提供修改方法', '后代想改数据就调用祖先提供的方法', '后代随意直接修改注入的数据'],
        answer: [0, 1, 2],
        explanation: '后代随意修改会让状态难以追踪，应通过祖先提供的方法来改。'
      },
      {
        type: 'single',
        question: 'provide 的第一个参数 key 的作用是？',
        options: ['唯一标识这份数据，供后代 inject 取用', '指定数据的类型', '指定数据的默认值', '指定提供数据的组件名'],
        answer: 0,
        explanation: 'key 是数据的唯一标识，后代用 inject(key) 按同样的 key 取回数据。'
      },
      {
        type: 'judge',
        question: 'provide / inject 只能用于父子直接相邻的两层组件之间通信。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: 'provide / inject 可以跨越多层组件，这正是它解决 prop 逐级透传的价值。'
      },
      {
        type: 'single',
        question: '面试情景：深层嵌套的组件需要用到全局主题色，中间层组件都用不到它，最优雅的方案是？',
        options: ['逐层传递 props', '祖先 provide、后代 inject', '每个组件自己定义一份', '写死成全局 CSS 变量后不管数据'],
        answer: 1,
        explanation: 'provide / inject 专为跨层级共享设计，中间层完全无感知。'
      },
      {
        type: 'judge',
        question: 'inject 必须传入默认值，否则代码无法运行。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '默认值是可选的，不传时祖先未提供会得到 undefined；传默认值只是更健壮。'
      },
      {
        type: 'multiple',
        question: '关于 provide / inject 的响应式，下列说法正确的有？（多选）',
        options: ['provide 一个 ref，后代拿到的就是响应式数据', '后代修改注入的 ref，祖先会同步变化', 'provide 普通字符串默认不具备响应式', 'inject 拿到的任何数据都自动是响应式的'],
        answer: [0, 1, 2],
        explanation: '是否响应式取决于 provide 的值本身，普通值不会自动变成响应式。'
      },
      {
        type: 'multiple',
        question: '以下哪些场景适合使用 provide / inject？（多选）',
        options: ['主题色跨层级共享', '登录用户信息跨层级共享', '全局配置项下发', '相邻父子组件传递一次点击回调'],
        answer: [0, 1, 2],
        explanation: '相邻父子通信直接用 props / emit 即可，provide / inject 适合跨多层的场景。'
      },
      {
        type: 'judge',
        question: '使用 provide / inject 时，中间层组件无需编写任何转发代码。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '这正是它解决 prop 逐级透传问题的核心优势。'
      },
      {
        type: 'single',
        question: '面试题：为什么推荐后代通过祖先提供的方法来修改注入的数据？',
        options: ['这是语法强制要求', '保持数据流向清晰，便于追踪状态变化', '后代技术上无法修改注入的值', 'inject 的数据默认被冻结'],
        answer: 1,
        explanation: '数据所有权归祖先，修改走统一入口，可以避免多处随意修改导致状态难追踪。'
      },
      {
        type: 'single',
        question: 'provide / inject 的数据流向是？',
        options: ['自上而下：祖先提供、后代注入', '自下而上：后代提供、祖先注入', '兄弟组件之间直接共享', '任意方向都可以'],
        answer: 0,
        explanation: '数据只能由祖先提供、后代注入，方向自上而下。'
      },
      {
        type: 'single',
        question: '面试情景：组件库作者希望使用者即使不 provide 对应数据，组件也能正常渲染，应该怎么做？',
        options: ['不调用 inject', 'inject 时传入第二个参数作为默认值', '用 try-catch 包裹 inject', '改用 props 传参'],
        answer: 1,
        explanation: 'inject(key, 默认值) 让组件在未提供数据时也能正常兜底，更健壮。'
      },
      {
        type: 'single',
        question: '如果多层祖先都 provide 了同一个 key，后代 inject 拿到的是？',
        options: ['离自己最近的那个祖先提供的值', '最顶层祖先的值', '所有值组成的数组', '随机一个'],
        answer: 0,
        explanation: 'inject 遵循就近原则，向上查找时最近的一层 provide 生效。'
      },
      {
        type: 'single',
        question: '想让整个应用的所有组件都能 inject 到某份数据，除了在根组件 provide，还可以？',
        options: ['在 main.js 中调用 app.provide(key, value)', '在每个组件里各 provide 一次', '写进 CSS 文件', '无法实现'],
        answer: 0,
        explanation: 'app.provide 在应用层提供数据，对所有组件可见。'
      },
      {
        type: 'single',
        question: '面试题：为什么推荐把 provide / inject 的 key 定义为 Symbol 或统一常量？',
        options: ['避免不同模块或组件库之间的 key 字符串冲突', '这是语法强制要求', '可以提升运行性能', '能让数据自动变成响应式'],
        answer: 0,
        explanation: '字符串 key 容易撞名，用 Symbol 或统一管理的常量可以避免冲突。'
      },
      {
        type: 'single',
        question: '后代组件 inject 到一个 ref 后，在模板中显示其值的正确写法是？',
        options: ['{{ theme }}（ref 自动解包）', '{{ theme.value }}', '{{ theme() }}', '{{ inject(\'theme\') }}'],
        answer: 0,
        explanation: '注入的 ref 在模板中同样自动解包，直接写变量名即可。'
      },
      {
        type: 'judge',
        question: '通过 app.provide 提供的数据，应用中任何组件都可以 inject 到。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'app.provide 在应用层级提供，等价于所有组件的共同祖先。'
      },
      {
        type: 'judge',
        question: '同一个祖先组件可以多次调用 provide，用不同的 key 提供多份数据。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'provide 可以按 key 调用多次，分别提供主题、用户信息等不同数据。'
      },
      {
        type: 'judge',
        question: 'inject 的默认值也可以是一个 ref，如 inject(\'theme\', ref(\'light\'))。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '默认值可以是任意值，传 ref 能让兜底数据也保持响应式用法一致。'
      },
      {
        type: 'multiple',
        question: '关于 inject 的使用，下列说法正确的有？（多选）',
        options: ['第一个参数是要注入数据的 key', 'key 需与祖先 provide 时使用的 key 一致', '可以传第二个参数作为默认值', 'inject 拿到的数据一定是响应式的'],
        answer: [0, 1, 2],
        explanation: '是否响应式取决于 provide 的值本身，普通值注入后不具备响应式。'
      },
      {
        type: 'multiple',
        question: '面试情景：用 provide / inject 实现全局主题切换，合理的设计有？（多选）',
        options: ['祖先 provide 一个主题的 ref', '祖先同时 provide 一个切换主题的方法', '后代通过注入的方法来切换主题', '后代拿到 ref 后各自随意改写主题值'],
        answer: [0, 1, 2],
        explanation: '修改入口应收敛在祖先提供的方法里，后代随意改写会让状态难以追踪。'
      },
      {
        type: 'multiple',
        question: '相比 props 逐层传递，provide / inject 的优势有？（多选）',
        options: ['中间层无需编写转发代码', '深层后代可以直接取用数据', '适合跨多层共享的数据', '可以在所有场景下完全替代 props'],
        answer: [0, 1, 2],
        explanation: '相邻父子通信仍然首选 props / emit，provide / inject 不是万能替代。'
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
      },
      {
        type: 'single',
        question: '需要对一组列表元素做过渡动画，应使用哪个内置组件？',
        options: ['Transition', 'TransitionGroup', 'Teleport', 'KeepAlive'],
        answer: 1,
        explanation: 'Transition 只作用于单个根元素，一组元素的过渡用 TransitionGroup。'
      },
      {
        type: 'single',
        question: 'Transition 与 Teleport 配合实现弹窗动画时，Transition 应该放在？',
        options: ['Teleport 外部', 'Teleport 内部', 'body 标签内', '任意位置均可'],
        answer: 1,
        explanation: '组合使用时注意 Transition 要放在 Teleport 内部。'
      },
      {
        type: 'judge',
        question: 'Teleport 传送后，组件的数据绑定、事件和父子关系都会被破坏。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '传送只改变 DOM 位置，数据绑定、事件、父子关系都保持不变。'
      },
      {
        type: 'judge',
        question: 'Transition 只负责管理类名，真正的动画效果要靠 CSS 的 transition 或 animation 实现。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'Vue 自动切换类名，我们需要为这些类名编写过渡样式。'
      },
      {
        type: 'multiple',
        question: '使用 Teleport 把弹窗渲染到 body 下的好处有？（多选）',
        options: ['避免被父元素的 overflow hidden 裁剪', '避免 z-index 层级问题', '逻辑上仍属于原组件', '传送后组件的事件绑定会失效'],
        answer: [0, 1, 2],
        explanation: 'Teleport 只移动 DOM 位置，事件绑定等逻辑完全不受影响。'
      },
      {
        type: 'multiple',
        question: '关于 Transition，下列说法正确的有？（多选）',
        options: ['只作用于单个根元素', '进入起始阶段的类名是 v-enter-from', 'name 属性可自定义类名前缀', 'Transition 自身内置了全套动画效果'],
        answer: [0, 1, 2],
        explanation: 'Transition 不提供现成动画，需要我们自己编写对应的 CSS。'
      },
      {
        type: 'single',
        question: '想让弹窗在 DOM 上渲染到 body 下、逻辑上仍属于当前组件，应使用哪个内置组件？',
        options: ['Transition', 'Teleport', 'TransitionGroup', 'slot'],
        answer: 1,
        explanation: 'Teleport 通过 to 属性把内容传送到指定位置，组件逻辑关系保持不变。'
      },
      {
        type: 'judge',
        question: 'TransitionGroup 支持列表项位置变化时的移动动画。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'TransitionGroup 用于一组元素的过渡，并额外支持位置变化的移动动画。'
      },
      {
        type: 'single',
        question: 'Transition 未设置 name 属性时，过渡类名的默认前缀是？',
        options: ['v-', 'fade-', 'enter-', 'vue-'],
        answer: 0,
        explanation: '默认类名是 v-enter-from、v-leave-to 等，name 属性可替换这个前缀。'
      },
      {
        type: 'judge',
        question: '只写 <Transition> 包裹元素但不编写任何 CSS，元素显隐不会有过渡效果。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'Transition 只负责切换类名，动画效果必须靠自己编写的 CSS 实现。'
      },
      {
        type: 'multiple',
        question: '关于 Teleport，下列说法正确的有？（多选）',
        options: ['通过 to 属性指定目标选择器', '适合实现全局弹窗和通知', '传送后父子组件关系保持不变', '传送后需要重新绑定事件'],
        answer: [0, 1, 2],
        explanation: 'Teleport 只移动 DOM 位置，事件和数据绑定完全不受影响。'
      },
      {
        type: 'multiple',
        question: '面试情景：实现一个带淡入淡出动画的全局弹窗，正确的做法有？（多选）',
        options: ['用 Teleport 把弹窗传送到 body', '用 Transition 包裹弹窗并编写过渡 CSS', '把 Transition 放在 Teleport 内部', '把弹窗留在父容器里靠堆 z-index 硬撑层级'],
        answer: [0, 1, 2],
        explanation: '靠 z-index 硬撑容易受父元素裁剪和层级困扰，Teleport 加 Transition 是标准方案。'
      },
      {
        type: 'judge',
        question: 'Transition 可以同时包裹多个并列的根元素并为它们分别做动画。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: 'Transition 只作用于单个根元素，一组元素要用 TransitionGroup。'
      },
      {
        type: 'single',
        question: '面试情景：列表项增删时，希望其余列表项平滑移动到新位置，应使用？',
        options: ['Transition', 'TransitionGroup', 'Teleport', 'v-show'],
        answer: 1,
        explanation: 'TransitionGroup 支持列表过渡以及位置变化时的移动动画。'
      },
      {
        type: 'single',
        question: '设置 <Transition name="slide"> 后，进入起始阶段的类名是？',
        options: ['slide-enter-from', 'v-enter-from', 'slide-enter', 'enter-slide'],
        answer: 0,
        explanation: 'name 会把类名前缀从 v- 替换为 slide-，进入起始类名是 slide-enter-from。'
      },
      {
        type: 'judge',
        question: 'Teleport 的传送目标只能是 body，不能是页面中的其他元素。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: 'to 属性接受任意 CSS 选择器，可以传送到页面任何位置。'
      },
      {
        type: 'single',
        question: 'Transition 进入过渡结束阶段的类名是？',
        options: ['v-enter-to', 'v-enter-end', 'v-enter-done', 'v-enter-finish'],
        answer: 0,
        explanation: '进入阶段类名依次是 v-enter-from、v-enter-active、v-enter-to。'
      },
      {
        type: 'single',
        question: '编写过渡动画时，transition 属性（如 transition: opacity .5s）一般写在哪个类上？',
        options: ['v-enter-active 和 v-leave-active', 'v-enter-from', 'v-leave-to', '随便哪个类都行'],
        answer: 0,
        explanation: 'active 类贯穿整个过渡过程，transition 定义写在这里才能在进入和离开时都生效。'
      },
      {
        type: 'single',
        question: 'Transition 离开过渡起始状态的类名是？',
        options: ['v-leave-from', 'v-leave-start', 'v-leave-active', 'v-leave-to'],
        answer: 0,
        explanation: '离开阶段类名依次是 v-leave-from、v-leave-active、v-leave-to。'
      },
      {
        type: 'single',
        question: 'Transition 可以作用于下列哪种显隐控制方式？',
        options: ['v-if 和 v-show 都可以', '只能配合 v-if', '只能配合 v-show', '都不支持'],
        answer: 0,
        explanation: '元素无论通过 v-if 增删还是 v-show 显隐，Transition 都能触发动画。'
      },
      {
        type: 'judge',
        question: 'v-enter-to 与 v-leave-from 通常保持元素的正常样式，一般无需额外编写。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '这两个类对应元素的正常显示状态，通常只需编写 from/to 的透明度和 active 的 transition。'
      },
      {
        type: 'judge',
        question: 'TransitionGroup 渲染的列表项需要提供唯一的 key。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'key 帮助 Vue 跟踪每个列表项，增删和移动动画才能正确应用。'
      },
      {
        type: 'judge',
        question: 'Transition 的离开阶段同样会依次应用 leave-from、leave-active、leave-to 三类名。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '进入和离开是对称的两个阶段，各有 from、active、to 三个类名。'
      },
      {
        type: 'multiple',
        question: 'Transition 完整的进入阶段涉及的类名有？（多选）',
        options: ['v-enter-from', 'v-enter-active', 'v-enter-to', 'v-leave-from'],
        answer: [0, 1, 2],
        explanation: 'v-leave-from 属于离开阶段，不在进入阶段出现。'
      },
      {
        type: 'multiple',
        question: '编写一个淡入淡出过渡，通常需要的 CSS 有？（多选）',
        options: ['在 enter-active / leave-active 上写 transition: opacity', '在 enter-from / leave-to 上写 opacity: 0', '保持 enter-to / leave-from 为正常透明度', '必须在 enter-to 上也写 transition 属性'],
        answer: [0, 1, 2],
        explanation: 'transition 写在 active 类上即可，enter-to / leave-from 保持元素正常状态。'
      },
      {
        type: 'multiple',
        question: 'Teleport 的典型应用场景有？（多选）',
        options: ['全局弹窗 Modal', '消息提示 Toast', '避免被父容器裁剪的下拉浮层', '为列表项添加移动动画'],
        answer: [0, 1, 2],
        explanation: '列表移动动画是 TransitionGroup 的职责，与 Teleport 无关。'
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
      },
      {
        type: 'single',
        question: 'useMouse 中给 window 添加 mousemove 监听，应该在哪个钩子中执行？',
        options: ['onMounted', 'onUpdated', 'onUnmounted', 'onErrorCaptured'],
        answer: 0,
        explanation: '在 onMounted 中注册监听，在 onUnmounted 中移除监听。'
      },
      {
        type: 'single',
        question: 'VueUse 是什么？',
        options: ['Vue 官方路由器', '收集了几百个现成组合式函数的库', '一个 CSS 框架', '一个构建工具'],
        answer: 1,
        explanation: 'VueUse 是社区的组合式函数库，可直接取用避免重复造轮子。'
      },
      {
        type: 'judge',
        question: '组合式函数与普通工具函数的区别在于：它处理的是响应式状态和副作用。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '组合式函数内部使用 ref、watch 等管理响应式状态和副作用。'
      },
      {
        type: 'judge',
        question: '组合式函数返回的 ref 在模板中使用时仍然是响应式的。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '返回的 ref 可直接在模板中使用，响应式一切正常。'
      },
      {
        type: 'multiple',
        question: '封装 useMouse 时需要处理的事项包括？（多选）',
        options: ['用 ref 保存坐标 x、y', '在 onMounted 中注册事件监听', '在 onUnmounted 中移除事件监听', '手动操作虚拟 DOM'],
        answer: [0, 1, 2],
        explanation: '组合式函数无需操作虚拟 DOM，只需管理状态和副作用。'
      },
      {
        type: 'multiple',
        question: '以下哪些情况适合抽取组合式函数？（多选）',
        options: ['多个组件有相似逻辑', '需要复用响应式状态', '需要复用事件监听等副作用逻辑', '项目中的每个组件都必须抽取'],
        answer: [0, 1, 2],
        explanation: '发现多个组件有相似逻辑时才是抽取的好时机，并非强制。'
      },
      {
        type: 'single',
        question: '在组件中使用 useMouse 组合式函数的正确方式是？',
        options: ['在 setup 中调用并解构返回值', '在模板中直接调用 useMouse()', '把它注册为全局组件', '通过 props 传给子组件'],
        answer: 0,
        explanation: '组合式函数像普通函数一样在 setup 中调用，返回的 ref 可直接用于模板。'
      },
      {
        type: 'judge',
        question: '组合式函数内部不可以再调用其他的组合式函数。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '组合式函数之间可以相互调用，从而组合出更复杂的复用逻辑。'
      },
      {
        type: 'single',
        question: '组合式函数返回值的常见形式是？',
        options: ['把状态和方法组成对象返回', '只返回一个数字', '返回组件实例', '不允许返回任何值'],
        answer: 0,
        explanation: '约定把内部声明的状态和方法以对象形式返回，供调用方解构使用。'
      },
      {
        type: 'judge',
        question: '组合式函数需要在组件的 setup 上下文中（如 script setup 顶层）被调用。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '它内部可能使用生命周期钩子，这些钩子依赖当前组件实例，因此要在 setup 阶段调用。'
      },
      {
        type: 'multiple',
        question: '关于 useFetch 这类请求类组合式函数，合理的返回内容有？（多选）',
        options: ['数据 data 的 ref', '加载状态 loading 的 ref', '错误信息 error 的 ref', '直接返回原始 Promise，不做任何状态封装'],
        answer: [0, 1, 2],
        explanation: '封装的意义就在于管理请求的响应式状态，直接返回原始 Promise 等于没封装。'
      },
      {
        type: 'multiple',
        question: '面试情景：判断一段逻辑是否值得抽成组合式函数，合理的标准有？（多选）',
        options: ['逻辑涉及响应式状态或副作用', '多个组件有相同的需求', '逻辑可以脱离界面独立描述', '只要代码超过三行就必须抽取'],
        answer: [0, 1, 2],
        explanation: '抽取看复用价值而非行数，过度抽取反而增加理解成本。'
      },
      {
        type: 'judge',
        question: 'useMouse 中如果忘记移除 mousemove 监听，组件销毁后回调仍可能被触发。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '全局事件监听必须在 onUnmounted 中移除，否则会泄漏并继续执行。'
      },
      {
        type: 'single',
        question: '面试题：为什么组合式函数内部可以使用 onMounted 等生命周期钩子？',
        options: ['因为它在组件的 setup 上下文中被调用', '因为钩子全局生效随处可用', '因为组合式函数本身就是组件', '因为有特殊语法支持'],
        answer: 0,
        explanation: '组合式函数在 setup 中同步调用，Vue 能关联到当前组件实例，钩子才能正确注册。'
      },
      {
        type: 'single',
        question: '多个组合式函数返回了同名 ref（如都叫 x），解构时冲突的解决办法是？',
        options: ['放弃使用其中一个', '解构时重命名，如 const { x: mouseX } = useMouse()', '修改 Vue 源码', '改用 mixin'],
        answer: 1,
        explanation: 'ES6 解构支持重命名，可以轻松避免命名冲突，这也是组合式函数优于 mixin 的一点。'
      },
      {
        type: 'judge',
        question: '使用 VueUse 这样的库可以避免重复封装常见的组合式函数。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'VueUse 收集了几百个现成的组合式函数，可直接取用。'
      },
      {
        type: 'single',
        question: '自定义组合式函数文件通常如何导出供组件使用？',
        options: ['export function useXxx() { ... }', 'export default 一个组件', '挂载到 window 对象上', '写进全局 CSS'],
        answer: 0,
        explanation: '组合式函数用具名导出，组件中 import { useMouse } from \'./useMouse\' 后调用。'
      },
      {
        type: 'single',
        question: '面试题：组合式函数与组件的本质区别是？',
        options: ['组合式函数没有模板，只封装逻辑', '组合式函数必须渲染 DOM', '组件里不能使用 ref', '两者没有任何区别'],
        answer: 0,
        explanation: '组件带模板负责渲染界面；组合式函数只封装可复用的状态逻辑。'
      },
      {
        type: 'single',
        question: 'useMouse 的 update 回调中，读取鼠标位置使用的事件属性是？',
        options: ['e.pageX 和 e.pageY', 'e.left 和 e.top', 'e.width 和 e.height', 'e.x1 和 e.y1'],
        answer: 0,
        explanation: '示例代码中通过 e.pageX、e.pageY 更新坐标 ref。'
      },
      {
        type: 'single',
        question: '面试情景：封装 useFetch 时希望传入的 url 变化后自动重新请求，合理的设计是？',
        options: ['让参数支持传入 ref，并在内部 watch 它', '只接受写死的字符串', '用 setInterval 定时轮询', '无法实现该需求'],
        answer: 0,
        explanation: '参数接收 ref 并配合 watch，可以让组合式函数对响应式入参做出反应。'
      },
      {
        type: 'judge',
        question: '组合式函数返回值中的 ref，在调用方解构后依然保持响应式。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'ref 本身就是响应式引用，解构出来不丢失响应式，这也是返回 ref 的原因。'
      },
      {
        type: 'judge',
        question: '组合式函数必须定义在独立的 .js 文件中，不能写在组件内部。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '抽成独立文件是便于复用的约定，不是强制要求；只是复用价值通常体现在跨组件共享。'
      },
      {
        type: 'judge',
        question: '同一个组合式函数文件可以被任意多个组件 import 复用。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '这正是抽取组合式函数的意义：一处封装，多处调用，各自得到独立状态。'
      },
      {
        type: 'multiple',
        question: '一个规范的组合式函数通常具备的特征有？（多选）',
        options: ['内部封装了响应式状态', '内部管理副作用的注册与清理', '把调用方需要的状态和方法返回出去', '调用方必须修改它的源码才能使用'],
        answer: [0, 1, 2],
        explanation: '组合式函数通过参数和返回值与调用方交互，调用方无需也不应修改其源码。'
      },
      {
        type: 'multiple',
        question: '面试情景：把「复制文本到剪贴板」的逻辑抽成 useClipboard，合理的返回内容有？（多选）',
        options: ['表示是否复制成功的 ref', '执行复制的方法', '错误信息的 ref', '整个组件实例'],
        answer: [0, 1, 2],
        explanation: '组合式函数返回状态和方法，组件实例与逻辑复用无关。'
      },
      {
        type: 'multiple',
        question: '关于在组合式函数内部使用 watch 和 computed，下列说法正确的有？（多选）',
        options: ['可以正常使用', '它们能与内部声明的 ref 联动保持响应式', '常用于对内部状态做派生或响应变化', '组合式函数中禁止使用 watch'],
        answer: [0, 1, 2],
        explanation: '组合式函数内部可以使用全部组合式 API，包括 watch 和 computed。'
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
      },
      {
        type: 'single',
        question: '在入口文件 main.js 中安装路由的正确写法是？',
        options: ['app.use(router)', 'app.mount(router)', 'app.router()', 'app.inject(router)'],
        answer: 0,
        explanation: '通过 app.use(router) 安装路由，整个应用就具备了路由能力。'
      },
      {
        type: 'single',
        question: 'router-link 通过哪个属性指定目标路径？',
        options: ['href', 'to', 'path', 'link'],
        answer: 1,
        explanation: 'router-link 使用 to 属性指定目标路径，最终渲染成 a 标签。'
      },
      {
        type: 'judge',
        question: 'history 模式下用户刷新子路径时，需要服务器配置回退到 index.html。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '否则刷新或直接访问子路径时请求到达服务器会 404。'
      },
      {
        type: 'judge',
        question: 'hash 模式部署最简单，任何静态服务器都能直接运行。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '# 后面的变化不会发给服务器，因此无需额外配置。'
      },
      {
        type: 'multiple',
        question: '关于 hash 与 history 两种模式，下列说法正确的有？（多选）',
        options: ['hash 模式的地址带 # 号', 'history 模式的地址干净美观', 'hash 模式 # 后的变化不会发给服务器', 'history 模式部署时无需任何服务器配置'],
        answer: [0, 1, 2],
        explanation: 'history 模式需要服务器把未匹配路径回退到 index.html。'
      },
      {
        type: 'multiple',
        question: '调用 createRouter 创建路由实例时，需要配置的内容包括？（多选）',
        options: ['路由模式 history', '路由规则数组 routes', '规则中 path 与 component 的对应关系', '全局状态管理配置'],
        answer: [0, 1, 2],
        explanation: '状态管理由 Pinia 负责，与路由实例的配置无关。'
      },
      {
        type: 'single',
        question: '创建 Vue Router 路由实例使用的函数是？',
        options: ['createRouter', 'createApp', 'createPinia', 'defineRouter'],
        answer: 0,
        explanation: '调用 createRouter 并传入 history 模式和 routes 规则数组来创建路由实例。'
      },
      {
        type: 'judge',
        question: '开发新项目一般推荐使用 history 模式，并在上线时配置好服务器回退规则。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'history 模式地址干净美观，但刷新子路径需要服务器回退到 index.html。'
      },
      {
        type: 'single',
        question: '安装 Vue Router 的命令是？',
        options: ['npm install vue-router@4', 'npm install router', 'npm install vue@router', 'npm create router'],
        answer: 0,
        explanation: 'Vue3 对应 vue-router 4.x 版本，用 npm install vue-router@4 安装。'
      },
      {
        type: 'judge',
        question: '单页应用切换路由时，浏览器不会向服务器请求新的 HTML 页面。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '前端路由只切换组件，浏览器不真正刷新，这就是单页应用的特征。'
      },
      {
        type: 'multiple',
        question: '关于 router-link 与 router-view，下列说法正确的有？（多选）',
        options: ['router-link 负责导航跳转', 'router-view 是匹配组件的渲染出口', '两者通常配合放在 App.vue 中形成页面骨架', 'router-view 负责跳转、router-link 负责渲染页面'],
        answer: [0, 1, 2],
        explanation: '职责正好相反：router-link 导航，router-view 是出口。'
      },
      {
        type: 'multiple',
        question: '面试情景：项目要部署到一台无法修改任何配置的静态服务器上，正确的做法有？（多选）',
        options: ['使用 createWebHashHistory 的 hash 模式', '接受地址栏中带 # 号', '部署后刷新子路径也能正常工作', '坚持用 history 模式且不做任何服务器配置'],
        answer: [0, 1, 2],
        explanation: 'history 模式必须配置服务器回退，无法配置时应改用 hash 模式。'
      },
      {
        type: 'judge',
        question: '一般会把导航菜单和 router-view 放在 App.vue 里，形成固定的页面骨架。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'App.vue 是根组件，导航和路由出口放这里可以让骨架在所有页面间保持。'
      },
      {
        type: 'single',
        question: '面试题：history 模式下刷新 /about 出现 404，根本原因是？',
        options: ['路由配置写错了', '请求到达了服务器，而服务器没有配置回退到 index.html', '浏览器不支持该模式', '组件没有注册'],
        answer: 1,
        explanation: '刷新子路径时请求直接发给服务器，需要服务器把未匹配路径回退到 index.html。'
      },
      {
        type: 'single',
        question: '一条路由规则中，把路径和组件对应起来的两个核心字段是？',
        options: ['path 和 component', 'name 和 view', 'url 和 page', 'link 和 render'],
        answer: 0,
        explanation: '{ path: \'/about\', component: About } 是路由规则的核心结构。'
      },
      {
        type: 'judge',
        question: 'createWebHashHistory 创建的路由地址形如 /#/about。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'hash 模式的路径放在 # 号之后，# 后的变化不会发送给服务器。'
      },
      {
        type: 'single',
        question: '路由配置文件通常放在哪个位置并导出路由实例？',
        options: ['router/index.js', 'public/index.html', 'package.json', 'dist 目录'],
        answer: 0,
        explanation: '约定把路由配置放在 router/index.js 中，创建实例后 export default 导出。'
      },
      {
        type: 'single',
        question: 'Home、About 这类页面级组件在项目中通常放在哪个目录？',
        options: ['views', 'node_modules', 'dist', 'public'],
        answer: 0,
        explanation: '页面级组件常放在 views 目录，路由配置中 import 后与 path 对应起来。'
      },
      {
        type: 'single',
        question: 'createRouter、createWebHistory 等 API 需要从哪个包导入？',
        options: ['vue-router', 'vue', 'pinia', 'vite'],
        answer: 0,
        explanation: '这些路由相关 API 都从 vue-router 包中导入。'
      },
      {
        type: 'single',
        question: '路由规则中 path: \'/\' 通常对应哪个页面？',
        options: ['首页', '404 页面', '登录页', '后台管理页'],
        answer: 0,
        explanation: '根路径 / 一般对应应用的首页组件。'
      },
      {
        type: 'judge',
        question: '路由实例创建后需要先导出，再在 main.js 中导入并通过 app.use 安装。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'router/index.js 导出实例，main.js 中 import 后 app.use(router) 完成安装。'
      },
      {
        type: 'judge',
        question: 'hash 模式下，修改地址栏 # 后面的路径会向服务器发送新的页面请求。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '# 后面的变化不会发给服务器，这正是 hash 模式部署简单的原因。'
      },
      {
        type: 'judge',
        question: 'router-view 在模板中的位置，决定了匹配到的组件渲染在页面的哪个位置。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'router-view 是占位出口，匹配组件就渲染在它所在的位置。'
      },
      {
        type: 'multiple',
        question: '搭建一个基础路由的完整流程包括？（多选）',
        options: ['npm install vue-router@4 安装', 'createRouter 创建实例并配置 routes', 'main.js 中 app.use(router) 安装', '在每个页面组件里各自创建一个新的路由器'],
        answer: [0, 1, 2],
        explanation: '整个应用共享一个路由实例，不能每个页面各建一个。'
      },
      {
        type: 'multiple',
        question: '关于单页应用（SPA），下列说法正确的有？（多选）',
        options: ['只有一个 HTML 文件', '切换页面其实是动态切换组件', '切换时浏览器不会真正刷新', '每个页面对应服务器上一个独立的 HTML 文件'],
        answer: [0, 1, 2],
        explanation: '多页应用才是每个页面一个 HTML；SPA 只有一个入口 HTML。'
      },
      {
        type: 'multiple',
        question: '关于放在 App.vue 中的页面骨架，下列说法正确的有？（多选）',
        options: ['导航菜单通常放在这里', 'router-view 通常放在这里', '骨架在所有路由页面间保持不变', '每个页面组件都要复制一份相同的导航代码'],
        answer: [0, 1, 2],
        explanation: '骨架放在根组件 App.vue 中复用，页面组件只关注自己的内容。'
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
      },
      {
        type: 'single',
        question: '查询字符串参数（如 ?tab=info）应该从哪里读取？',
        options: ['route.params', 'route.query', 'route.hash', 'route.path'],
        answer: 1,
        explanation: '查询字符串参数从 route.query 中获取，动态路由参数从 route.params 获取。'
      },
      {
        type: 'single',
        question: '跳转但不留下历史记录，适合登录后替换掉登录页的方法是？',
        options: ['router.push()', 'router.replace()', 'router.back()', 'router.forward()'],
        answer: 1,
        explanation: 'router.replace 跳转但不留历史记录，push 会添加记录。'
      },
      {
        type: 'judge',
        question: '在 beforeEach 守卫中返回一个路径字符串，会重定向到该路径。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '返回路径字符串表示重定向，返回 false 取消导航，返回 true 或不返回则放行。'
      },
      {
        type: 'judge',
        question: 'router.push 只能传入字符串路径，不能传入对象。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: 'push 可以传对象，同时携带 params 或 query 参数。'
      },
      {
        type: 'multiple',
        question: '关于编程式导航，下列说法正确的有？（多选）',
        options: ['router.back() 后退一页', 'router.forward() 前进一页', 'router.push 可以携带 query 参数', '编程式导航会强制刷新整个页面'],
        answer: [0, 1, 2],
        explanation: '编程式导航同样是前端跳转，浏览器不会真正刷新。'
      },
      {
        type: 'multiple',
        question: '关于导航守卫 beforeEach，下列说法正确的有？（多选）',
        options: ['回调能拿到目标路由 to', '回调能拿到来源路由 from', '通过返回值控制是否放行', '回调中可以直接操作目标组件的 DOM'],
        answer: [0, 1, 2],
        explanation: '导航发生在目标组件渲染之前，此时拿不到目标组件的 DOM。'
      },
      {
        type: 'single',
        question: '注册全局前置守卫，在每次路由跳转前拦截判断，应使用？',
        options: ['router.beforeEach', 'router.afterEach', 'router.push', 'router.onEnter'],
        answer: 0,
        explanation: 'router.beforeEach 注册全局前置守卫，回调能拿到 to 和 from，通过返回值控制导航。'
      },
      {
        type: 'judge',
        question: '动态路由参数和查询字符串参数都可以从 route.params 中读取。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '动态路由参数在 route.params 中，查询字符串参数要从 route.query 中读取。'
      },
      {
        type: 'single',
        question: '面试情景：登录成功后希望用户点浏览器后退时不再回到登录页，应使用？',
        options: ['router.push(\'/\')', 'router.replace(\'/\')', 'router.back()', 'location.reload()'],
        answer: 1,
        explanation: 'replace 跳转不留历史记录，登录页会被替换掉，后退不会回到它。'
      },
      {
        type: 'judge',
        question: '同一条动态路由 /user/:id 可以匹配 /user/1、/user/2 等不同地址。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '动态参数的意义就在于一条规则匹配一批路径，参数值从 route.params 读取。'
      },
      {
        type: 'multiple',
        question: '关于 beforeEach 守卫的返回值，下列说法正确的有？（多选）',
        options: ['返回 true 或不返回表示放行', '返回 false 取消本次导航', '返回路径字符串表示重定向', '返回 0 表示刷新页面'],
        answer: [0, 1, 2],
        explanation: '守卫通过这三种返回值控制导航，返回 0 没有特殊含义。'
      },
      {
        type: 'multiple',
        question: '面试情景：实现后台系统的登录拦截，正确的做法有？（多选）',
        options: ['在 router.beforeEach 中统一判断登录状态', '未登录访问受限页面时 return \'/login\'', '登录状态可依据本地存储的 token 判断', '在每个受限组件里各自写 setTimeout 跳转'],
        answer: [0, 1, 2],
        explanation: '登录拦截应在全局前置守卫中统一处理，不应散落在各组件里。'
      },
      {
        type: 'judge',
        question: 'router.afterEach 在导航完成后触发，适合做跳转后的收尾工作。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'afterEach 是全局后置守卫，导航完成后触发，但不能改变导航本身。'
      },
      {
        type: 'single',
        question: '组件中获取当前路由对象（含 params、query）使用的函数是？',
        options: ['useRoute()', 'useRouter()', 'useParams()', 'getRoute()'],
        answer: 0,
        explanation: 'useRoute 返回当前路由状态；useRouter 返回用于跳转的路由器实例。'
      },
      {
        type: 'single',
        question: '面试题：执行 router.push({ path: \'/user/1\', query: { tab: \'info\' } }) 后，地址栏是？',
        options: ['/user/1?tab=info', '/user/1/tab/info', '/user/1#tab=info', '/user/1'],
        answer: 0,
        explanation: 'query 参数会拼成 ?tab=info 这样的查询字符串。'
      },
      {
        type: 'judge',
        question: 'beforeEach 守卫在目标组件渲染之前执行，因此拿不到目标组件的实例。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '前置守卫发生在导航确认前，此时目标组件尚未创建。'
      },
      {
        type: 'single',
        question: '面试题：从 /user/1 导航到 /user/2 时组件实例被复用，想在参数变化时重新加载数据，可以？',
        options: ['watch 监听 route.params.id', '手动刷新整个页面', '什么都不用做，组件会自动重建', '改用 location.href 跳转'],
        answer: 0,
        explanation: '同一动态路由间跳转时组件被复用，需要监听 route.params 的变化来响应参数更新。'
      },
      {
        type: 'single',
        question: '在模板中声明式跳转到 /user/42 的正确写法是？',
        options: ['<router-link to="/user/42">', '<router-view to="/user/42">', '<a @click="router.push">', '<route to="/user/42">'],
        answer: 0,
        explanation: '声明式导航用 router-link 加 to 属性；router-view 是渲染出口。'
      },
      {
        type: 'single',
        question: '编程式导航时携带动态路由参数，下列写法正确的是？',
        options: ['router.push(\'/user/\' + id)', 'router.push(\'/user/:id\')', 'router.push(\'/user\', id)', 'router.push(id)'],
        answer: 0,
        explanation: '用字符串拼接出真实路径如 /user/42；\':id\' 只是路由配置中的占位声明。'
      },
      {
        type: 'single',
        question: '关于 useRoute() 返回的路由对象，下列说法正确的是？',
        options: ['它是响应式的，路由变化后 params 等属性会更新', '它是静态快照，永远不会更新', '它是路由器实例，可以调用 push', '它是当前组件实例'],
        answer: 0,
        explanation: 'useRoute 返回响应式的当前路由对象，可以安全地在 watch 或 computed 中使用。'
      },
      {
        type: 'judge',
        question: '从 /user/1 切换到 /user/2 时，同一组件实例通常会被复用，不会销毁重建。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '同一路由组件间跳转时 Vue Router 会复用实例，效率更高，但要注意响应参数变化。'
      },
      {
        type: 'judge',
        question: '除了全局守卫，Vue Router 还提供组件内的守卫。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '除 beforeEach、afterEach 外，还有写在组件内的守卫，用于更细粒度的控制。'
      },
      {
        type: 'judge',
        question: 'beforeEach 是全局守卫，应用内每一次路由跳转都会经过它。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '全局前置守卫对所有导航生效，适合放统一的登录校验逻辑。'
      },
      {
        type: 'multiple',
        question: '关于动态路由参数，下列说法正确的有？（多选）',
        options: ['在 path 中用冒号声明，如 /user/:id', '通过 route.params 读取参数值', '一条规则可以匹配一批路径', '每个参数值都必须单独写一条路由规则'],
        answer: [0, 1, 2],
        explanation: '动态参数的意义就是一条规则匹配一批路径，无需逐个配置。'
      },
      {
        type: 'multiple',
        question: '关于 router.push 与 router.replace 的区别，下列说法正确的有？（多选）',
        options: ['push 会新增一条历史记录', 'replace 替换当前记录，不新增', '登录成功后的跳转常用 replace', '用 replace 跳转后点后退会回到刚被替换的页面'],
        answer: [0, 1, 2],
        explanation: 'replace 会替换掉当前记录，后退时不会回到被替换的那个页面。'
      },
      {
        type: 'multiple',
        question: 'useRouter() 返回的路由器实例上，可调用的导航方法有？（多选）',
        options: ['push', 'replace', 'back', 'useRoute'],
        answer: [0, 1, 2],
        explanation: 'useRoute 是独立的组合式函数，不是路由器实例上的方法。'
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
      },
      {
        type: 'single',
        question: '在入口文件 main.js 中注册 Pinia 的正确写法是？',
        options: ['app.use(createPinia())', 'app.mount(createPinia())', 'app.provide(createPinia())', 'app.component(createPinia())'],
        answer: 0,
        explanation: '安装后通过 app.use(createPinia()) 注册即可使用。'
      },
      {
        type: 'single',
        question: 'Pinia 的 store 中，类似计算属性、由 state 派生且带缓存的部分是？',
        options: ['state', 'getters', 'actions', 'mutations'],
        answer: 1,
        explanation: 'getters 类似计算属性，由 state 派生而来且带缓存；Pinia 中没有 mutations。'
      },
      {
        type: 'judge',
        question: '一个应用可以按业务划分多个 store，如 userStore、cartStore。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '按业务拆分多个 store 可以让结构更清晰。'
      },
      {
        type: 'judge',
        question: 'actions 是普通函数，可以直接从 store 解构出来使用。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'actions 可以直接解构；只有 state 和 getters 需要 storeToRefs。'
      },
      {
        type: 'multiple',
        question: 'defineStore 的配置对象中可以包含哪些部分？（多选）',
        options: ['state', 'getters', 'actions', 'template'],
        answer: [0, 1, 2],
        explanation: 'store 由 state、getters、actions 三部分组成，与模板无关。'
      },
      {
        type: 'multiple',
        question: '关于在组件中使用 store，下列说法正确的有？（多选）',
        options: ['调用 useCounterStore() 得到 store 实例', '直接解构 store 会丢失响应式', '模板中可以直接写 store.count', '解构 state 后仍自动保持响应式'],
        answer: [0, 1, 2],
        explanation: '解构 state 或 getters 必须用 storeToRefs 包一层才能保持响应式。'
      },
      {
        type: 'single',
        question: '定义一个 Pinia store 使用的函数是？',
        options: ['defineStore', 'createStore', 'useStore', 'newStore'],
        answer: 0,
        explanation: 'defineStore 第一个参数是唯一 id，第二个参数是包含 state、getters、actions 的配置对象。'
      },
      {
        type: 'judge',
        question: '直接解构 store 中的 state 会丢失响应式。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '想解构 state 或 getters 必须使用 storeToRefs，actions 则可以直接解构。'
      },
      {
        type: 'single',
        question: '面试情景：多个互不相关的组件都要读写购物车数据，推荐的状态管理方案是？',
        options: ['逐层传递 props', '用 Pinia 定义一个 cartStore', '每个组件各存一份 localStorage 手动同步', '定义一个全局普通变量'],
        answer: 1,
        explanation: '跨组件共享数据正是 Pinia 的核心场景，store 一变，用到的组件自动更新。'
      },
      {
        type: 'judge',
        question: 'Pinia 中 state 必须写成返回对象的函数形式。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'state: () => ({ count: 0 }) 的函数形式保证每个实例拿到独立的数据。'
      },
      {
        type: 'multiple',
        question: '关于 Pinia 的 getters，下列说法正确的有？（多选）',
        options: ['由 state 派生而来', '具有缓存特性', '可以接收 state 作为参数', '职责是发起异步请求并修改数据'],
        answer: [0, 1, 2],
        explanation: 'getters 类似计算属性只做派生；异步请求和修改数据是 actions 的职责。'
      },
      {
        type: 'multiple',
        question: '面试情景：在组件中使用 store，下列写法正确的有？（多选）',
        options: ['const store = useCounterStore() 后直接 store.count', '需要解构时用 storeToRefs(store)', 'actions 可以直接从 store 解构', 'const { count } = store 解构后仍保持响应式'],
        answer: [0, 1, 2],
        explanation: '直接解构 state 会丢失响应式，必须借助 storeToRefs。'
      },
      {
        type: 'judge',
        question: '一个组件修改了 store 的 state，其他使用同一 store 的组件会自动更新视图。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'store 是全局响应式数据仓库，数据变化会驱动所有依赖它的组件更新。'
      },
      {
        type: 'single',
        question: '面试题：Pinia 相比 Vuex 的一个显著变化是？',
        options: ['取消了 mutations，直接在 actions 中修改 state', '不再支持响应式', '必须用 class 语法定义', '一个应用只能有一个 store'],
        answer: 0,
        explanation: 'Pinia 没有 mutations，actions 里可以直接修改 state，流程更简洁。'
      },
      {
        type: 'single',
        question: '在 actions 的方法内部访问当前 state 的方式是？',
        options: ['通过 this 访问', '通过第一个参数传入', '通过 inject 注入', '无法访问 state'],
        answer: 0,
        explanation: 'actions 中通过 this 访问 state、getters 和其他 action。'
      },
      {
        type: 'judge',
        question: 'defineStore 只是定义了 store，组件中要调用对应的 use 函数才能得到 store 实例。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '如 const store = useCounterStore()，调用后才拿到可用的 store 实例。'
      },
      {
        type: 'single',
        question: 'Pinia 的 store 定义文件在项目中通常放在哪个目录？',
        options: ['stores', 'views', 'router', 'dist'],
        answer: 0,
        explanation: '约定把 store 放在 stores 目录，如 stores/counter.js，按业务划分文件。'
      },
      {
        type: 'single',
        question: 'storeToRefs 需要从哪个包导入？',
        options: ['pinia', 'vue', 'vue-router', 'vite'],
        answer: 0,
        explanation: 'import { storeToRefs } from \'pinia\'，它是 Pinia 提供的工具函数。'
      },
      {
        type: 'single',
        question: 'getters 中的 double 由 state 的 count 派生，当 count 变化时 double 会？',
        options: ['自动重新计算', '永远保持旧值', '直接报错', '被自动删除'],
        answer: 0,
        explanation: 'getters 类似计算属性，依赖变化后会自动重新计算并更新缓存。'
      },
      {
        type: 'single',
        question: '组件中不解构、直接通过 store 实例读取 count 的写法是？',
        options: ['store.count', 'store.state.count', 'store.get(\'count\')', 'store[\'count\']()'],
        answer: 0,
        explanation: 'store 实例上直接访问 state 和 getters，如 store.count、store.double。'
      },
      {
        type: 'judge',
        question: '安装 Pinia 的命令是 npm install pinia。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '安装后在入口文件 app.use(createPinia()) 注册即可使用。'
      },
      {
        type: 'judge',
        question: '某个组件被卸载后，Pinia store 中保存的数据会被自动清空。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: 'store 的生命周期属于整个应用，与单个组件的挂载卸载无关。'
      },
      {
        type: 'judge',
        question: '不同组件调用同一个 useCounterStore()，拿到的是同一个 store 实例。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '同一 id 的 store 全局共享一个实例，这正是跨组件共享状态的基础。'
      },
      {
        type: 'multiple',
        question: '面试情景：实现用户登录信息的共享，合理的设计有？（多选）',
        options: ['定义 userStore 存放用户信息', '在 actions 中封装登录请求', '组件通过 useUserStore() 访问和修改', '每个组件各自存一份再想办法互相同步'],
        answer: [0, 1, 2],
        explanation: '共享状态集中在 store 中管理，各自存一份会导致数据不一致。'
      },
      {
        type: 'multiple',
        question: '关于 store 的组织方式，下列说法正确的有？（多选）',
        options: ['按业务划分多个 store 结构更清晰', 'store 文件常放在 stores 目录', 'defineStore 返回的函数约定以 use 开头命名', '一个应用最多只能定义一个 store'],
        answer: [0, 1, 2],
        explanation: '应用可以有任意多个 store，按业务拆分是推荐做法。'
      },
      {
        type: 'multiple',
        question: '关于哪些数据该放进 Pinia store，下列说法正确的有？（多选）',
        options: ['多个组件共享的数据放 store', '仅单个组件内部使用的状态留在组件内', '全局共享状态用 Pinia 便于统一维护', '项目里所有数据都必须放进 store'],
        answer: [0, 1, 2],
        explanation: 'store 用于共享状态，组件私有的临时状态没必要放进来。'
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
      },
      {
        type: 'single',
        question: '想在本地起一个静态服务器预览打包后的效果，应执行？',
        options: ['npm run dev', 'npm run build', 'npm run preview', 'npm start'],
        answer: 2,
        explanation: 'npm run preview 会在本地预览 dist 目录的内容。'
      },
      {
        type: 'single',
        question: 'Vite 生产构建时 Tree Shaking 的作用是？',
        options: ['压缩图片', '去掉无用代码', '生成路由配置', '格式化代码'],
        answer: 1,
        explanation: 'Tree Shaking 会移除未被使用的代码，减小产物体积。'
      },
      {
        type: 'judge',
        question: 'dist 目录里的是纯静态文件，不依赖 Node 环境即可部署。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'dist 可直接部署到 Nginx、GitHub Pages、Vercel 等任何静态服务器。'
      },
      {
        type: 'judge',
        question: '组件文件名约定使用大驼峰形式，如 UserCard.vue。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '大驼峰命名是单文件组件的约定俗成规范之一。'
      },
      {
        type: 'multiple',
        question: '关于 Vite 环境变量，下列说法正确的有？（多选）',
        options: ['可以写在 .env.production 文件中', '必须以 VITE_ 开头才会暴露给客户端代码', '代码中通过 import.meta.env 读取', '可以使用任意前缀暴露给客户端'],
        answer: [0, 1, 2],
        explanation: '只有以 VITE_ 开头的变量才会暴露给客户端，防止泄露敏感配置。'
      },
      {
        type: 'multiple',
        question: '关于单文件组件规范，下列说法正确的有？（多选）',
        options: ['复杂表达式应移入 computed', '一个组件只负责一件事，太大就拆分', '团队项目可配合 ESLint 和 Prettier 统一风格', 'style 加 scoped 会污染全局样式'],
        answer: [0, 1, 2],
        explanation: 'scoped 的作用恰恰是让样式只作用于当前组件，避免污染全局。'
      },
      {
        type: 'single',
        question: '在代码中读取 Vite 环境变量 VITE_API_BASE 的正确方式是？',
        options: ['import.meta.env.VITE_API_BASE', 'process.env.VITE_API_BASE', 'window.VITE_API_BASE', 'localStorage.getItem(\'VITE_API_BASE\')'],
        answer: 0,
        explanation: 'Vite 中以 VITE_ 开头的环境变量通过 import.meta.env 暴露给客户端代码。'
      },
      {
        type: 'judge',
        question: 'Vite 项目的开发服务器通过 npm run dev 启动，并支持毫秒级热更新。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'npm run dev 启动开发服务器，修改代码后页面立刻热更新对应部分。'
      },
      {
        type: 'single',
        question: '部署 Vue 项目时，需要上传到服务器的是哪个目录的内容？',
        options: ['src', 'dist', 'node_modules', '.vscode'],
        answer: 1,
        explanation: 'dist 是构建产物，纯静态文件，直接部署即可。'
      },
      {
        type: 'judge',
        question: '写在 .env.production 中的环境变量只在生产构建时生效。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '.env.production 在执行 npm run build 时加载，与开发环境变量互不影响。'
      },
      {
        type: 'multiple',
        question: '关于 Vite 的生产构建，下列说法正确的有？（多选）',
        options: ['会压缩合并代码', '会做 Tree Shaking 去除无用代码', '默认输出到 dist 目录', '产物运行需要服务器安装 Node 和全部依赖'],
        answer: [0, 1, 2],
        explanation: '构建产物是纯静态文件，任何静态服务器都能直接托管。'
      },
      {
        type: 'multiple',
        question: '面试情景：部署后首页正常但刷新 /about 返回 404，可能的原因和解决方案有？（多选）',
        options: ['项目使用了 history 路由模式', '服务器未配置把未匹配路径回退到 index.html', '配置 Nginx try_files 回退或改用 hash 模式可解决', '一定是打包命令写错了'],
        answer: [0, 1, 2],
        explanation: '这是 history 模式部署的经典问题，与打包命令无关。'
      },
      {
        type: 'judge',
        question: '环境变量必须以 VITE_ 开头的设计，是为了避免把敏感配置误暴露给客户端代码。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '只有显式加 VITE_ 前缀的变量才会被打包进客户端，其余变量保持私密。'
      },
      {
        type: 'single',
        question: '面试情景：开发和生产环境的接口地址不同，最佳管理方式是？',
        options: ['代码里写 if 判断当前域名', '分别写在 .env.development 和 .env.production 中，用 import.meta.env 读取', '每次部署前手动改代码', '把两个地址都写死在组件里'],
        answer: 1,
        explanation: '用环境变量文件区分环境是标准做法，构建时自动注入对应配置。'
      },
      {
        type: 'single',
        question: '团队项目中统一代码风格常用的工具组合是？',
        options: ['ESLint 和 Prettier', 'Nginx 和 Docker', 'Postman 和 Axios', 'Git 和 GitHub'],
        answer: 0,
        explanation: 'ESLint 负责代码质量检查，Prettier 负责格式统一，是常见的规范组合。'
      },
      {
        type: 'judge',
        question: 'style 标签加上 scoped 后，样式只作用于当前组件的模板。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'scoped 通过给元素加唯一属性实现样式隔离，避免污染其他组件。'
      },
      {
        type: 'single',
        question: '单文件组件中三个块的推荐排列顺序是？',
        options: ['template → script → style', 'style → script → template', 'script → template → style', '随意排列没有约定'],
        answer: 0,
        explanation: '约定 template 放最前面，然后 script，最后 style，保持结构统一。'
      },
      {
        type: 'single',
        question: 'script setup 中的导入语句推荐放在什么位置？',
        options: ['顶部', '底部', '模板标签里', '样式标签里'],
        answer: 0,
        explanation: '导入语句放顶部，相关逻辑按功能分组，是常见的代码组织规范。'
      },
      {
        type: 'single',
        question: '把 dist 部署到静态服务器后，用户访问应用的入口文件是？',
        options: ['index.html', 'package.json', 'vite.config.js', 'main.js'],
        answer: 0,
        explanation: 'dist 中的 index.html 是入口，它会加载打包后的 JS 和 CSS。'
      },
      {
        type: 'single',
        question: '关于开发服务器与生产构建产物的区别，下列说法正确的是？',
        options: ['开发服务器按需编译便于调试，构建产物经过压缩优化', '两者完全相同', '构建产物的体积一定更大', 'npm run dev 也会输出 dist 目录'],
        answer: 0,
        explanation: 'dev 追求速度和调试体验，build 追求体积和性能，输出到 dist。'
      },
      {
        type: 'judge',
        question: '可以在 .env.development 中配置仅在开发环境生效的环境变量。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '.env.development 在 npm run dev 时加载，与 .env.production 互不影响。'
      },
      {
        type: 'judge',
        question: '组件拆分应以职责清晰为度，拆得过碎反而可能增加维护成本。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '拆分是为了可维护性服务，过度拆分会增加文件数量和跳转成本。'
      },
      {
        type: 'judge',
        question: 'Vite 的开发服务器依赖 Node 运行，但构建出的最终产物不需要 Node 环境。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: 'Node 只在开发和构建阶段需要，dist 是纯静态文件，任意静态服务器即可托管。'
      },
      {
        type: 'multiple',
        question: '课程中提到的静态站点托管方式有？（多选）',
        options: ['Nginx', 'GitHub Pages', 'Vercel', '必须自建一台 Windows 服务器'],
        answer: [0, 1, 2],
        explanation: 'dist 是纯静态文件，Nginx、GitHub Pages、Vercel 等都能直接托管。'
      },
      {
        type: 'multiple',
        question: '关于 Vite 的环境变量文件，下列说法正确的有？（多选）',
        options: ['.env.development 在开发时加载', '.env.production 在生产构建时加载', '要暴露给客户端的变量以 VITE_ 开头', '应该把数据库密码等敏感信息写进去给前端用'],
        answer: [0, 1, 2],
        explanation: '环境变量会被打包进客户端代码，敏感信息绝不能暴露给前端。'
      },
      {
        type: 'multiple',
        question: '面试情景：接手一个多人协作的 Vue3 项目，想统一代码质量，合理的措施有？（多选）',
        options: ['接入 ESLint 做代码检查', '接入 Prettier 统一格式', '约定组件命名和文件结构规范', '允许每个人按自己的风格随意提交'],
        answer: [0, 1, 2],
        explanation: '团队项目需要统一的检查、格式和规范约定，否则协作成本会越来越高。'
      }
    ]
  }
]
