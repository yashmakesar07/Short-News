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

  // Callback to handle selected category
  const handleCategorySelect = (categoryName: string) => {
    console.log("Selected Category:", categoryName);
  };

  return (
    <div className="h-[110dvh] w-full flex 2xl:h-full lg:w-full  lg:h-[110vh] lg:flex lg:justify-center xl:w-full md:flex md:justify-center md:items-center md:h-[110dvh] md:w-[70%] lg:items-center 2xl:flex 2xl:justify-center 2xl:items-center 2xl:w-[50%]">
      <div className="w-full flex justify-center items-center px-4 lg:w-[45%] lg:h-full lg:pt-10  flex-col gap-8 pt-5  2xl:w-[70%] 2xl:h-[5%] ">
        {/* Pass the callback to Navbar */}
        <Navbar data={categories} onCategorySelect={handleCategorySelect} />
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
    </div>
  );
};

export default HomePage;