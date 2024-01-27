//import React from 'react'
import './App.css'
 import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
 import Login from './Components/Login'
import Home from './Components/home'
import SignUp from './Components/SignUp'
import RolesPage from './Components/RolesPage';
const App = () => {
  return (
   
  <div>
     <Router>
    <Routes>
        <Route path="/"element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/rolespage" element={<RolesPage/>} />
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