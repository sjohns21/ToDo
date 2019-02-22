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

//delete
$("p i").click(function() {
  console.log($(this).parent());
  $(this)
    .parent()
    .remove();
});

$("p").on("mouseover", function() {
  $(this)
    .children()
    .show();
});

$("p").on("mouseout", function() {
  $(this)
    .children()
    .hide();
});
