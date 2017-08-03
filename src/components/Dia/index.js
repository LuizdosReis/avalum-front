import React, {Component} from 'react'
import './Dia.css'

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
                {this.state.perguntas.map( (pergunta, index) => {
                    return (
                        <article key={ index }>
                            <h2>{ pergunta.titulo }</h2>                    
                        </article>
                    )
                })}
            </section>
        )
    }
}

export default Dia