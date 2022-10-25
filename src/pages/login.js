import React from "react";
import OtroLogin from "../components/Forms/loginForm";

function Login(){

  return(
    <div className="Login">
      <div>
        <h2>Bienvenido</h2>
        <OtroLogin onLogin={(email, password)=>{
          console.log(`${email}, ${password}`);
        }}></OtroLogin>
      </div>
    </div>
  );
}

export default Login;
