import React from "react";
import "./css/Style.css"

export default function Primeiro(){
    return(
        <div>
            <h1>Projeto React</h1><br /><br />

            <form>
                <label for="login">Login:</label><br />
                <input id="login" type="text" placeholder="Digite seu login"></input><br /><br />

                <label for="password">Senha:</label><br />
                <input id="password" type="password" placeholder="Digite sua senha"></input><br /><br />
                
                <label for="age">Idade:</label><br />
                <input id="age" type="number" min="0" max="100"></input><br /><br />
                
                <label for="termos">Ao clicar no botão você aceita nossos <a href="https://github.com/IkPc/ProjetoReact" target="_self">Termos de Serviço   </a></label>
                <input id="termos" type="checkbox"></input><br /><br />

                <input id="submit" type="button" value="Fazer Login"></input>
            </form>
        </div>
    )
}