//国际化
import { ConfigProvider, Clander } from "antd";
import zhCN from "antd/locale/zh_CN";
//dayjs是一个专门负责日期格式化的库
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
dayjs.locale("zh-cn");
function App() {
  return (
    <div>
      hello,App
      <ConfigProvider locale={zhCN}>
        <Clander></Clander>
      </ConfigProvider>
    </div>
  );
}
export default App;
