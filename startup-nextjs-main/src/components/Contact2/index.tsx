'use client'
import { useState } from "react";

import Link from "next/link";
import React, { useEffect } from 'react';
const http = require('http');

const Contact = () => {
    const [Query, setQuery] = useState('');
    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

  // Handler for form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
};

function MyComponent() {
    useEffect(() => {
    // Function to fetch data
        async function fetchData() {
      // The query string
        const query =Query; 
      
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
  }, [])};    
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Enter details here
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                search for lost items
              </p>
              <form onSubmit={handleSubmit}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Describe the item
                      </label>
                      <input
                        name="message"
                        type="text"
                        placeholder="Type your description here"
                        value={Query}
                        onChange={handleInputChange}
                        className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      ></input>
                    </div>
                  </div>

                  <div className="w-full px-4">
                    <Link href="./test2" 
                    className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"> 
                      Submit 
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
