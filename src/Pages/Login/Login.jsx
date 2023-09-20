import React, { useContext, useState } from 'react';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { app } from '../../../Firebase.config';
import { Helmet } from 'react-helmet-async';

const Login = () => {


    const [loading, setLoading] = useState(true)
    const { signIn, } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider()


    const auth = getAuth(app)

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';

    const handleGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoading(true)
                navigate(from, { replace: true })
            })
            .catch(error => { console.log(error) })
    }

    const handleLoginSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const dataLogin = {
            email, password
        }
        console.log(dataLogin);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset()

                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
                navigate(from, { replace: true })
            })

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <Helmet>
                <title>ToY LanD | Login</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center  md:w-1/2 lg:text-left">

                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card  md:w-1/2 flex-shrink-0 max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl text-center pt-7 font-bold">Login now!</h1>
                    <Form onSubmit={handleLoginSubmit} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary text-white">  <input className='text-xl' type="submit" value="Login" /></button>

                        </div>
                        <div>
                            <p className='text-center text-indigo text-lg'>New to here <Link className='text-blue-800 text-xl' to='/sign-up'>Sign-Up Now</Link> </p>
                        </div>
                        <p className='text-center'>------------or------------</p>

                        <div className="form-control mt-6">
                            <button onClick={handleGoogle} className="btn btn-block btn-outline bg-yellow-200">Google </button>
                        </div>

                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Login;