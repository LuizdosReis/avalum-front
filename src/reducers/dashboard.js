export function dashboard(state=[], action) {
  if (action.type === 'LISTAR_DIAS') {
    return action.dias
  }

  return state
}
