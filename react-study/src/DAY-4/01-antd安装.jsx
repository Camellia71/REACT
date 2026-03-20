//组件库安装：npm install antd
//图标库安装：npm install @ant-design/icons
//按需加载：antd默认支持ES modules的tree shaking
//编辑器提示：antd 使用TypeScript进行书写并提供了完整的定义文件
import { Button, Space } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";
function App() {
  return (
    <div>
      hello App
      <Space>
        <Button type="primary" icon={<PlusCircleFilled />}></Button>
        <PlusCircleFilled />
      </Space>
    </div>
  );
}
export default App;
