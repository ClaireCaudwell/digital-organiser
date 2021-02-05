import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { userLogin, userSignup } from "reducer/user";
import { 
    MainContainer, 
    MainTitleContainer, 
    Title, 
    SmallText,
    SignupLoginForm
} from "../styled-components/styled-component-one";

export const SignupLogin = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const userId = useSelector((store) => store.user.login.userId);
    const error = useSelector((store) => store.user.login.errorMessage);
    const accessToken = useSelector((store) => store.user.login.accessToken);
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // User submits username and password when they sign up
    // handleSignUp function is called and the fetch to the POST endpoint "/users" is done.
    // If success returned json data is dispatched to redux store
    // Finally username and password useState is set back to empty string
    const handleSignup = (event) => {
        event.preventDefault();
        dispatch(userSignup(username, password));
        setUsername("");
        setPassword(""); 
    };

    // If user already signed up then they can login
    // handleLogin function calles that dispatches the username and password to the redux store
    // username and password useState is set back to empty string
    const handleLogin = (event) => {
        event.preventDefault();
        dispatch(userLogin(username, password));
        setUsername("");
        setPassword(""); 
    };

    useEffect(() => {
        if(accessToken) {
            history.push("/schedule");
        }
    }, [accessToken, history]);

    // if the accessToken hasn't been created i.e. the user hasn't signed up or logged in then the form will still be shown and error message will be shown
    // else the Organiser.js will be shown as the user has created a successful username/password a valid accessToken is dispatched to redux store.
    // Once the accessToken is true and before the Organiser.js is rendered the useEffect dispatches to the getOrganiser thunk in the redux store the userId and accessToken generated from a successfule sign up or login. 
    // The fetch and GET request is done in server.js which authenticates the accessToken and thus authenticates that the user exsists in the database which allows for the user is shown their organiser which will be rendered in Organiser.js.
    return (
        <>
            <MainContainer>
                <MainTitleContainer>
                    <Title>Organiser .</Title>
                    <SmallText>Sign up or login to get your organiser</SmallText>
                </MainTitleContainer>
                <SignupLoginForm className="signup-login-form">
                    Username
                    <input
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        minLength="3"
                        maxLength="20"
                        required                
                    />
                    Password   
                    <input
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        minLength="5"
                        required                
                    />
                    <button className="form-button" type="submit" onClick={handleSignup}>SIGN UP</button>
                    <button className="form-button" type="submit" onClick={handleLogin}>LOGIN</button> 
                </SignupLoginForm>
                {userId === null && <p>{error}</p>}
            </MainContainer>
        </>  
    );
};