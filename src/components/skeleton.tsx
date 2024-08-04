'use client'
function HomeSkeleton() {
  return (
    <div className="w-full h-screen animate-pulse">
      <div className="flex flex-col border-b-[1px] border-black border-opacity-25">
        <div className="flex items-center py-3 justify-between border-b-[1px] border-black border-opacity-25 ">
          <div>
            <div className="w-40 h-16 -ml-4 bg-stone-100" />
          </div>
          <div className="flex pl-1 justify-start items-center bg-white border rounded-xl outline-none focus-within:shadow-sm">
            <div className="p-2 rounded-3xl bg-stone-100"></div>
          </div>
        </div>
        <div className="flex items-center w-full py-1"></div>
      </div>
      <div className="flex">
        <div className="flex flex-col gap-10 w-[60%]">
          <div className="flex flex-col">
            <div className="space-y-2">
              <div className="flex justify-end items-center">
                <p className="pl-1 font-medium w-full h-4 bg-zinc-100"></p>
              </div>
              <div className="space-y-2">
                <div className="h-1/2 w-full  bg-zinc-100" />
                <p className="pl-1 font-medium w-full h-4 bg-zinc-100"></p>
                <p className="pl-1 font-extralight w-full h-12 bg-zinc-100"></p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-24 bg-zinc-100 w-[40%]"></div>
      </div>
    </div>
  );
}

export default HomeSkeleton;