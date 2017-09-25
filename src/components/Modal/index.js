import React, {Component} from 'react'
import './Modal.css'
import PerguntaForm from '../PerguntaForm'
import CursosForm from '../CursosForm'


class Modal extends Component {

  render() {
    return(
      <section className="compModal jsModal__toggle" onClick={ this.props.fechaModal }>
        <div className="compModal__container">
          <button className="compModal__buttonClose jsModal__toggle" onClick={ this.props.fechaModal }>Fechar</button>

          {
            this.props.tipoModal === 'PERGUNTA' &&
              <PerguntaForm
                action={this.props.action}
                setEnunciado={this.props.setEnunciado}
                setTipoResposta={this.props.setTipoResposta}
                setResposta={this.props.setResposta}
                setPeriodo={this.props.setPeriodo}
                adicionaNovoCampoDeResposta={this.props.adicionaNovoCampoDeResposta}
                pergunta={this.props.pergunta}
                fechaModal={this.props.fechaModal}
              />
          }

          {
            this.props.tipoModal === 'CURSOS' &&
              <CursosForm
                pergunta={this.props.pergunta}
                getCursosDisponiveis={this.props.getCursosDisponiveis}
              />
          }

        </div>
      </section>
    )
  }
}

export default Modal
