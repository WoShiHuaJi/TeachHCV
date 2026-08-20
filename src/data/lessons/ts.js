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
      }
    ]
  }
];
