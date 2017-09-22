const initialState = {
  modal: {visivel:false, pergunta:{}, tipoModal: ""},
  dias: []
}

export function dashboard(state = initialState, action) {

  switch (action.type) {

    case 'LISTAR_DIAS':
      state.dias = action.dias
      return state

    case 'SALVAR_PERGUNTA':
      let dia = state.dias.find(dia => dia.numeroDia === action.pergunta.dia);
      if (dia.periodoPerguntas[action.pergunta.periodo])
        dia.periodoPerguntas[action.pergunta.periodo].push(action.pergunta)
      else {
        let periodo = action.pergunta.periodo
        dia.periodoPerguntas[periodo] = [action.pergunta]
      }
      state.modal.visivel = !state.modal.visivel
      return state

    case 'EXIBIR_PERGUNTA':
      state.modal.visivel = true
      state.modal.pergunta = action.pergunta
      state.modal.tipoModal = "PERGUNTA"
      return state

    case 'TOOGLE_MODAL_PERGUNTA':
      state.modal.visivel = !state.modal.visivel
      state.modal.pergunta = {
        enunciado: "",
        dia: action.dia,
        tipoResposta: "",
        respostas: [],
        periodo: ""
      }
      state.modal.tipoModal = "PERGUNTA"
      return state

    case 'MOSTRA_MODAL_CURSOS':
      state.modal.visivel = true
      state.modal.pergunta = action.pergunta
      state.modal.tipoModal = 'CURSOS'
      return state

    default:
      return state

  }

}
