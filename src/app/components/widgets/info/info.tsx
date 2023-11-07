import Image from "next/image";
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
      title: "Personalized Recommendations",
      description:
        "Get tailored suggestions based on your viewing history and preferences.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-5 ht bg-[url('/mountaineers.jpg')] h-screen rounded-[3rem] overflow-clip bg-cover bg-center">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8 place-content-center align-content-center h-full px-10">
        {whyUs.map((item, index) => (
          <div key={index} className="backdrop-blur bg-transparent p-20 rounded-lg shadow-lg border border-slate-700">
            <h3 className="text-xl font-semibold mb-4 ">
              {item.title}
            </h3>
            <p className="text-gray-500">{item.description}</p>
          </div>
        ))}
      </div>      
    </div>
  );
}


/* <div className="m-2">
        {whyUs.map((item, index) => (
          <div key={index} className=" p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 ">
              {item.title}
            </h3>
            <p className="text-gray-700">{item.description}</p>
          </div>
        ))}
      </div> */
