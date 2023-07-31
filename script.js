 // Get the name element
 const nameElement = document.getElementById("name");

 // Animation duration in milliseconds (should match the animation duration in CSS)
 const animationDuration = 2000;

 // Add the typewriter animation class
 nameElement.classList.add("typewriter");

 // Remove the border-right after the animation is complete
 setTimeout(() => {
   nameElement.style.borderRight = "none";
 }, animationDuration);
  function toggleContent(contentId) {
    const allContents = document.getElementsByClassName("content");
    for (let i = 0; i < allContents.length; i++) {
      const content = allContents[i];
      if (content.id === contentId) {
        content.classList.toggle('show');
      } else {
        content.classList.remove('show');
      }
    }
  }

  // Function to handle content toggling
function toggleContent(sectionId) {
    const section = document.getElementById(sectionId);
    section.classList.toggle('show');
  }

 
  