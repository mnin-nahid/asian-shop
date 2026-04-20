"use client";

export default function NoticeBar() {
  return (
    <div className="bg-gray-900 text-white flex items-center overflow-hidden">
      <div className="bg-red-500 px-4 py-2 text-sm font-semibold z-50">
        NOTICE
      </div>

      <div className="marquee">
        বাংলাদেশের অন্যতম বৃহত্তম শপিং প্লাটফর্ম Asian Shop তে আপনাকে স্বাগতম!!!
        কেনাকাটায় থাকছে বিশেষ মূল্যছাড়!! সারাদেশের সকল জেলা, উপজেলা এবং
        ইউনিয়ন পর্যায়ে থাকছে হোম ডেলিভারি সুবিধা। প্রয়োজনীয় প্রোডাক্ট পেতে
        আমাদের সাথেই থাকুন। হেল্পলাইন ☎ 09638-233233
      </div>

      <style jsx>{`
        .marquee {
          white-space: nowrap;
          display: inline-block;
          padding-left: 100%;
          animation: scroll 30s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
}
// "use client";

// export default function NoticeBar() {
//   return (
//     <div className="bg-gray-900 text-white flex items-center overflow-hidden">

//       {/* Label */}
//       <div className="bg-red-500 px-4 py-2 text-sm font-semibold whitespace-nowrap">
//         NOTICE
//       </div>

//       {/* Scrolling area */}
//       <div className="relative w-full overflow-hidden">
//         <div className="absolute whitespace-nowrap animate-marquee px-4 text-sm">
//           🚀 Flash Sale Today | 💻 New Gaming PCs Available | 🎉 Special Discounts on Accessories | 🚚 Free Delivery Available!
//         </div>
//       </div>

//     </div>
//   );
// }
