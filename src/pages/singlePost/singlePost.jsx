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
    
    const{ title,text }= post;

    return (
        <>
            <Header/>
            <main className="main">
                <div className="container">
                  <div className="blog">
                    <div className="blog__item">
                        <div className="blog__item post">
                          <h2 className="post__title">{title}</h2>
                          <div className="post__body">
                           {text}
                          </div>
                          <div className="post__control">
                              <Link to="#" className="post__edit">Отредактировать</Link>
                              <Link to="#" className="post__delete">Удалить</Link>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
            </main>
        </>
    )
}

export default SinglePost;