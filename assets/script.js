var eventList = ["", "", "", "", "", "", "", "", ""];

//display current date
$("#currentDay").text(moment().format("dddd") + ", " + moment().format("MMMM Do YYYY"));

//display any localstorage event and change text area background color
printEventList();

//when click save button, store user input to the evenlist array
$(".btn").on("click", function () {
    var currentTimeBlock = $(this).val();
    var inputArea = "[value=inputArea" + $(this).val() + "]";
    var input = $(inputArea).val().trim();
    eventList[currentTimeBlock] = input;
    localStorage.setItem("event", JSON.stringify(eventList));
});

function printEventList() {
    var currentHour = moment().hour();

    //if no localstorage of "event" then don't print
    if (JSON.parse(localStorage.getItem("event")) !== null) {
        eventList = JSON.parse(localStorage.getItem("event"));
        for (let i = 0; i < 9; i++) {
            var inputArea = "[value=inputArea" + i + "]";
            $(inputArea).val(eventList[i]);
        }
    }

    //change the text area background color according to the time
    if (currentHour < 9) {
        $(".form-control").addClass("bg-success");
    } else if (currentHour > 17) {
        $(".form-control").addClass("bg-secondary");
    } else {
        currentHour = currentHour - 9;
        var currentHourTextArea = "[value=inputArea" + currentHour + "]";
        $(currentHourTextArea).removeClass("bg-success");
        $(currentHourTextArea).addClass("bg-danger");
        if (currentHour > 0) {
            for (let i = 0; i < currentHour; i++) {
                var pastTextArea = "[value=inputArea" + i + "]";
                $(pastTextArea).removeClass("bg-success");
                $(pastTextArea).addClass("bg-secondary");
            }
        }
    }
}