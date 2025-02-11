$(document).ready(function () {
  console.log("Document is ready!");

  //programmatically create additional item inside the bedroom
  for (let i = 1; i <= 3; i++) {
      let roomItem = $(`<div class='decor'>Cubby ${i}</div>`);
      roomItem.css({
          position: "absolute",
          top: `${250 + i * 50}px`,
          right: `${3 + i * 0}px`,
          background: "#ffcc99",
          width: "70px",
          height: "50px",
          border: "2px solid black",
          textAlign: "center",
          lineHeight: "50px",
      });
      $("#bedroom").append(roomItem);
  }

  //make the trophy case draggable
  $("#trophyCase").draggable({
      stop: function () {
          let position = $(this).position();
          console.log(`Trophy Case position - Left: ${position.left}, Top: ${position.top}`);
      }
  });

  // interact w console
  $("#trophyCase").on("click", function () {
      console.log("Trophy Case clicked!");
  });
});