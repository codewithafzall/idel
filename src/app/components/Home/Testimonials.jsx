"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import blueLine from "../../images/blue-line.svg";
import stars from "../../images/stars.png";

const Testimonials = () => {
  const testimonials = [
    {
      id: 4,
      name: "— Jayna Mehta, Mitesh Chauhan, Udita Dalvi - Hemani | Design Story",
      feedback:
        "At Design Story, we believe in partnering with vendors who share our commitment to excellence and value trust. Over numerous projects, Idel Windows has consistently proved to be a dependable partner, delivering products of exceptional quality with professionalism and punctuality. They have become a trusted collaborator in bringing our visions to life. We look forward to many more successful projects built on this foundation of complete confidence and dependable service.",
      image: stars,
    },
    {
      id: 2,
      name: "— Mr. Zafar Javeri | ZYJ Developers",
      feedback:
        "As developers of premium residential projects, we have been working with IDEL India and Mr. Kapil Jhunjhunwala for our window solutions. The windows supplied by IDEL consistently meet the highest standards of durability, finish, and performance. Mr. Jhunjhunwala’s personal involvement and commitment to timely delivery, along with his proactive problem-solving approach, have made him a trusted partner in our projects.",
      image: stars,
    },
    {
      id: 5,
      name: "— Mr. Manoj Phatak | Kokilaben Dhirubhai Ambani Hospital",
      feedback:
        "We have used IDEL’s windows in our projects and are very happy with the product. Mr. Kapil personally gets involved at every stage of the work, which gives clients immense confidence and a strong sense of reliability while working with them. We wish him all the very best for the future and would definitely like to be associated with him for our upcoming projects.",
      image: stars,
    },
    {
      id: 1,
      name: "— Mr. Samir Bhansali | India Bulls Sky Forest",
      feedback:
        "Working with IDEL was a smooth and satisfying experience. Their window systems are not only elegant and modern but also built with quality and precision.Installation was timely, and the team was highly professional throughout with very prompt after sales service.I’m very happy with the result and would gladly recommend IDEL to anyone looking to upgrade their home with reliable and stylish windows.",
      image: stars,
    },
    {
      id: 3,
      name: "— Mr. Pramod Dhanuka | Aamby Valley",
      feedback:
        "I installed IDEL's Window Systems at my Aamby Valley villa in 2016. Now, almost 10 years and countless harsh monsoons later, they remain completely up-to-date, operating with consistent smoothness and convenience. Also have a 12-foot spider facade installed, which survived seriously intense storms without any issue. Their quality workmanship is second to none. Thanks IDEL",
      image: stars,
    },
    {
      id: 7,
      name: "— Ananyaa Banka | Apartment at Vile Parle",
      feedback:
        "They’re absolutely amazing with their work, precision is on point and i believe they’re the best at their job! best experience!",
      image: stars,
    },
    {
      id: 6,
      name: "— Aanchal Kanodia | India Bulls Sky Forest",
      feedback:
        "Had all our house windows done by Kapil and I couldn’t be happier with the experience. The quality of work is truly top-notch, and the after-sales service has been excellent. The team is responsive, professional, and ensures complete customer satisfaction.",
      image: stars,
    },
    {
      id: 8,
      name: "— Sumeer Kumar | Duplex at Juhu",
      feedback:
        "Extremely satisfied with the aluminium sliding windows installed by IDEL. Mr. Kapil and his team are technically very sound, adhere strictly to timelines, and deliver excellent workmanship. Would strongly recommend them for quality and professionalism.",
      image: stars,
    },
    {
      id: 9,
      name: "— Ritika Chawla | Apartment at Nariman Point",
      feedback:
        "Great experience with them and the after sales has been very very good . The mosquito net has been good quality and the little hitches once in a while , is sorted promptly. Highly recommended!",
      image: stars,
    },
  ];

  return (
    <section className="bg-sky py-10 sm:py-20">
      <div className="container">
        <div className="flex justify-between items-center flex-col md:flex-row">
          <div>
            <p className="uppercase flex items-center gap-x-4 font-bold text-blue">
              <span>
                <Image src={blueLine} alt="vector" />
              </span>
              Testimonials
            </p>
            <h2 className="mt-3">What Our Clients Say</h2>
          </div>

          <p className="leading-7 mt-4 md:mt-0 text-right hidden sm:block">
            Real feedback from architects, developers,<br /> and homeowners who trust IDEL for their<br /> premium aluminium system needs.
          </p>
          <p className="leading-7 mt-4 md:mt-0 sm:hidden">
            Real feedback from architects, developers,<br /> and homeowners who trust IDEL for their<br /> premium aluminium system needs.
          </p>
        </div>

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="mt-7 sm:mt-12"
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-white rounded-xl p-8 sm:my-10 flex flex-col items-start ">
                {/* <div className="mb-5">
                  <Image src={item.image} alt="stars" className="w-28" />
                </div> */}
                <p className="text-lg leading-7">{item.feedback}</p>
                <p className="font-semibold mt-6">{item.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
