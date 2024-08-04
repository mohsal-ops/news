import { randomUUID } from "crypto";
import { newsCardProp } from "./randomnews";



export default async function NewsCard({ item }: { item: newsCardProp }) {
 const extractedUrl = item.urls.replace(/^\["/, "").replace(/"]$/, "")
  
 const handleError = (e:any) => {
   const target = e.target as HTMLImageElement;
   target.classList.add("hidden");
  };
  console.log(extractedUrl);

  return (
    <>
      <a href={item?.link} key={item?.hash} className="flex flex-col">
        <div className="flex justify-end items-center">
          <p>{item.pubDate?.slice(0, 10)}</p>
        </div>
        <div className="space-y-2">
          <img onError={handleError} src={extractedUrl} alt="" />
          <p className="pl-1 font-medium">{item.source}</p>
          <p className="pl-1 font-extralight">{item.text}</p>
        </div>
      </a>
    </>
  );
}




