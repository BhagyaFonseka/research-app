import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div class="container my-5 mx-auto">
  <div class="p-5 text-center bg-body-tertiary rounded-3">
    <h1 class="text-body-emphasis">Basic jumbotron</h1>
    <button type="button">search</button>
    <p class="lead">
      This is a simple Bootstrap jumbotron that sits within a <code>.container</code>, recreated with built-in utility classes.
    </p>
  </div>
</div>

    </>
  )
}

export default App
