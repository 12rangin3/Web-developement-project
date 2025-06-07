const api_url = "https://api.quotable.io/random";

async function getquote(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        var data = await response.json();
        console.log(`Quote: ${data.content} - Author: ${data.author}`);
    } catch (error) {
        console.error("Error fetching the quote:", error);
    }
}
getquote(api_url);

// Add an event listener to fetch a new quote when a button is clicked
document.getElementById("new-quote-btn").addEventListener("click", () => {
    getquote(api_url);
});