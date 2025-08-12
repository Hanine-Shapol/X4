import {Link} from 'react-router-dom';
import './SASquerup.css';


const SASquerup = ({ title, subtitle,subtitleContainer}) => {
    return (
        <section className="squerup">
            <div className ="Squerup-content">
                <h1 className="squerup-title"> {title}</h1>
                    <p className= "squerup-subtitle">
                    {subtitle}
                    </p>
            </div>
            <div className ="Squerup-container">
                    <p className= "container-subtitle">
                    {subtitleContainer}
                    </p>
            </div>
        </section>

    
        )

}
export default SASquerup