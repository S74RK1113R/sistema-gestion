import { useState } from "react";
import { useEffect } from "react";
/* Hook for the select tags*/

export const useSelectFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json.data || []));
  }, [url]);

  return { data };
};
