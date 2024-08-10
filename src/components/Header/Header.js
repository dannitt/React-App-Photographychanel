import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';
import './Header.css';

export const Header = () => {
    const { isAuthenticated, userEmail } = useContext(AuthContext);
    return (
       <header className='up'>
            
            <nav>
                <h3 className='home'><Link to="/" >Home</Link></h3>
             
                <Link to="/catalog" className='nava'>Catalog</Link>
                { isAuthenticated && (
                    <div id="user">
                         
                         <Link to="/create" className='nava'>Create</Link>
                         <Link to="/logout" className='nava'>Logout</Link>
                         <span className='nava'>{userEmail}</span>
                    </div>
                )}
                { !isAuthenticated && (
                    <div id="guest">
                    <Link to="/login" className='nava'>Login</Link>
                    <Link to="/register" className='nava'>Register</Link>
                </div>
                )}
                
                

            </nav>
        </header>
    );
}
