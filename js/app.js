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

$('#portfolio-map').each(function() {
    mapboxgl.accessToken = "pk.eyJ1IjoiYW5keWFuZHl2YW5lZSIsImEiOiJjaXdwMTZtMTcwMDJkMm9tcTM2dTh2NGVmIn0.Hyp2Y_cV8vTc2zsOwarrVw";

    var geojson = {
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "properties": {
                    "title": "Example Location",
                    "details": "Lorem ipsum dolor sit amet, consectetur adipisicing elit"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -114.0866833,
                        50.9560559
                    ]
                }
            }
        ]
    };

    var map = new mapboxgl.Map({
        container: 'portfolio-map',
        style: 'mapbox://styles/andyandyvanee/ciwp18clf006l2ppvliw9auo9',
        center: [-110.0, 54.48],
        zoom: 3.5,
        interactive: false
    });

    // add markers to map
    geojson.features.forEach(function(marker) {
        // create a DOM element for the marker
        var el = document.createElement('div');
        el.className = 'marker';
        el.style.backgroundImage = 'url(/images/placemark.png)';
        el.style.width = '32px';
        el.style.height = '47px';

        el.addEventListener('click', function() {
            $('.marker-detail-container').html(
                $('<h2>'+marker.properties.title+'</h2><p>'+marker.properties.details+'</p>')
            ).addClass('active');
        });

        // add marker to map
        new mapboxgl.Marker(el, {offset: [-16, -47]})
            .setLngLat(marker.geometry.coordinates)
            .addTo(map);
    });

    $(this).append('<div id="marker-detail" class="marker-detail-container">');

    $('.mapboxgl-marker').css({
        'cursor': 'pointer',
        'border-radius': '50%'
    });
})
