# react-todolist
this is react  prohect

#### 1.Syntax error: Adjacent JSX elements must be wrapped in an enclosing tag。
  1. 翻译出来就是 jsx雨语法中只能有一个最外层的包裹的元素。也就是这只能有一个根元素。
  2. react 16版本里面有一个 Fragment的占位符号 他的作用时替代最外层的标签。

#### 2.react中的响应式设计思想和事件绑定。
  1. 响应式的框架 强调的是不要操作dom 
  2. 只要关注数据层面的内容。
#### 3. 如何在react中定义数据
  1. react中每一个组件都是一个类，每一个类中按照es6的这种语法
     在生成类的时候都会 有一个属性叫做constructor

  2. react中使用的数据存放的地方是 this.state 里面。

  3. react 里面的事件 如果想要使用 需要使用驼峰的命名规则  onChange onClick 

  4. this.setState 是 react 提供的 设置属性的值。


#### 4. TodoList新增删除的功能。

  1. react中不允许 直接修改 state 里面的数据。

  2. react中有一个概念是 immutable state不允许我们做做任何的改变。 


#### 5. 为什么要使用redux

  1. react 是一个视图层的框架，或者说 React 只是 DOM 的一个抽象层，
     并不是 Web 应用的完整解决方案。
     
     代码结构方面不具备
     组件间的通信无法进行

     因此就需要redux 进行数据数据管理方面的应用
  
  2. 或者我们换一个说法。当我们使用react的时候 
     子组件怎么改变父组件的状态呢？
     没有redux之前我们是通过 父组件派发给子组件一个事件
     子组件通过这个事件修改父组件的数据 这样层层传递 
  
  3. 数据层的框架 
    redux 要求我们将所有的数据都放在公共的存储区域 这个存储的区域叫做 store  组件之中尽量少存放数据
    这个存储的空间是公用的。

    当我们的一个组件的想要传递数据给其他的组件时候，我们修改的是store的数据 其他组件感受到sotre的变化
    之后会自动的取数据进而更新状态。

    1.公共区域
    2.改变公共数据
    3.其他组件过来取数据

    这样无论组件的嵌套到底有多深，最终都能够有一个统一的流程进行数据更新。

  4. Redux = reducer + Flux
     2013年的时候 官方推出 flux 但是这个框架 不太好用 他的公用数据存储区域 很多 会有数据依赖的问题
     升级之后就是 redux  还引入了reducer的概念。

  5. redux 的工作流程。

     我们看一下这张图 介绍了redux的工作流。这里的蓝色的部分就是我们的组件 这里的橘黄色的部分就是我们的store 我们刚才已经说到了
     实际上redux 需要解决的问题就是改变store数据 从store里面取数据这两个本质的过程。


     ActionCreators 和 Reducers 

     ReactComponents ---->  借书的用户。
     ActionCreators  ---->  借书这个行为的表达。
     store           ---->  图书管理员
     Reducers        ---->  图书管理员是没有办法 记住每一本的书的借还情况的，因此需
                            要进行记录  记录本

     
     假设我们想要借一本书 首先借书的这个人必须首先要存在，他要说一句话 说我要借一本书
     那么这句话被谁听见了，被图书管的管理员听见了。他要去找书，但是自己记不住
     这个时候去查阅 reducer  找到之后 就会把这本书给到借书人。
  
  6. 组件需要从store中获取数据  这句话：我要获取数据 这句话就是 actioncreator


  7. store 是最重要的一个环节 因为redux的核心思想是数据的统一的管理对吧

     安装 redux  S会用 yarn  或者  npm 安装。

     1. 创建一个 store 
     2. 创建 reducer   要求返回一个函数 接收两个参数 一个是state  一个是 action
        state 可以看做是整个图书馆的所有图书.
        初始化的时候 数据为空
     3. 在store 里面引入reducer 这样的初始化说明一个问题就是
        store 知道现在里面的数据有多少。 初始化的时候我将这个todoList的
        数据放在 reducer 里面意思是做一个初始化的图书登记 你的图书目录初始化。

     4. 已经实现的功能是组件的数据从 reducer 里面获取。

     5. 走改变store的方式。在事件中使用store 派发action 
        然后派发出来的 action 不是自己处理 他需要给 reducer 去处理
        当前的数据 和 想要做的事情一起传递给 reducer 

     6. reducer 可以接收state 但是不能修改 state
  8. 将action的名称提取出来：
     1. 为什么需要提取出来，其实很简单，当我们在代码中 直接写字符串的时候
        由于没有直接的引用关系 所以可能会报错。
     2. 我们需要将 actionType进行拆分。
  
  9. 使用actionCreator 统一的创建 action;
    我们在组件中直接传入action这样做不太好 
    我们一般选择创建一个actionCreator统一的管理action；
    这样做的好处是在组件中是不需要引入actionTypes了
    
    1.创建actionCreator

  10. 复习一下rexux
    1. store 是唯一的存储空间 —— 整个redux的核心的思想就是将数据统一的管理这个没毛病
    2. 只有store 能够修改自己的数据：reduce 是一个处理的过程 最终返回的是一个新的数据
       最后state拿到这个数据之后，进行的更新的操作 
    3. reducer 必须是纯函数。
      纯函数： 给定固定的输入就会有固定的输出 并且不会有任何的副作用。

    核心的api
    1.createStore 创建 store
    2.store.dispatch
    3.store.getState
    4.store.subscribe


#### UI组件和容器组件
   1. UI组件负责页面的渲染 容器组件负责页面的逻辑
   2. 我们将页面的展示和页面逻辑的处理拆分到不同的
      业务逻辑中，这样就可以抽象出来傻瓜组件和容器组件。

#### 无状态组件。
   1. 当我们的UI组件中只有一个render函数的时候，我们可以将这个组件完全的抽象出来 把他封装成一个函数。

#### redux中发送异步请求获取数据
   1. 这个功能算是颠覆性的。对于react而言 数据存储有一个专门的流程 也就是redux
      我们借助redux的整个流程进行数据获取 修改state。

   2. 安装axios的依赖
   3. 在生命周期钩子中使用axios请求发送结果获取数据
   4. 请求回来的数据想要更改store里面的数据需要借助action进行
   5. 首先在ctionCreator 里面创建相关的 action 在 组件中 使用 函数 返回一个action
   6. 使用store.dispatch 接收这个action 然后 将这个action发送给 reducer 
   7. reducer 拿到action和原来的state 进过处理返回新的state
   8. 组件订阅了状态的更新事件 这样整个的组件重新渲染了。

#### redux-thunk中间件

   1. redux-thunk这种中间件可以将我们的这种复杂的异步的请求放在 action中做处理。
   2. 使用npm 或者yarn 安装redux-thunk 
     yarn add 
     npm install redux-thunk
   3. 因为是rerdux的中间件 因此在使用的时候 需要使用redux的midware这样的对象进行学习创作。applyMiddleware 这种中间件的使用。
   4. 通过在store 的 index 相关的文件引入 配置thunk 然后使用
   5. 将异步的请求放在action中使用。
   6. 我们的actionCreator都是一个函数这里面的每一个函数都是返回一个对象的。
      使用thunk之后我们这个我们的异步请求就是可以返回一个函数了。返回函数的好处
      现在还不得而知，因此但是之后会知道的。
#### redux中间件

   1. action 通过dispatch 方法传递给strore 那么action和store 中间就是dispatch这个方法。
      我们说的中间件就是对dispatch 方法的封装。
   2. 最原始的dispatch 接收一个action是一个对象传递给store这是没有中间件的情况
   3. 当我们对于这个中间件做了升级之后比方说我们使用了redux-thunk之后 如果我们传给这个dispatch是一个函数的
      时候 那么就会自动的执行这个action 因为已经是一个函数了。
      redux-log


####  开始简书项目的开发，学习相关的内容。
   1. 初始化项目 只保留三个文件。
   2. 为了做到样式的管理，在组件中引入一个第三方的模块
     来管理我们的css styled-components 
   3. yarn add styled-components


#### styled-components 
   1. 使用react的组件我们希望的是引用的样式都是按照组件级别来
      区分的。
   2. injectGlobal 这个api引用的时候 说明使用要的是注入全局的样式。
   3. 不同的浏览器内核对于原生的标签的表现形式是不一样的，因此会出现这样的问题。
   4. common文件夹里面存放公共的区块去管理复用的组件。


#### 对header组件进行 combineReducer 的拆分。

   1. 将组件内部的所有的 action 放在 actionCreator 中进行创建。

      import * as actionTypes from './actionType.js';
      export const searchFocus = () => ({
        type: actionTypes.SEARCH_FOCUS
      })

      export const searchBlur = () => ({
        type: actionTypes.SEARCH_BLUR
      })

    之前使用的是 引入单个常量的方式进行书写。现在
    不这样进行, 采用 * 的 别名形式进行引入。

    2. 看看 actionType.js 里面出现的代码：

      export const SEARCH_FOCUS = 'header/SEARCH_FOCUS';
      export const SEARCH_BLUR = 'header/SEARCH_BLUR';
    
    3. headerReduce.js 存放的是只有 这个header 组件才用到的数据

    import * as actionTypes from './actionType.js';

    const defaultState = {
      focused: false
    };

    export default (state = defaultState, action) => {
      if (action.type === actionTypes.SEARCH_FOCUS) {
        return {
          focused: true
        }
      }

      if (action.type === actionTypes.SEARCH_BLUR) {
        return {
          focused: false
        }
      }
      return state;
    }

    和actionCreator中同样都用到了actionTypes 也是引用这种  * 的形式


    4. 在最外层的 reducer里面也是使用 combineReducer 

      import { combineReducers } from 'redux';
      import { headerReducer } from '../common/header/store/index.js';
      export default combineReducers({
        header: headerReducer
      })

     
#### immutable js 进行数据的

  1. 首先安装 immutable js 
  2. 之前我们在 reducer.js 里面 创建的对象中, 之前的普通的 state 对象 变成 fromJS的包裹的
  对象，包裹完成之后。在组件中使用的时候 不能使用 . 操作符 而是使用 get 

  3. 同样的在 reducer.js 里面修改数据的时候 使用的是 state.set('xxx',xxx)形式。


#### 使用 redux-immutable 进行数据的进一步管理
  1. 安装 redux-immutable   之前在 外层的仓库中使用的
  store 中的  combineReducer 是从redux 中引入的

  2. 现在换成 redux-immutable 中获取。这样reducer就被包装成了
  一个immutable 对象 在获取数据的时候 使用 state.get().get() 这样的形式
  
  
## 组件划分原则——为什么要进行组件的划分

1、 解耦：组件的划分实际上是一种解耦的行为：降低单一模块/组件的复杂度
2、 复用: 保证组件的一致性、提升开发效率。
3、 颗粒度：组件划分一定要掌握合适的组件颗粒度，不要过大或者过小


## 编写静态组件
1、开发过程解耦：静态页面和动态交互
2、组件开发顺序：自上而下、或者自下而上
3、App --> TodoList --> todo --> addtodo --> footer

## 什么是state

state 代表的是 UI的 完整且最小状态集合

这里面说了两个事情 这个state 是和UI 渲染直接相关的 一个定时器
就不能算是一个state 最下 指的是数据不能冗余。

具体判断：
  1、是否通过父组件的props传入？
  2、是否会随着时间或者交互操作而变化？
  3、是否可以通过其他的state或者props 计算得到
根据上述的原则：我们看看我们的这个state的state
  代办的事件列表
  新增的输入框的文本
  当前的筛选条件

## state的双层含义
  代表应用UI的所有的状态集合
  状态集合中的每一个部分 

  state保存位置：

  确定 依赖 state的每一个组件

  如果某一个state 被多个组件依赖 寻找 共同的父组件 （状态上移）

  

  













