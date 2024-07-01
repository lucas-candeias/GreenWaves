async function buscaCep() {
    var cep = document.getElementById('cep').value
    try {
        const url = `https://viacep.com.br/ws/${cep}/json/`
        const response = await fetch(url)
        const data = await response.json()
        document.getElementById("adress").value = data.logradouro
        document.getElementById("uf").value = data.uf
    } catch (err) {
        console.log('ERROR: api_viacep');
    }
}

$(document).ready(function(){
$('#telefone').mask('(00) 0000-0000');
});

$(document).ready(function(){
    $('#celular').mask('(00) 00000-0000');
    });

    $(document).ready(function(){
        $('#cep').mask('00000-000');
        });

