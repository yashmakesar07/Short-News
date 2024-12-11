import Card from "@/components/Card";
import Navbar from "@/components/Navbar";
import Arrow from "@/components/Arrow";

interface category {
  name: string;
  isActive: boolean;
}

const HomePage = () => {
  const categories: category[] = [
    { name: "Technology", isActive: true, },
    { name: "Finance", isActive: false },
    { name: "Sports", isActive: false },
    { name: "Politics", isActive: false },
    { name: "Business", isActive: false },
  ];

  return (
    <div className="h-[100vh] w-full flex flex-col lg:flex-row  gap-5 justify-center items-center">
      {/* Left Arrow */}
      <div className="hidden lg:flex w-[20%] h-full justify-end items-center">
        <Arrow />
      </div>
      
      {/* Main Content */}
      <div className="w-[full] lg:w-[35%] h-full flex flex-col gap-8 pt-5 lg:pt-10 px-4">
        <Navbar category={categories} />
        <Card />
      </div>

      {/* Right Arrow */}
      <div className="hidden lg:flex w-[20%] h-full justify-end items-center rotate-180">
        <Arrow />
      </div>
    </div>
  );
};

export default HomePage;