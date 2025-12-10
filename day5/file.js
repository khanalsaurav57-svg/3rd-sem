// fetchApiExample.js - Created for Saurab Khanal

// Function to fetch data from an API
async function getDataFromAPI() {
  try {
      let response= await fetch('https://jsonplaceholder.typicode.com/posts/1');
      let data = await response.json();
      console.log(data);
  }
  catch(error)
  {
      console.error('Error fetching data:',error);}}
  getDataFromAPI();

    