import './App.css';
import { Routes, Route} from 'react-router-dom';
import Posts from './pages/Posts/Posts';
import SinglePost from './pages/singlePost/singlePost';
import PostFormContainer from './components/PostForm/PostFormContainer';

function App() {

  return (
    <Routes>
        <Route path='/' element = {<Posts/>}></Route>
        <Route path='/posts/:id' element = {<SinglePost/>}></Route>
        <Route path='/posts/create' element = {<PostFormContainer/>}></Route>
        <Route path='/posts/:id/edit' element = {<PostFormContainer/>}></Route>
    </Routes>
  );
}

export default App;
