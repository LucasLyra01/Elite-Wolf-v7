import React from 'react';
import style from './style.module.scss';
import { Input } from '../../components/Inputs';

import { Link } from 'react-router-dom';

export function Cadastro(){

    const ArrayData = {
        ArrayMeses: [
            "Janeiro",
            "Fevereiro",
            "Março",
            "Abril",
            "Maio",
            "Junho",
            "Julho",
            "Agosto",
            "Setembro",
            "Outubro",
            "Novembro",
            "Dezembro",
        ]
    
    }

    function funcDias() {
        const dias = [];

        for (let index = 1; index <= 31; index++) {
            
            dias.push(index);
        }
        
        return dias;
    }

    function funcAnos() {
        const anos = [];

        for (let index = 1921; index <= 2021; index++) {
            
            anos.push(index);
        }

        anos.reverse();
        
        return anos;
    }

    return(

        <div className={style.container}>
            
            <div className={style.containerLogo}>
                <img src="logo_lobo.svg" alt="Logo lobo"/>
            </div>

            <div className={style.conteinerConteudo}>
                <img src="logo_name.svg" alt="Logo ELite Wolf"/>
                <h1>Cadastre-se</h1>

                <form>

                <button>
                   <img src="icone_google.svg" alt="Google"/>
                   <span>Entre com sua conta do Google</span> 
                </button>

                <Input type='text' title='Digite seu nome'/>

                <div className={style.dataNascimento}>
                    <label>Data de nascimento</label>
                </div>
                
                <div className={style.dropdown}>
                    <div>
                        <select className={style.buttonSelect}>
                            <option disabled hidden selected>Dia</option>
                            {funcDias().map(data => (
                                <option>{data}</option>
                            ))}
                        </select>
                    </div>
                
                    <div>
                        <select className={style.buttonSelect}>
                            <option disabled hidden selected>Mês</option>
                            {ArrayData.ArrayMeses.map(data => (
                                <option>{data}</option>
                            ))}
                        </select>
                    </div>
                
                    <div>
                        <select className={style.buttonSelect}>
                            <option disabled hidden selected>Ano</option>
                            {funcAnos().map(data => (
                                <option>{data}</option>
                            ))}
                        </select>
                    </div>
                
                </div>                 
                
                <Input type='email' title='Digite seu email'/>
                <Input type='password' title='Digite sua senha'/>
                  

                <button>Cadastrar</button>

                </form>
              </div>


        </div>

    );

}