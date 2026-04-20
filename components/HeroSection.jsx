"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="grid grid-cols-12 gap-4 px-6 py-4">
      {/* LEFT: Slider */}
      <div className="col-span-9">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="rounded-xl overflow-hidden"
        >
          <SwiperSlide>
            <Image
              src="/banner1.webp"
              alt="banner"
              width={1200}
              height={400}
              className="w-full h-[400px] object-cover"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src="/banner2.webp"
              alt="banner"
              width={1200}
              height={400}
              className="w-full h-[400px] object-cover"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src="/banner3.webp"
              alt="banner"
              width={1200}
              height={400}
              className="w-full h-[400px] object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* RIGHT: Static Images */}
      <div className="col-span-3 flex flex-col gap-4">
        <div className="rounded-xl overflow-hidden">
          <Image
            src="/side1.webp"
            alt="promo"
            width={400}
            height={190}
            className="w-full h-[190px] object-cover"
          />
        </div>

        <div className="rounded-xl overflow-hidden">
          <Image
            src="/side2.webp"
            alt="promo"
            width={400}
            height={190}
            className="w-full h-[190px] object-cover"
          />
        </div>
      </div>
    </div>
  );
}
