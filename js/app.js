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

// $('#message').show().on('keyup change', function() {
//     var mailto = 'mailto:test@example.com'
//     var subject = encodeURIComponent("Comments on Taurus Capital Website");
//     var body = encodeURIComponent($(this).val());
//     $("#mailto-link").attr('href', mailto + '?Subject=' + subject + '&body=' + body);
// });

$('.contact-form-component').each(function() {
    var $form = $('<form>');
    $form.attr('action', 'https://formspree.io/andy@andyvanee.com');
    $form.attr('method', 'POST');
    $form.append('<input type="text" name="name" placeholder="Your Name">');
    $form.append('<input type="email" name="_replyto" placeholder="Your Email Address">');
    $form.append('<textarea name="message" placeholder="Your Message">');
    $form.append('<input type="hidden" name="_subject" value="New Contact Form Submission" />');
    $form.append('<input type="hidden" name="_next" value="http://tauruscapital.andyvanee.com/thanks.html" />');
    $form.append('<input type="text" name="_gotcha" style="display:none" />');
    $form.append('<button class="primary" type="submit">Send</button>');
    $(this).append($form);
});

            // <form action="" method="POST">
            //     <div class="contact-wrapper">
            //         <label for="email">Your email</label>
            //         <input name="email" class="u-full-width" type="email" placeholder="" required="required">
            //         <label for="message">Your Comments</label>
            //         <textarea name="message" required="required"></textarea>
            //         <button class="primary" type="submit">Send</button>
            //     </div>
            // </form>
