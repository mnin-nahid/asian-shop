const services = [
  {
    title: "Laptop Finder",
    description: "Find Your Laptop Easily",
    icon: "💻",
  },
  {
    title: "Raise a Complaint",
    description: "Share your experience",
    icon: "❗",
  },
  {
    title: "Home Service",
    description: "Get expert help.",
    icon: "🏠",
  },
  {
    title: "Servicing Center",
    description: "Repair Your Device",
    icon: "⚙️",
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {services.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 flex items-start gap-4 hover:shadow-lg transition"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-500 text-white text-xl">
              {item.icon}
            </div>

            <div>
              <h3 className="text-gray-900 font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
