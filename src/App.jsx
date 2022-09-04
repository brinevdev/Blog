import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Post from './components/Post/Post';
import { useEffect } from 'react';
import { fetchPosts } from './actions';

function App() {

  const dispatch = useDispatch();
  
  useEffect(()=>{
    fetch('http://localhost:3000/posts/')
    .then(res => res.json())
    .then(posts => dispatch(fetchPosts(posts)))
  },[])
  
  const {posts} = useSelector(state =>state);
  
  return (
    <div className="App">
        <header className="header">
            <div className="container">
              <h1>Blog</h1>
              <nav>
                <ul className='menu'>
                  <li><a href="" className='menu__link'>Создать пост</a></li>
                </ul>
              </nav>
            </div>
        </header>
        <main className="main">
            <div className="container">
              <div className="blog">
                <div className="blog__items">
                    {posts.map(({title,text})=><Post title = {title} text = {text}/>)}
                </div>
              </div>
            </div>
        </main>
        <footer className="footer">
            all rights reserved
        </footer>
    </div>
  );
}

export default App;
