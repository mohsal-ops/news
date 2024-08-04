'use client'
import NavBar from "@/components/NavBar";
import NewsBody from "@/components/newsBody";
import HomeSkeleton from "@/components/skeleton";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";


const Home = () => {
  return (
    <section>
      <Suspense
        fallback={
          <>
          </>
        }
      >
        <MainPageComponent/>
      </Suspense>
    </section>
  );
}

function MainPageComponent() {
      const searchParams = useSearchParams();
      const q = typeof (searchParams.get("q") !== null) ? searchParams.get("q") : "business";
  return (
    <main className="flex flex-col gap-2 mx-2 md:mx-24">
      <NavBar />
      <section>
      <NewsBody searchterm={q} />
      </section>
    </main>
  );
}

export default Home 
