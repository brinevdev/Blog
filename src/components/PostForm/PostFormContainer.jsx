import { useParams,useNavigate } from "react-router-dom";
import PostForm from "./PostForm";
import { createPost, editPost } from './../../components/postsSlice';
import { useDispatch,useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';


const PostFormContainer = () => {
   
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {id} = useParams('id');
    const oldPost = useSelector(state => state.posts.find((post)=>post.id == id));
   
    const edit = id && oldPost ? true : false;

    function postEdit(post) {
        fetch(`http://localhost:3001/posts/${id}`,{
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(post)
        })
        .then(res => {
            if (res.ok) {
                dispatch(editPost(post));
            }
            else {throw new Error(res.statusText)}
        })
        .then (navigate('/'))
        .catch(err => console.log('Error: ',err.message))
    }

    function postCreate(post) {
        fetch('http://localhost:3001/posts',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(post)
        })
        .then(res => {
            if (res.ok) {
                dispatch(createPost(post));
            }
            else {throw new Error(res.statusText)}
        })
        .then (navigate('/'))
        .catch(err => console.log('Error: ',err.message))
    }


    const onFormSubmit = (e,post) => {
        e.preventDefault();
        if (edit) {
            postEdit(post)
        } else {
            postCreate({id:uuidv4(), ...post})
        }
    }

    if (edit) return <PostForm edit = {true} defaultTitle = {oldPost.title} defaultText = {oldPost.text} onFormSubmit = {onFormSubmit}/>
    return <PostForm edit = {false}  onFormSubmit = {onFormSubmit}/>

}

export default PostFormContainer;