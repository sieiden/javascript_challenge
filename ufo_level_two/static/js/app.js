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
    //enter data into table
    tableData.forEach((ufoReport) => {
        let row = tbody.append("tr");
        Object.entries(ufoReport).forEach(([key, value]) => {
          let cell = row.append("td");
          cell.text(value);
        });
      });
  };
  
  function handleClick() {
    d3.event.preventDefault();
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
    if (dates.includes(inputValue)) {
        console.log(filteredData);
        console.log("if statement works");
        //clears error message if exists
        d3.select(".filter_error").text("");
        //clears any previous data in table
        tbody.html("");
    }
    else if (inputValue === ""){
        //clears error message if exists
        d3.select(".filter_error").text("");
        //loads original data (no filter) into table
        buildTable(tableData);
    }
    else if (!dates.includes(inputValue)){
        tbody.html("");
        d3.select(".filter_error").text("That date doesn't exist in our data. Enter a new date");
        console.log("That date does not exist");
    }

    // Rebuild the table using the filtered data
    buildTable(filteredData);
  };
  
  // Attach an event to listen for the form button that calls handleClick on a click of the filter button
  let button = d3.select("#filter-btn");
  button.on("click", handleClick);
  
  // Build the table when the page loads
  buildTable(tableData);
  