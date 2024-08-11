import { useContext, useState } from "react";
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

const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
       
        const newErrors = validateForm({...values});

        setErrors(newErrors);
         
        if (Object.keys(newErrors).length === 0) {
            
            console.log('Form submitted successfully!');
        } else {
            console.log('Form submission failed due to validation errors.');
        }
        onSubmit(e)
    };

        const validateForm = ({...values}) => {
        
        const errors = {};

        // if (!values.email) {
        //     errors.email = 'Email is required';
        // } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        //     errors.email = 'Email is invalid';
        // }

        if (!values.password) {
            errors.password = 'Password is required';
        } else if (values.password.length < 6) {
            errors.password = 'Password must be at least 6 characters long';
        }

        if (values.rePassword !== values.password) {
            errors.rePassword = 'Passwords do not match';
        }

        return errors;
    };

    return (
        <section>
            
            <form className='register' id="register" method="POST" onSubmit={handleSubmit}>  
                <h3>Register</h3>
                <div className='containerRegister'>
                
                <label>Email</label>
                <input type="email" name="email" id="email" value={values.email} onChange={changeHandler} placeholder="Email here" />
                {/* {errors.email && (
                        <span className="error-message">
                            {errors.email}
                        </span>
                    )} */}
                <label>Password</label>
                <input type="password" name="password" id="password" value={values.password} onChange={changeHandler}placeholder="Password here" />
                {errors.password && (
                        <span className="error-message">
                            {errors.password}
                        </span>
                    )}                
                <label>rePassword</label>
                <input type="password" name="rePassword" id="rePassword" value={values.rePassword} onChange={changeHandler}placeholder="Re password here" />
                {errors.rePassword && (
                        <span className="error-message">
                            {errors.rePassword}
                        </span>
                    )}
                <input type="submit" value="Register" />

                <p className='alternative'>
                    <span>If you have registration, click here! <Link to="/login">here</Link></span>
                </p>
                </div>
            </form>
        </section>
        
    );
}