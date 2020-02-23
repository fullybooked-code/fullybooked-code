$( document ).ready(function() {
    console.log("enter");
    $('#datetimepicker12').datepicker({
        // inline: true,
        // sideBySide: true
    });
});

$(document).on('click', '.timepicker-time', function(){
    console.log("enter");
    $(this).removeClass("timepicker-time-active");
    $(this).addClass("timepicker-time-active");
});