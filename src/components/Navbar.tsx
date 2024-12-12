import { useState } from "react";
import { TiThMenuOutline } from "react-icons/ti";

interface Category {
  id: number;
  name: string;
  isActive: boolean;
}

interface NavbarProps {
  data: Category[];
}

const Navbar: React.FC<NavbarProps> = ({ data }) => {
  const [newCategory, setNewCategory] = useState<Category[]>(data);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleCategoryClick = (index: number) => {
    setNewCategory((prevCategories) =>
      prevCategories.map((cat, i) => ({
        ...cat,
        isActive: i === index,
      }))
    );
  };

  const handleMenuToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden lg:w-full lg:bg-card lg:h-[8%] lg:rounded-[50px] lg:flex flex-row justify-between items-center lg:p-6">
        {newCategory.map((cat) => (
          <li
            key={cat.id}
            onClick={() => handleCategoryClick(cat.id)}
            className={`lg:cursor-pointer lg:font-serif lg:text-sm 2xl:text-lg lg:py-2 lg:px-2 lg:transition lg:font-semibold duration-700 ${
              cat.isActive
                ? "bg-white rounded-[50px] text-black 2xl:p-3"
                : "text-gray hover:bg-gray-800 rounded-[50px]"
            }`}
            style={{ listStyleType: "none" }}
          >
            {cat.name}
          </li>
        ))}
      </div>

      {/* Mobile Navbar */}
      <div className="z-10 w-screen h-[8%] flex flex-row opacity-95 justify-between px-6 items-center lg:hidden">
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
            <ul className="flex flex-col font-semibold space-y-4 justify-between items-end p-6 text-lg text-white">
              {newCategory.map((cat) => (
                <li
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.id)}
                  className={`cursor-pointer px-4 py-2 font-serif transition ease-in-out duration-300 ${
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