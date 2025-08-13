import './Home.css';

import ThankyouSec from '../../components/ThankyouSec/ThankyouSec';
import SATrustedLogos from '../../components/SATrustedLogos/SATrustedLogos';
/*"D:\X4\X4\Graduation_project\vite-project\src\components\ThankyouSec\ThankyouSec.jsx"*/

const Home = () => {
    

    return (
        /*<div>
            hello from home
        </div>*/
        <>
        <SATrustedLogos
        subTitle="Trusted By 250+ Companies"
        icon1Trusted="/assets/images/icons/Companies/company-1.svg" 
        icon2Trusted="/assets/images/icons/Companies/company-2.svg" 
        icon3Trusted="/assets/images/icons/Companies/company-3.svg" 
        icon4Trusted="/assets/images/icons/Companies/company-4.svg" 
        icon5Trusted="/assets/images/icons/Companies/company-5.svg" 
        icon6Trusted="/assets/images/icons/Companies/company-6.svg" 
        />
        <ThankyouSec
        baseImage="/assets/images/ThankyouSec/squers.png"
        overlayImage="/assets/images/ThankyouSec/background.png"
        image="/assets/images/icons/general/Logo-icon.svg"
        title="Thank you for your Interest in SquareUp."
        subtitle= "We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us."
        buttonText="Start Project"
        linkTo="/contact"
        />
        </>

    )
}

export default Home
