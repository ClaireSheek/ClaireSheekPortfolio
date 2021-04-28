import React, {useState} from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import SideNav from './components/SideNav'
import Router from './Router'
function App() {
  const [page, setPage] = useState('')

  return (
    <BrowserRouter>
      <div className="App">
        <SideNav page={page} setPage={setPage}/>
        <Router className="content"/>
      </div>
    </BrowserRouter>
  );
}

export default App;
