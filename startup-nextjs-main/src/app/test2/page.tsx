'use client'
import React, { useEffect } from 'react';

function MyComponent(desc) {
  useEffect(() => {
    // Function to fetch data
    async function fetchData() {
      // The query string
      const query = desc;
      
      // Encode the query for safe transmission in the URL
      const encodedQuery = encodeURIComponent(query);

      try {
        // Construct the URL with the encoded query parameter
        const url = `http://104.39.0.97:8000/get-data/?query=${encodedQuery}`;

        // Make the GET request using fetch
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
          },
        });

        // Check if the request was successful
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Parse the JSON response
        const data = await response.json();

        // Do something with the data
        alert(data);
      } catch (error) {
        // Handle any errors
        console.error('Fetch Error:', error);
      }
    }

    // Call the fetchData function
    fetchData();
  }, []); // The empty array causes this effect to only run on mount

  return (
    <div>
    </div>
  );
}

export default MyComponent;
