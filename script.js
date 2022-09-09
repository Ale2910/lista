
// Declarando variáveis
const txt = window.document.getElementById('txt')
const res = window.document.getElementById('res')
const rad = window.document.getElementsByName('rad')

const buttons = {
  add: window.document.getElementById('add'),
  limpar: window.document.getElementById('limpar')
}

let augusto = []


// Configurando os botões
buttons.add.addEventListener('click', adicionar)
buttons.limpar.addEventListener('click', limpar)


// Funções
function adicionar() {
 
  // Verificando se o input está vazio
  if(txt.value.length === 0) {
    return window.alert('Não dá pra adicionar vento na lista')
  }
 
 
  // Declarando o texto em minúsculo
  const lowerTxt = txt.value.toLowerCase()
  
  
  // Se não pode repetir
  if(rad[1].checked) {
    
    // Verificando se o item já está na lista 
    if(augusto.includes(lowerTxt)) {
    return window.alert(`\"${txt.value}\" já está na lista!`)
  }
  }
  
  // Limpando a div
  res.innerHTML = ''
  
  // Adicionando o texto na lista
  augusto.push(lowerTxt)
  
  
  // Colocando os textos na div
  res.innerHTML += `${txt.value} <br>`
}


function limpar() {
  
  // Limpando a div e a lista
  res.innerHTML = 'Limpo! 🗑️'
  
  augusto = []
}
