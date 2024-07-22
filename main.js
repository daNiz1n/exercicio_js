document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    // Evita o envio do formulário
    event.preventDefault();
    
    // Obtém os valores dos campos de entrada
    const numeroA = parseFloat(document.getElementById('numeroA').value);
    const numeroB = parseFloat(document.getElementById('numeroB').value);
    
    // Seleciona o elemento para exibir mensagens de erro
    const mensagemErro = document.getElementById('mensagemErro');
    
    // Verifica se B é maior que A
    if (numeroB > numeroA) {
        mensagemErro.textContent = '';
        alert('Formulário enviado com sucesso!');
        // Aqui você pode enviar o formulário se necessário
        // this.submit();
    } else {
        mensagemErro.textContent = 'Erro: O número B deve ser maior que o número A.';
    }
});