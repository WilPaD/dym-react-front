import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import config from '../env.json';

function App() {
  const [count, setCount] = useState(0)
  const api_path = config.api_path
  const app_name = import.meta.env.VITE_APP_NAME
  const mode_dev = import.meta.env.VITE_APP_MODE_DEV
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Contador es {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <p className="read-the-docs">
        {api_path}
      </p>
      <p className="read-the-docs">
        {app_name}
      </p>
      <p className="read-the-docs">
        {mode_dev}
      </p>
    </>
  )
}

export default App
