import Link from "next/link";
import { newsCardProp } from "./randomnews";



export default function NewsCard({ item }: { item: newsCardProp }) {
  return (
    <>
      <Link href={item?.url} key={item.url} className="flex flex-col">
        <div className="space-y-2">
          <div className="flex justify-between w-full">
            <p className="pl-1 font-light">{item.date?.slice(0, 10)}</p>
          </div>
          <img src={item.thumbnail} className="text-center" alt="" />
          <p className="pl-1 font-medium">{item.title}</p>
          <p className="pl-1 font-extralight">{item.excerpt}</p>
        </div>
      </Link>
    </>
  );
}




