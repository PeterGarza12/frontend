import React from "react";
import LoginForm from "../components/Forms/loginForm";

function Login(){

  return(
    <div className="Login">
      <div>
        <h2>Bienvenido</h2>
        <LoginForm onLogin={(email, password)=>{
          console.log(`${email}, ${password}`);
        }}></LoginForm>
      </div>
    </div>
  );
}

export default Login;
