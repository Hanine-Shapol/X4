import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import ContactUs_page from './pages/ContactUs_page/ContactUs_page'
import About_page from './pages/About_page/About_page'
import Process_page from './pages/Process_page/Process_page'
import Work_page from './pages/Work_page/Work_page'
function App() {
  return (
    <>
{
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/About_page" element={<About_page />} />
  <Route path="/ContactUs_page" element={<ContactUs_page />} />
  <Route path="/Process_page" element={<Process_page />} />
  <Route path="/Work_page" element={<Work_page />} />
</Routes>
}

    </>
  )
}

export default App
