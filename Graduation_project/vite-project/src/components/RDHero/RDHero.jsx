import { Link } from 'react-router-dom'
import './RDHero.css'

const RDHero = ({title , description  , btn1 , btn2}) => {
    return (
        <section className='RD_Hero lm_whitespacing_x'>
        <h1 className="RD_title">{title}</h1>
        <p className="RD_description">{description}</p>
        <div>
            <Link to={btn1.Link} className='RD_Btn'>{btn1.text}</Link>
            <Link to={btn2.Link} className='RD_GreenBtn'>{btn2.text}</Link>
        </div>
        </section>
    )
}

export default RDHero
