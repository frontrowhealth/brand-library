// JavaScript snippet to fetch HTML content from a URL and insert it into an element

// The URL from which to fetch HTML content
var url = '';

// Select the element where you want to insert the HTML
// Snippet will be inserted ABOVE this element
var element = document.getElementById('');

// Use fetch API to get HTML content from the URL
fetch(url)
  .then(response => {
    // Check if the request was successful
    console.log(response);
    if (response.ok) {
      return response.text(); // Get the response text (HTML content)
    }
    throw new Error('Network response was not ok.');
  })
  .then(htmlContent => {
    // Insert the fetched HTML into the element
    element.insertAdjacentHTML('beforebegin', htmlContent);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation: ', error);
  });

// TODO: currently having cors policy issue w/ cloudfront version

// TODO: make sure that element by id is on the right product page
