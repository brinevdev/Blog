import { Fragment, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Post from "../../components/Post/Post";
import { fetchPost } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header/Header";

const SinglePost = () => {
    
    const {id} = useParams('id');
    const dispatch = useDispatch();
    
  
   useEffect(()=> {
    fetch(`http://localhost:3000/posts/${id}`) 
    .then(res => res.json())
    .then(post => dispatch(fetchPost(post)));
   },[id])
  
    const {post} = useSelector(state => state);
    const  { title,text } = post;

    const isPostEmpty = (post) => {
      return Object.keys(post).length == 0
    }
  
    if (isPostEmpty(post)) return (
          <>
            <Header/>
            <main className="main">
                <div className="container">
                    <div style ={{fontSize:'20px',paddingTop:'100px',textAlign:'center'}}>Пост не найден</div>
                </div>
            </main>
          </>
    )
    

    return (
        <>
            <Header/>
            <main className="main">
                <div className="container">
                  <div className="blog">
                    <div className="blog__item">
                       <Post id = {id} title = {title} text = {text}/>
                    </div>
                  </div>
                </div>
            </main>
        </>
    )
}

export default SinglePost;