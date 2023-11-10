import * as methods from "../api/listings/listingFetchHandlers.mjs";

import { renderSpecificListingTemplate } from "../templates/listingTemplate.mjs";

const loader = document.querySelector(".loading_icon");

export async function viewSpecificListing() {
  const params = new URLSearchParams(document.location.search);
  const id = params.get("id");

  // Check if the id is present and not null before proceeding
  if (!id) {
    console.error("No listing ID provided in the URL or it's null.");
    loader.classList.add("hide"); // Hide loader even if there's an error

    // Consider showing an error message on the front end
    alert("Invalid Listing ID provided. Please check the URL and try again.");
    return; // Exit the function early
  }

  try {
    const listing = await methods.getListing(id);
    const container = document.querySelector("#specificListing");

    // If renderSpecificListingTemplate is asynchronous, await it
    renderSpecificListingTemplate(listing, container);
  } catch (error) {
    console.error("Error fetching listing:", error.message);

    // Consider showing a user-friendly error message
    alert(
      "An error occurred while fetching the listing. Please try again later.",
    );
  } finally {
    loader.classList.add("hide"); // Ensure loader is hidden after operations
  }
}
