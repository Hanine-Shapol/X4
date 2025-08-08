import './FAQCard.css';

const FAQCard = ({ index, question, answer, isActive, onToggle }) => {
    return (
        <div className="card">
            <div className="question-container" onClick={() => onToggle(index)}>
                <div className="question">
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <h4>{question}</h4>
                </div>
                <img
                    src={
                        isActive
                            ? "public/assets/images/icons/general/asterisk icon.svg"
                            : "public/assets/images/icons/general/plus icon.svg"
                    }
                    alt=""
                />
            </div>
            <p className={isActive ? 'answer open' : 'answer'}>
                {answer}
            </p>
        </div>
    );
};

export default FAQCard;
