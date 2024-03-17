'use client'

import { useState } from "react";

const http = require('http');



const handleFileChange = (e) => {
    setimg(e.target.files[0])
};

const Contact = () => {
const [locValue, setLocValue] = useState('');
const [img, setimg] = useState(null);
const [date, setdate] = useState('');
const [desc, setdesc] = useState('');
async function postData123(e) {

  const data = JSON.stringify({
    image: "IMG",
    location: locValue,
    datetime: date,
    description: desc
  });

  const options: http.RequestOptions = {
    hostname: '104.39.0.97',
    port: 8000,
    path: '/update-data/',
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Content-Length': data.length
    }
  };

  const req = http.request(options, (res) => {
    let responseData = '';
    res.on('data', (chunk) => {
      responseData += chunk;
    });
    res.on('end', () => {
      console.log('Response:', responseData);
    });
  });

  req.on('error', (error) => {
    console.error('Error:', error);
  });

  req.write(data);
  req.end();
};
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
                report lost items
              </p>
              <form>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Location
                      </label>
                      <input
                        id="loc"
                        type="text"
                        value={locValue}
                        onChange={(e) => setLocValue(e.target.value)}
                        placeholder="enter the location:"
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Date and time
                      </label>
                      <input
                        type="datetime"
                        placeholder="Enter the date of when you found the item"
                        value={date}
                        onChange={(e) => setdate(e.target.value)}
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Describe the item
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Type your description here"
                        value={desc}
                        onChange={(e) => setdesc(e.target.value)}
                        className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                    <label>Upload a picture of the item here</label>
                  <input
                        type="file"
                        placeholder="Upload a picture of the item here"
                        onChange={handleFileChange}
                        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                      </div>
                    </div>

                  <div className="w-full px-4">
                    <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => postData123(e)} className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"> 
                      Submit 
                    </button>
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
