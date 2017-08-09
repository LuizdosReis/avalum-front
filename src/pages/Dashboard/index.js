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
            {titulo: 'Integral 01 Titulo 01'},
            {titulo: 'Integral 02 Titulo 02'}
          ],
          noturno: [
            {titulo: 'Noturno 01 Titulo 01'},
            {titulo: 'Noturno 02 Titulo 02'}
          ]
        }
      },

      {
        dia:3,
        perguntas: {
          integral: [
            {titulo: 'Integral 01 Titulo 01'},
            {titulo: 'Integral 02 Titulo 02'}
          ],
          noturno: [
            {titulo: 'Noturno 01 Titulo 01'},
            {titulo: 'Noturno 02 Titulo 02'}
          ]
        }
      },

      {
        dia:4,
        perguntas: {
          integral: [
            {titulo: 'Integral 01 Titulo 01'},
            {titulo: 'Integral 02 Titulo 02'}
          ],
          noturno: [
            {titulo: 'Noturno 01 Titulo 01'},
            {titulo: 'Noturno 02 Titulo 02'}
          ]
        }
      },

      {
        dia:5,
        perguntas: {
          integral: [
            {titulo: 'Integral 01 Titulo 01'},
            {titulo: 'Integral 02 Titulo 02'}
          ],
          noturno: [
            {titulo: 'Noturno 01 Titulo 01'},
            {titulo: 'Noturno 02 Titulo 02'}
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
        titulo: "",
        dia: 0
      }
    }

    this.toggleModalPergunta = this.toggleModalPergunta.bind(this)
    this.pegaFormulario = this.pegaFormulario.bind(this)
    this.trataTitulo = this.trataTitulo.bind(this)
  }

  toggleModalPergunta(event, dia) {
    event.stopPropagation()

    if(event.target.classList.contains('jsModal__toggle')) {
      this.setState({
        modal: {
          visivel: !this.state.modal.visivel
        },
        novaPergunta: {
          titulo: "",
          dia: dia
        }
      })
    }
  }

  pegaFormulario(event) {
    event.preventDefault();

    console.log(this.state.novaPergunta)
  }


  trataTitulo(event){

    let dia = this.state.novaPergunta.dia

    this.setState({
      novaPergunta: {
        titulo: event.target.value,
        dia: dia
      }
    })
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

        { this.state.modal.visivel && <Modal item={ this.state.modal } action={ this.pegaFormulario } trataTitulo={this.trataTitulo} novaPergunta={this.state.novaPergunta} fechaModal={ this.toggleModalPergunta } /> }
      </main>
    )
  }
}

export default Dashboard
