# 规范

## javascript 规范
### 主要原则
* 使用最新es6语法

### 具体细则
#### 块级作用域
1. let 取代
2. 全局常量和线程安全

#### 字符串
静态字符串一律使用单引号或反引号，不使用双引号。动态字符串使用反引号。

``` javascript
// bad
const a = "foobar";
const b = 'foo' + a + 'bar';

// acceptable
const c = `foobar`;

// good
const a = 'foobar';
const b = `foo${a}bar`;
const c = 'foobar';
```

#### 解构赋值
使用数组成员对变量赋值时，优先使用解构赋值。
```javascript
const arr = [1, 2, 3, 4];

// bad
const first = arr[0];
const second = arr[1];

// good
const [first, second] = arr;
```

函数的参数如果是对象的成员，优先使用解构赋值。
```javascript
// bad
function getFullName(user) {
  const firstName = user.firstName;
  const lastName = user.lastName;
}

// good
function getFullName(obj) {
  const { firstName, lastName } = obj;
}

// best
function getFullName({ firstName, lastName }) {
}
```

如果函数返回多个值，优先使用对象的解构赋值，而不是数组的解构赋值。这样便于以后添加返回值，以及更改返回值的顺序。

```javascript
// bad
function processInput(input) {
  return [left, right, top, bottom];
}

// good
function processInput(input) {
  return { left, right, top, bottom };
}

const { left, right } = processInput(input);
```

#### 对象
单行定义的对象，最后一个成员不以逗号结尾。多行定义的对象，最后一个成员以逗号结尾。
```javascript
// bad
const a = { k1: v1, k2: v2, };
const b = {
  k1: v1,
  k2: v2
};

// good
const a = { k1: v1, k2: v2 };
const b = {
  k1: v1,
  k2: v2,
};
```

对象尽量静态化，一旦定义，就不得随意添加新的属性。如果添加属性不可避免，要使用Object.assign方法。

```javascript
// bad
const a = {};
a.x = 3;

// if reshape unavoidable
const a = {};
Object.assign(a, { x: 3 });

// good
const a = { x: null };
a.x = 3;
```
对象的属性和方法，尽量采用简洁表达法，这样易于描述和书写。
```javascript
var ref = 'some value';

// bad
const atom = {
  ref: ref,

  value: 1,

  addValue: function (value) {
    return atom.value + value;
  },
};

// good
const atom = {
  ref,

  value: 1,

  addValue(value) {
    return atom.value + value;
  },
};
```

#### 数组
使用扩展运算符（...）拷贝数组。
```javascript
// bad
const len = items.length;
const itemsCopy = [];
let i;

for (i = 0; i < len; i++) {
  itemsCopy[i] = items[i];
}

// good
const itemsCopy = [...items];
```
使用Array.from方法，将类似数组的对象转为数组。
```javascript
const foo = document.querySelectorAll('.foo');
const nodes = Array.from(foo);
```
#### 函数
立即执行函数可以写成箭头函数的形式。
```javascript
(() => {
  console.log('Welcome to the Internet.');
})();
```
那些需要使用函数表达式的场合，尽量用箭头函数代替。因为这样更简洁，而且绑定了this。
```javascript
// bad
[1, 2, 3].map(function (x) {
  return x * x;
});

// good
[1, 2, 3].map((x) => {
  return x * x;
});

// best
[1, 2, 3].map(x => x * x);
```
#### class
用Class，取代需要prototype的操作。因为Class的写法更简洁，更易于理解。
```javascript
// bad
function Queue(contents = []) {
  this._queue = [...contents];
}
Queue.prototype.pop = function() {
  const value = this._queue[0];
  this._queue.splice(0, 1);
  return value;
}

// good
class Queue {
  constructor(contents = []) {
    this._queue = [...contents];
  }
  pop() {
    const value = this._queue[0];
    this._queue.splice(0, 1);
    return value;
  }
}
```

使用extends实现继承，因为这样更简单，不会有破坏instanceof运算的危险。
```javascript
// bad
const inherits = require('inherits');
function PeekableQueue(contents) {
  Queue.apply(this, contents);
}
inherits(PeekableQueue, Queue);
PeekableQueue.prototype.peek = function() {
  return this._queue[0];
}

// good
class PeekableQueue extends Queue {
  peek() {
    return this._queue[0];
  }
}
```

#### 模块
首先，Module语法是JavaScript模块的标准写法，坚持使用这种写法。使用import取代require。
```javascript
// bad
const moduleA = require('moduleA');
const func1 = moduleA.func1;
const func2 = moduleA.func2;

// good
import { func1, func2 } from 'moduleA';
```

使用export取代module.exports。
```javascript
// commonJS的写法
var React = require('react');

var Breadcrumbs = React.createClass({
  render() {
    return <nav />;
  }
});

module.exports = Breadcrumbs;

// ES6的写法
import React from 'react';

const Breadcrumbs = React.createClass({
  render() {
    return <nav />;
  }
});

export default Breadcrumbs
```


## css 规范

## 组件规范

### 主要原则

* 使用最新es6语法
* 通过项目的eslint

### 具体细则

* 用const或者let代替var
* 依赖包括工具函数分离成单独的js文件import

### 组件命名

尽量简单、标准。如果与原生标签一样，在前面加上h，如h-input,h-textarea,h-img
export 出来的对象命名为驼峰式，如Radio,hInput,hTextarea
假设存子组件，子组件命名在父组件后面加上-item, 如flexbox及flexbox-item, tab及tab-item

### 组件目录

每个组件为单独的目录，位于src/components/下，目录名全小写，入口文件为index.vue
若项目包含子组件，入口文件同样为index.vue，同时目录下包含与组件名同名的文件，如tab.vue、tab-item.vue

### 组件属性
必须规定type或者validator进行类型验证

### 事件

#### 命名

统一以on前缀，如on-change。这样规范的原因：
* 避免与原生事件(如 change) 同名冲突重复收到DOM事件且参数错误
* 容易读写，与其他类型属性区分