(function ($) {

  $(window).load(function () {
    var sort = $('.b-filter .sorting '),
      $title = $('.sorting .title'),
      $li = $('.sorting .list li');

    sort.on('click', function () {
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $('.sorting .list').slideUp();
      } else {
        $(this).addClass('active');
        $('.sorting .list').slideDown();
      }
    });

    $li.on('click touch', function () {
      var $this = $(this);

      if ($this.hasClass('active')) {

      } else {
        $li.removeClass('check');
        $(this).addClass('check');
        $title.html($this.html());
      }
    })
  })

  $(window).load(function () {
    var $btn = $('.left-part li a');

    $btn.on('click', function () {
      var $this = $(this),
        $parent = $this.parent('li'),
        $list = $parent.find('.list');

      if ($parent.hasClass('active')) {
        $parent.removeClass('active');
        $list.slideUp();
      } else {
        $('.left-part li').removeClass('active');
        $('.left-part li .list').slideUp();
        $parent.addClass('active');
        $list.slideDown();
      }

    })
  })

  $(window).load(function () {
    var btn = $('.gallery .mini-img li'),
      big_img = $('.gallery .main li');


    big_img.eq(0).show();
    btn.eq(0).addClass('active');

    btn.on('click', function () {
      var $index = $(this).index();

      if ($(this).hasClass('active')) {

      } else {
        btn.removeClass('active');
        $(this).addClass('active');
        big_img.fadeOut();
        big_img.eq($index).fadeIn();
      }
    })
  })

})(jQuery);

