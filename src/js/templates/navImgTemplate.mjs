export function profileImgDataTemplate(profileData) {
  // Create a container for the profile image
  const profileImgContainer = document.createElement("div");
  profileImgContainer.setAttribute('id', 'navImg'); // Give an id to your new container if needed

  // Create an image element
  const profileImage = document.createElement("img");

  // Decide the image source
  const defaultImg = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";
  const imgSrc = profileData.avatar || defaultImg;

  // Set attributes for the image
  profileImage.setAttribute("src", imgSrc);

  // Append the image to the container
  profileImgContainer.appendChild(profileImage);

  return profileImgContainer;
}

export function renderProfileImgData(profileData, parent) {
  if (parent) {
    // Append the profile image data to the parent element
    parent.append(profileImgDataTemplate(profileData));
  } else {
    console.error('Parent element not found in the DOM.');
  }
}
