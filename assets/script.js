var today = moment().format("dddd");
var date = moment().format("MMMM Do YYYY");

$("#currentDay").text(today + ", " + date);