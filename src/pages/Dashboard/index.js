import React, { Component } from 'react'
import Dia from '../../components/Dia/index'
import Modal from '../../components/Modal/index'
import './Dashboard.css'

class Dashboard extends Component {

  constructor () {
    super()
    this.state = {
      modal: {},
      dias: []
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
        pergunta: {
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

    const request = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(this.state.pergunta)
    };

    fetch("http://localhost:8080/perguntas/", request)
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
    let pergunta = this.state.pergunta
    pergunta.enunciado = event.target.value
    this.setState({ pergunta })
  }

  setTipoResposta(event) {
    let pergunta = this.state.pergunta
    pergunta.tipoResposta = event.target.value
    this.setState({ pergunta })
  }

  setResposta(event, index) {
    let pergunta = this.state.pergunta
    pergunta.respostas[index] = event.target.value
    this.setState({ pergunta })
  }

  adicionaNovoCampoDeResposta() {
    let pergunta = this.state.pergunta
    pergunta.respostas.push("")
    this.setState({ pergunta })
  }


  exibePergunta(pergunta){
    console.log(pergunta)

    this.setState({
      modal: {
        visivel: !this.state.modal.visivel
      },
      pergunta: pergunta
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
                                             pergunta={ this.state.pergunta } fechaModal={ this.toggleModalPergunta }
                                             setTipoResposta={ this.setTipoResposta }
                                             setResposta={ this.setResposta }
                                             adicionaNovoCampoDeResposta={ this.adicionaNovoCampoDeResposta }/> }
      </main>
    )
  }
}

export default Dashboard
