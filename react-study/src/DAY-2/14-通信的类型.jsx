import PropTypes from "prop-types";

//添加类型限定，使用组件的propTypes属性，需要配合props-types模块进行使用
function Welcome({ count }, { msg }) {
  return (
    <div>
      hello Welcome
      {count},{msg}
    </div>
  );
}
Welcome.propTypes = {
  //单类型
  // count: PropTypes.number,
  //多类型
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  //指定具体值
  type: PropTypes.oneOf(["primary", "error", "success"]),
  //指定是jsx
  icon: PropTypes.element,
};

function App() {
  return (
    <div>
      hello App
      <Welcome
        count={1}
        msg="hello"
        type="primary"
        icon={<div className="icon-close">❌</div>}
      />
    </div>
  );
}
export default App;
