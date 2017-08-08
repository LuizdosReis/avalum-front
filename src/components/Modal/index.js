import React, {Component} from 'react'
import './Modal.css'

class Modal extends Component {

  render() {
    console.log(this.props)
    return(
      <section className="modal modal__toggle" onClick={ this.props.fechaModal }>
        <div className="modal__container">
          <button className="modal__toggle" onClick={ this.props.fechaModal }>Fechar</button>
          <form action="">
            <textarea cols="50" rows="30" placeholder="Escreva aqui sua pergunta"></textarea>
            <label>
              Única Escolha
              <input type="radio"/>
            </label>
            <label>
              Multipla Escolha
              <input type="radio"/>
            </label>

            <input type="text" />

            <button type="submit"></button>
          </form>
        </div>
      </section>
    )
  }
}

export default Modal
