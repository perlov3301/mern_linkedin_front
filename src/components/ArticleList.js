import { Link } from "react-router-dom";
//import { articles } from "../pages/article-content";

const ArticleList = ({ articles }) => {
    return (
       <>
         {articles.map((item)=>
           <Link key={item.name} to={`/articles/${item.name}`}>
              <div className="article-list-item" >
                <h3>{item.title}</h3>
                <p>{item.content[0].substring(0,152)}... </p>
              </div>
           </Link>
         )}
       </>
    );
};

export default ArticleList;