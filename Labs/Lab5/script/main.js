var total = 0;
var expert;
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
    $("#reqd-service").prop('disabled', true);
});

$(".select-expert").click(function() {
    $(".barber-info>.btn").removeClass("selected").text("Select Expert");
    $(this).html('<i class="far fa-check-circle"></i> Selected').addClass("selected");

});

$(".barbers").click(function() {
    var text = $(this).children(".barber-info").children("h4").text();
    expert = text.replace(/\s+/g, '-').toLowerCase();
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


$(function() {
    $("#date").datepicker({
        dateFormat: setDateFormat,
        // no calendar before June 1rst 2020
        minDate: new Date('06/01/2020'),
        maxDate: '+4M',
        // used to disable some dates
        beforeShowDay: $.datepicker.noWeekends,
        beforeShowDay: disableDates
    });
    // $("#date").prop('disabled', true);
});



var unavailableDates = ["06/29/2020", "06/15/2020", "06/23/2020", "06/12/2020"]
const setDateFormat = "mm/dd/yy";

function disableDates(date) {
    // Sunday is Day 0, disable all Sundays
    if (date.getDay() == 0) {
        return [false];
    }
    if (expert == "wallace-bryan" && date.getDay() == 3) {
        return [false];
    }
    if (expert == "percy-duke" && date.getDay() == 5) {
        return [false];
    }
    if (expert == "conner-bain" && date.getDay() == 4) {
        return [false];
    }
    if (expert == "claire-mora" && date.getDay() == 1) {
        return [false];
    }
    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [unavailableDates.indexOf(string) == -1]
}

$('#time').timepicker({
    timeFormat: 'hh:mm p',
    interval: 60,
    minTime: '9:00am',
    maxTime: '6:00pm',
    startTime: '09:00',
    dynamic: false,
    dropdown: true,
    scrollbar: true
});

$(".submit-btn").on("click", function() {
    var a = document.getElementById("phone").value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    var filter = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
    if ((filter.test(a) == false) || (a.length != 10)) {
        alert("Invalid Phone Number");
    }
    $('#exampleModal').on('shown.bs.modal', function() {
        $('#myInput').trigger('focus')
    })
});

$(".total-check").on("click", function() {
    $(this).html("Your Total is : $" + total);
});
$(".total-check").on("mouseenter", function() {
    $("#tooltip").css("opacity", "1");
});
$(".total-check").on("mouseleave", function() {
    $("#tooltip").css("opacity", "0");
});