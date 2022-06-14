import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Col, Button } from 'react-bootstrap';
import { LoginEmail } from './../../config/redux/actions/authAction';
import { useNavigate } from "react-router-dom";
import img2 from '../Login/image2.jpg';
import '../Login/Login.css';

const Login = () => {

    const { dataLogin } = useSelector((state) => state.auth);

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState(''); 

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleLoginEmail = () => {
        dispatch(LoginEmail(email, password))
        setTimeout(() => {
          navigate("dashboard");
        }, 3000)
    }
  
    useEffect(() => {
        if (dataLogin?.email === "admin@admin.com") navigate("/dashboard");
        // eslint-disable-next-line
      }, []);
    

    return (
        <>
            <section className="Form">
                <Col md="6" className="img">
                    <img src={img2} alt=""/>
                </Col> 

                <Col md="6">
                    <div className="logo-row"></div>
                        <h1 className="text">Welcome, Admin BCR</h1>

                    <form action="">
                        <div className="form-row">
                            <div className="col-lg-9">
                                <h1 className="text1">Email</h1>
                                <input type="email" placeholder="Contoh: johndee@gmail.com" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="col-lg-9">
                                <h1 className="text2">Password</h1>
                                <input type="password" placeholder="6+ karakter" className="control" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="col-lg-9">
                                <Button className="btn1" onClick={handleLoginEmail}>Sign In</Button>
                            </div>
                        </div>
                    </form>
                </Col>
            </section>
        </>
    )
}

export default Login