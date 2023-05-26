import {
    User
} from "../../shared/user.js";

import {
    showMain
} from "./script.js";


const aLog = document.querySelector('#tab-login')
const aReg = document.querySelector('#tab-register')
const divLog = document.querySelector('#pills-login')
const divReg = document.querySelector('#pills-register')

// robocza zmienna do ukrycia form
const divCont = document.querySelector('.div-container');

const loginForm = document.querySelector('#loginForm');
const signUpForm = document.querySelector('#signUpForm');
let userId = 'non-empty-string';

export const returnUserId = () => {
    return userId
}

const logRegToggler = () => {
    loginForm.reset();
    signUpForm.reset();

    if (!aLog.classList.contains("active")) {
        aLog.classList.add('active')
        aReg.classList.remove('active')

        divLog.classList.add('active')
        divReg.classList.remove('active')
    } else if (!aReg.classList.contains("active")) {
        aReg.classList.add('active')
        aLog.classList.remove('active')

        divLog.classList.remove('active')
        divReg.classList.add('active', 'show')
    } else {
        return
    }
}

const firebaseLogin = (login, password) => {
    firebase.auth().signInWithEmailAndPassword(login, password)
        .then(response => {
            divCont.setAttribute('style', 'display: none;');
            showMain()
            localStorage.setItem('email', login);
            localStorage.setItem('password', password)
            return userId = response.user.uid;
        })
        .catch(err => {
            console.log(err)
            alert('Wystąpił błąd podczas procesu logowania')
        });
}

document.addEventListener('DOMContentLoaded', () => {
    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');
    if (savedEmail !== undefined && savedPassword !== undefined) {
        // console.log(savedEmail, savedPassword)
        firebaseLogin(savedEmail, savedPassword)
    }
});

aLog.addEventListener('click', () => {
    logRegToggler()
})

aReg.addEventListener('click', () => {
    logRegToggler()
})

loginForm.addEventListener('submit', e => {
    e.preventDefault();

    const inputEmail = document.querySelector('#loginName').value;
    const inputPassword = document.querySelector('#loginPassword').value;
    const user = new User(inputEmail, inputPassword);

    firebaseLogin(user.login, user.password)
});

signUpForm.addEventListener('submit', e => {
    e.preventDefault();

    const email = document.querySelector('#registerEmail').value;
    const password = document.querySelector('#registerPassword').value;
    const repeatPassword = document.querySelector('#registerRepeatPassword').value;

    if (password === repeatPassword) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(userCredential => {
                const user = userCredential.user;
                signUpForm.reset();
                logRegToggler();

            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error('Błąd podczas tworzenia konta:', errorCode, errorMessage);
            });
    }
})