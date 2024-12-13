interface News {
  title: string;
}

interface CardProps {
  news: News;
}

const Card: React.FC<CardProps> = ({ news }) => {
  return (
    <div className=" h-[85%] md:h-[100dvh] md:w-full md:flex md:justify-center md:items-center w-full bg-card rounded-[50px] gap-5 lg:gap-3 flex flex-col p-5 md:p-5 ">
      <div className=" lg:h-[35%] w-full md:h-[30%] bg-black rounded-[50px] overflow-hidden md:mt-2 2xl:h-[45%]">
        <img src="/pexels-pixabay-267350.jpg" />
      </div>
      <div className=" w-full">
        <h3 className="font-semibold text-3xl px-1 font-serif overflow-hidden lg:text-2xl 2xl:text-2xl"> 
          {news.title}
        </h3>
      </div>
      <div className=" h-[45%] w-full overflow-auto mb-[2]">
        <p className="text-lg lg:font-medium lg:text-m font-serif text-justify 2xl:text-m text-gray-400">
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