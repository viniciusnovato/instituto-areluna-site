import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section 
      className="h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center" 
      style={{
        backgroundImage: "url('https://res.cloudinary.com/dli5oe4qg/image/upload/v1753954598/instituto-areluna/97a1febf-3c27-4a63-a583-b2522013f3f4.jpg')"
      }}
    >
      <div 
        className="absolute inset-0" 
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
      ></div>
      
      <div 
        className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto" 
        style={{ color: '#FFFFFF' }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-vivant-skinny font-thin mb-6 leading-tight tracking-wider" style={{
        fontWeight: 200
      }}>
          Um espaço projetado para<br className="hidden sm:block" />
          <span className="sm:hidden"> </span>o seu bem-estar
        </h1>
        
        <p className="text-base sm:text-lg lg:text-xl mb-8 sm:mb-12 font-vivant opacity-90 max-w-2xl mx-auto">
          O principal destino para medicina dentária e estética avançada em Lisboa.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
          <Button variant="gold" size="lg" className="px-6 sm:px-8 py-3 sm:py-4 text-sm tracking-wider font-vivant-light min-h-[48px]">
            CONSULTA GRATUITA
          </Button>
          <Button variant="outline-gold" size="lg" className="px-6 sm:px-8 py-3 sm:py-4 text-sm tracking-wider font-vivant-light min-h-[48px]">
            ENCONTRE SEU PROCEDIMENTO
          </Button>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;