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
      }
    }

    this.mostraModalPergunta = this.mostraModalPergunta.bind(this)
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

  mostraModalPergunta() {
  }

  render () {
    return (
      <main className='pageDashboard'>
        <Dia numero='1º' perguntas={{
          integral: [],
          noturno: []
        }} mostraModalPergunta={ this.mostraModalPergunta }/>
        <Dia numero='2º' perguntas={this.state.perguntas} mostraModalPergunta={ this.mostraModalPergunta }/>
        <Dia numero='3º' perguntas={this.state.perguntas} mostraModalPergunta={ this.mostraModalPergunta }/>
        <Dia numero='4º' perguntas={this.state.perguntas} mostraModalPergunta={ this.mostraModalPergunta }/>
        <Dia numero='5º' perguntas={this.state.perguntas} mostraModalPergunta={ this.mostraModalPergunta }/>
        <Dia numero='6º' perguntas={this.state.perguntas} mostraModalPergunta={ this.mostraModalPergunta }/>
        { false && <Modal/> }
      </main>
    )
  }
}

export default Dashboard
