

function GoogleLogin() {
    //first of all create google provider object
    let provider=new firebase.auth.GoogleAuthProvider();

    //Login with popup window
    firebase.auth().signInWithPopup(provider).then(function () {
        //code executes after successful login

        // window.location="index.html";
        console.log("Success")
    }).catch(function (error) {
        let errorMessage=error.message;
        console.log(errorMessage);
    });
}