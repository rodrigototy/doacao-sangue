document.getElementById('myForm').addEventListener('submit', function(event) {

    event.preventDefault();

    
    var nomeValue = document.getElementById('nome').value;
    var dataValue = document.getElementById('data').value;
    var mensagemValue = document.getElementById('mensagem').value;

    
    alert('Nome: ' + nomeValue + '\nData: ' + dataValue + '\nMensagem: ' + mensagemValue);
});
