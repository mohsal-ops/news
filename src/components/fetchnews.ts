

export default async function NewsFetcher({ searchterm }: { searchterm?: string | null }) {
    const url = `https://headlines.recon.us.com/api/v1/?action=history&search=headline&value=${searchterm}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'ac8bce4f43mshf64d3db953658f4p1237fdjsn26b4b1b0a719',
            'x-rapidapi-host': 'smart-curator.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result
    } catch (error) {
        console.error(error);
        return error
    }

}
export async function Randomnews() {
    const url = `https://headlines.recon.us.com/api/v1/?action=history&search=headline&value=trump`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'ac8bce4f43mshf64d3db953658f4p1237fdjsn26b4b1b0a719',
            'x-rapidapi-host': 'smart-curator.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result
    } catch (error) {
        console.error(error);
        return error
    }

}
