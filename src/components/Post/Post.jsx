import './post.css';


function Post({title,text}){
    return (
        <div className="blog__item post">
            <h2 className="post__title">{title}</h2>
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