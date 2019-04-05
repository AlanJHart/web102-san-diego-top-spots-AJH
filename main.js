// $(document).ready(function() {
// // write your code here

var data = [];
$.getJSON("data.json", function(data) {
// Create empty table (id="data-list" must exist in html)
var columnHeadings = Object.keys(data[0]);
var columnCount = columnHeadings.length;
var rowCount = data.length;
var table = document.createElement('table');
document.getElementById("data-list").appendChild(table);
// Create table header row (thead)
var header = table.createTHead();
var row = header.insertRow(-1);
for (var i = 0; i < columnCount; i++) {
    var headerCell = document.createElement('th');
    headerCell.innerText = columnHeadings[i].toUpperCase();
    row.appendChild(headerCell);
}
// Create table body element (tbody)
var tBody = document.createElement('tbody');
table.appendChild(tBody);

for(var i = 0; i < data.length; i++) {
    var nameData = data[i].name;
    var descrData = data[i].description;
    var localLongData = data[i].location[0];
    var localLatData = data[i].location[1];
    row = table.insertRow(i);
    var name = row.insertCell(0);
    var description = row.insertCell(1);
    var location = row.insertCell(2);
    name.innerHTML = nameData;
    description.innerHTML = descrData;
    location.innerHTML = ("https://www.google.com/maps?q=" + localLongData + "," + localLatData);

}
})

