export function credits(profileData) {
  setTimeout(function () {
    const credits = document.querySelector("#bidHeader");
    
    // Ensure the credits element exists
    if (!credits) return;

    if (typeof profileData.credits === 'undefined' || profileData.credits === null) {
      credits.innerText = "Login to bid on listing";
    } else {
      credits.innerText = "Available credits: £" + profileData.credits;
    }
  }, 3000);
}

export function showCredits(profileData, parent) {
  credits(profileData);  // since the credits function doesn't actually return anything
}
