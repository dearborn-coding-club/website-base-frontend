import './css/App.css'
import Home from './pages/Home'
import Notes from './pages/Notes'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';

export default function App() {
    return (
      <div className='App'>
        <Routes>
          <Route path='/' element={<><Navbar/><div className='app-body'><Home/><Footer/></div></>} />
          <Route path='/notes' element={<Notes/>} />
        </Routes>
      </div>
    );
}