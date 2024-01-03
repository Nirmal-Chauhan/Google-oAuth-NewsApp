import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import User from "./User";
function Auth() {

    const[userData,setUserData]=useState("");

    if(userData){
        window.localStorage.setItem("name",userData.name);
        window.localStorage.setItem("email",userData.email);
        window.localStorage.setItem("picture",userData.picture);
        return <User info={userData}/>
    };

    // values
    let savedName=localStorage.getItem("name");
    let savedEmail=localStorage.getItem("email");
    let savedPicture=localStorage.getItem("picture")

    // if name,email,picture in localstorage
    //it means you are already loggedIn.

    // values of line 18,19,20
    if(savedName && savedEmail && savedPicture){
        // key-pair Values
       
        setUserData({name:savedName,email:savedEmail,picture:savedPicture});
         
    }


  return (
    <>
      {/* <h1>{userData.name}</h1>
      <h1>{userData.email}</h1>
      <img src={userData.picture}/> */}
      <GoogleOAuthProvider clientId="640418868973-1892c5u20q57u5edk8qfoumkjdiri4to.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            let token = credentialResponse.credential;
            const decoded = jwtDecode(token);
            // console.log(decoded);
            setUserData(decoded)
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </GoogleOAuthProvider>
    </>
  );
}

export default Auth;
