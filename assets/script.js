var today = moment().format("dddd");
var date = moment().format("MMMM Do YYYY");

var eventList = ["", "", "", "", "", "", "", "", ""];

//display current date
$("#currentDay").text(today + ", " + date);

//when click save button, store user input to the evenlist array
$(".btn").on("click", function () {
    var currentTimeBlock = $(this).val();
    var inputArea = "[value=inputArea" + $(this).val() + "]";
    var input = $(inputArea).val().trim();
    eventList[currentTimeBlock] = input;
    console.log(eventList);
});