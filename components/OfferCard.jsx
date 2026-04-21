import Image from "next/image";
import Link from "next/link";

export default function OfferCard({ offer }) {
  return (
    <Link href={`/offers/${offer.id}`}>
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
        <div className="relative w-full h-96">
          <Image
            src={offer.image}
            alt={offer.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold">{offer.title}</h3>
          <p className="text-sm text-gray-600 mt-2">{offer.shortDescription}</p>

          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            View Details
          </button>
        </div>
      </div>
    </Link>
  );
}
