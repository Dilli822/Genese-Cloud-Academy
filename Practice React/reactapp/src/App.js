import React from 'react';
import './App.css';
import Main_Router from './routes';
import Practice_Router from './components/react_practices/practice_routes';

function App() {
  return (
    <div>
{/* 
      <Main_Router/> */}

      <Practice_Router/>

    </div>
  );
}

export default App;
//809508f3d7406316226945c2b05b17f0
// const axios = require("axios");

// const options = {
//   method: 'GET',
//   url: 'https://dark-sky.p.rapidapi.com/37.774929,-122.419418,2019-02-20',
//   headers: {
//     'X-RapidAPI-Key': 'd9a42d7ae1mshb3a3063221184b5p1e87e2jsnb00cc11fdfa4',
//     'X-RapidAPI-Host': 'dark-sky.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });