import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Email and password are required.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const { user, token } = await response.json();
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', token);
        onLogin(); // Notify App component of login
        navigate('/');
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Invalid email or password.');
      }
    } catch (err) {
      setError('Failed to connect to the server. Please try again later.');
    }
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="flex h-full min-h-screen grow flex-col">
        <main className="flex flex-1">
          <div className="flex w-full flex-wrap">
            {/* Left Pane: Image */}
            <div className="hidden lg:flex lg:w-1/2 relative items-center justify-center bg-black">
              <img
                alt="Scenic view of Lake Tahoe with snow-capped mountains and clear blue water."
                className="absolute inset-0 h-full w-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoaAjVS9GuaHrX__lRwhrzIe5_R1DVV1173lZwRY7hqVCeJGYdCTus4--UmG0-lHDi3l43Kwies5tI_2O_3vrhf3Yt2IcAj4Y5JFPIrZtrGeaiOXn5KikndoJhkcxix87Q8EdDjtbXTKKo6G5kcT-JLJ0mWMf9Baw9HECh4VV_IDkQoULLpN6SaDJ-LI_Vwz6ydhA4ntzKRSgmjXWCQASZRsQikdMgZjSjJs6Q_5ZIjgTCqAjrXQv3AYcwVwqAKakM_LBRiaT_AC4"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Right Pane: Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-8 md:p-12 bg-background-light dark:bg-background-dark">
              <div className="flex flex-col max-w-md w-full flex-1 gap-6 py-10">
                {/* Header */}
                <div className="flex flex-col items-center text-center">
                  <div className="flex items-center gap-3 mb-4">
                    <svg
                      className="h-10 w-10 text-primary"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2C8.43 2 5.23 4.41 4.35 7.71L2.27 9.79L3.68 11.2L5.86 9.02C6.22 8.43 6.81 8.07 7.5 8.07C8.19 8.07 8.78 8.43 9.14 9.02L12 13.5L14.86 9.02C15.22 8.43 15.81 8.07 16.5 8.07C17.19 8.07 17.78 8.43 18.14 9.02L20.32 11.2L21.73 9.79L19.65 7.71C18.77 4.41 15.57 2 12 2ZM12 15L6.4 9.4C6.18 9.18 5.89 9.07 5.59 9.07C5.3 9.07 5.01 9.18 4.79 9.4L3 11.19L12 20.19L21 11.19L19.21 9.4C18.99 9.18 18.7 9.07 18.41 9.07C18.12 9.07 17.83 9.18 17.6 9.4L12 15Z"></path>
                    </svg>
                    <span className="text-2xl font-bold text-text-light dark:text-text-dark">Pizza 4 Ever</span>
                  </div>
                  <h1 className="text-text-light dark:text-text-dark text-[32px] font-bold tracking-tight">Admin Portal</h1>
                  <p className="text-subtle-light dark:text-subtle-dark text-base font-normal leading-normal mt-2">Log in to manage your operations.</p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </label>
                  <label className="flex flex-col w-full">
                    <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal pb-2">Password</p>
                    <div className="relative flex w-full items-center">
                      <div className="absolute left-0 pl-4 pointer-events-none">
                        <span className="material-symbols-outlined text-subtle-light dark:text-subtle-dark">lock</span>
                      </div>
                      <input
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-input-bg-light dark:bg-input-bg-dark h-12 placeholder:text-subtle-light dark:placeholder:text-subtle-dark pl-11 pr-11 text-base font-normal leading-normal"
                        placeholder="Enter your password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <button type="button" aria-label="Toggle password visibility" className="absolute right-0 pr-4 text-subtle-light dark:text-subtle-dark hover:text-text-light dark:hover:text-text-dark">
                        <span className="material-symbols-outlined">visibility</span>
                      </button>
                    </div>
                  </label>

                  {/* Options */}
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <label className="flex gap-x-2 items-center">
                      <input className="h-4 w-4 rounded border-border-light dark:border-border-dark bg-transparent text-primary checked:bg-primary checked:border-primary focus:ring-primary/50 focus:ring-offset-background-light dark:focus:ring-offset-background-dark focus:outline-none" type="checkbox" />
                      <p className="text-text-light dark:text-text-dark text-sm font-normal">Remember Me</p>
                    </label>
                    <a className="text-sm font-medium text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary/50 rounded" href="#">Forgot Password?</a>
                  </div>
                  {/* Buttons */}
                  <div className="flex flex-col gap-4 pt-2">
                    <button type="submit" className="flex items-center justify-center whitespace-nowrap rounded-lg h-12 px-6 text-base font-semibold text-white bg-primary hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark">
                      Log In
                    </button>
                  </div>
                </form>

                {error && (
                  <p className="text-center text-sm text-red-500">{error}</p>
                )}

                {/* Security Notice */}
                <p className="text-center text-xs text-subtle-light dark:text-subtle-dark">For your security, you may be prompted for multi-factor authentication.</p>
                {/* Footer */}
                <div className="pt-6 text-center">
                  <p className="text-xs text-subtle-light dark:text-subtle-dark">© 2024 Pizza 4 Ever. All Rights Reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
