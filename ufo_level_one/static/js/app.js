//starter file from TA - Erin Wills
// provided comments for basic version of HW
// included function names and filteredData variable

// from data.js
let tableData = data;

//reference table body
let tbody = d3.select("tbody");

// Console.log the ufo data from data.js
console.log(tableData);

function buildTable(tableData) {
    // When the page loads, it needs to display the table
    // But if the table reloads then you may need to ensure the 
    // previous output is cleared/overwritten from scratch 
  
    // Think of the class activities for generating tables
    tableData.forEach((ufoReport) => {
        let row = tbody.append("tr");
        Object.entries(ufoReport).forEach(([key, value]) => {
          let cell = row.append("td");
          cell.text(value);
        });
      });
  }
  
  function handleClick() {
  
    // Grab the datetime value from the filter
    let inputElement = d3.select("#datetime");
    let inputValue = inputElement.property("value");
    
    console.log(inputValue);
  
    // grab all the table data and set to filteredData
    let filteredData = tableData.filter(d => d.datetime === inputValue);
    console.log(filteredData);
    // Check to see if a date was entered and filter the
    // data using that date.
    let dates = tableData.map(tableData => tableData.datetime);
    console.log(dates);
    // if (inputValue in dates) {
    //     console.log(filteredData);
    //     buildTable(filteredData);
    // }
    // else {
    //     d3.select(".filter_error").text("That date doesn't exist in our data. Enter a new date");
    // }

    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    // take your filtered data and put it into the buildTable to rebuild the table with the filtered data
    // buildTable(filteredData);
  };
  
  // Attach an event to listen for the form button that calls handleClick on a click of the filter button
  let button = d3.select("#filter-btn");
  button.on("click", handleClick);
  
  // Build the table when the page loads
  buildTable(tableData);
  