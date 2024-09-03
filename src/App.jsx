import {BrowserRouter , Routes, Route} from 'react-router-dom';
import { Signup } from './pages/Signup';
import { Signin } from './pages/Signin';
import { Send } from './pages/Send';
import { Dashboard } from './pages/Dashboard';
import { LandingPage } from './pages/LandingPage';
import { Merchant } from './pages/Merchant';
import AboutPage from './pages/About';
import {ContactPage} from './pages/Contact';
import FeaturesPage from './pages/Features';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path='/features' element={<FeaturesPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/' element={<LandingPage />} />
          <Route path='/merchant' element={<Merchant />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/send' element={<Send />} />
        </Routes>
      </BrowserRouter>       
    </div>
  )
}

export default App
