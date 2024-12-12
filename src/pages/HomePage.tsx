import Card from "@/components/Card";
import Navbar from "@/components/Navbar";
import Arrow from "@/components/Arrow";
import { Swiper, SwiperSlide } from "swiper/react";


import { EffectCards } from "swiper/modules";

interface Category {
  name: string;
  isActive: boolean;
}

interface NewsData {
  title: string;
}

const HomePage = () => {
  const categories: Category[] = [
    { name: "Technology", isActive: true },
    { name: "Finance", isActive: false },
    { name: "Sports", isActive: false },
    { name: "Politics", isActive: false },
    { name: "Business", isActive: false },
  ];

  const newsData: NewsData[] = [
    {
      title: "News 1",
    },
    {
      title: "News 2",
    },
    {
      title: "News 3",
    },
    {
      title: "News 4",
    },
    {
      title: "News 5",
    },
    {
      title: "News 6",
    },
  ];


  return (
    <div className="h-[100vh] w-full flex flex-col lg:flex-row  gap-5 justify-center items-center">

      <div className="hidden lg:flex w-[20%] h-full justify-end items-center">
        <Arrow />
      </div>


      <div className="w-[full] lg:w-[45%] h-full flex flex-col gap-8 pt-5 lg:pt-10 px-4">
        <Navbar category={categories} />
        <Swiper
          effect={"cards"}
          grabCursor={true}
          pagination={true}
          modules={[EffectCards]}
          className=" h-full w-full"
        >
          {newsData.map((news) => (
            <SwiperSlide>
              <Card news={news} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Right Arrow */}
      <div className="hidden lg:flex w-[20%] h-full justify-end items-center rotate-180">
        <Arrow />
      </div>
    </div>
  );
};

export default HomePage;
