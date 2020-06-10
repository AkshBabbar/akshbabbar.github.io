var category;
var preferences = [];

$(".submit").click(function() {
    var veg = $("#veg").is(":checked");
    var nonveg = $("#nonveg").is(":checked");
    if (veg == true) {
        category = ".veg";
    } else if (nonveg == true) {
        category = ".nonveg";
    } else {
        category = ".nop";
    }

    var glutenFree = $("#gluten").is(":checked");
    var lactose = $("#lactose").is(":checked");
    var organic = $("#organic").is(":checked");

    if (glutenFree) {
        preferences.push(".glutenFree");
    }
    if (lactose) {
        preferences.push(".lactoseFree");
    }
    if (organic) {
        preferences.push(".organic");
    }
    if ($("#none2").is(":checked")) {
        preferences.push(".none");
        if (preferences.length != 1) {
            alert("You cannot choose other preferences if you selected No Preference");
        }
    }
    localStorage.setItem("category", category);
    localStorage.setItem("prefs", preferences);
    window.location.href = "pages/products.html";
});