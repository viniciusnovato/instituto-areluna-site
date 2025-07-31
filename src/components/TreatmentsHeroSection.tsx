import { Button } from "@/components/ui/button";

const TreatmentsHeroSection = () => {
  return (
    <section 
      className="h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center relative" 
      style={{
        backgroundImage: "url('https://res.cloudinary.com/dli5oe4qg/image/upload/v1753954598/instituto-areluna/97a1febf-3c27-4a63-a583-b2522013f3f4.jpg')"
      }}
    >
      <div 
        className="absolute inset-0" 
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      ></div>

      {/* Background decorativo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-gradient-to-br from-[hsl(var(--gold-leaf))]/20 to-amber-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-br from-amber-400/15 to-[hsl(var(--gold-leaf))]/10 rounded-full blur-2xl"></div>
      </div>
      
      <div 
        className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto" 
        style={{ color: '#FFFFFF' }}
      >
        {/* Badge superior */}
        <div className="inline-flex items-center bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm rounded-full px-4 xs:px-6 py-2 xs:py-3 border border-[hsl(var(--gold-leaf))]/30 shadow-lg mb-6 xs:mb-8">
          <div className="w-2 h-2 bg-[hsl(var(--gold-leaf))] rounded-full mr-3"></div>
          <span className="text-[hsl(var(--gold-leaf))] font-vivant text-xs xs:text-sm font-medium tracking-wide">
            TRATAMENTOS AVANÇADOS
          </span>
        </div>

        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-vivant-skinny font-thin mb-6 xs:mb-8 leading-tight tracking-wider" style={{
        fontWeight: 200
      }}>
          Transformamos Sorrisos,<br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          <span className="text-[hsl(var(--gold-leaf))] drop-shadow-lg">
            Mudamos Vidas
          </span>
        </h1>
        
        <p className="text-base xs:text-lg sm:text-xl lg:text-2xl mb-8 xs:mb-10 sm:mb-12 font-vivant opacity-90 max-w-3xl mx-auto leading-relaxed">
          Descubra nossa gama completa de tratamentos odontológicos com tecnologia de ponta, 
          sempre priorizando seu conforto e os melhores resultados.
        </p>
        
        <div className="flex flex-col xs:flex-row gap-4 xs:gap-6 justify-center mb-8 xs:mb-12">
          <Button variant="gold" size="lg" className="px-6 xs:px-8 py-3 xs:py-4 text-sm xs:text-base tracking-wider font-vivant-light min-h-[48px]">
            CONSULTA GRATUITA
          </Button>
          <Button variant="outline-gold" size="lg" className="px-6 xs:px-8 py-3 xs:py-4 text-sm xs:text-base tracking-wider font-vivant-light min-h-[48px]">
            VER TODOS OS TRATAMENTOS
          </Button>
        </div>

        {/* Estatísticas rápidas */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 gap-3 xs:gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
          {[
            { number: "25+", label: "Anos de Experiência" },
            { number: "15K+", label: "Sorrisos Transformados" },
            { number: "95%", label: "Satisfação dos Pacientes" },
            { number: "20+", label: "Tratamentos Disponíveis" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm rounded-lg xs:rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center"
            >
              <div className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-vivant font-bold text-[hsl(var(--gold-leaf))] mb-2">
                {stat.number}
              </div>
              <div className="text-xs xs:text-sm sm:text-base font-vivant-light opacity-90 leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentsHeroSection;