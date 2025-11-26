import { useState, useEffect } from 'react'; 
import { ChevronLeft, ChevronRight } from 'lucide-react';
import capmrobotica from '/camprobotica.webp'; 
import inovtec from '/inovtec.webp'; 
import networnking from '/networnking.jpg'; 

const RoboticsCompetition = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
  
    const slides = [
      {
        title: "COMPETIÇÃO DE ROBÓTICA!",
        subtitle: "Junte-se à 1ª competição de robótica do CEUB",
        image: capmrobotica, 
        description: "Uma oportunidade única para estudantes demonstrarem suas habilidades em programação e engenharia robótica."
      },
      {
        title: "INOVAÇÃO E TECNOLOGIA",
        subtitle: "Explore o futuro da automação",
        image: inovtec, 
        description: "Participe de workshops e demonstrações com as mais recentes tecnologias em robótica e IA."
      },
      {
        title: "NETWORKING E APRENDIZADO",
        subtitle: "Conecte-se com outros entusiastas",
        image: networnking, 
        description: "Conheca outros estudantes e profissionais apaixonados por robótica e tecnologia."
      }
    ];
  
    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    };
  
    const prevSlide = () => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const slideInterval = setInterval(() => {
            nextSlide();
        }, 5000); 

        return () => {
            clearInterval(slideInterval);
        };
    }, [currentSlide]); 

    const currentSlideData = slides[currentSlide];

  return (
    <div className="w-full md:w-[70%] mx-auto bg-white rounded-2xl border-2 border-gray-300 overflow-hidden shadow-lg md:flex-grow flex flex-col">
      <div className="bg-white text-center pt-6 pb-2">
        <h1 className="text-2xl font-bold text-gray-800 tracking-wider">
          NOTÍCIAS
        </h1>
      </div>

      <div className="px-6 pb-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="text-center mb-4 h-[4rem] overflow-hidden">
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              {currentSlideData.title}
            </h2>
            <p className="text-sm text-gray-700 font-medium">
              {currentSlideData.subtitle}
            </p>
          </div>


          <div className="relative">

            <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#9A238B] hover:scale-102 active:scale-98 text-white rounded-full p-2 shadow-lg">
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#9A238B] hover:scale-102 active:scale-98 text-white rounded-full p-2 shadow-lg">
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="mx-12 rounded-lg overflow-hidden shadow-md">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 h-48 flex items-center justify-center relative">

                <img 
                  src={currentSlideData.image} 
                  alt={currentSlideData.title}
                  className="w-full h-full object-cover" 
                />

                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-600/20"></div>

                <div className="absolute bottom-0 left-0 right-0 bg-white/20 h-8"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 text-center h-[5rem] overflow-hidden">
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