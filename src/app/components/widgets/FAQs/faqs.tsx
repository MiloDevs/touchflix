"use client"
import { useState } from 'react';

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const FAQs = [
    {
      Q: "How do I sign up for an account?",
      A: "Simply click on the Sign Up button at the top-right corner of the page. Fill in your details, and you're good to go!"
    },
    {
      Q: "What are the available payment methods?",
      A: "We accept major credit and debit cards, as well as secure online payment options for your convenience."
    },
    {
      Q: "How can I watch content on multiple devices?",
      A: "You can enjoy our content on any device of your choice. Just log in with your account, and your preferences will sync across all platforms."
    },
    {
      Q: "Can I download movies and watch offline?",
      A: "Absolutely! Many of our titles are available for download. Just look for the download icon and enjoy offline viewing."
    },
    {
      Q: "What should I do if I forgot my password?",
      A: "No worries! Click on the Forgot Password link on the login page, and we'll guide you through the process of resetting it."
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="max-w-2xl mx-auto p-4">      
    {FAQs.map((faq, index) => (
      <div key={index} className="mb-4">
        <div
          className="bg-gray-100 p-4 cursor-pointer"
          onClick={() => handleToggle(index)}
        >
          <h2 className="text-xl text-black">{faq.Q}</h2>
        </div>
        {openIndex === index && (
          <div className="bg-white p-4 rounded-b-md">
            <p className="text-gray-700">{faq.A}</p>
          </div>
        )}
      </div>
    ))}
    <h1 className="text-center mb-4">
      Have a question that&apos;s not listed here? Feel free to <a href="/support" className="text-red-200">contact us</a> for further assistance!
    </h1>
  </div>
  );
}
