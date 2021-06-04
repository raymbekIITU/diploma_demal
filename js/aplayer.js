
$(".sleep-poster").on("click", function (e) {
  let dataSwitchId = $(this).attr("data-switch");
  ap.list.switch(dataSwitchId);
  ap.play();
  $("#aplayer").addClass("showPlayer");
});

$(".meditation-poster").on("click", function (e) {
  let dataSwitchId = $(this).attr("data-switch");
  ap.list.switch(dataSwitchId);
  ap.play();
  $("#aplayer").addClass("showPlayer");
});

$(".music-poster").on("click", function (e) {
  let dataSwitchId = $(this).attr("data-switch");
  ap.list.switch(dataSwitchId);
  ap.play();
  $("#aplayer").addClass("showPlayer");
});

let ap = [];


