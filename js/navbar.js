/**
 ** @author: Micky Mangrobang
 **/

$(document).ready(function () {

    $(this).scrollTop(0);

    $('nav.ui.fixed.menu').find('a.item').click(function(){
        var href = $(this).attr('href');
        //var $anchor = $('#'+$href).offset();
        if (href == '#home') {
            $('html, body').animate({ scrollTop: 0 }, 500);
        } else {
            var anchor = $(href).offset();
            var menuHeight = $('.ui.fixed.borderless.menu').height();
            $('html, body').animate({ scrollTop: anchor.top - menuHeight }, 500);
        }
        return false;
    });

    $(document).scroll(function () {
        var $nav = $(".ui.fixed.menu");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });

});
