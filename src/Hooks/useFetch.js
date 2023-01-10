import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [responseJSON, setResponseJSON] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const Fetchh = () => {
    setIsLoading(true)
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      setResponseJSON(data)
      setIsLoading(false)
    })
    .catch(err => {
      alert(err)
      setError(err)
      setIsLoading(false)
    })
  }
  useEffect(() => {
    Fetchh()
  }, [url])
  

  return [responseJSON, isLoading]
}