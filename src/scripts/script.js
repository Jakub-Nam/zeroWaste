import {
    getData,
    changeToSimpleArr,
    setData
} from "./database.js";

const addBtn = document.querySelector('.addBtn');
const foodInput = document.querySelector('input[name="inputFood"]');
const ulEle = document.querySelector('section ul');

const addToList = (values) => {
    values.then(arr => {
            for (let i = 0; i < arr.length; i++) {
                ulEle.innerHTML += `<li>${arr[i]}</li>`;
            }
        })
        .catch(err => {
            console.log(err)
        })
}

addBtn.addEventListener('click', e => {
    e.preventDefault();
    setData({food: foodInput.value})
    foodInput.value = ''
    // w przyszlosci mozesz zrobisz .reset() na formularzu, wyczyscisz all inputy
});

ulEle.addEventListener('click', e => {
    e.preventDefault();
    console.log(e.target)
    if(e.target.tagName === 'LI'){
        e.target.remove();
    }
    // console.log(e.)
})

addToList(changeToSimpleArr(getData()))

