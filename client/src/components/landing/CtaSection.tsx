export default function CtaSection() {

  return (
    <section className="py-20 bg-gradient-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-6">Ready to Transform Your Music Experience?</h2>
          <p className="text-white/80 text-lg mb-8">Join thousands of musicians and music enthusiasts who have already discovered the future of music with Musilina.</p>
          
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 md:p-10 mb-8">
            <h3 className="font-poppins font-semibold text-2xl text-white mb-6">Start Learning Today</h3>
            <p className="text-white/80 text-lg mb-8">Experience music theory like never before with our interactive learning platform.</p>
            <div className="pt-2">
              <a 
                href="https://learn.musilinda.com" 
                className="inline-block px-8 py-4 bg-white text-primary font-medium text-lg rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                Learn
              </a>
            </div>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-white hover:text-white/80 transition-colors duration-200">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a href="#" className="text-white hover:text-white/80 transition-colors duration-200">
              <i className="fab fa-twitter text-2xl"></i>
            </a>
            <a href="#" className="text-white hover:text-white/80 transition-colors duration-200">
              <i className="fab fa-facebook text-2xl"></i>
            </a>
            <a href="#" className="text-white hover:text-white/80 transition-colors duration-200">
              <i className="fab fa-youtube text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
