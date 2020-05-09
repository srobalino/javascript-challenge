// from data.js
var tableData = data;
//check that data appears in console
console.log(tableData)
    // YOUR CODE HERE!
var tbody = d3.select("tbody")
    //Act 2 stu3- code taken from activity

tableData.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    var row = tbody.append("tr");

    Object.entries(ufoSighting).forEach(function([key, value]) {
        console.log(key, value);
        //     // Append a cell to the row for each value
        //     // in the weather report object
        var cell = row.append("th");

    });
});

tableData.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
        var cell = row.append("th");
        cell.text(value);
    });
});