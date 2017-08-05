import React, {Component} from 'react'

import './Pergunta.css'

class Pergunta extends Component {

    constructor({ informacaoPergunta }) {
        console.log(informacaoPergunta.titulo)
        super()

        this.state = { titulo: informacaoPergunta.titulo }
    }
    render() {
        return (
            <article className="compPergunta">
                <h3>{ this.state.titulo }</h3>
            </article>
        )
    }
}

export default Pergunta