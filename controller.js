// Obtém o elemento do formulário HTML com o ID 'form'
const form = document.getElementById('form');
// Adiciona um ouvinte de evento para o evento de 'submit' do formulário
form.addEventListener('submit', function(event) {

    // Previne o comportamento padrão do formulário, que seria recarregar a página
    event.preventDefault();

    // Obtém os valores dos campos de peso e altura do formulário
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    // Calcula o IMC e arredonda para duas casas decimais
    const bmi = (weight / (height * height)).toFixed(2);

     // Verifica se o valor do IMC é um número válido
    if (!isNaN(bmi)) {
        // Obtém o elemento HTML onde o valor do IMC será exibido
        const value = document.getElementById('value');
        let description = '';

        // Exibe o valor calculado do IMC no elemento HTML
        value.textContent = bmi;

        // Adiciona uma classe de estilo ao elemento, destacando-o
        value.classList.add('attention');
        
        // Exibe a seção de informações que estava oculta
        document.getElementById('infos').classList.remove('hidden');
    
        // Verifica a faixa do IMC e define a descrição apropriada
        if (bmi < 18.5){
            description = 'Cuidado! Você está abaixo do peso!';

            // Exibe a descrição correspondente à faixa do IMC
            document.getElementById('description').textContent = description;
        } 

         // Se o IMC estiver dentro da faixa de peso ideal
        else if (bmi >= 18.5 && bmi <= 25) {
            description = "Você está no peso ideal!";
            // Remove a classe 'attention' e adiciona 'normal'
            value.classList.remove('attention');
            value.classList.add('normal');

            document.getElementById('description').textContent = description;
        }

        // Se o IMC indicar sobrepeso
        else if (bmi > 25 && bmi <= 30) {
            description = "Cuidado! Você está com sobrepeso!";

            document.getElementById('description').textContent = description;

        }
    }
});

// Adiciona um ouvinte de evento para detectar quando uma tecla é pressionada no formulário
form.addEventListener('keypress', function(event) {
    // Se a tecla pressionada for 'Enter'
    if (event.key === 'Enter') {
        // Simula um clique no botão de calcular
        document.getElementById('calculate').click();
    }
});
