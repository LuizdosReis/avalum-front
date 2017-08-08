import React, {Component} from 'react'

class Modal extends Component {

  render() {
    return(
      <section>
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
      </section>
    )
  }
}

export default Modal
