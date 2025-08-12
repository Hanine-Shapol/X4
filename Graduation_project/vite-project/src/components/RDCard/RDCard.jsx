import './RDCard.css'

const RDCard = ({number, title, discription}) => {
    
    return (
    <div className='RD_Card'>
        <div className='RD_CardHeader'>
            <div className="RD_number">{number}</div>
            <h2 className="RD_title">{title}</h2>

            {/* <div className='RD_rightHeader'>
            <h2 className="RD_title">{title}</h2>
            <div className="RD_line"></div>
            </div> */}
        </div>
        <p className="RD_discription">{discription}</p>
    </div>
    )
}

export default RDCard
