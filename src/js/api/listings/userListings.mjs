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

    try {
        // Fetch the listings
        const response = await authFetch(ListingsURL);

        // Check if the response status is OK (200 range)
        if (response.ok) {
            // If response is OK, return the JSON body
            return await response.json();
        } else {
            // If response is not OK, try to read the error message from the response
            const errorBody = await response.text(); // or response.json() if your API returns JSON errors
            throw new Error(`Error fetching listings. Status code: ${response.status}, Error body: ${errorBody}`);
        }
    } catch (error) {
        // Log the error to the console and re-throw it
        console.error('Error in getProfileListings:', error);
        throw error;
    }
}

