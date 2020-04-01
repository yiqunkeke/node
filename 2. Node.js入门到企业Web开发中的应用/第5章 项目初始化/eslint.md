> https://eslint.bootcss.com/docs/user-guide/configuring

# ESLint 背景

每个团队可能都有自己对于JavaScript 的代码规约：

- 每个语句后需不需要加分号；

- 能否在代码中写`console.log()`语句；

- for循环中条件中，每个条件之间需不需要空格；

- function该如何定义

- ...

  

想记住这些规约是比较困难的，并且想让开发人员都保证遵守这些规约也是比较困难的。怎么用一些显式的方法帮助我们做一些代码规则的校验呢？

ESLint 应运而生。

# ESLint 

ESLint 是一个开源的 JavaScript 代码检查工具，由 Nicholas C. Zakas 于2013年6月创建。代码检查是一种静态的分析，常用于寻找有问题的模式或者代码，并且不依赖于具体的编码风格。对大多数编程语言来说都会有代码检查，一般来说编译程序会内置检查工具。

JavaScript 是一个动态的弱类型语言，在开发中比较容易出错。因为没有编译程序，为了寻找 JavaScript 代码错误通常需要在执行过程中不断调试。像 ESLint 这样的可以让程序员在编码的过程中发现问题而不是在执行的过程中。

ESLint 的初衷是为了让程序员可以创建自己的检测规则。ESLint 的所有规则都被设计成可插入的。ESLint 的默认规则与其他的插件并没有什么区别，规则本身和测试可以依赖于同样的模式。为了便于人们使用，ESLint 内置了一些规则，当然，你可以在使用过程中自定义规则。

ESLint 使用 Node.js 编写，这样既可以有一个快速的运行环境的同时也便于安装。



# 配置

创建ESLint文件，支持以下 3 种格式：

`.eslintrc`

`.eslintrc.js`

`.eslintrc.json`

**或者使用 `eslint --init` 命令来生成相应的eslint文件**

```js
module.exports = {
    "extends": ["eslint: recommended"],  //使用推荐配置
    "rules": {
        "no-console": [ "error"] 
        // 不允许使用 console，通常分为3个级别： off 、warn、 error
        // 分别对应 关闭、警告、报错。也可以用 0 1 2 来表示
    },
    "parser": "babel-eslint",
    // 指定解析器，默认有自己的解析器，也可以指定某一个解析器
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "script"
    },
    // 解析器配置项
    "globals": {
        // "window": true
    },
    // 指定一些全局变量，默认是不允许使用全局变量的
    "env": {
        "browser": false, // 浏览器环境
        "node": true, // node环境
        "es6": true,
        "mocha": true
    }
    // 环境
}

```

- **Environments** - 指定脚本的运行环境。每种环境都有一组特定的预定义全局变量。

- **Globals** - 脚本在执行期间访问的额外的全局变量。

- **Rules** - 启用的规则及其各自的错误级别。

  

- # Specifying Parser Options

ESLint 允许你指定你想要支持的 JavaScript 语言选项。默认情况下，ESLint 支持 ECMAScript 5 语法。你可以覆盖该设置，以启用对 ECMAScript 其它版本和 JSX 的支持。

请注意，支持 JSX 语法并不等同于支持 React。React 对 ESLint 无法识别的JSX语法应用特定的语义。如果你正在使用 React 并且想要 React 语义支持，我们建议你使用 [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)。

同样的，支持 ES6 语法并不意味着同时支持新的 ES6 全局变量或类型（比如 `Set` 等新类型）。对于 ES6 语法，使用 `{ "parserOptions": { "ecmaVersion": 6 } }`；对于新的 ES6 全局变量，使用 `{ "env":{ "es6": true } }`. `{ "env": { "es6": true } }` 自动启用es6语法，但 `{ "parserOptions": { "ecmaVersion": 6 } }` 不自动启用es6全局变量。

解析器选项可以在 `.eslintrc.*` 文件使用 `parserOptions` 属性设置。可用的选项有：

- `ecmaVersion` - 默认设置为 3，5（默认）， 你可以使用 6、7、8、9 或 10 来指定你想要使用的 ECMAScript 版本。你也可以用使用年份命名的版本号指定为 2015（同 6），2016（同 7），或 2017（同 8）或 2018（同 9）或 2019 (same as 10)
- `sourceType` - 设置为 `"script"` (默认) 或 `"module"`（如果你的代码是 ECMAScript 模块)。
- `ecmaFeatures` - 这是个对象，表示你想使用的额外的语言特性:
  - `globalReturn` - 允许在全局作用域下使用 `return` 语句
  - `impliedStrict` - 启用全局 [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode) (如果 `ecmaVersion` 是 5 或更高)
  - `jsx` - 启用 [JSX](http://facebook.github.io/jsx/)
  - `experimentalObjectRestSpread` - 启用实验性的 [object rest/spread properties](https://github.com/sebmarkbage/ecmascript-rest-spread) 支持。(**重要：**这是一个实验性的功能,在未来可能会有明显改变。 建议你写的规则 **不要** 依赖该功能，除非当它发生改变时你愿意承担维护成本。)

```json
{
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules": {
        "semi": "error"
    }
}
```

# Specifying Parser

ESLint 默认使用[Espree](https://github.com/eslint/espree)作为其解析器，你可以在配置文件中指定一个不同的解析器，只要该解析器符合下列要求：

1. 它必须是一个 Node 模块，可以从它出现的配置文件中加载。通常，这意味着应该使用 npm 单独安装解析器包。
2. 它必须符合 [parser interface](https://eslint.bootcss.com/docs/developer-guide/working-with-plugins#working-with-custom-parsers)。

注意，即使满足这些兼容性要求，也不能保证一个外部解析器可以与 ESLint 正常配合工作，ESLint 也不会修复与其它解析器不兼容的相关 bug。

为了表明使用该 npm 模块作为你的解析器，你需要在你的 `.eslintrc` 文件里指定 `parser` 选项。例如，下面的配置指定了 Esprima 作为解析器：

```
{
    "parser": "esprima",
    "rules": {
        "semi": "error"
    }
}
```

以下解析器与 ESLint 兼容：

- [Esprima](https://www.npmjs.com/package/esprima)
- [Babel-ESLint](https://www.npmjs.com/package/babel-eslint) - 一个对[Babel](https://babeljs.io/)解析器的包装，使其能够与 ESLint 兼容。
- [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser) - 将 TypeScript 转换成与 estree 兼容的形式，以便在ESLint中使用。

注意，在使用自定义解析器时，为了让 ESLint 在处理非 ECMAScript 5 特性时正常工作，配置属性 `parserOptions` 仍然是必须的。解析器会被传入 `parserOptions`，但是不一定会使用它们来决定功能特性的开关。



# Specifying Environments

一个环境定义了一组预定义的全局变量。可用的环境包括：

- `browser` - 浏览器环境中的全局变量。
- `node` - Node.js 全局变量和 Node.js 作用域。
- `commonjs` - CommonJS 全局变量和 CommonJS 作用域 (用于 Browserify/WebPack 打包的只在浏览器中运行的代码)。
- `shared-node-browser` - Node.js 和 Browser 通用全局变量。
- `es6` - 启用除了 modules 以外的所有 ECMAScript 6 特性（该选项会自动设置 `ecmaVersion` 解析器选项为 6）。
- `worker` - Web Workers 全局变量。
- `amd` - 将 `require()` 和 `define()` 定义为像 [amd](https://github.com/amdjs/amdjs-api/wiki/AMD) 一样的全局变量。
- `mocha` - 添加所有的 Mocha 测试全局变量。
- `jasmine` - 添加所有的 Jasmine 版本 1.3 和 2.0 的测试全局变量。
- `jest` - Jest 全局变量。
- `phantomjs` - PhantomJS 全局变量。
- `protractor` - Protractor 全局变量。
- `qunit` - QUnit 全局变量。
- `jquery` - jQuery 全局变量。
- `prototypejs` - Prototype.js 全局变量。
- `shelljs` - ShellJS 全局变量。
- `meteor` - Meteor 全局变量。
- `mongo` - MongoDB 全局变量。
- `applescript` - AppleScript 全局变量。
- `nashorn` - Java 8 Nashorn 全局变量。
- `serviceworker` - Service Worker 全局变量。
- `atomtest` - Atom 测试全局变量。
- `embertest` - Ember 测试全局变量。
- `webextensions` - WebExtensions 全局变量。
- `greasemonkey` - GreaseMonkey 全局变量。

这些环境并不是互斥的，所以你可以同时定义多个。

要在配置文件里指定环境，使用 `env` 关键字指定你想启用的环境，并设置它们为 `true`。例如，以下示例启用了 browser 和 Node.js 的环境：

```
{
    "env": {
        "browser": true,
        "node": true
    }
}
```

或在 `package.json` 文件中：

```
{
    "name": "mypackage",
    "version": "0.0.1",
    "eslintConfig": {
        "env": {
            "browser": true,
            "node": true
        }
    }
}
```

# Specifying Globals

当访问当前源文件内未定义的变量时，[no-undef](https://eslint.bootcss.com/docs/rules/no-undef) 规则将发出警告。如果你想在一个源文件里使用全局变量，推荐你在 ESLint 中定义这些全局变量，这样 ESLint 就不会发出警告了。你可以使用注释或在配置文件中定义全局变量。

要在配置文件中配置全局变量，请将 `globals` 配置属性设置为一个对象，该对象包含以你希望使用的每个全局变量。对于每个全局变量键，将对应的值设置为 `"writable"` 以允许重写变量，或 `"readonly"` 不允许重写变量。例如：

```
{
    "globals": {
        "var1": "writable",
        "var2": "readonly"
    }
}
```

# Configuring Rules

ESLint 附带有大量的规则。你可以使用注释或配置文件修改你项目中要使用的规则。要改变一个规则设置，你必须将规则 ID 设置为下列值之一：

- `"off"` 或 `0` - 关闭规则
- `"warn"` 或 `1` - 开启规则，使用警告级别的错误：`warn` (不会导致程序退出)
- `"error"` 或 `2` - 开启规则，使用错误级别的错误：`error` (当被触发的时候，程序会退出)

https://eslint.bootcss.com/docs/rules/

# Rules

为了让你对规则有个更好的理解，ESLint 对其进行了分门别类。

所有的规则默认都是禁用的。在[配置文件](https://eslint.bootcss.com/docs/user-guide/configuring#extending-configuration-files)中，使用 `"extends": "eslint:recommended"` 来启用推荐的规则，报告一些常见的问题，在下文中这些推荐的规则都带有一个标记。

[命令行](https://eslint.bootcss.com/docs/user-guide/command-line-interface#fixing-problems)的 `--fix` 选项用来自动修复规则所报告的问题（目前，大部分是对空白的修复），在下文中会有一个的图标。

## Possible Errors

这些规则与 JavaScript 代码中可能的错误或逻辑错误有关：

|      |      | [for-direction](https://eslint.bootcss.com/docs/rules/for-direction) | 强制 “for” 循环中更新子句的计数器朝着正确的方向移动          |
| ---- | ---- | ------------------------------------------------------------ | ------------------------------------------------------------ |
|      |      | [getter-return](https://eslint.bootcss.com/docs/rules/getter-return) | 强制 getter 函数中出现 `return` 语句                         |
|      |      | [no-async-promise-executor](https://eslint.bootcss.com/docs/rules/no-async-promise-executor) | 禁止使用异步函数作为 Promise executor                        |
|      |      | [no-await-in-loop](https://eslint.bootcss.com/docs/rules/no-await-in-loop) | 禁止在循环中出现 `await`                                     |
|      |      | [no-compare-neg-zero](https://eslint.bootcss.com/docs/rules/no-compare-neg-zero) | 禁止与 -0 进行比较                                           |
|      |      | [no-cond-assign](https://eslint.bootcss.com/docs/rules/no-cond-assign) | 禁止条件表达式中出现赋值操作符                               |
|      |      | [no-console](https://eslint.bootcss.com/docs/rules/no-console) | 禁用 `console`                                               |
|      |      | [no-constant-condition](https://eslint.bootcss.com/docs/rules/no-constant-condition) | 禁止在条件中使用常量表达式                                   |
|      |      | [no-control-regex](https://eslint.bootcss.com/docs/rules/no-control-regex) | 禁止在正则表达式中使用控制字符                               |
|      |      | [no-debugger](https://eslint.bootcss.com/docs/rules/no-debugger) | 禁用 `debugger`                                              |
|      |      | [no-dupe-args](https://eslint.bootcss.com/docs/rules/no-dupe-args) | 禁止 `function` 定义中出现重名参数                           |
|      |      | [no-dupe-keys](https://eslint.bootcss.com/docs/rules/no-dupe-keys) | 禁止对象字面量中出现重复的 key                               |
|      |      | [no-duplicate-case](https://eslint.bootcss.com/docs/rules/no-duplicate-case) | 禁止出现重复的 case 标签                                     |
|      |      | [no-empty](https://eslint.bootcss.com/docs/rules/no-empty)   | 禁止出现空语句块                                             |
|      |      | [no-empty-character-class](https://eslint.bootcss.com/docs/rules/no-empty-character-class) | 禁止在正则表达式中使用空字符集                               |
|      |      | [no-ex-assign](https://eslint.bootcss.com/docs/rules/no-ex-assign) | 禁止对 `catch` 子句的参数重新赋值                            |
|      |      | [no-extra-boolean-cast](https://eslint.bootcss.com/docs/rules/no-extra-boolean-cast) | 禁止不必要的布尔转换                                         |
|      |      | [no-extra-parens](https://eslint.bootcss.com/docs/rules/no-extra-parens) | 禁止不必要的括号                                             |
|      |      | [no-extra-semi](https://eslint.bootcss.com/docs/rules/no-extra-semi) | 禁止不必要的分号                                             |
|      |      | [no-func-assign](https://eslint.bootcss.com/docs/rules/no-func-assign) | 禁止对 `function` 声明重新赋值                               |
|      |      | [no-inner-declarations](https://eslint.bootcss.com/docs/rules/no-inner-declarations) | 禁止在嵌套的块中出现变量声明或 `function` 声明               |
|      |      | [no-invalid-regexp](https://eslint.bootcss.com/docs/rules/no-invalid-regexp) | 禁止 `RegExp` 构造函数中存在无效的正则表达式字符串           |
|      |      | [no-irregular-whitespace](https://eslint.bootcss.com/docs/rules/no-irregular-whitespace) | 禁止不规则的空白                                             |
|      |      | [no-misleading-character-class](https://eslint.bootcss.com/docs/rules/no-misleading-character-class) | 不允许在字符类语法中出现由多个代码点组成的字符               |
|      |      | [no-obj-calls](https://eslint.bootcss.com/docs/rules/no-obj-calls) | 禁止把全局对象作为函数调用                                   |
|      |      | [no-prototype-builtins](https://eslint.bootcss.com/docs/rules/no-prototype-builtins) | 禁止直接调用 `Object.prototypes` 的内置属性                  |
|      |      | [no-regex-spaces](https://eslint.bootcss.com/docs/rules/no-regex-spaces) | 禁止正则表达式字面量中出现多个空格                           |
|      |      | [no-sparse-arrays](https://eslint.bootcss.com/docs/rules/no-sparse-arrays) | 禁用稀疏数组                                                 |
|      |      | [no-template-curly-in-string](https://eslint.bootcss.com/docs/rules/no-template-curly-in-string) | 禁止在常规字符串中出现模板字面量占位符语法                   |
|      |      | [no-unexpected-multiline](https://eslint.bootcss.com/docs/rules/no-unexpected-multiline) | 禁止出现令人困惑的多行表达式                                 |
|      |      | [no-unreachable](https://eslint.bootcss.com/docs/rules/no-unreachable) | 禁止在 `return`、`throw`、`continue` 和 `break` 语句之后出现不可达代码 |
|      |      | [no-unsafe-finally](https://eslint.bootcss.com/docs/rules/no-unsafe-finally) | 禁止在 `finally` 语句块中出现控制流语句                      |
|      |      | [no-unsafe-negation](https://eslint.bootcss.com/docs/rules/no-unsafe-negation) | 禁止对关系运算符的左操作数使用否定操作符                     |
|      |      | [require-atomic-updates](https://eslint.bootcss.com/docs/rules/require-atomic-updates) | 禁止由于 `await` 或 `yield`的使用而可能导致出现竞态条件的赋值 |
|      |      | [use-isnan](https://eslint.bootcss.com/docs/rules/use-isnan) | 要求使用 `isNaN()` 检查 `NaN`                                |
|      |      | [valid-typeof](https://eslint.bootcss.com/docs/rules/valid-typeof) | 强制 `typeof` 表达式与有效的字符串进行比较                   |

# Disabling Rules with Inline Comments

可以在你的文件中使用以下格式的块注释来临时禁止规则出现警告：

```js
/* eslint-disable */

alert('foo');

/* eslint-enable */
```

你也可以对指定的规则启用或禁用警告:

```
/* eslint-disable no-alert, no-console */

alert('foo');
console.log('bar');

/* eslint-enable no-alert, no-console */
```

如果在整个文件范围内禁止规则出现警告，将 `/* eslint-disable */` 块注释放在文件顶部：

```
/* eslint-disable */

alert('foo');
```

你也可以对整个文件启用或禁用警告:

```
/* eslint-disable no-alert */

// Disables no-alert for the rest of the file
alert('foo');
```

可以在你的文件中使用以下格式的行注释或块注释在某一特定的行上禁用所有规则：

```
alert('foo'); // eslint-disable-line

// eslint-disable-next-line
alert('foo');

/* eslint-disable-next-line */
alert('foo');

alert('foo'); /* eslint-disable-line */
```

在某一特定的行上禁用某个指定的规则：

```
alert('foo'); // eslint-disable-line no-alert

// eslint-disable-next-line no-alert
alert('foo');

alert('foo'); /* eslint-disable-line no-alert */

/* eslint-disable-next-line no-alert */
alert('foo');
```

在某个特定的行上禁用多个规则：

```
alert('foo'); // eslint-disable-line no-alert, quotes, semi

// eslint-disable-next-line no-alert, quotes, semi
alert('foo');

alert('foo'); /* eslint-disable-line no-alert, quotes, semi */

/* eslint-disable-next-line no-alert, quotes, semi */
alert('foo');
```

上面的所有方法同样适用于插件规则。例如，禁止 `eslint-plugin-example` 的 `rule-name` 规则，把插件名（`example`）和规则名（`rule-name`）结合为 `example/rule-name`：

```
foo(); // eslint-disable-line example/rule-name
foo(); /* eslint-disable-line example/rule-name */
```

**注意：**为文件的某部分禁用警告的注释，告诉 ESLint 不要对禁用的代码报告规则的冲突。ESLint 仍解析整个文件，然而，禁用的代码仍需要是有效的 JavaScript 语法。

# Configuration File Formats

ESLint 支持几种格式的配置文件：

- **JavaScript** - 使用 `.eslintrc.js` 然后输出一个配置对象。
- **YAML** - 使用 `.eslintrc.yaml` 或 `.eslintrc.yml` 去定义配置的结构。
- **JSON** - 使用 `.eslintrc.json` 去定义配置的结构，ESLint 的 JSON 文件允许 JavaScript 风格的注释。
- **(弃用)** - 使用 `.eslintrc`，可以使 JSON 也可以是 YAML。
- **package.json** - 在 `package.json` 里创建一个 `eslintConfig`属性，在那里定义你的配置。

如果同一个目录下有多个配置文件，ESLint 只会使用一个。优先级顺序如下：

1. `.eslintrc.js`
2. `.eslintrc.yaml`
3. `.eslintrc.yml`
4. `.eslintrc.json`
5. `.eslintrc`
6. `package.json`