import React, { useState } from 'react';
// Check your spelling here: "constent" vs "constant"
import { Mail, Lock, ArrowRight, MessageCircle } from "../constent";
import { motion } from 'framer-motion';
import { useAuth } from "../context/authContext.jsx";
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    // These are correctly set to empty strings. 
    // If the email "paban243@gmail.com" still appears, it is likely 
    // your Browser's Auto-fill setting.
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);
            navigate("/Dashboard");
        } catch (error) {
            console.error("Login failed:", error);
            // Optional: clear fields on error
            // setEmail('');
            // setPassword('');
        }
    };

    return (
        <div className="min-h-screen w-full bg-slate-50 flex items-center justify-center">
            <div className="min-h-screen w-full bg-white rounded-xl shadow-xl overflow-hidden flex flex-col md:flex-row">

                {/* Left Side: Illustration & Branding */}
                <div className="w-full md:w-1/2 bg-indigo-600 flex flex-col justify-center items-center text-white relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="z-10 text-center"
                    >
                        <div className="bg-white/20 p-4 mt-2 rounded-full w-fit mx-auto mb-6">
                            <MessageCircle size={48} className="text-white" />
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">Connect Instantly.</h1>
                        <p className="text-indigo-100 text-lg max-w-sm mx-auto pb-2">
                            Join thousands of developers sharing ideas in real-time.
                        </p>
                    </motion.div>

                    <div className="absolute top-0 left-0 w-32 h-32 bg-indigo-500 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50" />
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-700 rounded-full translate-x-1/3 translate-y-1/3 opacity-30" />
                </div>

                {/* Right Side: Login Form */}
                <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h2 className="text-2xl font-bold text-slate-800 mb-2">Welcome Back</h2>
                        <p className="text-slate-500 mb-8">Please enter your details to sign in.</p>

                        <form onSubmit={handleSubmit} className="space-y-6" autoCorrect="off">
                            {/* Email Input */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700 block">Email Address</label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                                    <input
                                        type="email"
                                        required
                                        autoComplete="off" // This prevents the browser from forcing paban243@gmail.com
                                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                                        placeholder="name@company.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>

                            {/* Password Input */}
                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <label className="text-sm font-medium text-slate-700">Password</label>
                                    <a href="#" className="text-xs text-indigo-600 hover:underline">Forgot password?</a>
                                </div>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                                    <input
                                        type="password"
                                        required
                                        autoComplete="new-password" // Prevents saved password auto-fill
                                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                                        placeholder="••••••••"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors group"
                            >
                                Sign In
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>

                        {/* Social Login Alternative */}
                        <div className="relative my-8">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-slate-200"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-slate-500">Or continue with</span>
                            </div>
                        </div>
                    

                    <p className="text-center mt-8 text-sm text-slate-600">
                        Don't have an account?{' '}
                        <a href="#" className="text-indigo-600 font-semibold hover:underline">Sign up for free</a>
                    </p>
                </motion.div>
            </div>
        </div>
        </div >
    );
};

export default LoginPage;