import React, { Component } from 'react'
import Dia from "../../components/Dia/index";
import './Dashboard.css'

class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            perguntas: { integral:[], noturno: []}
        }
    }

    componentDidMount() {
        this.setState({
            perguntas: {
                integral: [
                    {titulo: 'Integral 01 Titulo 01'},
                    {titulo: 'Integral 02 Titulo 02'},
                ],
                noturno: [
                    {titulo: 'Noturno 01 Titulo 01'},
                    {titulo: 'Noturno 02 Titulo 02'},
                ]
            }
        })
    }

    render() {
        return (
            <main className="pageDashboard">
                <button onClick={ () => {
                        this.setState({
                            perguntas: { }
                        })
                    }}>
                    Clean
                </button>
                <Dia numero="1º" perguntas={this.state.perguntas} />
                <Dia numero="2º" perguntas={this.state.perguntas} />
                <Dia numero="3º" perguntas={this.state.perguntas} />
                <Dia numero="4º" perguntas={this.state.perguntas} />
                <Dia numero="5º" perguntas={this.state.perguntas} />
                <Dia numero="6º" perguntas={this.state.perguntas} />
            </main>
        )
    }
}

export default Dashboard
