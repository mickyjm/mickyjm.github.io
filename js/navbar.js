/**
 ** JS file for Desktop Navigation Menu
 ** @author: Micky Mangrobang
 **/

$(document).ready(function () {

    $('nav.ui.fixed.borderless.menu').find('a.item').click(function(){

        // variables, in case ID & class names were to change
        let h = '#home';
        let menu = 'nav.ui.fixed.borderless.menu';
        let href = $(this).attr('href');
        let anchor = $(href).offset();
        let menuHeight = (href == h) ? 0 : $(menu).height();

        $('html, body').animate({ scrollTop: anchor.top - menuHeight }, 500);

        return false;

    });

    $(document).scroll(function () {

        // variables, in case ID & class names were to change
        let menu = 'nav.ui.fixed.borderless.menu';
        let m = $(menu);
        m.toggleClass('scrolled', $(this).scrollTop() > m.height());

    });

});
