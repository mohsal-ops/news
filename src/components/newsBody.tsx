import NewsFetcher, { Randomnews } from './fetchnews';
import NewsCard from './newsCard';
import PageHeader from './pageHeader';
import { newsCardProp, RandomNews } from './randomnews';



export default async function NewsBody({ searchterm }: { searchterm?: string | null }) {
  const alldata = await Randomnews();
  const newsarray = alldata?.data

  const data = await NewsFetcher({ searchterm });
  const news = data?.data
  
    return (
      <div className="flex gap-10">
        <div className="md:w-[60%] w-full">
          {news?.length > 0 ? (
            <div className="flex flex-col gap-10 ">
              {news
                ?.filter(
                  (item: newsCardProp) =>
                    item.urls.replace(/^\["/, "").replace(/"]$/, "") !== ''
                )
                .map((item: any) => {
                  return <NewsCard item={item} />;
                })}
            </div>
          ) : (
            <div>No news</div>
          )}
        </div>

        <div className="hidden md:block w-[40%]  border-l-[1px] border-black border-opacity-25 pl-5 ">
          {newsarray?.length > 0 ? (
            <div className="flex flex-col gap-10">
              {newsarray
                ?.filter(
                  (item: newsCardProp) =>
                    item.urls.replace(/^\["/, "").replace(/"]$/, "") !== ""
                )
                .map((item: any) => (
                  <RandomNews item={item} />
                ))}
            </div>
          ) : (
            <div>No news</div>
          )}
        </div>
      </div>
    );
}
