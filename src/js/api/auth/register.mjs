import { API_SOCIAL_URL } from "../const.mjs";

const path = "/auth/register";
const method = "post";

export async function register(profile) {
  const toastr = window.toastr;

  if (toastr) {
    toastr.options = {
      closeButton: true,
      debug: false,
      newestOnTop: false,
      progressBar: true,
      positionClass: "toast-bottom-right",
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

  const registerURL = API_SOCIAL_URL + path;
  const body = JSON.stringify(profile);

  try {
    const response = await fetch(registerURL, {
      headers: {
        "Content-Type": "application/json",
      },
      method,
      body,
    });

    const result = await response.json();

    if (response.ok) {
      toastr.success("You registered successfully! Redirecting to login...");
      setTimeout(function () {
        window.location.href = `../../pages/login`;
      }, 1000);
    } else {
      const errorMessage = result.message || "The input values seem to be invalid. Please try again.";
      if (result.errors && result.errors.length) {
        result.errors.forEach(err => {
          console.error("Server Error:", err);
          toastr.error(err);
        });
      } else {
        toastr.error(errorMessage);
      }
    }

    return result;
  } catch (error) {
    console.error("Error in registration:", error);
    toastr.error('An error occurred during registration. Please try again later.');
  }
}

