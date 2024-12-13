import { useState } from "react";
import { TiThMenuOutline } from "react-icons/ti";

interface Category {
  name: string;
  isActive: boolean;
}

interface NavbarProps {
  data: Category[];
  onCategorySelect: (categoryName: string) => void; // Callback prop
}

const Navbar: React.FC<NavbarProps> = ({ data, onCategorySelect }) => {
  const [newCategory, setNewCategory] = useState<Category[]>(data);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleCategoryClick = (index: number) => {
    setNewCategory((prevCategories) =>
      prevCategories.map((cat, i) => ({
        ...cat,
        isActive: i === index,
      }))
    );

    // Trigger the callback with the selected category's name
    const selectedCategory = newCategory[index].name;
    onCategorySelect(selectedCategory);
  };

  const handleMenuToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden md:hidden 2xl:h-[2%] 2xl:p-3  2xl:mt-10 lg:w-full lg:bg-card lg:h-[8%] lg:rounded-[50px] lg:flex  lg:flex-row lg:justify-between lg:items-center lg:overflow-hidden lg:p-6">
        {newCategory.map((cat, index) => (
          <li
            key={index}
            onClick={() => handleCategoryClick(index)}
            className={`lg:cursor-pointer lg:font-serif lg:text-[16px] 2xl:text-lg md:text-2xl lg:py-2 lg:px-2 lg:transition lg:font-medium duration-700 ${
              cat.isActive
                ? "bg-white rounded-[50px] text-black xl:text-sm lg:px-3 2xl:px-3"
                : "text-gray hover:bg-gray-800 rounded-[50px]"
            }`}
            style={{ listStyleType: "none" }}
          >
            {cat.name}
          </li>
        ))}
      </div>

      {/* Mobile Navbar */}
      <div className="z-10 w-screen h-[8%] flex  flex-row opacity-95 justify-between px-6 items-center md:w-full lg:hidden">
        <h2 className="font-bold text-xl">Short News</h2>
        <TiThMenuOutline
          aria-expanded={isOpen}
          role="button"
          className="text-xl"
          onClick={handleMenuToggle}
        />
        {isOpen && (
          <div
            className="absolute w-full opacity-95 h-1/2 top-[10%] bg-black right-0 ease-in delay-500 shadow-lg rounded-md"
            onClick={() => setIsOpen(false)}
          >
            <ul className="flex flex-col font-semibold  space-y-4 justify-between items-end p-6 text- md:text-sm text-white">
              {newCategory.map((cat, index) => (
                <li
                  key={index}
                  onClick={() => handleCategoryClick(index)}
                  className={` text-sm lg:text-m cursor-pointer px-4 py-2 font-serif transition ease-in-out duration-300 ${
                    cat.isActive
                      ? "bg-white rounded-[50px] text-black"
                      : "text-gray hover:bg-gray-800 rounded-[50px]"
                  }`}
                >
                  {cat.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;