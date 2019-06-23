$(document).ready(function () {
    var lineChartData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "My First dataset",
                fillColor: "rgba(220,220,220,0.2)",
                strokeColor: "rgba(220,220,220,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [100, 150, 75, 50, 25, 49, 80]
            }
        ]
    }

    window.onload = function () {
        var chart_lineChart = document.getElementById("lineChart").getContext("2d");
        window.myLine = new Chart(chart_lineChart).Line(lineChartData, {
            responsive: true
        });
    };
});