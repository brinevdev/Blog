import './posts.css';
import { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Post from './../../components/Post/Post'
import { useEffect } from 'react';
import { fetchPosts } from './../../actions';
import Header from '../../components/Header/Header';
import { useSearchParams } from 'react-router-dom';

const Posts = () => {
    const dispatch = useDispatch();
    const [page,setPage] = useState(1);
    const limit = 10;
    const maxPages = Math.ceil(useSelector((state)=>state.posts.length) / limit) + 1;
    const [searchParams,setSearchParams] = useSearchParams();
   
    useEffect(()=>{
        fetch(`http://localhost:3000/posts/?_limit=${limit}&_page=${page}`)
        .then(res => res.json())
        .then(posts => dispatch(fetchPosts(posts)))
        .then(setSearchParams({'_page':page,}))
      },[page])
      
    useEffect(()=>{
        const page = searchParams.get('_page');
        if (page) setPage(+page);
      },[])
    const {posts} = useSelector(state =>state);
      console.log(maxPages);
    const onPageChange = (i) => {
      if (page + i === 0 || page + i > maxPages) return 
      setPage(page + i)
    } 
      


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
              <div className="pagination">
                  <button onClick = {()=>onPageChange(-1)}>Prev</button>
                    {page}
                  <button onClick = {()=>onPageChange(1)}>Next</button>
              </div>
            </div>
        </main>
    </>
    )
}

export default Posts;