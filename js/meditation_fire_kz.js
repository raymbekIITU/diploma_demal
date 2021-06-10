

// Meditation part

const meditation_images = document.querySelectorAll(".meditation-poster img");
const meditation_names = document.querySelectorAll(".meditation-description h4");
const meditation_authors = document.querySelectorAll(".meditation-description p");
const meditation_bgvideo = document.getElementById("bg_meditation");
const kazMeditationList = [];

db.collection("meditations_kaz")
  .get()
  .then((snapshot) => snapshot.docs.map((doc) => doc.data()))
  .then((data) => {
      for (let i = 0; i < data.length; i++) {
        kazMeditationList.push({
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
      audio: kazMeditationList,
    });
  })

meditation_bgvideo.src = localStorage.getItem("scene_bg");
