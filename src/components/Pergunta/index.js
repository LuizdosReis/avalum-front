import React, {Component} from 'react'

import './Pergunta.css'

class Pergunta extends Component {
  render () {
    return (
      <article className='compPergunta'>
        <h3>{this.props.informacaoPergunta.enunciado}</h3>
      </article>
    )
  }
}

export default Pergunta
