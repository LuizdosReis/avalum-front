import React, { Component } from 'react'
import Dia from '../../components/Dia/index'
import Modal from '../../components/Modal/index'
import './Dashboard.css'

class Dashboard extends Component {

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
    this.exibePergunta = this.exibePergunta.bind(this)
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
    })
      .then(res => {
        if (res.status !== 201) throw new Error()
        return res
      })
      .then(res => res.json())
      .then((pergunta) => {
        let dias = this.state.dias
        let perguntasDesteDia = dias[pergunta.dia - 1].perguntas
        const diasAtualizados = dias.map((dia) => {
          if (dia.numeroDia === pergunta.dia)
            dia.perguntas = [...perguntasDesteDia, pergunta]
          return dia
        })

        this.setState({
          dias: diasAtualizados
        })

      })
      .catch(err => console.error(err))

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


  exibePergunta(pergunta){
    console.log(pergunta)

    this.setState({
      modal: {
        visivel: !this.state.modal.visivel
      },
      novaPergunta: pergunta
    })
  }

  render () {
    return (
      <main className='pageDashboard'>


        {
          this.state.dias.map( (dia) => {
                      return (
                        <Dia
                             key={dia.numeroDia}
                             numero={dia.numeroDia}
                             perguntas={dia.perguntas}
                             mostraModalPergunta={ (event) => this.toggleModalPergunta(event, dia.numeroDia) }
                             exibePergunta={this.exibePergunta}
                             />
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
