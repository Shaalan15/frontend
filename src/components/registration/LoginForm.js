// Importing react
import React from 'react';
// Importing the commons
import { MinorBoxContainer, FormContainer, Input, MutedLink, SubmitButton } from './CommonItems';
// Importing link
import { Link } from 'react-router-dom';

function LoginForm(props)
{
    const BoldLink = {
        fontSize: "12px",
        color: "rgb(241, 196, 15)",
        fontWeight: "500",
        textDecoration: "none"
    };

    return(
        <MinorBoxContainer>
            <FormContainer>

                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />

            </FormContainer>

            <MutedLink href="#">Forgot your password?</MutedLink>
            <SubmitButton type="submit">Login</SubmitButton>
            
            <MutedLink href="#">
                Don't have an account? <Link to='/register' style={BoldLink}>Signup</Link>
            </MutedLink>

        </MinorBoxContainer>
    )
}

export default LoginForm;