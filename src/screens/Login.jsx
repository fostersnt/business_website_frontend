import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
// import FacebookLogin from "react-facebook-login";
import { useNavigate } from "react-router-dom";
import '../styles/Login.css';

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
    <>
      <div className="login-container">
        <div className="login-box">
          <h2>Welcome Back</h2>
          <p className="login-subtext">Choose a login method to continue</p>

          <button className="login-btn email" onClick={() => {}}>
            📧 Continue with Email
          </button>

          <button className="login-btn google" onClick={() => {}}>
            <GoogleOAuthProvider clientId="622600737424-m8lg627aoe38vocsh09hdp1467fvlsgb.apps.googleusercontent.com">
                <div className="social-login">
                  <GoogleLogin
                    onSuccess={handleGoogleLoginSuccess}
                    onError={handleGoogleLoginFailure}
                  />
                </div>
            </GoogleOAuthProvider>
          </button>

          <button className="login-btn facebook" onClick={() => {}}>
            🔵 Continue with Facebook
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
