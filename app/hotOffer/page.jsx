"use client";

import { useState, useEffect } from "react";

export default function hotOffer() {
  const endDate = "2026-04-30T23:59:59";

  const calculateTime = () => {
    const diff = new Date(endDate) - new Date();

    if (diff <= 0) return null;

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [time, setTime] = useState(calculateTime());
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculateTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow p-6">
        {/* Title */}
        <h1 className="text-center text-lg font-semibold mb-4">
          চলছে স্টার টেক ১৯ তম বর্ষপূর্তি উৎসব!
        </h1>

        {/* Description */}
        <div className="text-sm text-gray-700 leading-6 text-center space-y-2">
          <p>
            উৎসব উপলক্ষে মন ভরপুর উপহার! Laptop, Desktop, Monitor, Smart Watch,
            Keyboard, Mouse, Headphone সহ বিভিন্ন পণ্য।
          </p>

          <p>
            "STAR19" কোড ব্যবহার করে নির্দিষ্ট পণ্যে ছাড় এবং ফ্রি হোম ডেলিভারি।
          </p>
        </div>

        {/* Expand Button */}
        <div className="text-center mt-4">
          <button
            onClick={() => setOpen(!open)}
            className="text-blue-600 font-medium flex items-center gap-1 mx-auto"
          >
            বিস্তারিত জানতে ক্লিক করুন
            <span className={`transition ${open ? "rotate-180" : ""}`}>↓</span>
          </button>
        </div>

        {/* Extra Content */}
        {open && (
          <div className="mt-4 text-sm text-gray-600 text-center space-y-2">
            <p>
              Starlink Mini Kit, TV, Monitor, Power Station সহ আরও অনেক উপহার।
            </p>
            <p>Scratch and Win ক্যাম্পেইন চলবে সীমিত সময় পর্যন্ত।</p>
          </div>
        )}

        {/* Countdown */}
        <div className="mt-6 text-center">
          <p className="text-xs font-semibold text-gray-500 mb-2">ENDING IN</p>

          {time ? (
            <div className="flex justify-center gap-2">
              {Object.entries(time).map(([key, value]) => (
                <div
                  key={key}
                  className="bg-red-500 text-white px-3 py-2 rounded"
                >
                  <p className="text-lg font-bold">
                    {String(value).padStart(2, "0")}
                  </p>
                  <p className="text-[10px] uppercase">{key}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-red-500">Offer Ended</p>
          )}
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          <button className="px-4 py-2 border rounded-full text-sm hover:bg-gray-100">
            19th Anniversary Fest
          </button>

          <button className="px-4 py-2 border rounded-full text-sm hover:bg-gray-100">
            Terms & Conditions
          </button>
        </div>
      </div>
    </div>
  );
}
