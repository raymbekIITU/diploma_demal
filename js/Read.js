
console.log(firebase);

var ref = firebase.database().ref("AudioFiles/-MJfrapJBKLwO2qIfU3y/audioUrl");

ref.on("value", function(snapshot) {
   console.log(snapshot.val());
}, function (error) {
   console.log("Error: " + error.code);
});