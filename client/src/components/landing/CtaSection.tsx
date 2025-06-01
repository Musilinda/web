import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export default function CtaSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    interest: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.interest) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Send data to server
      await apiRequest("POST", "/api/waitlist", formData);
      
      toast({
        title: "Thank you for your interest!",
        description: "We'll be in touch soon.",
      });
      
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        interest: ""
      });
    } catch (error) {
      toast({
        title: "Submission failed",
        description: "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-6">Ready to Transform Your Music Experience?</h2>
          <p className="text-white/80 text-lg mb-8">Join thousands of musicians and music enthusiasts who have already discovered the future of music with Musilina.</p>
          
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 md:p-10 mb-8">
            <h3 className="font-poppins font-semibold text-2xl text-white mb-6">Get Early Access</h3>
            <form id="contact" className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-white mb-2">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white" 
                    placeholder="Your first name" 
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-white mb-2">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white" 
                    placeholder="Your last name" 
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-white mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white" 
                  placeholder="your@email.com" 
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="interest" className="block text-white mb-2">I'm interested in...</label>
                <select 
                  id="interest" 
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white" 
                  required
                  value={formData.interest}
                  onChange={handleChange}
                >
                  <option value="" disabled className="text-gray-800">Select your interest</option>
                  <option value="creating" className="text-gray-800">Creating music</option>
                  <option value="discovering" className="text-gray-800">Discovering new music</option>
                  <option value="collaborating" className="text-gray-800">Collaborating with artists</option>
                  <option value="other" className="text-gray-800">Other</option>
                </select>
              </div>
              <div className="pt-2">
                <a 
                  href="https://learn.musilinda.com" 
                  className="inline-block w-full px-6 py-3 bg-white text-primary font-medium rounded-lg hover:shadow-lg transition-shadow duration-300 text-center"
                >
                  Learn
                </a>
              </div>
              <p className="text-white/60 text-sm text-center">By signing up, you agree to our Terms and Privacy Policy.</p>
            </form>
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
