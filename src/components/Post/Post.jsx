import { Fragment } from 'react';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import './post.css';


function Post({id,title,text}){
    return (
            <div className="blog__item post">
            <Link to={`posts/${id}`}><h2 className="post__title">{title}</h2></Link>  
                <div className="post__body">
                    {text}
                </div>
                <div className="post__control">
                    <a href="" className="post__edit">Отредактировать</a>
                    <a href="" className="post__delete">Удалить</a>
                </div>
            </div>
    )
}

export default Post