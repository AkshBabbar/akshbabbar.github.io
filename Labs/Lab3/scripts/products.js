$(document).ready(function() {
    $("div.card").css("display", "none");
    // var cat = localStorage.getItem("category");
    // var prefs = localStorage.getItem("prefs");
    var cat = Cookies.get("category");
    var prefs = Cookies.get("prefs");
    alert(cat);
    prefs = cat + prefs.replaceAll(",", '');
    $(prefs).css("display", "block");
});

var price = 0;
$(".card").one("click", function() {
    var click = 1;
    if (click == 1) {
        $(this).addClass("card-selected");
        price = price + parseFloat($(this).find("p span").text());
    }
});


$("#myBtn").one("click", function() {
    var selectedItems = $(".card-selected");
    var addItems = selectedItems.map(function(index) {
        var outer = '<div class ="cart-item-container">';
        var name = '<h3 class="cart-heading">' + $(this).find("h4").text() + '</h3>';
        var price = '<p class="cart-text">' + $(this).find("p").text() + '</p>';
        var outerEnd = '</div>';
        $(".cart-container").append(outer, name, price, outerEnd);
    });
    var final = '<p class="finalPrice">Your Total Price is: <b>$' + price + "</b></p>";
    $(".cart-container").append(final);
});