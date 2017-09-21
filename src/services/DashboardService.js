export class DashboardService {

  static listaDias() {
    return dispatch => {
      fetch('http://localhost:8080/dias/')
        .then(res => res.json())
        .then(dias => {
          dispatch({type: 'LISTAR_DIAS', dias})
          return dias
        })
    }
  }

  static salva(pergunta, diasAtuais) {
    return dispatch => {
      const request = {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(pergunta)
      };

      fetch("http://localhost:8080/perguntas/", request)
        .then(res => {
          if (res.status !== 201) throw new Error()
          return res
        })
        .then(res => res.json())
        .then(pergunta => {
          dispatch({type: 'SALVAR_PERGUNTA', pergunta})
          return pergunta
        })
        .catch(err => console.error(err))
    }
  }

}
