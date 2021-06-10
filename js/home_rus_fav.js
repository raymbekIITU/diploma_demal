

// Sleep Favourites part

const sleep_images = document.querySelectorAll(".sleep-poster img");
const story_names = document.querySelectorAll(".sleep-description h4");
const story_authors = document.querySelectorAll(".sleep-description p");

const rusSleepListFav = [];

db.collection("sleeps")
.where('liked', "==", true)
.get()
.then((snapshot) => snapshot.docs.map((doc) => doc.data()))
.then((data) => {
    for (let i = 0; i < data.length; i++) {
      rusSleepListFav.push({
        name: data[i].sleepName,
        artist: data[i].author,
        url: data[i].audioUrl,
        cover: data[i].backgroundImage,
      })
      sleep_images[i].src = data[i].backgroundImage;
      story_names[i].innerText = data[i].sleepName;
      story_authors[i].innerText = data[i].author;
    }

    ap = new APlayer({
    container: document.getElementById("aplayer"),
    listFolded: true,
    audio: rusSleepListFav,
  });
})



// Meditation part

const meditation_images = document.querySelectorAll(".meditation-poster img");
const meditation_names = document.querySelectorAll(".meditation-description h4");
const meditation_authors = document.querySelectorAll(".meditation-description p");
const rusMeditationListFav = [];

db.collection("meditations")
.where('liked', "==", true)
.get()
.then((snapshot) => snapshot.docs.map((doc) => doc.data()))
.then((data) => {
    for (let i = 0; i < data.length; i++) {
    rusMeditationListFav.push({
        name: data[i].title,
        artist: data[i].author,
        url: data[i].meditationUrl,
        cover: data[i].backgroundImage,
    })
    meditation_images[i].src = data[i].backgroundImage;
    meditation_names[i].innerText = data[i].title;
    meditation_authors[i].innerText = data[i].author;
    }

    ap = new APlayer({
    container: document.getElementById("aplayer"),
    listFolded: true,
    audio: rusMeditationListFav,
});
})

















