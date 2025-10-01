// import { useRef } from "react"

export const checkValidData = (Email,Password,Name)=>{
    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(Email);
    const isPasswordValid =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(Password);
    const isNameValid =  /^[a-zA-Z]+$/.test(Name);
    if(!isNameValid)return"Name should always Alphabets ";
    if(!isEmailValid)return"Email is not valid ";
    if(!isPasswordValid)return"Password is not valid ";
    return null;
}