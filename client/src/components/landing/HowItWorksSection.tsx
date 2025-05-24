interface Step {
  number: number;
  title: string;
  description: string;
}

export default function HowItWorksSection() {
  const steps: Step[] = [
    {
      number: 1,
      title: "Sign Up",
      description: "Create your account and tell us about your music preferences and goals."
    },
    {
      number: 2,
      title: "Discover & Connect",
      description: "Explore music, find artists you love, and connect with like-minded creators."
    },
    {
      number: 3,
      title: "Create & Share",
      description: "Use our tools to create music, collaborate with others, and share your work globally."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-light to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">How Musilina Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">From discovery to creation, we've simplified the musical journey to help you focus on what matters most - the music.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-1/2 left-1/3 right-1/3 h-0.5 bg-gradient-primary -z-10"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl mb-6">
                {step.number}
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-block px-8 py-3 rounded-full bg-gradient-primary text-white font-medium hover:shadow-lg transition-shadow duration-300"
          >
            Start Your Journey
          </a>
        </div>
      </div>
    </section>
  );
}
