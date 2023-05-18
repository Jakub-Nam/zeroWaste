import {
    getData,
    changeToArr,
    setData
} from "./database.js";

const addBtn = document.querySelector('.addBtn')
const foodInput = document.querySelector('input[name="inputFood"]')

addBtn.addEventListener('click', e => {
    e.preventDefault();

    console.log(foodInput.value)
    setData({pasza: foodInput.value})
    // foodInput.value = ''
    // w przyszlosci mozesz zrobisz .reset() na formularzu, wyczyscisz all inputy
});


const addToList = (values) => {
    let ul = document.querySelector('section ul')
    values.then(arr => {
            for (let i = 0; i < arr.length; i++) {
                ul.innerHTML += `<li>${arr[i]}</li>`;
            }
        })
        .catch(err => {
            console.log(err)
        })
}

addToList(changeToArr(getData()))