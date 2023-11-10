import { regFormListener } from "./handlers/register.mjs";
import { loginFormListener } from "./handlers/login.mjs";
import { viewAllListings } from "./handlers/listings.mjs";
import { searchForListing } from "./handlers/search.mjs";
import { viewSpecificListing } from "./handlers/listing.mjs";
import { viewProfileListings } from "./handlers/profileListings.mjs";
import { viewProfileInfo } from "./handlers/profileInfo.mjs";
import { viewUserListings } from "./handlers/userProfileListings.mjs";
import { updateAvatarURL } from "./handlers/changeAvatar.mjs";
import {
  changeAvatarButton,
  viewForm,
  createListingForm,
} from "./handlers/createListing.mjs";

import { viewProfileImg } from "./handlers/profileImgNav.mjs";
import { showCreditAmount } from "./handlers/displayCredits.mjs";
import { navFix } from "./handlers/nav.mjs";
import { viewBiddingHistory } from "./handlers/biddingHistory.mjs";

// Wait for the DOM to be fully loaded before running any scripts
document.addEventListener("DOMContentLoaded", () => {
  // Normalizes the path for routing
  const normalizePath = (path) => {
    if (path.endsWith("/")) {
      return path + "index.html";
    }
    return path;
  };

  // Defines the functions to run for each route
  const ROUTE_FUNCTIONS = {
    "/index.html": [viewProfileImg, navFix],
    "/pages/login/index.html": [loginFormListener],
    "/pages/register/index.html": [regFormListener],
    "/pages/listings/index.html": [
      viewAllListings,
      searchForListing,
      viewProfileImg,
      navFix,
    ],
    "/pages/specific/index.html": [
      viewSpecificListing,
      viewProfileListings,
      viewProfileImg,
      showCreditAmount,
      navFix,
    ],
    "/pages/profile/index.html": [
      viewProfileInfo,
      viewUserListings,
      updateAvatarURL,
      viewForm,
      createListingForm,
      changeAvatarButton,
      viewProfileImg,
      navFix,
      viewBiddingHistory,
    ],
  };

  // Retrieves the list of functions to run based on the current route
  const functionsToRun =
    ROUTE_FUNCTIONS[normalizePath(window.location.pathname)];

  // Executes each function safely
  if (functionsToRun) {
    functionsToRun.forEach((func) => {
      try {
        func();
      } catch (error) {
        console.error("Error executing function:", error);
      }
    });
  }
});
