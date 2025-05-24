interface Feature {
  icon: string;
  iconClass: string;
  bgClass: string;
  title: string;
  description: string;
}

export default function FeaturesSection() {
  const features: Feature[] = [
    {
      icon: "fa-music",
      iconClass: "text-primary",
      bgClass: "bg-primary/10",
      title: "Smart Playlists",
      description: "AI-powered playlists that learn your preferences and create the perfect soundtrack for any moment."
    },
    {
      icon: "fa-users",
      iconClass: "text-secondary",
      bgClass: "bg-secondary/10",
      title: "Artist Collaboration",
      description: "Connect with other musicians and create together, no matter where you are in the world."
    },
    {
      icon: "fa-chart-line",
      iconClass: "text-accent",
      bgClass: "bg-accent/10",
      title: "Performance Analytics",
      description: "Get detailed insights into how your music is performing and who your audience is."
    },
    {
      icon: "fa-headphones",
      iconClass: "text-primary",
      bgClass: "bg-primary/10",
      title: "Immersive Audio",
      description: "Experience music in stunning high-definition audio with spatial sound technology."
    },
    {
      icon: "fa-cloud-upload-alt",
      iconClass: "text-secondary",
      bgClass: "bg-secondary/10",
      title: "Seamless Sharing",
      description: "Share your creations instantly across all major platforms with just one click."
    },
    {
      icon: "fa-globe",
      iconClass: "text-accent",
      bgClass: "bg-accent/10",
      title: "Global Community",
      description: "Join a worldwide community of music enthusiasts who share your passion."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">Powerful Features for Music Lovers</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Discover how Musilina is revolutionizing the way we experience music with innovative features designed for both creators and listeners.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className={`w-14 h-14 ${feature.bgClass} rounded-xl flex items-center justify-center mb-6`}>
                <i className={`fas ${feature.icon} ${feature.iconClass} text-xl`}></i>
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
