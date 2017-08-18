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
      },
      dias: [
        {
          numeroDia: 0,
          perguntas: []
        }
      ]
    }


    this.toggleModalPergunta = this.toggleModalPergunta.bind(this)
    this.submitFormulario = this.submitFormulario.bind(this)
    this.setEnunciado = this.setEnunciado.bind(this)
    this.setTipoResposta = this.setTipoResposta.bind(this)
    this.setResposta = this.setResposta.bind(this)
    this.adicionaNovoCampoDeResposta = this.adicionaNovoCampoDeResposta.bind(this)
  }

  componentDidMount(){
    fetch('http://localhost:8080/dias/')
      .then( res => res.json() )
      .then( dias => {
        this.setState({
          dias
        })
      })
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

  submitFormulario(event) {
    event.preventDefault();

    fetch("http://localhost:8080/perguntas/", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(this.state.novaPergunta)
      }).then(res =>  {
        res.json()
      })
      .then(json => console.log(json))

    this.setState({
      modal: {
        visivel: !this.state.modal.visivel
      }
    })
  }


  setEnunciado(event){
    let novaPergunta = this.state.novaPergunta
    novaPergunta.enunciado = event.target.value
    this.setState({ novaPergunta })
  }

  setTipoResposta(event) {
    let novaPergunta = this.state.novaPergunta
    novaPergunta.tipoResposta = event.target.value
    this.setState({ novaPergunta })
  }

  setResposta(event, index) {
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
          this.state.dias.map( (dia) => {
                      console.log(dia.perguntas)
                      return (
                        <Dia
                             key={dia.numeroDia}
                             numero={dia.numeroDia}
                             perguntas={dia.perguntas}
                             mostraModalPergunta={ (event) => this.toggleModalPergunta(event, dia.numeroDia) }/>
                      )


                    })


        }

        { this.state.modal.visivel && <Modal item={ this.state.modal }
                                             action={ this.submitFormulario }
                                             setEnunciado={this.setEnunciado}
                                             novaPergunta={ this.state.novaPergunta } fechaModal={ this.toggleModalPergunta }
                                             setTipoResposta={ this.setTipoResposta }
                                             setResposta={ this.setResposta }
                                             adicionaNovoCampoDeResposta={ this.adicionaNovoCampoDeResposta }/> }
      </main>
    )
  }
}

export default Dashboard
