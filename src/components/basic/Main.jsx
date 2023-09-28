import React from "react";
import "./css/StyleMain.css";

export default function Main(){
    return(
        <div class="top_bar">
            <div class="menu">
                <img href="./Main.jsx" id="home" src="" alt="Transparent White Home Icon Png"></img>
                <a href="#">Home</a>
            </div>
            <div class="shop">
                <a href="#">Notificações</a>
                <a href="#">Carrinho</a>
            </div>

            <div class="user">
                <a href="#">Cadastro</a>
                <a href="#" target="_blank">Login</a>
            </div>
        </div>
    )
}