'use client'
import { revalidatePath } from 'next/cache';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { IoMdSearch } from 'react-icons/io';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from './ui/navigation-menu';
import { cn } from '@/lib/utils';
import logo from 'logo.png'

export default function NavBar() {
    const router = useRouter()
    const [searchterm, setsearchterm] = useState<string>()
    const handlesearch = (event: React.FormEvent) => {
        event.preventDefault()
        router.push(`/?q=${searchterm}`)
    }
    const links = ['business', 'entertainment', 'science', 'sports', '']
  return (
    <div className="flex flex-col border-b-[1px] border-black border-opacity-25">
      <div className="flex items-center py-3 justify-between border-b-[1px] border-black border-opacity-25 ">
        <div>
          <img src='logo.png' className='w-40 h-16 -ml-4'/>
        </div>
        <div className="flex pl-1 justify-start items-center bg-white border rounded-xl outline-none focus-within:shadow-sm">
          <IoMdSearch fontSize={21} className="ml-1 text-black" />
          <form onSubmit={handlesearch}>
            <input
              onChange={(e) => {
                setsearchterm(e.target.value);
              }}
              value={searchterm}
              type="text"
              placeholder="Search"
              className="p-2 outline-none rounded-3xl text-black "
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
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-meduim">
                    {link}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="w-36  flex flex-col items-center  ">
                    <NavigationMenuLink
                      asChild
                      className=" py-3 w-full text-center hover:bg-primary-foreground"
                    >
                      <a className="w-full h-full" href="/?q=technology">
                        technology
                      </a>
                    </NavigationMenuLink>
                    <NavigationMenuLink
                      asChild
                      className=" py-3 w-full text-center hover:bg-primary-foreground"
                    >
                      <a className="w-full h-full" href="/?q=invetions">
                        invetions
                      </a>
                    </NavigationMenuLink>
                    <NavigationMenuLink
                      asChild
                      className=" py-3 w-full text-center hover:bg-primary-foreground"
                    >
                      <a className="w-full h-full" href="/?q=Bitcoin">
                        Bitcoin
                      </a>
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
