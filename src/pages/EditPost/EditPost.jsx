import { editPost } from '../../actions'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate} from 'react-router-dom';
import Header from '../../components/Header/Header';



const EditPost = () => {

    const {id} = useParams('id');
    const post = useSelector(state => state.posts.find((post)=>post.id == id));

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [title,setTitle] = useState(post.title);
    const [text,setText] = useState(post.text);

    const onChangeTitle = (e) => {
        setTitle(e.target.value);
    }
    const onChangeText = (e) => {
        setText(e.target.value);
    }


    const onEdit = (e) => {
        e.preventDefault();
        const post = {
            title,
            text
        }
        fetch(`http://localhost:3000/posts/${id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
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

    return (
        <>
            <Header/>
            <div className="container">
                <form action="" className="form">
                    <div className="form__title">Введите название</div>
                    <input type="text"  name="title" className='form__input' value={title} onChange = {onChangeTitle}/>
                    <div className="form__title">Введите текст</div>
                    <textarea name="text" id="" className='form__text-area' value={text} onChange = {onChangeText}></textarea>
                    <button className='form__button' onClick = {onEdit}>Отредактировать</button>
                </form>
            </div>
        </>
    )
}

export default EditPost