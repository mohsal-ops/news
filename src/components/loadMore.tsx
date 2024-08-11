'use client'
import { useEffect, useState } from 'react';
import { newsCardProp } from './randomnews';
import { Bars } from 'react-loader-spinner';
import { getLoadMoreNews } from './getdata';
import NewsCard from './newsCard';
type itemsArrayporp = {
  itemsArray: newsCardProp[];
  searchterm:string
};

export default function LoadMore({ searchterm ,itemsArray }: itemsArrayporp) {
    const [page, setpage] = useState<number>(1);
    const [news, setnews] = useState<any[]>([]);
    
        useEffect(() => {
          getLoadMoreNews({ searchterm,page }).then((res) => {
            res?.map((item: any) => {
              setnews((prev) => [...prev, item]);
            });
          });
          
        }, [page]);
        


    return (
      <>
        <div >
          <div className="flex flex-col gap-10 ">
                        {news?.map((item: newsCardProp) => (
                            <NewsCard item={item} />
                        ))}
            
          </div>
        </div>
        <section className="flex items-center w-full justify-center ">
          <button
            className="w-full flex flex-col justify-center items-center hover:bg-gray-100"
            onClick={() => setpage((prev) => prev + 1)}
          >
            <Bars
              height="50"
              width="30"
              color="#03045e"
              ariaLabel="bars-loading"
              visible={true}
            />
            <p className="text-[#03045e] font-medium text-xs">
              Click to load more
            </p>
          </button>
        </section>
      </>
    );
}
