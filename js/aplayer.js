$(".album-poster").on("click", function (e) {
  let dataSwitchId = $(this).attr("data-switch");
  ap.list.switch(dataSwitchId);
  ap.play();
  $("#aplayer").addClass("showPlayer");
});

console.log();

const ap = new APlayer({
  container: document.getElementById("aplayer"),
  listFolded: true,
  audio: audioList,
});
