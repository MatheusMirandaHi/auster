function redirecionar() {
    // Redireciona para a primeira página
    window.location.href = "austerplus.html";

    // Depois de 3 segundos, redireciona para a segunda página
    setTimeout(function() {
        window.location.href = "empresa.html";
    }, 3000); // 3000 milissegundos = 3 segundos 
}

// Exibir o aviso de cookies após o carregamento da página
window.onload = function() {
    setTimeout(function() {
        document.querySelector('.cookie-card').classList.add('show');
    }, 3000); // Exibe o aviso após 1ms
};

// Ação para o botão "Aceitar todos os cookies"
document.getElementById('accept-btn').addEventListener('click', function() {
    document.getElementById('cookie-container').style.display = 'none'; // Esconde o aviso
});


