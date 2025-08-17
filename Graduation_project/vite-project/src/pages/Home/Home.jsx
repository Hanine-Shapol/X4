
import { Link, Outlet } from "react-router-dom"
import RDHero from "../../components/RDHero/RDHero"

import SATrustedLogos from "../../components/SATrustedLogos/SATrustedLogos"


const Home = () => {
    
    return (
        <>
            <RDHero
            title ={"A Digital Product Studio that will Work"}
            description ={<>For <span> Startups </span> , <span> Enterprise leaders </span> , <span> Enterprise leaders </span> and <span> Social Good</span></>}
            btn1 ={{Link : "/Work_page", text : "Our Works"}}
            btn2 ={{Link : "/ContactUs_page", text : "Contact Us"}}
            />

            <Outlet/>
            <SATrustedLogos
        subTitle="Trusted By 250+ Companies"
        icon1Trusted="/assets/images/company-1.svg"
        icon2Trusted="/assets/images/company-2.svg" 
        icon3Trusted="/assets/images/company-3.svg" 
        icon4Trusted="/assets/images/company-4.svg" 
        icon5Trusted="/assets/images/company-5.svg" 
        icon6Trusted="/assets/images/company-6.svg" 
        />
        
        </>
    )
}

export default Home