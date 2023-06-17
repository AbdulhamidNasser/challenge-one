const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve Angular app
app.use(express.static(path.join(__dirname, 'dist', 'your-app-name')));

// API endpoints
app.get('/convert-measurements', (req, res) => {
  // Measurement conversion logic
  // ...

  // Dummy response
  const measurementResult = ['2', '6'];
  res.json(measurementResult);
});

app.post('/login', (req, res) => {
  // Authentication logic
  // ...

  // Dummy response
  const authResponse = { message: 'Logged in successfully' };
  res.json(authResponse);
});

// Default route for Angular app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'your-app-name', 'index.html'));
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



/*
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

  */