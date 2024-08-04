'use client'
import NavBar from "@/components/NavBar";
import NewsBody from "@/components/newsBody";
import { NavBarSkeleton, NewsBodySkeleton, NewsCardSkeleton } from "@/components/skeleton";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";






const Home = () => {
  const searchParams = useSearchParams();
  const q = typeof (searchParams.get("q") !== null)
    ? searchParams.get("q")
    : "business";
  return (
    <section>
      <Suspense
        fallback={
          <>
            <NavBarSkeleton />
            <NewsBodySkeleton />
            <NewsCardSkeleton />
          </>
        }
      >
      </Suspense>
      <MainPageComponent searchterm={q} />
    </section>
  );
}

function MainPageComponent({ searchterm }: { searchterm?: string | null }) {
  return (
    <main className="flex flex-col gap-2 mx-2 md:mx-24">
      <NavBar />
      <section>
        <NewsBody searchterm={searchterm} />
      </section>
    </main>
  );
}

export default Home 
