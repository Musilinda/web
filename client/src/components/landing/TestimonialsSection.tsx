interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      name: "Sarah Johnson",
      role: "Singer-Songwriter",
      content: "Musilina has completely changed how I collaborate with other artists. The platform is intuitive and the community is incredibly supportive.",
      rating: 5
    },
    {
      name: "Marcus Williams",
      role: "Music Producer",
      content: "The analytics tools are game-changing. I can see exactly how my tracks are performing and make data-driven decisions about my music career.",
      rating: 4.5
    },
    {
      name: "Alex Chen",
      role: "Music Enthusiast",
      content: "As someone who loves discovering new music, Musilina's recommendation engine is unmatched. I'm constantly finding amazing artists I would have never discovered otherwise.",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} className="fas fa-star"></i>);
    }
    
    if (hasHalfStar) {
      stars.push(<i key="half" className="fas fa-star-half-alt"></i>);
    }
    
    return stars;
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">What Our Users Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Hear from musicians and listeners who have transformed their music experience with Musilina.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-light rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                <div>
                  <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{testimonial.content}</p>
              <div className="flex text-yellow-400">
                {renderStars(testimonial.rating)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
