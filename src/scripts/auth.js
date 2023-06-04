import {
    User
} from "../../shared/user.js";

import {
    hideMain,
    addActiveShowClasses,
    addToList
} from "./script.js";

import { getData } from "./database.js";


const aLog = document.querySelector('#tab-login');
const aReg = document.querySelector('#tab-register');
const divLog = document.querySelector('#pills-login');
const divReg = document.querySelector('#pills-register');

const divCont = document.querySelector('.ul-container');

const loginForm = document.querySelector('#login-form');
const signUpForm = document.querySelector('#sign-up-form');
const logoutBtn = document.querySelector('#logout-btn');

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

const firebaseLogin =  (login, password) => {
    firebase.auth().signInWithEmailAndPassword(login, password)
        .then(response => {
            const main = document.querySelector('main');
            showList()
            setUserInStorage(login, password);      
            showLogoutBtn();
            addActiveShowClasses(main);
            return userId = response.user.uid;
        })
        .catch(err => {
            console.log(err)
            alert('Wystąpił błąd podczas procesu logowania')
        });
}

const showList = () => {
    divCont.classList.toggle('d-none');
}

const showLogoutBtn = () => {
    logoutBtn.classList.toggle('d-none');
}

const setUserInStorage = ((email, password) => {
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
})

const handleLogout = () => {
    firebase.auth().signOut().then(() => {
        clearLocalStorage();
        showLogForm();
    }).catch(function (error) {
        console.log('Błąd podczas wylogowywania z Firebase:', error);
    });
}

const clearLocalStorage = () => {
    localStorage.clear();
}

const showLogForm = () => {
    divCont.classList.toggle('d-none');
}

document.addEventListener('DOMContentLoaded', () => {
    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');
    if (savedEmail !== undefined && savedEmail !== null && savedPassword !== undefined && savedPassword !== null) {
        firebaseLogin(savedEmail, savedPassword)
    } else {
        return
    }
});
document.addEventListener('DOMContentLoaded', function () {
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

    logoutBtn.addEventListener('click', e => {
        e.preventDefault();
        handleLogout();
        hideMain();
        logoutBtn.classList.toggle('d-none');
    })
});






// module.exports = returnUserId