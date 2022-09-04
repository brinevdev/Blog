import './App.css';
import { Routes, Route} from 'react-router-dom';
import Posts from './pages/Posts/Posts';
import SinglePost from './pages/singlePost/singlePost';

function App() {

  return (
    <Routes>
        <Route path='/' element = {<Posts/>}></Route>
        <Route path='/posts/:id' element = {<SinglePost/>}></Route>
    </Routes>
  );
}

export default App;
