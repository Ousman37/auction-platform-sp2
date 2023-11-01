export function navFix() {
  const login = document.querySelector("#navLogin");
  const logout = document.querySelector("#navLogout");
  const listing = document.querySelector("#navListing");
  const profile = document.querySelector("#navProfile");
  
  // Assuming localStorage.profile is a stringified object or undefined.
  const profileFetch = localStorage.getItem('profile'); // Use getItem to retrieve

  // Check for the existence of each element before trying to use it
  if (profileFetch === null) { // Check for null instead of undefined after getting item
    logout && logout.classList.add("hide");
    listing && listing.classList.add("hide");
    profile && profile.classList.add("hide");
  } else {
    login && login.classList.add("hide");
  }

  // Add event listener if logout exists
  if (logout) {
    logout.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.clear();
      setTimeout(function () {
        window.location.reload(); // Use window.location for clarity
      }, 1);
    });
  }
}
