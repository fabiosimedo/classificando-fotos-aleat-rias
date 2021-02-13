//  'https://randomuser.me/api/portraits/men/82.jpg'
const random = Math.floor((Math.random() * 99) + 1);
const perguntas = [
  'Conhece essa pessoa?', 'Aceita convite no Facebook?',
  'Responde mensagem no messenger?', 'Autoriza te seguir no instagram?',
  'Aceita solicitação de mensagem no DM?', 'Reage a comentário em post?', 
  'Responde no WattsApp?', 'Salva contato na agenda?', 
  'Abre foto enviada no WattsApp?', 'Assiste history no WattsApp?',
  'Manda \'oi\' no WattsApp?', 'Responde \'oi\' no Watts App?', 'Bloqueia em todas redes?'
      ],
      respostasPositivas = [],
      respostasNegativas = [],
      respostasTotais = [],
      resultados = [],
      h6 = document.querySelector('h6'),
      ul = document.querySelector('ul'),
      prox = document.getElementById('prox'),
      prox2 = document.getElementById('prox2');
      
const input = document.querySelector('#input');
const btnNao = document.querySelector('#nao');
const btnSim = document.querySelector('#sim');



prox.addEventListener('click', (e) => {
  h6.innerText = 'Reponda essas questões';
  h6.classList.add('pb-2');
  
  prox.setAttribute('style', 'display: none;');
  prox2.setAttribute('style', 'display: none;');
  
  const question = document.querySelector('#imgDisplay');
  question.classList.remove('bg-danger');
  question.innerHTML = `
  <img src="https://randomuser.me/api/portraits/men/${random}.jpg">
  <p>Para trocar a foto clique na foto</p>`
  ;
  
  setTimeout(() => {
    h6.innerText = 'Podemos continuar?';
    input.style.cssText = 'display: inline-block;'
  }, 4000)  
  e.preventDefault();
})      


prox2.addEventListener('click', (e) => {
  h6.innerText = 'Reponda essas questões';
  h6.classList.add('pb-2');
  
  prox2.setAttribute('style', 'display: none;');
  prox.setAttribute('style', 'display: none;');
  
  const question = document.querySelector('#imgDisplay');
  question.classList.remove('bg-danger');
  question.innerHTML = 
  `<img src='https://randomuser.me/api/portraits/women/${random}.jpg' alt='pessoas'>
  <div><p>Para trocar a pessoa clique na foto</p></div>
  `;
  
  setTimeout(() => {
    h6.innerText = 'Podemos continuar?';
    input.style.cssText = 'display: inline-block;'
  }, 4000)
  e.preventDefault();
})


input.addEventListener('click', () => {
  ul.setAttribute('style', 'visibility: visible;list-style: none;');
  input.style.cssText = 'display: none;'
  h6.classList.remove('bg-warning');
  h6.innerText = perguntas.shift();
  
})

btnSim.addEventListener('click', (e) => {

  respostasPositivas.unshift(e.target.textContent);
  respostasTotais.unshift(e.target.textContent);
  
  e.target.setAttribute('style', 'visibility: hidden;');
  btnNao.setAttribute('style', 'visibility: hidden;');
  h6.classList.add('bg-success', 'text-light');
  
  document.getElementById('resultados').innerHTML = `
  <div class="alert alert-success" role="alert">
  <h3>${e.target.textContent}</h3>
  </div>
  `; 
  
  let id = respostasTotais.length;
  const dados = new Respostas(id, h6.innerText, e.target.textContent);
  dados.logDados(resultados);

  setTimeout(() => {
    btnSim.setAttribute('style', 'visibility: visible;');
    btnNao.setAttribute('style', 'visibility: visible;');
    h6.classList.remove('bg-danger', 'text-light', 'bg-success');
    
    document.getElementById('resultados').innerHTML = '';
    
    h6.innerText = perguntasFunction(perguntas);
    
  }, 3000);

  resultadosPesquisa();

  e.preventDefault()
})

btnNao.addEventListener('click', (e) => {
  
  respostasNegativas.unshift(e.target.textContent);
  respostasTotais.unshift(e.target.textContent);

  e.target.setAttribute('style', 'visibility: hidden;');
  btnSim.setAttribute('style', 'visibility: hidden;');
  h6.classList.add('bg-danger', 'text-light');

  document.getElementById('resultados').innerHTML = `
  <div class="alert alert-warning" role="alert">
    <h3>${e.target.textContent}</h3>
  </div>
  `; 

  let id = respostasTotais.length;
  const dados = new Respostas(id, h6.innerText, e.target.textContent);
  dados.logDados(resultados);

  setTimeout(() => {
    btnSim.setAttribute('style', 'visibility: visible;');
    btnNao.setAttribute('style', 'visibility: visible;');
    h6.classList.remove('bg-danger', 'text-light', 'bg-danger');

    document.getElementById('resultados').innerHTML = '';
        
    h6.innerText = perguntasFunction(perguntas);
    
  }, 3000);

  resultadosPesquisa();

  e.preventDefault();
})

const perguntasFunction = perguntas => perguntas.shift()

function resultadosPesquisa() {
  if(respostasNegativas.length < respostasPositivas.length && perguntas.length === 0) {
    const mens1 = document.querySelector('#perfilDisplay')
    mens1.innerHTML = `
    <div class="alert alert-success" role="alert">
      <h3>Reação amigável</h3>
      Clique na foto e tente de novo!
    </div>
    `; 
  }

  if(respostasPositivas.length < respostasNegativas.length && perguntas.length === 0) {
    const mens1 = document.querySelector('#perfilDisplay')
    mens1.innerHTML = `
    <div class="alert alert-warning" role="alert">
      <h3>Reação cautelosa</h3>
      Clique na foto e tente de novo!
    </div>
    `; 
  }
}

document.querySelector('#imgDisplay')
  .addEventListener('click', () => window.location.reload());