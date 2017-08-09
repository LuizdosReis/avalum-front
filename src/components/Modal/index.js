import React, {Component} from 'react'
import './Modal.css'

class Modal extends Component {

  render() {
    return(
      <section className="compModal jsModal__toggle" onClick={ this.props.fechaModal }>
        <div className="compModal__container">
          <button className="compModal__buttonClose jsModal__toggle" onClick={ this.props.fechaModal }>Fechar</button>
          <form action="" onSubmit={ this.props.action }>
            {/*<div>*/}
              {/*<textarea className="compModal__pergunta" rows="8" placeholder="Escreva aqui sua pergunta"></textarea>*/}
            {/*</div>*/}
            {/*<div>*/}
              {/*<label>*/}
                {/*Única Escolha*/}
                {/*<input type="radio"/>*/}
              {/*</label>*/}
            {/*</div>*/}
            {/*<div>*/}
              {/*<label>*/}
                {/*Multipla Escolha*/}
                {/*<input type="radio"/>*/}
              {/*</label>*/}
            {/*</div>*/}

            <div>
              <input onChange={this.props.trataTitulo} value={this.props.novaPergunta.titulo} type="text" />
            </div>

            <button type="submit">Salvar</button>
          </form>
        </div>
      </section>
    )
  }
}

export default Modal
