import React from 'react';

import { Link } from 'react-router-dom'
import { Input } from '../../components/Inputs';

import style from './style.module.scss'

export function Login (){

    return(
        <div className={style.container}>
            
            <div className={style.containerLogo}>
                <img src="logo_lobo.svg" alt="Logo lobo"/>
            </div>
           

             <div className={style.conteinerConteudo}>
                <img src="logo_name.svg" alt="Logo ELite Wolf"/>
                <h1>Bem-vindo(a)</h1>

                <form>

                <button>
                   <img src="icone_google.svg" alt="Google"/>
                   <span>Entre com sua conta do Google</span> 
                </button>

                  <Input type={'email'} title={'Digite seu email'}/>
                  <Input type={'password'} title={'Digite sua senha'}/>

                <button>Entrar</button>

                <Link to="/" className={style.link}>Esqueceu sua senha?</Link>

                <br/>

                <p>
                    Ainda não possui senha?{" "}
                    <Link to="/cadastro" className={style.link}>Cadastre-se</Link>
                </p>

                </form>
              </div>
            
        </div>

    )
}

export default Login;