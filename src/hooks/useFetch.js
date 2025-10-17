import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url, dependencies = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    axios.get(url)
      .then(res => {
        if (isMounted) setData(res.data);
      })
      .catch(err => {
        if (isMounted) setError(err);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => { isMounted = false; }
  }, dependencies);

  return { data, loading, error };
};

export default useFetch;
