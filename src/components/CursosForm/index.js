import React, {Component} from 'react'

class CursosForm extends Component {

  constructor() {
    super()
    this.state = {cursos: []}

  }

  componentDidMount() {
    fetch('http://localhost:8080/cursos/' + this.props.pergunta.periodo + '?dia=' + this.props.pergunta.dia)
      .then(res => res.json())
      .then(cursos => this.setState({cursos}))
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
