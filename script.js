var SHG = SHG || {};

(function($, SHG) {
    var init = function() {
        initMobileMenu();
        initHeader();
        headerActive();
        initResize();
    };
    var initMobileMenu = function() {
        //open menu
        var $burger = $(".shg-header-container .mobile-burger");
        var $mobileMenu = $(".shg-header-container .mobile-menu");
        
        $burger.click(function(e) {
            if ($(this).hasClass("active")) closeMobileMenu();
            else openMobileMenu();
        });
        
        //logo drop down
        var $logo = $(".shg-header-container .mobile-menu li.logo-item");
        $logo.click(function(e) {
            $(this).toggleClass("active");
        });
    };
    var openMobileMenu = function() {
        var $burger = $(".shg-header-container .mobile-burger");
        var $mobileMenu = $(".shg-header-container .mobile-menu");

        $burger.addClass("active");
        $mobileMenu.addClass("active");
    };
    var closeMobileMenu = function() {
        var $burger = $(".shg-header-container .mobile-burger");
        var $mobileMenu = $(".shg-header-container .mobile-menu");
        
        $burger.removeClass("active");
        $mobileMenu.removeClass("active"); 
    };
    var initHeader = function(){
        $(".desktop-header-container").hover(function() {
            $(".shg-header-container").addClass("open");
            $(".social-container-overlay-bg").addClass("shade");
        },function(){
            $(".shg-header-container").removeClass("open");
            $(".social-container-overlay-bg").removeClass("shade");
        });
    };
    var headerActive = function(){
        var aUrl = window.location.pathname;

        $(".shg-header-container .top-shg-nav").find(".active").removeClass("active");
        $('.shg-header-container .top-shg-nav a[href="'+ aUrl +'"]').parent().addClass("active");
    };
    var initResize = function() {
        $(window).resize(function() {
            if (window.innerWidth > 1024) {
                if ($(".shg-header-container .mobile-burger").hasClass("active")) {
                    closeMobileMenu();
                }
            }
        });
    };
    $(init);
})(jQuery, SHG);