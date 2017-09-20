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
              <label>
                Período
                <select disabled={this.props.pergunta.id != null} value={this.props.pergunta.periodo} onChange={ this.props.setPeriodo }>
                  <option value="INTEGRAL">Integral</option>
                  <option value="NOTURNO">Noturno</option>
                </select>
              </label>
            </div>
            <div>
              <textarea disabled={this.props.pergunta.id != null} onChange={ this.props.setEnunciado } value={ this.props.pergunta.enunciado } className="compModal__pergunta" rows="8" placeholder="Escreva aqui sua pergunta"></textarea>
            </div>
            <div>
              <label>
                Tipo de Alternativa
                <select disabled={this.props.pergunta.id != null} value={this.props.pergunta.tipoResposta} onChange={ this.props.setTipoResposta }>
                  <option value="SINGLE">Única Escolha</option>
                  <option value="MULTIPLE">Multipla Escolha</option>
                </select>
              </label>
            </div>
            <button onClick={ this.props.adicionaNovoCampoDeResposta } type="button" className={ this.props.pergunta.id? "--hidden": "" }>Nova Reposta</button>
            { this.props.pergunta.respostas.map((resposta, index) => { return (

              <div key={ index }>
                <input disabled={this.props.pergunta.id != null} onChange={ event => this.props.setResposta(event, index) } value={ this.props.pergunta.respostas[index] } type="text" />
              </div>
            )}) }

            <button type="submit" className={ this.props.pergunta.id? "--hidden": "" }>Salvar</button>
          </form>
        </div>
      </section>
    )
  }
}

export default Modal
