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

  static exibePergunta(pergunta) {
    return dispatch => {
      dispatch({type: 'EXIBIR_PERGUNTA', pergunta})
    }
  }

  static toggleModalPergunta(dia) {
    return dispatch => {
      dispatch({type: 'TOOGLE_MODAL_PERGUNTA', dia})
    }
  }

}
