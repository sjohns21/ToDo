//toggle completion
$("#list").on("click", ".todo", function() {
  $(this).toggleClass("completed");
});

//delete
$("#list").on("click", ".fa-trash-alt", function(event) {
  $(this)
    .parent()
    .fadeOut(500, function() {
      $(this).remove();
    });
  event.stopPropogation();
});

//show hide add new todo
$(".fa-plus").click(function() {
  $("input").fadeToggle();
});

$("input").keypress(function(event) {
  if (event.which === 13) {
    $("#list").append(
      "<div class='todo'><i class='fas fa-trash-alt'></i><span> " +
        $(this).val() +
        "</span></div>"
    );
    $(this).val("");
  }
});
