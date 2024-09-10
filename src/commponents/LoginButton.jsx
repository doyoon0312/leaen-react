import React from 'react';

const LoginButton = ({ text, onClick, isSocial = false }) => {
  const className = isSocial ? 'social-button' : 'login-button';

  return (
    <div>
      <button className={className} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default LoginButton;
