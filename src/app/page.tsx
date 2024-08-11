'use client'
import NavBar from "@/components/NavBar";
import NewsBody from "@/components/newsBody";
import { NewsBodySkeleton } from "@/components/skeleton";
import { randomUUID } from "crypto";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { Bars } from "react-loader-spinner";

 

function Mainfunction() {
  const searchParams = useSearchParams()
  const q = searchParams.get("q");
  const [searchterm, setsearchterm] = useState<string>('');
  useEffect(() => {
    const getTheTerm = () => {
      if (!q) {
        return "business";
      } else {
        return q;
      }
    };

    setsearchterm(() => getTheTerm());
  }, [q]);

  return (
    <main className="flex flex-col  lg:mx-24">
      <section >
        <NavBar />
      </section>

      <section>
        <NewsBody searchterm={searchterm}  />
      </section>
      
    </main>
  );
}

export default function Home() {
  return (
    <div
      className=" flex flex-col justify-center space-y-5 lg:space-y-2   sm:px-3 "
      key='kbkefjvb'
    >
      <Suspense
        fallback={
          <>
            <NewsBodySkeleton />
          </>
        }
      >
        <Mainfunction />
      </Suspense>
    </div>
  );
}



