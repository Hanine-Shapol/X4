import ThankyouSec from "../components/ThankyouSec/ThankyouSec"
import './Home.css';


const Home = () => {
    

    return (
        /*<div>
            hello from home
        </div>*/
        <ThankyouSec
        baseImage="/assets/images/ThankyouSec/squers.png"
        overlayImage="/assets/images/ThankyouSec/background.png"
        image="/assets/images/icons/general/Logo-icon.svg"
        title="Thank you for your Interest in SquareUp."
        subtitle= "We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can get in touch with us."
        buttonText="Start Project"
        linkTo="/contact"

        />

    )
}

export default Home
