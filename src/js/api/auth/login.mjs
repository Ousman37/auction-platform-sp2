import { API_SOCIAL_URL } from "../const.mjs";
import * as storage from "../../storage/index.mjs";

const path = "/auth/login";
const method = "post";

export async function login(profile) {
  const toastr = window.toastr;

  if (toastr) {
    toastr.options = {
      closeButton: true,
      debug: false,
      newestOnTop: false,
      progressBar: true,
      positionClass: "toast-top-center",
      preventDuplicates: true,
      showDuration: "300",
      hideDuration: "1000",
      timeOut: "5000",
      extendedTimeOut: "1000",
      showEasing: "swing",
      hideEasing: "linear",
      showMethod: "fadeIn",
      hideMethod: "fadeOut"
    };
  } else {
    console.error("Toastr is not available or not properly initialized.");
    return;
  }

  const loginURL = API_SOCIAL_URL + path;
  const body = JSON.stringify(profile);

  try {
    const response = await fetch(loginURL, {
      headers: {
        "Content-Type": "application/json",
      },
      method,
      body,
    });

    if (response.ok) {
      const { accessToken, ...user } = await response.json();
      storage.save("token", accessToken);
      storage.save("profile", user);

      toastr.success("You logged in successfully! Redirecting...");
      setTimeout(function () {
        window.location.href = `../../pages/listings`;
      }, 1000);
    } else {
      // Use toastr error for error messages
      toastr.error('Invalid email or password, try again.');
    }
  } catch (error) {
    // Handle any other errors like network issues
    toastr.error('An error occurred. Please try again later.');
  }
}

