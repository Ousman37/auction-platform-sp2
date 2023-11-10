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
