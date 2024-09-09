import React from 'react';
import InputField from '../commponents/InputField';
import LoginButton from '../commponents/LoginButton';
import PasswordField from '../commponents/PasswordField';
import SocialButton from '../commponents/SocialButton';

const Login = () => {
  return (
    <div className="login-container">
      <h1 className="login-title">로그인</h1>
      <div className="login-form">
        <InputField />
        <PasswordField />
        <LoginButton />
        <p className="signup-link">
          계정이 없으신가요?
          <a href="#">가입하기</a>
        </p>
        <p className="or-divider">또는</p>
        <SocialButton />
      </div>
    </div>
  );
};

export default Login;
