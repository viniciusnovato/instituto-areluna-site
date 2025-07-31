import { useState } from 'react';
const caso2 = "https://res.cloudinary.com/dli5oe4qg/image/upload/v1753954147/instituto-areluna/caso-2.jpg";

const TrasplanteCapilarSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-24 bg-gradient-to-br from-gray-100/40 via-gray-50/60 to-gray-100/40 dark:from-black dark:via-gray-900/60 dark:to-black relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--gold-leaf)) 1px, transparent 0)', 
        backgroundSize: '50px 50px'
      }}></div>
      
      {/* Elementos decorativos flutuantes */}
      <div className="absolute top-20 right-16 w-40 h-40 bg-gradient-to-br from-[hsl(var(--gold-leaf))]/15 to-amber-400/8 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-16 w-32 h-32 bg-gradient-to-br from-amber-400/12 to-[hsl(var(--gold-leaf))]/8 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[hsl(var(--gold-leaf))]/8 rounded-full blur-xl"></div>

      {/* Background text sutil */}
      <div className="absolute top-40 left-1/2 transform -translate-x-1/2 pointer-events-none overflow-hidden">
        <span className="text-[16rem] font-vivant text-[hsl(var(--gold-leaf))]/5 select-none whitespace-nowrap">
          FUE
        </span>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Conteúdo */}
          <div className="order-2 lg:order-1 space-y-6 sm:space-y-8">
            {/* Badge superior */}
            <div className="inline-flex items-center bg-white/70 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-6 py-3 border border-[hsl(var(--gold-leaf))]/25 dark:border-[hsl(var(--gold-leaf))]/40 shadow-lg">
              <div className="w-2 h-2 bg-[hsl(var(--gold-leaf))] rounded-full mr-3"></div>
              <span className="text-[hsl(var(--gold-leaf))] font-vivant text-sm font-medium tracking-wide">
                Técnica FUE Premium
              </span>
            </div>

            {/* Título principal */}
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-vivant text-jet dark:text-gray-200 leading-tight">
                Transplante
                <span className="block text-[hsl(var(--gold-leaf))] drop-shadow-sm">
                  Capilar FUE
                </span>
              </h2>
              
              {/* Linha decorativa */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-px bg-gradient-to-r from-[hsl(var(--gold-leaf))] to-amber-400 rounded-full"></div>
                <div className="w-3 h-3 bg-[hsl(var(--gold-leaf))]/20 rounded-full border-2 border-[hsl(var(--gold-leaf))]/40"></div>
                <div className="w-32 h-px bg-gradient-to-r from-amber-400 to-[hsl(var(--gold-leaf))] rounded-full"></div>
              </div>
            </div>

            {/* Pergunta principal */}
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-[hsl(var(--gold-leaf))]/15">
              <p className="text-xl md:text-2xl font-vivant text-black dark:text-white leading-relaxed">
                Sofre de
                <span className="text-[hsl(var(--gold-leaf))] font-medium"> calvície ou perda capilar</span> e procura uma solução definitiva?
              </p>
            </div>

            {/* Descrição do programa */}
            <div className="space-y-6">
              <p className="text-lg text-jet/80 dark:text-gray-300 font-vivant-light leading-relaxed">
                A <strong className="text-[hsl(var(--gold-leaf))]">Clínica Areluna</strong> oferece transplante capilar com a técnica 
                <span className="text-[hsl(var(--gold-leaf))] font-medium"> FUE (Follicular Unit Extraction)</span>, 
                a mais avançada e menos invasiva do mercado.
              </p>

              {/* Call to action text */}
              <div className="flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-b from-[hsl(var(--gold-leaf))] to-amber-400 rounded-full"></div>
                <p className="text-xl font-vivant text-[hsl(var(--gold-leaf))] italic">
                  Resultados naturais e duradouros garantidos.
                </p>
              </div>
            </div>

            {/* Benefícios premium */}
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: "FUE", desc: "Técnica menos invasiva" },
                { title: "Natural", desc: "Resultados imperceptíveis" },
                { title: "Duradouro", desc: "Resultado para toda a vida" },
                { title: "25 Anos", desc: "Experiência comprovada" }
              ].map((benefit, index) => (
                <div key={index} className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-4 border border-[hsl(var(--gold-leaf))]/15 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-[hsl(var(--gold-leaf))] to-amber-400 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-vivant text-[hsl(var(--gold-leaf))] font-medium">{benefit.title}</h4>
                      <p className="text-xs text-jet/70 dark:text-gray-400 font-vivant-light">{benefit.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Botão premium */}
            <div className="pt-4">
              <div 
                className="relative inline-block group cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Botão principal */}
                <button className="relative bg-gradient-to-r from-[hsl(var(--gold-leaf))] to-amber-400 text-white font-vivant font-semibold px-10 py-5 rounded-2xl transition-all duration-500 group-hover:scale-105 border border-white/20">
                  <span className="relative z-10">AGENDAR CONSULTA GRATUITA</span>
                  
                  {/* Shimmer effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-2xl transition-transform duration-1000 ${
                    isHovered ? 'translate-x-full' : '-translate-x-full'
                  }`}></div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </div>

          {/* Espaço para imagem */}
          <div className="order-1 lg:order-2">
            <div className="relative bg-gradient-to-br from-white/80 via-white/60 to-white/80 rounded-3xl p-8 backdrop-blur-sm border border-[hsl(var(--gold-leaf))]/20 shadow-2xl">
              {/* Imagem do Caso 2 */}
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img 
                  src={caso2} 
                  alt="Caso 2 - Densidade na região superior - Transplante Capilar FUE"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              
              {/* Elementos decorativos do card */}
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-[hsl(var(--gold-leaf))] rounded-full opacity-80"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-amber-400 rounded-full opacity-60"></div>
              
              {/* Badge no card */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                <span className="text-[hsl(var(--gold-leaf))] font-vivant text-xs font-medium">CASO REAL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrasplanteCapilarSection;