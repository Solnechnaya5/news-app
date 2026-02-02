import { useEffect, useState } from "react"
import { NewsBanner } from '../../compoments/NewsBanner/NewsBanner'
import { getNews } from "../../assets/api/apiNews";
import './styles.css'
import { NewsList } from "../../compoments/NewsList/NewsList";

export const Main = ()=>{
      const [news, setNews] = useState([])
    
    useEffect(() => {
      console.log("EFFECT START");
    
      const fetchNews = async () => {
        try {
          const news= await getNews();
          console.log("NEWS:", news);
          setNews(news ?? []);
        } catch (error) {
          console.log("FETCH ERROR:", error);
        }
      };
    
      fetchNews();
    }, []);
    
return(
    <main >
       {news.length >0 ? <NewsBanner item={news[0]}/>: null}
       <NewsList newslist={news}/>
    </main>
)
}