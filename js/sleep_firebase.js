


// Sleep part

const sleep_images = document.querySelectorAll(".sleep-poster img");
const story_names = document.querySelectorAll(".sleep-description h4");
const story_authors = document.querySelectorAll(".sleep-description p");
const sleep_bgvideo = document.getElementById("bg_sleep");
const sleepList = [];

db.collection("sleeps")
  .get()
  .then((snapshot) => snapshot.docs.map((doc) => doc.data()))
  .then((data) => {
      for (let i = 0; i < data.length; i++) {
        sleepList.push({
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
      audio: sleepList,
    });
  })

  sleep_bgvideo.src = localStorage.getItem("scene_bg");











