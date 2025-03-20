import React, { createContext, useState, useEffect } from 'react';

const DataContext = createContext();

const DataProvider = ({ children }) => {
const [data, setData] = useState(null); 
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
  const fetchData = async () => {
    try {
        const response = await fetch('/data.json');
        const result = await response.json();
        setData(result); 
    } catch (err) {
        setError('Error fetching data');
    } finally {
        setLoading(false); 
    }
    };

    fetchData(); 
  }, []);

  return (
    <DataContext.Provider value={{ data, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataProvider, DataContext };
