import './css/App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function App() {
    return (
      <div className='App'>
        <Navbar/>
        <div className='app-body'>
          <Home/>
          <Footer/>
        </div>
      </div>
    );
}