import axios from 'axios'
import * as React from 'react';

const apiKey = 'eac7b67b1663ef49da458eb0bb524349'

export const getWeatherInfo = async(location : string) => {   
    
    const baseURL = 'https://api.openweathermap.org/data/2.5/forecast?q='+location+'&appid='+apiKey+'&units=metric';   
    alert(baseURL);
    return await axios.post(baseURL);
};