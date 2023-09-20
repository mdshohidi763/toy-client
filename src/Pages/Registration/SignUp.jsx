import React, { useContext } from 'react';
import { Form, Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2'
import { Helmet } from 'react-helmet-async';

const SignUp = () => {

    const { createUser } = useContext(AuthContext)
    const handleSignUpSubmit = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const url = form.url.value;
        const password = form.password.value;
        const dataObject = {
            name, email, url, password
        }
        console.log(dataObject);
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'User Sign Up Successful. ',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <Helmet>
                <title>ToY LanD | SignUp</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center  md:w-1/2 lg:text-left">

                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card  md:w-1/2 flex-shrink-0 max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl text-center pt-7 font-bold">Register Now!</h1>
                    <Form onSubmit={handleSignUpSubmit} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="url" name="url" placeholder='photo url' className="input input-bordered" id="" />
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
                            <button className="btn btn-primary">  <input className='text-xl' type="submit" value="Sign Up" /></button>

                        </div>
                        <div>
                            <p className='text-center text-lg text-indigo'>Already have an acount   <Link className='text-blue-800 text-xl' to='/login'>Login Now!</Link> </p>
                        </div>


                    </Form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;