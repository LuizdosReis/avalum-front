import React, {Component} from 'react'
import './Dia.css'
import Pergunta from "../Pergunta";

class Dia extends Component {

    constructor({ numero, perguntas }) {
        super();
        console.log(perguntas)
        this.state = {
            numero,
            perguntas
        }

    }

    render() {
        return (
            <section className="compDia">
                <h1 className="compDia__titulo">{ this.state.numero } Dia</h1>
                <h2>Integral</h2>
                {this.state.perguntas.integral.map( (pergunta, index) => {
                    return (
                        <Pergunta informacaoPergunta={ pergunta } key={ index }/>
                    )
                })}

                <hr/>

                <h2>Noturno</h2>
                {this.state.perguntas.noturno.map( (pergunta, index) => {
                    return (
                        <Pergunta informacaoPergunta={ pergunta } key={ index }/>
                    )
                })}
            </section>
        )
    }
}

export default Dia