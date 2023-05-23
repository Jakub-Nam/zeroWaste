const db = firebase.firestore();
const dataRef = db.collection("data").doc(); //zmien nazwe
const dataCollectionRef = db.collection("data");

//getdata trzeba zmienic na on snapshot
export async function getData() {
    try {
        const querySnapshot = await dataCollectionRef.get();
        const arrObj = querySnapshot.docs.map(doc => doc.data());
        return arrObj;
    } catch (error) {
        console.error("Wystąpił błąd podczas pobierania danych:", error);
        return [];
    }
}


export const changeToSimpleArr = async (data) => {
    let arrVal = [];
    await data.then((dataArr) => {
        dataArr.map(dataArr => {
            for (const key in dataArr) {
                const value = dataArr[key];
                if (typeof value === 'string') {
                    arrVal.push(value)
                    console.log(arrVal);
                } else { return }
            }
        })
    })
    return arrVal;
}

export async function setData(data) {
    // utworze klase obiektu, ktora bede uzywal
    // i to ten obiekt wyrzuce do DOM 
    // i na nim bede pracował
    // troche musze poprzerabiac
    // ale luzz :) 
    const timestamp = Date.now();
    try {
        console.log(data, 'data')
        await dataRef.set({
            food: data.food,
            timestamp: timestamp
        })
        console.log('dodales dane')
    } catch (err) {
        console.log(err)
    }
}
// data zmienie na adres email i to bd id kolekcji
// data to bedzie timestamp
// db.collection("data").doc("kitvnQ7J7E8lpoNyTAQZ").delete().then(() => {
//         console.log("Dokument został pomyślnie usunięty");
//     })
//     .catch(error => {
//         console.error("Wystąpił błąd podczas usuwania dokumentu:", error);
//     });