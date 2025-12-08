//项目的根组件：被引入index.js，在public/index.html中渲染

const articleType = 1; //0,1,3
function getArticleTem() {
  if (articleType === 0) {
    return <div>我是无图文章</div>;
  } else if (articleType === 1) {
    return <div>我是单图模式</div>;
  } else {
    return <div>我是三图模式</div>;
  }
}
function App() {
  return (
    <div className="App">
      {/*调用函数渲染不同的模板 */}
      {getArticleTem()}
    </div>
  );
}

export default App;
