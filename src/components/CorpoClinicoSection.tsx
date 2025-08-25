import { useState, useCallback } from "react";
import useEmblaCarousel from 'embla-carousel-react';

const CorpoClinicoSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 }
    }
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const doctors = [
    {
      name: "Dra. Carla Salvi",
      crm: "CRM (a definir)",
      specialty: "Dentista",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop&crop=face"
    },
    {
      name: "Dra. Aline Marodim", 
      crm: "CRM 00000",
      specialty: "Dentista",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=500&fit=crop&crop=face"
    },
    {
      name: "Dr. Leonardo Saraiva",
      crm: "CRM 00000", 
      specialty: "Dentista",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop&crop=face"
    },
    {
      name: "Dra. Arethuza Luna",
      crm: "CRM 00000",
      specialty: "Dentista",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=500&fit=crop&crop=face"
    },
    {
      name: "Dra. Patricia Tatsch",
      crm: "CRM 00000",
      specialty: "Dentista",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop&crop=face"
    },
    {
      name: "Dra. Ana Vitória",
      crm: "CRM 00000",
      specialty: "Dentista",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=500&fit=crop&crop=face"
    },
    {
      name: "Dra. Daiane",
      crm: "CRM 00000",
      specialty: "Dentista",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=500&fit=crop&crop=face"
    },
    {
      name: "Dra. Sara Ribeiro",
      crm: "CRM 0000",
      specialty: "Dentista",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header da seção */}
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-vivant text-jet dark:text-white mb-6">
            Corpo Clínico
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold to-amber-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-jet/70 dark:text-gray-300 max-w-2xl mx-auto font-vivant-light">
            Nossa equipa de médicos especialistas está comprometida em oferecer o melhor cuidado com excelência e dedicação no padrão IAL
          </p>
        </div>
        
        {/* Carrossel Container */}
        <div className="relative px-16 pb-8">
          {/* Botões de Navegação */}
          <button
            className="absolute -left-6 top-1/2 -translate-y-1/2 z-20 bg-[hsl(var(--gold-leaf))] dark:bg-gray-900 hover:bg-amber-500 dark:hover:bg-gray-800 shadow-xl hover:shadow-2xl rounded-full p-4 transition-all duration-300 hover:scale-110 border-2 border-white dark:border-gray-600"
            onClick={scrollPrev}
          >
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>
          
          <button
            className="absolute -right-6 top-1/2 -translate-y-1/2 z-20 bg-[hsl(var(--gold-leaf))] dark:bg-gray-900 hover:bg-amber-500 dark:hover:bg-gray-800 shadow-xl hover:shadow-2xl rounded-full p-4 transition-all duration-300 hover:scale-110 border-2 border-white dark:border-gray-600"
            onClick={scrollNext}
          >
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
            </svg>
          </button>

          {/* Carrossel */}
          <div className="embla overflow-hidden pb-4" ref={emblaRef}>
            <div className="embla__container flex">
                             {doctors.map((doctor, index) => (
                 <div key={index} className="embla__slide flex-none w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-3">
                   <div 
                     className={`group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-3 h-full flex flex-col ${
                       hoveredCard === index ? 'scale-105' : ''
                     }`}
                     onMouseEnter={() => setHoveredCard(index)}
                     onMouseLeave={() => setHoveredCard(null)}
                   >
                     {/* Container da imagem */}
                     <div className="relative overflow-hidden flex-shrink-0">
                       <img
                         src={doctor.image} 
                         alt={doctor.name}
                         className="w-full h-80 object-cover transition-all duration-700 group-hover:scale-110"
                       />
                       {/* Overlay gradiente */}
                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                       
                       {/* Badge de especialidade */}
                       <div className="absolute top-4 left-4 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg">
                         <span className="text-xs font-medium text-jet dark:text-white">{doctor.specialty}</span>
                       </div>
                     </div>

                     {/* Informações do médico */}
                     <div className="p-6 flex-grow flex flex-col justify-between">
                       <div>
                         <h3 className="font-vivant text-jet dark:text-white text-xl mb-2 group-hover:text-[hsl(var(--gold-leaf))] dark:group-hover:text-[hsl(var(--gold-leaf))] transition-colors duration-300">
                           {doctor.name}
                         </h3>
                         <p className="text-jet/60 dark:text-gray-400 text-sm font-vivant-light mb-4">
                           {doctor.crm}
                         </p>
                       </div>
                       
                       <div>
                         {/* Linha decorativa */}
                         <div className="w-12 h-0.5 bg-gradient-to-r from-[hsl(var(--gold-leaf))] to-transparent mb-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                         
                         {/* Especialidade detalhada */}
                         <div className="flex flex-col space-y-1">
                           <span className="text-sm text-jet/70 dark:text-gray-400">Especialista em</span>
                           <span className="text-sm font-medium text-[hsl(var(--gold-leaf))]">{doctor.specialty}</span>
                         </div>
                       </div>
                     </div>

                     {/* Efeito de borda animada */}
                     <div className="absolute inset-0 border-2 border-transparent group-hover:border-[hsl(var(--gold-leaf))]/30 rounded-2xl transition-all duration-300"></div>
                   </div>
                 </div>
               ))}
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default CorpoClinicoSection;