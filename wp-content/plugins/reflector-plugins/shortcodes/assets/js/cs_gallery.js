;(function ($, window, document, undefined) {
    'use strict';

    function initThumbFlexSlider() {
        $('.main-thumb-slider').flexslider({
            animation: "fade",
            animationSpeed: 600,
            controlNav: false,
            animationLoop: false,
            slideshow: false,
            sync: ".sub-thumb-slider"
        });

        $('.sub-thumb-slider').flexslider({
            animation: "slide",
            animationSpeed: 600,
            controlNav: false,
            animationLoop: true,
            direction: "horizontal",
            slideshow: false,
            itemWidth: 100,
            itemMargin: 5,
            mousewheel: true,
            asNavFor: '.main-thumb-slider'
        });
    }

    $('.thumb-slider-wrapp-arrow').on('click', function () {
        $(this).toggleClass('active').parent().find('.sub-thumb-slider').toggleClass('active');
    });

    function modernslider(){
        if($('.modern_slider .owl-container-gallery').length){

            $('.modern_slider .owl-container-gallery').each(function () {

                var autoPlayVar = parseInt($(this).attr('data-autoplay'), 10);

                var car = $(this).owlCarousel({
                    autoplay: true,
                    autoplayTimeout: autoPlayVar,
                    items: 3,
                    center: true,
                    loop: true,
                    smartSpeed:600,
                    nav: true,
                    navElement: 'div',
                    responsive: {
                        0:{
                            items: 1
                        },
                        600:{
                            items: 2
                        },
                        992:{
                            items: 3
                        }
                    }
                });
            });
        }
    }

    function classic_grid(){

        if ($('.cs_gallery-wrap.classic_grid').length) {

            $('.cs_gallery-wrap.classic_grid').each(function () {
                var self = $(this);
                var layoutM = 'masonry';
                self.isotope({
                    itemSelector: '.gallery-item',
                    layoutMode: layoutM,
                    masonry: {
                        columnWidth: '.gallery-item',
                        'gutter': 20
                    }
                });
            });
        }
    }

    if($('.full_slider .slider-single').length){

        $('.full_slider .slider-single').each(function () {


            var parentSlider = $(this);

            parentSlider.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                fade: false,
                adaptiveHeight: true,
                infinite: false,
                useTransform: true,
                speed: 400,
                cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
            });


            parentSlider.next('.slider-nav').on('init', function(event, slick) {
                parentSlider.next('.slider-nav').find('.slick-slide.slick-current').addClass('is-active');
            }).slick({
                slidesToShow: 4,
                slidesToScroll: 4,
                dots: false,
                swipe: true,
                focusOnSelect: false,
                infinite: false,
                responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        swipe: true,
                    }
                },
                    {
                        breakpoint: 640,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            swipe: true,
                        }
                    },
                    {
                        breakpoint: 420,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            swipe: true,
                        }
                    }]
            });



            parentSlider.on('afterChange', function(event, slick, currentSlide) {
                parentSlider.next('.slider-nav').slick('slickGoTo', currentSlide);
                var currrentNavSlideElem = '.slick-slide[data-slick-index="' + currentSlide + '"]';
                parentSlider.next('.slider-nav').find('.slick-slide.is-active').removeClass('is-active');
                parentSlider.next('.slider-nav').find(currrentNavSlideElem).addClass('is-active');
            });

            parentSlider.next('.slider-nav').on('click', '.slick-slide', function(event) {
                event.preventDefault();
                var goToSingleSlide = $(this).data('slick-index');

                parentSlider.slick('slickGoTo', goToSingleSlide);
            });


            parentSlider.closest('.full_slider').find('.gallery-button').on('click', function () {

                parentSlider.next('.slider-nav').toggleClass('active');

            });


            parentSlider.closest('.full_slider').find('.menu-button').on('click', function () {

                $(this).toggleClass('active');

                if($('header').hasClass('static')){
                    $('body').toggleClass('static-menu');
                }else if($('header').hasClass('aside-menu')){
                    $('body').toggleClass('body-aside-menu');
                }

                $('.header_top_bg').slideToggle(1);


                $(window).trigger('resize');


                if($('header').hasClass('aside-menu') && !$('header').hasClass('static')) {
                    parentSlider.closest('.vc_row-fluid.vc_row-no-padding').css({
                        'min-width' : '100vw',
                        'min-height' : '100vh'
                    });
                }

                parentSlider.slick('reinit');
                parentSlider.next('.slider-nav').slick('reinit');

            });

        });

    }

    if($('.slider_thumbnail .slider-single').length){
        $('.slider_thumbnail .slider-single').each(function () {
            var $speed = $(this).attr('data-autoplay');
            var $check_autoplay = $(this).attr('data-check');
            if($check_autoplay == 'false'){
                $check_autoplay = false;
            }

            var parentSlider = $(this);
            console.log($check_autoplay);
            parentSlider.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: $check_autoplay,
                arrows: true,
                fade: false,
                adaptiveHeight: true,
                infinite: true,
                useTransform: true,
                speed: $speed,
                cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
            });


            parentSlider.next('.slider-nav').on('init', function(event, slick) {
                parentSlider.next('.slider-nav').find('.slick-slide.slick-current').addClass('is-active');
            }).slick({
                slidesToShow: 8,
                slidesToScroll: 4,
                dots: false,
                swipe: true,
                focusOnSelect: false,
                infinite: true,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 6,
                            slidesToScroll: 4,
                            swipe: true,
                        }
                    },
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 4,
                            swipe: true,
                        }
                    },
                    {
                        breakpoint: 640,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            swipe: true,
                        }
                    },
                    {
                        breakpoint: 420,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            swipe: true,
                        }
                    }]
            });



            parentSlider.on('afterChange', function(event, slick, currentSlide) {
                parentSlider.next('.slider-nav').slick('slickGoTo', currentSlide);
                var currrentNavSlideElem = '.slick-slide[data-slick-index="' + currentSlide + '"]';
                parentSlider.next('.slider-nav').find('.slick-slide.is-active').removeClass('is-active');
                parentSlider.next('.slider-nav').find(currrentNavSlideElem).addClass('is-active');
            });

            parentSlider.next('.slider-nav').on('click', '.slick-slide', function(event) {
                event.preventDefault();
                var goToSingleSlide = $(this).data('slick-index');

                parentSlider.slick('slickGoTo', goToSingleSlide);
            });


        });
    }

    function typeRect () {
        var articleGrid = $('.modern_gallery .item');
        $(articleGrid).mousemove(function (eventObject) {

            var textItem = $(eventObject.target).attr('data-content');
            $('.modern_gallery .popup-span').html(textItem).css({
                "top" : eventObject.pageY - $('.modern_gallery').offset().top,
                "left" : eventObject.pageX + 15,
            }).show();

        }).mouseout(function () {
            $('.modern_gallery .popup-span').hide()
                .html("")
                .css({
                    "top" : 0,
                    "left" : 0,
                });
        });
    }
    if($('.modern_gallery').length || $('.justified-wrap-gallery .gallery-wrap').length || $('.grid_thumbnails').length) {
        $('.modern_gallery, .justified-wrap-gallery .gallery-wrap, .grid_thumbnails').lightGallery({
            selector: '.item',
            mode: 'lg-slide',
            closable: true,
            iframeMaxWidth: '80%',
            download: false,
            thumbnail: true
        });
    }

    if($('.tilt_gallery').length || $('.adjusted_grid').length){
        $('.tilt_gallery, .adjusted_grid').lightGallery({
            selector: '.gallery-item',
            mode: 'lg-slide',
            closable: true,
            iframeMaxWidth: '80%',
            download: false,
            thumbnail: false
        });
    }


    function portfolioIsotope() {
        if ($('.adjusted_grid .img-list-gallery').length) {
            if ($(window).width() > 767) {
                $('.adjusted_grid .img-list-gallery').css('height', 'auto').equalHeights();
            } else {
                $('.adjusted_grid .img-list-gallery').css('height', 'auto');
            }
        }

        if ($('.adjusted_grid .row').length) {
            $('.adjusted_grid .row').each(function () {
                var self = $(this);
                var layoutM = self.attr('data-layout') || 'masonry';
                self.isotope({
                    itemSelector: '.item',
                    layoutMode: layoutM,
                    masonry: {
                        columnWidth: '.item'
                    }
                });
            });
        }

        if ($('.isotope-container-small').length) {
            $('.isotope-container-small').each(function () {
                var self = $(this);
                self.isotope({
                    itemSelector: '.isotope-item',
                    layoutMode: 'masonry',
                    masonry: {
                        columnWidth: '.isotope-item',
                        'gutter': 10
                    }
                });
            });
        }

    }


    function justified_gallery(){
        if($('.justified-wrap-gallery .gallery-wrap').length){
            var image_height = $(window).height()/4;

            if($(window).width() < 992){
                image_height = $(window).height()/4;
            }

            $('.justified-wrap-gallery .gallery-wrap').justifiedGallery({
                rowHeight : image_height,
                lastRow : 'nojustify',
                margins : 25
            });
        }

        if($('.justified-images-wrap .gallery').length){
            $( 'body' ).addClass('justified-for-animated');

            $( ".justified-images-wrap .main-image img" ).hover(
                function() {
                    $( this ).closest('.vc_row').addClass('not-opacity');
                    $( 'body' ).addClass('justified-opacity');
                }, function() {
                    $( this ).closest('.vc_row').removeClass('not-opacity');
                    $( 'body' ).removeClass('justified-opacity');
                }
            );

            var image_height = $(window).height()/7;
            var margins = 25;

            if($(window).width() < 768){
                image_height = $(window).height()/7;
                margins = 15;
            }

            $('.justified-images-wrap .gallery').justifiedGallery({
                rowHeight : image_height,
                lastRow : 'nojustify',
                margins : margins
            });
        }
    }


    $('.justified-images-wrap .gallery a').on('click', function (e) {

        e.preventDefault();

        var url1_full = $(this).attr('href');
        var title = $(this).attr('data-title');
        $(this).closest('.justified-images-wrap').find('.main-image img').attr('src', url1_full);
        $(this).closest('.justified-images-wrap').find('.main-image .title').text(title);

        if($(window).width() > $('.main-wrapper').attr('data-top')){
            $('html,body').animate({
                scrollTop: $(this).closest('.justified-images-wrap').offset().top - 20
            }, 700);
        }else{
            $('html,body').animate({
                scrollTop: $(this).closest('.justified-images-wrap').offset().top - $('.header_top_bg').height()
            }, 700);
        }


    });


    $(window).on('load', function () {

        justified_gallery();

        if($('.full_slider .menu-button').length){
            if($('.full_slider .menu-button').hasClass('active')){
                if($('header').hasClass('static')){
                    $('body').toggleClass('static-menu');
                }else if($('header').hasClass('aside-menu')){
                    $('body').toggleClass('body-aside-menu');
                }

                $('.header_top_bg').slideToggle(1);


                $(window).trigger('resize');


                if($('header').hasClass('aside-menu') && !$('header').hasClass('static')) {
                    $('.full_slider .slider-single').closest('.vc_row-fluid.vc_row-no-padding').css({
                        'min-width' : '100vw',
                        'min-height' : '100vh'
                    });
                }
                $('.full_slider .slider-single').slick('reinit');
            }
        }

        typeRect();

    });
    $(window).on('load resize', function () {
        if ($('.with_thumbnile .thumb-slider-wrapp').length) {
            initThumbFlexSlider();
        }
        modernslider();
        classic_grid();
        portfolioIsotope();
    });

    window.addEventListener("orientationchange", function() {
        modernslider();
        classic_grid();
        portfolioIsotope();
    });


})(jQuery, window, document);