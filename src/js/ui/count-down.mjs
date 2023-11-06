export default function displayCountdown(listingData, container, parentContainer) {
  // Verify that listingData.endsAt is a valid date
  if (isNaN(new Date(listingData.endsAt).getTime())) {
    console.error('Invalid date format for listingData.endsAt');
    return;
  }

  const countDown = new Date(listingData.endsAt).getTime();
  let interval; // Declare the interval here

  const updateCountdownDisplay = () => {
      const now = new Date().getTime();
      const distance = countDown - now;

      // Check if the container still exists in the DOM
      if (!document.body.contains(container)) {
        clearInterval(interval);
        return;
      }

      if (distance < 0) {
          container.innerHTML = '<small class="text-danger"> Time is up! Auction ended.</small>';
          if (parentContainer) {
            parentContainer.classList.add("hide");
          }
          clearInterval(interval);
          return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      let displayText = `${days} day${days === 1 ? '' : 's'} ${hours}h `;
      if (days === 0 && hours > 0) displayText = `${hours}h ${minutes}m ${seconds}s`;
      if (days === 0 && hours === 0 && minutes > 0) displayText = `${minutes}m ${seconds}s`;
      if (days === 0 && hours === 0 && minutes === 0) displayText = `${seconds}s`;

      container.innerText = displayText;

      // Update styling
      container.className = ''; // Reset classes
      container.classList.add("fw-bold");
      if (days === 0 && hours === 0) container.classList.add("text-danger");
      else container.classList.add("text-success");
  }

  updateCountdownDisplay();  // Call once immediately to set initial value
  interval = setInterval(updateCountdownDisplay, 1000);  // Initialize the interval here
}
