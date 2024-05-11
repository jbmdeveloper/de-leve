document.getElementById('formSorteio').addEventListener('submit', function(e) {
    e.preventDefault();

    const numeroJogadores = parseInt(document.getElementById('numeroJogadores').value);

    if (numeroJogadores <= 0 || isNaN(numeroJogadores)) {
        alert('Por favor, insira um número válido de jogadores.');
        return;
    }

    const realizarSorteioBtn = document.getElementById('realizarSorteioBtn');
    realizarSorteioBtn.setAttribute('disabled', 'disabled');
    const loading = document.getElementById('loading');
    loading.style.display = 'block';

    setTimeout(() => {
        const ganhador = Math.floor(Math.random() * numeroJogadores) + 1;
        document.getElementById('resultadoSorteio').innerHTML = `Quem vira o shot é o N° ${ganhador} 🍺`;
        realizarSorteioBtn.removeAttribute('disabled');
        loading.style.display = 'none';
    }, 3000);
});


 // Função para mostrar o popup
function mostrarPopup() {
    document.getElementById("meuPopup").style.display = "block";
}

// Função para fechar o popup
function fecharPopup() {
    document.getElementById("meuPopup").style.display = "none";
}