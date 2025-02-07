import { useEffect, useState } from 'react';

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
                );

                if (!response.ok) {
                    throw new Error(`Error fetching data: ${response.statusText}`);
                }

                const result = await response.json();
                setData(result[currency] || {}); // Ensure data is set correctly
            } catch (error) {
                console.error('Failed to fetch currency data:', error);
                setData({}); // Reset data on failure
            }
        };

        fetchData();
    }, [currency]);

    return data || {}; // Ensure data is always an object
}

export default useCurrencyInfo;
