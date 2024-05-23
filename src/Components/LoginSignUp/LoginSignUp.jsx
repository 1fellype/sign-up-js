import React, {useState} from 'react'
import './LoginSignUp.css'
import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

 const LoginSignUp = () => {

    const [action,setAction] = useState("Sign Up");

  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>

        <div className="inputs">
            {action==="Login"?<div></div>:<div className="input">
                <img src={user_icon} alt="Imagem de Usuário" />
                <input type="text" placeholder='Nome' />
            </div>}

            <div className="input">
                <img src={email_icon} alt="Email do Usuário" />
                <input type="email" placeholder='E-mail' />
            </div>
            <div className="input">
                <img src={password_icon} alt="Senha do Usuário" />
                <input type="password" placeholder='Senha' />
            </div>
        </div>

        {action==="Sign Up"?<div></div>:<div className="forgot-password">
            Esqueceu a senha? <span> Clique aqui!</span>
        </div>}

        <div className="submit-container">
            <div className={action === "Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Cadastre-se</div>
            <div className={action === "Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>
    </div>
  )
}

export default LoginSignUp