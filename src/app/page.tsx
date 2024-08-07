'use client'
import NavBar from "@/components/NavBar";
import NewsBody from "@/components/newsBody";
import { NewsBodySkeleton } from "@/components/skeleton";
import { randomUUID } from "crypto";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { Bars } from "react-loader-spinner";

 

export function Mainfunction() {
  const searchParams = useSearchParams()
  const [searchterm, setsearchterm] = useState<string>("");
  const [page, setpage] = useState<number>(1);
  useEffect(() => {
    const getTheTerm = () => {
      const q = searchParams.get("q");

      if (!q) {
        return "business";
      } else {
        return q;
      }
    };

    setsearchterm(() => getTheTerm());
    console.log(searchterm)
  }, [searchParams,page]);

  return (
    <main className="flex flex-col gakp-2 md:mx-24">
      <section>
        <NavBar />
      </section>

      <section>
        <NewsBody searchterm={searchterm} page={page} />
      </section>
      <section>
        <button
          className="w-full hover:bg-gray-100"
          onClick={() => setpage((prev) => prev + 1)}
        >
          <Bars
            height="50"
            width="50"
            color="#03045e"
            ariaLabel="bars-loading"
            visible={true}
          />
        </button>
      </section>
    </main>
  );
}

export default function Home() {
  return (
    <div
      className="mt-3  flex flex-col justify-center space-y-5 lg:space-y-2  px-5 sm:px-3 "
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



