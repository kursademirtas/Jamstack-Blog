export function getStrapiURL(path = "") {
	return `${
		process.env.NEXT_PUBLIC_STRAPI_API_URL || "https://blog-next-api.herokuapp.com"
	}${path}`
}

export async function fetchAPI(path) {
	const requestUrl = getStrapiURL(path);
	const response = await fetch(requestUrl);
	const data = await response.json();
	return data;
}