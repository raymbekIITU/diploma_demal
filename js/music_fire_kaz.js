

// Music part

const music_images = document.querySelectorAll(".music-poster img");
const music_names = document.querySelectorAll(".music-description h4");
const music_description = document.querySelectorAll(".music-description p");
const music_bgvideo = document.getElementById("bg_music");

const kazMusicList = [];

db.collection("musics")
  .get()
  .then((snapshot) => snapshot.docs.map((doc) => doc.data()))
  .then((data) => {
      for (let i = 0; i < data.length; i++) {
        kazMusicList.push({
          name: data[i].title_kaz,
          artist: data[i].desc_kaz,
          url: data[i].audioUrl,
          cover: data[i].backgroundImage,
        })
        music_images[i].src = data[i].backgroundImage;
        music_names[i].innerText = data[i].title_kaz;
        music_description[i].innerText = data[i].desc_kaz;
      }

      ap = new APlayer({
      container: document.getElementById("aplayer"),
      listFolded: true,
      audio: kazMusicList,
    });
  })

music_bgvideo.src = localStorage.getItem("scene_bg");