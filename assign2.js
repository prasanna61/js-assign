// Define variables to access HTML elements
const quoteContainer = document.querySelector('.quote-container');
const quoteElement = document.querySelector('.quote p');
const newQuoteBtn = document.getElementById('new-quote-btn');

// Function to fetch a random quote from the API
async function fetchRandomQuote() {
  try {
    // Fetch data from the API
    const response = await fetch('https://type.fit/api/quotes');
    const data = await response.json();

    // Get a random quote from the data
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomQuote = data[randomIndex];

    // Update the HTML with the random quote
    quoteElement.textContent = randomQuote.text;
  } catch (error) {
    console.error('Error fetching and displaying the quote:', error);
    quoteElement.textContent = 'Failed to fetch a quote.';
  }
}

// Event listener for the "New Quote" button
newQuoteBtn.addEventListener('click', fetchRandomQuote);

// Initial call to fetch and display a random quote
fetchRandomQuote();
