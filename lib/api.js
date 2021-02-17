export function getStrapiURL(path = "") {
	return `${
		process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
	}${path}`
}


export async function fetchAPI(path) {
	const requestUrl = getStrapiURL(path);
	const response = await fetch(requestUrl);
	const data = await response.json();
	console.log("Hey kursad, first data come hereeeeeeee")
	console.log({ data })
	return data;
}