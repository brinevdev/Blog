import './posts.css';
import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Post from './../../components/Post/Post'
import { useEffect } from 'react';
import { fetchPosts } from './../../actions';
import Header from '../../components/Header/Header';

const Posts = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        fetch('http://localhost:3000/posts/')
        .then(res => res.json())
        .then(posts => dispatch(fetchPosts(posts)))
      },[])
      
    const {posts} = useSelector(state =>state);
      
 
    return (
    <>
        <Header/>
        <main className="main">
            <div className="container">
              <div className="blog">
                <div className="blog__items">
                    {posts.map(({id,title,text})=><Post key={id} id = {id} title = {title} text = {text.slice(0,250) + '...'}/>)}
                </div>
              </div>
            </div>
        </main>
    </>
    )
}

export default Posts;