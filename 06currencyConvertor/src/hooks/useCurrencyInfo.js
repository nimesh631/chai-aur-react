import { useState, useEffect } from 'react';

const useCurrencyInfo = (currency) => {
    const [data, setData] = useState({});

    useEffect(() => {
        
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => setData(res[currency])) // Set currency data properly
            
    }, [currency]);

    console.log(data); // This log might not show the updated value immediately because state updates are asynchronous

    return data; // Return the currency data
};

export default useCurrencyInfo;
