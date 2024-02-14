//import React from 'react'
import './App.css'
 import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
 import Login from './Components/Login'
import Home from './Components/home'
import SignUp from './Components/SignUp'
import RolesPage from './Components/RolesPage';
import Addboat from './Components/Addboat';
import Adlogin from './Components/Adlogin';
import About from './Components/About';
import Contact from './Components/Contact';
import Dashboard from './Components/dashboard';
import Kerala from './Components/Kerala';
import Location from './Components/location';
import Booking from './Components/Booking';
import Kashmir from './Components/Kashmir';
import Maha from './Components/Maha';
import Goa from './Components/Goa';
import Payment from './Components/Payment';
import Gallery from './Components/Gallery';
import Accman from './Components/Accman';
import Addash from './Components/Addash';
import Profile from './Components/Profile';
import Blogs from './Components/Blogs';

const App = () => {
  return (
   
  <div>
     <Router>
    <Routes>
        <Route path="/home"element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/" element={<RolesPage/>} />
        <Route path="/addboat" element={<Addboat/>} /> 
        <Route path="/adlogin" element={<Adlogin/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/kerala" element={<Kerala/>} />
        <Route path="/location" element={<Location/>} />
        <Route path="/booking" element={<Booking/>} />
        <Route path="/kashmir" element={<Kashmir/>} />
        <Route path="/maha" element={<Maha/>} />
        <Route path="/goa" element={<Goa/>} />
        <Route path="/payment" element={<Payment/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/accman" element={<Accman/>} />
        <Route path="/addash" element={<Addash/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/blogs" element={<Blogs/>} />
      </Routes>
      </Router> 
     
    </div>
    
  )
}

export default App;






























// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App