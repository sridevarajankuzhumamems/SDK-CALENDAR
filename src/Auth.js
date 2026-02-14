import React, { useState } from 'react';
import { setSdkId } from './utils/auth';

const Auth = ({ onAuthSuccess }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetch('https://sdk-calendar-be-1.onrender.com/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (data.success) {
                // Store token in localStorage
                localStorage.setItem('calendar_auth_token', data.token);

                // Store SDK ID in localStorage
                if (data.sdkId) {
                    setSdkId(data.sdkId);
                }

                localStorage.setItem('calendar_user', JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone
                }));

                // Call success callback
                onAuthSuccess(data.token);
            } else {
                setError(data.message || 'Registration failed');
            }
        } catch (err) {
            setError('Network error. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-[#0c0600] overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#FF9933]/10 blur-[120px] animate-pulse-slow"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#FFD700]/8 blur-[120px] animate-pulse-delayed"></div>
            </div>

            {/* Registration Form Container */}
            <div className="relative z-10 w-full max-w-md mx-4 animate-in fade-in zoom-in-95 duration-1000">
                {/* Glassmorphic Card */}
                <div className="bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] p-8">

                    {/* Header */}
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-[#FFD700] mb-2 tracking-wide">
                            Welcome
                        </h2>
                        <p className="text-white/60 text-sm">
                            Enter your details to continue
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Name */}
                        <div>
                            <label className="block text-white/70 text-sm mb-2 font-medium">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[#FFD700]/50 focus:bg-white/10 transition-all"
                                placeholder="Enter your name"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-white/70 text-sm mb-2 font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[#FFD700]/50 focus:bg-white/10 transition-all"
                                placeholder="Enter your email"
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="block text-white/70 text-sm mb-2 font-medium">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[#FFD700]/50 focus:bg-white/10 transition-all"
                                placeholder="Enter your phone number"
                            />
                        </div>

                        {/* Error Message */}
                        {error && (
                            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-3 text-red-400 text-sm">
                                {error}
                            </div>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3 bg-gradient-to-r from-[#FF9933] to-[#FFD700] text-[#0c0600] font-bold rounded-xl hover:shadow-[0_0_20px_rgba(255,215,0,0.3)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? 'Processing...' : 'Continue'}
                        </button>
                    </form>
                </div>

                {/* Decorative Line */}
                <div className="mt-6 h-[1px] w-full bg-gradient-to-r from-transparent via-[#FFD700]/30 to-transparent"></div>
            </div>

            {/* Animations */}
            <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.1); }
        }
        @keyframes pulse-delayed {
          0%, 100% { opacity: 0.2; transform: scale(1.1); }
          50% { opacity: 0.1; transform: scale(1); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        .animate-pulse-delayed {
          animation: pulse-delayed 10s ease-in-out infinite;
        }
      `}</style>
        </div>
    );
};

export default Auth;
