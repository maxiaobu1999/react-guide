react-router
路由库
它通过管理 URL，实现组件的切换和状态的变化，

[官网教程地址](https://reactrouter.com/web/guides/quick-start)

yarn add react-router-dom

React Router中有三种主要的组件类别：
routers, like <BrowserRouter> and <HashRouter>
route matchers匹配器, like <Route> and <Switch>
and navigation导航（路线变换器）, like <Link>, <NavLink>, and <Redirect>


web开发用react-router-dom

Router组件本身只是一个容器，真正的路由要通过Route组件定义。
Route组件定义了URL路径与组件的对应关系
http://www.ruanyifeng.com/blog/2016/05/react_router.html
 <Route path="/about">
                        <About />
                    </Route>
上面代码中，用户访问根路由/（比如http://www.example.com/），组件APP就会加载到document.getElementById('app')。