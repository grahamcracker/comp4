// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(function(){
  $("#confirmed").html("CONFIRMED, ID#" + Math.floor((Math.random() * 1000000) + 1));
  $("#confirm").on('click', function(){
    $("#confirmed").fadeIn();
  });

  $("#generateKey").on('click', function(){
    $("#key").val((Math.random() + 1).toString(36).substring(10));
  });
});
