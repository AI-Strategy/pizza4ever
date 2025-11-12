import React from 'react';

const NewsletterPage = () => {
  return (
    <main className="flex flex-1 font-montserrat">
      <div className="flex w-full flex-wrap">
        <div className="hidden lg:flex lg:w-1/2 relative items-center justify-center bg-black">
          <img
            alt="Dynamic action shot of a skier carving down a snowy run at Squaw Valley, with snow kicking up and mountains in the background."
            className="absolute inset-0 h-full w-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQVl9Vk2yQ-s18uGb_yOcoI57bsyUz6zrpcuuXtsBA51dHbYIOimn8XcTsheUu23ZMjjq0yYprmWUDbdOGpxK0X4HB9jtA6yIrrCjyQEd8_U8TS1NQve1qZpujg3boSrDE6IpBKxUOZUqTgVHFo15ko6WC-aOsjuWBy92RTdiFZBknHpKLTaOtbLrigI2H4AcXA3k78_KR_ooerQeLmsJBNCB7tCJLxAocL3OJQaGxZqh75kDslpBIxRlH1doz6VRusdxxOfjD3EE"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-8 md:p-12 bg-background-light dark:bg-background-dark">
          <div className="flex flex-col max-w-md w-full flex-1 gap-6 py-10">
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center gap-3 mb-4">
                <svg className="h-10 w-10 text-primary" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C8.43 2 5.23 4.41 4.35 7.71L2.27 9.79L3.68 11.2L5.86 9.02C6.22 8.43 6.81 8.07 7.5 8.07C8.19 8.07 8.78 8.43 9.14 9.02L12 13.5L14.86 9.02C15.22 8.43 15.81 8.07 16.5 8.07C17.19 8.07 17.78 8.43 18.14 9.02L20.32 11.2L21.73 9.79L19.65 7.71C18.77 4.41 15.57 2 12 2ZM12 15L6.4 9.4C6.18 9.18 5.89 9.07 5.59 9.07C5.3 9.07 5.01 9.18 4.79 9.4L3 11.19L12 20.19L21 11.19L19.21 9.4C18.99 9.18 18.7 9.07 18.41 9.07C18.12 9.07 17.83 9.18 17.6 9.4L12 15Z"></path>
                </svg>
                <span className="text-2xl font-bold text-text-light dark:text-text-dark">Pizza 4 Ever</span>
              </div>
              <h1 className="text-text-light dark:text-text-dark text-[32px] font-extrabold tracking-tight">Don't Be a Stranger!</h1>
              <p className="text-subtle-light dark:text-subtle-dark text-base font-normal leading-normal mt-2">
                Get the freshest news, hottest deals, and our worst bear puns delivered monthly. It’s un-bear-ably good.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <label className="flex flex-col w-full">
                <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal pb-2">Email Address</p>
                <div className="relative flex w-full items-center">
                  <div className="absolute left-0 pl-4 pointer-events-none">
                    <span className="material-symbols-outlined text-subtle-light dark:text-subtle-dark">mail</span>
                  </div>
                  <input
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-input-bg-light dark:bg-input-bg-dark h-12 placeholder:text-subtle-light dark:placeholder:text-subtle-dark pl-11 pr-4 text-base font-normal leading-normal"
                    placeholder="you@example.com"
                    type="email"
                  />
                </div>
              </label>
              <label className="flex flex-col w-full">
                <div className="flex items-center justify-between pb-2">
                  <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal">First Name</p>
                  <span className="text-xs text-subtle-light dark:text-subtle-dark">Optional</span>
                </div>
                <div className="relative flex w-full items-center">
                  <div className="absolute left-0 pl-4 pointer-events-none">
                    <span className="material-symbols-outlined text-subtle-light dark:text-subtle-dark">person</span>
                  </div>
                  <input
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-input-bg-light dark:bg-input-bg-dark h-12 placeholder:text-subtle-light dark:placeholder:text-subtle-dark pl-11 pr-4 text-base font-normal leading-normal"
                    placeholder="So we can say hi!"
                    type="text"
                  />
                </div>
              </label>
            </div>
            <div className="flex flex-col gap-4 pt-2">
              <button className="flex items-center justify-center whitespace-nowrap rounded-lg h-12 px-6 text-base font-semibold text-white bg-primary hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark">
                Sign Me Up!
              </button>
            </div>
            <p className="text-center text-xs text-subtle-light dark:text-subtle-dark">We respect your privacy. No spam, just pizza love.</p>
            <div className="pt-6 text-center">
              <p className="text-xs text-subtle-light dark:text-subtle-dark">© 2024 Pizza 4 Ever. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NewsletterPage;
