import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
// import FacebookLogin from "react-facebook-login";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
  // Handle Google login success
  const handleGoogleLoginSuccess = (response) => {
    console.log("Google login successful", response);
    navigate('/dashboard');

    // You can handle the response, like sending the token to your server
  };

  // Handle Google login failure
  const handleGoogleLoginFailure = (error) => {
    console.log("Google login failed", error);
  };

  // Handle Facebook login response
  const responseFacebook = (response) => {
    console.log("Facebook login successful", response);
    // You can handle the response, like sending the token to your server
  };

  return (
    <GoogleOAuthProvider clientId="622600737424-m8lg627aoe38vocsh09hdp1467fvlsgb.apps.googleusercontent.com">
      <div className="login-container">
        <h2>Login</h2>

        {/* Google Login */}
        <div className="social-login">
          <GoogleLogin
            onSuccess={handleGoogleLoginSuccess}
            onError={handleGoogleLoginFailure}
          />
        </div>

        {/* Facebook Login */}
        {/* <div className="social-login">
          <FacebookLogin
            appId="YOUR_FACEBOOK_APP_ID"
            autoLoad={false}
            fields="name,email,picture"
            callback={responseFacebook}
          />
        </div> */}
      </div>
    </GoogleOAuthProvider>
  );
};

export default Login;
