export default function HeroSection() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0 pr-0 md:pr-8">
            <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              Transform Your <span className="text-gradient">Music Experience</span> with Musilina
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Discover, create, and share music like never before. Musilina brings together artists and listeners in a unique musical ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="px-8 py-3 rounded-full bg-gradient-primary text-white font-medium text-center hover:shadow-lg transition-shadow duration-300"
              >
                Get Early Access
              </a>
              <a 
                href="#how-it-works" 
                className="px-8 py-3 rounded-full border-2 border-primary text-primary font-medium text-center hover:bg-primary hover:text-white transition-colors duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <img 
              src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800" 
              alt="Musilina App Interface" 
              className="rounded-3xl shadow-2xl w-full h-auto z-10 relative" 
            />
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
