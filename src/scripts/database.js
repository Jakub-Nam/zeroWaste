const db = firebase.firestore();

export function pushData() {
    db.collection("data").doc("time").get()
}

async function getData() {
    try {
        let data;
        return data = await db.collection("data").doc("time").get()
    } catch (err) {
        return console.log('nie pykło', err)
    }

};

// return an array zmiento potem
const showData = async (data) => {
    let documents = await data;
    await console.log(documents.data(), 'zwraca object')
    const values = await Object.values(documents.data());
    await console.log(values, 'zwraca tablie values');
    return values;
}


// getData();
console.log(showData(getData()))

const changeDOM = async (values) => {
    const x = document.querySelector('section')

    await console.log('changedom values', values)
    await console.log('dlugosc values', values.lenght)
     
    // await for (let i = 0; i < values.lenght; i++) {
    //     x.innerHTML += values[i];
    //     x.innerHTML += 'chleb';
    }
}

changeDOM(showData(getData()))