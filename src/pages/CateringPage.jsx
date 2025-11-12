import React, { useState } from 'react';

const initialMessages = [
    { from: 'bot', text: "Ready to turn your party into a pizza-palooza? I'm here to slice through the details. Onsite event or takeout?" }
];

const CateringPage = () => {
    const [messages, setMessages] = useState(initialMessages);
    const [step, setStep] = useState(0);

    const handleUserResponse = (responseText) => {
        const newMessages = [...messages, { from: 'user', text: responseText }];

        if (step === 0) {
            newMessages.push({ from: 'bot', text: "Awesome! How many folks are you expecting?" });
            setStep(1);
        } else if (step === 1) {
            newMessages.push({ from: 'bot', text: "Great! I've got a few popular choices based on party size. Take a look!" });
            setStep(2);
        }

        setMessages(newMessages);
    };

    return (
        <div className="flex flex-1 flex-col bg-background-light dark:bg-background-dark">
            <header className="flex items-center border-b border-border-light px-8 py-4 dark:border-border-dark">
                <nav className="flex items-center gap-2 text-sm">
                    <a className="font-medium text-text-muted-light hover:text-text-light dark:text-text-muted-dark dark:hover:text-text-dark" href="#">Details</a>
                    <span className="text-text-muted-light dark:text-text-muted-dark">/</span>
                    <a className="font-semibold text-text-light dark:text-text-dark" href="#">Package</a>
                </nav>
            </header>
            <div className="flex-1 overflow-y-auto p-8">
                <div className="mx-auto flex max-w-4xl flex-col gap-8">
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex items-end gap-3 ${msg.from === 'user' ? 'self-end' : 'self-start'}`}>
                            {msg.from === 'bot' && <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 shrink-0" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDOgonVOf5gBtHn7uE3D_46CXUPtzcXzOskKctOVfydwqNfUp23MSQGiPa5fOFCRaRGWr5gQUo3lF1QectsG-PpoLX9Je_wvZUvnHXN7Uq0Etxu7g0q4wkOMNCJW3J26nwyaibHa625lwUByHq5ZBamDyfXuNmkatZTUMAoPoKc1FDVBXlHIUaByr5KpsVKy-FD2UBVtMaYeKaRbEqRTNMXKozUEq43RHLnRoPmoqV-yf8XTWzjUhOayEP7nVRs-XL1ZClA090VK_U")' }}></div>}
                            <div className={`flex max-w-lg flex-col gap-1.5 ${msg.from === 'user' ? 'items-end' : 'items-start'}`}>
                                <p className="text-sm font-medium text-text-muted-light dark:text-text-muted-dark">{msg.from === 'bot' ? 'PizzaBot' : 'You'}</p>
                                <p className={`rounded-xl px-4 py-3 text-base font-medium ${msg.from === 'bot' ? 'rounded-bl-none bg-accent text-white' : 'rounded-br-none bg-primary text-white'}`}>
                                    {msg.text}
                                </p>
                            </div>
                            {msg.from === 'user' && <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB-S6y2x9ogMFMwYGKyG87ubjuKc3jMnnEIrbG_8HVlomPonas5j_dy6p74RdfSHaEiuE0At47Wdr9DEJgljxAMa3nx9_IkmwHQH_6iz88IHJ1HYJTFM4R8Xr7XN7-52EI3N7pVPfE84-qYvEzylS1MdvKPVMUAXBJQPej8jTMYvXTdeex1JCbLdji7bsMEelEcNhaphMeMY5f-On9Niy4KhYD24RbOqnmIYmUVGM1Yx7uPL8zt57irQGkcnEDEuodXOZpzvDPArNs")' }}></div>}
                        </div>
                    ))}

                    {step === 0 && (
                        <div className="flex gap-3 pl-[52px]">
                            <button onClick={() => handleUserResponse('Onsite Event')} className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-105">Onsite Event</button>
                            <button onClick={() => handleUserResponse('Takeout')} className="rounded-full border border-border-light bg-surface-light px-4 py-2 text-sm font-semibold text-text-light shadow-sm transition-colors hover:bg-gray-100 dark:border-border-dark dark:bg-surface-dark dark:text-text-dark dark:hover:bg-white/5">Takeout</button>
                        </div>
                    )}
                     {step === 1 && (
                        <div className="flex gap-3 pl-[52px]">
                           <input onKeyDown={(e) => { if (e.key === 'Enter') { handleUserResponse(e.target.value); e.target.value = ''; } }} className="w-full rounded-full border border-border-light bg-surface-light py-3 pl-5 pr-14 text-base" placeholder="e.g., 25" type="text"/>
                        </div>
                    )}
                </div>
            </div>
            <footer className="mt-auto border-t border-border-light bg-background-light p-6 dark:border-border-dark dark:bg-background-dark">
                {/* Input for user message */}
            </footer>
        </div>
    );
};

export default CateringPage;
