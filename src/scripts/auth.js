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
let userId = 'non-empty-string';

export const returnUserId = () => {
    return userId
}

const logRegToggler = () => {
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

    firebase.auth().signInWithEmailAndPassword(user.login, user.password)
        .then(response => {
            divCont.setAttribute('style', 'display: none;');
            showMain()
            return userId = response.user.uid;
        })
        .catch(err => {
            console.log(err)
            alert('Wystąpił błąd podczas procesu logowania')
        });
});