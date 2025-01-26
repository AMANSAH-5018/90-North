// Collapsible Left Menu
const collapseBtn = document.getElementById("collapseBtn");
const leftMenu = document.getElementById("leftMenu");

collapseBtn.addEventListener("click", () => {
  if (leftMenu.style.width === "50px") {
    leftMenu.style.width = "200px"; // Default width
  } else {
    leftMenu.style.width = "50px"; // Collapsed width
  }
});

// Screen Resize Functionality
function adjustPageWidth() {
  const screenWidth = window.innerWidth;

  if (screenWidth >= 992 && screenWidth <= 1600) {
    document.body.style.transform = "scale(0.9)";
    document.body.style.transformOrigin = "top left";
  } else if (screenWidth >= 700 && screenWidth < 992) {
    document.body.style.transform = "scale(0.8)";
    document.body.style.transformOrigin = "top left";
  } else if (screenWidth >= 600 && screenWidth < 700) {
    document.body.style.transform = "scale(0.75)";
    document.body.style.transformOrigin = "top left";
  } else if (screenWidth <= 600) {
    document.body.style.transform = "scale(0.5)";
    document.body.style.transformOrigin = "top left";
  } else {
    document.body.style.transform = "scale(1)";
  }
}

// Listen for Window Resize
window.addEventListener("resize", adjustPageWidth);

// Initial Adjustment on Page Load
adjustPageWidth();
