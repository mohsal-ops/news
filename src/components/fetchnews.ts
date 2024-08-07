export default async function NewsFetcher({ searchterm,page }: {page:number, searchterm?: string  }) {
    const url = `https://news-api14.p.rapidapi.com/v2/search/articles?query=${searchterm}&language=en&page=${page}`
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '95645dc66amshd46b97ea279fd35p156efbjsn6378dcd2d7ca',
            'x-rapidapi-host': 'news-api14.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        return result
    } catch (error) {
        console.error(error);
    }

}

export async function Randomnews() {
    const url = `https://transfermarket.p.rapidapi.com/news/list-by-club?id=631&domain=de`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '95645dc66amshd46b97ea279fd35p156efbjsn6378dcd2d7ca',
            'x-rapidapi-host': 'transfermarket.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log("kln",result)
        return result
    } catch (error) {
        console.error(error);
        return error
    }

}
