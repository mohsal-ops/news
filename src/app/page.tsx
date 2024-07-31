'use client'
import NavBar from "@/components/NavBar";
import NewsBody from "@/components/newsBody";
import { useSearchParams } from "next/navigation";


const Home =() => {
  const searchParams = useSearchParams() 
  
  const q = typeof(searchParams.get('q') !== null) ? searchParams.get('q') : 'tesla'

  return (
    <section>
      <div className="flex flex-col gap-2 mx-2 md:mx-24">
        <NavBar />
        <NewsBody searchterm={q} />
      </div>
    </section>
  );
}

export default Home 
