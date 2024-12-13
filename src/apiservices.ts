import axios from "axios";

export const fetchData = async (category: string) => {
  try {
    let response = await axios.get(
      `https://newsapi.org/v2/everything?q=${category}&language=en&sortBy=publishedAt&pageSize=10&apiKey=248a1658132940debc517d11de9497e9`
    );
    let data = await response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
