class User {
    constructor(login, password) {
        this.login = login,
            this.password = password
    }
}

const logForm = document.querySelector('.logForm');

logForm.addEventListener('submit', e => {
    e.preventDefault();

    const inputEmail = document.getElementById('inputEmail').value;
    const inputPassword = document.getElementById('inputPassword').value;
    const user = new User(inputEmail, inputPassword);

    firebase.auth().signInWithEmailAndPassword(user.login, user.password)
        .then(response => {
            logForm.setAttribute('style', 'display: none;');
            console.log('response', response)
        })
        .catch(err => {
            alert('Wystąpił błąd podczas procesu logowania')
        });
})