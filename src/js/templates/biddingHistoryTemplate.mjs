export function profileBiddingTemplate(bidding) {
  const biddingHistoryContainer = document.createElement("div");
  const allBiddings = bidding;
  // Ensure the element exists before trying to access it
  const biddingCountContainer = document.querySelector("#bidsOn");

  if (biddingCountContainer) {
    const bidsCount = bidding.length;
    biddingCountContainer.innerText = bidsCount;
  } else {
    // Handle the case where the element doesn't exist
    console.error('biddingCountContainer element not found');
  }

  allBiddings.forEach((fetch) => { // Use forEach for array iteration
    const bids = document.createElement("a");
    const bidsName = document.createElement("strong");
    const bidsAmount = document.createElement("strong");
    const ends = document.createElement("p");

    const timeLeft = fetch.listing.endsAt;
    const fixedTime = timeLeft.substring(0, 10);

    bidsName.innerText = fetch.listing.title;
    bidsAmount.innerText = fetch.amount;
    ends.innerText = fixedTime;

    bids.classList.add(
      "d-flex",
      "justify-content-between",
      "px-2",
      "py-3",
      "bidHistoryElements",
      "text-primary",
      "text-decoration-none"
    );
    bidsName.classList.add("col-4", "d-flex", "justify-content-start", "mb-0");
    bidsAmount.classList.add(
      "col-4",
      "d-flex",
      "justify-content-center",
      "mb-0"
    );
    ends.classList.add("col-4", "d-flex", "justify-content-end", "mb-0");

    bids.setAttribute(
      "href",
      `../../pages/specific/?id=${fetch.listing.id}`
    );

    bids.appendChild(bidsName);
    bids.appendChild(bidsAmount);
    bids.appendChild(ends);
    biddingHistoryContainer.appendChild(bids);
  });

  return biddingHistoryContainer;
}

export function renderBiddingData(bidding, parent) {
  const biddingData = profileBiddingTemplate(bidding);
  // Ensure the parent exists before trying to append to it
  if (parent) {
    parent.append(biddingData);
  } else {
    // Handle the case where the parent doesn't exist
    console.error('Parent element not found');
  }
}
