export default function Info() {
  const whyUs = [
    {
      title: "Vast Library",
      description:
        "Explore a vast collection of the latest blockbusters, timeless classics, and hidden gems across all genres.",
    },
    {
      title: "Instant Access",
      description:
        "Stream or download your chosen movies instantly, from the comfort of your own home.",
    },
    {
      title: "High Definition",
      description:
        "Immerse yourself in stunning HD quality for a cinematic viewing experience.",
    },
    {
      title: "Cross-Platform Compatibility",
      description:
        "Watch on any device - from your TV to your tablet or smartphone.",
    },
    {
      title: "Personalized Recommendations",
      description:
        "Get tailored suggestions based on your viewing history and preferences.",
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {whyUs.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-black">
              {item.title}
            </h3>
            <p className="text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
