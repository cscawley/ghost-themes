/*jslint browser:true, unparam:true*/
/*global $, FastClick, Steady, requestAnimationFrame*/

$(function () {

    'use strict';

    // Some variables we'll need for animation
    var blur = document.getElementById('blur').style,
        ticking = false;

    // Execute FastClick.js
    FastClick.attach(document.body);

    // Update the post image blur
    function update() {
        var s = $(window).scrollTop();
        blur.opacity = s / 150;
        ticking = false;
    }

    // Magic to help improve blur performance
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(update);
            ticking = true;
        }
    }

    // Add event listener to scroll
    window.addEventListener('scroll', requestTick, false);

    // Social sharing links
    $('#twitter').click(function () {
        window.open(this.href, 'twitter-share', 'width=550,height=235');
        return false;
    });

    $('#facebook').click(function () {
        window.open(this.href, 'facebook-share', 'width=580,height=296');
        return false;
    });

    $('#google-plus').click(function () {
        window.open(this.href, 'google-plus-share', 'width=490,height=530');
        return false;
    });

});
