import React from 'react'

export interface newsCardProp {
  link: string;
  source: string;
  text: string;
  urls: string;
  hash: string;
  pubDate: string;
}
type randomnewsPop = {
  item: newsCardProp;
};



export async function RandomNews({ item }: randomnewsPop) {
  const extractedUrl = item.urls.replace(/^\["/, "").replace(/"]$/, "");
  const handleError = (e: any) => {
    const target = e.target as HTMLImageElement;
    target.classList.add("hidden");
  }

  return (
    <>
      <a
        href={item.link}
        key={item.hash}
        className="flex border-b-[1px] border-black border-opacity-25 pb-4"
      >
        <div className="flex flex-col w-[65%] ">
          <p className="pl-1 font-medium">{item.source}</p>
          <p className="pl-1 font-extralight text-sm">{item.text}</p>
        </div>
        <div className="w-[35%]">
          <p className="text-sm text-right">{item.pubDate?.slice(0, 10)}</p>

          <img
            onError={handleError}
            src={extractedUrl}
            alt=""
            className="object-cover"
          />
        </div>
      </a>
    </>
  );
}
