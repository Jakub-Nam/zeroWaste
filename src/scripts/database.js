import {
    returnUserId
} from "./auth.js";

const db = firebase.firestore();


export async function getData() {
    const food = [];
    try {
        let userId = await returnUserId()
        let dataCollectionRef = await db.collection(userId);
        const snapshot = await dataCollectionRef.get();
        
        snapshot.docs.map(doc => {
            let docId = doc.id
            let nameFood = doc.data().food
            food.push({
                nameFood,
                docId
            })
        });
        return food
    } catch (error) {
        console.error("Wystąpił błąd podczas pobierania danych:", error);
        return [];
    }
}

export async function setData(data) {
    const timestamp = Date.now();
    try {
        // console.log(data, 'data')
        // console.log(returnUserId(), 'returnuserid()');
        const dataRef = db.collection(returnUserId()).doc();
        await dataRef.set({
            food: data.food,
            timestamp: timestamp // niepotrzebny timestamp
        })
        console.log('dodales dane')
    } catch (err) {
        console.log(err)
    }
}

export const deleteDoc = (collection, id) => {
    db.collection(collection).doc(id).delete().then(() => {
        console.log('usunieto');
    }).catch((err) => {
        console.log(err);
    })
}

// module.exports = getData, setData, deleteDoc