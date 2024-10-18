import React, { useState } from 'react'
import Heading from '../Heading'

const faqsData = [
  {
    question: 'What makes Tunirise different from other agencies?',
    answer: 'Tunirise focuses on building long-term relationships through a personalized approach, understanding each client’s unique needs, and offering services that drive real, measurable results.'
  },
    {
      question: 'How does Tunirise help my business grow?',
      answer: 'Tunirise provides comprehensive media production and web development services that help your business enhance its digital presence and engagement, with a focus on organic growth and impactful content creation.'
    },
    {
      question: 'How can Tunirise help with content marketing?',
      answer: 'We specialize in creating engaging, high-quality content that drives organic reach and engagement across social media platforms. Our content creation includes planning, strategy, and execution of posts, reels, podcasts, and more.'
    },
    {
      question: 'What is the process for working with Tunirise?',
      answer: 'We start by understanding your business goals, followed by a strategy session where we plan out the content or development project. From there, we implement and deliver the services, keeping you informed throughout the process.'
    },
    {
      question: 'Can Tunirise help increase my social media followers?',
      answer: 'Yes! We focus on organic growth strategies that can help increase your followers and engagement on platforms like Instagram and Facebook, without needing paid advertisements.'
    },
    {
      question: 'What is the timeline for a web development project?',
      answer: 'The timeline varies based on the project’s complexity, but most web development projects range from 4 to 12 weeks. We provide a detailed timeline after assessing your requirements.'
    },
    {
      question: 'Does Tunirise provide ongoing support after project completion?',
      answer: 'Yes, we offer post-project support and maintenance services to ensure your website or media content remains up-to-date and effective over time.'
    }
   
  ];
  
export default function Faqs() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  return (
    <section className="container pb-24">
    <Heading tit1={"FREQUENTLY"} tit2={" ASKED"} />
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-center items-center gap-x-16 gap-y-5 xl:gap-28 lg:flex-row lg:justify-between max-lg:max-w-2xl mx-auto max-w-full">
        <div className="w-full lg:w-1/2 lg:d-none">
          <img
             src="/team/chourouk.jpg"  
            alt="FAQ section illustration"
            className="w-full rounded-xl object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-xl">
            <div className="mb-6 lg:mb-16">
              <h6 className="text-lg text-center font-medium text-primary mb-2 lg:text-left">faqs</h6>
              <h2 className="text-4xl text-center font-bold text-gray-900 leading-[3.25rem] mb-5 lg:text-left">
                Looking for answers?
              </h2>
            </div>
            <div className="accordion-group">
              {faqsData.map((faq, index) => (
                <div
                  key={index}
                  className={`accordion py-8 border-b border-solid border-gray-200 ${activeIndex === index ? 'active' : ''}`}
                >
                  <button
                    className="accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8 text-gray-600 w-full transition duration-500 hover:text-primary"
                    onClick={() => toggleAccordion(index)}
                  >
                    <h5>{faq.question}</h5>
                    <svg
                      className={`text-gray-900 transition duration-500 group-hover:text-primary ${activeIndex === index ? 'rotate-180' : ''}`}
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                  <div
                    className={`accordion-content w-full px-0 overflow-hidden pr-4 ${activeIndex === index ? 'active' : ''}`}
                    style={{ maxHeight: activeIndex === index ? '100px' : '0px' }}
                  >
                    <p className="text-base font-normal text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
                                          
  )
}
