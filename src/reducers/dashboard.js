const initialState = {
  modal: {},
  dias: []
}

export function dashboard(state = initialState, action) {
  if (action.type === 'LISTAR_DIAS') {
    state.dias = action.dias
    return state
  }

  if (action.type === 'SALVAR_PERGUNTA') {
    let dia = state.dias.find(dia => dia.numeroDia === action.pergunta.dia);
    if (dia.periodoPerguntas[action.pergunta.periodo])
      dia.periodoPerguntas[action.pergunta.periodo].push(action.pergunta)
    else {
      let periodo = action.pergunta.periodo
      dia.periodoPerguntas[periodo] = [action.pergunta]
    }
    state.modal = !state.modal
    return state
  }

  return state
}
