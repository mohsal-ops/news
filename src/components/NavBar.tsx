"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";

export default function NavBar() {
  const router = useRouter();
  const [searchterm, setSearchterm] = useState<string>("");

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    if (searchterm.trim()) {
      router.push(`/?q=${encodeURIComponent(searchterm.trim())}`);
    }
  };

  const links = ["business", "technology", "science", "sports", ""];

  return (
    <div className="flex flex-col border-b-[1px] border-black border-opacity-25">
      <div className="flex items-center py-3 justify-between border-b-[1px] border-black border-opacity-25">
        <div>
          <img src="logo.png" className="w-40 h-16 -ml-4" />
        </div>
        <div className="flex pl-1 justify-start items-center bg-white border rounded-xl outline-none focus-within:shadow-sm">
          <IoMdSearch fontSize={21} className="ml-1 text-black" />
          <form onSubmit={handleSearch}>
            <input
              onChange={(e) => setSearchterm(e.target.value)}
              value={searchterm}
              type="text"
              placeholder="Search"
              className="p-2 outline-none rounded-3xl text-black"
            />
          </form>
        </div>
      </div>
      <div className="flex items-center w-full py-1">
        {links.map((link, key) =>
          link !== "" ? (
            <Link
              key={key}
              className="hover:bg-zinc-100 hover:duration-300 rounded-md text-center px-4 font-medium py-4"
              href={`/?q=${link}`}
            >
              {link}
            </Link>
          ) : (
            <NavigationMenu key={key}>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-medium">
                    {link}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink
                      asChild
                      className="py-3 w-full text-center"
                    >
                      <Link className="w-full h-full" href="/?q=technology">
                        olimpics
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink
                      asChild
                      className="py-3 w-full text-center hover:bg-primary-foreground"
                    >
                      <Link className="w-full h-full" href="/?q=inventions">
                        inventions
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink
                      asChild
                      className="py-3 w-full text-center hover:bg-primary-foreground"
                    >
                      <Link className="w-full h-full" href="/?q=Bitcoin">
                        Bitcoin
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          )
        )}
      </div>
    </div>
  );
}
