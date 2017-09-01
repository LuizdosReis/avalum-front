export class DashboardService {

  static listaDias(store) {
    fetch('http://localhost:8080/dias/')
      .then( res => res.json() )
      .then( dias => {
        store.dispatch({ type:'LISTAR_DIAS', dias })
      })
  }

}
