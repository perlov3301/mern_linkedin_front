// localhost:3000/articles/learn-node
import { useState, useEffect } from 'react';// hooks
import { useParams }  from 'react-router-dom'; // hook for catching articleID
import axios from 'axios';
import CommentsList from '../components/CommentsList';
import AddCommentForm from '../components/AddCommentForm';
import {articles, test} from './article-content';
import NotFoundPage from './NotFoundPage';

const ArticlePage = () => {
    const [articleInfo, setArticleInfo] = useState({ upvotes:0, comments: [] });
    // simulation how useEffect look like
    //  const params = useParams(); // hook useParams
  //  const articleId = params.articleId; 
  const { articleId } =useParams();    
    useEffect(()=> {  
      const loadArticleInfo = async ()=> {
        // package.json:"proxy":"http://localhost:8000/"
        const response = await  axios.get(`/api/articles/${articleId}`);
      //response has property 'data'
        // console.log("articlePage;axios;response: "+Object.keys(response));
        const newArticleInfo =response.data;
        setArticleInfo(newArticleInfo);
      }     
      loadArticleInfo();
    }, [articleId]); // array is variables to look for 
   
    const article = articles.find((article)=> article.name === articleId);

    const addUpvote = async () => {
        const response = await axios.put(`/api/articles/${articleId}/upvote/`);
        // console.log("ArticlePagejs;addUpvote;response="+Object.keys(response));
        const updatedArticle =response.data;
        setArticleInfo(updatedArticle);
    };
  //  console.log("article:", article);
    if (!article) {
      return <NotFoundPage  />
    } 
    return (
        <>
                  <h3>title:{ article.title}</h3>
                 
                  <div className="upvote-section">
                    <button 
                     onClick={addUpvote} 
                     >Upvote</button>
                    <p>This article has { articleInfo.upvotes } upvote(s)</p>
                  </div>
                  {/* <form action='api/articles/learn-react/upvote' method='put' >
                      <button type='submit'>Upvote</button>
                  </form> */}
                   
                  <br /><b>content:</b>{ article.content.map((paragraph,i)=>
                    <p key={i}>{paragraph}</p>
                  ) }
                  <CommentsList comments={articleInfo.comments} />
                  <AddCommentForm 
                    articleName={articleId} 
                    onArticleUpdated={updatedArticle=>setArticleInfo(updatedArticle)}
                    />
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