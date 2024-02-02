// components/Accordion.tsx
import React, { useState } from 'react';

const questionsAndAnswers = [
    { question: 'Question 1', answer: 'Answer to question 1...' },
    { question: 'Question 2', answer: 'Answer to question 2...' },
    { question: 'Question 3', answer: 'Answer to question 3...' },
];

const Accordion = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAnswer = (index: number) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div>
            <div className="border-4 border-solid border-black p-4 rounded-lg shadow-md mt-4">
                <div>
                    <h2 className="text-xl font-semibold mb-2">Frequently Asked Questions</h2>
                </div>
                <div>
                    {questionsAndAnswers.map((qa, index) => (
                        <div key={index} className="mb-4">
                            <div
                                className="flex justify-between items-center cursor-pointer"
                                onClick={() => toggleAnswer(index)}
                            >
                                <h3 className="text-lg font-semibold mb-1">{qa.question}</h3>
                                <span>{openIndex === index ? '-' : '+'}</span>
                            </div>
                            {openIndex === index && (
                                <div className="mt-2">
                                    <p>{qa.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Accordion;
hh