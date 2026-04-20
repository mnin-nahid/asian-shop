import { MapPin, Search } from "lucide-react";

export default function StoreBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-cyan-500 to-blue-900 rounded-xl px-6 py-6 flex flex-col md:flex-row items-center justify-between">
      {/* Left Content */}
      <div className="flex items-start gap-4 text-white">
        <div className="bg-white/20 p-3 rounded-full">
          <MapPin size={24} />
        </div>

        <div>
          <h2 className="text-2xl font-semibold">20+ Physical Stores</h2>
          <p className="text-sm opacity-90">
            Visit Our Store & Get Your Desired IT Product!
          </p>
        </div>
      </div>

      {/* Right Button */}
      <button className="mt-4 md:mt-0 bg-orange-400 hover:bg-orange-500 text-black font-medium px-6 py-3 rounded-full flex items-center gap-2 transition">
        Find Our Store
        <Search size={18} />
      </button>
    </div>
  );
}
