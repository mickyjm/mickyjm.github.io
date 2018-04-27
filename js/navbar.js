/**
 ** JS file for Desktop Navigation Menu
 ** @author Micky (Micky) Mangrobang
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
        let div = 'div#my-name div.twelve.wide.middle.aligned.column';
        let m = $(menu);
        let d = $(div)
        m.toggleClass('scrolled', $(this).scrollTop() > d.height());

    });

});
