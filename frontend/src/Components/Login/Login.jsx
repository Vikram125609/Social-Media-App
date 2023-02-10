// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Loader from '../Loader/Loader';
// import { signup } from '../../Api/Api'
// import { useEffect } from "react";

// const Login = () => {
//     const [image, setimage] = useState();

//     const [loading, setLoading] = useState(false);

//     const navigate = useNavigate();

//     const [userdata, setUserdata] = useState({
//         email: "",
//         first_name: "",
//         last_name: "",
//         phone: ""
//     })

// useEffect(() => {
//     if (localStorage.getItem('token')) navigate("/home")
// }, []);

//     const onSubmit = async (e) => {
//         e.preventDefault();
//         const formData = new FormData();
//         formData.append('email', userdata.email);
//         formData.append('first_name', userdata.first_name);
//         formData.append('last_name', userdata.last_name);
//         formData.append('phone', userdata.phone);
//         formData.append('image', image);
//         try {
//             setLoading(true);
//             let data = await signup(formData);
//             setLoading(false);
//             data = data?.data?.data;
//             localStorage.setItem("token", data.token);
//             localStorage.setItem("first_name", data.user.first_name);
//             localStorage.setItem("last_name", data.user.last_name);
//             localStorage.setItem("_id", data.user._id);
//             localStorage.setItem("user_id", data.user.user_id);
//             localStorage.setItem("block_user", data.user.block_user);
//             localStorage.setItem("follow_user", data.user.follow_user);
//             navigate("/home");
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     const onChange = (e) => {
//         const name = e.target.name;
//         const value = e.target.value;
//         setUserdata({ ...userdata, [name]: value })
//     }

//     return (
//         <>
//             {
//                 loading ? (<Loader />) : (
//                     <Form>
//                         <Form.Group className="mb-3" controlId="formBasicEmail">
//                             <Form.Label>Email</Form.Label>
//                             <Form.Control type="Email" required placeholder="Email" name="email" value={userdata.email} onChange={onChange} />
//                             <Form.Text className="text-muted">
//                             </Form.Text>
//                         </Form.Group>

//                         <Form.Group className="mb-3" controlId="formBasicEmail">
//                             <Form.Label>First Name</Form.Label>
//                             <Form.Control type="text" required placeholder="First Name" name="first_name" value={userdata.first_name} onChange={onChange} />
//                             <Form.Text className="text-muted">
//                             </Form.Text>
//                         </Form.Group>

//                         <Form.Group className="mb-3" controlId="formBasicPassword">
//                             <Form.Label>Last Name</Form.Label>
//                             <Form.Control type="text" required placeholder="Last Name" name="last_name" value={userdata.last_name} onChange={onChange} />
//                         </Form.Group>

//                         <Form.Group className="mb-3" controlId="formBasicPassword">
//                             <Form.Label>Phone</Form.Label>
//                             <Form.Control type="number" required placeholder="Phone" name="phone" value={userdata.phone} onChange={onChange} />
//                         </Form.Group>

//                         <Form.Group controlId="formFile" className="mb-3">
//                             <Form.Label>Default file input example</Form.Label>
//                             <Form.Control type="file" name="image" onChange={e => {
//                                 setimage(e.target.files[0]);
//                             }} />
//                         </Form.Group>

//                         <Form.Group className="mb-3" controlId="formBasicCheckbox">
//                             <Form.Check type="checkbox" required label="Terms & Conditions" />
//                         </Form.Group>

//                         <Button onClick={onSubmit} variant="primary" size="lg" type="submit">
//                             Login
//                         </Button>
//                     </Form>
//                 )}
//         </>
//     );
// };

// export default Login;

import * as React from 'react';
import { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { signin } from '../../Api/Api';
const theme = createTheme();

const Login = () => {

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

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('email', userdata.email);
        formData.append('first_name', userdata.first_name);
        formData.append('last_name', userdata.last_name);
        formData.append('phone', userdata.phone);
        try {
            let data = await signin(formData);
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
    };

    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserdata({ ...userdata, [name]: value })
        console.log(userdata)
    }

    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://source.unsplash.com/random)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                label="Email Address"
                                name="email"
                                autoFocus
                                onChange={onChange}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="first_name"
                                label="First Name"
                                type="text"
                                onChange={onChange}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="last_name"
                                label="Last Name"
                                type="text"
                                onChange={onChange}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="phone"
                                label="Phone"
                                type="Number"
                                onChange={onChange}
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link to="#" style={{ "textDecoration": "none" }} variant="body2">
                                        Forget Password
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link to="/signup" style={{ "textDecoration": "none" }} variant="body2">
                                        Already have an account ? Sign in
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}

export default Login;