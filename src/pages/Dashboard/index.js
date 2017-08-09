import React, { Component } from 'react'
import Dia from '../../components/Dia/index'
import Modal from '../../components/Modal/index'
import './Dashboard.css'

class Dashboard extends Component {

  dados = [
      {
        dia:1,
        perguntas:{
          integral: [],
          noturno: []
        }
      },

      {
        dia:2,
        perguntas: {
          integral: [
            {enunciado: 'Integral 01 Titulo 01'},
            {enunciado: 'Integral 02 Titulo 02'}
          ],
          noturno: [
            {enunciado: 'Noturno 01 Titulo 01'},
            {enunciado: 'Noturno 02 Titulo 02'}
          ]
        }
      },

      {
        dia:3,
        perguntas: {
          integral: [
            {enunciado: 'Integral 01 Titulo 01'},
            {enunciado: 'Integral 02 Titulo 02'}
          ],
          noturno: [
            {enunciado: 'Noturno 01 Titulo 01'},
            {enunciado: 'Noturno 02 Titulo 02'}
          ]
        }
      },

      {
        dia:4,
        perguntas: {
          integral: [
            {enunciado: 'Integral 01 Titulo 01'},
            {enunciado: 'Integral 02 Titulo 02'}
          ],
          noturno: [
            {enunciado: 'Noturno 01 Titulo 01'},
            {enunciado: 'Noturno 02 Titulo 02'}
          ]
        }
      },

      {
        dia:5,
        perguntas: {
          integral: [
            {enunciado: 'Integral 01 Titulo 01'},
            {enunciado: 'Integral 02 Titulo 02'}
          ],
          noturno: [
            {enunciado: 'Noturno 01 Titulo 01'},
            {enunciado: 'Noturno 02 Titulo 02'}
          ]
        }
      }

    ]


  constructor () {
    super()
    this.state = {
      perguntas: {
        integral: [],
        noturno: []
      },
      modal: {
        visivel: false,
        componente: (<div></div>)
      },
      novaPergunta: {
        enunciado: "",
        dia: 0
      }
    }

    this.toggleModalPergunta = this.toggleModalPergunta.bind(this)
    this.pegaFormulario = this.pegaFormulario.bind(this)
    this.trataEnunciado = this.trataEnunciado.bind(this)
    this.trataTipoResposta = this.trataTipoResposta.bind(this)
    this.trataResposta = this.trataResposta.bind(this)
    this.adicionaNovoCampoDeResposta = this.adicionaNovoCampoDeResposta.bind(this)
  }

  toggleModalPergunta(event, dia) {
    event.stopPropagation()

    if(event.target.classList.contains('jsModal__toggle')) {
      this.setState({
        modal: {
          visivel: !this.state.modal.visivel
        },
        novaPergunta: {
          enunciado: "",
          dia: dia,
          tipoResposta: "",
          respostas: []
        }
      })
    }
  }

  pegaFormulario(event) {
    event.preventDefault();

    console.log(this.state.novaPergunta)

    this.setState({
      modal: {
        visivel: !this.state.modal.visivel
      }
    })
  }


  trataEnunciado(event){
    let novaPergunta = this.state.novaPergunta
    novaPergunta.enunciado = event.target.value
    this.setState({ novaPergunta })
  }

  trataTipoResposta(event) {
    let novaPergunta = this.state.novaPergunta
    novaPergunta.tipoResposta = event.target.value
    this.setState({ novaPergunta })
  }

  trataResposta(event, index) {
    let novaPergunta = this.state.novaPergunta
    novaPergunta.respostas[index] = event.target.value
    this.setState({ novaPergunta })
  }

  adicionaNovoCampoDeResposta() {
    let novaPergunta = this.state.novaPergunta
    novaPergunta.respostas.push("")
    this.setState({ novaPergunta })
  }

  render () {
    return (
      <main className='pageDashboard'>


        {
          this.dados.map( (dado) => {

                      return (
                        <Dia
                             key={dado.dia}
                             numero={dado.dia}
                             perguntas={dado.perguntas}
                             mostraModalPergunta={ (event) => this.toggleModalPergunta(event, dado.dia) }/>
                      )


                    })


        }

        { this.state.modal.visivel && <Modal item={ this.state.modal }
                                             action={ this.pegaFormulario }
                                             trataEnunciado={this.trataEnunciado}
                                             novaPergunta={ this.state.novaPergunta } fechaModal={ this.toggleModalPergunta }
                                             trataTipoResposta={ this.trataTipoResposta }
                                             trataResposta={ this.trataResposta }
                                             adicionaNovoCampoDeResposta={ this.adicionaNovoCampoDeResposta }/> }
      </main>
    )
  }
}

export default Dashboard
