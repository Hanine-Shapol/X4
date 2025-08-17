import React from 'react';
import './SaWorkone.css';

const SaWorkone = ({ title, subtitle, bgImage }) => { 
    return (
        <div className='SaWorkone'>
            <div className='headWorkone'>
                <div className="containt">
                    <h1 className="squerup-title">{title || "Our Works"}</h1>
                    <p className="squerup-subtitle">{subtitle || "Discover a portfolio of visually stunning and strategically crafted digital projects that showcase our creativity and expertise."}</p>
                </div>
            </div>
        </div>
    )
}

export default SaWorkone;
