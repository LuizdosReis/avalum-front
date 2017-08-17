import React, {Component} from 'react'
import './Modal.css'

class Modal extends Component {

  render() {
    return(
      <section className="compModal jsModal__toggle" onClick={ this.props.fechaModal }>
        <div className="compModal__container">
          <button className="compModal__buttonClose jsModal__toggle" onClick={ this.props.fechaModal }>Fechar</button>
          <form action="" onSubmit={ this.props.action }>
            <div>
              <textarea onChange={ this.props.setEnunciado } value={ this.props.novaPergunta.enunciado } className="compModal__pergunta" rows="8" placeholder="Escreva aqui sua pergunta"></textarea>
            </div>
            <div>
              <label>
                Única Escolha
                <input onClick={ this.props.setTipoResposta } value="SINGLE" name="tipoResposta" type="radio" />
              </label>
            </div>
            <div>
              <label>
                Multipla Escolha
                <input onClick={ this.props.setTipoResposta } value="MULTIPLE" name="tipoResposta" type="radio"/>
              </label>
            </div>
            <button onClick={ this.props.adicionaNovoCampoDeResposta } type="button">Nova Reposta</button>
            { this.props.novaPergunta.respostas.map((resposta, index) => { return (

              <div key={ index }>
                <input onChange={ event => this.props.setResposta(event, index) } value={ this.props.novaPergunta.respostas[index] } type="text" />
              </div>
            )}) }

            <button type="submit">Salvar</button>
          </form>
        </div>
      </section>
    )
  }
}

export default Modal
