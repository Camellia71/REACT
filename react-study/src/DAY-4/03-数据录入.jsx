import { Switch, Rate } from "antd";
import { useState } from "react";

function App() {
  const [checked, setChecked] = useState(true);
  const [value, setValue] = useState;
  return (
    <div>
      hello App
      <br />
      <Switch checked={checked} onChange={setChecked} />
      {checked ? "启动" : "关闭"}
      <Rate value={value} onChange={setValue} />
    </div>
  );
}
export default App;
