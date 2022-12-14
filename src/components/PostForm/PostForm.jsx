import './postForm.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const PostForm = ({edit,defaultTitle,defaultText,onFormSubmit}) => {

   

    const [title,setTitle] = useState(defaultTitle || '');
    const [text,setText] = useState(defaultText || '');
    const [titleError,setTitleError] = useState(false);
    const [textError,setTextError] = useState(false);


    
    const onChangeTitle = (e) => {
        const text = e.target.value
        setTitle(text);
        text ?  setTitleError(false) : setTitleError(true)
    }
    const onChangeText = (e) => {
        const text = e.target.value
        setText(e.target.value);
        text ? setTextError(false) : setTextError(true) 
    }

    

    
    return (
        <>
        <header className="header">
            <div className="container">
            <Link to='/'><h1>Blog</h1></Link> 
            <nav>
                <ul className='menu'>
        
                </ul>
            </nav>
            </div>
        </header>
        <div className="container">
            <form action="" className="form">
                <div className="form__title">Введите название</div>
                {titleError ? <div className='error-message'>Поле не может быть пустым</div> : null}
                <input type="text"  name="title" className='form__input' value={title} onChange = {onChangeTitle}/>
                <div className="form__title">Введите текст</div>
                {textError ? <div className='error-message'>Поле не может быть пустым</div> : null}
                <textarea name="text" id="" className='form__text-area' value={text} onChange = {onChangeText}></textarea>
                <button className='form__button' onClick={(e) => onFormSubmit(e,{title,text})}>{edit ? 'Отредактировать' : 'Добавить'}</button>
            </form>
        </div>
    </>
    )
}

export default PostForm