'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { IoMdSearch } from 'react-icons/io';

export default function Searchbar() {
     const router = useRouter();
     const [searchterm, setSearchterm] = useState<string>("");


  return (
    <div className="flex pl-1 justify-start items-center bg-white border rounded-xl outline-none focus-within:shadow-sm">
      <IoMdSearch fontSize={21} className="ml-1 text-black" />
      <form onSubmit={(e) => {
        e.preventDefault()
        router.push(`/q=${searchterm}`)}}>
        <input
          onChange={(e) => setSearchterm(e.target.value)}
          value={searchterm}
          type="text"
          placeholder="Search"
          className="p-2 outline-none rounded-3xl text-black"
        />
      </form>
    </div>
  );
}
