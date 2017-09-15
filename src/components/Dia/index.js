import React, {Component} from 'react'
import './Dia.css'
import Pergunta from '../Pergunta'

class Dia extends Component {
  render () {
    return (
      <section className='compDia'>
        <h1 className='compDia__titulo'>{ this.props.dia.numeroDia } Dia</h1>
        <div className='compDia__containerPerguntas'>


          {
            Object.keys(this.props.dia.periodoPerguntas).map(periodo => {
              return (
                  <div>
                    <h2>{periodo}</h2>
                    {this.props.dia.periodoPerguntas[periodo.toString()].map((pergunta, index) => {
                      return (
                          <Pergunta informacaoPergunta={pergunta} key={index} exibePergunta={this.props.exibePergunta}/>
                        )
                    })}
                  </div>
                )
              }
            )
          }

          <button className='compDia__adicionarPergunta jsModal__toggle' onClick={ this.props.mostraModalPergunta }>
            +
          </button>
        </div>
      </section>
    )
  }
}

export default Dia
