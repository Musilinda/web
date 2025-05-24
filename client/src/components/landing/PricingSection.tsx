interface PricingPlan {
  name: string;
  price: string;
  period: string;
  features: {
    included: string[];
    excluded: string[];
  };
  ctaText: string;
  isPopular?: boolean;
  ctaStyle: "primary" | "outline";
}

export default function PricingSection() {
  const plans: PricingPlan[] = [
    {
      name: "Free",
      price: "$0",
      period: "Forever",
      features: {
        included: [
          "Basic discovery features",
          "Limited streaming quality",
          "Community access"
        ],
        excluded: [
          "No analytics",
          "Ad-supported"
        ]
      },
      ctaText: "Get Started",
      ctaStyle: "outline"
    },
    {
      name: "Premium",
      price: "$9.99",
      period: "per month",
      features: {
        included: [
          "Advanced discovery",
          "High-quality streaming",
          "Full community features",
          "Basic analytics",
          "Ad-free experience"
        ],
        excluded: []
      },
      ctaText: "Choose Premium",
      isPopular: true,
      ctaStyle: "primary"
    },
    {
      name: "Creator Pro",
      price: "$19.99",
      period: "per month",
      features: {
        included: [
          "All Premium features",
          "Studio-quality audio",
          "Advanced collaboration tools",
          "Comprehensive analytics",
          "Priority support"
        ],
        excluded: []
      },
      ctaText: "Choose Creator Pro",
      ctaStyle: "outline"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Choose the plan that works best for your musical journey, with no hidden fees or complicated tiers.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`
                bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 
                ${plan.isPopular ? 'border-2 border-primary transform scale-105 md:scale-110 z-10' : 'border border-gray-100'}
                relative
              `}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="font-poppins font-semibold text-xl mb-3">{plan.name}</h3>
                <div className="text-4xl font-bold mb-1">{plan.price}</div>
                <p className="text-gray-500">{plan.period}</p>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.included.map((feature, featureIndex) => (
                  <li key={`included-${featureIndex}`} className="flex items-center">
                    <i className="fas fa-check text-green-500 mr-2"></i>
                    <span>{feature}</span>
                  </li>
                ))}
                {plan.features.excluded.map((feature, featureIndex) => (
                  <li key={`excluded-${featureIndex}`} className="flex items-center text-gray-400">
                    <i className="fas fa-times text-red-400 mr-2"></i>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a 
                href="#contact" 
                className={`
                  block w-full py-3 rounded-full font-medium text-center
                  ${plan.ctaStyle === 'primary' 
                    ? 'bg-gradient-primary text-white hover:shadow-lg transition-shadow duration-300' 
                    : 'border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300'}
                `}
              >
                {plan.ctaText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
