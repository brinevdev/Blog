import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
            <Link to='/'><h1>Blog</h1></Link> 
            <nav>
                <ul className='menu'>
                <li><a href="" className='menu__link'>Создать пост</a></li>
                </ul>
            </nav>
            </div>
        </header>
    )
}

export default Header;