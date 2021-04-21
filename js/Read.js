
console.log(firebase);

// var ref = firebase.database().ref("AudioFiles/-MJfrapJBKLwO2qIfU3y/audioUrl");

// ref.on("value", function(snapshot) {
//    console.log(snapshot.val());
// }, function (error) {
//    console.log("Error: " + error.code);
// });


const db = firebase.firestore();

db.collection("meditations")
.doc("rXDLCItJsa0EWZXWak0O")
.get()
.then(doc => {
    console.log(doc.data())
})