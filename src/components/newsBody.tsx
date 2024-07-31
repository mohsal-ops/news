import { randomUUID } from 'crypto';
import NewsCard from './newsCard';
import PageHeader from './pageHeader';


async function randomNewsFetcher() {
  const data = await fetch(
    "https://newsdata.io/api/1/archive?apikey=pub_4961899466a6456c8e97842ec4751446fe79a&q=Olympics%2024&from_date=2024-02-29$size=7"
  );
  return data.json()
}

const articles = [
  {
    source: {
      id: "wired",
      name: "Wired",
    },
    author: "Jessica Klein",
    title: "Bitcoin Bros Go Wild for Donald Trump",
    description:
      "At Bitcoin 2024 conference in Nashville, Trump is finally telling crypto enthusiasts what they want to hear.",
    url: "https://www.wired.com/story/bitcoin-bros-go-wild-for-donald-trump/",
    urlToImage:
      "https://media.wired.com/photos/66a56f21bf2909f08a634953/191:100/w_1280,c_limit/Crypto-Bros-Business-2162975355.jpg",
    publishedAt: "2024-07-28T12:43:07Z",
    content:
      "Trumps speech is an hour behind. A half hour into the wait, restless attendees start chanting Trump. The woman sitting in front of me murmurs her own chant:\r\nBitcoin, bitcointhats what they should be… [+3147 chars]",
  },
  {
    source: {
      id: "wired",
      name: "Wired",
    },
    author: "Jessica Klein",
    title: "Bitcoin Bros Go Wild for Donald Trump",
    description:
      "At Bitcoin 2024 conference in Nashville, Trump is finally telling crypto enthusiasts what they want to hear.",
    url: "https://www.wired.com/story/bitcoin-bros-go-wild-for-donald-trump/",
    urlToImage:
      "https://media.wired.com/photos/66a56f21bf2909f08a634953/191:100/w_1280,c_limit/Crypto-Bros-Business-2162975355.jpg",
    publishedAt: "2024-07-28T12:43:07Z",
    content:
      "Trumps speech is an hour behind. A half hour into the wait, restless attendees start chanting Trump. The woman sitting in front of me murmurs her own chant:\r\nBitcoin, bitcointhats what they should be… [+3147 chars]",
  },
  {
    source: {
      id: "wired",
      name: "Wired",
    },
    author: "Jessica Klein",
    title: "Bitcoin Bros Go Wild for Donald Trump",
    description:
      "At Bitcoin 2024 conference in Nashville, Trump is finally telling crypto enthusiasts what they want to hear.",
    url: "https://www.wired.com/story/bitcoin-bros-go-wild-for-donald-trump/",
    urlToImage:
      "https://media.wired.com/photos/66a56f21bf2909f08a634953/191:100/w_1280,c_limit/Crypto-Bros-Business-2162975355.jpg",
    publishedAt: "2024-07-28T12:43:07Z",
    content:
      "Trumps speech is an hour behind. A half hour into the wait, restless attendees start chanting Trump. The woman sitting in front of me murmurs her own chant:\r\nBitcoin, bitcointhats what they should be… [+3147 chars]",
  },
  {
    source: {
      id: "wired",
      name: "Wired",
    },
    author: "Jessica Klein",
    title: "Bitcoin Bros Go Wild for Donald Trump",
    description:
      "At Bitcoin 2024 conference in Nashville, Trump is finally telling crypto enthusiasts what they want to hear.",
    url: "https://www.wired.com/story/bitcoin-bros-go-wild-for-donald-trump/",
    urlToImage:
      "https://media.wired.com/photos/66a56f21bf2909f08a634953/191:100/w_1280,c_limit/Crypto-Bros-Business-2162975355.jpg",
    publishedAt: "2024-07-28T12:43:07Z",
    content:
      "Trumps speech is an hour behind. A half hour into the wait, restless attendees start chanting Trump. The woman sitting in front of me murmurs her own chant:\r\nBitcoin, bitcointhats what they should be… [+3147 chars]",
  },
  {
    source: {
      id: "wired",
      name: "Wired",
    },
    author: "Jessica Klein",
    title: "Bitcoin Bros Go Wild for Donald Trump",
    description:
      "At Bitcoin 2024 conference in Nashville, Trump is finally telling crypto enthusiasts what they want to hear.",
    url: "https://www.wired.com/story/bitcoin-bros-go-wild-for-donald-trump/",
    urlToImage:
      "https://media.wired.com/photos/66a56f21bf2909f08a634953/191:100/w_1280,c_limit/Crypto-Bros-Business-2162975355.jpg",
    publishedAt: "2024-07-28T12:43:07Z",
    content:
      "Trumps speech is an hour behind. A half hour into the wait, restless attendees start chanting Trump. The woman sitting in front of me murmurs her own chant:\r\nBitcoin, bitcointhats what they should be… [+3147 chars]",
  },
  {
    source: {
      id: "wired",
      name: "Wired",
    },
    author: "Jessica Klein",
    title: "Bitcoin Bros Go Wild for Donald Trump",
    description:
      "At Bitcoin 2024 conference in Nashville, Trump is finally telling crypto enthusiasts what they want to hear.",
    url: "https://www.wired.com/story/bitcoin-bros-go-wild-for-donald-trump/",
    urlToImage:
      "https://media.wired.com/photos/66a56f21bf2909f08a634953/191:100/w_1280,c_limit/Crypto-Bros-Business-2162975355.jpg",
    publishedAt: "2024-07-28T12:43:07Z",
    content:
      "Trumps speech is an hour behind. A half hour into the wait, restless attendees start chanting Trump. The woman sitting in front of me murmurs her own chant:\r\nBitcoin, bitcointhats what they should be… [+3147 chars]",
  },
];
export async function RandomNews() {
  // const data = await randomNewsFetcher()
  // const randomnews = data.articles
    return (
      <div>
        {articles?.length > 0 ? (
          <div className="flex flex-col gap-10">
            {articles
              ?.filter(
                (item: any) => item.image_url !== null && item.url !== null
              )
              .map((item: any) => (
                <a
                  href={item.source_url}
                  key={item.article_id}
                  className="flex border-b-[1px] border-black border-opacity-25 pb-4"
                >
                  <div className="flex flex-col w-[65%] ">
                    <p className="pl-1 font-medium">{item.title}</p>
                    <p className="pl-1 font-extralight text-sm">
                      {item.description}
                    </p>
                  </div>
                  <div className="w-[35%]">
                    <p className="text-sm text-right">
                      {item.pubDate?.slice(0, 10)}
                    </p>

                    <img
                      src={item.image_url}
                      alt="image"
                      className="object-cover"
                    />
                  </div>
                </a>
              ))}
          </div>
        ) : (
          <p>No news</p>
        )}
      </div>
    );
    
}
export default function NewsBody({searchterm}:{searchterm?: string |null }) {
    return (
      <div className="flex gap-10 h-100vh">
        <div className="md:w-[60%] w-full ">
          <NewsCard searchterm={searchterm} />
        </div>
        <div className="hidden md:block w-[40%]  border-l-[1px] border-black border-opacity-25 pl-5 ">
          <RandomNews />
        </div>
      </div>
    );
}
