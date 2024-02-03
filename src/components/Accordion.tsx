'use client'
import React, { useState } from "react";

interface AccordionType {
    title: string;
    answer: string;
}

const Accordion = ({ title, answer }: AccordionType) => {
    const [accordionOpen, setAccordionOpen] = useState<boolean>(false);

    return (
        <div className="py-4">
            <button
                onClick={() => setAccordionOpen(!accordionOpen)}
                className="flex justify-between w-full"
            >
                <span className="hover:text-purple-700">{title}</span>
                {accordionOpen ? <span><svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31"><path fill="#301534" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z" /></svg></span> : <span><svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31"><path fill="#AD28EB" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z" /></svg></span>}

            </button>
            <div
                className={`grid overflow-hidden py-2 transition-all duration-300 ease-in-out text-slate-600 hover:text-purple-700 text-sm ${accordionOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                    }`}
            >
                <div className="overflow-hidden">{answer}</div>
            </div>
        </div >
    );
};

export default Accordion;
