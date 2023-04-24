import React, { useState } from "react";
import "./style.css"

export default function PaginaInicial() {
    const modoClaro = "modo-claro"
    const modoEscuro = "modo-escuro"

    const [ fundo, setFundo] = useState(true)

    function alterarModo() {
        setFundo(!fundo)
    };

    return(
        <main className={fundo ? modoClaro : modoEscuro}>
            <header>
                <div className="limitar-largura ">
                    <img src="assets/barbearia-logo.png"/>
                    <button onClick={ alterarModo } className={`btn-modo ${fundo ? modoClaro : modoEscuro}`}>
                        <img src={fundo ? "assets/moon.png" : "assets/sun.png"}/>
                        {fundo ? 'Dark' : 'Light'}
                    </button>
                </div>
            </header>

            <section className="banner">

            </section>

            <section className="conteudo limitar-largura">
                <h1>Bem-vindo a Barber Shop</h1>
                <p>
                    <span>
                    Nossa barbearia sempre oferece profissionais de qualidade e estamos
                    prontos para lidar com suas maiores expectativas.
                    </span>
                </p>
                <p>
                Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.
                </p>
                <p className="assinatura">S. Kelly</p>
            </section>
        </main>
    );

}

