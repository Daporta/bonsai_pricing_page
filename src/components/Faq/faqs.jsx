import React, {useState} from 'react'

const Faqs = ({ faqs }) => {
    const [activeFaq, setActiveFaq] = useState('')
    const faqsMap = faqs.map((f, idx) => {
        const isActive = idx === activeFaq
        const activeHandler = () => {
            if (isActive) {
                setActiveFaq('')
            } else {
                setActiveFaq(idx)
            }
        }
        return (
            <div 
                key={idx}
                onClick={activeHandler} 
                className='faq-container'
            >
                <div className="question-chevron">
                    <h3>{f.question}</h3>
                    {isActive
                        ? <i className="fa fa-chevron-up"></i>
                        : <i className="fa fa-chevron-down"></i>
                    }
                </div>
                {isActive && <div className="answer">
                    <p>{f.answer}</p>
                </div>}
            </div>
        )
    })
    return (
        <div className="faqs-container">
            {faqsMap}
        </div>
    )
}

export default Faqs