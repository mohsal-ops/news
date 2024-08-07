import { randomUUID } from 'crypto';
import Link from 'next/link';
import React from 'react'

export interface newsCardProp {
  url: string;
  authors: [string | undefined];
  excerpt: string;
  title: string;
  thumbnail: string;
  date: string;
}
export interface randomnewsProp {
  url: string;
  timestamp: number;
  newsHeadline: string;
  newsSource: string;
  newsFirstImage: string;
  newsDate: string;
}
type randomnewsPop = {
  item: randomnewsProp;
};



export default function RandomNews({ item }: randomnewsPop) {
  return (
      <div
        className="flex border-b-[1px] border-black border-opacity-25 pb-4"
      >
        <div className="flex flex-col w-[65%] ">
          <p className="pl-1 font-medium">{item.newsSource}</p>
          <p className="pl-1 font-extralight text-sm">{item.newsHeadline}</p>
        </div>
        <div className="w-[35%]">
          <p className="text-sm text-right">{item.newsDate}</p>

          <img src={item.newsFirstImage} alt="" className="object-cover" />
        </div>
      </div>
  );
}
