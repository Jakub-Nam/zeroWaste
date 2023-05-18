const db = firebase.firestore();
const dataRef = db.collection("data").doc("time");

export function pushData() {
    dataRef.set()
}

export async function getData() {
    try {
        let data;
        return data = await dataRef.get()
    } catch (err) {
        return console.log(err)
    }

};

export const changeToArr = async (data) => {
    let documents = await data;
    let arr = Object.values(documents.data())
    return arr;
}

export async function setData(data) {
   try{
    await dataRef.set(data)
    console.log('dodales dane')
   } catch (err) {
    console.log(err)
   }


}

// musisz przeanalizowac jak powinna wygladac relacja miedzy baza danych, a strona www.