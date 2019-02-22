$("p").on("click", function() {
  $(this).toggleClass("complete");
});

$("input").keypress(function(e) {
  if (e.which == 13) {
    //create new item
    $("div").append("<p>" + e.target.value + "</p>");
    $("p")
      .last()
      .on("click", function() {
        $(this).toggleClass("complete");
      });
  }
});
