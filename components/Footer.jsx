import { Phone } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const socials = ["facebook", "twitter", "instagram", "youtube"];

  return (
    <footer className="bg-neutral-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Column 1 */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-red-500/10 p-2 rounded-full">
                <Phone className="text-red-500 w-5 h-5" />
              </div>
              <div>
                <p className="text-xs tracking-wide text-gray-400">
                  NEED HELP?
                </p>
                <h2 className="text-lg font-semibold text-white">
                  09638233233
                </h2>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mb-6">
              {socials.map((icon) => (
                <div
                  key={icon}
                  className="bg-white/5 hover:bg-white/10 border border-white/10 p-2 rounded-full transition cursor-pointer"
                >
                  <Image
                    src={`/social/${icon}.png`}
                    alt={icon}
                    width={16}
                    height={16}
                  />
                </div>
              ))}
            </div>

            <p className="text-sm text-gray-400 leading-relaxed">
              We provide high-quality products with excellent service. Visit our
              store or shop online for the best experience.
            </p>

            {/* App buttons */}
            <div className="flex gap-3 mt-6">
              <Image
                src="/social/app-store.png"
                alt="App Store"
                width={40}
                height={40}
                className="hover:opacity-80 transition"
              />
              <Image
                src="/social/playstore.png"
                alt="Play Store"
                width={40}
                height={40}
                className="hover:opacity-80 transition"
              />
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-white font-semibold mb-5">Information</h3>
            <ul className="space-y-3 text-sm">
              {[
                "Terms & Conditions",
                "Delivery Information",
                "About Us",
                "Privacy Policy",
                "Contact Us",
                "Returns",
              ].map((item) => (
                <li
                  key={item}
                  className="hover:text-white transition cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-white font-semibold mb-5">Customer Service</h3>
            <ul className="space-y-3 text-sm">
              {["Site Map", "Wish List", "Brands", "Affiliate", "Specials"].map(
                (item) => (
                  <li
                    key={item}
                    className="hover:text-white transition cursor-pointer"
                  >
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-white font-semibold mb-5">Newsletter</h3>
            <p className="text-sm text-gray-400 mb-5">
              Get updates, offers & news directly in your inbox.
            </p>

            <div className="flex mb-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-full bg-white/5 border border-white/10 text-sm outline-none focus:border-orange-500"
              />
              <button className="bg-orange-500 hover:bg-orange-600 px-5 rounded-r-full text-white text-sm font-medium transition">
                Subscribe
              </button>
            </div>

            {/* Payment */}
            <div className="flex gap-3 flex-wrap items-center">
              <Image
                src="/cash-on-delivery.png"
                alt="COD"
                width={55}
                height={30}
              />
              <Image src="/bkash.png" alt="Bkash" width={55} height={30} />
              <Image src="/nagad.png" alt="Nagad" width={55} height={30} />
              <Image src="/rocket.png" alt="Rocket" width={55} height={30} />
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-6 text-center text-sm text-gray-500">
          Asian Shop © 2026 — All rights reserved.
        </div>
      </div>
    </footer>
  );
}

// import { Phone } from "lucide-react";
// import Image from "next/image";

// export default function Footer() {
//   return (
//     <footer className="bg-black text-white px-6 md:px-16 py-12">
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
//         {/* Column 1 - Help / About */}
//         <div>
//           <div className="flex items-center gap-3 mb-4">
//             <Phone className="text-red-500" />
//             <div>
//               <p className="text-sm">NEED HELP?</p>
//               <h2 className="text-lg font-semibold">09638233233</h2>
//             </div>
//           </div>

//           <div className="flex gap-3 mb-4">

//               <Image
//                 src="/social/facebook.png"
//                 alt="Facebook"
//                 width={20}
//                 height={20}
//               />
//               <Image
//                 src="/social/twitter.png"
//                 alt="Twitter"
//                 width={20}
//                 height={20}
//               />
//               <Image
//                 src="/social/instagram.png"
//                 alt="Instagram"
//                 width={20}
//                 height={20}
//               />
//               <Image
//                 src="/social/youtube.png"
//                 alt="YouTube"
//                 width={20}
//                 height={20}
//               />

//           </div>

//           <p className="text-sm text-gray-400 mb-4">
//             Welcome to our online store! We are a team of passionate individuals
//             dedicated to providing our customers with high-quality products and
//             excellent service.
//           </p>

//           {/* App Buttons */}
//           <div className="flex gap-3">
//             <Image
//               src="/social/app-store.png"
//               alt="App Store"
//               width={20}
//               height={20}
//             />

//             <Image
//               src="/social/playstore.png"
//               alt="Play Store"
//               width={20}
//               height={20}
//             />
//           </div>
//         </div>

//         {/* Column 2 - Information */}
//         <div>
//           <h3 className="font-semibold mb-4">INFORMATION</h3>
//           <ul className="space-y-2 text-gray-400 text-sm">
//             <li>Terms & Conditions</li>
//             <li>Delivery Information</li>
//             <li>About Us</li>
//             <li>Privacy Policy</li>
//             <li>Contact Us</li>
//             <li>Returns</li>
//           </ul>
//         </div>

//         {/* Column 3 - Customer Service */}
//         <div>
//           <h3 className="font-semibold mb-4">CUSTOMER SERVICE</h3>
//           <ul className="space-y-2 text-gray-400 text-sm">
//             <li>Site Map</li>
//             <li>Wish List</li>
//             <li>Brands</li>
//             <li>Affiliate</li>
//             <li>Specials</li>
//           </ul>
//         </div>

//         {/* Column 4 - Newsletter */}
//         <div>
//           <h3 className="font-semibold mb-4">JOIN OUR NEWSLETTER</h3>
//           <p className="text-sm text-gray-400 mb-4">
//             Sign up for our e-mail to get latest news.
//           </p>

//           <div className="flex mb-4">
//             <input
//               type="email"
//               placeholder="Please enter your email"
//               className="flex-1 px-4 py-2 rounded-l-full text-black outline-none"
//             />
//             <button className="bg-orange-500 px-5 py-2 rounded-r-full text-white font-medium hover:bg-orange-600">
//               Subscribe
//             </button>
//           </div>

//           {/* Payment Icons */}
//           <div className="flex gap-3 flex-wrap">
//             <Image
//               src="/cash-on-delivery.png"
//               alt="Cash on Delivery"
//               width={40}
//               height={40}
//             />

//             <Image
//               src="/bkash.png"
//               alt="Bkash"
//               width={40}
//               height={40}
//             />

//             <Image
//               src="/nagad.png"
//               alt="Nagad"
//               width={40}
//               height={40}
//             />

//             <Image
//               src="/rocket.png"
//               alt="Rocket"
//               width={40}
//               height={40}
//             />
//           </div>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="text-center text-sm text-gray-400 mt-10 border-t border-gray-800 pt-6">
//         Asian Shop © 2026 - Powered by asiannetworkbd.net
//       </div>
//     </footer>
//   );
// }
