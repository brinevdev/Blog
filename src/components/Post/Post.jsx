import { Fragment } from 'react';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import './post.css';
import { useDispatch } from 'react-redux';
import { deletePost} from './../../actions/'

function Post({id,title,text}){

   const dispatch = useDispatch(); 

   const onDelete = (e,id) => {
        e.preventDefault();
        fetch(`http://localhost:3000/posts/${id}`,{
            method:'DELETE'
        })
        .then(res => {
            if (res.ok) {
                dispatch(deletePost(id));
            } else {
                throw new Error('Ошибка удаления поста')
            }
        })
        .catch(error => console.log(error))
    } 

    return (
            <div className="blog__item post">
            <Link to={`/posts/${id}`}><h2 className="post__title">{title}</h2></Link>  
                <div className="post__body">
                    {text}
                </div>
                <div className="post__control">
                    <Link to = {`/posts/${id}/edit`} className="post__edit">Отредактировать</Link>
                    <a href = "" className="post__delete" onClick = {(e)=>onDelete(e,id)}>Удалить</a>
                </div>
            </div>
    )
}

export default Post