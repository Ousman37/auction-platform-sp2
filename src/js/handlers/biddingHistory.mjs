import { getProfileBiddingHistory } from '../api/profile/profile.mjs'
import { renderBiddingData } from '../templates/biddingHistoryTemplate.mjs'

export async function viewBiddingHistory() {
  const userData = await getProfileBiddingHistory()

  // Make sure to pass the selector as a string to the renderBiddingData function.
  if (Array.isArray(userData)) {
    renderBiddingData(userData, '#bidListings')
  } else {
    console.error('Received data is not an array:', userData)
  }
}
