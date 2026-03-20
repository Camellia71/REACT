//清除默认布局
import "antd/dist/reset.css";

import { Row, Col, Layout } from "antd";
const { Header, Footer, Sider, Content } = Layout;
const col = {
  background: "red",
};
function App() {
  return (
    <div>
      hello App
      <Row gutter={[10, 12]}>
        <Col span={8}>
          <div style={col}>aaaaaa</div>
        </Col>
        <Col span={8}>
          <div style={col}>bbbbbb</div>
        </Col>
        <Col span={8}>
          <div style={col}>cccccc</div>
        </Col>
      </Row>
    </div>
  );
}
export default App;
