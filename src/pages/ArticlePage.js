// localhost:3000/articles/learn-node
import { useState, useEffect } from 'react';// hooks
import { useParams }              from 'react-router-dom'; // hook for catching article by ID
import { unstable_HistoryRouter } from 'react-router-dom';
import {articles, test} from './article-content';
import NotFoundPage from './NotFoundPage';

const ArticlePage = () => {
    const [aritcleInfo, setArticleInfo] = useState({ upvotes:0, comments: [] });
    // simulation how useEffect look like
    useEffect(()=> {
      setArticleInfo({ upvotes: 3, comments: [] });
    });
   
  //  const params = useParams(); // hook useParams
  //  const articleId = params.articleId; 
    const { articleId } =useParams();
    const article = articles.find((article)=> article.name === articleId);
    console.log("article:", article);
    if (!article) {
      return <NotFoundPage  />
    } 
    return (
        <>
                  <h3>title:{ article.title}</h3>
                  <p>This article has { aritcleInfo.upvotes } upvote(s)</p>
                  <br /><b>content:</b>{ article.content.map((paragraph,i)=>
                    <p key={i}>{paragraph}</p>
                  ) }
                  <br/>
        </>
        
    )
}
export default ArticlePage;
/**test of find article by Id
   const { articleId } = useParams();
    const array1 =[1,232,234,202,235,260]; 
    const found = array1.find((currentelement)=> currentelement>233);
    const tst0 = test.find((crn)=>crn.name==="name1");
    console.log("tst=", tst0);
 
 */