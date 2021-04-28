import React, {useState} from 'react'
import { HashRouter } from 'react-router-dom'
import './App.css';
import SideNav from './components/SideNav'
import Router from './Router'
function App() {
  const [page, setPage] = useState('')

  return (
    <HashRouter>
      <div className="App">
        <SideNav page={page} setPage={setPage}/>
        <Router  className="content"/>
      </div>
    </HashRouter>
  );
}

export default App;
