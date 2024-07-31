import { randomUUID } from "crypto";

export async function News(searchterm?: string | null) {
  const data = await fetch(
    `https://newsdata.io/api/1/news?apikey=pub_4961899466a6456c8e97842ec4751446fe79a&q=${searchterm}&language=fr,en&size=5`
  );
  return data.json()
}
const news = [
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
export default async function NewsCard({ searchterm }: { searchterm?: string | null }) {
  // const data = await News(searchterm);
  // const news = await data?.results;
  console.log(news);
  return (
    <div className="">
      {news?.length > 0 ? (
        <div className="flex flex-col gap-10 ">
          {news
            ?.filter(
              (item: any) => item.image_url !== null && item.source_url !== null
            )
            .map((item: any) => (
              <a
                href={item.source_url}
                key={item.article_id}
                className="flex flex-col"
              >
                <div className="space-y-2">
                  <div className="flex justify-end items-center">
                    <p>{item.pubDate?.slice(0, 10)}</p>
                  </div>
                  <div className="space-y-2">
                    <img src={item.image_url} alt="image" />
                    <p className="pl-1 font-medium">{item.title}</p>
                    <p className="pl-1 font-extralight">{item.description}</p>
                  </div>
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



