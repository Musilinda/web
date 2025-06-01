export default function Footer() {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <a href="#" className="font-poppins font-bold text-2xl text-gradient inline-block mb-4">Musilina</a>
            <p className="text-gray-400 mb-4">Transforming the way the world experiences music.</p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors duration-200">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors duration-200">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors duration-200">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" aria-label="YouTube" className="text-gray-400 hover:text-white transition-colors duration-200">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Press</a></li>
              <li><a href="/blog" className="text-gray-400 hover:text-white transition-colors duration-200">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="https://learn.musilinda.com" className="text-gray-400 hover:text-white transition-colors duration-200">Learn</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Community</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Tutorials</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Copyright</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Musilina. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
