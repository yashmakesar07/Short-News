import { useState } from "react";
import { TiThMenuOutline } from "react-icons/ti";
interface Category {
  name: string;
  isActive: boolean;
}

interface NavbarProps {
  category: Category[];
}

const Navbar: React.FC<NavbarProps> = ({ category }) => {
  const [newCategory, setNewCategory] = useState<Category[]>(category);
  const [isOpen, setIsopen] = useState<boolean>(false);

  const handleCategoryClick = (index: number) => {
    setNewCategory((prevCategories) =>
      prevCategories.map((category, i) => ({
        ...category,
        isActive: i === index, // Set the clicked category as active
      }))
    );
  };

  const handleisOpen = () => {
    setIsopen(!isOpen);
    console.log(isOpen);
  };
  return (
    <>
      <div className=" hidden lg:w-full lg:bg-card lg:h-[8%] lg:rounded-[50px] lg:flex flex-row justify-between items-center lg:p-6">
        {newCategory.map((m, index) => (
          <li
            key={index}
            onClick={() => handleCategoryClick(index)}
            className={`lg:cursor-pointer lg:font-serif lg:text-sm 2xl:text-lg lg:py-2  lg:px-2 lg:transition lg:font-semibold lg:  duration-700 lg:${
              m.isActive
                ? "lg: bg-white rounded-[50px] text-black 2xl:p-3 2xl:font-serif"
                : "text-gray  hover:bg-gray-800 rounded-[50px]"
            }`}
            style={{ listStyleType: "none" }}
          >
            {m.name}
          </li>
        ))}
      </div>
      {/* For Mobile view */}
      <div className="w-screen h-[8%]  flex flex-row justify-between px-6 items-center lg:hidden">
        <h2 className="font-bold text-xl lg:hidden"> Short News</h2>
        <TiThMenuOutline
          className="text-xl lg:hidden"
          onClick={() => handleisOpen()}
        />
        {isOpen ? (
          <div className="absolute w-full opacity-95 h-1/2 top-[10%] bg-black right-0 ease-in delay-500 shadow-lg rounded-md ">
            <ul className="flex flex-col font-semibold space-y-4 justify-between items-end p-6 text-lg text-white">
              {newCategory.map((m, index) => (
                <li
                  key={index}
                  onClick={() => handleCategoryClick(index)}
                  className={`cursor-pointer px-4 py-2 font-serif transition ease-in-out duration-300 ${
                    m.isActive
                      ? "bg-white rounded-[50px] text-black"
                      : "text-gray  hover:bg-gray-800 rounded-[50px]"
                  }`}
                >
                  {m.name}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Navbar;
