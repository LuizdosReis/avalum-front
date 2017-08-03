import React, { Component } from 'react'
import Dia from '../../components/Dia'

class Dashboard extends Component {
    render() {
        const perguntas = [
            {titulo: 'Titulo 01'},
            {titulo: 'Titulo 02'},
        ]
        return ( 
            <main>
                <Dia numero="1º" perguntas={perguntas} />
            </main>   
        )
    }
}

export default Dashboard
