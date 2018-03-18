/**
 ** @author: Micky Mangrobang
 **/

$(document).ready(function () {

    $(this).scrollTop(0);

    $('nav.ui.fixed.menu').find('a').click(function(){
        var href = $(this).attr('href');
        //var $anchor = $('#'+$href).offset();
        if (href == '#home') {
            $('body').animate({ scrollTop: 0 }, 500);
        } else {
            var anchor = $(href).offset();
            $('body').animate({ scrollTop: anchor.top }, 500);
        }
        return false;
    });

    $(document).scroll(function () {
        var $nav = $(".ui.fixed.menu");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });

});
