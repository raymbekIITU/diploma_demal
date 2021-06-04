

// Scene part

const scene_images = document.querySelectorAll(".scene-poster img");
const scene_names = document.querySelectorAll(".scene-description h4");
const scene_bgvideo = document.getElementById("bg_scene");




let bgVideo = [];

db.collection("scenes")
.get()
.then((snapshot) => snapshot.docs.map((doc) => doc.data()))
.then((data) => {
    for (let i = 0; i < data.length; i++) {
      scene_images[i].src = data[i].backgroundImage;
      scene_names[i].innerText = data[i].title;
      bgVideo[i] = data[i].backgroundVideo;
    }
})


for(let j = 0; j < scene_images.length; j++) {
    scene_images[j].addEventListener("click", () => {
        scene_bgvideo.src = bgVideo[j];

      localStorage.setItem("scene_bg", bgVideo[j]);
})


}

scene_bgvideo.src = localStorage.getItem("scene_bg");


// console.log(scene_bgAudio.src);