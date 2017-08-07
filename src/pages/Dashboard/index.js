import React, { Component } from 'react'
import Dia from '../../components/Dia/index'
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

    this.mostraConsole = this.mostraConsole.bind(this)
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

  mostraConsole() {
    console.log(this)
  }

  render () {
    return (
      <main className='pageDashboard'>
        <Dia numero='1º' perguntas={{
          integral: [],
          noturno: []
        }} handleMostraConsole={ this.mostraConsole }/>
        <Dia numero='2º' perguntas={this.state.perguntas} handleMostraConsole={ this.mostraConsole }/>
        <Dia numero='3º' perguntas={this.state.perguntas} handleMostraConsole={ this.mostraConsole }/>
        <Dia numero='4º' perguntas={this.state.perguntas} handleMostraConsole={ this.mostraConsole }/>
        <Dia numero='5º' perguntas={this.state.perguntas} handleMostraConsole={ this.mostraConsole }/>
        <Dia numero='6º' perguntas={this.state.perguntas} handleMostraConsole={ this.mostraConsole }/>
      </main>
    )
  }
}

export default Dashboard
