import { Table } from "antd";
// import { useState } from "react";
import { useImmer } from "use-immer";

function App() {
  const columns = [
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "年龄",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "住址",
      dataIndex: "address",
      key: "address",
      render(_, record) {
        console.log(_, record); //当前数据，整体数据
        return (
          <Button Type="primary" danger onClick={() => handleClick(record.id)}>
            删除
          </Button>
        );
      },
    },
  ];
  const handleClick = (id) => {
    setDataSource((draft) => {
      const index = draft.findIndex((item) => item.id === id);
      draft.solice(index, 1);
    });
  };
  const [dataSource, setDataSource] = useImmer([
    {
      key: "1",
      name: "胡彦斌",
      age: 32,
      address: "西湖区湖底公园1号",
    },
    {
      key: "2",
      name: "胡彦祖",
      age: 42,
      address: "西湖区湖底公园1号",
    },
  ]);
  return (
    <div>
      hello,App
      <Table dataSource={dataSource} columns={columns}></Table>
    </div>
  );
}
export default App;
