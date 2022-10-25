import React, { useState, Component } from "react";

function LoginForm(){

  const [email, setEmail] = useState =("");
  const [password, setPassword] = useState =("");

  const handleEmailChange = ({target: {value}}) => setEmail(value);
  const handlePasswordChange = ({target: {value}}) => setPassword(value);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    alert(`Usuario: ${email}, Contraseña: ${password}`);
  };

  return (
    <div className="LoginForm">
      <form onSubmit={handleFormSubmit}>
        <label>
          Email
          <input type="email" value={email} onChange={handleEmailChange}/>
        </label>
        <label>
          Contraseña
          <input type="password" value={password} onChange={handlePasswordChange}/>
        </label>
        <button type="submit">
          Iniciar sesión
        </button>
      </form>
    </div>
  );

}

export default LoginForm;
