import React, {Component} from 'react'
import Dia from '../../components/Dia/index'
import Modal from '../../components/Modal/index'
import PropTypes from 'prop-types'
import './Dashboard.css'
import {DashboardService} from "../../services/DashboardService"

class Dashboard extends Component {

  constructor() {
    super()
    this.state = {
      modal: {},
      dias: []
    }

    this.submitFormulario = this.submitFormulario.bind(this)
    this.setEnunciado = this.setEnunciado.bind(this)
    this.setTipoResposta = this.setTipoResposta.bind(this)
    this.setPeriodo = this.setPeriodo.bind(this)
    this.setResposta = this.setResposta.bind(this)
    this.adicionaNovoCampoDeResposta = this.adicionaNovoCampoDeResposta.bind(this)
    this.toggleModalPergunta = this.toggleModalPergunta.bind(this)
    this.exibePerguntaOuCursos = this.exibePerguntaOuCursos.bind(this)
  }

  componentDidMount() {
    this.context.store.dispatch(DashboardService.listaDias())
  }

  componentWillMount() {
    this.context.store.subscribe(() => {
      this.setState(this.context.store.getState().dashboard)
    })
  }

  submitFormulario(event) {
    event.preventDefault();
    this.context.store.dispatch(DashboardService.salva(this.state.pergunta, this.state.dias))
  }

  setEnunciado(event) {
    let pergunta = this.state.modal.pergunta
    pergunta.enunciado = event.target.value
    this.setState({pergunta})
  }

  setTipoResposta(event) {
    let pergunta = this.state.modal.pergunta
    pergunta.tipoResposta = event.target.value
    this.setState({pergunta})
  }

  setPeriodo(event) {
    let pergunta = this.state.modal.pergunta
    pergunta.periodo = event.target.value
    this.setState({pergunta})
  }

  setResposta(event, index) {
    let pergunta = this.state.modal.pergunta
    pergunta.respostas[index] = event.target.value
    this.setState({pergunta})
  }

  adicionaNovoCampoDeResposta() {
    let pergunta = this.state.modal.pergunta
    pergunta.respostas.push("")
    this.setState({pergunta})
  }

  toggleModalPergunta(event, dia) {
    event.stopPropagation()
    if (event.target.classList.contains('jsModal__toggle'))
      this.context.store.dispatch(DashboardService.toggleModalPergunta(dia))
  }

  exibePerguntaOuCursos(pergunta, event) {
    if (event.target.classList.contains('compPergunta__adicionarCursos'))
      this.context.store.dispatch(DashboardService.mostraModalCursos(pergunta))
    else
      this.context.store.dispatch(DashboardService.exibePergunta(pergunta))
  }

  render() {
    return (
      <main className='pageDashboard'>
        {
          this.state.dias.map((dia) => {
            return (
              <Dia
                key={dia.numeroDia}
                dia={dia}
                mostraModalPergunta={(event) => this.toggleModalPergunta(event, dia.numeroDia)}
                exibePerguntaOuCursos={this.exibePerguntaOuCursos}
              />
            )
          })
        }

        {
          this.state.modal.visivel &&
            <Modal
              action={this.submitFormulario}
              setEnunciado={this.setEnunciado}
              setTipoResposta={this.setTipoResposta}
              setResposta={this.setResposta}
              setPeriodo={this.setPeriodo}
              adicionaNovoCampoDeResposta={this.adicionaNovoCampoDeResposta}
              pergunta={this.state.modal.pergunta}
              tipoModal={this.state.modal.tipoModal}
              fechaModal={this.toggleModalPergunta}
              store={this.context.store}
            />
        }
      </main>
    )
  }
}

Dashboard.contextTypes = {
  store: PropTypes.object.isRequired
}

export default Dashboard
