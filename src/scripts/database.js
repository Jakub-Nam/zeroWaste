const db = firebase.firestore();

db.collection("data").doc("time").set({
        key: 'value'
      
    })
    .then(function () {
        showAlert("Pomyślnie zmieniono czas konsultacji");
        returnToMainDeskop();
    })
    .catch(function (error) {
        showAlert("Wystąpił błąd podczas zmiany czasu konsultacji: ", error);
    });