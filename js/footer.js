/**
 ** JS file for Footer Navigation Menu
 ** @author Micky (Micky) Mangrobang
 **/

$(document).ready(function () {

    $('#footer-nav').find('a.item').click(function(){

        // variables, in case ID & class names were to change
        let h = '#home';
        let menu = '#footer-nav';
        let href = $(this).attr('href');
        let anchor = $(href).offset();
        let menuHeight = ($(menu).is(':visible') || href == h) ? $(menu).height() : 0;

        $('html, body').animate({ scrollTop: anchor.top - menuHeight }, 500);

        return false;

    });

});
