import React, { useState } from 'react';
import CateringAssistant from './CateringAssistant';

const ChatbotFAB = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="fixed bottom-8 right-8 bg-primary text-white rounded-full h-16 w-16 flex items-center justify-center shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="material-symbols-outlined">chat</span>
      </button>
      {isOpen && (
        <div className="fixed bottom-28 right-8 h-[70vh] w-[500px] bg-white dark:bg-background-dark rounded-lg shadow-2xl">
          <CateringAssistant />
        </div>
      )}
    </>
  );
};

export default ChatbotFAB;
