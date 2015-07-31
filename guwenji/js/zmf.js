$(document).ready(function () {
    $(window).scroll(function () {
        if ($('#posthead').length > 0) {
            var h = parseInt($('#posthead').offset().top) + parseInt($('#posthead').outerHeight());
            $('#sectionNav .list>li').each(function () {
                var _dom = $(this);
                var _h = _dom.offset().top;
                if (_h >= h) {
                    _dom.removeClass('white').addClass('black');
                } else {
                    _dom.removeClass('black').addClass('white');
                }
            });
        }
    });

    $('.anchorLink').click(function () {
        var _rel = $(this).attr("href").substr(1);
        if ($("#" + _rel).length > 0) {
            var _targetTop = $("#" + _rel).offset().top - 45;
            $("html,body").animate({scrollTop: _targetTop}, 800);
        }
    });
})