"use client";

import { useRouter, useParams } from "next/navigation";
import Image from "next/image";
import offers from "@/data/offers.json";
import useCountdown from "@/hooks/useCountdown";

export default function OfferDetails() {
  const router = useRouter();
  const params = useParams();

  const offer = offers.find((o) => String(o.id) === String(params?.id));

  const timeLeft = useCountdown(offer?.endDate);

  if (!params?.id) {
    return <div className="p-10 text-center">Loading...</div>;
  }

  if (!offer) {
    return <div className="p-10 text-center">Offer not found</div>;
  }

  const descriptionLines = offer.description.split("\n");

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Top bar */}
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => router.back()}
          className="text-sm text-gray-600 hover:text-black"
        >
          ← Offer Details
        </button>

        {timeLeft && (
          <div className="text-sm">
            <span className="mr-2">Offer ends in:</span>
            <span className="font-mono bg-gray-100 px-2 py-1 rounded">
              {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
              {timeLeft.seconds}s
            </span>
          </div>
        )}
      </div>

      {/* Image */}
      <div className="relative w-full h-[350px] mb-4">
        <Image
          src={offer.image}
          alt={offer.title}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      {/* Title */}
      <h1 className="text-xl font-semibold mb-2">{offer.title}</h1>

      {/* Dates */}
      <p className="text-sm text-gray-500 mb-4">
        {new Date(offer.startDate).toDateString()} -{" "}
        {new Date(offer.endDate).toDateString()}
      </p>

      {/* Description */}
      <div className="text-sm text-gray-700 space-y-2">
        {descriptionLines.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>

      {/* Conditions */}
      <div className="mt-4">
        <h3 className="font-semibold mb-2">Conditions:</h3>
        <ul className="list-disc pl-5 text-sm text-gray-700">
          {offer.conditions.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
      </div>

      {/* Links */}
      <div className="mt-4">
        <h3 className="font-semibold mb-2">Links:</h3>
        <div className="flex gap-3 flex-wrap">
          {offer.links.map((link, i) => (
            <a key={i} href={link.url} className="text-blue-600 underline">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
