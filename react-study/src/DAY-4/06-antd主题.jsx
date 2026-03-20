//主题
import { Button, Checkbox, Space, ConfigProvider } from "antd";
import { useState } from "react";
function App() {
  const [Theme, setTheme] = useState({});
  const handleClick1 = () => {
    setTheme({
      token: {
        colorPrimary: "#00ff00",
      },
    });
  };
  const handleClick2 = () => {
    setTheme({
      token: {
        colorPrimary: "#ff0000",
      },
    });
  };
  return (
    <div>
      hello,App
      <Button onClick={handleClick1}>浅绿主题</Button>
      <Button onClick={handleClick2}>红色主题</Button>
      <br />
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#00ff00",
          },
        }}
      >
        <Space>
          <Button type="primary">按钮</Button>
          <Checkbox checked>全选</Checkbox>
        </Space>
      </ConfigProvider>
      {/* <br />
      <ConfigProvider
        theme={{
          token: {
            Button: {
              colorPrimary: "#00ff00",
            },
          },
        }}
      >
        <Space>
          <Button type="primary">按钮</Button>
          <Checkbox checked>全选</Checkbox>
        </Space>
      </ConfigProvider> */}
    </div>
  );
}
export default App;
