import "./FAQCards.css"
import { useState } from "react";
const FAQCards = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const questions = [
        {
            question: "What services does SquareUp provide",
            answer: "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."
        },
        {
            question: "How can SquareUp help my business?",
            answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum soluta sunt repellat, adipisci aliquid placeat voluptatum accusantium minima magnam, quas dolore vero numquam eum consectetur. Magnam possimus blanditiis recusandae earum!"
        }
        ,
        {
            question: "What industries does SquareUp work with?",
            answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum soluta sunt repellat, adipisci aliquid placeat voluptatum accusantium minima magnam, quas dolore vero numquam eum consectetur. Magnam possimus blanditiis recusandae earum!"
        }
        ,
        {
            question: "How long does it take to complete a project with SquareUp?",
            answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum soluta sunt repellat, adipisci aliquid placeat voluptatum accusantium minima magnam, quas dolore vero numquam eum consectetur. Magnam possimus blanditiis recusandae earum!"
        },
        {
            question: "Do you offer ongoing support and maintenance after the project is completed?",
            answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum soluta sunt repellat, adipisci aliquid placeat voluptatum accusantium minima magnam, quas dolore vero numquam eum consectetur. Magnam possimus blanditiis recusandae earum!"
        }
        ,
        {
            question: "Can you work with existing design or development frameworks?",
            answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum soluta sunt repellat, adipisci aliquid placeat voluptatum accusantium minima magnam, quas dolore vero numquam eum consectetur. Magnam possimus blanditiis recusandae earum!"
        }
        ,
        {
            question: "How involved will I be in the project development process?",
            answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum soluta sunt repellat, adipisci aliquid placeat voluptatum accusantium minima magnam, quas dolore vero numquam eum consectetur. Magnam possimus blanditiis recusandae earum!"
        },
        {
            question: "Can you help with website or app maintenance and updates?",
            answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum soluta sunt repellat, adipisci aliquid placeat voluptatum accusantium minima magnam, quas dolore vero numquam eum consectetur. Magnam possimus blanditiis recusandae earum!"
        }
    ];
    return (
        <div className="questions">
            {questions.map((item, index) => (
                <div className="card" key={index}>
                    <div className="question-container" onClick={() => toggleAnswer(index)}>
                        <div className="question">
                            <span>{0 + String(index + 1)}</span>
                            <h4>{item.question}</h4>
                        </div>
                        <img
                            src={
                                activeIndex === index
                                    ? "/assets/asterisk.svg"
                                    : "/assets/plus.svg"
                            }
                            alt=""
                        />
                    </div>
                    <p className={activeIndex === index ? 'answer open' : 'answer'}>
                        {item.answer}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default FAQCards
