// Some Scroll Navigation
var linePos;
function setLine(el) {
    linePos = el

    // Element that the indicator is under
    var elWidth = $(el).outerWidth(); // Width
    var elPos = $(el).position().left; // Position from the left    
    var elcPos = elPos + elWidth / 2; // Position from the center     

    // Indicator line
    var iWidth = $(".indicator").outerWidth(); // Width
    var iPos = $(".indicator").position().left; // Position from the left  
    var icPos = iPos + iWidth / 2; // Position from the center

    var distance = Math.abs(elcPos - icPos); // Distance between both the elements
    var length = distance + (elWidth + iWidth)/2; // Length end to end between both elements
    var center = (elcPos + icPos) / 2; // In the center of both elements

    // Animation
    $(".indicator")
        .stop(true).animate({
            "width": length,
            "left": center - length / 2 + "px"
        })
        .animate({
            "width": elWidth,
            "left": elPos + "px"
        })
        .css({
            "left": elPos
        })

}
// Finds the active navigation element
function selectActive() {
    $('.nav_el').each(function () {
        var scrollPos = $(document).scrollTop() + 61; // Position of scroll with offset for navigation bar clearence
        var linkRef = $($(this).attr("href")); // Refrence Link
        var refPos = linkRef.position().top; // Position of refrencing element
        var refHeight = linkRef.height(); // Hieght of the refrencing element
        if (refPos <= scrollPos && refPos + refHeight > scrollPos && this != linePos) {
            $('.nav_el').removeClass("nav_active");
            $(this).addClass("nav_active");
            setLine(this)
        };
    })
}
function reposition(){
    $('.nav_el').each(function () {
        var scrollPos = $(document).scrollTop() + 61; // Position of scroll with offset for navigation bar clearence
        var linkRef = $($(this).attr("href")); // Refrence Link
        var refPos = linkRef.position().top; // Position of refrencing element
        var refHeight = linkRef.height(); // Hieght of the refrencing element
        if (refPos <= scrollPos && refPos + refHeight > scrollPos) {
            $('.indicator').stop(true).css({"left": $(this).position().left})
        };
    })
}
// On dom load
$(function () {
    $('a[href^="#"]:not([href="#"])').on('click', function () {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).position().top - 60
        }, 500);
        return false;
    });

    selectActive();

    $(window).on("scroll", selectActive)
    $(window).on("resize", reposition)

})