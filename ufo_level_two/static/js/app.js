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
    let dateElement = d3.select("#datetime");
    let dateValue = dateElement.property("value");
    console.log(dateValue);

    //Grab the city value from the filter
    let cityElement = d3.select("#cityname");
    let cityValue = cityElement.property("value");
    console.log(cityValue);

    //Grab the state value from the filter
    let stateElement = d3.select("#statename");
    let stateValue = stateElement.property("value");
    console.log(stateValue);

    //Grab the country value from the filter
    let countryElement = d3.select("#countryname");
    let countryValue = countryElement.property("value");
    console.log(countryValue);

    //Grab the shape value from the filter
    let shapeElement = d3.select("#shapename");
    let shapeValue = shapeElement.property("value");
    console.log(shapeValue);

    //Grab all data from table
    let filteredData = [];

    // Check to see if a value/values was/were entered and filter the
    // data using that/those value(s).
    let dates = tableData.map(tableData => tableData.datetime);
    let cities = tableData.map(tableData => tableData.city);
    let states = tableData.map(tableData => tableData.state);
    let countries = tableData.map(tableData => tableData.country);
    let shapes = tableData.map(tableData => tableData.shape);
    if (dates.includes(dateValue)){
      if(cities.includes(cityValue)){
        if(states.includes(stateValue)){
          if(countries.includes(countryValue)){
            //clears error message if exists
            d3.select(".filter_error").text("");
            //clears table data if exists
            tbody.html("");
            //creates filter
            filteredData = tableData.filter(d => d.datetime === dateValue && d.city === cityValue && d.state === stateValue && d.country === countryValue);
            //prints filtered data to console
            console.log(filteredData);
          }
          else if (countryValue === ""){
            //clears error message if exists
            d3.select(".filter_error").text("");
            //clears table data if exists
            tbody.html("");
            //creates filter
            filteredData = tableData.filter(d => d.datetime === dateValue && d.city === cityValue && d.state === stateValue);
            //prints filtered data to console
            console.log(filteredData);
          }
          else if (!countries.includes(countryValue)){
            //clears table data if exists
            tbody.html("");
            //prints error message on page
            d3.select(".filter_error").text("That country doesn't exist in our data. Enter a new country");
            console.log("That country does not exist");
          }
        }
        else if (stateValue === ""){
          if (countries.includes(countryValue)){
            //clears error message if exists
            d3.select(".filter_error").text("");
            //clears table data if exists
            tbody.html("");
            //creates filter
            filteredData = tableData.filter(d => d.datetime === dateValue && d.city === cityValue && d.country === countryValue);
            //prints filtered data to console
            console.log(filteredData);
          }
          else if (countryValue === ""){
            //clears error message if exists
            d3.select(".filter_error").text("");
            //clears table data if exists
            tbody.html("");
            //creates filter
            filteredData = tableData.filter(d => d.datetime === dateValue && d.city === cityValue);
            //prints filtered data to console
            console.log(filteredData);
          }
          else if (!countries.includes(countryValue)){
            //clears table data if exists
            tbody.html("");
            //prints error message on page
            d3.select(".filter_error").text("That country doesn't exist in our data. Enter a new country");
            console.log("That country does not exist");
          }
        }
        else if (!states.includes(stateValue)){
          //clears table data if exists
          tbody.html("");
          //prints error message on page
          d3.select(".filter_error").text("That state doesn't exist in our data. Enter a new state");
          console.log("That state does not exist");
        } 
      }
      else if (cityValue === ""){
        if (states.includes(stateValue)){
          if (countries.includes(countryValue)){
            //clears error message if exists
            d3.select(".filter_error").text("");
            //clears table data if exists
            tbody.html("");
            //creates filter
            filteredData = tableData.filter(d => d.datetime === dateValue && d.state === stateValue && d.country === countryValue);
            //prints filtered data to console
            console.log(filteredData);
          }
          else if (countryValue === ""){
            //clears error message if exists
            d3.select(".filter_error").text("");
            //clears table data if exists
            tbody.html("");
            //creates filter
            filteredData = tableData.filter(d => d.datetime === dateValue && d.state === stateValue);
            //prints filtered data to console
            console.log(filteredData);
          }
          else if (!countries.includes(countryValue)){
            //clears table data if exists
            tbody.html("");
            //prints error message on page
            d3.select(".filter_error").text("That country doesn't exist in our data. Enter a new country");
            console.log("That country does not exist");
          }
        }
        else if (stateValue === ""){
          if(countries.includes(countryValue)){
            //clears error message if exists
            d3.select(".filter_error").text("");
            //clears table data if exists
            tbody.html("");
            //creates filter
            filteredData = tableData.filter(d => d.datetime === dateValue && d.country === countryValue);
            //prints filtered data to console
            console.log(filteredData);
          }
          else if (countryValue === ""){
            //clears error message if exists
            d3.select(".filter_error").text("");
            //clears table data if exists
            tbody.html("");
            //creates filter
            filteredData = tableData.filter(d => d.datetime === dateValue);
            //prints filtered data to console
            console.log(filteredData);
          }
          else if (!countries.includes(countryValue)){
            //clears table data if exists
            tbody.html("");
            //prints error message on page
            d3.select(".filter_error").text("That country doesn't exist in our data. Enter a new country");
            console.log("That country does not exist");
          }
        }
        else if(!states.includes(stateValue)){
          //clears table data if exists
          tbody.html("");
          //prints error message on page
          d3.select(".filter_error").text("That state doesn't exist in our data. Enter a new state");
          console.log("That state does not exist");
        }
      }
      else if(!cities.includes(cityValue)){
        //clears table data if exists
        tbody.html("");
        //prints error message on page
        d3.select(".filter_error").text("That city doesn't exist in our data. Enter a new city");
        console.log("That city does not exist");
      }
    }
    else if (dateValue === ""){
      if(cities.includes(cityValue)){
        if(states.includes(stateValue)){
          if(countries.includes(countryValue)){
            //clears error message if exists
            d3.select(".filter_error").text("");
            //clears table data if exists
            tbody.html("");
            //creates filter
            filteredData = tableData.filter(d => d.city === cityValue && d.state === stateValue && d.country === countryValue);
            //prints filtered data to console
            console.log(filteredData);
          }
          else if (countryValue === ""){
            //clears error message if exists
            d3.select(".filter_error").text("");
            //clears table data if exists
            tbody.html("");
            //creates filter
            filteredData = tableData.filter(d => d.city === cityValue && d.state === stateValue);
            //prints filtered data to console
            console.log(filteredData);
          }
          else if (!countries.includes(countryValue)){
            //clears table data if exists
          tbody.html("");
          //prints error message on page
          d3.select(".filter_error").text("That country doesn't exist in our data. Enter a new country");
          console.log("That country does not exist");
          }
        }
        else if (stateValue === ""){
          if (countries.includes(countryValue)){
            //clears error message if exists
            d3.select(".filter_error").text("");
            //clears table data if exists
            tbody.html("");
            //creates filter
            filteredData = tableData.filter(d => d.city === cityValue && d.country === countryValue);
            //prints filtered data to console
            console.log(filteredData);
          }
          else if(countryValue === ""){
            //clears error message if exists
            d3.select(".filter_error").text("");
            //clears table data if exists
            tbody.html("");
            //creates filter
            filteredData = tableData.filter(d => d.city === cityValue);
            //prints filtered data to console
            console.log(filteredData);
          }
          else if(!countries.includes(countryValue)){
            //clears table data if exists
            tbody.html("");
            //prints error message on page
            d3.select(".filter_error").text("That country doesn't exist in our data. Enter a new country");
            console.log("That country does not exist");
          }
        }
        else if (!states.includes(stateValue)){
          //clears table data if exists
          tbody.html("");
          //prints error message on page
          d3.select(".filter_error").text("That state doesn't exist in our data. Enter a new state");
          console.log("That state does not exist");
        }
      }
      else if (cityValue === ""){
        if (states.includes(stateValue)){
          if (countries.includes(countryValue)){
            //clears error message if exists
            d3.select(".filter_error").text("");
            //clears table data if exists
            tbody.html("");
            //creates filter
            filteredData = tableData.filter(d => d.state === stateValue && d.country === countryValue);
            //prints filtered data to console
            console.log(filteredData);
          }
          else if (countryValue === ""){
            //clears error message if exists
            d3.select(".filter_error").text("");
            //clears table data if exists
            tbody.html("");
            //creates filter
            filteredData = tableData.filter(d => d.state === stateValue);
            //prints filtered data to console
            console.log(filteredData);
          }
          else if (!countries.includes(countryValue)){
            //clears table data if exists
            tbody.html("");
            //prints error message on page
            d3.select(".filter_error").text("That country doesn't exist in our data. Enter a new country");
            console.log("That country does not exist");
          }
        }
        else if (stateValue === ""){
          if (countries.includes(countryValue)){
            //clears error message if exists
            d3.select(".filter_error").text("");
            //clears table data if exists
            tbody.html("");
            //creates filter
            filteredData = tableData.filter(d => d.country === countryValue);
            //prints filtered data to console
            console.log(filteredData);
          }
          else if (countryValue === ""){
            //clears error message if exists
            d3.select(".filter_error").text("");
            //clears table data if exists
            tbody.html("");
            //creates filter
            filteredData = tableData;
            //prints filtered data to console
            console.log(filteredData);
          }
          else if (!countries.includes(countryValue)){
            //clears table data if exists
            tbody.html("");
            //prints error message on page
            d3.select(".filter_error").text("That country doesn't exist in our data. Enter a new country");
            console.log("That country does not exist");
          }
        }
        else if (!states.includes(stateValue)){
          //clears table data if exists
          tbody.html("");
          //prints error message on page
          d3.select(".filter_error").text("That state doesn't exist in our data. Enter a new state");
          console.log("That state does not exist");
        }
      }
      else if(!cities.includes(cityValue)){
        //clears table data if exists
        tbody.html("");
        //prints error message on page
        d3.select(".filter_error").text("That city doesn't exist in our data. Enter a new city");
        console.log("That city does not exist");
      } 
    }
    else if(!dates.includes(dateValue)){
      //clears table data if exists
      tbody.html("");
      //prints error message on page
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