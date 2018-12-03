
$('.nav-1').click(function () {
  $(".content").show();
  $(".rules").hide();
  $(".doverkids").hide()
  $(".nav-1").addClass('nav--active')
  $(".nav-2").removeClass('nav--active')
  $(".nav-3").removeClass('nav--active')
});
$('.nav-2').click(function () {
  $(".rules").show();
  $(".content").hide();
  $(".doverkids").hide();
  $(".nav-2").addClass('nav--active')
  $(".nav-1").removeClass('nav--active')
  $(".nav-3").removeClass('nav--active')
});
$('.nav-3').click(function () {
  $(".doverkids").show();
  $(".content").hide();
  $(".rules").hide();
  $(".nav-3").addClass('nav--active')
  $(".nav-1").removeClass('nav--active')
  $(".nav-2").removeClass('nav--active')
});
