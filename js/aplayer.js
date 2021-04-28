$(".album-poster").on("click", function (e) {
  let dataSwitchId = $(this).attr("data-switch");
  ap.list.switch(dataSwitchId);
  ap.play();
  $("#aplayer").addClass("showPlayer");
});

const audio_list = [
  {
    name: "Invisible Beauty",
    artist: "Artist Name",
    url: "source/invisible_beauty.mp3",
    cover:
      "https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    name: "Just Stay",
    artist: "Artist Name",
    url: "source/just_stay.mp3",
    cover:
      "https://images.pexels.com/photos/838702/pexels-photo-838702.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", // COVER IMAGE
  },
  {
    name: "Liquid Time",
    artist: "Artist Name",
    url: "source/liquid_time.mp3",
    cover:
      "https://images.pexels.com/photos/838696/pexels-photo-838696.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    name: "Silky Smooth",
    artist: "Artist Name",
    // url: 'source/silky_smooth.mp3',
    url: "",
    cover:
      "https://images.pexels.com/photos/1370545/pexels-photo-1370545.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
];

const sleeps = audio_list;

db.collection("meditations")
  .doc("rXDLCItJsa0EWZXWak0O")
  .get()
  .then((doc) => {
    var audio_url = doc.get("audioUrl");
    sleeps[3].url = audio_url;
  });

const ap = new APlayer({
  container: document.getElementById("aplayer"),
  listFolded: true,
  audio: audio_list,
});
