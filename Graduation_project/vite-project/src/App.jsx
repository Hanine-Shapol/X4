import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import ContactUs_page from './pages/ContactUs_page/ContactUs_page'
import About_page from './pages/About_page/About_page'
import Process_page from './pages/Process_page/Process_page'
import Work_page from './pages/Work_page/Work_page'
import LMNavBar from './component/LMNavBar/LMNavBar'
import LMFooter from './component/LMFooter/LMFooter'
import LMDashborad from './pages/LMDashborad/LMDashborad'
function App() {
  return (
    <>
      <LMNavBar
        image="/assets/images/Logo-full.svg"
        items={[
          { url: "/", content: "Home" },
          { url: "/Work_page", content: "Work" },
          { url: "/Process_page", content: "Process" },
          { url: "/About_page", content: "About" },
          { url: "/lmdashborad", content: "DashBorad" },
        ]}
        btn="Contact Us"
      />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About_page" element={<About_page />} />
        <Route path="/ContactUs_page" element={<ContactUs_page />} />
        <Route path="/Process_page" element={<Process_page />} />
        <Route path="/Work_page" element={<Work_page />} />
        <Route path="/lmdashborad" element={<LMDashborad />} />  
        <Route path="/workone" element={<Work_page/>} />
      </Routes>

      <LMFooter
        image="/assets/images/Logo-full.svg"
        items={[
          { url: "/", content: "Home" },
          { url: "", content: "Service" },
          { url: "/Work_page", content: "Work" },
          { url: "/Process_page", content: "Process" },
          { url: "/About_page", content: "About" },
          { url: "", content: "Career" },
          { url: "/ContactUs_page", content: "Contact" },

        ]}
      />
    </>
  )
}

export default App
