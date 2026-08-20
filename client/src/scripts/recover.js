const email = document.querySelector('input[type="email"]');
const newPassword = document.querySelector('#new-password');
const confirmNewPassword = document.querySelector('#confirm-new-password');
const button = document.querySelector('button');
const labelPasswordRecover = document.querySelector('#label-password-recover');
const checkbox = document.querySelector('input[type="checkbox"]');

button.addEventListener('click', (event) => {
    event.preventDefault();

    const emailValue = email.value;
    const newPasswordValue = newPassword.value;
    const confirmNewPasswordValue = confirmNewPassword.value;

    if (

        !emailValue ||
        !newPasswordValue ||
        !confirmNewPasswordValue
    ) return alert('Preencha todos os campos');

    if (emailValue !== sessionStorage.getItem('email'))
        return alert('Email não registrado');

    if (newPasswordValue !== confirmNewPasswordValue)
        return alert("As senhas nao coincidem, tente novamente!")

    sessionStorage.setItem('password , newPasswordValue');

    alert('Senha atualizada com sucesso.')

    window.location.href = 'login.html'
});

checkbox.addEventListener('change', () => {
    const typeRecover1 = newPassword.getAttribute('type');
    const typeRecover2 = confirmNewPassword.getAttribute('type');

    if (typeRecover1 === 'password') {
        newPassword.setAttribute('type', 'text');
    
    }

    if (typeRecover2 === 'password') {
        confirmNewPassword.setAttribute('type', 'text')
        return;
    }

    newPassword.setAttribute('type', 'password')
    confirmNewPassword.setAttribute('type', 'password')

});