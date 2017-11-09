$(document).ready(function () {
    "use strict";
    $('.navbtn-1').click(function () {
        var currentSlide = $('.slide-active'), thisSlide = $('.slide-1'),
            currentBtn = $('.navbtn-active'), thisBtn = $('.navbtn-1'),
            otherBtn = $('.navbtn-2, .navbtn-3, .btn-4');
        
        if (!thisSlide.hasClass('slide-active')) {
            currentSlide.hide(500).removeClass('slide-active');
            thisSlide.show(500).addClass('slide-active');
        }
        
        if (!thisBtn.hasClass('navbtn-active')) {
            currentBtn.removeClass('navbtn-active');
            thisBtn.removeClass('navbtn');
            thisBtn.addClass('navbtn-active');
            otherBtn.addClass('navbtn');
        }
    });
    $('.navbtn-2').click(function () {
        var currentSlide = $('.slide-active'), thisSlide = $('.slide-2'),
            currentBtn = $('.navbtn-active'), thisBtn = $('.navbtn-2'),
            otherBtn = $('.navbtn-1, .navbtn-3, .btn-4');
    
        if (!thisSlide.hasClass('slide-active')) {
            currentSlide.hide(500).removeClass('slide-active');
            thisSlide.show(500).addClass('slide-active');
        }
        
        if (!thisBtn.hasClass('navbtn-active')) {
            currentBtn.removeClass('navbtn-active');
            thisBtn.removeClass('navbtn');
            thisBtn.addClass('navbtn-active');
            otherBtn.addClass('navbtn');
        }
    });
    $('.navbtn-3').click(function () {
        var currentSlide = $('.slide-active'), thisSlide = $('.slide-3'),
            currentBtn = $('.navbtn-active'), thisBtn = $('.navbtn-3'),
            otherBtn = $('.navbtn-1, .navbtn-2, .btn-4');
    
        if (!thisSlide.hasClass('slide-active')) {
            currentSlide.hide(500).removeClass('slide-active');
        }
        
        if (!thisBtn.hasClass('navbtn-active')) {
            currentBtn.removeClass('navbtn-active');
            thisBtn.removeClass('navbtn');
            thisBtn.addClass('navbtn-active');
            otherBtn.addClass('navbtn');
        }
    });
});