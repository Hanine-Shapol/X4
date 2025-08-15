import './RDShowBtn.css'
import React, { useState } from 'react'
import RDCard from '../RDCard/RDCard'

const RDShowBtn = ({initialCount = 4, Cards}) => {
    const [show, setShow] = useState(false)

    const visibleCards = show ? Cards : Cards.slice(0, initialCount)

    return (
        <div>
            <div className='RD_Container lm_whitespacing_x'>
            {visibleCards.map((Card, index)=>(
                <RDCard key={index} number={Card.number} title={Card.title} discription={Card.discription}/>
            ))}
            </div>
            {Cards.length > initialCount && (<button className='RDShowBtn' onClick={()=> setShow(!show)}>{show ? "Show Less" : "Show More"} </button>)}
        </div>
    )
}

export default RDShowBtn
