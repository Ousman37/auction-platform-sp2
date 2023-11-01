import * as methods from "../api/profile/profile.mjs";
import { renderProfileImgData } from "../templates/navImgTemplate.mjs";

export async function viewProfileImg() {
  try {
    const userData = await methods.getProfile();
    renderProfileImgData(userData);
  } catch (error) {
    console.error('Error fetching user profile:', error);
  }
}

