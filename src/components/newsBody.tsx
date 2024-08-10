'use client'
import getSearchNews, { getRandomNews } from './getdata';
import NewsCard from './newsCard';
import { useEffect, useState } from 'react';
import RandomNews, { newsCardProp, randomnewsProp } from './randomnews';



export default function NewsBody({
  searchterm,page
}: {
  searchterm: string ;
  page:number
  }) {
  const [newsarray, setnewsarray] = useState<any[]>([])
  const [news, setnews] = useState<any[]>([]);
  useEffect(() => {
    getSearchNews({ searchterm,page }).then((res) => {
    res?.map((item:any) => {
        setnews((prev)=>[...prev,item]);
      console.log(news)
    })
      
    });
    getRandomNews().then((res) => {
      setnewsarray(res)
    })

  },[searchterm,page])
  

  return (
    <section className="flex gap-10">
      <div className="md:w-[60%] w-full">
        <div className="flex flex-col gap-10 ">
          {news.length > 0 ? (
          <>
          {news?.map((item: newsCardProp) => (
            <NewsCard item={item} />
          ))}
              </>
          ) : (
              <div>No news found</div>
          )}
        </div>
      </div>

      <div className="hidden md:block w-[40%]  border-l-[1px] border-black border-opacity-25 pl-5 ">
        <div className="flex flex-col gap-10">
          {newsarray.length > 0 ? (
            <>
              {newsarray?.map((item: randomnewsProp) => (
            <RandomNews key={item.timestamp} item={item} />
          ))}
            </>
          ) : (
              <div>No news found</div>
          )}
          
        </div>
      </div>
    </section>
  );
}
