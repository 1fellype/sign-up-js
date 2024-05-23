import React from 'react'
import './LoginSignUp.css'
import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

 const LoginSignUp = () => {
  return (
    <div className='container'>
        <div className="header">
            <div className="text">Sign Up</div>
            <div className="underline"></div>
        </div>

        <div className="inputs">
            <div className="input">
                <img src={user_icon} alt="Imagem de Usuário" />
                <input type="text" placeholder='Nome' />
            </div>
            <div className="input">
                <img src={email_icon} alt="Email do Usuário" />
                <input type="email" placeholder='E-mail' />
            </div>
            <div className="input">
                <img src={password_icon} alt="Senha do Usuário" />
                <input type="password" placeholder='Senha' />
            </div>
        </div>

        <div className="forgot-password">
            Esqueceu a senha? <span>Clique aqui!</span>
        </div>

        <div className="submit-container">
            <div className="submit">Cadastre-se</div>
            <div className="submit">Login</div>
        </div>
    </div>
  )
}

export default LoginSignUp