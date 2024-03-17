import * as http from 'http';

const postData = () => {
  const data = JSON.stringify({
    image: 'IMG',
    location: 'Business building',
    datetime: '2024-03-17T08:14:46.315Z',
    description: 'red coloured rockstar can'
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

export default postData();
