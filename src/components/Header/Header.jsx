import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
            <Link to='/'><h1>Blog</h1></Link> 
            <nav>
                <ul className='menu'>
                <li><Link to="newPost" className='menu__link'>Создать пост</Link></li>
                </ul>
            </nav>
            </div>
        </header>
    )
}

export default Header;