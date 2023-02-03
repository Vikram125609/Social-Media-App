import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Loader from '../Loader/Loader';
import { signup } from '../../Api/Api'
import { useEffect } from "react";

const Login = () => {
    const [image, setimage] = useState();

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const [userdata, setUserdata] = useState({
        email: "",
        first_name: "",
        last_name: "",
        phone: ""
    })

    useEffect(() => {
        if (localStorage.getItem('token')) navigate("/home")
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('email', userdata.email);
        formData.append('first_name', userdata.first_name);
        formData.append('last_name', userdata.last_name);
        formData.append('phone', userdata.phone);
        formData.append('image', image);
        try {
            setLoading(true);
            let data = await signup(formData);
            setLoading(false);
            data = data?.data?.data;
            localStorage.setItem("token", data.token);
            localStorage.setItem("first_name", data.user.first_name);
            localStorage.setItem("last_name", data.user.last_name);
            localStorage.setItem("_id", data.user._id);
            localStorage.setItem("user_id", data.user.user_id);
            localStorage.setItem("block_user", data.user.block_user);
            localStorage.setItem("follow_user", data.user.follow_user);
            navigate("/home");
        } catch (error) {
            console.log(error);
        }
    }

    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserdata({ ...userdata, [name]: value })
    }

    return (
        <>
            {
                loading ? (<Loader />) : (
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="Email" required placeholder="Email" name="email" value={userdata.email} onChange={onChange} />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" required placeholder="First Name" name="first_name" value={userdata.first_name} onChange={onChange} />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" required placeholder="Last Name" name="last_name" value={userdata.last_name} onChange={onChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="number" required placeholder="Phone" name="phone" value={userdata.phone} onChange={onChange} />
                        </Form.Group>

                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Default file input example</Form.Label>
                            <Form.Control type="file" name="image" onChange={e => {
                                setimage(e.target.files[0]);
                            }} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" required label="Terms & Conditions" />
                        </Form.Group>

                        <Button onClick={onSubmit} variant="primary" size="lg" type="submit">
                            Login
                        </Button>
                    </Form>
                )}
        </>
    );
};

export default Login;