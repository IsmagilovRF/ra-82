import { useState, useEffect } from "react";

const useJsonFetch = (url, opts) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // console.log('url = ' + url, '  useJsonFetch [data, setData]  = '+ [data, setData] );
  // console.log('url = ' + url, '  useJsonFetch [error, setError]  = '+ [error, setError] );
  // console.log('url = ' + url, '  useJsonFetch [loading, setLoading]  = '+ [loading, setLoading] );

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(response.statusText);
        const data = await response.json();
        // console.log('url = ' + url, '  useJsonFetch data.status = '+ data.status);
        // console.log('url = ' + url, '  useJsonFetch response.statusText = '+ response.statusText);
        // console.log('url = ' + url, '  useJsonFetch error = '+ error);
        setData(data);
        setError(null);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);
  // console.log('url = ' + url, '  useJsonFetch error = '+ error);
  return [data, error, loading];
};

export default useJsonFetch;
