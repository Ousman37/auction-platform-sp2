export default function displayCountdown(listingData, container, parentContainer) {
  const countDown = new Date(listingData.endsAt).getTime();

  let interval; // Declare the interval here

  const updateCountdownDisplay = () => {
      const now = new Date().getTime();
      const distance = countDown - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
          container.innerHTML = '<small class="text-danger"> Time is up! Auction ended.</small>';
          parentContainer.classList.add("hide");
          clearInterval(interval);
          return;
      }

      let displayText = days + " days " + hours + "h";
      if (days === 1) displayText = days + " day " + hours + "h " + minutes + "m";
      if (days === 0 && hours > 0) displayText = hours + "h " + minutes + "m " + seconds + "s";
      if (days === 0 && hours === 0 && minutes > 0) displayText = minutes + " minutes " + seconds + "s";
      if (days === 0 && hours === 0 && minutes === 0) displayText = seconds + " seconds";

      container.innerText = displayText;

      // Styling
      container.classList.add(days === 0 && hours === 0 ? "text-danger" : "text-green", "fw-bold");
  }

  updateCountdownDisplay();  // Call once immediately to set initial value
  interval = setInterval(updateCountdownDisplay, 1000);  // Initialize the interval here
}
