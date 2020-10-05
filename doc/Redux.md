前端架构
代码结构
组件之间的通信
Redux是一种架构模式，是由flux发展而来的。
Redux 本身和React没有关系，只是数据处理中心，是React-Redux让他们联系在一起。
Redux主要由三部分组成：store，reducer，action。
React：负责组件的UI界面渲染；
Redux：数据处理中心；
React-Redux：连接组件和数据中心，也就是把React和Redux联系起来。

##  Flux

## Redux

### store
createStore(reducer， defaultState) 这个方法生成
getState()：存储的数据，状态树；
dispatch(action)：分发action，并返回一个action，这是唯一能改变store中数据的方式；
subscrible(listener)：注册一个监听者，store发生变化的时候被调用。

### reducer
一个纯函数，它根据previousState和action计算出新的state。

### action
action本质上是一个JavaScript对象，其中必须包含一个type字段来表示将要执行的动作，其他的字段都可以根据需求来自定义。
```
const ADD_TODO = 'ADD_TODO'
{
  type: ADD_TODO,
  text: 'Build my first Redux app'
}

```


. 安装
npm install --save redux

Redux 的设计思想很简单，就两句话。

（1）Web 应用是一个状态机，视图与状态是一一对应的。

（2）所有的状态，保存在一个对象里面。


Store
Store 就是保存数据的地方，你可以把它看成一个容器。整个应用只能有一个 Store。

Redux 提供createStore这个函数，用来生成 Store。


import { createStore } from 'redux';
const store = createStore(fn);
上面代码中，createStore函数接受另一个函数作为参数，返回新生成的 Store 对象。


##  React-Redux
Redux 的作者封装了一个 React 专用的库 React-Redux

6.1 安装

npm install --save react-redux

### connect
connect连接React组件和Redux store。connect实际上是一个高阶函数，返回一个新的已与 Redux store 连接的组件类。
```
const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
```

TodoList是 UI 组件，VisibleTodoList就是由 react-redux 通过connect方法自动生成的容器组件。

mapStateToProps：从Redux状态树中提取需要的部分作为props传递给当前的组件。
mapDispatchToProps：将需要绑定的响应事件（action）作为props传递到组件上。

### Provider
Provider实现store的全局访问，将store传给每个组件。

原理：使用React的context，context可以实现跨组件之间的传递。

https://juejin.im/post/6844903624565325832#heading-7