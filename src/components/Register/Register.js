import { useContext } from "react";
import { Link } from 'react-router-dom';

import { useForm } from '../../hooks/useForm';
import { AuthContext } from "../../contexts/AuthContext";
import './Register.css'

export const Register = () => {
const { onRegisterSubmit } = useContext(AuthContext);
const { values, changeHandler, onSubmit } = useForm({
    email: '',
    password: '',
    rePassword: '',
    
}, onRegisterSubmit)

    return (
        <section>
            
            <form className='register' id="register" method="POST" onSubmit={onSubmit}>  
                <h3>Register</h3>
                <div className='containerRegister'>
                
                <label>Email</label>
                <input type="email" name="email" id="email" value={values.email} onChange={changeHandler} placeholder="Email here" />

                <label>Password</label>
                <input type="password" name="password" id="password" value={values.password} onChange={changeHandler}placeholder="Password here" />

                <label>rePassword</label>
                <input type="password" name="rePassword" id="rePassword" value={values.rePassword} onChange={changeHandler}placeholder="Re password here" />

                <input type="submit" value="Register" />

                <p className='alternative'>
                    <span>If you have registration, click here! <Link to="/login">here</Link></span>
                </p>
                </div>
            </form>
        </section>
        
    );
}