import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const RoboticsCompetition = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
  
    const slides = [
      {
        title: "COMPETIÇÃO DE ROBÓTICA!",
        subtitle: "Junte-se à 1ª competição de robótica do CEUB",
        image: "/api/placeholder/400/250",
        description: "Uma oportunidade única para estudantes demonstrarem suas habilidades em programação e engenharia robótica."
      },
      {
        title: "INOVAÇÃO E TECNOLOGIA",
        subtitle: "Explore o futuro da automação",
        image: "/api/placeholder/400/250",
        description: "Participe de workshops e demonstrações com as mais recentes tecnologias em robótica e IA."
      },
      {
        title: "NETWORKING E APRENDIZADO",
        subtitle: "Conecte-se com outros entusiastas",
        image: "/api/placeholder/400/250",
        description: "Conheca outros estudantes e profissionais apaixonados por robótica e tecnologia."
      }
    ];
  
    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    };
  
    const prevSlide = () => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const currentSlideData = slides[currentSlide];

  return (
    <div className="max-w-lg mx-auto bg-white rounded-2xl border-2 border-gray-300 overflow-hidden shadow-lg">
      <div className="bg-white text-center pt-6 pb-2">
        <h1 className="text-2xl font-bold text-gray-800 tracking-wider">
          NOTÍCIAS
        </h1>
      </div>

      <div className="px-6 pb-6">
        <div className="text-center mb-4">
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            {currentSlideData.title}
          </h2>
          <p className="text-sm text-gray-700 font-medium">
            {currentSlideData.subtitle}
          </p>
        </div>


        <div className="relative">

          <button onClick={prevSlide} className="absolute right-80 top-1/2 transform -translate-y-1/2 z-10 bg-[#9A238B] hover:scale-102 active:scale-98 text-white rounded-full p-2 shadow-lg">
            <ChevronLeft className="w-6 h-6" />
          </button>


          <button onClick={nextSlide} className="absolute left-80 top-1/2 transform -translate-y-1/2 z-10 bg-[#9A238B] hover:scale-102 active:scale-98 text-white rounded-full p-2 shadow-lg">
            <ChevronRight className="w-6 h-6" />
          </button>

 
          <div className="mx-8 rounded-lg overflow-hidden shadow-md">
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 h-48 flex items-center justify-center relative">

              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-600/20"></div>
              

              {currentSlide === 0 && (
                <div className="relative z-10 flex items-center justify-center space-x-4">
 
                  <div className="bg-green-500 w-12 h-16 rounded-t-full rounded-b-lg relative">
                    <div className="bg-yellow-400 w-8 h-8 rounded-full absolute -top-2 left-2"></div>
                  </div>
                  
                  <div className="bg-blue-600 w-12 h-16 rounded-t-full rounded-b-lg relative">
                    <div className="bg-orange-300 w-8 h-8 rounded-full absolute -top-2 left-2"></div>
                  </div>
                  
                  <div className="bg-gray-200 w-16 h-4 rounded-lg relative">
                    <div className="bg-red-500 w-3 h-3 rounded absolute top-1 left-2"></div>
                    <div className="bg-blue-500 w-3 h-3 rounded absolute top-1 right-2"></div>
                  </div>
                  
                  <div className="bg-purple-600 w-12 h-16 rounded-t-full rounded-b-lg relative">
                    <div className="bg-pink-300 w-8 h-8 rounded-full absolute -top-2 left-2"></div>
                  </div>
                </div>
              )}

              {currentSlide === 1 && (
                <div className="relative z-10 flex items-center justify-center space-x-6">

                  <div className="bg-cyan-400 w-20 h-12 rounded-lg relative">
                    <div className="bg-white w-4 h-4 rounded absolute top-2 left-2"></div>
                    <div className="bg-yellow-400 w-3 h-3 rounded absolute top-3 right-2"></div>
                    <div className="bg-green-400 w-2 h-6 rounded absolute bottom-1 left-4"></div>
                  </div>
                  
                  <div className="bg-purple-500 w-16 h-16 rounded-full relative flex items-center justify-center">
                    <div className="bg-white w-8 h-8 rounded-full"></div>
                    <div className="bg-blue-600 w-4 h-4 rounded-full absolute"></div>
                  </div>
                  
                  <div className="bg-emerald-400 w-18 h-10 rounded-lg relative">
                    <div className="bg-orange-500 w-3 h-3 rounded absolute top-1 left-1"></div>
                    <div className="bg-red-500 w-3 h-3 rounded absolute top-1 right-1"></div>
                    <div className="bg-blue-500 w-12 h-2 rounded absolute bottom-1 left-1 right-1"></div>
                  </div>
                </div>
              )}

              {currentSlide === 2 && (
                <div className="relative z-10 flex items-center justify-center space-x-3">

                  <div className="bg-red-500 w-10 h-14 rounded-t-full rounded-b-lg relative">
                    <div className="bg-yellow-300 w-6 h-6 rounded-full absolute -top-1 left-2"></div>
                  </div>
                  
                  <div className="bg-green-600 w-10 h-14 rounded-t-full rounded-b-lg relative">
                    <div className="bg-pink-300 w-6 h-6 rounded-full absolute -top-1 left-2"></div>
                  </div>
                  
                  <div className="bg-blue-500 w-10 h-14 rounded-t-full rounded-b-lg relative">
                    <div className="bg-orange-400 w-6 h-6 rounded-full absolute -top-1 left-2"></div>
                  </div>
                  
                  <div className="bg-purple-600 w-10 h-14 rounded-t-full rounded-b-lg relative">
                    <div className="bg-cyan-300 w-6 h-6 rounded-full absolute -top-1 left-2"></div>
                  </div>
                  
                  <div className="bg-indigo-500 w-10 h-14 rounded-t-full rounded-b-lg relative">
                    <div className="bg-lime-300 w-6 h-6 rounded-full absolute -top-1 left-2"></div>
                  </div>
                </div>
              )}


              <div className="absolute bottom-0 left-0 right-0 bg-white/20 h-8"></div>
            </div>
          </div>
        </div>


        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600 leading-relaxed">
            {currentSlideData.description}
          </p>
        </div>


        <div className="flex justify-center mt-4 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-[#9A238B]  ' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoboticsCompetition;