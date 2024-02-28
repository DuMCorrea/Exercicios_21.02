const pessoas = [
    { nome: "Bruna", vezesCodou: 0 },
    { nome: "Daniela", vezesCodou: 0 },
    { nome: "Eduardo", vezesCodou: 0 },
    { nome: "Franklyn", vezesCodou: 0 },
    { nome: "George", vezesCodou: 0 },
    { nome: "Gian", vezesCodou: 0 },
    { nome: "Guilherme Barcelos", vezesCodou: 0 },
    { nome: "Joao Luft", vezesCodou: 0 },
    { nome: "Joao Krampe", vezesCodou: 0 },
    { nome: "Murilo", vezesCodou: 0 },
    { nome: "Pedro", vezesCodou: 0 },
    { nome: "Raul", vezesCodou: 0 },
    { nome: "Victor", vezesCodou: 0 },
    { nome: "Guilherme Filheiro", vezesCodou: 0 },
    { nome: "Julia", vezesCodou: 0 }
  ];
  
  const sorteios = [];
  
  const sortearProximo = () => {
    const pessoasNaoSorteadas = pessoas.filter(pessoa => !sorteios.includes(pessoa.nome));
    if (pessoasNaoSorteadas.length === 0) {
      sorteios.length = 0; 
    }
  
    const indexSorteado = Math.floor(Math.random() * pessoasNaoSorteadas.length);
    const pessoaSorteada = pessoasNaoSorteadas[indexSorteado];
    pessoaSorteada.vezesCodou++;
  
    sorteios.push(pessoaSorteada.nome);
  
    atualizarListaPessoas();
  };
  
  const atualizarListaPessoas = () => {
    const lista = document.getElementById('pessoasList');
    lista.innerHTML = '';
    pessoas.forEach(pessoa => {
      const listItem = document.createElement('li');
      listItem.textContent = `${pessoa.nome} - Codou ${pessoa.vezesCodou} vezes`;
      lista.appendChild(listItem);
    });
  };
  
  document.getElementById('sortearBtn').addEventListener('click', sortearProximo);
  
  atualizarListaPessoas();