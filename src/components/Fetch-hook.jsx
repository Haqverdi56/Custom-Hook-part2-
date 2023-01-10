import React, { useEffect, useState } from 'react'
import { useFetch } from '../Hooks/useFetch'
// const url = 'https://jsonplaceholder.typicode.com/todos/'

function FetchHook() {
  const [url, setUrl] = useState('')
  const [responseJSON, isLoading] = useFetch(url)

  useEffect(() => {
    console.log('data',responseJSON);
  }, [url])

  console.log(isLoading);
  
  const FormSubmit = (e) => {
    e.preventDefault()
    console.log("Submit")
  }

  return (
    <div>
      <form onSubmit={FormSubmit}>
        <input value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Enter API" />
      </form>
      <div>
        {
          isLoading ? <div>...Loading</div> :
          responseJSON ? responseJSON.map((el,i) => (
            <>
            <div key={i} style={{display:'flex', gap:'2rem'}}>
              <p>{el.id}</p>
              <p>{el.title}</p>
            </div>
            </>
          )) : null
        }
      </div>
    </div>
  )
}

export default FetchHook
