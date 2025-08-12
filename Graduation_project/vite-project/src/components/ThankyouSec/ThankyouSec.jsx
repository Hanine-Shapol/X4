
import {Link} from 'react-router-dom';
import './ThankyouSec.css';




const ThankyouSec = ({baseImage,overlayImage, image, title, subtitle, buttonText, linkTo}) => {
    return (
        <section className="thankyou">
            <div className="thankyou-images">
                <img src={baseImage} alt="Base Background" className="base-image" />
                <img src={overlayImage} alt="Overlay" className="overlay-image" />
            </div>

            <div className ="thankyou-content">
                <img src={image} alt="Thank You Icon" className="thankyou-icon" />
                <h1 className="thankyou-title"> {title}</h1>
                    <p className= "thankyou-subtitle">
                    {subtitle}
                    </p>
                    <Link to ={linkTo} className="thankyou-button">{buttonText}</Link>
            </div>

            
        </section>

    
        )

}
export default ThankyouSec