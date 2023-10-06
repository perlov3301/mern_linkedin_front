import ArticleList from "../components/ArticleList";
import { articles } from "./article-content";

const ArticleListPage = () => {
    return (
        <>
          <h1>Articles051023</h1>
          <ArticleList articles={articles} />
        </>
    )
}
export default ArticleListPage;