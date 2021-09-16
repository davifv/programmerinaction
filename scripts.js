    function goTo(element, speed) {
  var href = element.attr('href');
  var top = $(href).offset().top;
  $("html,body").animate({scrollTop : top}, speed);
}

$(function() {
  $("#top a").click(function(e) {
    e.preventDefault();
    goTo($(this), 900);
  });
});
