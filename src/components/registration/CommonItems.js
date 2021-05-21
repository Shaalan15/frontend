// Importing styles
import styled from 'styled-components';

export const MinorBoxContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
`;

export const FormContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
`;

// Forget password and stuff
export const MutedLink = styled.a`
    font-size: 12px;
    color: rgba(200, 200, 200, 0.8);
    font-weight: 500;
    text-decoration: none;
    margin: 25px 25px;
`;

// For the sign up link
export const BoldLink = styled.a`
    font-size: 12px;
    color: rgb(241, 196, 15);
    font-weight: 500;
    text-decoration: none;
`;

// Input Login
export const Input = styled.input`
    outline: none;
    height: 42px;
    width: 100%;
    border: 1px solid rgba(200, 200, 200, 0.3);
    padding: 0px 10px;
    border-bottom: 1.4px solid transparent;

    transition: all 200ms ease-in-out;

    &::placeholder {
        color: rgba(200, 200, 200, 1);
    }

    &:not(:last-of-type){
        border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
    }

    &:focus {
        outline: none;
        border-bottom: 2px solid rgb(241, 196, 15);
    }
`;

// Input Signup
export const SignupInput = styled.input`
    outline: none;
    height: 60px;
    width: 100%;
    border: 1px solid rgba(200, 200, 200, 0.3);
    padding: 0px 10px;
    border-bottom: 1.4px solid transparent;

    transition: all 200ms ease-in-out;

    &::placeholder {
        color: rgba(200, 200, 200, 1);
    }

    &:not(:last-of-type){
        border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
    }

    &:focus {
        outline: none;
        border-bottom: 2px solid rgb(241, 196, 15);
    }
`;

// Button
export const SubmitButton = styled.button`
    width: 100%;
    padding: 11px 40%;
    color: #fff;
    font-size: 17px;
    font-weight: 600;
    border: none;
    border-radius: 100px 100px 100px 100px;
    cursor: pointer;
    transition: all, 240ms ease-in-out;

    background: rgb(241, 196, 15);
    background: linear-gradient(
        58deg,
        rgba(241, 196, 15, 1) 20%,
        rgba(243, 172, 18, 1) 100%
    );

    &:hover {
        filter: brightness(1.03);
    }
`;

export const SubmitButtonSmall = styled.button`
    width: 5px;
    padding: 11px 40%;
    color: #fff;
    font-size: 17px;
    font-weight: 600;
    border: none;
    border-radius: 100px 100px 100px 100px;
    cursor: pointer;
    transition: all, 240ms ease-in-out;

    background: rgb(241, 196, 15);
    background: linear-gradient(
        58deg,
        rgba(241, 196, 15, 1) 20%,
        rgba(243, 172, 18, 1) 100%
    );

    &:hover {
        filter: brightness(1.03);
    }
`;
