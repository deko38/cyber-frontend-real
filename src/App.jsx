import { useState } from 'react'


function App() {
  const [message, setMessage] = useState("app")

  return (
    <>
<p>{message}</p>

    </>
  )
}

export default App
