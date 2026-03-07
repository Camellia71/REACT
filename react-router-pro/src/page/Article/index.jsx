import { useSearchParams, useParams } from "react-router-dom";
const Article = () => {
  //1.searchParams传参
  //   const [params] = useSearchParams();
  //   const id = params.get("id");
  //   return <div>我是文章页，ID为：{id}</div>;

  //2.params传参
  const params = useParams();
  const id = params.id;
  return <div>我是文章页，ID为：{id}</div>;
};
export default Article;
