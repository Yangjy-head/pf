$(".c_1").click(function () {
  $("body").addClass("tone1");
  $("body").removeClass("tone2 tone3 tone4");
});
$(".c_2").click(function () {
  $("body").addClass("tone2");
  $("body").removeClass("tone1 tone3 tone4");
});
$(".c_3").click(function () {
  $("body").addClass("tone3");
  $("body").removeClass("tone1 tone2 tone4");
});
$(".c_4").click(function () {
  $("body").addClass("tone4");
  $("body").removeClass("tone1 tone2 tone3");
});

$(".main_banner").paroller();

$(".info_box").paroller();
$(".info_box2").paroller();
$(".info_box3").paroller();
$(".info_box4").paroller();
$(".info_box5").paroller();
$(".info_box6").paroller();
$(".info_box7").paroller();
$(".info_box8").paroller();

$(".pf_img1").paroller();
$(".pf_img2").paroller();
$(".pf_text1").paroller();
$(".pf_text2").paroller();