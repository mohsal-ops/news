import NewsFetcher, { Randomnews } from './fetchnews';

export default async function getSearchNews({ searchterm }: { searchterm: string }) {
    const page =1

    const alldata = await NewsFetcher({searchterm , page });
    const newsarray = await alldata?.data
    console.log('news aknd', newsarray)
    return newsarray 
}
export  async function getLoadMoreNews({ searchterm,page }: {page:number, searchterm: string }) {

    const alldata = await NewsFetcher({ searchterm, page });
    const newsarray = await alldata?.data
    console.log('news aknd', newsarray)
    return newsarray
}
export async function getRandomNews() {

    const alldata = await Randomnews();
    const newsarray = await alldata.news

    return newsarray as any[]
}

