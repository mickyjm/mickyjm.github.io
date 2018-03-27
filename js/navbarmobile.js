/**
 ** JS file for Mobile Navigation Menu
 ** @author Micky (Micky) Mangrobang
 **/

$(document).ready(function () {

    $('.sidebar-icon').click(function() {

        // variables, in case ID & class names were to change
        let t = this;
        let o = 'opened';
        let s = '#mobileSidebar';
        let i = '#mobileSidebar .item';
        let toggleWidth = $(s).width() == 0 ? "100vw" : "0";

        if (toggleWidth == "100vw") {

            $(t).toggleClass(o);
            $(s).animate({ width: toggleWidth }, 500);
            $(i).transition('hide');

            setTimeout(function() {
                $(i).transition({
                    animation   : 'fade down',
                    interval    : 50
                });
            }, 300);

        } else {

            $(i).transition({
                animation   : 'fade down',
                interval    : 50,
                reverse     : true
            });

            setTimeout(function() {
                $(s).animate({ width: 0 }, 500);
                $(t).toggleClass(o);
            }, 500);

        }

    });

    $('#mobileSidebar').find('a.item').click(function(){

        // variables, in case ID & class names were to change
        let t = '.sidebar-icon';
        let o = 'opened';
        let s = '#mobileSidebar';
        let i = '#mobileSidebar .item';
        let h = '#home';
        let href = $(this).attr('href');

        $(i).transition({
            animation   : 'fade down',
            interval    : 50,
            reverse     : true
        });

        setTimeout(function() {
            $(s).animate({ width: 0 }, 500);
            $(t).toggleClass(o);
        }, 500);

        if (href == h) {

            $('html, body').animate({ scrollTop: 0 }, 500);

        } else {

            let anchor = $(href).offset();
            $('html, body').animate({ scrollTop: anchor.top }, 500);

        }

        return false;

    });

});
