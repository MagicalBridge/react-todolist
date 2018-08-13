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
  
  
     

    
    






