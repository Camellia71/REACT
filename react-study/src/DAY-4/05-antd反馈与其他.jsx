import { Button, App } from "antd";
//使用antd中的App组件包裹
import { useContext, createContext } from "react";
const Context = new createContext();
function Title() {
  const value = useContext(Context);
  return value;
}
function AppComponent() {
  //   const [messageApi, contextHolder] = message.useMessage();
  //   const info = () => {
  //     messageApi.info("Hello, Ant Design!");
  //   };
  //使用App组件简化，直接把message解构出来
  const { message } = App.useApp();
  //下方方法不适用于context跨组件通信操作，所以还是使用上方代码
  const info = () => {
    message.info(<Title />);
  };
  return (
    <>
      {/* {contextHolder} */}
      <Button type="primary" onClick={info}>
        Display normal message
      </Button>
    </>
  );
}
function AppWrapper() {
  return (
    <Context.Privider value={123}>
      <App>
        <AppComponent />
      </App>
    </Context.Privider>
  );
}
export default AppWrapper;
