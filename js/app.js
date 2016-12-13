$(window).scroll(function() {
    var $win = $(this);
    var scrollPosition = $win.scrollTop() / ($win.height() * 1.15);
    if (scrollPosition > 1) scrollPosition = 1;
    $('.page-wash').css('opacity', scrollPosition);
});

$('[href="#contact"]').click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 500);
    return false;
});

$('#elevator').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 500);
    return false;
})
