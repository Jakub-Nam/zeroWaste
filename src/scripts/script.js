import {
    setData,
    getData,
    deleteDoc
} from "./database.js";

const addBtn = document.querySelector('.addBtn');
const foodInput = document.querySelector('input[name="inputFood"]');
const ulEle = document.querySelector('section ul');

const main = document.querySelector('main')

const addToList = (foodObjcs) => {
    ulEle.innerHTML = '';
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

export const showMain = async () => {
    try {
        await main.classList.add('active', 'show');
        addToList(getData());
    } catch (err) {
        console.log(err)
    }
}

export const hideMain = async () => {
    main.classList.remove('active', 'show');
}

const btnGetData = document.querySelector('.getData');
// putdatabbtn? updateData

btnGetData.addEventListener('click', e => {
    e.preventDefault();
    addToList(getData());
    // console.log(getData())
})

addBtn.addEventListener('click', e => {
    e.preventDefault();
    setData({
        food: foodInput.value
    })
    foodInput.value = ''
    // w przyszlosci mozesz zrobisz .reset() na formularzu, wyczyscisz all inputy
});

ulEle.addEventListener('click', e => {
    e.preventDefault();
    if (e.target.tagName === 'BUTTON') {
        const id = e.target.parentElement.getAttribute('data-id');
        deleteDoc(returnUserId(), id);
    }
})

// dataCollectionRef.onSnapshot(snapshot => {
//     const foodObjcs = [];
//     snapshot.docs.map(doc => {
//         let docId = doc.id
//         let nameFood = doc.data().food
//         foodObjcs.push({
//             nameFood,
//             docId
//         });
//     })
//     addToList(foodObjcs)
// })