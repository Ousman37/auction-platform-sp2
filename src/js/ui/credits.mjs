export function credits(profileData, parentElement) {
  setTimeout(function () {
    // If a parent element is provided, use it as the context for the query selector, otherwise default to document
    const context = parentElement || document
    const credits = context.querySelector('#bidHeader')

    // Ensure the credits element exists
    if (!credits) return

    if (
      typeof profileData.credits === 'undefined' ||
      profileData.credits === null
    ) {
      credits.innerText = 'Login to bid on listing'
    } else {
      credits.innerText = 'Available credits: £' + profileData.credits
    }
  }, 3000)
}

export function showCredits(profileData, parent) {
  credits(profileData, parent) // Now passing the parent parameter to the credits function
}
