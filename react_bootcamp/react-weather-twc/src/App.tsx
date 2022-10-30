import React, { useState} from 'react'
import {getWeatherInfo} from './weatherAPI'
import './App.css';
import axios from 'axios'



function App() {
  
  const [locationName, setLocation] = useState<string>('');
  const [weatherRecords, setWeatherInfo] = useState<[]>([]);

  const getWeather = async() => {   
    const postURL = getWeatherInfo(locationName).then (      
      (weatherInfo) => {
        alert(weatherInfo);
        //setWeatherInfo(weatherInfo.data);
        console.log('weatherInfo', weatherInfo);
      }
    )
  }
  
  return (
    <div className="flex justify-center py-10">       
    <form className="flex items-center">   
          <label className="sr-only">Search</label>
          <div className="relative w-full">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  
              </div>
              <input type="text" 
                   id="city" 
                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                   placeholder="Where are you?" required
                   value={locationName}
                   onChange ={(e)=> setLocation(e.target.value)}
              />
              
          </div>
          <button className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" id="search" onClick={getWeather}>
              Search
          </button> 
      </form> 
  </div>
  );
}

export default App;
