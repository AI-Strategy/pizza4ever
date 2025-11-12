import React from 'react';

const perks = [
    { title: 'Beary Hard Work', description: "We're passionate about making the best pizza...", icon: 'local_pizza' },
    { title: 'Lots of Fun', description: 'Join a team that feels like family...', icon: 'celebration' },
];

const openPositions = [
    { title: 'Pizza Chef', location: 'South Lake', type: 'Full-time' },
    { title: 'Front of House Crew', location: 'North Lake', type: 'Part-time' },
];

const testimonials = [
    { quote: "The best part about working here is the team...", author: 'Sarah, Pizza Chef', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBv2eXAtoDFI7vc4eghXaXF0RBt-YSeRAGGcUtsXMEqi70BxLOlaUEe-jKvsDWQcvIHP9yHjrT-41Cl9OAlOi0WW0kLKLZTmdovyCGVOG6o43dydOjnx2feCm-hRIJTtx5kDBB41OHR4DF_XupfG6zu7QWUK2oVtB-QVCekKdmLPXm0qzr3ooppSHNkYAxaxh6kaeUIk5QEkWPRCCqHA7ruNyekY-24jwLQFOEi4T7gCgzrjXJRV9ySZ2SJ6K6ULW2U-8i66aZo-Ws' },
    { quote: "I started as a driver and now I'm a shift manager...", author: 'Mike, Shift Manager', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDD5EtV18aUwaQrcQDBZlpOzMtI1MstVc0zvz7WfSfZ0PlOrNw9vkkzMwPi3V5SpaOXIy6c1R7U5MQ0uBTOKtVIwKyEYf8ineoVT5dtFGc-0i8DUBgNe2fcge52auXTR31KXkpKrR_cEk0ERFqRwW5y1rzJ3E6ye5Pne983l0mJSTS0Ynmqt7JM0nwKBfZcpl9TD1jvG6oY1KTTbu0z0yICdx8ylXEuIXUpgS40ORBAn8O5WgoWfXL7R6WYpkLwkWK27KbbJbiGAo4' },
]

const CareersPage = () => {
    return (
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="my-5 @container">
                <div className="@[480px]:p-0">
                    <div className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-6 text-center" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBijdjgi_874BU7FcANlpAOLI28-YlSw8bZU4Uz_TnzC8jKHhgXb9AIZlFs64Haaku9mzfP8Dxcn0rrWMORIgqPWJ3HiPDN3XuEOikODykPey20dq-7vMgMXLbGaj3yr0jVNe18XnUBwMOtXPCmgkmnPBiTqBJfYB41prdR6Mgt4RngkUrdCJoZvJ3gCFZHfVAsIDik-kNs3sjWLGR2leyZ0FJUW1z8VuqugxIR0P3sPjsNE0fmxuwG_pUmdTIhuVvhK9-u5kHZOas")` }}>
                        <div className="flex flex-col gap-4">
                            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl">Join the Crew. Your Adventure Awaits.</h1>
                            <h2 className="text-white text-base font-normal leading-normal @[480px]:text-lg max-w-2xl mx-auto">We believe in 'Beary hard work, but lots of fun'. Join our team and set your own schedule in the heart of Lake Tahoe.</h2>
                        </div>
                        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary-hover transition-colors">
                            <span className="truncate">View Openings</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-12 px-4 py-10 @container">
                {/* Perks, positions, testimonials sections */}
            </div>
            <div className="px-4 py-10 my-5 text-center bg-primary-light dark:bg-card-dark rounded-xl">
                <div className="flex flex-col gap-4 items-center p-6">
                    <h2 className="text-2xl font-bold text-dark-text dark:text-cream">Ready to Join Us?</h2>
                    <p className="max-w-xl text-light-text dark:text-[#B0A199]">If you're passionate about great food and even better company, we want to hear from you.</p>
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary-hover transition-colors">
                        <span className="truncate">Apply to Our General App</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CareersPage;
