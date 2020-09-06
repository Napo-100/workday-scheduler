$("#currentDay").text(moment().format("dddd MMMM Do YYYY"));

var currentHour = moment().hour();


$(document).ready(function () {

    //save function
    $(".saveBtn").on("click", function () {
        var hourText = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, hourText);

    });

    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));


    var timeCounter = 9;


   $(".time-block").each(function (e) {
        console.log(currentHour, timeCounter)
        if (timeCounter < currentHour) {
            $(this).addClass("past");
        } else if (timeCounter === currentHour) {
            $(this).addClass("present");
        } else  {
            $(this).addClass("future");
        }
        timeCounter++;
    });

})




