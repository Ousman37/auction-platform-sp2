import { authFetch } from "../authFetch.mjs";
import { API_SOCIAL_URL } from "../const.mjs";

const action = "/listings";
const method = "post";

export async function createListing(listingData) {
  const createPostURL = API_SOCIAL_URL + action;
  listingData.tags = listingData.tags.split(",").filter(Boolean);
  listingData.media = listingData.media.split(",").filter(Boolean);
  const response = await authFetch(createPostURL, {
    method: method,
    body: JSON.stringify(listingData),
  });

  if (response.ok) {
    return await response.json();
  } else {
    alert("Something went wrong, probably invalid media URL. Please try again");
  }
}

// import { authFetch } from "../authFetch.mjs";
// import { API_SOCIAL_URL } from "../const.mjs";

// const action = "/listings";
// const method = "post";

// export async function createListing(listingData) {
//   const createPostURL = API_SOCIAL_URL + action;

//   // Split and filter tags and media, only if they are not empty
//   if (listingData.tags) {
//     listingData.tags = listingData.tags.split(",").map(tag => tag.trim()).filter(Boolean);
//   }

//   if (listingData.media) {
//     listingData.media = listingData.media.split(",").map(url => url.trim()).filter(Boolean);
//   }

//   // Log the data being sent to the server for verification
//   console.log('Data being sent to create listing:', listingData);

//   try {
//     const response = await authFetch(createPostURL, {
//       method: method,
//       body: JSON.stringify(listingData),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     // Response validation
//     if (response.ok) {
//       const jsonResponse = await response.json();
//       console.log('Listing creation response:', jsonResponse);
//       return jsonResponse;
//     } else {
//       // If the response is not ok, try to parse the error message from the response
//       const errorResponse = await response.json();
//       console.error('Error response:', errorResponse);
//       alert(`Something went wrong: ${errorResponse.message}`);
//     }
//   } catch (error) {
//     console.error('Error creating listing:', error);
//     alert('An unexpected error occurred. Please try again.');
//   }
// }
