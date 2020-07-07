// jQuery that will "listen" to the html index.html
$(document).ready(function() {
    $('form').on('submit', function() {
        $.ajax({
            type: 'POST',
            url: '/',
            data: $(this).serializeArray(), //req.body
            success: function(data) {
                $("#sid").css("display", "none");
                $("#sid").attr("disabled", true);
                $("#thankYou").css("display", "block");
            }
        });
        return false;
    });
});