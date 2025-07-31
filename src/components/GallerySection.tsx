import { useState } from "react";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: "https://res.cloudinary.com/dli5oe4qg/image/upload/v1753954545/instituto-areluna/09f1a788-70d0-446f-ac4f-bb7363782ca3.jpg",
      alt: "Consultório dentário moderno"
    },
    {
      src: "https://res.cloudinary.com/dli5oe4qg/image/upload/v1753954595/instituto-areluna/94618d34-22c1-4785-8b5d-3d354d56725a.jpg",
      alt: "Paciente satisfeita com o tratamento"
    },
    {
      src: "https://res.cloudinary.com/dli5oe4qg/image/upload/v1753954602/instituto-areluna/d3295394-b0f6-4323-b48a-4133bf289e55.jpg",
      alt: "Monitor com radiografia dentária"
    },
    {
      src: "https://res.cloudinary.com/dli5oe4qg/image/upload/v1753954609/instituto-areluna/d84bc5ca-828d-4362-9806-cfa7f17440d9.jpg",
      alt: "Poltrona de tratamento com equipamentos"
    },
    {
      src: "https://res.cloudinary.com/dli5oe4qg/image/upload/v1753954576/instituto-areluna/3e28d6f7-ea96-457f-bc43-c61ccb293b40.jpg",
      alt: "Recepção da clínica Areluna"
    },
    {
      src: "https://res.cloudinary.com/dli5oe4qg/image/upload/v1753954540/instituto-areluna/013b294f-3f9e-43d8-8b5c-9061b9a727eb.jpg",
      alt: "Sala de espera moderna com sofás"
    },
    {
      src: "https://res.cloudinary.com/dli5oe4qg/image/upload/v1753954570/instituto-areluna/340df14c-68d2-4302-a93b-3a87733a4856.jpg",
      alt: "Prótese dentária demonstrativa"
    },
    {
      src: "https://res.cloudinary.com/dli5oe4qg/image/upload/v1753954581/instituto-areluna/4acf5591-00eb-4437-b7a8-dd389e596d7d.jpg",
      alt: "Equipamento de iluminação dentária"
    }
  ];

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-16 sm:py-20 bg-white dark:bg-gradient-to-br dark:from-gray-900/10 dark:to-transparent">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-vivant text-jet dark:text-gray-800 mb-4">
            Clínica
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-700 font-medium tracking-wide max-w-2xl mx-auto px-4">
            Conheça nossos espaços modernos e equipamentos de última geração
          </p>
        </div>
        
        {/* Grid uniforme com quadrados perfeitos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="aspect-square group relative overflow-hidden rounded-lg bg-gray-100 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img 
                className="w-full h-full object-cover cursor-pointer transition-all duration-300 group-hover:scale-110" 
                src={image.src} 
                alt={image.alt}
                onClick={() => openModal(image.src)}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white bg-opacity-90 rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                  <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal para visualizar imagem em tela cheia */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 animate-fade-in p-4"
            onClick={closeModal}
          >
            <div className="relative max-w-7xl max-h-full">
              <img 
                src={selectedImage} 
                alt="Imagem da clínica em tela cheia" 
                className="max-w-full max-h-full object-contain rounded-lg animate-scale-in shadow-2xl"
              />
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  closeModal();
                }}
                className="absolute -top-4 -right-4 text-white text-3xl bg-black bg-opacity-70 rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-90 transition-all duration-300 hover:scale-110 shadow-lg"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;