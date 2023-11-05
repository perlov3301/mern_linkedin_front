// localhost:3000/articles/learn-node
import { useParams } from 'react-router-dom'; // hook for catching article by ID
import {articles, test} from './article-content';
import NotFoundPage from './NotFoundPage';

const ArticlePage = () => {
   
    const params = useParams();
    const articleId = params.articleId; 
    // const { articleId } = useParams();
    const array1 =[1,232,234,202,235,260]; 
    const found = array1.find((currentelement)=> currentelement>233);
    const tst0 = test.find((crn)=>crn.name==="name1");
    //console.log("tst=", tst0);
    const article = articles.find((article)=> article.name === articleId);
    console.log("article:", article);
    if (article == undefined) {
      return <NotFoundPage  />
    } 
    return (
        <>
                  <h3>title:{ article.title}</h3>
                  content:{ article.content.map((item,i)=>
                    <p key={i}>{item}</p>
                  ) }
                  <br/>
        </>
        
    )
}
export default ArticlePage;