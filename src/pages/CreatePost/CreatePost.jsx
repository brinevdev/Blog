import './createPost.css';
import { Fragment, useState } from 'react';
import Header from '../../components/Header/Header';
import { createPost } from './../../actions/'
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

const CreatePost = () => {

    const dispatch = useDispatch();
    const [title,setTitle] = useState('');
    const [text,setText] = useState('');

    const onChangeTitle = (e) => {
        setTitle(e.target.value);
    }
    const onChangeText = (e) => {
        setText(e.target.value);
    }

    const onAdd = (e) => {
        e.preventDefault();
        const post = {
            id:uuidv4(),
            title,
            text
        }
        fetch('http://localhost:3000/posts',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        })
        .then(res => {
            if (res.ok) {
                dispatch(createPost(post));
                setText('');
                setTitle('');
            }
            else {throw new Error(res.statusText)}
        })
        .catch(err => console.log('Error: ',err.message))
    }

    return (
        <>
            <Header/>
            <div className="container">
                <form action="" className="form">
                    <div className="form__title">Введите название</div>
                    <input type="text"  name="title" className='form__input' value={title} onChange = {onChangeTitle}/>
                    <div className="form__title">Введите текст</div>
                    <textarea name="text" id="" className='form__text-area' value={text} onChange = {onChangeText}></textarea>
                    <button className='form__button' onClick={onAdd}>Добавить</button>
                </form>
            </div>
        </>
    )
}

export default CreatePost