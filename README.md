# javascript_challenge
JavaScript HW for NW Bootcamp

This homework focused on filtering ufo sighting data by date by entering a date into a form and clicking a filter table button. The homework included two parts outlined below.

# **UFO Level One**

The app.js file uses two functions to perform the app's actions
* buildTable
   *  clears any data previously entered into the table
   *  loops through each array of the ufo data array and enters the data into a bootstrap table

* handleClick
   * pulls the entered date from the filter search box
   * filters the ufo data and puts the new filtered data into the buildTable function
   * if the entered date does not exist, the table is blank and a new header "This data does not exist" is displayed on the page

**The complete data table is displayed when the page loads**

![page_loads](https://user-images.githubusercontent.com/68086211/119266713-75822100-bbb1-11eb-8c37-c66ce9270e73.png)

**New Data is filtered when a date is entered into the Filter Search Box**

![filtered_search](https://user-images.githubusercontent.com/68086211/119266747-9fd3de80-bbb1-11eb-9f47-7726d07e2c88.png)

**Error message appears when a date is entered that does not exist**

![error_message](https://user-images.githubusercontent.com/68086211/119266796-c98d0580-bbb1-11eb-8a63-9606b768e139.png)

**If not date is entered, the entire table is displayed**
