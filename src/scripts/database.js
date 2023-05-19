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
                arrVal.push(value)
                console.log(arrVal);
              }
        })
    })
 return arrVal;
}

export async function setData(data) {
    try {
        await dataRef.set(data)
        console.log('dodales dane')
    } catch (err) {
        console.log(err)
    }
}

// musisz przeanalizowac jak powinna wygladac relacja miedzy baza danych, a strona www.