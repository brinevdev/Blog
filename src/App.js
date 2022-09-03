import './App.css';
import { useState } from 'react';

function App() {
  const [posts,setPosts] = useState([]);
  
  fetch('http://localhost:3000/posts/')
  .then(res => res.json())
  .then(posts => console.log(posts));
  
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
