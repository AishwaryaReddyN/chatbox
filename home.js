$(document).ready(function () {
  $(".chat_header").click(function () {
    $(".chat_content").slideToggle("slow");
  });

  $(".message_header").click(function () {
    $(".message_content").slideToggle("slow");
  });

  $(".close").click(function () {
    $(".message_box").hide();
  });
  $(".user").click(function(){
    $(".message_box").show();
    $(".message_content").show();
    $(".input_box").show();
  })
});
