interface ArticleData {
  title: string;
  content: string;
  urlToImage: string;
}

interface CardProps {
  news: ArticleData;
}

const Card: React.FC<CardProps> = ({ news }) => {

console.log(news)
  return (
    <div className=" h-[85%] md:h-[100dvh] md:mb-10 md:w-full md:flex md:justify-center md:items-center w-full bg-card rounded-[50px] gap-5 lg:gap-3 lg:mb-10 flex flex-col p-5 md:p-5 ">
      <div className="  lg:h-[35%] w-full md:h-[30%] bg-black rounded-[50px] overflow-hidden md:mt-2 2xl:h-[45%]">
        <img src={news.urlToImage} />
      </div>
      <div className=" w-full">
        <h3 className="font-semibold text-3xl px-1 font-serif overflow-hidden lg:text-2xl 2xl:text-2xl"> 
          {news.title}
        </h3>
      </div>
      <div className=" h-[45%] w-full overflow-auto mb-[2]">
        <p className="text-lg lg:font-medium lg:text-m font-serif text-justify 2xl:text-m text-gray-400">
          {news.content}
        </p>
      </div>
    </div>
  );
};

export default Card;