"use client";

export default function NoticeBar() {
  return (
    <div className="bg-gray-900 text-white flex items-center overflow-hidden">
      <div className="bg-red-500 px-4 py-2 text-sm font-semibold z-50">NOTICE</div>

      <div className="marquee">
        🚀 Flash Sale Today | 💻 New Gaming PCs Available | 🎉 Special Discounts
      </div>

      <style jsx>{`
        .marquee {
          white-space: nowrap;
          display: inline-block;
          padding-left: 100%;
          animation: scroll 15s linear infinite;
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
