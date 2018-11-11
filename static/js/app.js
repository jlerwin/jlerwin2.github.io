// from data.js
var tableData = data;

var tbody = d3.select("tbody");

data.forEach(function(ufoReport){
    var row = tbody.append("tr");
    var data_formatted = Object.entries(ufoReport);
    data_formatted.forEach(function(row_data){
        row.append("td").text(row_data[1]);
    });
});


var button = d3.select("#filter-btn");
button.on("click", function () {
        
    d3.event.preventDefault();
    var inputField = d3.select("#datetime");
    var inputValue = inputField.property("value");
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
   
    console.log(filteredData);

    var cleartbody = document.getElementById("tbo");
    cleartbody.innerHTML = "";

    filteredData.forEach(function(ufoReport2){
        var row = tbody.append("tr");
        var data_formatted = Object.entries(ufoReport2);
        data_formatted.forEach(function(row_data){
            row.append("td").text(row_data[1]);
        });
    });
});
