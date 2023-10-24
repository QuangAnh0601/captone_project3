$("input[type=checkbox]").click(function () { 
    if ($(this).is(':checked')) {
        $($(this)).next().css("position", "absolute");
        $($(this)).next().css("background-color", "black");
    } else {
        $($(this)).next().css("position", "relative");
        $($(this)).next().css("background-color", "unset");
    }
});

$(".bar svg").click(function() {
    $(this).closest(".col-lg-3").hide();
});