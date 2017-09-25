export function listaDias(dias) {
  return {type: 'LISTAR_DIAS', dias}
}

export function salvaPergunta(pergunta) {
  return {type: 'SALVAR_PERGUNTA', pergunta}
}

export function exibePergunta(pergunta) {
  return {type: 'EXIBIR_PERGUNTA', pergunta}
}

export function toggleModalPergunta(dia) {
  return {type: 'TOOGLE_MODAL_PERGUNTA', dia}
}

export function mostraModalCursos(pergunta){
  return {type: 'MOSTRA_MODAL_CURSOS', pergunta}
}
