/**
 ** @author: Micky Mangrobang
 **/

$(document).ready(function () {

    $(this).scrollTop(0);

    $('nav.ui.fixed.borderless.menu').find('a.item').click(function(){

        let h = '#home';
        let href = $(this).attr('href');

        if (href == h) {

            $('html, body').animate({ scrollTop: 0 }, 500);

        } else {

            let anchor = $(href).offset();
            let menuHeight = $('.ui.fixed.borderless.menu').height();
            $('html, body').animate({ scrollTop: anchor.top - menuHeight }, 500);

        }

        return false;

    });

    $(document).scroll(function () {

        let nav = $('.ui.fixed.borderless.menu');
        $nav.toggleClass('scrolled', $(this).scrollTop() > nav.height());

    });

});
