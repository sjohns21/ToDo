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

// $(".fa-trash-alt").click(function() {
//   $(this)
//     .parent()
//     .fadeOut(500, function() {
//       $(this).remove();
//     });
// });

// $("div.todo").mouseover(function() {
//   console.log("in");
//   $(this)
//     .children("i")
//     .show("fast");
// });

// $("div.todo").mouseout(function() {
//   console.log("out");
//   $(this)
//     .children("i")
//     .hide("fast");
// });

//show hide add new todo
$(".fa-plus").click(function() {
  $("input").toggle();
});

$("input").keypress(function(event) {
  if (event.which === 13) {
    $("#list").append(
      "<div class='todo'><i class='fas fa-trash-alt'></i>" +
        $(this).val() +
        "</div>"
    );
    $(this).val("");
  }
});

//add new todo and add listeners
// $("input").keypress(function(e) {
//   if (e.which == 13) {
//     //create new item
//     $("div#list").append(
//       "<div class='todo'><i class='fas fa-trash-alt'></i>" +
//         e.target.value +
//         "</div>"
//     );
//     $("div.todo")
//       .last()
//       .on("click", function() {
//         $(this).toggleClass("completed");
//       });
//     $("div.todo")
//       .last()
//       .on("mouseover", function() {
//         $(this)
//           .children()
//           .show("fast");
//       });
//     $("div.todo")
//       .last()
//       .on("mouseout", function() {
//         $(this)
//           .children()
//           .hide("fast");
//       });
//     $(".fa-trash-alt")
//       .last()
//       .click(function() {
//         console.log($(this));
//         $(this)
//           .parent()
//           .remove();
//       });
//     e.target.value = "";
//   }
// });
