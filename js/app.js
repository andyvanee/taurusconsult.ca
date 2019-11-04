$(window).scroll(function() {
    var $win = $(this)
    var scrollPosition = $win.scrollTop() / ($win.height() * 1.15)
    if (scrollPosition > 1) scrollPosition = 1
    $(".page-wash").css("opacity", scrollPosition)
})

$('[href="#contact"]').click(function() {
    $("html, body").animate(
        {
            scrollTop: $("#contact").offset().top
        },
        500
    )
    return false
})

$("#elevator").click(function() {
    $("html, body").animate({ scrollTop: 0 }, 500)
    return false
})

$(".contact-form-component").each(function() {
    var $form = $("<form>")
    $form.attr("action", "https://formspree.io/Dustin@tauruscapital.net")
    $form.attr("method", "POST")
    $form.append('<input type="text" name="name" placeholder="Your Name">')
    $form.append(
        '<input type="email" name="_replyto" placeholder="Your Email Address">'
    )
    $form.append('<textarea name="message" placeholder="Your Message">')
    $form.append(
        '<input type="hidden" name="_subject" value="New Contact Form Submission" />'
    )
    $form.append(
        '<input type="hidden" name="_next" value="http://www.tauruscapital.net/thanks.html" />'
    )
    $form.append('<input type="text" name="_gotcha" style="display:none" />')
    $form.append('<button class="primary" type="submit">Send</button>')
    $(this).append($form)
})

$("#portfolio-map").each(function() {
    mapboxgl.accessToken =
        "pk.eyJ1IjoiYW5keWFuZHl2YW5lZSIsImEiOiJjaXdwMTZtMTcwMDJkMm9tcTM2dTh2NGVmIn0.Hyp2Y_cV8vTc2zsOwarrVw"

    var geojson = {
        type: "FeatureCollection",
        features: [
            {
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: [-95.712891, 37.09024]
                },
                properties: {
                    name: "United States",
                    description: "Timber industry, 64 Million"
                }
            },
            {
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: [-74.297333, 4.570868]
                },
                properties: {
                    name: "Colombia",
                    description: "Fruit production, 37 Million"
                }
            },
            {
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: [-85.207229, 12.865416]
                },
                properties: {
                    name: "Nicaragua",
                    description: "Manufacturing, 74 Million"
                }
            },
            {
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: [-73.5863734, 4.5659065]
                },
                properties: {
                    name: "Colombia",
                    description: "Pulp and paper industry, 58 Million"
                }
            },
            {
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: [-75.015152, -9.189967]
                },
                properties: {
                    name: "Peru",
                    description: "Steel industry, 230 Million"
                }
            },
            {
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: [-78.183406, -1.831239]
                },
                properties: {
                    name: "Ecuador",
                    description: "Shipbuilding industry, 83 Million"
                }
            },
            {
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: [-58.443832, -23.442503]
                },
                properties: {
                    name: "Paraguay",
                    description: "Internet 29 Million"
                }
            },
            {
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: [-102.552784, 23.634501]
                },
                properties: {
                    name: "Mexico",
                    description: "Transport industry, 39 Million"
                }
            },
            {
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: [-55.765835, -32.522779]
                },
                properties: {
                    name: "Uruguay",
                    description: "Water industry, 26 Million"
                }
            },
            {
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: [-55.491477, -8.783195]
                },
                properties: {
                    name: "South America",
                    description: "Port, 2.4 Billion"
                }
            },
            {
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: [-71.542969, -35.675147]
                },
                properties: {
                    name: "Chile",
                    description: "Agriculture, 34 Million"
                }
            },
            {
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: [-90.2241588, 38.6350323]
                },
                properties: {
                    name: "Southern",
                    description: "Technology, 98 Million"
                }
            },
            {
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: [-83.753428, 9.748917]
                },
                properties: {
                    name: "Costa Rica",
                    description: "Agriculture, 36 Million"
                }
            },
            {
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: [-56.2609863, -8.5375654]
                },
                properties: {
                    name: "South America",
                    description: "Gold Mine, 11 Million"
                }
            },
            {
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: [-56.2390137, -8.9718973]
                },
                properties: {
                    name: "South America",
                    description: "Gold Mine, 86 Million"
                }
            },
            {
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: [-58.93018, 4.860416]
                },
                properties: {
                    name: "Guyana",
                    description: "10 Million, Gold Mine"
                }
            },
            {
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: [-123.26660156249999, 50.54136296522161]
                },
                properties: {
                    name: "British Colombia",
                    description: "Industrial Supplies, 5M"
                }
            },
            {
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: [-113.4065557, 52.1674333]
                },
                properties: {
                    name: "Alberta",
                    description:
                        "Petroleum Industry 50M, Mining Industry 20M, Petroleum Industry 30M, Resort Development 50M"
                }
            },
            {
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: [-86.9267107, 49.5303895]
                },
                properties: {
                    name: "Ontario",
                    description: "Project Development 25M"
                }
            },
            {
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: [-113.3487797, 45.9661457]
                },
                properties: {
                    name: "Montana",
                    description: "Agricultural 50M"
                }
            },
            {
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: [-75.0067007, 42.6836859]
                },
                properties: {
                    name: "New York",
                    description: "Project Development 5M, Petroleum Industry 5M"
                }
            },
            {
                type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: [-59.6753423, 13.1884729]
                },
                properties: {
                    name: "Barbados",
                    description: "Resort Development 45M"
                }
            }
        ]
    }

    var map = new mapboxgl.Map({
        container: "portfolio-map",
        style: "mapbox://styles/andyandyvanee/ciwp36len00i52qqo7jsgy9pc",
        center: [-70.0, 26.0],
        zoom: 1.3
    })

    map.scrollZoom.disable()

    // add markers to map
    geojson.features.forEach(function(marker) {
        // create a DOM element for the marker
        var el = document.createElement("div")
        el.className = "marker"
        el.style.backgroundImage = "url(/images/placemark.png)"
        el.style.width = "32px"
        el.style.height = "47px"

        el.addEventListener("click", function() {
            $(".marker-detail-container")
                .html(
                    $(
                        "<h2>" +
                            marker.properties.name +
                            "</h2><p>" +
                            marker.properties.description +
                            "</p>"
                    )
                )
                .addClass("active")
        })

        // add marker to map
        new mapboxgl.Marker(el, { offset: [-16, -47] })
            .setLngLat(marker.geometry.coordinates)
            .addTo(map)
    })

    $(this).append('<div id="marker-detail" class="marker-detail-container">')

    $(".mapboxgl-marker").css({
        cursor: "pointer",
        "border-radius": "50%"
    })
})
