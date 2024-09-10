import React from 'react';
import InputField from '../commponents/InputField';
import LoginButton from '../commponents/LoginButton';
import '../Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <h1 className="login-title">로그인</h1>
      <div className="login-form">
        <InputField type="email" placeholder="Email" />
        <InputField type="password" placeholder="Password" />
        <LoginButton text="Login" onClick={() => console.log('로그인 클릭')} />
        <p className="signup-link">
          계정이 없으신가요?
          <a href="#">가입하기</a>
        </p>
        <p className="or-divider">또는</p>
        <LoginButton
          text="Continue with Google"
          onClick={() => console.log('Google 로그인 클릭')}
          isSocial={true}
        />
      </div>
    </div>
  );
};

export default Login;
