import Link from "next/link";
import Searchbar from "../app/components/searchbar";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu";

export default function NavBar() {

  const links = [
    "Sport",
    "Technology",
    "Politics",
    "Health",
    "Environment",
    "Economy",
    "Education",
    "Science",
    "Entertainment",
    "Finance",
    "Travel",
    "Fashion",
    
  ]

  return (
    <>
      <div className="hidden  sm:flex flex-col border-b-[1px] border-black border-opacity-25">
        <div className="flex py-2 items-center justify-between border-b-[1px] border-black border-opacity-25">
          <div>
            <img src="logo.png" className="sm:w-40  sm:h-16  -ml-4" />
          </div>
          <div className="sm:w-[50%] w-[m60%]">
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
      <div className="sm:hidden  flex flex-col border-b-[1px]  border-black border-opacity-25">
        <div className="flex p-3 bg-blue-500 items-center justify-between ">
          <div>
            <p className="font-black text-2xl p-1 rounded-xl text-white">
              news.<span className="text-red-600">to</span>
            </p>
          </div>
          <div>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="px-2">
                    Choose news topic
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="h-screen overflow-auto   ">
                    <ul className="flex flex-col text-center font-medium w-40">
                      {links.map((link, key) => (
                        <li
                          key={key}
                          className="flex items-center h-12 items hover:bg-primary-foreground"
                        >
                          <NavigationMenuLink className="text-md w-full">
                            <Link
                              key={key}
                              className="hover:bg-zinc-100 hover:duration-300 rounded-md text-center px-2 font-medium py-2"
                              href={`/?q=${link}`}
                            >
                              {link}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
        <div className="p-2">
          <Searchbar />
        </div>
        {/* <div className="flex items-center w-full py-1">
          {links.map((link, key) => (
            <Link
              key={key}
              className="hover:bg-zinc-100 hover:duration-300 rounded-md text-center px-2 font-medium py-2"
              href={`/?q=${link}`}
            >
              {link}
            </Link>
          ))}
        </div> */}
      </div>
    </>
  );
}
