import { createListing } from "../api/listings/create.mjs";

function changeAvatarButton() {
  const changeAvatar = document.querySelector(".change-avatar");
  if (changeAvatar) {
    changeAvatar.onclick = function () {
      const formAvatar = document.querySelector("#changeAvatar");
      if (formAvatar) {
        formAvatar.classList.toggle("hide");
      } else {
        console.error("changeAvatar form not found in the DOM");
      }
    };
  } else {
    console.error("changeAvatar button not found in the DOM");
  }
}

function viewForm() {
  const createListingButton = document.querySelector(".create-listing");
  if (createListingButton) {
    createListingButton.onclick = function () {
      const form = document.querySelector("#target");
      const heading = document.querySelector("#listingsHeader");

      if (form && heading) {
        form.classList.toggle("hide");
        heading.classList.toggle("hide");
      } else {
        console.error("Form or header not found in the DOM");
      }
    };
  } else {
    console.error("CreateListingButton not found in the DOM");
  }
}
// async function createListingForm() {
//   const form = document.querySelector("#target");
//   if (form) {
//     form.addEventListener("submit", async (event) => {
//       event.preventDefault();
//       const formData = new FormData(event.target);
//       const listingData = Object.fromEntries(formData.entries());

//       try {
//         // Attempt to create the listing and await the result
//         const response = await createListing(listingData);
        
//         if (response) {
//           // If the listing was created successfully, show a success message
//           toastr.success('Your listing was created successfully!');
          
//           // Reload the page after a short delay
//           setTimeout(function () {
//             location.reload();
//           }, 1000); // A delay of 1000ms (1 second)
//         }
//       } catch (error) {
//         // If there was an error creating the listing, log it and show an error message
//         console.error('Error creating listing:', error);
        
//         // Use the error message from the exception if available, otherwise a default message
//         toastr.error(error.message || 'An unexpected error occurred. Please try again.');
//       }
//     });
//   } else {
//     console.error("Create listing form not found in the DOM");
//   }
// }

function createListingForm() {
  const form = document.querySelector("#target");
  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const listingData = Object.fromEntries(formData.entries());

      await createListing(listingData);

      setTimeout(function () {
        location.reload();
      }, 100); // Changed 1 to 100 for a small delay before reload
    });
  } else {
    console.error("Create listing form not found in the DOM");
  }
}

// // Export the functions
 export { changeAvatarButton, viewForm, createListingForm };
