const meditate = document.querySelector(".meditate");
const audio = document.querySelector(".audio");
const firebaseConfig = {
  apiKey: "AIzaSyB4abFcxu9I48iUIHiKm5V_81wp3p1xMXQ",
  authDomain: "demal-2242f.firebaseapp.com",
  databaseURL: "https://demal-2242f.firebaseio.com",
  projectId: "demal-2242f",
  storageBucket: "demal-2242f.appspot.com",
  messagingSenderId: "830446498789",
  appId: "1:830446498789:web:b321d2f615395bd0b0750c",
  measurementId: "G-VWG683QVVM",
};
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const db = firebase.firestore();

db.collection("meditations")
  .doc("rXDLCItJsa0EWZXWak0O")
  .get()
  .then((doc) => {
    // console.log(doc.data());
    let audio_url = doc.get("audioUrl");
    console.log(audio_url);
    console.log(meditate);
    meditate.src = audio_url;
    console.log(audio);
    audio.load();
  });
