class Helper {
	static baseURL() {
		return "https://api.foursquare.com/v2";
	}
	static auth() {
		const keys = {
			client_id: "J2CDRPMXF0G43B2MWD1HDAJWGX54OLL0PG4JQ425BTVM02ZY",
			client_secret: "CEXSIO0PJIUBMWZSE4JIQKZH50GRSQDWT3UU2MYEAI2ONE2D",
			v: "20181113"
		};
		return Object.keys(keys)
			.map(key => `${key}=${keys[key]}`).join("&");
	}
	static urlBuilder(urlParams) {
		if (!urlParams) {
			return "";
		};
		return Object.keys(urlParams).map((key) => `${key}=${urlParams[key]}`).join("&");
	};
	static headers() {
		return {
			Accept: "application/json"
		}
	}
	static simpleFetch(endPoint, method, urlParams) {
		let requestData = {
			method,
			headers: Helper.headers()
		};
		return fetch(`${Helper.baseURL()}${endPoint}?${Helper.auth()}&${Helper.urlBuilder(urlParams)}`)
		.then(resp => resp.json());
	}
}

export default class FourSquareAPI {
	static search(urlParams) {
		return Helper.simpleFetch("/venues/search", "GET", urlParams);
	}
	static getVenueDetails(VENUE_ID) {
		return Helper.simpleFetch(`/venues/${VENUE_ID}`, "GET");
	}
	static getVenuePhotos(VENUE_ID) {
		return Helper.simpleFetch(`/venues/${VENUE_ID}/photos`, "GET");
	}
}