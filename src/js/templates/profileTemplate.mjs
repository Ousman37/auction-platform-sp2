export function profileDataTemplate(profileData) {
  // Destructure profileData for easier access to properties
  const {
    avatar,
    name,
    credits,
    _count: { listings } = {}, // Provide a default empty object for _count
    wins = [], // Provide a default empty array for wins
  } = profileData

  const profileContainer = document.createElement('div')
  profileContainer.id = 'profile-container'

  const profileImage = document.createElement('img')
  profileImage.id = 'profile-img'
  profileImage.classList.add('profile-img', 'shadow')
  const defaultImg =
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
  profileImage.src = avatar || defaultImg // Use defaultImg if avatar is not provided

  const nameDiv = document.createElement('div')
  nameDiv.id = 'name'
  nameDiv.classList.add('card')
  nameDiv.innerText = `Name: ${name || 'N/A'}` // Provide 'N/A' if name is not provided

  const creditsDiv = document.createElement('div')
  creditsDiv.id = 'credits'
  creditsDiv.classList.add('card')
  creditsDiv.innerText = `Credits: ${credits || 0}` // Provide 0 if credits is not provided

  const activeListingsDiv = document.createElement('div')
  activeListingsDiv.id = 'active-listings'
  activeListingsDiv.classList.add('card')
  activeListingsDiv.innerText = `Active Listings: ${listings || 0}` // Provide 0 if listings is not provided

  const wonDiv = document.createElement('div')
  wonDiv.id = 'won'
  wonDiv.classList.add('card')
  wonDiv.innerText = `Won: ${wins.length || 0}` // Provide 0 if wins is not provided

  // Append elements to the profileContainer
  profileContainer.append(
    profileImage,
    nameDiv,
    creditsDiv,
    activeListingsDiv,
    wonDiv,
  )

  return profileContainer
}

export function renderProfileData(profileData, parent) {
  // Clear the existing contents of the parent element
  parent.innerHTML = ''
  // Append the new profile data
  parent.append(profileDataTemplate(profileData))
}
