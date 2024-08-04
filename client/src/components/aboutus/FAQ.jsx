import { useState } from "react";

const faqData = [
    {
        question: "What's the best thing about Switzerland?",
        answer: "I don't know, but the flag is a big plus.",
    },
    {
        question: "How do you make holy water?",
        answer: "You boil the hell out of it.",
    },
    {
        question: "What do you call someone with no body and no nose?",
        answer: "Nobody knows.",
    },
    {
        question: "Why do you never see elephants hiding in trees?",
        answer: "Because they're so good at it.",
    },
    {
        question: "Why can't you hear a pterodactyl go to the bathroom?",
        answer: "Because the 'P' is silent.",
    },
    {
        question: "Why did the invisible man turn down the job offer?",
        answer: "He couldn't see himself doing it.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <div className="max-w-2xl mx-auto my-10 mt-20">
                <h2 className="text-2xl font-bold mb-5">Frequently Asked Questions</h2>
                <div className="border-t border-gray-200">
                    {faqData.map((item, index) => (
                        <div key={index} className="border-b border-gray-200">
                            <button
                                className="w-full flex justify-between items-center p-4 text-left"
                                onClick={() => handleToggle(index)}
                            >
                                <span className="text-lg font-medium">{item.question}</span>
                                <span>{openIndex === index ? '-' : '+'}</span>
                            </button>
                            {openIndex === index && (
                                <div className="p-4 pt-0 text-gray-700">
                                    {item.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}