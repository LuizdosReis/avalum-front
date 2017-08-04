import React, { Component } from 'react'
import Dia from '../../components/Dia'

class Dashboard extends Component {
    render() {
        const perguntas = {


            integral: [
                {titulo: 'Integral 01 Titulo 01'},
                {titulo: 'Integral 02 Titulo 02'},
            ]
            ,
            noturno: [
                {titulo: 'Noturno 01 Titulo 01'},
                {titulo: 'Noturno 02 Titulo 02'},
            ]
            ,

    }
        return ( 
            <main>
                <Dia numero="1º" perguntas={perguntas} />
                <Dia numero="2º" perguntas={perguntas} />
                <Dia numero="3º" perguntas={perguntas} />
                <Dia numero="4º" perguntas={perguntas} />
                <Dia numero="5º" perguntas={perguntas} />
                <Dia numero="6º" perguntas={perguntas} />
            </main>
        )
    }
}

export default Dashboard
