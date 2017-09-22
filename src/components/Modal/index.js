import React, {Component} from 'react'
import './Modal.css'
import PerguntaForm from '../PerguntaForm'


class Modal extends Component {

  render() {
    return(
      <section className="compModal jsModal__toggle" onClick={ this.props.fechaModal }>
        <div className="compModal__container">
          <button className="compModal__buttonClose jsModal__toggle" onClick={ this.props.fechaModal }>Fechar</button>

          <PerguntaForm
            action={this.props.action}
            setEnunciado={this.props.setEnunciado}
            setTipoResposta={this.props.setTipoResposta}
            setResposta={this.props.setReposta}
            setPeriodo={this.props.setPeriodo}
            adicionaNovoCampoDeResposta={this.props.adicionaNovoCampoDeResposta}
            pergunta={this.props.pergunta}
            fechaModal={this.props.fechaModal}
          />

        </div>
      </section>
    )
  }
}

export default Modal
