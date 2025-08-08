import './HeadOfSection.css';

const HeadOfSection = ({ title, subtitle }) => {
    return (
        <div className='head-of-section'>
            <div className="containt">
                <h2>{title}</h2>
                <p>{subtitle}</p>
            </div>
        </div>
    );
};


export default HeadOfSection;
