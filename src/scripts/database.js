const db = firebase.firestore();
const dataRef = db.collection("data").doc(); //zmien nazwe
export const dataCollectionRef = db.collection("data");



export async function getData() {
    try {
        const snapshot = await dataCollectionRef.get();
        const arrObj = snapshot.docs.map(doc => doc.data());
        return arrObj;
    } catch (error) {
        console.error("Wystąpił błąd podczas pobierania danych:", error);
        return [];
    }
}


// export const changeToSimpleArr = async (data) => {
//     let arrVal = [];
//     await data.then((dataArr) => {
//         dataArr.map(dataArr => {
//             for (const key in dataArr) {
//                 const value = dataArr[key];
//                 if (typeof value === 'string') {
//                     arrVal.push(value)
//                     console.log(arrVal);
//                 } else {
//                     return
//                 }
//             }
//         })
//     })
//     return arrVal;
// }

export async function setData(data) {
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

export const deleteDoc = (colletion, id) => {
    db.collection('data').doc(id).delete().then(() => {
        console.log('usunieto');
    }).catch((err) => {
        console.log(err);
    })
}