
const categories = [
  { name: "Desktop", icon: "🖥️" },
  { name: "Laptop", icon: "💻" },
  { name: "Component", icon: "🧩" },
  { name: "Power", icon: "⚡" },
  { name: "Phone", icon: "📱" },
  { name: "Tablet", icon: "📲" },
  { name: "Camera", icon: "📷" },
  { name: "Security", icon: "🔒" },
  { name: "Accessories", icon: "⚙️" },
  { name: "Gadget", icon: "📡" },
  { name: "Gaming", icon: "🎮" },
  { name: "TV", icon: "📺" },
];

export default function SpecialCategories() {
  return (
    <section className="w-full py-8">
      <div className="mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Special Categories</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {categories.map((item, index) => (
            <div
              key={index}
              className="bg-gray-200 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:bg-white hover:shadow-md transition cursor-pointer"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <p className="text-gray-900 text-sm font-medium tracking-wide">
                {item.name.toUpperCase()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
