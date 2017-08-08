import React, {Component} from 'react'
import './Dia.css'
import Pergunta from '../Pergunta'

class Dia extends Component {
  render () {
    return (
      <section className='compDia'>
        <h1 className='compDia__titulo'>{ this.props.numero } Dia</h1>
        <div className='compDia__containerPerguntas'>
          <h2>Integral</h2>
          {this.props.perguntas.integral.map((pergunta, index) => {
            return (
              <Pergunta informacaoPergunta={pergunta} key={index} />
            )
          })}

          <hr />

          <h2>Noturno</h2>
          {this.props.perguntas.noturno.map((pergunta, index) => {
            return (
              <Pergunta informacaoPergunta={pergunta} key={index} />
            )
          })}
          <button className='compDia__adicionarPergunta modal__toggle' onClick={ this.props.mostraModalPergunta }>
            +
          </button>
        </div>
      </section>
    )
  }
}

export default Dia
