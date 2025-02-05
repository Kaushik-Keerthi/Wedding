// Alert Functionality
function alert_markup(type, message) {
    const alertClass = type === "success" ? "alert-success" : "alert-danger";
    return `<div class="alert ${alertClass}"><button type="button" class="close" data-dismiss="alert">&times;</button>${message}</div>`;
}

// Waypoints Animations
$(document).ready(function () {
    $(".wp1").waypoint(function () {
        $(".wp1").addClass("animated fadeInLeft");
    }, { offset: "75%" });

    $(".wp2").waypoint(function () {
        $(".wp2").addClass("animated fadeInUp");
    }, { offset: "75%" });

    $(".wp3").waypoint(function () {
        $(".wp3").addClass("animated fadeInDown");
    }, { offset: "75%" });

    $(".wp4").waypoint(function () {
        $(".wp4").addClass("animated fadeInDown");
    }, { offset: "75%" });

    $(".wp5").waypoint(function () {
        $(".wp5").addClass("animated fadeInUp");
    }, { offset: "50%" });

    $(".wp6").waypoint(function () {
        $(".wp6").addClass("animated fadeInDown");
    }, { offset: "75%" });
});

// FlexSlider and Fancybox Initialization
$(window).load(function () {
    $('#slider').flexslider({
        animation: "slide",
        controlNav: false,
        directionNav: true,
        touch: true,
        slideshow: true,
        prevText: "",
        nextText: ""
    });

    $(".fancybox").fancybox({ padding: 0 });
});

// Navigation Bar Behavior
$(document).ready(function () {
    const nav = $('.nav-toggle');

    nav.click(function () {
        $(this).toggleClass('nav-open');
        $('.menu').toggleClass('menu-active');
    });

    $(window).scroll(function () {
        const scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $("header").addClass("fixed");
        } else {
            $("header").removeClass("fixed");
        }
    });
});

// Smooth Scrolling
$(document).ready(function () {
    $('a[href*=\'#\']').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
    });
});


//Flowers effect

document.addEventListener("DOMContentLoaded", () => {
    const flowerContainer = document.querySelector('.flower-shower');
    
    function createFlower() {
      const flower = document.createElement('div');
      flower.classList.add('flower');
      
      // Randomize starting position and animation duration
      flower.style.left = Math.random() * 100 + 'vw';
      flower.style.animationDuration = Math.random() * 3 + 2 + 's'; // Between 2s and 5s
      flower.style.animationDelay = Math.random() * 5 + 's'; // Staggered start
      
      flowerContainer.appendChild(flower);
      
      // Remove the flower after animation ends
      flower.addEventListener('animationend', () => {
        flower.remove();
      });
    }
  
    // Generate flowers at intervals
    setInterval(createFlower, 300); // Create a new flower every 300ms
  });
  



// YouTube Player Integration
$(document).ready(function () {
    $(".player").each(function () {
        const player = $(this);
        player.YTPlayer();
    });
});

// Map and Content Toggles
$(document).ready(function () {
    $("#map-toggle").click(function () {
        $("#map-section").slideToggle();
        $("#content-section").slideToggle();
    });
});

// Calendar Event Creation
$(document).ready(function () {
    $("#calendar-event").click(function () {
        window.open("https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=M2dhb3NoaHJ0OTc5bXYwNnVvcGN2YjVhbXUga2Vlc2FyaWJoYXJhdGg1QG0&tmsrc=keesaribharath5%40gmail.com", "_blank");
    });
});
