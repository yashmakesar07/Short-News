import Card from "@/components/Card";
import Navbar from "@/components/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import { useEffect, useState } from "react";
import { fetchData } from "@/apiservices";


  import "swiper/css";

interface Category {
  id: number;
  name: string;
  isActive: boolean;
}

interface NewsData {
  title: string;
  content: string;
  urlToImage: string;
}

const HomePage = () => {
  const [newCategory, setNewsCategory] = useState("Technology");
  const [data, setData] = useState<NewsData[]>([]); // Change to an array of NewsData
  const categories: Category[] = [
    { id: 1, name: "Technology", isActive: true },
    { id: 2, name: "Finance", isActive: false },
    { id: 3, name: "Sports", isActive: false },
    { id: 4, name: "Politics", isActive: false },
    { id: 5, name: "Business", isActive: false },
  ];

  const handleCategorySelect = (categoryName: string) => {
    setNewsCategory(categoryName);
    console.log("Selected Category:", categoryName);
  };

  const fetchDataAsync = async () => {
    const response = await fetchData(newCategory);
    // console.log(response.articles?.filter((articles:any[])=> articles.content !== "[Removed]"))
    setData(response.articles); // Assuming response.articles is an array
    console.log(data);
  };

  useEffect(() => {
    fetchDataAsync();
  }, [newCategory]);

  return (
    <div className="h-[100dvh] w-full flex 2xl:h-full lg:w-full lg:h-[110vh] lg:flex lg:justify-center xl:w-full md:flex md:justify-center md:items-center md:h-[110dvh] md:w-[70%] lg:items-center 2xl:flex 2xl:justify-center 2xl:items-center 2xl:w-[50%]">
      <div className="w-full flex justify-center items-center px-4 lg:w-[45%] lg:h-full lg:pt-10 flex-col gap-8 pt-5 2xl:w-[70%] 2xl:h-[5%]">
        <Navbar data={categories} onCategorySelect={handleCategorySelect} />
        <Swiper
          effect="cards"
          grabCursor
          pagination
          modules={[EffectCards]}
          className="myswiper h-full w-full"
        >
          {data.map((article, index) => ( // Corrected to map over data
            <SwiperSlide key={index}>
              <Card news={article} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomePage;


