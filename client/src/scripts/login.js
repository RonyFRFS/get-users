const email = document.querySelector('input[type="email"]');
const password = document.querySelector('input[type="password"]');
const button = document.querySelector('button');
const checkbox = document.querySelector('input[type="checkbox"]');
const labelPassword = document.querySelector('#label-password');

button.addEventListener('click', (event) => {
    event.preventDefault();

    const emailValue = email.value;
    const passwordValue = password.value;

    if (!emailValue || !passwordValue) {
        alert('Preencha todos os campos.');
        return;
    }

    if (
        emailValue !== sessionStorage.getItem('email') ||
        passwordValue !== sessionStorage.getItem('password')
    ) {
        alert('E-mail e/ou senha incorreto.');
        return;
    }

    alert('Acesso permitido.');

});


checkbox.addEventListener('change', () => {
    const type = password.getAttribute('type');

    if (type === 'password') {
        return password.setAttribute('type', 'text');
        labelPassword.textContent = 'Ocultar Senha';
        return;
    }

    password.setAttribute('type', 'password');
    labelPassword.textContent = 'Mostrar Senha';


})