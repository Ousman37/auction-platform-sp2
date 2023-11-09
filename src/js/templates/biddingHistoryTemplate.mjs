// biddingHistoryTemplate.mjs

export function profileBiddingTemplate(bidding) {
  const biddingHistoryContainer = document.createElement("div");
  const biddingCountContainer = document.querySelector("#bidsOn");

  // Check for biddingCountContainer and update its innerText
  if (biddingCountContainer) {
    biddingCountContainer.innerText = bidding.length.toString();
  } else {
    console.error('Element with ID "bidsOn" not found');
  }

  // Iterate over all biddings using forEach
  bidding.forEach((bidItem) => {
    const bids = document.createElement("a");
    const bidsName = document.createElement("strong");
    const bidsAmount = document.createElement("strong");
    const ends = document.createElement("p");

    const timeLeft = bidItem.listing.endsAt;
    const fixedTime = timeLeft.substring(0, 10);

    bidsName.innerText = bidItem.listing.title;
    bidsAmount.innerText = bidItem.amount;
    ends.innerText = fixedTime;

    // Apply classes to the created elements
    bids.classList.add("d-flex", "justify-content-between", "px-2", "py-3", "bidHistoryElements", "text-primary", "text-decoration-none");
    bidsName.classList.add("col-4", "d-flex", "justify-content-start", "mb-0");
    bidsAmount.classList.add("col-4", "d-flex", "justify-content-center", "mb-0");
    ends.classList.add("col-4", "d-flex", "justify-content-end", "mb-0");

    // Set the href attribute for the bids anchor tag
    bids.setAttribute("href", `/Semester-Project-2/pages/specific/?id=${bidItem.listing.id}`);

    // Append child elements to the bids anchor tag
    bids.appendChild(bidsName);
    bids.appendChild(bidsAmount);
    bids.appendChild(ends);

    // Append the bids anchor tag to the biddingHistoryContainer
    biddingHistoryContainer.appendChild(bids);
  });

  return biddingHistoryContainer;
}

export function renderBiddingData(bidding, selector) {
  // Ensure DOM content is loaded
  document.addEventListener('DOMContentLoaded', () => {
    const parent = document.querySelector(selector);
    if (parent) {
      parent.innerHTML = ''; // Clear previous content
      parent.append(profileBiddingTemplate(bidding));
    } else {
      console.error(`The selector "${selector}" did not match any element.`);
    }
  });
}
