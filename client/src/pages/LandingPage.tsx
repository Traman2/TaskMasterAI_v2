import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Typing Animation
const typingAnimation = `
  @keyframes typing {
    from { width: 0 }
    to { width: 100% }
  }

  @keyframes blink {
    50% { border-color: transparent }
  }

  .typing-animation {
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    border-right: 3px solid #fff;
    animation: 
      typing 1.5s steps(40, end),
      blink .75s step-end 8;
  }
`;

export default function LandingPage() {
  const [solid, setSolid] = useState(false);
  const navigate = useNavigate();

  //Button Handlers
  const loginHandler = () => {
    navigate("/login");
  };
  const signupHandler = () => {
    navigate("/login");
  };

  return (
    <div className="relative h-screen flex flex-col">
      <style>{typingAnimation}</style>
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute top-20 left-1/4 w-4 h-4 bg-orange-400 rotate-45"></div>
        <div className="absolute top-40 right-1/4 w-3 h-3 bg-green-400 rotate-45"></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-blue-400 rotate-45"></div>
        <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-purple-500 rotate-45 opacity-60"></div>
        <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-yellow-400 rotate-45"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-pink-400 rotate-45"></div>
      </div>
      <div
        className="relative z-10 flex-1 flex flex-col overflow-auto scrollbar-cool"
        onScroll={(e) => setSolid(e.currentTarget.scrollTop > 90)}
      >
        {/* Navbar */}
        <nav
          className={`sticky top-0 w-full px-6 py-4 z-50`}>
          {" "}
          <div className="max-w-7xl mx-auto">
            <div
              className={`
              flex items-center justify-between
              rounded-2xl px-6 py-3 border border-white/10
              transition-colors duration-300 ease-in-out
              ${
                solid
                  ? "bg-purple-900 backdrop-blur-md shadow-md"
                  : "bg-white/5 backdrop-blur-md"
              }
            `}
            >
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                  <img
                    src="/LogoMaster.png"
                    alt="TaskMasterAI Logo"
                    className="h-8 w-auto flex-shrink-0"
                  />
                </div>
                <span className="text-white font-bold text-xl">
                  TaskMasterAI
                </span>
              </div>

              <div className="hidden md:flex items-center space-x-8">
                <a
                  href="#home"
                  className="text-white hover:text-blue-300 transition-colors duration-200 font-medium"
                >
                  Home
                </a>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
                >
                  Services
                </a>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
                >
                  Contact us
                </a>
              </div>

              <div className="flex items-center space-x-4">
                <button
                  onClick={loginHandler}
                  className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
                >
                  Log in
                </button>
                <button
                  onClick={signupHandler}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
                >
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </nav>

        <div className="flex-1 px-6 pt-40 pb-20 relative z-10">
          <div className="max-w-7xl mx-auto min-h-[100vh] flex flex-col">
            <div className="flex flex-col md:flex-row items-center justify-between mb-32 gap-12">
              <div className="flex-1 text-left">
                <h1 className="text-white text-7xl md:text-8xl font-bold mb-6">
                  <span className="typing-animation bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    TaskMasterAI
                  </span>
                </h1>
              </div>
              
              <div className="flex-1 text-left">
                <p className="text-white/70 text-2xl md:text-3xl leading-relaxed">
                  Your all-in-one platform for academic success. Connect with peers, manage tasks, and excel in your studies together.
                </p>
              </div>
            </div>

            <div className="text-center mb-16 mt-auto">
              <h2 className="text-white text-4xl font-bold mb-4">Powerful Features</h2>
              <p className="text-white/60 text-xl">Everything you need to succeed in your academic journey</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-32">
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
                <div className="text-blue-400 text-4xl mb-6">📝</div>
                <h3 className="text-white text-2xl font-bold mb-4">Smart Task Management</h3>
                <p className="text-white/60 text-lg">
                  Track assignments, deadlines, and progress with our intuitive task management system. Get alerts for upcoming deadlines and stay on top of your work.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
                <div className="text-blue-400 text-4xl mb-6">🎓</div>
                <h3 className="text-white text-2xl font-bold mb-4">Class Organization</h3>
                <p className="text-white/60 text-lg">
                  Manage your classes efficiently with syllabus integration, assignment tracking, and class-specific resources all in one place.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
                <div className="text-blue-400 text-4xl mb-6">👥</div>
                <h3 className="text-white text-2xl font-bold mb-4">Study Groups</h3>
                <p className="text-white/60 text-lg">
                  Connect with classmates, form study groups, and collaborate on assignments. Share resources and help each other succeed.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
                <div className="text-blue-400 text-4xl mb-6">💬</div>
                <h3 className="text-white text-2xl font-bold mb-4">Real-time Chat</h3>
                <p className="text-white/60 text-lg">
                  Communicate instantly with your study group members. Share ideas, ask questions, and get help when you need it.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
                <div className="text-blue-400 text-4xl mb-6">🤖</div>
                <h3 className="text-white text-2xl font-bold mb-4">AI-Powered Tools</h3>
                <p className="text-white/60 text-lg">
                  Access AI-powered study tools including quizzes, flashcards, and a smart chatbot to help you learn and understand concepts better.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
                <div className="text-blue-400 text-4xl mb-6">📊</div>
                <h3 className="text-white text-2xl font-bold mb-4">Progress Analytics</h3>
                <p className="text-white/60 text-lg">
                  Track your academic progress with detailed analytics, performance metrics, and insights to help you improve.
                </p>
              </div>
            </div>

            <div className="text-center mb-32">
              <h2 className="text-white text-4xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-white/60 text-xl mb-8">Join thousands of students already using TaskMasterAI</p>
              <button
                onClick={signupHandler}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-12 py-4 rounded-full text-xl font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Get Started Now
              </button>
            </div>
          </div>
        </div>

        <footer className="relative z-10 bg-[#0B103E] border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="flex flex-col items-start">
                <div className="flex items-center space-x-2 mb-4">
                  <img
                    src="/LogoMaster.png"
                    alt="TaskMasterAI Logo"
                    className="h-8 w-auto"
                  />
                  <span className="text-white font-bold text-xl">
                    TaskMasterAI
                  </span>
                </div>
                <p className="text-white/60">
                  Your all-in-one platform for academic success.
                </p>
              </div>

              <div>
                <h3 className="text-white font-bold text-lg mb-4">Product</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-white/60 hover:text-white transition-colors">Features</a></li>
                  <li><a href="#" className="text-white/60 hover:text-white transition-colors">Pricing</a></li>
                  <li><a href="#" className="text-white/60 hover:text-white transition-colors">Testimonials</a></li>
                  <li><a href="#" className="text-white/60 hover:text-white transition-colors">Updates</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-bold text-lg mb-4">Company</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-white/60 hover:text-white transition-colors">About Us</a></li>
                  <li><a href="#" className="text-white/60 hover:text-white transition-colors">Careers</a></li>
                  <li><a href="#" className="text-white/60 hover:text-white transition-colors">Contact</a></li>
                  <li><a href="#" className="text-white/60 hover:text-white transition-colors">Blog</a></li>
                </ul>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-white/40 text-center">
                © 2025 TaskMasterAI. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
