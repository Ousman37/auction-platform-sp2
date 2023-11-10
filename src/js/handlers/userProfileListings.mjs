import { getUserListings } from "../api/profile/profile.mjs";
import { renderListingsTemplates } from "../templates/listingsTemplate.mjs";

export async function viewUserListings() {
  const listings = await getUserListings();
  const container = document.querySelector("#profile-listings");

  if (Array.isArray(listings)) {
    renderListingsTemplates(listings, container);
  } else {
    console.error("Received data is not an array:", listings);
  }
}
