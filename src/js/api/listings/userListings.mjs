import { authFetch } from "../authFetch.mjs";
import { API_SOCIAL_URL } from "../const.mjs";

const profiles = "/profiles/";
const listings = "/listings/";

export async function getProfileListings() {
    // Extract the URL parameters
    const params = new URLSearchParams(document.location.search);
    const user = params.get("name");

    // Check if 'name' parameter exists in the URL. If not, throw an error.
    if (!user) {
        throw new Error("Profile name (name parameter) not found in the URL.");
    }

    // Construct the URL to fetch profile listings.
    const ListingsURL = `${API_SOCIAL_URL}${profiles}${user}${listings}?_seller=true&_bids=true&sort=created&sortOrder=desc`;

    // Fetch the listings
    const response = await authFetch(ListingsURL);

    // Check if the response status is not OK (e.g., 404 or 500). If so, throw an error.
    if (!response.ok) {
        throw new Error(`Error fetching listings. Status code: ${response.status}.`);
    }

    return await response.json();
}
