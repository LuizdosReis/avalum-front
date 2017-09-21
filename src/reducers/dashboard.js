export function dashboard(state = [], action) {
  if (action.type === 'LISTAR_DIAS') return action.dias

  if (action.type === 'SALVAR_PERGUNTA') {
    let dia = state.find(dia => dia.numeroDia === action.pergunta.dia);
    if (dia.periodoPerguntas[action.pergunta.periodo])
      dia.periodoPerguntas[action.pergunta.periodo].push(action.pergunta)
    else {
      let periodo = action.pergunta.periodo
      dia.periodoPerguntas[periodo] = [action.pergunta]
    }

    return state
  }

  return state
}
