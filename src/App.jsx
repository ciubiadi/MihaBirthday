import React, { useState, useEffect } from 'react';
import { Cake, PartyPopper, Calendar, MapPin, Clock, Sparkles } from 'lucide-react';

export default function App() {
  const [revealed, setRevealed] = useState(false);
  const [confetti, setConfetti] = useState([]);
  const [shakeIt, setShakeIt] = useState(false);

  useEffect(() => {
    if (revealed) {
      // Create confetti effect
      const pieces = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 0.5,
        duration: 2 + Math.random() * 2
      }));
      setConfetti(pieces);
    }
  }, [revealed]);

  const handleReveal = () => {
    setShakeIt(true);
    setTimeout(() => {
      setRevealed(true);
      setShakeIt(false);
    }, 600);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-500 flex items-center justify-center p-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-300 rounded-full opacity-20 animate-float" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-pink-300 rounded-full opacity-20 animate-float-delayed" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-300 rounded-full opacity-20 animate-float-slow" />
      </div>

      {/* Confetti */}
      {revealed && confetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute top-0 w-3 h-3 rounded-full animate-fall"
          style={{
            left: `${piece.left}%`,
            backgroundColor: ['#ff6b9d', '#ffd93d', '#6bcf7f', '#4d96ff', '#c77dff'][piece.id % 5],
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`
          }}
        />
      ))}

      <div className="relative z-10 max-w-2xl w-full">
        {!revealed ? (
          <div className={`text-center ${shakeIt ? 'animate-shake' : ''}`}>
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-12 transform hover:scale-105 transition-all duration-300">
              <div className="animate-bounce-slow mb-8">
                <Sparkles className="w-16 h-16 mx-auto text-yellow-500 drop-shadow-lg" />
              </div>
              
              <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-pulse-slow">
                PSST!
              </h1>
              
              <p className="text-3xl font-bold text-gray-800 mb-4">
                You've got a secret message...
              </p>
              
              <p className="text-xl text-gray-600 mb-8 font-medium">
                From someone who's getting older (again) 🎂
              </p>
              
              <button
                onClick={handleReveal}
                className="group bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white text-2xl font-bold py-6 px-12 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 hover:rotate-3"
              >
                <span className="flex items-center gap-3">
                  <PartyPopper className="w-8 h-8 group-hover:animate-spin" />
                  CLICK ME!
                  <PartyPopper className="w-8 h-8 group-hover:animate-spin" />
                </span>
              </button>
            </div>
          </div>
        ) : (
          <div className="animate-zoom-in">
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-12 border-8 border-dashed border-yellow-400">
              <div className="text-center mb-8">
                <div className="inline-block animate-bounce-slow">
                  <Cake className="w-20 h-20 mx-auto text-pink-500 drop-shadow-lg mb-4" />
                </div>
                
                <h1 className="text-5xl md:text-6xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 leading-tight">
                  🎉 YOU'RE INVITED! 🎉
                </h1>
                
              {/* Funny Photo Placeholder */}
                <div className="mb-6 transform hover:scale-105 transition-all duration-300 relative z-10 hover:z-20">
                  <div className="relative inline-block">
                    <div className="w-100 h-100 mx-auto bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500 rounded-3xl shadow-2xl border-8 border-yellow-600 overflow-hidden relative">
                      {/* Photo placeholder - Replace src with your actual photo */}
                      <img 
                        src="/placeholder-banana-police.jpg" 
                        alt="Birthday person in banana police officer costume" 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback if image doesn't load - show fun placeholder
                          e.target.style.display = 'none';
                          e.target.nextElementSibling.style.display = 'flex';
                        }}
                      />
                      {/* Fallback placeholder */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-500" style={{display: 'none'}}>
                        <div className="text-8xl mb-4">🍌</div>
                        <div className="text-6xl mb-4">👮</div>
                        <p className="text-lg font-bold text-yellow-900 px-4 text-center">
                          Banana Police Officer<br/>on Duty!
                        </p>
                      </div>
                    </div>
                    {/* Fun badge */}
                    <div className="absolute -bottom-4 -right-4 bg-red-500 text-white px-5 py-3 rounded-full font-bold text-base shadow-lg transform rotate-12">
                      That's me! 😄
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-yellow-100 to-pink-100 rounded-2xl p-8 mb-6 transform rotate-1 shadow-lg relative z-0">
                  <p className="text-3xl font-bold text-gray-800 mb-2">
                    It's My Birthday Party!!
                  </p>
                  <p className="text-xl text-gray-700 italic">
                    (And you're the lucky one who gets to celebrate with me!)
                  </p>
                </div>
              </div>

              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4 bg-blue-50 p-4 rounded-xl transform hover:scale-105 transition-all">
                  <Calendar className="w-10 h-10 text-blue-600 flex-shrink-0" />
                  <div className="text-left">
                    <p className="font-bold text-gray-700 text-sm uppercase tracking-wide">When</p>
                    <p className="text-2xl font-black text-gray-900">Saturday, 21 February</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-green-50 p-4 rounded-xl transform hover:scale-105 transition-all">
                  <Clock className="w-10 h-10 text-green-600 flex-shrink-0" />
                  <div className="text-left">
                    <p className="font-bold text-gray-700 text-sm uppercase tracking-wide">Time</p>
                    <p className="text-2xl font-black text-gray-900">Evening vibes ✨</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-purple-50 p-4 rounded-xl transform hover:scale-105 transition-all">
                  <MapPin className="w-10 h-10 text-purple-600 flex-shrink-0" />
                  <div className="text-left">
                    <p className="font-bold text-gray-700 text-sm uppercase tracking-wide">Where</p>
                    <p className="text-2xl font-black text-gray-900">My Place 🏠</p>
                    <p className="text-sm text-gray-600 italic">(You know where to find me!)</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white rounded-2xl p-6 mb-6 transform -rotate-1">
                <p className="text-xl font-bold mb-2">⚠️ IMPORTANT RULES ⚠️</p>
                <ul className="text-left space-y-2 text-lg">
                  <li>✅ Bring your best party mood</li>
                  <li>✅ Funny stories are mandatory</li>
                  <li>❌ Being boring is strictly forbidden</li>
                </ul>
              </div>

              <div class="funny-message">
                <p><strong>Warning:</strong> Attendance is mandatory! Non-attendance will result in:</p>
                <ul style={{ marginTop: '10px', marginLeft: '20px' }}>
                    <li>Missing out on legendary cake 🍰</li>
                    <li>FOMO for the rest of the year 😱</li>
                    <li>Having to hear about it for months 🙄</li>
                    <li>Disappointing the birthday person (me!) 😢</li>
                </ul>
              </div>

              <div class="funny-message" style={{backgroundColor: "#fce7f3", borderLeftColor: "#ec4899"}}>
                <strong>Dress Code:</strong> Come as you are! Unless you're boring, then come as someone fun! 😄
            </div>

            <div class="funny-message" style={{backgroundColor: "#d1fae5", borderLeftColor: "#10b981"}}>
                <strong>What to Bring:</strong> 
                <br/>✅ Your amazing self
                <br/>✅ Good vibes
                <br/>❌ Your work stress (leave it at home!)
            </div>

              <div className="text-center">
                <p className="text-2xl font-bold text-gray-800 mb-4">
                  Can't wait to see you there! 🥳
                </p>
                <PartyPopper className="w-12 h-12 mx-auto text-yellow-500 drop-shadow-lg animate-pulse-slow" />
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        @keyframes fall {
          0% { transform: translateY(-100vh) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px) rotate(-5deg); }
          75% { transform: translateX(10px) rotate(5deg); }
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }

        @keyframes zoom-in {
          0% { transform: scale(0.8); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }

        .animate-fall {
          animation: fall linear forwards;
        }

        .animate-shake {
          animation: shake 0.6s ease-in-out;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animate-zoom-in {
          animation: zoom-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}
