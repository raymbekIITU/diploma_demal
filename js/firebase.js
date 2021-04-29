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

// const audio_list = [
//   {
//     name: "Invisible Beauty",
//     artist: "Artist Name",
//     url: "source/invisible_beauty.mp3",
//     cover:
//       "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//   },
//   {
//     name: "Just Stay",
//     artist: "Artist Name",
//     url: "source/just_stay.mp3",
//     cover:
//       "https://images.pexels.com/photos/838702/pexels-photo-838702.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", // COVER IMAGE
//   },
//   {
//     name: "Liquid Time",
//     artist: "Artist Name",
//     url: "source/liquid_time.mp3",
//     cover:
//       "https://images.pexels.com/photos/838696/pexels-photo-838696.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//   },
//   {
//     name: "Silky Smooth",
//     artist: "Artist Name",
//     // url: 'source/silky_smooth.mp3',
//     url: "",
//     cover:
//       "https://images.pexels.com/photos/1370545/pexels-photo-1370545.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//   },
// ];

// const sleeps = audio_list;

const audioList = [];
const aplayerList = [];

const db = firebase.firestore();
db.collection("sleeps")
  .get()
  .then((snapshot) => snapshot.docs.map((doc) => doc.data()))
  .then((data) => {
    data.forEach((d) =>
      audioList.push({
        name: d.sleepName,
        artist: d.author,
        url: d.audioUrl,
        cover: "",
      })
    );
  });

console.log(audioList);

// db.collee.log(audioList);

//   .then((doc) => {
//     var audio_url = doc.get("audioUrl");
//     sleeps[3].url = audio_url;
//   });
