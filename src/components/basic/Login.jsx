import React from "react";
import "./css/StyleLogin.css";

export default function Login(){
    return(
        <div>
            <h1>Login</h1><br />

            <form>
                <label htmlFor="usuario">Usuário:</label><br />
                <input id="usuario" type="text" placeholder="Digite seu usuário"></input><br /><br />

                <label htmlFor="password">Senha:</label><br />
                <input id="password" type="password" placeholder="Digite sua senha"></input><br /><br />
                
                <label htmlFor="age">Idade:</label><br />
                <input id="age" type="number" min="0" max="100"></input><br /><br />
                
                <label htmlFor="termos">Ao clicar no botão você aceita nossos <a id="term" href="https://github.com/IkPc/ProjectReact" target="_self">Termos de Serviço</a>  </label>
                <input id="termos" type="checkbox"></input><br /><br />

                <input id="submit" type="button" value="Fazer Login"></input>
            </form>
        </div>
    )
}