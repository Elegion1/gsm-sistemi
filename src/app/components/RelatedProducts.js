"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import ProductCard from "@/app/components/ProductCard";

export default function RelatedProducts({ items }) {
  return (
    <section className="col-12 col-md-6">
      <h2 className="text-uppercase fw-medium text-center">
        Prodotti correlati
      </h2>
      <Swiper
        spaceBetween={20}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        slidesPerView={0.8}
        breakpoints={{
          768: { slidesPerView: 2, spaceBetween: 30 },
        }}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-100 h-100"
      >
        {items.map((product, index) => (
          <SwiperSlide
            key={index}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
