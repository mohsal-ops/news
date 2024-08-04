'use client'
import NewsFetcher, { Randomnews } from './fetchnews';
import NewsCard from './newsCard';
import { RandomNews } from './randomnews';



export default async function NewsBody({ searchterm }: { searchterm?: string | null }) {
  const alldata = await Randomnews();
  const newsarray = await alldata.data

  const DTA = await NewsFetcher({ searchterm });
  const news = await DTA.data;
  
    return (
      <section className="flex gap-10">
        <div className="md:w-[60%] w-full">
            <div className="flex flex-col gap-10 ">
              {news?.map((item: any) => (
                <NewsCard item={item} />
              )
                )}
            </div>
        </div>

        <div className="hidden md:block w-[40%]  border-l-[1px] border-black border-opacity-25 pl-5 ">
            <div className="flex flex-col gap-10">
              {newsarray?.map((item: any) => (
                  <RandomNews item={item} />
                ))}
            </div>
        </div>
      </section>
    );
}
