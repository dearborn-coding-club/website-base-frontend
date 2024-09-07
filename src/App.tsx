import './css/App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Route, Routes } from "react-router-dom"
import Notes from './pages/Notes';

export default function App() {
    return (
      
        <div className='App'>
          <Routes>
            <Route path='/' element= {<><Navbar/><div className='app-body'><Home/><Footer/></div></>}/>
            <Route path='/note' element= {<Notes/>}/>
          </Routes>
        </div>
    );
}