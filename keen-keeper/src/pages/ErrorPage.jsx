import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9FBFA] overflow-hidden relative">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-green-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-gray-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="max-w-3xl w-full text-center z-10 px-6">
        {/* Floating 404 Text */}
        <div className="relative inline-block mb-8">
          <h1 className="text-[120px] md:text-[220px] font-black text-[#1A302B] leading-none animate-float tracking-tighter">
            4<span className="text-[#2D4A43] inline-block hover:scale-110 transition-transform cursor-default">0</span>4
          </h1>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4/5 h-4 bg-black/5 rounded-[100%] blur-lg animate-shadow"></div>
        </div>

        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A302B]">
            Lost in the Cloud?
          </h2>
          <p className="text-gray-500 text-lg md:text-xl max-w-lg mx-auto">
            The page you are looking for is currently drifting in space. 
            Don't worry, we can bring you back.
          </p>

          {/* Always Moving "Living" Animated Button */}
          <div className="pt-10 flex justify-center">
            <Link
              to="/"
              className="relative group px-10 py-5 bg-[#2D4A43] text-white font-black text-xl rounded-2xl 
                         transition-all duration-300 shadow-[0_20px_50px_rgba(45,74,67,0.3)]
                         hover:shadow-[0_20px_60px_rgba(45,74,67,0.5)] active:scale-95
                         animate-bounce-slow"
            >
              {/* Shimmer Effect that moves constantly */}
              <div className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden">
                <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
              </div>

              <span className="relative flex items-center gap-3">
                <svg className="w-6 h-6 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Return to Dashboard
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Inline Styles for Custom Animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes shadow {
          0%, 100% { transform: translateX(-50%) scale(1); opacity: 0.3; }
          50% { transform: translateX(-50%) scale(0.8); opacity: 0.1; }
        }
        @keyframes shimmer {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-shadow { animation: shadow 4s ease-in-out infinite; }
        .animate-shimmer { animation: shimmer 2s infinite; }
        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
      `}} />
    </div>
  );
};

export default ErrorPage;