export class DashboardService {

  static listaDias() {
    return dispatch => {
      fetch('http://localhost:8080/dias/')
        .then( res => res.json() )
        .then( dias => {
          dispatch({ type:'LISTAR_DIAS', dias })
          return dias
        })
    }
  }

}
