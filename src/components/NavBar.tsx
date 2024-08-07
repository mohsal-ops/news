import Link from "next/link";
import Searchbar from "../app/components/searchbar";

export default function NavBar() {

  const links = ["business", "technology", "science"];

  return (
    <div className="flex flex-col border-b-[1px] border-black border-opacity-25">
      <div className="flex items-center justify-between border-b-[1px] border-black border-opacity-25">
        <div>
          <img src="logo.png" className="w-40 h-16 -ml-4" />
        </div>
        <div className="w-[50%]">
          <Searchbar />
        </div>
      </div>
      <div className="flex items-center w-full py-1">
        {links.map((link, key) => (
          <Link
            key={key}
            className="hover:bg-zinc-100 hover:duration-300 rounded-md text-center px-2 font-medium py-2"
            href={`/?q=${link}`}
          >
            {link}
          </Link>
        ))}
      </div>
    </div>
  );
}
