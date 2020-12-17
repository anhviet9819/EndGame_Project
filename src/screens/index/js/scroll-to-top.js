$(document).ready(function () {
    $('.up-to-top').click(function (e) {
      e.preventDefault();
      $('html,body').animate({ scrollTop: 0 }, 1400);
    });
  });