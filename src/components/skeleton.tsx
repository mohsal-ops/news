
export function NewsBodySkeleton() {
  return (
    <main className="flex flex-col gap-2 mx-2 md:mx-24">
      <section>
        <div className="w-full h-56 bg-gray-200"></div>
      </section>
    <section className="flex gap-10">
      <div className="md:w-[60%] w-full">
        <div className="flex flex-col gap-10">
          <div className="bg-gray-200 animate-pulse h-48 w-full mb-4 rounded-md" />
          <div className="bg-gray-200 animate-pulse h-48 w-full mb-4 rounded-md" />
          {/* Add more skeletons for news items */}
        </div>
      </div>
      
      </section>
    </main>
  );
}

{/* <div className="hidden md:block w-[40%] border-l-[1px] border-black border-opacity-25 pl-5">
  <div className="flex flex-col gap-10">
    <div className="flex border-b-[1px] border-black border-opacity-25 pb-4">
      <div className="w-[65%]">
        <div className="bg-gray-200 animate-pulse h-4 w-full mb-2 rounded-md" />
        <div className="bg-gray-200 animate-pulse h-4 w-full rounded-md" />
      </div>
      <div className="w-[35%]">
        <a className="bg-gray-200 animate-pulse h-24 w-full rounded-md" />
      </div>
    </div>
    {/* Add more skeletons for random news */}
//   </div>
// </div>; */}

