//  'https://randomuser.me/api/portraits/men/82.jpg'
const random = Math.floor((Math.random() * 99) + 1);
const men = 'men',
      woman = 'woman';


const perfis = iteraror(dados);

// primeiro perfil começa na tela
proxPerfil();


//proximo evento
document.getElementById('prox').addEventListener('click', proxPerfil);
function proxPerfil() {
  const perfilAtual = perfis.prox().value;
  if(perfilAtual !== undefined) {
    document.getElementById('perfilDisplay').innerHTML =
    `<ul class="list-group">
      <li class="list-group-item">Nome: ${perfilAtual.nome}</li>
      <li class="list-group-item">Idade: ${perfilAtual.idade}</li>
      <li class="list-group-item">Local: ${perfilAtual.local}</li>
      <li class="list-group-item">Gênero: ${perfilAtual.genero} procura por ${perfilAtual.procura}</li>
    </ul>
    `;

    document.getElementById('imgDisplay').innerHTML = 
    `<img src='${perfilAtual.image}'>`;
  } else {
      //sem mais perfis basta recarregar a pagina
      window.location.reload();
  }
}

// iterator perfil

function iteraror(perfis) {
  let proxIndice = 0;

  return {
    prox: function() {
      return proxIndice < perfis.length ? {value: perfis[proxIndice++],done: false} : {done: true};
      
    }
  }
}