import {
    getData,
    changeToSimpleArr,
    setData
} from "./database.js";

const addBtn = document.querySelector('.addBtn');
const foodInput = document.querySelector('input[name="inputFood"]');
const ulEle = document.querySelector('section ul');

addBtn.addEventListener('click', e => {
    e.preventDefault();
    setData({pasza: foodInput.value})
    foodInput.value = ''
    // w przyszlosci mozesz zrobisz .reset() na formularzu, wyczyscisz all inputy
});


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

addToList(changeToSimpleArr(getData()))

ulEle.addEventListener('click', e => {
    e.preventDefault();
    console.log(e.target)
    if(e.target.tagName === 'LI'){
        console.log('jebac prace')
        e.target.remove();
    }
    // console.log(e.)
})