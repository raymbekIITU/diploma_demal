
function loginUser() {
    var email=document.getElementById("inputEmail").value;
    var password=document.getElementById("inputPassword").value;

    //firebase have pre built login function
    //it takes two parameters first email and second is password

    firebase.auth().signInWithEmailAndPassword(email,password).then(function () {
        //this function works when login successfully

        window.location="index.html";
    }).catch(function (error) {
       //this will handle error
        let errorMessage=error.message;
        console.log(errorMessage);
    });
}
