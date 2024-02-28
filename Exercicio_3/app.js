document.getElementById('avaliarBtn').addEventListener('click', function() {
    const expressao = document.getElementById('expressaoInput').value.trim();
    const resultado = avaliarExpressaoPosFixa(expressao);
    document.getElementById('resultado').textContent = `Resultado: ${resultado}`;
  });
  
  function avaliarExpressaoPosFixa(expressao) {
    const pilha = [];
    const tokens = expressao.split(' ');
  
    tokens.forEach(token => {
      if (!isNaN(token)) { 
        pilha.push(parseFloat(token));
      } else { 
        const operand2 = pilha.pop();
        const operand1 = pilha.pop();
        switch(token) {
          case '+':
            pilha.push(operand1 + operand2);
            break;
          case '-':
            pilha.push(operand1 - operand2);
            break;
          case '*':
            pilha.push(operand1 * operand2);
            break;
          case '/':
            pilha.push(operand1 / operand2);
            break;
          default:
            console.log('Operador inválido');
        }
      }
    });
  
    return pilha.pop(); 
  }