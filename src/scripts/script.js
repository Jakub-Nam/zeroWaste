import {
    setData,
    getData,
    deleteDoc
} from "./database.js";
import {
    returnUserId
} from "./auth.js"

const addBtn = document.querySelector('.addBtn');
const foodInput = document.querySelector('input[name="inputFood"]');
const ulEle = document.querySelector('section ul');

// const main = document.querySelector('main')

export const addToList = (foodObjcs) => {
    clearElement(ulEle);
    foodObjcs.then((arr) => {
        for (let i = 0; i < arr.length; i++) {
            ulEle.innerHTML += `
            <li class="d-flex align-items-center justify-content-between py-1 px-5" data-id=${arr[i].docId}>
                <div class="mx-5">${arr[i].nameFood}</div>
                <button class="btn btn-danger">delete</button>
            </li>`;
        }
    })
}

export const clearElement = (ele) => {
    return ele.innerHTML = '';
}

export const addActiveShowClasses = (element) => {
    element.classList.add('active', 'show');
}

export const removeActiveShowClasses = element => {
    element.classList.remove('active', 'show');
}

const btnGetData = document.querySelector('.getData');

document.addEventListener('DOMContentLoaded', function () {

    btnGetData.addEventListener('click', e => {
        e.preventDefault();
        addToList(getData(returnUserId()));
    })

    addBtn.addEventListener('click', e => {
        e.preventDefault();
        setData({
            food: foodInput.value
        })
        foodInput.value = ''
    });

    ulEle.addEventListener('click', e => {
        e.preventDefault();
        if (e.target.tagName === 'BUTTON') {
            const id = e.target.parentElement.getAttribute('data-id');
            deleteDoc(returnUserId(), id);
        }
    })
});