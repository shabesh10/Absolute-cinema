import letterboxd from "../assets/letterboxd-rating.webp";
const Slide = ({ title, desc, imageUrl, url }) => (
  <div className="relative w-full h-full bg-gradient-to-r from-gray-700 via-gray-900 to-black border border-gray-600 overflow-hidden">
    <div 
      className="absolute inset-0 bg-cover bg-center grayscale opacity-20"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    
    {/* Content with proper padding to avoid icon overlap */}
    <div className="relative h-full flex flex-col justify-center px-12 py-6 sm:px-16 md:px-20 lg:px-24 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-white mb-3 sm:mb-4 md:mb-6 tracking-tight">
          {title}
        </h2>
        
        <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6 md:mb-8 font-light max-w-2xl mx-auto">
          {desc}
        </p>
        
        {url && (
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 border border-white text-white text-xs sm:text-sm md:text-base font-normal hover:bg-white hover:text-gray-900 transition-all duration-300 cursor-pointer"
          >
            Explore
          </a>
        )}
      </div>
    </div>
  </div>
);

export default Slide;