interface News {
  title: string;
}

interface CardProps {
  news: News;
}

const Card: React.FC<CardProps> = ({ news }) => {
  return (
    <div className="h-[80%] w-full bg-card rounded-[50px] gap-5 lg:gap-3 flex flex-col p-5 ">
      <div className="h-[45%] lg:h-[35%] w-full bg-black rounded-[50px] overflow-hidden">
        <img src="/pexels-pixabay-267350.jpg" />
      </div>
      <div className="  w-full">
        <h3 className="font-semibold text-3xl px-1 font-serif overflow-hidden lg:text-lg 2xl:text-2xl"> 
          {news.title}
        </h3>
      </div>
      <div className=" h-[45%] w-full overflow-auto mb-[2]">
        <p className="text-lg lg:font-medium lg:text-sm font-serif text-justify 2xl:text-xl text-gray-400">
          Cutting-edge technologies like Artificial Intelligence, Machine
          Learning, and Blockchain are revolutionizing industries and
          transforming daily life. AI and ML are enhancing decision-making,
          automating tasks, and personalizing experiences, while Blockchain
          improves transparency and security. Autonomous systems are reshaping
          sectors like transportation and logistics, making them faster and
          safer. Innovations in IoT, robotics, and 5G connectivity are creating
          smarter cities, efficient supply chains, and breakthrough healthcare
          solutions. These technologies are not only improving business
          operations but also driving sustainability and enhancing productivity.
          Staying informed and embracing these advancements is crucial for
          businesses and individuals to stay competitive in a rapidly changing
          tech landscape.
        </p>
      </div>
    </div>
  );
};

export default Card;