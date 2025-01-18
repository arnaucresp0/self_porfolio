// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    // Select all dropdown titles
    const dropdownTitles = document.querySelectorAll(".dropdown-title");
  
    // Loop through each title and add a click event listener
    dropdownTitles.forEach((title) => {
      title.addEventListener("click", () => {
        // Get the associated dropdown content
        const content = title.nextElementSibling;
  
        // Toggle the 'open' class to show or hide the content
        content.classList.toggle("open");
  
        // Change the arrow indicator (optional)
        title.classList.toggle("active");
      });
    });
  });
  