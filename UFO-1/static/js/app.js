// from data.js
var tableData = data;

// YOUR CODE HERE!
// from data.js
var tableData = data;
//check that data appears in console
console.log(tableData)
    // YOUR CODE HERE!
var tbody = d3.select("tbody")
    //Act 2 stu3- code taken from activity


tableData.forEach(function(ufoSighting) {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(function([key, value]) {
        //console.log(key, value);
        var cell = row.append("th");
        cell.text(value);

    });
});

var button = d3.select('#filter-btn')
button.on("click", function() {
    //prevent refresh somewhere in this code if needed 

    //input date in box 
    var inputElement = d3.select("#datetime");
    //how to enter the button
    //takes the date that was inputted 
    var inputValue = inputElement.property("value");

    //take the inputted data and filter data on chart to show results 
    // Filters data after input is entered. Do I need a for loop each tr to be printed

    var filteredData = tableData.filter(sumData => sumData.datetime === inputValue);
    console.log(filteredData) // can print on console 



    //how can i push the update to the html chart 

    //can this update the chart?
    // var row = tbody.append("tr");
    // Object.entries(filteredData).forEach(function([key, value]) {
    //     //console.log(key, value);

    //     var cell = row.append("th");
    //     cell.text(value);
    // })

    //filteredData.text(tr)
    //now get it to update the html chart

    //changes only the title of the chart

})



//d3.select("ufo-table").text(filteredData);

//////////////////////////////////////////////////////////////////////
//trial code
// tableData.forEach((ufoSighting) => {
//     var row = tbody.append("tr");
//     Object.entries(ufoSighting).forEach(([key, value]) => {
//         var cell = row.append("th");
//         cell.text(value);
//     });
// });

//testing some code found online
//function dateEnter(ufoSighting) {
//     return tableData === document.getElementById("datetime").value;
// }

// function button() {
//     document.getElementById("datetime").innerHTML = dateData.filter(dateEnter);
// }


////////////////////////////////////////////////////////////////////////
//  Select the button
// var button = d3.select("#button", ufoSighting); // selects the button 
// button.on("click", function(ufoSighting) {
// //prevent refresh somewhere in this code
//     var inputElement = d3.select("#datetime");
//     var inputValue = inputElement.node("value");

//     var filteredData = tableData.filter(data => tableData.datetime === inputValue);
//     console.log(filteredData);
// });

///////////////////////////////////////////////////////////////////////////////////
//Notes:
//form id "datetime" line 40  <- data must be inputted 
//button class btn btn-default <button to send response and display the data that has been filtered. 
//crate a foreach or a for loop to print all data