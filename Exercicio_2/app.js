document.getElementById('calcularBtn').addEventListener('click', function() {
    const instrucoes = document.getElementById('instrucoesInput').value.trim().toLowerCase().split(', ');
  
    const ponto = { x: 0, y: 0 };
  
    instrucoes.forEach(instrucao => {
      switch(instrucao) {
        case 'norte':
          ponto.y++;
          break;
        case 'sul':
          ponto.y--;
          break;
        case 'leste':
          ponto.x++;
          break;
        case 'oeste':
          ponto.x--;
          break;
        default:
          console.log('Instrução inválida');
      }
    });
  
    const resultado = document.getElementById('resultado');
    resultado.textContent = `Posição final: (${ponto.x}, ${ponto.y})`;
  });