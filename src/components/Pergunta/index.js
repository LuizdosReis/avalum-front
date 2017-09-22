import React, {Component} from 'react'

import './Pergunta.css'

class Pergunta extends Component {
  render () {
    return (
      <article className='compPergunta' onClick={ (event) => this.props.exibePerguntaOuCursos(this.props.informacaoPergunta, event)}>
        <h3>{this.props.informacaoPergunta.enunciado}</h3>
        <button className="compPergunta__adicionarCursos">Vincular Cursos</button>
      </article>
    )
  }
}

export default Pergunta
