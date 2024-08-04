export function NavBarSkeleton() {
  return (
    <div className="flex flex-col border-b-[1px] border-black border-opacity-25">
      <div className="flex items-center py-3 justify-between border-b-[1px] border-black border-opacity-25">
        <div>
          <div className="w-40 h-16 bg-gray-200 animate-pulse" />
        </div>
        <div className="flex pl-1 justify-start items-center bg-white border rounded-xl outline-none focus-within:shadow-sm">
          <div className="w-6 h-6 bg-gray-200 animate-pulse ml-1" />
          <form>
            <input
              type="text"
              placeholder="Search"
              className="p-2 outline-none rounded-3xl text-black bg-gray-200 animate-pulse"
            />
          </form>
        </div>
      </div>
      <div className="flex items-center w-full py-1">
        <div className="w-24 h-10 bg-gray-200 animate-pulse rounded-md mx-2" />
        <div className="w-24 h-10 bg-gray-200 animate-pulse rounded-md mx-2" />
        {/* Add more placeholders for the links */}
      </div>
    </div>
  );
}

export function NewsBodySkeleton() {
  return (
    <section className="flex gap-10">
      <div className="md:w-[60%] w-full">
        <div className="flex flex-col gap-10">
          <div className="bg-gray-200 animate-pulse h-48 w-full mb-4 rounded-md" />
          <div className="bg-gray-200 animate-pulse h-48 w-full mb-4 rounded-md" />
          {/* Add more skeletons for news items */}
        </div>
      </div>

      <div className="hidden md:block w-[40%] border-l-[1px] border-black border-opacity-25 pl-5">
        <div className="flex flex-col gap-10">
          <div className="flex border-b-[1px] border-black border-opacity-25 pb-4">
            <div className="w-[65%]">
              <div className="bg-gray-200 animate-pulse h-4 w-full mb-2 rounded-md" />
              <div className="bg-gray-200 animate-pulse h-4 w-full rounded-md" />
            </div>
            <div className="w-[35%]">
              <div className="bg-gray-200 animate-pulse h-24 w-full rounded-md" />
            </div>
          </div>
          {/* Add more skeletons for random news */}
        </div>
      </div>
    </section>
  );
}

export function NewsCardSkeleton() {
  return (
    <div className="flex flex-col bg-gray-100 border border-gray-200 p-4 rounded-md">
      <div className="flex justify-end items-center">
        <div className="bg-gray-200 animate-pulse h-4 w-20 rounded-md" />
      </div>
      <div className="space-y-2 mt-2">
        <div className="bg-gray-200 animate-pulse h-48 w-full rounded-md" />
        <div className="bg-gray-200 animate-pulse h-4 w-3/4 rounded-md" />
        <div className="bg-gray-200 animate-pulse h-4 w-full rounded-md" />
      </div>
    </div>
  );
}
