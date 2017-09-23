import {listaCursos} from '../actions/actionCreator'

export class CursosService {

  static listaCursos(periodo, dia) {
    return dispatch => {
      fetch('http://localhost:8080/cursos/' + periodo + '?dia=' + dia)
        .then(res => res.json())
        .then(cursos => {
          dispatch(listaCursos(cursos))
          return cursos
        })
    }
  }
}
