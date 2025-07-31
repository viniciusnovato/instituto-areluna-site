import { useState } from "react";

const TreatmentsSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const treatments = [
    {
      title: "Dentes Fixos em 1 Dia",
      description: "Transformação completa do seu sorriso em apenas uma sessão",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=300&fit=crop&crop=center",
      highlight: true
    },
    {
      title: "Implantes Dentários",
      description: "Solução definitiva para substituição de dentes perdidos",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop&crop=center",
      highlight: false
    },
    {
      title: "Alinhadores Invisíveis", 
      description: "Correção ortodôntica discreta e confortável",
      image: "https://images.unsplash.com/photo-1598300042247-d088f8c3a9ba?w=400&h=300&fit=crop&crop=center",
      highlight: false
    },
    {
      title: "Facetas Dentárias",
      description: "Transformação estética para um sorriso perfeito",
      image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&h=300&fit=crop&crop=center",
      highlight: true
    },
    {
      title: "Coroas Cerâmicas",
      description: "Restaurações de alta qualidade e durabilidade",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&h=300&fit=crop&crop=center",
      highlight: false
    },
    {
      title: "Branqueamento Dentário",
      description: "Dentes mais brancos e brilhantes naturalmente",
      image: "https://images.unsplash.com/photo-1606811955618-b2f7f6e28e50?w=400&h=300&fit=crop&crop=center",
      highlight: false
    },
    {
      title: "Aparelho Dentário",
      description: "Ortodontia tradicional com resultados excepcionais",
      image: "https://images.unsplash.com/photo-1599474924187-334a4ae5bd3c?w=400&h=300&fit=crop&crop=center",
      highlight: false
    },
    {
      title: "Dentisteria",
      description: "Restaurações estéticas e funcionais personalizadas",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center",
      highlight: false
    },
    {
      title: "Endodontia",
      description: "Tratamentos de canal com técnicas avançadas",
      image: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=400&h=300&fit=crop&crop=center",
      highlight: false
    },
    {
      title: "Periodontologia",
      description: "Cuidados especializados para gengivas saudáveis",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=300&fit=crop&crop=center",
      highlight: false
    },
    {
      title: "Higiene Oral",
      description: "Limpezas profissionais para manter sua saúde bucal",
      image: "https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=400&h=300&fit=crop&crop=center",
      highlight: false
    },
    {
      title: "Harmonização Facial",
      description: "Tratamentos estéticos faciais para realçar sua beleza natural",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center",
      highlight: true
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-gray-50/30 to-white dark:bg-gray-100 relative overflow-hidden">
      {/* Background text sutil */}
      <div className="absolute top-32 left-1/2 transform -translate-x-1/2 pointer-events-none overflow-hidden">
        <span className="text-[18rem] font-vivant text-[hsl(var(--gold-leaf))]/5 select-none whitespace-nowrap">
          Tratamentos
        </span>
      </div>
      
      {/* Elementos decorativos flutuantes premium */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-gradient-to-br from-[hsl(var(--gold-leaf))]/8 to-amber-400/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-32 left-20 w-32 h-32 bg-gradient-to-br from-amber-400/8 to-[hsl(var(--gold-leaf))]/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[hsl(var(--gold-leaf))]/3 to-transparent rounded-full blur-3xl"></div>
      
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--gold-leaf)) 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header da seção */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-vivant text-jet dark:text-gray-800 mb-6">
            Tratamentos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[hsl(var(--gold-leaf))] to-amber-400 mx-auto mb-6 sm:mb-8 rounded-full"></div>
          <div className="max-w-3xl mx-auto px-4">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-vivant text-[hsl(var(--gold-leaf))] mb-4 sm:mb-6">
              O Poder de um Sorriso
            </h3>
            <p className="text-base sm:text-lg text-jet/70 dark:text-gray-700 font-vivant-light leading-relaxed">
              Oferecemos uma gama completa de tratamentos odontológicos com as mais avançadas técnicas e tecnologias, 
              sempre priorizando seu conforto e os melhores resultados estéticos e funcionais.
            </p>
          </div>
        </div>

        {/* Grid de tratamentos */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {treatments.map((treatment, index) => (
            <div
              key={index}
              className={`group relative bg-white/70 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl transition-all duration-700 overflow-hidden transform hover:-translate-y-6 border border-[hsl(var(--gold-leaf))]/10 dark:border-[hsl(var(--gold-leaf))]/30 hover:border-[hsl(var(--gold-leaf))]/20 dark:hover:border-[hsl(var(--gold-leaf))]/50 ${
                treatment.highlight ? 'ring-1 ring-[hsl(var(--gold-leaf))]/30 dark:ring-[hsl(var(--gold-leaf))]/50 bg-gradient-to-br from-white/80 to-[hsl(var(--gold-leaf))]/5 dark:from-gray-800/95 dark:to-[hsl(var(--gold-leaf))]/10' : ''
              } ${hoveredCard === index ? 'scale-[1.02]' : ''} before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-white/20 before:via-transparent before:to-[hsl(var(--gold-leaf))]/10 dark:before:from-gray-700/30 dark:before:to-[hsl(var(--gold-leaf))]/20 before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-500`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent transform rotate-12"></div>
              
              {/* Badge de destaque premium */}
              {treatment.highlight && (
                <div className="absolute top-4 right-4 z-20">
                  <div className="relative bg-gradient-to-br from-[hsl(var(--gold-leaf))] via-amber-400 to-yellow-500 text-white px-4 py-2 rounded-2xl">
                    <span className="text-xs font-semibold tracking-wide">PREMIUM</span>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                  </div>
                </div>
              )}

              {/* Imagem do tratamento com overlay premium */}
              <div className="relative overflow-hidden h-56 rounded-t-3xl">
                <img 
                  src={treatment.image} 
                  alt={treatment.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                
                {/* Borda dourada sutil na imagem */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[hsl(var(--gold-leaf))]/30 transition-all duration-500 rounded-t-3xl"></div>
                
                {/* Elemento decorativo flutuante */}
                <div className="absolute top-4 left-4 w-3 h-3 bg-[hsl(var(--gold-leaf))] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0"></div>
              </div>

              {/* Container do conteúdo premium */}
              <div className="relative p-8 z-10">
                {/* Ornamento decorativo */}
                <div className="absolute -top-3 left-8 w-12 h-0.5 bg-gradient-to-r from-[hsl(var(--gold-leaf))] to-amber-400 rounded-full"></div>
                
                {/* Título premium */}
                <h4 className="font-vivant text-jet dark:text-white text-xl lg:text-2xl mb-4 group-hover:text-[hsl(var(--gold-leaf))] transition-all duration-500 transform group-hover:translate-x-1">
                  {treatment.title}
                </h4>

                {/* Descrição refinada */}
                <p className="text-jet/75 dark:text-gray-300 font-vivant-light text-sm lg:text-base leading-relaxed mb-6 group-hover:text-jet/90 dark:group-hover:text-gray-100 transition-colors duration-300">
                  {treatment.description}
                </p>

                {/* Linha decorativa animada */}
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[hsl(var(--gold-leaf))]/20 to-amber-400/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 group-hover:translate-x-0">
                    <div className="w-2 h-2 bg-[hsl(var(--gold-leaf))] rounded-full"></div>
                  </div>
                  <div className="flex-1 h-px bg-gradient-to-r from-[hsl(var(--gold-leaf))]/40 via-[hsl(var(--gold-leaf))]/20 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                </div>
              </div>

              {/* Borda dourada animada */}
              <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-[hsl(var(--gold-leaf))]/20 transition-all duration-500"></div>

              {/* Glow effect premium */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-[hsl(var(--gold-leaf))]/5 via-transparent to-amber-400/5"></div>
              
              {/* Shadow interno premium removido */}
            </div>
          ))}
        </div>

        {/* Call to Action Premium */}
        <div className="text-center mt-16">
          <div className="relative bg-gradient-to-br from-[hsl(var(--gold-leaf))] via-amber-400 to-yellow-500 rounded-3xl px-10 py-16 shadow-[0_25px_80px_rgba(0,0,0,0.15)] overflow-hidden">
            {/* Elementos decorativos de fundo */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/15 rounded-full blur-2xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
            
            {/* Overlay de glassmorphism */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10 backdrop-blur-sm"></div>
            
            {/* Conteúdo */}
            <div className="relative z-10">
              {/* Ornamento superior */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-px bg-white/40 rounded-full"></div>
                <div className="w-3 h-3 bg-white/60 rounded-full mx-4 -mt-1.5"></div>
                <div className="w-16 h-px bg-white/40 rounded-full"></div>
              </div>
              
              <h3 className="text-4xl md:text-5xl font-vivant text-white mb-8 drop-shadow-lg">
                Transforme o Seu Sorriso
              </h3>
              <p className="text-white/95 font-vivant-light text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
                Agende uma consulta e descubra como podemos criar o sorriso dos seus sonhos com nossos tratamentos personalizados e tecnologia de vanguarda.
              </p>
              
              {/* Botão premium */}
              <div className="relative inline-block group">
                <div className="absolute inset-0 bg-white rounded-full blur-md opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
                <button className="relative bg-white/95 backdrop-blur-sm text-[hsl(var(--gold-leaf))] font-vivant font-semibold px-10 py-5 rounded-full hover:bg-white transition-all duration-500 hover:scale-105 shadow-2xl hover:shadow-3xl border border-white/20 group-hover:border-white/40">
                  <span className="relative z-10">Agendar Consulta Exclusiva</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </button>
              </div>
              
              {/* Indicador de qualidade */}
              <div className="mt-8 flex justify-center items-center space-x-2 text-white/80 text-sm font-vivant-light">
                <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                <span>Atendimento Premium</span>
                <div className="w-1 h-1 bg-white/40 rounded-full"></div>
                <span>Tecnologia Avançada</span>
                <div className="w-1 h-1 bg-white/40 rounded-full"></div>
                <span>Resultados Garantidos</span>
                <div className="w-2 h-2 bg-white/60 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;