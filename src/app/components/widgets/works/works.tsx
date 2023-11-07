import Image from "next/image";

export default function Works() {
  const Steps = [
    {
      Icon: "/catalog.png",
      Q: "Explore Our Catalog",
      A: "Use our intuitive search and user-friendly interface to find the perfect entertainment for your mood.",
    },
    {
      Icon: "/format.png",
      Q: "Select Your Format",
      A: "Choose to stream online or download for offline viewing – it's entirely up to you!",
    },
    {
      Icon: "/secure.png",
      Q: "Secure Payment",
      A: "Enjoy a seamless and secure checkout process for hassle-free access to premium content.",
    },
    {
      Icon: "/gratification.png",
      Q: "Instant Gratification",
      A: "Start watching your chosen entertainment right away, or save it for a rainy day.",
    },
  ];

  return (
    <div className="text-center py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {" "}
        {/* Added max-width and centered using mx-auto */}
        {Steps.map((step, index) => (
          <div
            className="max-w-xs p-4 mx-4 my-4 border border-gray-300 bg-white rounded-lg shadow-lg flex flex-col items-center"
            key={index}
          >
            <div className="mb-4">
              <Image
                width={64}
                height={64}
                src={step.Icon}
                alt={`Step ${index + 1}`}
              />
            </div>
            <div className="text-center">
              <h2 className="text-xl mb-2 text-black">{step.Q}</h2>
              <p className="text-gray-700">{step.A}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
