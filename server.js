const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/convert-measurements', (req, res) => {
  const input = req.query.input;
  // Implement your logic to convert the measurements based on the input
  // For example:
  const conversionResults = [1, 2, 3];
  res.status(200).json(conversionResults);
});


app.get('/convert-measurements', (req, res) => {
    const input = req.query.input;
  
    // Implement your logic to convert the measurements based on the input
    // For example:
    const conversionResults = convertMeasurements(input);
    
    res.status(200).json(conversionResults);
  });
  
  // Define the function to convert measurements
  function convertMeasurements(input) {
    // Implement your conversion logic here
    // This is just a sample implementation, modify it according to your requirements
    const results = [];
  
    // Example logic: Split the input string into individual characters and count their occurrences
    const characters = input.split('');
    const characterCounts = {};
    for (let character of characters) {
      if (characterCounts[character]) {
        characterCounts[character]++;
      } else {
        characterCounts[character] = 1;
      }
    }
  
    // Example logic: Push the counts of each character to the results array
    for (let character in characterCounts) {
      results.push(characterCounts[character]);
    }
  
    return results;
  }
  
  app.get('/convert-measurements', (req, res) => {
    const input = req.query.input;
    // Use the input value to perform your measurement conversion logic
    // For example:
    const conversionResults = convertMeasurements(input);
    res.status(200).json(conversionResults);
  });
  
  // Function to perform the measurement conversion
  function convertMeasurements(input) {
    // Implement your measurement conversion logic here
    // Return the conversion results
    return [1, 2, 3];
  }
  
  


app.listen(8080, () => {
    console.log('API server is running on http://localhost:8080/convert-measurements');
  });