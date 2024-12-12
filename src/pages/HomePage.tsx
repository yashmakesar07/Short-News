import Card from "@/components/Card";
import Navbar from "@/components/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";

interface Category {
  id: number;
  name: string;
  isActive: boolean;
}

interface NewsData {
  title: string;
}

const HomePage = () => {
  const categories: Category[] = [
    { id: 1, name: "Technology", isActive: true },
    { id: 2, name: "Finance", isActive: false },
    { id: 3, name: "Sports", isActive: false },
    { id: 4, name: "Politics", isActive: false },
    { id: 5, name: "Business", isActive: false },
  ];

  const newsData: NewsData[] = [
    { title: "News 1" },
    { title: "News 2" },
    { title: "News 3" },
    { title: "News 4" },
    { title: "News 5" },
    { title: "News 6" },
    { title: "News 1" },
    { title: "News 2" },
    { title: "News 3" },
    { title: "News 4" },
    { title: "News 5" },
    { title: "News 6" },
  ];

  return (
    <div className="h-[100vh] w-full flex flex-col lg:flex-row gap-5 justify-center items-center">
      <div className="w-full lg:w-[45%] h-full flex flex-col gap-8 pt-5 lg:pt-10 px-4">
        <Navbar data={categories} />
        <Swiper
          effect="cards"
          grabCursor
          pagination
          modules={[EffectCards]}
          className="h-full w-full"
        >
          {newsData.map((news, index) => (
            <SwiperSlide key={index}>
              <Card news={news} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="hidden lg:flex w-[20%] h-full justify-end items-center">
        {/* Arrow Component Placeholder */}
        {/* <Arrow direction="left" /> */}
      </div>
    </div>
  );
};

export default HomePage;