 import { Link } from 'react-router-dom';

import { useAuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";
import './Login.css';

export const Login = () => {
    const {onLoginSubmit} = useAuthContext()
    const {values, changeHandler, onSubmit} = useForm({
        email: '',
        password: '',
    }, onLoginSubmit);

    return (
        <section>
           
            <form className='login' id="login" method="POST" onSubmit={onSubmit}>
                <h3>Login</h3>
                <div className='containerLogin'>
                
                <label>Email</label>
                <input type="email" name="email" id="email" value={values.email} onChange={changeHandler} placeholder="Email here" />

                <label>Password</label>
                <input type="password" name="password" id="password" value={values.password} onChange={changeHandler}placeholder="Password here" />

                <input type="submit" value="Login" />

                <p className='alternative'>
                    <span>If you do not have registration, click here! <Link to="/register">here</Link></span>
                </p>
                </div>
                
            </form>
        </section>
        
    );
};