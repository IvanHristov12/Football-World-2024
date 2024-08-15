import { useState } from "react";

const faqData = [
    {
        question: "What can I use this service for?",
        answer: "This service provides comprehensive football data that you can integrate into your app or website to enhance user experience with live scores, statistics, and more.",
    },
    {
        question: "How do I get started with this service?",
        answer: "To start using this service, sign up for an account, select a plan that suits your needs, and obtain an API key to authenticate your requests.",
    },
    {
        question: "What kind of support is available if I have questions?",
        answer: "We offer extensive documentation, and our support team is available to help with any questions or issues you might encounter while using the service.",
    },
    {
        question: "Can I explore the features before committing?",
        answer: "You can browse our comprehensive documentation and resources to understand the full capabilities of the service before getting started.",
    },
    {
        question: "How do I get support if I need help?",
        answer: "Our support team is available to assist you with any inquiries. You can reach out via our contact page or through the support channels provided in your account.",
    },
    {
        question: "How do i check the status of the Servers ?",
        answer: "You can check the Football-API Service status here: https://api-sports.betteruptime.com/",
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
            <div className="container mx-auto p-6">
                    {/* Creates space for extra scrolling */}
                <div className="h-20"></div>
            </div>
        </>
    );
}