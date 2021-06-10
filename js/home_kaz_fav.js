

// Sleep Favourites part

const sleep_images = document.querySelectorAll(".sleep-poster img");
const story_names = document.querySelectorAll(".sleep-description h4");
const story_authors = document.querySelectorAll(".sleep-description p");

const kazSleepListFav = [];

db.collection("sleeps_kaz")
.where('liked', "==", true)
.get()
.then((snapshot) => snapshot.docs.map((doc) => doc.data()))
.then((data) => {
    for (let i = 0; i < data.length; i++) {
      kazSleepListFav.push({
        name: data[i].name,
        artist: "Автор",
        url: data[i].audioUrl,
        cover: data[i].bgImage,
      })
      sleep_images[i].src = data[i].bgImage;
      story_names[i].innerText = data[i].name;
    }

    ap = new APlayer({
    container: document.getElementById("aplayer"),
    listFolded: true,
    audio: kazSleepListFav,
  });
})



// Meditation part

const meditation_images = document.querySelectorAll(".meditation-poster img");
const meditation_names = document.querySelectorAll(".meditation-description h4");
const meditation_authors = document.querySelectorAll(".meditation-description p");
const kazMeditationListFav = [];

db.collection("meditations_kaz")
.where('liked', "==", true)
.get()
.then((snapshot) => snapshot.docs.map((doc) => doc.data()))
.then((data) => {
    for (let i = 0; i < data.length; i++) {
    kazMeditationListFav.push({
        name: data[i].name,
        artist: data[i].author,
        url: data[i].meditationUrl,
        cover: data[i].bgImage,
    })
    meditation_images[i].src = data[i].bgImage;
    meditation_names[i].innerText = data[i].name;
    meditation_authors[i].innerText = data[i].author;
    }

    ap = new APlayer({
    container: document.getElementById("aplayer"),
    listFolded: true,
    audio: kazMeditationListFav,
});
})

















