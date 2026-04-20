import products from "@/data/products.json";
import Image from "next/image";

export default function FeaturedProducts() {
  return (
    <section className="py-8">
      <h2 className="text-center text-2xl font-semibold mb-1">
        Featured Products
      </h2>
      <p className="text-center text-gray-400 mb-8">
        Check & Get Your Desired Product!
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 px-4 mx-auto">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded-lg shadow hover:shadow-md transition"
          >
            {item.isNew && (
              <span className="text-xs bg-green-500 text-white px-2 py-1 rounded">
                NEW
              </span>
            )}

            <Image
              src={item.image}
              alt={item.name}
              width={200}
              height={150}
              priority={item.id <= 4} // first row only
            />

            <h3 className="text-gray-900 text-sm font-medium line-clamp-2">
              {item.name}
            </h3>

            <p className="text-gray-900 font-semibold mt-1">
              ৳{item.price.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
