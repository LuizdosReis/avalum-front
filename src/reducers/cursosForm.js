export function cursosForm(state = [], action) {

  if (action.type === 'LISTA_CURSOS') {
    return action.cursos
  }

  return state
}
