import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Eye, EyeOff, Lock, User, AlertCircle, ArrowRight, Activity } from 'lucide-react';

const Login = () => {
  const { login, signup, googleLogin } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);
      if (isLogin) {
        await login(formData.email, formData.password);
      } else {
        await signup(formData.email, formData.password);
      }
    } catch (err) {
      setError(`Failed to ${isLogin ? 'sign in' : 'create account'}. Please check your credentials.`);
      console.error(err);
    }
    setLoading(false);
  };

  const handleGoogleLogin = async () => {
    try {
      setError('');
      setLoading(true);
      await googleLogin();
    } catch (err) {
      setError('Failed to sign in with Google.');
      console.error(err);
    }
    setLoading(false);
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setError('');
    setFormData({ email: '', password: '' });
  };

  return (
    <div className="min-h-screen bg-gray-950 grid grid-cols-1 lg:grid-cols-2">
      
      {/* Left Side - Login Form */}
      <div className="flex items-center justify-center p-8 relative overflow-hidden">
        {/* Background Ambience (Subtle) */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-50">
           <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-blue-500/10 rounded-full blur-[80px]" />
           <div className="absolute bottom-[20%] -right-[10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[80px]" />
        </div>

        <div className="w-full max-w-sm z-10">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <Activity className="text-blue-500" size={32} />
              <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                CORTEX
              </h1>
            </div>
            <p className="text-gray-400 text-lg">
              {isLogin ? 'Welcome back. Sign in to your dashboard.' : 'Create an account to get started.'}
            </p>
          </div>

          <div className="space-y-6">
            {error && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-lg flex items-center gap-2 text-sm">
                <AlertCircle size={16} />
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Email Address</label>
                <div className="relative group">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-400 transition-colors" size={18} />
                  <input
                    type="email"
                    required
                    className="w-full bg-gray-900 border border-gray-800 text-white rounded-lg py-3 pl-10 pr-4 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-600"
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Password</label>
                <div className="relative group">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-400 transition-colors" size={18} />
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    className="w-full bg-gray-900 border border-gray-800 text-white rounded-lg py-3 pl-10 pr-10 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-600"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold py-3 rounded-lg transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 group transform active:scale-[0.98]"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    {isLogin ? 'Sign In' : 'Sign Up'}
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-800" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-950 text-gray-500">Or continue with</span>
              </div>
            </div>

            <button
              onClick={handleGoogleLogin}
              disabled={loading}
              className="w-full bg-gray-900 border border-gray-800 text-white font-medium py-3 rounded-lg hover:bg-gray-800 transition-all flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              {isLogin ? 'Sign in with Google' : 'Sign up with Google'}
            </button>
            
            <p className="text-center text-gray-500 text-sm mt-8">
               {isLogin ? "Don't have an account?" : "Already have an account?"} 
               <button 
                type="button"
                onClick={toggleMode}
                className="ml-1 text-blue-400 hover:text-blue-300 font-medium transition-colors focus:outline-none"
               >
                 {isLogin ? 'Sign Up' : 'Sign In'}
               </button>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Visual / Hero */}
      <div className="hidden lg:flex flex-col justify-center items-center relative overflow-hidden bg-gray-900 border-l border-gray-800">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1642427749670-f20e2e76ed8c?q=80&w=2080&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-purple-900/30" />
          
          <div className="relative z-10 p-12 text-center max-w-lg">
             <div className="flex justify-center mb-8 relative">
                <div className="w-24 h-24 bg-blue-500 rounded-full blur-[40px] opacity-50 absolute" />
                <Activity size={80} className="text-white relative z-10" />
             </div>
             <h2 className="text-4xl font-bold text-white mb-6">
               Market Intelligence
             </h2>
             <p className="text-gray-400 text-lg leading-relaxed">
               Access real-time sentiment analysis, predictive signals, and deep market insights powered by the Cortex Neural Engine.
             </p>

             {/* Fake Code / Data Visualization Decor */}
             <div className="mt-12 w-full bg-gray-950/80 backdrop-blur-md rounded-xl border border-gray-800 p-6 text-left shadow-2xl">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="space-y-2 font-mono text-xs md:text-sm">
                   <div className="flex justify-between">
                     <span className="text-blue-400">Analysis.init()</span>
                     <span className="text-gray-500">20ms</span>
                   </div>
                   <div className="flex justify-between">
                     <span className="text-purple-400">Loading Sentiment Model...</span>
                     <span className="text-green-500">Done</span>
                   </div>
                   <div className="flex justify-between">
                     <span className="text-gray-300">Target: $SPY</span>
                     <span className="text-blue-400">BULLISH (92%)</span>
                   </div>
                   <div className="h-1 w-full bg-gray-800 rounded-full mt-2 overflow-hidden">
                     <div className="h-full bg-blue-500 w-[92%] animate-pulse" />
                   </div>
                </div>
             </div>
          </div>
      </div>
    </div>
  );
};

export default Login;
