import React from 'react'
import './App.css'
import FetchHook from './components/Fetch-hook'
import LocalStorage from './components/LocalStorage'
import StateHistory from './components/StateHistory'

function App() {

  return (<>
    <div>
      <FetchHook />
      <br /><br /><br /><br />
      <LocalStorage/>
      <br /><br /><br /><br />
      <StateHistory />
    </div>
  </>
  )
}

export default App
