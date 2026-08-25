export default [
  {
    id: 'ts-01',
    title: 'TypeScript 简介与基本类型',
    summary: '认识 TS 与常用基础类型',
    minutes: 12,
    sections: [
      {
        heading: '什么是 TypeScript',
        text: 'TypeScript 是微软开发的、在 JavaScript 基础上增加了类型系统的语言。写好的 TS 代码需要编译成 JS 才能在浏览器或 Node 中运行。\n它的核心价值是：在写代码阶段就检查出类型错误，而不是等到运行时才报错。加上编辑器的智能提示，写大型项目时更安心。面试常问“为什么要用 TS”，记住三点：类型检查、更好提示、更易重构。',
        code: "// 安装\n// npm install -g typescript\n// 编译 ts 文件\n// tsc hello.ts",
        lang: 'js'
      },
      {
        heading: '基本类型标注',
        text: 'TS 给变量加类型的方法是：变量名后面写冒号和类型。常用基础类型有 string（字符串）、number（数字）、boolean（布尔值）。\n数组有两种写法：number[] 或 Array<number>。写好类型后，赋错值会在编译时报错，这就是 TS 的第一道防线。',
        code: "let name: string = '小明';\nlet age: number = 22;\nlet isOk: boolean = true;\nlet scores: number[] = [90, 85];\nlet tags: Array<string> = ['a', 'b'];",
        lang: 'js'
      },
      {
        heading: 'any 与 unknown',
        text: 'any 表示“任意类型”，用了它 TS 就不检查了，等于放弃类型保护，应尽量避免。\nunknown 也表示“可以是任何值”，但它比 any 安全：unknown 类型的变量不能直接拿来用，必须先做类型检查或类型断言，确认类型后才能操作。面试常问两者区别，记住：unknown 是安全版的 any。',
        code: "let a: any = 1;\na.toFixed(2); // 不检查，可能运行时出错\nlet b: unknown = 'hello';\nif (typeof b === 'string') {\n  console.log(b.toUpperCase()); // 检查后可用\n}",
        lang: 'js'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: 'TypeScript 代码最终如何运行？',
        options: ['浏览器直接运行', '先编译成 JavaScript 再运行', '需要专门的 TS 虚拟机', '只能在 Node 中运行'],
        answer: 1,
        explanation: 'TS 必须通过 tsc 等工具编译成 JS，再由浏览器或 Node 执行。'
      },
      {
        type: 'single',
        question: 'let age: number = "18" 这段代码是否有类型错误？',
        options: ['没有错误，会自动转换', '有错误，字符串不能赋给 number', '有错误，应该用 var 声明', '没有错误，number 包含数字字符串'],
        answer: 1,
        explanation: '字符串字面量不能赋给 number 类型的变量，编译时会报类型错误，应写成 18（不带引号）。'
      },
      {
        type: 'judge',
        question: 'unknown 类型的变量在未经类型检查前不能直接调用其方法。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。这正是 unknown 比 any 安全的地方：必须先通过 typeof 等检查收窄类型。'
      },
      {
        type: 'multiple',
        question: '以下哪些是 TypeScript 相对 JavaScript 带来的好处？（多选）',
        options: ['编译期类型检查', '编辑器智能提示更强', '重构代码更安全', '运行速度更快'],
        answer: [0, 1, 2],
        explanation: 'TS 的优势在开发阶段：类型检查、智能提示、安全重构；编译后的 JS 运行速度与手写 JS 基本一致。'
      },
      {
        type: 'single',
        question: '编译 hello.ts 文件生成 JS，应使用的命令是？',
        options: ['node hello.ts', 'tsc hello.ts', 'npm run hello', 'tsbuild hello'],
        answer: 1,
        explanation: '安装 typescript 后使用 tsc 命令把 TS 文件编译为 JS。'
      },
      {
        type: 'single',
        question: '以下哪个类型被称为“安全版的 any”？',
        options: ['void', 'unknown', 'never', 'object'],
        answer: 1,
        explanation: 'unknown 可以存放任何值，但使用前必须先检查或断言，因此比 any 更安全。'
      },
      {
        type: 'judge',
        question: '使用 any 类型会让 TS 放弃对该变量的类型检查，应尽量避免。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。any 等于关闭了类型保护，失去了使用 TS 的意义。'
      },
      {
        type: 'judge',
        question: 'number[] 与 Array<number> 是两种等价的数组类型写法。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。两种写法完全等价，都表示数字数组，可任选其一。'
      },
      {
        type: 'multiple',
        question: '以下哪些变量的类型标注写法是正确的？（多选）',
        options: ['let a: string = \'你好\'', 'let b: number[] = [1, 2]', 'let c: Array<string> = [\'a\']', 'let d: boolean = \'true\''],
        answer: [0, 1, 2],
        explanation: '前三种写法均正确；布尔值不能赋字符串，应写 let d: boolean = true。'
      },
      {
        type: 'multiple',
        question: '关于 any 与 unknown 的区别，说法正确的有？（多选）',
        options: ['unknown 使用前必须先检查或断言', 'any 会跳过类型检查', 'unknown 比 any 更安全', 'unknown 可以直接调用任意方法'],
        answer: [0, 1, 2],
        explanation: 'unknown 必须先收窄才能操作，any 不做检查；说 unknown 可直接调用方法是错误的。'
      },
      {
        type: 'single',
        question: 'let b: unknown = \'hi\'; b.toUpperCase(); 这段代码是否有类型错误？',
        options: ['没有错误，unknown 可直接调用方法', '有错误，unknown 必须先收窄类型再使用', '有错误，unknown 不能赋字符串', '没有错误，TS 会自动推断为 string'],
        answer: 1,
        explanation: 'unknown 类型的变量在使用前必须先用 typeof 等检查收窄，直接调用方法会报类型错误。'
      },
      {
        type: 'judge',
        question: 'let tags: Array<string> = [1, 2]; 这段代码能通过 TS 编译。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。Array<string> 是字符串数组，元素 1、2 是数字，类型不匹配会报错。'
      },
      {
        type: 'single',
        question: 'TypeScript 是由哪家公司开发的？',
        options: ['Google', 'Microsoft', 'Facebook', 'Apple'],
        answer: 1,
        explanation: 'TypeScript 是微软（Microsoft）开发并开源的编程语言。'
      },
      {
        type: 'single',
        question: 'let s: string = 100 这段代码是否有类型错误？',
        options: ['没有错误', '有错误，数字不能赋给 string 类型', '有错误，string 类型必须加引号声明', '没有错误，TS 会自动转成字符串'],
        answer: 1,
        explanation: 'string 类型只能赋字符串值，100 是数字，编译时会报类型错误。'
      },
      {
        type: 'judge',
        question: 'TypeScript 的类型检查发生在编译阶段，而不是代码运行时。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。TS 在写代码、编译阶段就发现类型错误，这正是它相对 JS 的核心价值。'
      },
      {
        type: 'judge',
        question: 'unknown 与 any 完全等价，二者在使用上没有任何区别。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。any 不做任何检查，unknown 使用前必须先收窄类型，unknown 更安全。'
      },
      {
        type: 'multiple',
        question: '以下哪些属于 TypeScript 的常用基础类型？（多选）',
        options: ['string', 'number', 'boolean', 'div'],
        answer: [0, 1, 2],
        explanation: 'string、number、boolean 都是 TS 基础类型；div 是 HTML 标签，不是类型。'
      },
      {
        type: 'multiple',
        question: '关于 tsc 编译器，说法正确的有？（多选）',
        options: ['可以把 TS 文件编译成 JS', '编译时会进行类型检查', '编译产物可由浏览器或 Node 运行', '编译产物需要 TS 虚拟机执行'],
        answer: [0, 1, 2],
        explanation: 'tsc 编译时做类型检查并生成 JS，产物在浏览器或 Node 中运行，不需要 TS 虚拟机。'
      },
      {
        type: 'single',
        question: 'let a: any = \'x\'; a.toFixed(2); 这段代码的情况是？',
        options: ['编译时报类型错误', '编译时不检查，运行时可能出错', 'a 必须先收窄才能使用', '语法错误无法编译'],
        answer: 1,
        explanation: 'any 会跳过类型检查，编译通过；但字符串没有 toFixed 方法，运行时才报错。'
      },
      {
        type: 'single',
        question: '下列哪个变量的赋值能通过 TS 编译？',
        options: ['let a: number = \'1\'', 'let b: string = 1', 'let c: boolean = false', 'let d: number[] = 1'],
        answer: 2,
        explanation: '只有 boolean 赋 false 类型匹配；其余选项值与标注类型不一致，都会报错。'
      }
    ]
  },
  {
    id: 'ts-02',
    title: '接口 interface 与类型别名 type',
    summary: '用接口和别名描述对象结构',
    minutes: 13,
    sections: [
      {
        heading: 'interface 描述对象形状',
        text: 'interface 用来描述一个对象应该有哪些属性、各是什么类型。属性名后加问号表示可选属性，readonly 表示只读属性。\n有了接口，函数的参数和返回值就有了契约：传入的对象少属性或类型不对，编译时就会报错。这是 TS 中最常用的功能之一。',
        code: "interface User {\n  readonly id: number;\n  name: string;\n  age?: number; // 可选\n}\nconst u: User = { id: 1, name: '小明' };",
        lang: 'js'
      },
      {
        heading: 'type 类型别名',
        text: 'type 可以给任意类型起别名，不仅能描述对象，还能表示联合类型、函数类型等。\n比如 type ID = string | number 表示 ID 可以是字符串或数字。写复杂类型时用别名代替重复书写，代码更清晰。',
        code: "type ID = string | number;\ntype Point = { x: number; y: number };\nconst p: Point = { x: 1, y: 2 };\nlet uid: ID = 'a100'; // 或 100 都行",
        lang: 'js'
      },
      {
        heading: 'interface 与 type 的区别',
        text: '这是面试高频题。主要区别：interface 支持声明合并（同名接口会自动合并），还能被 extends 继承和 implements 实现，适合描述对象、类的结构；type 更灵活，能表示联合、交叉、元组等任意类型，但不支持声明合并。\n简单原则：描述对象结构优先 interface，需要联合类型等复杂组合时用 type。',
        code: "interface Animal { name: string; }\ninterface Dog extends Animal { bark(): void; }\ntype Pet = Dog | { meow(): void }; // 联合只能用 type",
        lang: 'js'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: 'interface User { name: string; age?: number } 中 age 后面的问号表示？',
        options: ['age 必须有值', 'age 是可选属性', 'age 类型不确定', '语法错误'],
        answer: 1,
        explanation: '属性名后的 ? 表示该属性可选，对象可以没有它。'
      },
      {
        type: 'single',
        question: '需要定义“既可以是 string 也可以是 number”的类型，应该用？',
        options: ['interface', 'type', 'class', 'enum'],
        answer: 1,
        explanation: '联合类型只能用 type 定义，如 type ID = string | number；interface 不支持联合类型。'
      },
      {
        type: 'judge',
        question: '同名的 interface 声明多次时，TypeScript 会把它们自动合并成一个接口。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。这称为声明合并，是 interface 特有、type 不具备的能力。'
      },
      {
        type: 'multiple',
        question: '以下哪些是 interface 支持而 type 不支持的能力？（多选）',
        options: ['声明合并', '被类 implements 实现', '定义联合类型', 'extends 继承接口'],
        answer: [0, 1, 3],
        explanation: 'interface 支持声明合并、extends 继承、被类 implements；定义联合类型是 type 的能力。'
      },
      {
        type: 'single',
        question: 'interface User { readonly id: number } 中 readonly 表示？',
        options: ['id 初始化后不能再修改', 'id 必须为空', 'id 只能在类中使用', 'id 会被编译器删除'],
        answer: 0,
        explanation: 'readonly 表示只读属性，对象创建后不允许再给它赋值。'
      },
      {
        type: 'single',
        question: 'interface User 要求 name: string 为必填，const u: User = { id: 1 } 是否有类型错误？',
        options: ['没有错误', '有错误，缺少必填属性 name', '有错误，id 不能为数字', '没有错误，TS 会自动补全'],
        answer: 1,
        explanation: '对象缺少接口要求的必填属性时会在编译时报错，这正是接口的契约作用。'
      },
      {
        type: 'judge',
        question: 'type 类型别名同样可以用来描述对象的结构。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。type Point = { x: number; y: number } 就是用别名描述对象结构。'
      },
      {
        type: 'judge',
        question: 'interface 可以用来定义联合类型，如 string | number。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。联合类型只能用 type 定义，interface 只能描述对象等结构。'
      },
      {
        type: 'multiple',
        question: '关于 type 类型别名，说法正确的有？（多选）',
        options: ['可以表示联合类型', '可以表示函数类型', '支持声明合并', '可以给对象类型起别名'],
        answer: [0, 1, 3],
        explanation: 'type 能表示联合、函数、对象等任意类型；声明合并是 interface 特有的能力。'
      },
      {
        type: 'multiple',
        question: '关于 interface 与 type 的使用原则，说法正确的有？（多选）',
        options: ['描述对象结构优先用 interface', '联合类型用 type 定义', '交叉类型也可以用 type 定义', 'interface 可以方便地表示元组类型'],
        answer: [0, 1, 2],
        explanation: '对象结构优先 interface；联合、交叉、元组等复杂组合用 type 更方便。'
      },
      {
        type: 'single',
        question: 'interface Dog extends Animal 中 extends 的作用是？',
        options: ['让 Dog 继承 Animal 的成员', '把 Dog 和 Animal 合并为联合类型', '让 Dog 变成类', '声明 Dog 是可选接口'],
        answer: 0,
        explanation: '接口的 extends 表示继承，Dog 会拥有 Animal 的全部成员，再加上自己新增的成员。'
      },
      {
        type: 'single',
        question: 'interface User { readonly id: number }，const u: User = { id: 1 }; u.id = 2; 这段代码是否有类型错误？',
        options: ['没有错误', '有错误，readonly 属性不能重新赋值', '有错误，id 初始值不能为 1', '没有错误，运行时才报错'],
        answer: 1,
        explanation: 'readonly 表示只读属性，对象创建后再给它赋值会在编译时报类型错误。'
      },
      {
        type: 'judge',
        question: 'type ID = string | number; let x: ID = true; 这段代码能通过 TS 编译。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。ID 只能是 string 或 number，布尔值 true 不在联合类型范围内。'
      },
      {
        type: 'multiple',
        question: '以下哪些是 interface 支持的写法？（多选）',
        options: ['用 ? 声明可选属性', '用 readonly 声明只读属性', '用 extends 继承其他接口', '直接表示 string | number 联合类型'],
        answer: [0, 1, 2],
        explanation: 'interface 支持可选属性、只读属性和 extends 继承；联合类型只能用 type 定义。'
      },
      {
        type: 'single',
        question: 'type Point = { x: number; y: number }; const p: Point = { x: 1 } 是否有类型错误？',
        options: ['没有错误', '有错误，缺少必填属性 y', '有错误，x 不能为数字', '没有错误，y 会自动为 0'],
        answer: 1,
        explanation: 'Point 中 x 和 y 都是必填，缺少 y 会在编译时报类型错误。'
      },
      {
        type: 'single',
        question: '在 interface 中描述对象形状时，各个属性成员之间通常用什么分隔？',
        options: ['分号或换行', '加号', '冒号', '竖线'],
        answer: 0,
        explanation: '接口成员之间用分号（或换行）分隔；冒号用于标注属性类型，竖线用于联合类型。'
      },
      {
        type: 'judge',
        question: 'type 类型别名不支持声明合并，重复声明同名 type 会报错。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。声明合并是 interface 特有的能力，同名 type 会报重复标识符错误。'
      },
      {
        type: 'judge',
        question: '接口的可选属性在对象没有传入时，读取它得到的是 undefined。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。可选属性相当于类型自动带上 undefined，未传时读取结果为 undefined。'
      },
      {
        type: 'multiple',
        question: '关于接口中的可选属性 age?: number，说法正确的有？（多选）',
        options: ['对象可以不传 age', '传入时必须是 number 类型', '读取时可能得到 undefined', '传入字符串也能通过编译'],
        answer: [0, 1, 2],
        explanation: '可选属性可省略，但传了就必须符合标注类型；未传时读取为 undefined；传字符串会报错。'
      },
      {
        type: 'multiple',
        question: '以下哪些类型适合用 type 定义？（多选）',
        options: ['string | number 联合类型', 'A & B 交叉类型', '函数的参数与返回值类型', '仅描述一个普通对象结构时必选 type'],
        answer: [0, 1, 2],
        explanation: '联合、交叉、函数类型都用 type 定义；普通对象结构优先用 interface，并非必选 type。'
      }
    ]
  },
  {
    id: 'ts-03',
    title: '函数与类的类型标注',
    summary: '给函数参数返回值和类加类型',
    minutes: 13,
    sections: [
      {
        heading: '函数的类型标注',
        text: '给函数加类型分两部分：参数类型和返回值类型。参数后面写冒号加类型，参数列表后面写返回值类型。\n可选参数用问号（必须放在最后），默认参数直接赋值，剩余参数用 ... 加数组类型。返回值可以不写，TS 会自动推断，但写清楚更利于协作。',
        code: "function add(a: number, b: number): number {\n  return a + b;\n}\nfunction greet(name: string, title?: string): string {\n  return (title || '同学') + '，' + name;\n}",
        lang: 'js'
      },
      {
        heading: '函数类型与箭头函数',
        text: '可以把“函数的形状”定义成类型：先写参数列表，再用 => 写返回值类型。这在定义回调函数、传参时特别有用。\n比如数组的 forEach、filter 回调，类型一旦定好，传错函数编译时就报错。',
        code: "type Fn = (a: number, b: number) => number;\nconst mul: Fn = (x, y) => x * y;\nconsole.log(mul(3, 4)); // 12",
        lang: 'js'
      },
      {
        heading: '类的类型标注',
        text: 'TS 中的类：属性要先声明类型；constructor 的参数也要标注类型；方法像普通函数一样标注。\n还有三个访问修饰符：public（默认，随处可访问）、private（仅类内部）、protected（类内部和子类）。类还可以用 implements 关键字实现接口，保证类具备接口要求的成员。',
        code: "class Person {\n  private name: string;\n  constructor(name: string) {\n    this.name = name;\n  }\n  sayHi(): void {\n    console.log('你好，' + this.name);\n  }\n}",
        lang: 'js'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: 'function add(a: number, b: number): string { return a + b; } 是否有类型错误？',
        options: ['没有错误', '有错误，返回值 number 与标注的 string 不符', '有错误，参数不能是 number', '有错误，函数必须用箭头写法'],
        answer: 1,
        explanation: 'a + b 的结果是 number，与声明的返回值 string 冲突，编译时报错。'
      },
      {
        type: 'single',
        question: '类的属性用哪个修饰符后，只能在类的内部访问？',
        options: ['public', 'static', 'private', 'readonly'],
        answer: 2,
        explanation: 'private 限制属性只能在类内部访问，外部和子类都不能直接访问。'
      },
      {
        type: 'judge',
        question: 'TypeScript 中函数的可选参数必须放在参数列表的最后。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。可选参数后面不能再跟必填参数，否则调用时无法对应参数位置。'
      },
      {
        type: 'multiple',
        question: '关于 TS 中类的说法，正确的有？（多选）',
        options: ['可以用 implements 实现接口', 'private 成员子类也不能直接访问', 'constructor 参数可以标注类型', '类编译后无法在 JS 中运行'],
        answer: [0, 1, 2],
        explanation: '类可实现接口；private 仅限本类内部；构造参数可标注类型。类编译后就是普通 JS，可以正常运行。'
      },
      {
        type: 'single',
        question: '函数类型 (a: number, b: number) => number 中，=> 后面的 number 表示？',
        options: ['第二个参数的类型', '返回值类型', '函数名', '参数个数'],
        answer: 1,
        explanation: '函数类型中参数列表后用 => 引出返回值类型。'
      },
      {
        type: 'single',
        question: 'function f(...args: number[]) 中 ...args 表示？',
        options: ['剩余参数，args 是数字数组', '可选参数', '默认参数', '展开数组，与参数无关'],
        answer: 0,
        explanation: '... 加数组类型表示剩余参数，调用时传入的多个实参会被收集为一个数组。'
      },
      {
        type: 'judge',
        question: '带默认值的参数（如 b: number = 1）在调用时可以不传。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。不传时使用默认值，传了则使用传入的值。'
      },
      {
        type: 'judge',
        question: 'protected 修饰的成员可以在子类中访问。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。protected 允许类内部和子类访问，private 才仅限本类内部。'
      },
      {
        type: 'multiple',
        question: '关于函数的类型标注，以下说法正确的有？（多选）',
        options: ['参数后写冒号加类型', '返回值类型写在参数列表之后', '返回值类型必须显式写出否则报错', '可以用 type 定义函数类型'],
        answer: [0, 1, 3],
        explanation: '参数和返回值都按规则标注；返回值可省略由 TS 自动推断；函数类型可用 type 定义。'
      },
      {
        type: 'multiple',
        question: '以下哪些场景适合先定义函数类型再使用？（多选）',
        options: ['定义回调函数的类型', '约束作为参数传入的函数', '数组 forEach、filter 的回调', '声明一个 number 类型的变量'],
        answer: [0, 1, 2],
        explanation: '回调、函数参数、数组方法回调都常用函数类型约束；声明数字变量只需标注 number。'
      },
      {
        type: 'single',
        question: 'function greet(name: string, title?: string) 定义后，调用 greet(\'小明\') 是否有类型错误？',
        options: ['没有错误，title 是可选参数可以不传', '有错误，必须传满所有参数', '有错误，可选参数必须传 null', '有错误，字符串不能用单引号'],
        answer: 0,
        explanation: 'title 加了问号是可选参数，调用时可以省略，因此只传一个参数没有错误。'
      },
      {
        type: 'judge',
        question: '在 TS 的类中，不写访问修饰符的成员默认是 public。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。public 是默认修饰符，成员随处可访问；需要限制时才显式写 private 或 protected。'
      },
      {
        type: 'single',
        question: 'function f(a: number): void 中，返回值类型 void 表示？',
        options: ['函数返回数字', '函数没有返回值', '函数是私有的', '参数列表为空'],
        answer: 1,
        explanation: 'void 表示函数没有返回值，不需要 return 任何结果。'
      },
      {
        type: 'single',
        question: 'type Fn = (a: number, b: number) => number; const mul: Fn = (x, y) => x * y; 调用 mul(3, 4) 的结果是？',
        options: ['7', '12', '34', '编译错误'],
        answer: 1,
        explanation: '箭头函数返回 x * y 即 3 * 4，结果为 12，且类型与 Fn 的声明一致。'
      },
      {
        type: 'single',
        question: 'class A { private x: number = 1 }，const a = new A(); a.x 这段代码是否有类型错误？',
        options: ['没有错误', '有错误，private 成员不能在类外部访问', '有错误，x 不能初始化为 1', '没有错误，读取结果是 undefined'],
        answer: 1,
        explanation: 'private 成员仅限类内部访问，在类外部读取 a.x 会在编译时报类型错误。'
      },
      {
        type: 'single',
        question: '类要实现一个接口，应使用的关键字是？',
        options: ['extends', 'implements', 'declare', 'interface'],
        answer: 1,
        explanation: '类用 implements 实现接口，保证类具备接口要求的成员；extends 用于类的继承或接口继承接口。'
      },
      {
        type: 'judge',
        question: '函数不显式写返回值类型时，TS 会根据 return 语句自动推断。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。返回值类型可以省略由 TS 推断，但写清楚更利于团队协作。'
      },
      {
        type: 'judge',
        question: '剩余参数 ...args: number[] 在函数内部是一个真正的数组，可以使用数组方法。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。剩余参数会把传入的多个实参收集为一个数组，函数内可正常使用数组方法。'
      },
      {
        type: 'multiple',
        question: '关于类的访问修饰符，说法正确的有？（多选）',
        options: ['public 是默认修饰符', 'private 仅本类内部可访问', 'protected 在子类中可访问', 'private 成员子类也能直接访问'],
        answer: [0, 1, 2],
        explanation: 'public 默认随处可访问；private 仅本类内部；protected 允许子类访问；子类直接访问 private 会报错。'
      },
      {
        type: 'multiple',
        question: '以下哪些函数参数写法是正确的？（多选）',
        options: ['function f(a: number)', 'function f(a?: number)', 'function f(a: number = 0)', 'function f(a?: number, b: string)'],
        answer: [0, 1, 2],
        explanation: '必填、可选、默认参数写法都正确；可选参数后面不能再跟必填参数，最后一项写法错误。'
      }
    ]
  },
  {
    id: 'ts-04',
    title: '泛型基础',
    summary: '用泛型写出可复用的类型代码',
    minutes: 14,
    sections: [
      {
        heading: '为什么需要泛型',
        text: '假设要写一个函数返回传入的第一个元素，参数可能是数字数组也可能是字符串数组，难道每种类型都写一遍？泛型就是解决这个问题的：用一个类型变量 T 占位，调用时再确定具体类型。\n可以把泛型理解为“类型的参数”，让同一段代码适配多种类型，同时不丢失类型检查。',
        code: "function first<T>(arr: T[]): T {\n  return arr[0];\n}\nconst n = first<number>([1, 2, 3]); // n 是 number\nconst s = first<string>(['a', 'b']); // s 是 string",
        lang: 'js'
      },
      {
        heading: '泛型接口与泛型类',
        text: '泛型不只用于函数。接口和类也可以带类型参数，比如描述“后端返回的数据结构”时，data 字段的类型每个接口都不同，用泛型就能一套定义走天下。\n调用时不写类型参数，TS 通常能根据传参自动推断出来。',
        code: "interface ApiResponse<T> {\n  code: number;\n  data: T;\n}\nconst res: ApiResponse<string[]> = {\n  code: 0,\n  data: ['苹果', '香蕉']\n};",
        lang: 'js'
      },
      {
        heading: '泛型约束',
        text: '有时希望泛型不是什么类型都行，比如必须“有 length 属性”。用 extends 关键字给泛型加约束：T extends { length: number }，这样函数里就能安全地使用 length。\n约束让泛型既灵活又安全，是泛型进阶的关键用法。',
        code: "function logLen<T extends { length: number }>(arg: T): T {\n  console.log(arg.length);\n  return arg;\n}\nlogLen('hello'); // 5\nlogLen([1, 2, 3]); // 3",
        lang: 'js'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: '泛型中的 T 通常被理解为什么？',
        options: ['一个固定不变的类型', '一个类型变量，调用时才确定', '字符串类型的缩写', 'any 的别名'],
        answer: 1,
        explanation: 'T 是类型参数（类型变量），调用函数或实例化时才被具体类型替换，并且保留类型检查。'
      },
      {
        type: 'single',
        question: 'function f<T extends { length: number }>(x: T) 中的 extends 作用是？',
        options: ['让 T 继承某个类', '约束 T 必须有 length 属性', '声明 T 是数字', '让函数可以递归'],
        answer: 1,
        explanation: '这里的 extends 是泛型约束，限定 T 必须是带有 length: number 属性的类型。'
      },
      {
        type: 'judge',
        question: '调用泛型函数时必须显式写出类型参数，否则无法通过编译。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。大多数情况下 TS 能根据传入的实参自动推断类型参数，显式写出只是为了更清晰。'
      },
      {
        type: 'multiple',
        question: '以下哪些可以使用泛型？（多选）',
        options: ['函数', '接口 interface', '类 class', 'if 条件语句'],
        answer: [0, 1, 2],
        explanation: '函数、接口、类都可以带类型参数；if 是流程控制语句，与泛型无关。'
      },
      {
        type: 'single',
        question: 'const s = first<string>([\'a\', \'b\']) 调用后，s 的类型是？',
        options: ['string[]', 'string', 'T', 'unknown'],
        answer: 1,
        explanation: 'T 被替换为 string，函数返回 T 即 string（数组的第一个元素）。'
      },
      {
        type: 'single',
        question: 'interface ApiResponse<T> { data: T } 中泛型 T 的作用是？',
        options: ['让 data 固定为字符串', '让 data 的类型在使用接口时才确定', '让接口无法被复用', '只是装饰，没有实际作用'],
        answer: 1,
        explanation: 'T 是类型参数，使用时传入具体类型，一套定义适配多种接口返回数据。'
      },
      {
        type: 'judge',
        question: '没有加约束的泛型 T 上，可以直接安全地访问 length 属性。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。T 可能是任何类型，必须先加 T extends { length: number } 约束才能访问 length。'
      },
      {
        type: 'judge',
        question: '使用泛型可以让同一段代码适配多种类型，同时不丢失类型检查。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。这正是泛型相比直接使用 any 的核心优势。'
      },
      {
        type: 'multiple',
        question: '已知 function logLen<T extends { length: number }>(arg: T)，以下哪些调用能通过编译？（多选）',
        options: ['logLen(\'hello\')', 'logLen([1, 2, 3])', 'logLen(123)', 'logLen({ length: 5 })'],
        answer: [0, 1, 3],
        explanation: '字符串、数组都有 length，{ length: 5 } 满足约束；数字 123 没有 length，会报错。'
      },
      {
        type: 'multiple',
        question: '关于泛型接口 ApiResponse<T>，说法正确的有？（多选）',
        options: ['不同接口的数据可复用同一定义', '使用时 T 会被具体类型替换', 'ApiResponse<string[]> 的 data 是字符串数组', 'T 在定义时就固定为 string'],
        answer: [0, 1, 2],
        explanation: '泛型接口复用性强，T 在使用时才确定；说 T 定义时就固定为 string 是错误的。'
      },
      {
        type: 'single',
        question: '已知 function first<T>(arr: T[]): T，调用 const n = first([1, 2, 3]) 不写类型参数时，n 的类型是？',
        options: ['number', 'number[]', 'T', 'any'],
        answer: 0,
        explanation: 'TS 根据实参 [1, 2, 3] 自动推断 T 为 number，返回类型 T 即 number。'
      },
      {
        type: 'single',
        question: 'function f<T>(x: T) { return x.length; } 这段代码是否有类型错误？',
        options: ['没有错误', '有错误，T 未约束为带 length 属性的类型', '有错误，泛型函数不能有返回值', '没有错误，length 是通用属性'],
        answer: 1,
        explanation: 'T 可以是任何类型，不保证有 length，必须写成 T extends { length: number } 加约束后才能访问。'
      },
      {
        type: 'judge',
        question: '泛型可以理解为“类型的参数”，调用时再传入具体类型。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。就像函数有参数一样，泛型让类型也变成可传入的参数，从而复用同一段代码。'
      },
      {
        type: 'multiple',
        question: '相比直接使用 any，使用泛型的优势有？（多选）',
        options: ['保留类型检查', '使用时能获得类型提示', '同一段代码可复用于多种类型', '让程序运行速度更快'],
        answer: [0, 1, 2],
        explanation: '泛型既复用代码又不丢失类型检查和提示；any 则放弃检查。泛型与运行速度无关。'
      },
      {
        type: 'single',
        question: '已知 interface ApiResponse<T> { data: T }，则 ApiResponse<number> 中 data 的类型是？',
        options: ['number', 'T', 'any', 'number[]'],
        answer: 0,
        explanation: '使用时传入 number，接口内的 T 全部被替换为 number，所以 data 是 number 类型。'
      },
      {
        type: 'single',
        question: 'class Box<T> { value: T } 这个定义说明什么？',
        options: ['类也可以使用泛型', '类不能使用泛型', 'T 必须是 string', 'Box 只能实例化一次'],
        answer: 0,
        explanation: '泛型不仅用于函数，类也可以带类型参数，实例化时再确定具体类型。'
      },
      {
        type: 'judge',
        question: '使用泛型接口时，传入的类型参数会替换接口内所有出现 T 的位置。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。T 是类型占位符，使用时被具体类型统一替换，从而复用同一套定义。'
      },
      {
        type: 'judge',
        question: '泛型只能有一个类型参数，不能写成 <T, K> 这样的形式。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。泛型可以有多个类型参数，如 <T, K>，用逗号分隔即可。'
      },
      {
        type: 'multiple',
        question: '以下哪些是泛型的典型应用场景？（多选）',
        options: ['返回数组第一个元素的函数', '后端返回的统一响应结构', '需要适配多种类型的工具函数', '只处理数字的固定加法函数'],
        answer: [0, 1, 2],
        explanation: '需要适配多种类型又要保留类型检查的场景适合泛型；只处理固定数字类型无需泛型。'
      },
      {
        type: 'multiple',
        question: '关于泛型约束 T extends { length: number }，说法正确的有？（多选）',
        options: ['约束后函数内可安全访问 length', '不满足约束的实参会报类型错误', '字符串和数组都满足该约束', '约束后 T 只能是数组类型'],
        answer: [0, 1, 2],
        explanation: '约束让函数内能安全使用 length，不满足约束的实参会报错；字符串、数组都有 length；满足结构即可，不限于数组。'
      }
    ]
  },
  {
    id: 'ts-05',
    title: '联合类型、交叉类型与类型守卫',
    summary: '组合类型并安全地收窄类型',
    minutes: 14,
    sections: [
      {
        heading: '联合类型与交叉类型',
        text: '联合类型用竖线 | 表示“是其中某一种”，如 string | number。变量是联合类型时，只能访问所有成员共有的属性和方法。\n交叉类型用 & 表示“同时满足”，把多个类型合并成一个，常用于给对象类型叠加属性。简单记：| 是“或”，& 是“与”。',
        code: "type ID = string | number;\ntype A = { name: string };\ntype B = { age: number };\ntype C = A & B; // 同时有 name 和 age\nconst c: C = { name: '小明', age: 22 };",
        lang: 'js'
      },
      {
        heading: '类型守卫：typeof 与 instanceof',
        text: '联合类型的变量在使用前，需要先“收窄”确定它具体是哪种类型，这个过程叫类型守卫。\n最常用 typeof 判断原始类型（string、number 等），instanceof 判断类的实例。判断写进 if 里，TS 会自动在该分支内把类型收窄，之后就能安全调用对应方法。',
        code: "function printId(id: string | number) {\n  if (typeof id === 'string') {\n    console.log(id.toUpperCase()); // 此处 id 是 string\n  } else {\n    console.log(id.toFixed(2)); // 此处 id 是 number\n  }\n}",
        lang: 'js'
      },
      {
        heading: 'in 与自定义类型守卫',
        text: '判断对象类型可以用 in 检查属性是否存在，也可以写自定义类型守卫函数：返回类型写成“参数 is 某类型”，TS 就会信任这个判断。\n另外还有一种常见模式叫“可辨识联合”：每个类型都有一个共同的字面量字段（如 kind），用 switch 判断它就能精确收窄，后端接口的不同返回格式常用这招处理。',
        code: "type Cat = { kind: 'cat'; meow(): void };\ntype Dog = { kind: 'dog'; bark(): void };\nfunction speak(pet: Cat | Dog) {\n  if (pet.kind === 'cat') {\n    pet.meow();\n  } else {\n    pet.bark();\n  }\n}",
        lang: 'js'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: 'type X = A & B 表示 X 是？',
        options: ['A 或 B 其中一种', '同时具有 A 和 B 的所有成员', 'A 继承 B', 'A 与 B 互斥'],
        answer: 1,
        explanation: '& 是交叉类型，结果类型同时拥有 A 和 B 的全部属性和方法。'
      },
      {
        type: 'single',
        question: 'function f(x: string | number) { x.toUpperCase(); } 是否有类型错误？',
        options: ['没有错误', '有错误，number 上没有 toUpperCase，需先收窄类型', '有错误，不能使用联合类型', '没有错误，TS 会自动转换'],
        answer: 1,
        explanation: '联合类型只能调用共有成员。number 没有 toUpperCase，需先用 typeof x === "string" 收窄。'
      },
      {
        type: 'judge',
        question: '在 if (typeof x === "string") 的分支内，TS 会自动把 x 的类型收窄为 string。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。这就是类型守卫的效果，分支内可以安全调用 string 的方法。'
      },
      {
        type: 'multiple',
        question: '以下哪些可以作为 TypeScript 的类型守卫手段？（多选）',
        options: ['typeof', 'instanceof', 'in 操作符', 'delete 操作符'],
        answer: [0, 1, 2],
        explanation: 'typeof 判断原始类型、instanceof 判断实例、in 判断属性存在，都是类型守卫；delete 用于删除属性，不是类型守卫。'
      },
      {
        type: 'single',
        question: '自定义类型守卫函数的返回类型通常写成什么形式？',
        options: ['pet is Cat', 'boolean', 'pet as Cat', 'void'],
        answer: 0,
        explanation: '返回类型写成“参数 is 某类型”，TS 才会在判断为真时把参数收窄为该类型。'
      },
      {
        type: 'single',
        question: 'type C = A & B（A 有 name，B 有 age），const c: C = { name: \'小明\' } 是否有类型错误？',
        options: ['没有错误', '有错误，还缺少 B 的 age 属性', '有错误，交叉类型不能用于对象', '没有错误，age 自动可选'],
        answer: 1,
        explanation: '交叉类型要求同时满足 A 和 B 的结构，缺少 age 会在编译时报错。'
      },
      {
        type: 'judge',
        question: 'instanceof 可以判断某个值是否为特定类的实例，从而收窄类型。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。typeof 管原始类型，instanceof 管类的实例，都是常用类型守卫。'
      },
      {
        type: 'judge',
        question: '联合类型的变量在使用某个成员特有的方法前，必须先收窄类型。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。未收窄时只能访问所有成员共有的属性和方法。'
      },
      {
        type: 'multiple',
        question: '以下哪些值适合用 typeof 做类型守卫？（多选）',
        options: ['字符串', '数字', '布尔值', '某个类的实例'],
        answer: [0, 1, 2],
        explanation: 'typeof 用于判断 string、number、boolean 等原始类型；类的实例应使用 instanceof。'
      },
      {
        type: 'multiple',
        question: '可辨识联合（如 Cat | Dog）的写法特点包括？（多选）',
        options: ['每个类型有共同的字面量字段', '用 switch 或 if 判断该字段收窄', '收窄后可安全调用各自方法', '必须通过 class 继承实现'],
        answer: [0, 1, 2],
        explanation: '可辨识联合靠共同的字面量字段（如 kind）区分类型，判断后精确收窄；不要求使用 class。'
      },
      {
        type: 'single',
        question: '通过判断共同的字面量字段（如 pet.kind）来收窄联合类型的模式称为？',
        options: ['可辨识联合', '声明合并', '泛型约束', '类型断言'],
        answer: 0,
        explanation: '每个成员都有共同的字面量字段，用 if 或 switch 判断它即可精确收窄，这种模式叫可辨识联合。'
      },
      {
        type: 'single',
        question: 'function f(id: string | number) { if (typeof id === \'string\') { id.toFixed(2); } } 是否有类型错误？',
        options: ['没有错误', '有错误，分支内 id 是 string，toFixed 是 number 的方法', '有错误，if 里不能用 typeof', '没有错误，TS 会自动转换类型'],
        answer: 1,
        explanation: 'typeof id === \'string\' 的分支内 id 已收窄为 string，而 toFixed 是 number 的方法，调用会报类型错误。'
      },
      {
        type: 'judge',
        question: '交叉类型 A & B 的对象必须同时满足 A 和 B 的结构要求。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。& 表示“与”，结果类型同时拥有 A 和 B 的全部成员，缺一不可。'
      },
      {
        type: 'multiple',
        question: '以下哪些写法能让联合类型的变量安全调用各成员特有的方法？（多选）',
        options: ['用 typeof 收窄', '用 instanceof 收窄', '用返回“参数 is 某类型”的自定义守卫', '不做任何判断直接调用'],
        answer: [0, 1, 2],
        explanation: 'typeof、instanceof 和自定义类型守卫都能收窄类型；不收窄直接调用特有方法会报类型错误。'
      },
      {
        type: 'single',
        question: '联合类型在书写时使用哪个符号连接各个类型？',
        options: ['&', '|', '+', '&&'],
        answer: 1,
        explanation: '联合类型用竖线 | 表示“或”，如 string | number；& 是交叉类型的符号。'
      },
      {
        type: 'single',
        question: 'type Cat = { kind: \'cat\' }; type Dog = { kind: \'dog\' }; function f(p: Cat | Dog) { return p.kind; } 是否有类型错误？',
        options: ['有错误，联合类型不能访问属性', '没有错误，kind 是两者共有的属性', '有错误，必须先收窄类型', '没有错误，但返回值是 undefined'],
        answer: 1,
        explanation: '联合类型可以安全访问所有成员共有的属性，kind 在 Cat 和 Dog 中都存在，无需收窄。'
      },
      {
        type: 'judge',
        question: '用 in 操作符检查对象上是否存在某个属性，也可以起到收窄对象类型的作用。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。in 可以判断属性是否存在，TS 会据此在分支内收窄对象的类型。'
      },
      {
        type: 'judge',
        question: '自定义类型守卫函数只返回普通 boolean（不写 is 形式）时，TS 也会自动收窄参数类型。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。返回类型必须写成“参数 is 某类型”的形式，TS 才会信任并在判断为真时收窄。'
      },
      {
        type: 'multiple',
        question: '关于联合类型 string | number，说法正确的有？（多选）',
        options: ['变量可以存字符串或数字', '未收窄时只能访问共有成员', '用 typeof 可以收窄类型', '可以同时调用 string 和 number 的特有方法'],
        answer: [0, 1, 2],
        explanation: '联合类型可存任一成员类型，未收窄只能用共有成员，typeof 可收窄；直接调用某成员特有方法会报错。'
      },
      {
        type: 'multiple',
        question: '以下哪些方式可以判断或区分类的实例类型？（多选）',
        options: ['instanceof 判断是否为某类实例', '用 in 检查实例上的属性', 'typeof === \'object\' 精确区分不同的类', '通过共同的字面量字段判断'],
        answer: [0, 1, 3],
        explanation: 'instanceof、in、可辨识联合字段都能区分类型；typeof 对任何对象都只返回 object，无法精确区分类。'
      }
    ]
  },
  {
    id: 'ts-06',
    title: '枚举与常用工具类型',
    summary: '枚举与 Partial 等工具类型',
    minutes: 13,
    sections: [
      {
        heading: 'enum 枚举',
        text: '枚举用来表示一组固定的取值，比如方向、状态码。数字枚举默认从 0 开始自增；字符串枚举更推荐，因为调试时看到的是有意义的字符串而不是数字。\n使用枚举可以避免魔法值，让代码可读性更好，也防止传入非法值。',
        code: "enum Status {\n  Pending = 'pending',\n  Success = 'success',\n  Failed = 'failed'\n}\nconst s: Status = Status.Success;\nconsole.log(s); // 'success'",
        lang: 'js'
      },
      {
        heading: 'Partial、Readonly 与 Pick、Omit',
        text: 'TS 内置了一批工具类型，基于已有类型快速生成新类型：Partial<T> 让所有属性变可选（常用于更新接口的入参）；Readonly<T> 让所有属性只读；Pick<T, K> 只挑选指定属性；Omit<T, K> 排除指定属性。\n这些工具类型避免了重复定义相似的接口。',
        code: "interface User { id: number; name: string; age: number; }\ntype UpdateUser = Partial<User>; // 全部可选\ntype NameOnly = Pick<User, 'name'>; // 只有 name\ntype NoId = Omit<User, 'id'>; // 去掉 id",
        lang: 'js'
      },
      {
        heading: 'Record 记录类型',
        text: 'Record<K, T> 用来描述“键是 K、值是 T”的对象，常用于字典、映射表。\n比如 Record<string, number> 表示键为字符串、值为数字的对象。配合联合类型的键，还能限定对象只能有某几个固定键，比直接写索引签名更安全。',
        code: "type Scores = Record<string, number>;\nconst math: Scores = { 小明: 90, 小红: 95 };\ntype Roles = 'admin' | 'user';\ntype Perm = Record<Roles, boolean>;\nconst p: Perm = { admin: true, user: false };",
        lang: 'js'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: '想把一个接口的所有属性都变成可选，应该用哪个工具类型？',
        options: ['Readonly', 'Partial', 'Pick', 'Required'],
        answer: 1,
        explanation: 'Partial<T> 将 T 的所有属性变为可选，常用于“更新用户信息”这类只需传部分字段的场景。'
      },
      {
        type: 'single',
        question: 'const u: Readonly<{ a: number }> = { a: 1 }; u.a = 2; 这段代码是否有类型错误？',
        options: ['没有错误', '有错误，Readonly 属性不可重新赋值', '有错误，Readonly 不能用于对象', '没有错误，运行时才报错'],
        answer: 1,
        explanation: 'Readonly 让属性只读，给 u.a 赋值会在编译时报类型错误。'
      },
      {
        type: 'judge',
        question: '数字枚举如果没有显式赋值，第一个成员默认为 0，后续成员依次自增。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。enum E { A, B } 中 A 为 0，B 为 1，也可以手动指定起始值。'
      },
      {
        type: 'multiple',
        question: '关于工具类型，以下对应关系正确的有？（多选）',
        options: ['Pick 挑选部分属性', 'Omit 排除部分属性', 'Record 构造键值映射对象类型', 'Partial 让所有属性必填'],
        answer: [0, 1, 2],
        explanation: 'Pick 挑选、Omit 排除、Record 构造键值映射；Partial 是让属性变可选，变必填的是 Required。'
      },
      {
        type: 'single',
        question: '为什么开发中更推荐使用字符串枚举？',
        options: ['字符串枚举运行更快', '调试时能看到有意义的字符串而不是数字', '字符串枚举占用内存更小', '数字枚举已被废弃'],
        answer: 1,
        explanation: '字符串枚举在调试输出时是可读的取值（如 success），而数字枚举只是一串数字。'
      },
      {
        type: 'single',
        question: 'Record<string, number> 描述的是什么类型的对象？',
        options: ['键为数字、值为字符串', '键为字符串、值为数字', '键值都是字符串', '长度为 number 的数组'],
        answer: 1,
        explanation: 'Record<K, T> 表示键是 K、值是 T 的对象，常用于字典、映射表。'
      },
      {
        type: 'judge',
        question: 'Omit<User, \'id\'> 得到的新类型中不再包含 id 属性。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。Omit 的作用就是从类型中排除指定的属性。'
      },
      {
        type: 'judge',
        question: 'Pick<User, \'name\'> 得到的类型仍然包含 User 的所有属性。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。Pick 只挑选指定的属性，结果类型中仅有 name。'
      },
      {
        type: 'multiple',
        question: '使用枚举 enum 的好处包括？（多选）',
        options: ['避免魔法值', '提高代码可读性', '防止传入非法值', '提升程序运行性能'],
        answer: [0, 1, 2],
        explanation: '枚举让固定取值有名字、可读性更好、类型更安全；与运行性能无关。'
      },
      {
        type: 'multiple',
        question: '关于 Record 工具类型，说法正确的有？（多选）',
        options: ['Record<string, number> 的值必须是数字', '键可以用联合类型限定', 'Record<Roles, boolean> 要求每个 Roles 键都存在', '它等同于 any 类型'],
        answer: [0, 1, 2],
        explanation: 'Record 限定键和值的类型，用联合类型作键时每个键都必须出现；它与 any 完全不同。'
      },
      {
        type: 'single',
        question: 'enum Direction { Up, Down, Left, Right } 中 Direction.Left 的值是？',
        options: ['0', '1', '2', '3'],
        answer: 2,
        explanation: '数字枚举默认从 0 开始自增：Up 为 0、Down 为 1、Left 为 2、Right 为 3。'
      },
      {
        type: 'judge',
        question: 'Partial<User> 常用于“更新用户信息”这类只需传部分字段的接口入参。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。更新接口通常允许只传要改的字段，Partial 让所有属性可选，正好契合这一场景。'
      },
      {
        type: 'single',
        question: 'type Perm = Record<\'admin\' | \'user\', boolean> 的对象必须包含哪些键？',
        options: ['只有 admin', '只有 user', 'admin 和 user 都必须有', '键可以任意写'],
        answer: 2,
        explanation: '用联合类型作为 Record 的键时，每个键都必须出现在对象中，缺一不可。'
      },
      {
        type: 'single',
        question: 'enum Status { Pending = \'pending\' } 中，Status.Pending 的值是？',
        options: ['0', '\'pending\'', 'undefined', '\'Pending\''],
        answer: 1,
        explanation: '字符串枚举成员的值就是显式指定的字符串，即 pending。'
      },
      {
        type: 'single',
        question: 'const p: Partial<{ a: number }> = {} 这段代码是否有类型错误？',
        options: ['有错误，缺少属性 a', '没有错误，Partial 让属性全部可选', '有错误，Partial 不能用于对象字面量类型', '没有错误，但 p 是 any 类型'],
        answer: 1,
        explanation: 'Partial 把所有属性变为可选，因此空对象也满足类型要求，不会报错。'
      },
      {
        type: 'single',
        question: '想基于 User 生成一个“所有属性都必填”的新类型，应使用哪个工具类型？',
        options: ['Required<User>', 'Partial<User>', 'Readonly<User>', 'Omit<User>'],
        answer: 0,
        explanation: 'Required 与 Partial 相反，会把所有属性（包括可选属性）变为必填。'
      },
      {
        type: 'judge',
        question: 'Readonly<T> 会让 T 的所有属性都变为只读，不允许重新赋值。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。Readonly 给所有属性加上只读限制，修改时会在编译期报错。'
      },
      {
        type: 'judge',
        question: 'Record<string, number> 的对象中，值为字符串时也能通过编译。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。Record<string, number> 要求值必须是数字，赋字符串会报类型错误。'
      },
      {
        type: 'multiple',
        question: '以下哪些属于 TypeScript 的内置工具类型？（多选）',
        options: ['Partial', 'Pick', 'Omit', 'Enum'],
        answer: [0, 1, 2],
        explanation: 'Partial、Pick、Omit 都是内置工具类型；enum 是枚举关键字，不是工具类型。'
      },
      {
        type: 'multiple',
        question: '关于数字枚举 enum E { A = 1, B }，说法正确的有？（多选）',
        options: ['A 的值是 1', 'B 的值是 2', 'B 会在上一个成员值的基础上自增', 'B 的值是 0'],
        answer: [0, 1, 2],
        explanation: '手动指定 A 为 1 后，后续成员在此基础上自增，所以 B 为 2，不是 0。'
      }
    ]
  },
  {
    id: 'ts-07',
    title: '声明文件与 tsconfig 工程配置',
    summary: '了解 .d.ts 与编译配置',
    minutes: 12,
    sections: [
      {
        heading: '声明文件 .d.ts',
        text: '使用一个没有类型的 JS 库时，TS 不知道它有什么函数和参数，这时需要声明文件（扩展名 .d.ts）。它只描述类型，不包含实现代码。\nnpm 上很多库自带类型，没有的话通常可以安装 @types/库名 这个包。自己写声明用 declare 关键字。',
        code: "// lodash.d.ts 简例\ndeclare function chunk(arr: any[], size: number): any[][];\n// 使用：npm install --save-dev @types/lodash",
        lang: 'js'
      },
      {
        heading: 'tsconfig.json 核心选项',
        text: 'tsconfig.json 是 TS 项目的配置文件，用 tsc --init 生成。核心选项：target 指定编译出的 JS 版本（如 ES2018）；module 指定模块规范（如 ESNext）；strict 开启全部严格检查，强烈建议打开；outDir 指定输出目录。\ninclude 和 exclude 控制哪些文件参与编译。',
        code: '{\n  "compilerOptions": {\n    "target": "ES2018",\n    "module": "ESNext",\n    "strict": true,\n    "outDir": "dist"\n  },\n  "include": ["src"]\n}',
        lang: 'js'
      },
      {
        heading: 'strict 严格模式包含什么',
        text: 'strict: true 会一次性开启多项严格检查，最常遇到两个：noImplicitAny 禁止隐式的 any（参数没写类型又推断不出来就报错）；strictNullChecks 让 null 和 undefined 不能随意赋给其他类型，必须先判空。\n严格模式初期会多写一些类型，但能挡掉大量潜在 bug，面试中被问到要能说出这两条。',
        code: "let name: string | null = null;\n// strictNullChecks 下必须先判空\nif (name !== null) {\n  console.log(name.length);\n}",
        lang: 'js'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: '声明文件（.d.ts）的作用是？',
        options: ['存放编译后的 JS 代码', '只描述类型信息，不包含实现', '替代 tsconfig.json', '存放测试用例'],
        answer: 1,
        explanation: '.d.ts 只包含类型声明，让 TS 理解无类型 JS 库的接口，编译后不会产生额外运行代码。'
      },
      {
        type: 'single',
        question: 'tsconfig.json 中哪个选项用于开启全部严格类型检查？',
        options: ['target', 'strict', 'outDir', 'include'],
        answer: 1,
        explanation: 'strict: true 一次性开启 noImplicitAny、strictNullChecks 等所有严格检查项。'
      },
      {
        type: 'judge',
        question: '开启 strictNullChecks 后，null 可以直接赋值给 string 类型的变量。',
        options: ['正确', '错误'],
        answer: 1,
        explanation: '错误。开启后 null 只能赋给包含 null 的类型（如 string | null），使用前需判空。'
      },
      {
        type: 'multiple',
        question: '以下哪些是 tsconfig.json 中 compilerOptions 的常见选项？（多选）',
        options: ['target', 'module', 'outDir', 'dependencies'],
        answer: [0, 1, 2],
        explanation: 'target、module、outDir 都是编译选项；dependencies 属于 package.json，不属于 tsconfig。'
      },
      {
        type: 'single',
        question: '使用的 JS 库没有自带类型时，通常可以安装哪个包来获得类型？',
        options: ['@types/库名', '库名-types', 'ts-库名', 'types.js'],
        answer: 0,
        explanation: 'npm 上的类型包约定为 @types/库名，如 @types/lodash。'
      },
      {
        type: 'single',
        question: 'tsconfig.json 中 outDir 选项的作用是？',
        options: ['指定源码目录', '指定编译输出的目录', '指定依赖安装位置', '指定测试文件位置'],
        answer: 1,
        explanation: 'outDir 指定编译生成的 JS 文件输出到哪个目录，如 dist。'
      },
      {
        type: 'judge',
        question: '开启 noImplicitAny 后，参数没写类型又推断不出来时会报错。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。noImplicitAny 禁止隐式的 any，迫使开发者写清类型。'
      },
      {
        type: 'judge',
        question: '执行 tsc --init 可以生成一份默认的 tsconfig.json 配置文件。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。tsc --init 是初始化 TS 项目配置的常用命令。'
      },
      {
        type: 'multiple',
        question: 'strict 严格模式包含以下哪些检查？（多选）',
        options: ['noImplicitAny', 'strictNullChecks', 'target', 'module'],
        answer: [0, 1],
        explanation: 'strict 一次性开启 noImplicitAny、strictNullChecks 等检查；target 和 module 是独立的编译选项。'
      },
      {
        type: 'multiple',
        question: '关于 .d.ts 声明文件，说法正确的有？（多选）',
        options: ['自己写声明用 declare 关键字', '编译后不产生额外的运行代码', '可以为无类型的 JS 库提供类型', '必须包含函数的实现代码'],
        answer: [0, 1, 2],
        explanation: '.d.ts 只描述类型、不含实现，用 declare 声明，让 TS 理解无类型的 JS 库。'
      },
      {
        type: 'single',
        question: '开启 strictNullChecks 后，let name: string | null = null; console.log(name.length); 是否有类型错误？',
        options: ['没有错误', '有错误，name 可能为 null，必须先判空', '有错误，string 不能与 null 联合', '没有错误，运行时才报错'],
        answer: 1,
        explanation: 'name 的类型包含 null，直接访问 length 会在编译时报错，需先用 if (name !== null) 收窄。'
      },
      {
        type: 'judge',
        question: 'tsconfig.json 中的 include 用于指定哪些文件参与编译。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。include 指定参与编译的文件范围（如 ["src"]），exclude 则用于排除。'
      },
      {
        type: 'single',
        question: 'tsconfig.json 中 target 选项的作用是？',
        options: ['指定编译出的 JS 版本', '指定模块规范', '指定编译输出目录', '指定源码所在目录'],
        answer: 0,
        explanation: 'target 指定编译产物的 JS 版本，如 ES2018；模块规范由 module 指定，输出目录由 outDir 指定。'
      },
      {
        type: 'single',
        question: '自己编写 .d.ts 声明文件时，声明函数类型使用的关键字是？',
        options: ['declare', 'interface', 'export', 'type'],
        answer: 0,
        explanation: '声明文件中使用 declare 关键字描述类型，如 declare function chunk(...)。'
      },
      {
        type: 'single',
        question: 'tsconfig.json 中 module 选项设置为 ESNext 表示？',
        options: ['使用 ES 模块规范', '使用 CommonJS 模块规范', '编译到最新浏览器版本', '自动开启严格模式'],
        answer: 0,
        explanation: 'module 指定编译产物的模块规范，ESNext 表示使用最新的 ES 模块（import/export）。'
      },
      {
        type: 'single',
        question: '开启 strict 后，function f(a) { return a; }（参数 a 未标类型）通常会怎样？',
        options: ['正常编译通过', 'noImplicitAny 会报类型错误', 'target 选项会报错', 'a 被自动推断为 string'],
        answer: 1,
        explanation: 'strict 包含 noImplicitAny，参数没写类型又推断不出来时会被判定为隐式 any 而报错。'
      },
      {
        type: 'judge',
        question: '@types/lodash 这类类型包通常作为开发依赖（--save-dev）安装。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。类型只在开发编译阶段使用，运行时不需要，因此装为开发依赖。'
      },
      {
        type: 'judge',
        question: 'tsconfig.json 中的 exclude 选项用于排除不需要参与编译的文件。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。exclude 与 include 配合，控制哪些文件不参与编译，如排除 node_modules。'
      },
      {
        type: 'multiple',
        question: '开启 strictNullChecks 后，以下哪些赋值是合法的？（多选）',
        options: ['let a: string | null = null', 'let b: null = null', 'let c: string = null', 'let d: string | undefined = undefined'],
        answer: [0, 1, 3],
        explanation: 'null 只能赋给显式包含 null 的类型，undefined 同理；把 null 直接赋给 string 会报类型错误。'
      },
      {
        type: 'multiple',
        question: '关于 tsconfig.json，说法正确的有？（多选）',
        options: ['可用 tsc --init 生成', 'compilerOptions 中存放编译选项', 'include 控制参与编译的文件范围', '它与 package.json 是同一个文件'],
        answer: [0, 1, 2],
        explanation: 'tsconfig.json 是 TS 项目的配置文件，与 package.json 是两个不同的文件。'
      }
    ]
  },
  {
    id: 'ts-08',
    title: '在 Vue3 中使用 TypeScript',
    summary: '掌握 defineProps 泛型与 ref 标注',
    minutes: 14,
    sections: [
      {
        heading: 'script setup 加 lang="ts"',
        text: 'Vue3 单文件组件中，只要给 script 标签加上 setup 和 lang="ts"，就能直接在组件里写 TypeScript。组合式 API 与 TS 配合非常自然。\nVite 创建的 Vue 项目内置了 TS 支持，无需额外配置就能使用，类型错误会在开发时直接提示。',
        code: '<script setup lang="ts">\nlet count: number = 0;\n</script>\n<template>\n  <button @click="count++">{{ count }}</button>\n</template>',
        lang: 'js'
      },
      {
        heading: 'defineProps 泛型声明 props',
        text: '在 script setup 中，推荐用泛型方式声明 props：先定义接口描述 props 的形状，再传给 defineProps。可选属性加问号，默认值用 withDefaults 指定。\n这样父组件传错类型时立刻报错，组件内使用 props 也有完整提示。',
        code: "interface Props {\n  title: string;\n  count?: number;\n}\nconst props = withDefaults(defineProps<Props>(), {\n  count: 0\n});\nconsole.log(props.title); // 有类型提示",
        lang: 'js'
      },
      {
        heading: 'ref、computed 与事件的类型',
        text: 'ref 会根据初始值自动推断类型，如 ref(0) 是数字类型；初始值是 null 或需要明确类型时，用泛型标注：ref<string | null>(null)。\ncomputed 同样自动推断。defineEmits 也可以用泛型声明事件名和参数类型，防止父组件监听时传错参数。',
        code: "import { ref, computed } from 'vue';\nconst name = ref<string | null>(null);\nconst age = ref(18); // 推断为 number\nconst double = computed(() => age.value * 2);\nconst emit = defineEmits<{\n  change: [value: string];\n}>();",
        lang: 'js'
      }
    ],
    quiz: [
      {
        type: 'single',
        question: '在 Vue3 单文件组件中使用 TypeScript，script 标签应该怎么写？',
        options: ['<script type="ts">', '<script setup lang="ts">', '<script ts>', '<typescript setup>'],
        answer: 1,
        explanation: '正确写法是 <script setup lang="ts">，setup 表示组合式 API 语法糖，lang 指定语言。'
      },
      {
        type: 'single',
        question: 'const list = ref<string[]>([]) 中泛型的作用是？',
        options: ['让 list 变成普通数组', '明确 list 是字符串数组的 ref，避免推断为 never[]', '让 list 只读', '语法多余，没有任何作用'],
        answer: 1,
        explanation: '初始值为空数组时 TS 会推断为 never[]，用泛型 ref<string[]> 明确元素类型后才能正常 push 字符串。'
      },
      {
        type: 'judge',
        question: '使用 defineProps<Props>() 泛型声明后，父组件传入类型不匹配的 prop 会得到类型错误提示。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。泛型声明让 props 具有完整类型，配合 vue-tsc 或编辑器可在开发期发现类型不匹配。'
      },
      {
        type: 'multiple',
        question: '关于 Vue3 组合式 API 中的类型推断，以下说法正确的有？（多选）',
        options: ['ref(0) 自动推断为数字类型', 'computed 会根据回调返回值推断类型', 'ref(null) 需要用泛型标注才能赋其他类型的值', 'defineProps 只能用运行时对象写法'],
        answer: [0, 1, 2],
        explanation: 'ref 和 computed 都会自动推断；ref(null) 默认类型为 null，需泛型标注。defineProps 同时支持运行时写法和泛型写法。'
      },
      {
        type: 'single',
        question: 'withDefaults(defineProps<Props>(), { count: 0 }) 中 withDefaults 的作用是？',
        options: ['让 props 只读', '为可选 props 指定默认值', '把 props 转成 ref', '校验父组件必传参数'],
        answer: 1,
        explanation: 'withDefaults 用于给泛型声明的可选 props 设置默认值，如 count 默认为 0。'
      },
      {
        type: 'single',
        question: 'defineEmits<{ change: [value: string] }>() 泛型声明的作用是？',
        options: ['声明事件名和参数类型，防止传错', '让事件自动触发', '注册全局事件总线', '没有任何类型作用'],
        answer: 0,
        explanation: 'defineEmits 的泛型写法声明了事件名和参数类型，父组件监听传错参数时会报类型错误。'
      },
      {
        type: 'judge',
        question: 'const age = ref(18) 会被 TS 自动推断为 number 类型的 ref。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。ref 会根据初始值自动推断类型，无需手动标注。'
      },
      {
        type: 'judge',
        question: 'Vite 创建的 Vue 项目内置了 TypeScript 支持，无需额外配置即可使用。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。Vite 模板内置 TS 支持，类型错误会在开发时直接提示。'
      },
      {
        type: 'multiple',
        question: '关于 defineProps 的泛型写法，以下说法正确的有？（多选）',
        options: ['先定义接口描述 props 的形状', '可选属性在接口中加问号', '默认值用 withDefaults 指定', '只能在 class 组件中使用'],
        answer: [0, 1, 2],
        explanation: '泛型写法配合接口、可选属性和 withDefaults 使用；它是 script setup 的写法，与 class 组件无关。'
      },
      {
        type: 'multiple',
        question: '以下哪些在 Vue3 + TS 中可以获得自动类型推断？（多选）',
        options: ['ref 的初始值类型', 'computed 回调的返回值类型', 'defineProps 泛型后的 props 类型', '模板中普通 HTML 文本的内容'],
        answer: [0, 1, 2],
        explanation: 'ref、computed 会自动推断，defineProps 泛型提供完整 props 类型；HTML 文本与类型推断无关。'
      },
      {
        type: 'single',
        question: 'const name = ref(null); name.value = \'小明\'; 这段代码是否有类型错误？',
        options: ['没有错误', '有错误，应写成 ref<string | null>(null) 后再赋值', '有错误，ref 的初始值不能为 null', '没有错误，TS 会自动拓宽类型'],
        answer: 1,
        explanation: 'ref(null) 会被推断为只存 null 的类型，赋字符串会报错；需用泛型 ref<string | null>(null) 标注。'
      },
      {
        type: 'judge',
        question: 'defineEmits<{ change: [value: string] }>() 声明后，调用 emit(\'change\', 123) 会得到类型错误提示。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。泛型声明了 change 事件的参数必须是 string，传入数字 123 类型不匹配。'
      },
      {
        type: 'single',
        question: '组合式 API 中 const double = computed(() => age.value * 2) 的类型如何确定？',
        options: ['自动根据回调返回值推断', '必须手动用泛型标注', '固定为 number 之外的类型', '固定为 any'],
        answer: 0,
        explanation: 'computed 会根据回调的返回值自动推断类型，这里推断为 number 类型。'
      },
      {
        type: 'single',
        question: 'Props 接口中 count?: number 配合 withDefaults 指定默认值 0 后，组件内 props.count 的类型是？',
        options: ['number | undefined', 'number', 'any', 'null'],
        answer: 1,
        explanation: '有了默认值后 count 一定有值，类型收窄为 number，不再是 number | undefined。'
      },
      {
        type: 'single',
        question: '在 script setup 中要给一个初始为 null 的 ref 标注可存字符串，正确的写法是？',
        options: ['ref(null): string', 'ref<string | null>(null)', 'string ref(null)', 'ref(null, string)'],
        answer: 1,
        explanation: 'ref 用泛型参数标注类型：ref<string | null>(null)，之后才能赋字符串或 null。'
      },
      {
        type: 'single',
        question: '已声明 defineEmits<{ change: [value: string] }>()，调用 emit(\'change\', \'abc\') 是否有类型错误？',
        options: ['没有错误，参数类型匹配', '有错误，参数必须是数字', '有错误，事件名不存在', '有错误，emit 不能传参数'],
        answer: 0,
        explanation: 'change 事件要求参数为 string，传入字符串 abc 类型匹配，没有错误。'
      },
      {
        type: 'judge',
        question: '组合式 API 与 TypeScript 配合非常自然，是 Vue3 推荐的开发方式。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。script setup 组合式 API 天生适合类型推导，是 Vue3 + TS 的主流写法。'
      },
      {
        type: 'judge',
        question: '使用 defineProps 泛型写法时，可选的 prop 需要在接口中用问号标注。',
        options: ['正确', '错误'],
        answer: 0,
        explanation: '正确。接口中加问号的属性即为可选 prop，默认值可再用 withDefaults 指定。'
      },
      {
        type: 'multiple',
        question: '以下哪些是 Vue3 + TS 中常见的类型标注场景？（多选）',
        options: ['用泛型声明 props', '用泛型声明 emits', '用泛型标注 ref 的元素类型', '给模板中的 HTML 标签加类型'],
        answer: [0, 1, 2],
        explanation: 'props、emits、ref 都常用泛型标注类型；模板中的 HTML 标签不需要手动加类型。'
      },
      {
        type: 'multiple',
        question: '关于 withDefaults，说法正确的有？（多选）',
        options: ['用于给泛型声明的 props 设置默认值', '是 script setup 的编译器宏，无需导入即可使用', '默认值对应接口中的可选属性', '它的作用是让 props 变成只读'],
        answer: [0, 1, 2],
        explanation: 'withDefaults 给可选 props 设默认值，是编译器宏无需导入；props 只读是自身特性，与 withDefaults 无关。'
      }
    ]
  }
];
