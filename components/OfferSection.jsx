import offers from "@/data/offers.json";
import OfferCard from "./OfferCard";

export default function OfferSection() {
  return (
    <section className="py-10 px-4 md:px-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Latest Offers</h2>

      <div
        className="
        grid 
        grid-cols-1 
        md:grid-cols-2 
        lg:grid-cols-3 
        gap-6
      "
      >
        {offers.map((offer) => (
          <OfferCard key={offer.id} offer={offer} />
        ))}
      </div>
    </section>
  );
}
