$(document).ready(function () {
    $("li:first-child").addClass("first");
    $("li:last-child").addClass("last");
    $('[href="#"]').attr("href", "javascript:;");
    $('.menu-Bar').click(function () {
        $(this).toggleClass('open');
        $('.menuWrap').toggleClass('open');
        $('body').toggleClass('ovr-hiddn');
    });


    $('.closePop,.overlay').click(function () {
        $('.popupMain').fadeOut();
        $('.overlay').fadeOut();
    });

});

function halfContainerGap() {
    var containerDiv = $('.container').outerWidth();
    var windoWidth = $(window).outerWidth();
    var halfGap = (windoWidth - containerDiv) / 2;
    return `${halfGap}px`;
}

var ContentDiv = $('.container-leftPadding');
if (ContentDiv) {
    ContentDiv.css('padding-left', halfContainerGap());
}
$(window).resize(function () {
    if (ContentDiv) {
        ContentDiv.css('padding-left', halfContainerGap());
    }
});


var swiper = new Swiper(".characterSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true
});

var swiper1 = new Swiper(".testimonialSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

$(document).on('click', '.searchBarBtn', function (e) {
    e.preventDefault();
    var count = 0;

    var input = $(this).parent().find('input');
    var inputVal = input.val().toLowerCase(); // Convert to lowercase for case-insensitive matching

    var ele = $('[data-dis-search]');

    $.each(ele, function (index, element) {
        // Get the `data-dis-search` attribute and split it into an array of individual values
        var dataValues = $(element).data('dis-search').toLowerCase().split(',').map(s => s.trim());

        // Check if any value in the array includes the input value
        var match = dataValues.some(val => val.includes(inputVal));

        if (match) {
            $(element).show(); // Show element if there's a match
            count++;
        } else {
            $(element).hide(); // Hide element if there's no match
        }
    });

    if (!count) {
        $('.discoverSec-error').show();
    } else {
        $('.discoverSec-error').hide();
    }
});


$(document).on('click', '[data-tabing]', function (e) {
    e.preventDefault();
    $(this).addClass('current');
    $(this).siblings().removeClass('current');

    var target = $(this).data('tabing').toLowerCase();

    var ele = $('[data-showing]');

    $.each(ele, function (index, element) {
        // Get the `data-dis-search` attribute and split it into an array of individual values
        var dataValues = $(element).data('showing').toLowerCase().split(',').map(s => s.trim());

        // Check if any value in the array includes the input value
        var match = dataValues.some(val => val.includes(target));

        if (match) {
            $(element).show(); // Show element if there's a match
        } else {
            $(element).hide(); // Hide element if there's no match
        }
    });
});

Fancybox.bind("[data-fancybox]", {
    // // Your custom options
    // loop: false,
    // transitionEffect: "fade", // Classic transition effect
});










// Tabbing JS
$('[data-targetit]').on('click', function (e) {
    $(this).addClass('current');
    $(this).siblings().removeClass('current');
    var target = $(this).data('targetit');
    $('.' + target).siblings('[class^="box-"]').hide();
    $('.' + target).fadeIn();
    $(".tab-slider").slick("setPosition");
});






// Sticky Navigation
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
        $(".fixed").addClass("sticky");
    } else {
        $(".fixed").removeClass("sticky");
    }
});


// Normal Slider
$('.index-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
});


// Navigation Menu 
$(window).on('load', function () {
    var currentUrl = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
    $('ul.menu li a').each(function () {
        var hrefVal = $(this).attr('href');
        if (hrefVal == currentUrl) {
            $(this).removeClass('active');
            $(this).closest('li').addClass('active')
            $('ul.menu li.first').removeClass('active');
        }
    });

});



/* RESPONSIVE JS */
if ($(window).width() < 825) {
}