import React, {Component} from 'react'

import './Pergunta.css'

class Pergunta extends Component {
  render () {
    return (
      <article className='compPergunta'>
        <h3>{this.props.informacaoPergunta.titulo}</h3>
      </article>
    )
  }
}

export default Pergunta
