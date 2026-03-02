import { useSearchParams } from "react-router-dom";
const Article = () => {
  const [params] = useSearchParams();
  const id = params.get("id");
  return <div>我是文章页，ID为：{id}</div>;
};
export default Article;
