$(document).ready(function () {
    "use strict";
    $('.btn-1').click(function () {
        var currentSlide = $('.slide-active'), thisSlide = $('.slide-1'),
            currentBtn = $('.btn-active'), thisBtn = $('.btn-1'),
            otherBtn = $('.btn-2, .btn-3, .btn-4');
        
        if (!thisSlide.hasClass('slide-active')) {
            currentSlide.slideUp(300).removeClass('slide-active');
            thisSlide.slideDown(300).addClass('slide-active');
        }
        
        if (!thisBtn.hasClass('btn-active')) {
            currentBtn.removeClass('btn-active');
            thisBtn.removeClass('btn-link');
            thisBtn.addClass('btn-active');
            otherBtn.addClass('btn-link');
        }
    });
    $('.btn-2').click(function () {
        var currentSlide = $('.slide-active'), thisSlide = $('.slide-2'),
            currentBtn = $('.btn-active'), thisBtn = $('.btn-2'),
            otherBtn = $('.btn-1, .btn-3, .btn-4');
    
        if (!thisSlide.hasClass('slide-active')) {
            currentSlide.slideUp(300).removeClass('slide-active');
            thisSlide.slideDown(300).addClass('slide-active');
        }
        
        if (!thisBtn.hasClass('btn-active')) {
            currentBtn.removeClass('btn-active');
            thisBtn.removeClass('btn-link');
            thisBtn.addClass('btn-active');
            otherBtn.addClass('btn-link');
        }
    });
    $('.btn-3').click(function () {
        var currentSlide = $('.slide-active'), thisSlide = $('.slide-3'),
            currentBtn = $('.btn-active'), thisBtn = $('.btn-3'),
            otherBtn = $('.btn-1, .btn-2, .btn-4');
    
        if (!thisSlide.hasClass('slide-active')) {
            currentSlide.slideUp(300).removeClass('slide-active');
            thisSlide.slideDown(300).addClass('slide-active');
        }
        
        if (!thisBtn.hasClass('btn-active')) {
            currentBtn.removeClass('btn-active');
            thisBtn.removeClass('btn-link');
            thisBtn.addClass('btn-active');
            otherBtn.addClass('btn-link');
        }
    });
    $('.btn-4').click(function () {
        var currentSlide = $('.slide-active'), thisSlide = $('.slide-4'),
            currentBtn = $('.btn-active'), thisBtn = $('.btn-4'),
            otherBtn = $('.btn-1, .btn-2, .btn-3');
    
        if (!thisSlide.hasClass('slide-active')) {
            currentSlide.slideUp(300).removeClass('slide-active');
            thisSlide.slideDown(300).addClass('slide-active');
        }
   
        if (!thisBtn.hasClass('btn-active')) {
            currentBtn.removeClass('btn-active');
            thisBtn.removeClass('btn-link');
            thisBtn.addClass('btn-active');
            otherBtn.addClass('btn-link');
        }
    });
});