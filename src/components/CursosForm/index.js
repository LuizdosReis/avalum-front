import React, {Component} from 'react'
import {CursosService} from "../../services/CursosService";

class CursosForm extends Component {

  constructor() {
    super()
    this.state = {cursos: []}

  }

  componentDidMount() {
    this.props.store.dispatch(CursosService.listaCursos(this.props.pergunta.periodo, this.props.pergunta.dia))
  }

  componentWillMount() {
    this.props.store.subscribe(() => {
      this.setState({cursos: this.props.store.getState().cursosForm})
    })
  }

  render() {
    return (
      <div>
        {
          this.state.cursos.map(curso => {
            return (
              <label key={curso}>
                <input type="checkbox"/>
                {curso}
              </label>

            )
          })
        }
      </div>
    )
  }
}

export default CursosForm
