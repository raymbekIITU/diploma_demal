


// Sleep part

const sleep_images = document.querySelectorAll(".sleep-poster img");
const story_names = document.querySelectorAll(".sleep-description h4");
const story_authors = document.querySelectorAll(".sleep-description p");
const sleep_bgvideo = document.getElementById("bg_sleep");

const kazSleepList = [];

db.collection("sleeps_kaz")
.get()
.then((snapshot) => snapshot.docs.map((doc) => doc.data()))
.then((data) => {
    for (let i = 0; i < data.length; i++) {
      kazSleepList.push({
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
    audio: kazSleepList,
  });
})

sleep_bgvideo.src = localStorage.getItem("scene_bg");














