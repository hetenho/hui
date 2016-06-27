(function (window, $) {

  $(function() {


    $('.btn').on('click', function (event) {
      event.preventDefault();

      var $div = $('<div/>'),
          btnOffset = $(this).offset(),
      		xPos = event.pageX - btnOffset.left,
      		yPos = event.pageY - btnOffset.top;

      $div.addClass('ripple-effect');

      $div.css("height", $(this).height());
      $div.css("width", $(this).height());
      $div
        .css({
          top: yPos - ($div.height()/2),
          left: xPos - ($div.width()/2),
          background: $(this).data("ripple-color")
        })
        .appendTo($(this));

      setTimeout(function() {
        $div.remove();
      }, 1800);
    });

  });

})(window, jQuery);
