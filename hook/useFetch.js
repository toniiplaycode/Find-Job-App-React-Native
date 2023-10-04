import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const axios = require('axios');

    // dùng RAPID để fake API
    const options = {
      method: 'GET',
      url: `https://jsearch.p.rapidapi.com/${endpoint}`,
      params: {...query},
      headers: {
        'X-RapidAPI-Key': '4a89d00ea1mshdf64fdfe8c11adcp1a3408jsn4484b13e9f24',
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
      }
    };

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await axios.request(options);
            
            setData(response.data.data);
            setIsLoading(false);
        } catch (error) {
            setError("There is a error !");
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const reFetch = () => {
        setIsLoading(true);
        fetchData();
    }

    return {data, isLoading, error, reFetch}
}

export default useFetch;
