$("div.todo").on("click", function() {
  $(this).toggleClass("complete");
});

//delete
$(".fa-trash-alt").click(function() {
  console.log($(this));
  $(this)
    .parent()
    .remove();
});

$("div.todo").on("mouseover", function() {
  console.log("in");
  $(this)
    .children("i")
    .show("fast");
});

$("div.todo").on("mouseout", function() {
  console.log("out");
  $(this)
    .children("i")
    .hide("fast");
});

//show hide add new todo
$(".fa-plus").click(function() {
  $("input").toggle();
});

//add new todo and add listeners
$("input").keypress(function(e) {
  if (e.which == 13) {
    //create new item
    $("div#list").append(
      "<div class='todo'><i class='fas fa-trash-alt'></i>" +
        e.target.value +
        "</div>"
    );
    $("div.todo")
      .last()
      .on("click", function() {
        $(this).toggleClass("complete");
      });
    $("div.todo")
      .last()
      .on("mouseover", function() {
        $(this)
          .children()
          .show("fast");
      });
    $("div.todo")
      .last()
      .on("mouseout", function() {
        $(this)
          .children()
          .hide("fast");
      });
    $(".fa-trash-alt")
      .last()
      .click(function() {
        console.log($(this));
        $(this)
          .parent()
          .remove();
      });
    e.target.value = "";
  }
});
