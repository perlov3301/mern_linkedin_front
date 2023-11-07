// localhost:3000/articles/learn-node
import { useState, useEffect } from 'react';// hooks
import { useParams }              from 'react-router-dom'; // hook for catching article by ID
import axios from 'axios';
import {articles, test} from './article-content';
import NotFoundPage from './NotFoundPage';

const ArticlePage = () => {
    const [articleInfo, setArticleInfo] = useState({ upvotes:0, comments: [] });
    // simulation how useEffect look like
    let a1;
    //  const params = useParams(); // hook useParams
  //  const articleId = params.articleId; 
  const { articleId } =useParams();    
    useEffect(()=> {  // rerendering when value in the array changes
      a1= Math.ceil(Math.random()*10);
      const response = 
        axios.get(`http://localhost:8000/api/articles/${articleId}`);
      //response has property 'data'
      console.log("articlePage;axios;response: "+response);
      const newArticleInfo =response.data;
      setArticleInfo(newArticleInfo);
    }, []); // empty array is variable to look for 
   
    const article = articles.find((article)=> article.name === articleId);
    console.log("article:", article);
    if (!article) {
      return <NotFoundPage  />
    } 
    return (
        <>
                  <h3>title:{ article.title}</h3>
                  <p>This article has { articleInfo.upvotes } upvote(s)</p>
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