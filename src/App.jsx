import './App.css';
import { Routes, Route} from 'react-router-dom';
import Posts from './pages/Posts/Posts';
import SinglePost from './pages/singlePost/singlePost';
import CreatePost from './pages/CreatePost/CreatePost';

function App() {

  return (
    <Routes>
        <Route path='/' element = {<Posts/>}></Route>
        <Route path='/posts/:id' element = {<SinglePost/>}></Route>
        <Route path='/newPost' element = {<CreatePost/>}></Route>
    </Routes>
  );
}

export default App;
