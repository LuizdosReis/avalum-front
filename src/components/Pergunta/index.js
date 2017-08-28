import React, {Component} from 'react'

import './Pergunta.css'

class Pergunta extends Component {
  render () {
    return (
      <article className='compPergunta' onClick={ (event) => this.props.exibePergunta(this.props.informacaoPergunta)}>
        <h3>{this.props.informacaoPergunta.enunciado}</h3>
      </article>
    )
  }
}

export default Pergunta
