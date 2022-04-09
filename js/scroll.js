$(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $(".navbar-fixed").addClass("active");
    } else {
        //remove the background property so it comes transparent again (defined in css)
       $(".navbar-fixed").removeClass("active");
    }
});