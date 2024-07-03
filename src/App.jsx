import { useState } from 'react'
import { BrowserRouter,  } from 'react-router-dom';
import Rout from "./router/Routers"

function App() {


  return (
    <>
        <BrowserRouter>
    <Rout/>
    </BrowserRouter>
    </>
  )
}

export default App
