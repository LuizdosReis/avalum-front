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
        status: false,
        componente: (<div></div>)
      }
    }

    this.toggleModalPergunta = this.toggleModalPergunta.bind(this)
  }

  componentDidMount () {
    this.setState({
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
    })
  }

  toggleModalPergunta(event) {
    event.stopPropagation()

    if(event.target.classList.contains('modal__toggle')) {
      this.setState({
        modal: {
          status: !this.state.modal.status
        }
      })
    }
  }

  render () {
    return (
      <main className='pageDashboard'>
        <Dia numero='1º' perguntas={{
          integral: [],
          noturno: []
        }} mostraModalPergunta={ this.toggleModalPergunta }/>
        <Dia numero='2º' perguntas={this.state.perguntas} mostraModalPergunta={ this.toggleModalPergunta }/>
        <Dia numero='3º' perguntas={this.state.perguntas} mostraModalPergunta={ this.toggleModalPergunta }/>
        <Dia numero='4º' perguntas={this.state.perguntas} mostraModalPergunta={ this.toggleModalPergunta }/>
        <Dia numero='5º' perguntas={this.state.perguntas} mostraModalPergunta={ this.toggleModalPergunta }/>
        <Dia numero='6º' perguntas={this.state.perguntas} mostraModalPergunta={ this.toggleModalPergunta }/>
        { this.state.modal.status &&
          <Modal item={ this.state.modal } fechaModal={ this.toggleModalPergunta } /> }
      </main>
    )
  }
}

export default Dashboard
