$(document).ready(function() {
  $("#formOne").submit(function(event){
    var nameInput = $("#name").val();

    $(".name").text(nameInput);
    $(".findme").addClass("shout");

    $("#letter").show();

    event.preventDefault();
  });
});
