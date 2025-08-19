import './HeadOfSection.css';

const HeadOfSection = ({ title, subtitle, bgImage }) => {
    return (
        <div
            className="head-of-section"
            style={{ "--bg-image": `url(${bgImage})` }}
        >
            <div className="squr-image"></div>
            <div className="filtter"></div>
            <div className="content">
                <h2>{title}</h2>
                <p>{subtitle}</p>
            </div>
        </div>
    );
};

export default HeadOfSection;