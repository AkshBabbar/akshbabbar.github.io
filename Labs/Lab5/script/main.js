var total = 0;
var services = [];

$(".select-service").click(function() {
    var servicePrice = parseInt($(this).parent().children(".price").children().html());
    if ($(this).hasClass("selected") == false) {
        $(this).html('<i class="far fa-check-circle"></i> Selected').addClass("selected");
        $(this).parent().parent().addClass("service-card-selected");
        total = total + servicePrice;
        services.push($(this).parent().children("h4").text());
    } else {
        $(this).html("Select Service").removeClass("selected");
        $(this).parent().parent().removeClass("service-card-selected");
        total = total - servicePrice;
        services.splice(services.indexOf($(this).parent().children("h4").text()), 1);
    }
    $("#reqd-service").val("Services: " + services);
});

$(".barbers").click(function() {
    var text = $(this).children(".barber-info").children("h4").text();
    $("#reqd-expert").val("Expert: " + text);
});

$("#reqd-service").click(function() {
    if ($(this).val() == "") {
        $('html, body').animate({
            scrollTop: $("#services").offset().top
        }, 500);
    }
});

$("#reqd-expert").click(function() {
    if ($(this).val() == "") {
        $('html, body').animate({
            scrollTop: $("#experts").offset().top
        }, 500);
    }
});

$(".nav-item.nav-link").click(function() {
    $(".nav-item.nav-link").removeClass("active");
    $(this).addClass("active");
});

function finalServices() {

}