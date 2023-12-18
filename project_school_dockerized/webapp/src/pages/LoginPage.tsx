import React, { useRef, useState, useEffect, useContext } from 'react';
// import AuthContext from '../context/AuthProvider';
import 'bootstrap/dist/css/bootstrap.min.css';

// import axios from '../../../backend/axios';
const LOGIN_URL = '/auth';


const LoginPage = () => {

    // const { setAuth } :any = useContext(AuthContext);
    // const userRef = useRef();
    // const errRef = useRef();

    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [errMsg, setErrMsg] = useState('');
    // const [success, setSuccess] = useState(false);

    // useEffect(() => {
    //     userRef;
    // }, [])

    // useEffect(()=>{
    //     setErrMsg('');
    // }, [email, password]);

    // const handleSubmit = async (e) =>{
    //     e.preventDefault();
    //     console.log(email,password);
    // }
    //     try {
    //         const response = await axios.post(LOGIN_URL, 
    //             JSON.stringify({email, password}),
    //             {
    //                 headers: {'Content-Type': 'application/json'},
    //                 withCredentials: true,
    //             }
    //         );
    //         console.log(JSON.stringify(response?.data));
    //         const accessToken = response?.data?.accessToken;
    //         const roles = response?.data?.roles;
    //         setAuth({email, password, roles, accessToken});
    //         setEmail('');
    //         setPassword('');
    //         setSuccess(true);
    //     } catch(err) {
    //         console.log(err);
    //         // if (!err?.response) {
    //         //     setErrMsg('No Server Response');
    //         // } else if (err.response?.status == 400){
    //         //     setErrMsg('Missing Email or Password');
    //         // }else if (err.response?.status== 401){
    //         //     setErrMsg('Unathorized');
    //         // }else {
    //         //     setErrMsg('Login Failed');
    //         // }
    //         // errRef.current.focus();
    //     }
    // };
    // function handleSubmit(event){
    //     event.preventDefault();
    //     console.log('------------0')
    //     axios.post('http://localhost:8080/auth', {email,password})
    //     .then(res => console.log(res))
    //     .catch(err => console.log(err));
    // }

    //are you able to have the user authenticate on the webapp?
    return (
    
        <section className="vh-100">
            <div className="container py-5 h-100">
                <div className="row d-flex align-items-center justify-content-center h-100">
                <div className="col-md-8 col-lg-7 col-xl-6">
                    {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="img-fluid" alt="Phone image"></img> */}
                </div>
                <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                    <form>
                    {/* onChange={e => setEmail(e.target.value)} value={email}  onChange={e => setPassword(e.target.value)} value={password}*/}
                    <div className="form-outline mb-4">
                        <input type="email" placeholder='Enter Email'  id="username"  className="form-control form-control-lg" required />
                        <label className="form-label" htmlFor="form1Example13">Email address</label>
                    </div>

                    
                    <div className="form-outline mb-4">
                        <input type="password" placeholder='Enter Password'  id="password"  className="form-control form-control-lg" required />
                        <label className="form-label" htmlFor="form1Example23">Password</label>
                    </div>

                    <div className="d-flex justify-content-around align-items-center mb-4">
                       
                        <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
                        <label className="form-check-label" htmlFor="form1Example3"> Remember me </label>
                        </div>
                        <a href="#!">Forgot password?</a>
                    </div>

                    <button type="submit" className="btn btn-primary btn-lg btn-block">Sign in</button>

                    </form>
                </div>
                </div>
            </div>
        </section>
    );
};


export default LoginPage;
