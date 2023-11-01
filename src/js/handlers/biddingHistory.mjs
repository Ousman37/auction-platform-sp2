import { getProfileBiddingHistory } from "../api/profile/profile.mjs";
import { renderBiddingData } from "../templates/biddingHistoryTemplate.mjs";

export async function viewBiddingHistory() {
  const userData = await getProfileBiddingHistory();
  const container = document.querySelector("#bidListings");
  
  if (Array.isArray(userData)) {
    renderBiddingData(userData, container);
  } else {
    console.error("Received data is not an array:", userData);
  }
}

