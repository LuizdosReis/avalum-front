import React, {Component} from 'react'

class CursosForm extends Component {

  render() {
    return (
      <div>
        {
          this.props.getCursosDisponiveis(this.props.pergunta.periodo, this.props.pergunta.dia).map(curso => {
            return (
              <label key={curso}>
                <input type="checkbox" value={curso}/>
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
