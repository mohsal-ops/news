'use client'
import getSearchNews, { getRandomNews } from './getdata';
import NewsCard from './newsCard';
import { useEffect, useState } from 'react';
import RandomNews, { newsCardProp, randomnewsProp } from './randomnews';
import LoadMore from './loadMore';
import { InfinitySpin } from 'react-loader-spinner';



export default function NewsBody({
  searchterm
}: {
  searchterm: string;
 
}) {
  console.log(searchterm);
  const [newsarray, setnewsarray] = useState<any[]>([])
  const [news, setnews] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    getSearchNews({ searchterm }).then((res) => {
      res?.map((item: any) => {
        setnews(item);
        console.log("news", news);
        setLoading(false)
      });
    });
    getRandomNews().then((res) => {
      setnewsarray(res);
    });
  }, [searchterm]);
  

  return (
    <section className="flex gap-10 p-2">
      {loading ? (
        <div className="flex items-center">
          <InfinitySpin
            width="50"
            color="#03045e" />
        </div>
      ) : (
        <div className="md:w-[60%] w-full">
          <div className="flex flex-col gap-10 ">
            <LoadMore searchterm={searchterm} itemsArray={news} />
          </div>
        </div>
      )}

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
