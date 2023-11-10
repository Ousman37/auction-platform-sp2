export function profileImgDataTemplate(profileData) {
  // Create a container for the profile image
  const profileImgContainer = document.createElement('div')
  profileImgContainer.className = 'profile-img-container' // Use class instead of id for styling

  // Create an image element
  const profileImage = document.createElement('img')
  profileImage.className = 'profile-img' // Add class for styling

  // Decide the image source
  const defaultImg =
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
  const imgSrc = profileData.avatar || defaultImg

  // Set attributes for the image
  profileImage.setAttribute('src', imgSrc)
  profileImage.setAttribute('alt', 'Profile Avatar') // Add alt text for accessibility

  // Append the image to the container
  profileImgContainer.appendChild(profileImage)

  return profileImgContainer
}

export function renderProfileImgData(profileData, parent) {
  if (parent) {
    // Clear the previous content
    parent.innerHTML = ''

    // Append the profile image data to the parent element
    parent.appendChild(profileImgDataTemplate(profileData))
  } else {
    console.error('Parent element not found in the DOM.')
  }
}
