import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import Aziz from './Aziz.jsx'
// import Counter from './Counter.jsx'
import Ternery from './Ternery.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Aziz/> */}
    {/* <Counter/> */}
    <Ternery/>
  </StrictMode>,
)
