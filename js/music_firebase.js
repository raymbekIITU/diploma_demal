

// Music part

const music_images = document.querySelectorAll(".music-poster img");
const music_names = document.querySelectorAll(".music-description h4");
const music_authors = document.querySelectorAll(".music-description p");
const music_bgvideo = document.getElementById("bg_music");

const musicList = [];

db.collection("musics")
  .get()
  .then((snapshot) => snapshot.docs.map((doc) => doc.data()))
  .then((data) => {
      for (let i = 0; i < data.length; i++) {
        musicList.push({
          name: data[i].title,
          artist: data[i].author,
          url: data[i].audioUrl,
          cover: data[i].backgroundImage,
        })
        music_images[i].src = data[i].backgroundImage;
        music_names[i].innerText = data[i].title;
        music_authors[i].innerText = data[i].author;
      }

      ap = new APlayer({
      container: document.getElementById("aplayer"),
      listFolded: true,
      audio: musicList,
    });
  })

music_bgvideo.src = localStorage.getItem("scene_bg");