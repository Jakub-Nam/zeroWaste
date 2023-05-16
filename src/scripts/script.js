import { pushData } from "./database.js";


const addBtn = document.querySelector('.addBtn')

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    pushData();


});