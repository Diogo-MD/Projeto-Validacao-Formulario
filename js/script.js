document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    const nomeUsuarioInput = document.getElementById('nomeusuario');
    const nomeEmailInput = document.getElementById('nomeEmail');
    const erroNomeElement = document.getElementById('erroNome');
    const erroEmailElement = document.getElementById('erroEmail');

    form.addEventListener('submit', function (event) {
        if (nomeUsuarioInput.value.trim() === '') {
            event.preventDefault();
            erroNomeElement.style.display = 'block';
        } else {
            erroNomeElement.style.display = 'none'
        }

        if (nomeEmailInput.value.trim() === '') {
            event.preventDefault();
            erroEmailElement.style.display = 'block'
        } else {
            erroEmailElement.style.display = 'none'
        }

        const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
        if (!emailRegex.test(nomeEmailInput.value.trim())) {
            event.preventDefault();
            erroEmailElement.style.display = 'block';
        } else {
            erroEmailElement.style.display = 'none';
        }

        if (erroNomeElement.style.display === 'none' && erroEmailElement.style.display === 'none') {
            alert("Parabéns! A validação do nome e e-mail foi um sucesso.");
        }
    });
});